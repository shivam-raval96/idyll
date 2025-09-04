<!-- Interactive Components Section -->
<h2 id="interactive-components">Interactive Components</h2>

<p>
	Here's how you can add interactive elements. The Distill template provides 
	special components for figures, equations, and citations. These components
	are designed to enhance the reader's understanding through direct manipulation.
</p>

<d-figure id="example-figure">
	<figure>
		<div class="figure-content">
			<p>This is where you'd put your interactive visualization or chart.</p>
			<button class="distill-button" on:click={() => alert('Interactive element clicked!')}>
				Click me!
			</button>
		</div>
		<figcaption>
			An example of an interactive figure. You can replace this with any Svelte component.
		</figcaption>
	</figure>
</d-figure>
