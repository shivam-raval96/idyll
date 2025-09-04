<script>
	import { onMount, onDestroy } from 'svelte';
	
	let container;
	let scene, camera, renderer, wireframe;
	let mouseX = 0, mouseY = 0;
	let targetRotationX = 0, targetRotationY = 0;
	let currentRotationX = 0, currentRotationY = 0;
	let isMouseDown = false;
	let points = [];
	let raycaster, mouse, tooltip;
	let animationId;
	let geometry, vertices;
	const gridSize = 50;
	const spacing = 0.5;

	onMount(async () => {
		// Wait for Three.js to be available
		await waitForThreeJS();
		init();
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (renderer) {
			renderer.dispose();
		}
	});

	async function waitForThreeJS() {
		// Wait for Three.js to be loaded
		let attempts = 0;
		const maxAttempts = 50; // 5 seconds max wait
		
		while (typeof THREE === 'undefined' && attempts < maxAttempts) {
			await new Promise(resolve => setTimeout(resolve, 100));
			attempts++;
		}
		
		if (typeof THREE === 'undefined') {
			console.error('Three.js failed to load after 5 seconds');
			// Try to load Three.js manually
			await loadThreeJSManually();
		}
	}

	async function loadThreeJSManually() {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
			script.onload = () => {
				console.log('Three.js loaded manually');
				resolve();
			};
			script.onerror = () => {
				console.error('Failed to load Three.js manually');
				reject();
			};
			document.head.appendChild(script);
		});
	}

	function init() {
		// Check if Three.js is available
		if (typeof THREE === 'undefined') {
			console.error('Three.js not loaded');
			return;
		}

		console.log('Initializing 3D scene...');
		console.log('Container dimensions:', container.clientWidth, 'x', container.clientHeight);

		// Scene setup
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		// Add basic lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
		scene.add(ambientLight);
		
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight.position.set(10, 10, 5);
		scene.add(directionalLight);

		console.log('Scene, camera, renderer, and lighting created');

		// Create the wireframe landscape
		createLandscape();
		
		// Create points on the surface (AFTER landscape is created)
		createSurfacePoints();

		// Camera position - zoomed in more
		camera.position.set(0, 8, 12);
		camera.lookAt(0, 0, 0);

		// Setup raycaster for tooltips
		raycaster = new THREE.Raycaster();
		mouse = new THREE.Vector2();

		// Event listeners
		setupEventListeners();

		// Start animation
		animate();
		
		console.log('Initialization complete');
	}

	function createLandscape() {
		try {
			geometry = new THREE.PlaneGeometry(
				gridSize * spacing, 
				gridSize * spacing, 
				gridSize - 1, 
				gridSize - 1
			);

			// Modify vertices to create waves and peaks
			vertices = geometry.attributes.position.array;
			
			for (let i = 0; i < vertices.length; i += 3) {
				const x = vertices[i];
				const z = vertices[i + 1];
				
				// Create multiple wave patterns for interesting terrain
				const wave1 = Math.sin(x * 0.3) * Math.cos(z * 0.3) * 3;
				const wave2 = Math.sin(x * 0.15 + z * 0.15) * 2;
				const wave3 = Math.cos(x * 0.6) * Math.sin(z * 0.4) * 1.5;
				const noise = (Math.random() - 0.5) * 0.5;
				
				vertices[i + 2] = wave1 + wave2 + wave3 + noise;
			}

			geometry.attributes.position.needsUpdate = true;
			geometry.computeVertexNormals();

			// Create wireframe material
			const material = new THREE.MeshBasicMaterial({
				color: 0x013d4f,
				wireframe: true,
				transparent: true,
				opacity: 0.1
			});

			wireframe = new THREE.Mesh(geometry, material);
			wireframe.rotation.x = -Math.PI / 2;
			scene.add(wireframe);
			
			console.log('Landscape created successfully');
		} catch (error) {
			console.error('Error creating landscape:', error);
		}
	}

	function createSurfacePoints() {
		try {
			// Get mesh vertices after terrain generation
			const positionArray = geometry.attributes.position.array;
			const totalVertices = positionArray.length / 3;
			
			// Calculate the grid dimensions
			const gridWidth = gridSize;
			const gridHeight = gridSize;
			
			// Analyze heights to find peaks and valleys
			const vertexHeights = [];
			for (let i = 0; i < totalVertices; i++) {
				const vertexOffset = i * 3;
				const height = positionArray[vertexOffset + 2];
				vertexHeights.push({ index: i, height: height });
			}
			
			// Sort by height to find peaks and valleys
			const sortedHeights = [...vertexHeights].sort((a, b) => a.height - b.height);
			const minHeight = sortedHeights[0].height;
			const maxHeight = sortedHeights[sortedHeights.length - 1].height;
			const heightRange = maxHeight - minHeight;
			
			// Define peak and valley thresholds
			const peakThreshold = maxHeight - heightRange * 0.15; // Top 15%
			const valleyThreshold = minHeight + heightRange * 0.15; // Bottom 15%
			
			// Find peak and valley vertices
			const peakVertices = vertexHeights.filter(v => v.height >= peakThreshold);
			const valleyVertices = vertexHeights.filter(v => v.height <= valleyThreshold);
			const otherVertices = vertexHeights.filter(v => v.height > valleyThreshold && v.height < peakThreshold);
			
			console.log(`Found ${peakVertices.length} peaks, ${valleyVertices.length} valleys, ${otherVertices.length} other vertices`);
			
			// Create a set to track which vertices we've used
			const usedVertices = new Set();
			
			// Create 100 points with strategic distribution
			for (let i = 0; i < 100; i++) {
				let vertexIndex;
				let attempts = 0;
				
				do {
					// Strategic point placement
					if (i < 40) {
						// 40% of points clustered around peaks
						const randomPeak = peakVertices[Math.floor(Math.random() * peakVertices.length)];
						// Add some randomness around the peak
						const gridX = randomPeak.index % gridWidth;
						const gridY = Math.floor(randomPeak.index / gridWidth);
						const offsetX = Math.floor((Math.random() - 0.5) * 6);
						const offsetY = Math.floor((Math.random() - 0.5) * 6);
						const newX = Math.max(0, Math.min(gridWidth - 1, gridX + offsetX));
						const newY = Math.max(0, Math.min(gridHeight - 1, gridY + offsetY));
						vertexIndex = newY * gridWidth + newX;
					} else if (i < 70) {
						// 30% of points clustered around valleys
						const randomValley = valleyVertices[Math.floor(Math.random() * valleyVertices.length)];
						// Add some randomness around the valley
						const gridX = randomValley.index % gridWidth;
						const gridY = Math.floor(randomValley.index / gridWidth);
						const offsetX = Math.floor((Math.random() - 0.5) * 6);
						const offsetY = Math.floor((Math.random() - 0.5) * 6);
						const newX = Math.max(0, Math.min(gridWidth - 1, gridX + offsetX));
						const newY = Math.max(0, Math.min(gridHeight - 1, gridY + offsetY));
						vertexIndex = newY * gridWidth + newX;
					} else {
						// 30% of points spread out in other areas
						const randomOther = otherVertices[Math.floor(Math.random() * otherVertices.length)];
						vertexIndex = randomOther.index;
					}
					
					// Ensure vertex index is valid
					vertexIndex = Math.max(0, Math.min(totalVertices - 1, vertexIndex));
					attempts++;
				} while (usedVertices.has(vertexIndex) && attempts < 20);
				
				// If we couldn't find an unused vertex, just use a random one
				if (attempts >= 20) {
					vertexIndex = Math.floor(Math.random() * totalVertices);
				}
				
				usedVertices.add(vertexIndex);
				
				// Get the actual vertex position from the mesh
				const vertexOffset = vertexIndex * 3;
				const x = positionArray[vertexOffset];
				const y = positionArray[vertexOffset + 1];
				const z = positionArray[vertexOffset + 2];
				
				// Create point geometry
				const pointGeometry = new THREE.SphereGeometry(0.12, 8, 8);
				const pointMaterial = new THREE.MeshBasicMaterial({
					color: 0xee627a,
					transparent: true,
					opacity: 0.9
				});
				
				const point = new THREE.Mesh(pointGeometry, pointMaterial);
				point.position.set(x, y, z);
				
				// Store point data for tooltips
				point.userData = {
					id: points.length,
					x: x.toFixed(2),
					z: y.toFixed(2),
					height: z.toFixed(2),
					vertexIndex: vertexIndex
				};
				
				points.push(point);
				// Add points as children of the wireframe so they move with it
				wireframe.add(point);
			}
			
			console.log('Surface points created successfully:', points.length);
			console.log(`Distribution: 40 peaks, 30 valleys, 30 other areas`);
		} catch (error) {
			console.error('Error creating surface points:', error);
		}
	}
	function setupEventListeners() {
		// Mouse controls for rotation
		renderer.domElement.addEventListener('mousedown', onMouseDown);
		renderer.domElement.addEventListener('mousemove', onMouseMove);
		renderer.domElement.addEventListener('mouseup', onMouseUp);
		renderer.domElement.addEventListener('mousemove', onMouseMoveForTooltip);

		// Touch controls
		renderer.domElement.addEventListener('touchstart', onTouchStart);
		renderer.domElement.addEventListener('touchmove', onTouchMove);
		renderer.domElement.addEventListener('touchend', onTouchEnd);

		// Window resize
		window.addEventListener('resize', onWindowResize);
	}

	function onMouseMoveForTooltip(event) {
		// Calculate mouse position in normalized device coordinates
		const rect = container.getBoundingClientRect();
		mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
		mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

		// Update the picking ray with the camera and mouse position
		raycaster.setFromCamera(mouse, camera);

		// Calculate objects intersecting the picking ray
		// Check against the points array directly
		const intersects = raycaster.intersectObjects(points);

		if (intersects.length > 0) {
			// Get the first intersection (closest point)
			const pointIntersection = intersects[0];
			
			// Show tooltip for the point
			showTooltip(pointIntersection.object, event.clientX, event.clientY);
		} else {
			// Hide tooltip
			hideTooltip();
		}
	}

	function showTooltip(point, mouseX, mouseY) {
		// Remove existing tooltip
		hideTooltip();
		
		// Create tooltip
		tooltip = document.createElement('div');
		tooltip.className = 'point-tooltip';
		tooltip.innerHTML = `
			<div class="tooltip-content">
				<div class="tooltip-header">
					<strong>Data Point ${point.userData.id + 1}</strong>
				</div>
				<div class="tooltip-body">
					<div class="tooltip-row">
						<span class="tooltip-label">X Position:</span>
						<span class="tooltip-value">${point.userData.x}</span>
					</div>
					<div class="tooltip-row">
						<span class="tooltip-label">Z Position:</span>
						<span class="tooltip-value">${point.userData.z}</span>
					</div>
					<div class="tooltip-row">
						<span class="tooltip-label">Height:</span>
						<span class="tooltip-value">${point.userData.height}</span>
					</div>
					<div class="tooltip-row">
						<span class="tooltip-label">Vertex:</span>
						<span class="tooltip-value">#${point.userData.vertexIndex}</span>
					</div>
				</div>
			</div>
		`;
		
		// Position tooltip with better positioning
		const tooltipWidth = 200; // Approximate tooltip width
		const tooltipHeight = 140; // Approximate tooltip height
		
		let left = mouseX + 15;
		let top = mouseY - tooltipHeight - 10;
		
		// Adjust if tooltip would go off screen
		if (left + tooltipWidth > window.innerWidth) {
			left = mouseX - tooltipWidth - 15;
		}
		if (top < 0) {
			top = mouseY + 15;
		}
		
		tooltip.style.left = left + 'px';
		tooltip.style.top = top + 'px';
		
		// Add to container
		container.appendChild(tooltip);
	}

	function hideTooltip() {
		if (tooltip) {
			tooltip.remove();
			tooltip = null;
		}
	}

	function onMouseDown(event) {
		isMouseDown = true;
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	function onMouseMove(event) {
		if (isMouseDown) {
			const deltaX = event.clientX - mouseX;
			const deltaY = event.clientY - mouseY;
			
			targetRotationY += deltaX * 0.005;
			targetRotationX += deltaY * 0.005;
			
			// Limit vertical rotation
			targetRotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, targetRotationX));
			
			mouseX = event.clientX;
			mouseY = event.clientY;
		}
	}

	function onMouseUp() {
		isMouseDown = false;
	}

	function onTouchStart(event) {
		if (event.touches.length === 1) {
			mouseX = event.touches[0].clientX;
			mouseY = event.touches[0].clientY;
			isMouseDown = true;
		}
	}

	function onTouchMove(event) {
		if (event.touches.length === 1 && isMouseDown) {
			const deltaX = event.touches[0].clientX - mouseX;
			const deltaY = event.touches[0].clientY - mouseY;
			
			targetRotationY += deltaX * 0.005;
			targetRotationX += deltaY * 0.005;
			
			targetRotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, targetRotationX));
			
			mouseX = event.touches[0].clientX;
			mouseY = event.touches[0].clientY;
		}
	}

	function onTouchEnd() {
		isMouseDown = false;
	}

	function onWindowResize() {
		if (container && camera && renderer) {
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		}
	}

	function animate() {
		animationId = requestAnimationFrame(animate);

		// Smooth rotation interpolation
		currentRotationX += (targetRotationX - currentRotationX) * 0.05;
		currentRotationY += (targetRotationY - currentRotationY) * 0.05;

		// Apply rotations to the scene
		wireframe.rotation.z = currentRotationY;
		wireframe.rotation.x = -Math.PI / 2 + currentRotationX;

		// Points now move automatically with the wireframe since they're children

		// Subtle camera movement
		const time = Date.now() * 0.0005;
		camera.position.y = 8 + Math.sin(time) * 1;

		renderer.render(scene, camera);
	}
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</svelte:head>

<div class="hero-container">
	<div class="info-overlay">
		<div class="title">A low dimensional manifold</div>
		<div class="instructions">LLM activations live on curves surfaces like this surface.</div>
		<div class="status">TBD</div>
	</div>
	<div class="visual-container" bind:this={container}>
		{#if typeof THREE === 'undefined'}
			<div class="loading-message">Loading 3D visualization...</div>
		{/if}
	</div>
</div>

<style>
	.hero-container {
		position: relative;
		width: 100%;
		height: 60vh;
		min-height: 400px;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		border-radius: 8px;
		overflow: hidden;
		margin: 2rem 0;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}
	
	.visual-container {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.info-overlay {
		position: absolute;
		top: 20px;
		left: 20px;
		color: #013d4f;
		font-size: 14px;
		z-index: 100;
		background: rgba(255, 255, 255, 0.9);
		padding: 15px 20px;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		border-left: 4px solid #ee627a;
	}
	
	.title {
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 5px;
		color: #013d4f;
	}
	
	.instructions {
		font-size: 12px;
		color: #666;
		font-weight: 400;
		margin-bottom: 3px;
	}
	
	.status {
		font-size: 10px;
		color: #28a745;
		font-weight: 500;
		font-style: italic;
	}
	
	/* Point tooltip styles */
	:global(.point-tooltip) {
		position: absolute;
		z-index: 1000;
		pointer-events: none;
	}
	
	:global(.tooltip-content) {
		background: rgba(1, 61, 79, 0.95);
		color: white;
		padding: 12px 16px;
		border-radius: 8px;
		font-size: 13px;
		line-height: 1.4;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
		border-left: 4px solid #ee627a;
		min-width: 180px;
		backdrop-filter: blur(10px);
	}
	
	:global(.tooltip-header) {
		margin-bottom: 8px;
		padding-bottom: 6px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		font-size: 14px;
		color: #ee627a;
	}
	
	:global(.tooltip-body) {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	
	:global(.tooltip-row) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	:global(.tooltip-label) {
		color: rgba(255, 255, 255, 0.8);
		font-size: 12px;
	}
	
	:global(.tooltip-value) {
		color: white;
		font-weight: 600;
		font-size: 12px;
		font-family: 'Courier New', monospace;
	}

	/* Loading message styles */
	:global(.loading-message) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #013d4f;
		font-size: 24px;
		font-weight: 600;
		text-align: center;
		z-index: 1000;
		background: rgba(255, 255, 255, 0.9);
		padding: 20px 30px;
		border-radius: 10px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.hero-container {
			height: 50vh;
			min-height: 300px;
		}
		
		.info-overlay {
			left: 15px;
			top: 15px;
			padding: 12px 16px;
		}
		
		.title {
			font-size: 14px;
		}
		
		.instructions {
			font-size: 11px;
		}
		
		.status {
			font-size: 9px;
		}
	}
</style>