import{f as L,a as S,w as vt}from"../chunks/C8lB4Yry.js";import{i as Lt}from"../chunks/B-eWrcdN.js";import{O as se,b as le,s as ft,h as I,K as ce,a as de,v as y,a9 as he,r as fe,c as ue,d as Ht,e as J,i as U,a0 as pe,f as Dt,g as Yt,p as me,ao as ut,a4 as Nt,N as pt,ap as ve,ae as K,aq as Rt,ar as ge,as as be,a3 as we,at as xe,au as ye,av as _e,aw as Ee,Z as Me,W as Te,P as zt,Q as At,ax as ke,ay as He,az as Re,R as ze,aA as Ae,z as $t,I as Pt,aB as Xt,B as It,C as Ot,ad as B,D as N,G as E,F as C,A as Z,aC as q,aD as Ie}from"../chunks/CItAwhV8.js";import{a as gt,s as Ce,e as Se}from"../chunks/C1ssvtQe.js";import{b as jt,i as Le}from"../chunks/DNs2nGif.js";function De(i,t){return t}function Ye(i,t,e,a){for(var r=[],o=t.length,l=0;l<o;l++)be(t[l].e,r,!0);var h=o>0&&r.length===0&&e!==null;if(h){var m=e.parentNode;we(m),m.append(e),a.clear(),O(i,t[0].prev,t[o-1].next)}xe(r,()=>{for(var x=0;x<o;x++){var s=t[x];h||(a.delete(s.k),O(i,s.prev,s.next)),ye(s.e,!h)}})}function Ne(i,t,e,a,r,o=null){var l=i,h={flags:t,items:new Map,first:null};{var m=i;l=I?ft(ce(m)):m.appendChild(se())}I&&de();var x=null,s=!1,_=he(()=>{var d=e();return Te(d)?d:d==null?[]:Nt(d)});le(()=>{var d=y(_),p=d.length;if(s&&p===0)return;s=p===0;let v=!1;if(I){var R=fe(l)===ue;R!==(p===0)&&(l=Ht(),ft(l),J(!1),v=!0)}if(I){for(var k=null,f,M=0;M<p;M++){if(U.nodeType===8&&U.data===pe){l=U,v=!0,J(!1);break}var w=d[M],g=a(w,M);f=Wt(U,h,k,null,w,g,M,r,t,e),h.items.set(g,f),k=f}p>0&&ft(Ht())}I||$e(d,h,l,r,t,a,e),o!==null&&(p===0?x?Dt(x):x=Yt(()=>o(l)):x!==null&&me(x,()=>{x=null})),v&&J(!0),y(_)}),I&&(l=U)}function $e(i,t,e,a,r,o,l){var h=i.length,m=t.items,x=t.first,s=x,_,d=null,p=[],v=[],R,k,f,M;for(M=0;M<h;M+=1){if(R=i[M],k=o(R,M),f=m.get(k),f===void 0){var w=s?s.e.nodes_start:e;d=Wt(w,t,d,d===null?t.first:d.next,R,k,M,a,r,l),m.set(k,d),p=[],v=[],s=d.next;continue}if(Pe(f,R,M),f.e.f&ut&&Dt(f.e),f!==s){if(_!==void 0&&_.has(f)){if(p.length<v.length){var g=v[0],c;d=g.prev;var H=p[0],z=p[p.length-1];for(c=0;c<p.length;c+=1)Ct(p[c],g,e);for(c=0;c<v.length;c+=1)_.delete(v[c]);O(t,H.prev,z.next),O(t,d,H),O(t,z,g),s=g,d=z,M-=1,p=[],v=[]}else _.delete(f),Ct(f,s,e),O(t,f.prev,f.next),O(t,f,d===null?t.first:d.next),O(t,d,f),d=f;continue}for(p=[],v=[];s!==null&&s.k!==k;)s.e.f&ut||(_??(_=new Set)).add(s),v.push(s),s=s.next;if(s===null)continue;f=s}p.push(f),d=f,s=f.next}if(s!==null||_!==void 0){for(var D=_===void 0?[]:Nt(_);s!==null;)s.e.f&ut||D.push(s),s=s.next;var j=D.length;if(j>0){var W=h===0?e:null;Ye(t,D,W,m)}}pt.first=t.first&&t.first.e,pt.last=d&&d.e}function Pe(i,t,e,a){ve(i.v,t),i.i=e}function Wt(i,t,e,a,r,o,l,h,m,x){var s=(m&_e)!==0,_=(m&Ee)===0,d=s?_?K(r):Rt(r):r,p=m&ge?Rt(l):l,v={i:p,v:d,k:o,a:null,e:null,prev:e,next:a};try{return v.e=Yt(()=>h(i,d,p,x),I),v.e.prev=e&&e.e,v.e.next=a&&a.e,e===null?t.first=v:(e.next=v,e.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function Ct(i,t,e){for(var a=i.next?i.next.e.nodes_start:e,r=t?t.e.nodes_start:e,o=i.e.nodes_start;o!==a;){var l=Me(o);r.before(o),o=l}}function O(i,t,e){t===null?i.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function Xe(i,t,e){var a=i==null?"":""+i;return a===""?null:a}function Oe(i,t){return i==null?null:String(i)}function je(i,t,e,a,r,o){var l=i.__className;if(I||l!==e||l===void 0){var h=Xe(e);(!I||h!==i.getAttribute("class"))&&(h==null?i.removeAttribute("class"):i.className=h),i.__className=e}return o}function St(i,t,e,a){var r=i.__style;if(I||r!==t){var o=Oe(t);(!I||o!==i.getAttribute("style"))&&(o==null?i.removeAttribute("style"):i.style.cssText=o),i.__style=t}return a}const We=Symbol("is custom element"),Ve=Symbol("is html");function Be(i,t,e,a){var r=qe(i);I&&(r[t]=i.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&i.nodeName==="LINK")||r[t]!==(r[t]=e)&&(t==="loading"&&(i[He]=e),e==null?i.removeAttribute(t):typeof e!="string"&&Vt(i).includes(t)?i[t]=e:i.setAttribute(t,e))}function G(i,t,e){var a=ze,r=pt;let o=I;I&&J(!1),zt(null),At(null);try{t!=="style"&&(mt.has(i.nodeName)||!customElements||customElements.get(i.tagName.toLowerCase())?Vt(i).includes(t):e&&typeof e=="object")?i[t]=e:Be(i,t,e==null?e:String(e))}finally{zt(a),At(r),o&&J(!0)}}function qe(i){return i.__attributes??(i.__attributes={[We]:i.nodeName.includes("-"),[Ve]:i.namespaceURI===Re})}var mt=new Map;function Vt(i){var t=mt.get(i.nodeName);if(t)return t;mt.set(i.nodeName,t=[]);for(var e,a=i,r=Element.prototype;r!==a;){e=Ae(a);for(var o in e)e[o].set&&t.push(o);a=ke(a)}return t}function Fe(i){return function(...t){var e=t[0];return e.preventDefault(),i==null?void 0:i.apply(this,t)}}var Ue=L(`<style>.toc-container {
			position: fixed;
			left: 0;
			top: 0;
			width: 280px;
			height: 100vh;
			overflow-y: auto;
			background: white;
			border-right: 1px solid #e0e0e0;
			padding: 20px;
			z-index: 10;
			box-sizing: border-box;
		}
		
		.toc-progress-container {
			position: relative;
			padding-left: 20px;
		}
		
		.toc-progress-bar {
			position: absolute;
			left: 8px;
			top: 0;
			bottom: 0;
			width: 3px;
			background: rgba(1, 61, 79, 0.08);
			border-radius: 2px;
		}
		
		.toc-progress-fill {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			background: linear-gradient(180deg, #ee627a, #d55a6e);
			transition: height 0.3s ease;
			border-radius: 2px;
		}
		
		.toc-progress-indicator {
			position: absolute;
			left: -5px;
			width: 12px;
			height: 12px;
			background: #ee627a;
			border: 2px solid white;
			border-radius: 50%;
			box-shadow: 0 2px 6px rgba(238, 98, 122, 0.3);
			transition: top 0.3s ease;
			z-index: 2;
		}
		
		.toc-list {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		.toc-item {
			margin-bottom: 8px;
		}
		
		.toc-link {
			display: block;
			padding: 6px 12px;
			text-decoration: none;
			color: #666;
			font-size: 14px;
			line-height: 1.4;
			border-radius: 4px;
			transition: all 0.2s ease;
			cursor: pointer;
		}
		
		.toc-link:hover {
			background: rgba(238, 98, 122, 0.1);
			color: #333;
		}
		
		.toc-link.active {
			background: rgba(238, 98, 122, 0.15);
			color: #ee627a;
			font-weight: 600;
		}
		
		.toc-link.level-1 {
			font-weight: 500;
			margin-left: 0;
		}
		
		.toc-link.level-2 {
			font-size: 13px;
			margin-left: 16px;
			color: #888;
		}
		
		.toc-link.level-2.active {
			color: #ee627a;
		}
		
		.toc-title {
			font-size: 18px;
			font-weight: 600;
			color: #013d4f;
			margin-bottom: 20px;
			padding: 0 12px;
			border-bottom: 2px solid #ee627a;
			padding-bottom: 10px;
		}
		
		/* Hide TOC on small screens */
		@media (max-width: 1200px) {
			.toc-container {
				display: none;
			}
		}
		
		/* Adjust main content margin when TOC is visible */
		@media (min-width: 1201px) {
			:global(body) {
				margin-left: 280px;
			}
			
			:global(d-article) {
				max-width: 800px;
				margin: 0 auto;
				padding: 0 20px;
			}
		}</style>`),Ge=L('<li class="toc-item"><a> </a></li>'),Je=L('<div class="toc-container"><div class="toc-progress-container"><div class="toc-progress-bar"><div class="toc-progress-fill"></div> <div class="toc-progress-indicator"></div></div> <div class="toc-title">Contents</div> <ul class="toc-list"></ul></div></div>');function Ke(i,t){$t(t,!1);let e=K(""),a=K(0),r=K(),o=[];const l=[{id:"introduction",title:"Introduction",level:1},{id:"interactive-visualization",title:"Interactive Visualization",level:1},{id:"interactive-components",title:"Interactive Components",level:1},{id:"mathematical-notation",title:"Mathematical Notation",level:1},{id:"equations",title:"Display Equations",level:2},{id:"code-blocks",title:"Code Blocks",level:1},{id:"syntax-highlighting",title:"Syntax Highlighting",level:2},{id:"side-notes",title:"Side Notes",level:1},{id:"footnotes",title:"Footnotes & Margin Content",level:2},{id:"conclusion",title:"Conclusion",level:1}];let h,m;Pt(()=>{x(),h=()=>{s(),_()},m=()=>{_()},window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",m,{passive:!0}),s(),_()}),Xt(()=>{h&&window.removeEventListener("scroll",h),m&&window.removeEventListener("resize",m)});function x(){const w=document.querySelector("d-article");if(!w)return;const g=w.querySelectorAll("h1, h2, h3, h4, h5, h6");o=[],g.forEach((c,H)=>{let z=c.id;z||(z=c.textContent.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").trim(),c.id=z);const D=c.getBoundingClientRect();o.push({id:z,element:c,offsetTop:window.pageYOffset+D.top,title:c.textContent,level:parseInt(c.tagName.charAt(1))})}),o.sort((c,H)=>c.offsetTop-H.offsetTop)}function s(){if(o.length===0)return;const w=window.pageYOffset+100;let g=o[0];for(let c=o.length-1;c>=0;c--)if(w>=o[c].offsetTop){g=o[c];break}B(e,g.id)}function _(){const w=document.querySelector("d-article");if(!w)return;const g=w.getBoundingClientRect(),c=window.pageYOffset+g.top,H=w.offsetHeight,z=window.innerHeight,D=window.pageYOffset,j=c,W=c+H-z;D<=j?B(a,0):D>=W?B(a,100):B(a,(D-j)/(W-j)*100)}function d(w){const g=document.getElementById(w);g&&g.scrollIntoView({behavior:"smooth",block:"start"})}Lt();var p=Je();gt(w=>{var g=Ue();S(w,g)});var v=N(p),R=N(v),k=N(R),f=E(k,2);C(R);var M=E(R,4);Ne(M,5,()=>l,De,(w,g)=>{var c=Ge(),H=N(c),z=N(H,!0);C(H),C(c),It(()=>{je(H,1,`toc-link level-${y(g).level??""} ${y(e)===y(g).id?"active":""}`),Ce(z,y(g).title)}),Se("click",H,Fe(()=>d(y(g).id))),S(w,c)}),C(M),C(v),C(p),jt(p,w=>B(r,w),()=>y(r)),It(()=>{St(k,`height: ${y(a)??""}%`),St(f,`top: ${y(a)??""}%`)}),S(i,p),Ot()}var Ze=vt(L('<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script><!>',1)),Qe=L('<div class="loading-message">Loading 3D visualization...</div>'),ti=L('<div class="hero-container svelte-pz775c"><div class="info-overlay svelte-pz775c"><div class="title svelte-pz775c">A low dimensional manifold</div> <div class="instructions svelte-pz775c">LLM activations live on curves surfaces like this surface.</div> <div class="status svelte-pz775c">TBD</div></div> <div class="visual-container svelte-pz775c"><!></div></div>');function ei(i,t){$t(t,!1);let e=K(),a,r,o,l,h=0,m=0,x=0,s=0,_=0,d=0,p=!1,v=[],R,k,f,M,w,g;const c=50,H=.5;Pt(async()=>{await z(),j()}),Xt(()=>{M&&cancelAnimationFrame(M),o&&o.dispose()});async function z(){let n=0;const u=50;for(;typeof THREE>"u"&&n<u;)await new Promise(b=>setTimeout(b,100)),n++;typeof THREE>"u"&&(console.error("Three.js failed to load after 5 seconds"),await D())}async function D(){return new Promise((n,u)=>{const b=document.createElement("script");b.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",b.onload=()=>{console.log("Three.js loaded manually"),n()},b.onerror=()=>{console.error("Failed to load Three.js manually"),u()},document.head.appendChild(b)})}function j(){if(typeof THREE>"u"){console.error("Three.js not loaded");return}console.log("Initializing 3D scene..."),console.log("Container dimensions:",y(e).clientWidth,"x",y(e).clientHeight),a=new THREE.Scene,r=new THREE.PerspectiveCamera(75,y(e).clientWidth/y(e).clientHeight,.1,1e3),o=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),o.setSize(y(e).clientWidth,y(e).clientHeight),o.setClearColor(0,0),o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.display="block",y(e).appendChild(o.domElement);const n=new THREE.AmbientLight(16777215,.6);a.add(n);const u=new THREE.DirectionalLight(16777215,.8);u.position.set(10,10,5),a.add(u),console.log("Scene, camera, renderer, and lighting created"),W(),Bt(),r.position.set(0,8,12),r.lookAt(0,0,0),R=new THREE.Raycaster,k=new THREE.Vector2,qt(),wt(),console.log("Initialization complete")}function W(){try{w=new THREE.PlaneGeometry(c*H,c*H,c-1,c-1),g=w.attributes.position.array;for(let u=0;u<g.length;u+=3){const b=g[u],Y=g[u+1],$=Math.sin(b*.3)*Math.cos(Y*.3)*3,P=Math.sin(b*.15+Y*.15)*2,X=Math.cos(b*.6)*Math.sin(Y*.4)*1.5,Q=(Math.random()-.5)*.5;g[u+2]=$+P+X+Q}w.attributes.position.needsUpdate=!0,w.computeVertexNormals();const n=new THREE.MeshBasicMaterial({color:81231,wireframe:!0,transparent:!0,opacity:.1});l=new THREE.Mesh(w,n),l.rotation.x=-Math.PI/2,a.add(l),console.log("Landscape created successfully")}catch(n){console.error("Error creating landscape:",n)}}function Bt(){try{const n=w.attributes.position.array,u=n.length/3,b=c,Y=c,$=[];for(let T=0;T<u;T++){const A=T*3,F=n[A+2];$.push({index:T,height:F})}const P=[...$].sort((T,A)=>T.height-A.height),X=P[0].height,Q=P[P.length-1].height,xt=Q-X,yt=Q-xt*.15,_t=X+xt*.15,ot=$.filter(T=>T.height>=yt),nt=$.filter(T=>T.height<=_t),at=$.filter(T=>T.height>_t&&T.height<yt);console.log(`Found ${ot.length} peaks, ${nt.length} valleys, ${at.length} other vertices`);const Et=new Set;for(let T=0;T<100;T++){let A,F=0;do{if(T<40){const V=ot[Math.floor(Math.random()*ot.length)],st=V.index%b,lt=Math.floor(V.index/b),ct=Math.floor((Math.random()-.5)*6),dt=Math.floor((Math.random()-.5)*6),ht=Math.max(0,Math.min(b-1,st+ct));A=Math.max(0,Math.min(Y-1,lt+dt))*b+ht}else if(T<70){const V=nt[Math.floor(Math.random()*nt.length)],st=V.index%b,lt=Math.floor(V.index/b),ct=Math.floor((Math.random()-.5)*6),dt=Math.floor((Math.random()-.5)*6),ht=Math.max(0,Math.min(b-1,st+ct));A=Math.max(0,Math.min(Y-1,lt+dt))*b+ht}else A=at[Math.floor(Math.random()*at.length)].index;A=Math.max(0,Math.min(u-1,A)),F++}while(Et.has(A)&&F<20);F>=20&&(A=Math.floor(Math.random()*u)),Et.add(A);const rt=A*3,Mt=n[rt],Tt=n[rt+1],kt=n[rt+2],ne=new THREE.SphereGeometry(.12,8,8),ae=new THREE.MeshBasicMaterial({color:15622778,transparent:!0,opacity:.9}),tt=new THREE.Mesh(ne,ae);tt.position.set(Mt,Tt,kt),tt.userData={id:v.length,x:Mt.toFixed(2),z:Tt.toFixed(2),height:kt.toFixed(2),vertexIndex:A},v.push(tt),l.add(tt)}console.log("Surface points created successfully:",v.length),console.log("Distribution: 40 peaks, 30 valleys, 30 other areas")}catch(n){console.error("Error creating surface points:",n)}}function qt(){o.domElement.addEventListener("mousedown",Gt),o.domElement.addEventListener("mousemove",Jt),o.domElement.addEventListener("mouseup",Kt),o.domElement.addEventListener("mousemove",Ft),o.domElement.addEventListener("touchstart",Zt),o.domElement.addEventListener("touchmove",Qt),o.domElement.addEventListener("touchend",te),window.addEventListener("resize",ee)}function Ft(n){const u=y(e).getBoundingClientRect();k.x=(n.clientX-u.left)/u.width*2-1,k.y=-((n.clientY-u.top)/u.height)*2+1,R.setFromCamera(k,r);const b=R.intersectObjects(v);if(b.length>0){const Y=b[0];Ut(Y.object,n.clientX,n.clientY)}else bt()}function Ut(n,u,b){bt(),f=document.createElement("div"),f.className="point-tooltip",f.innerHTML=`
			<div class="tooltip-content">
				<div class="tooltip-header">
					<strong>Data Point ${n.userData.id+1}</strong>
				</div>
				<div class="tooltip-body">
					<div class="tooltip-row">
						<span class="tooltip-label">X Position:</span>
						<span class="tooltip-value">${n.userData.x}</span>
					</div>
					<div class="tooltip-row">
						<span class="tooltip-label">Z Position:</span>
						<span class="tooltip-value">${n.userData.z}</span>
					</div>
					<div class="tooltip-row">
						<span class="tooltip-label">Height:</span>
						<span class="tooltip-value">${n.userData.height}</span>
					</div>
					<div class="tooltip-row">
						<span class="tooltip-label">Vertex:</span>
						<span class="tooltip-value">#${n.userData.vertexIndex}</span>
					</div>
				</div>
			</div>
		`;const Y=200,$=140;let P=u+15,X=b-$-10;P+Y>window.innerWidth&&(P=u-Y-15),X<0&&(X=b+15),f.style.left=P+"px",f.style.top=X+"px",y(e).appendChild(f)}function bt(){f&&(f.remove(),f=null)}function Gt(n){p=!0,h=n.clientX,m=n.clientY}function Jt(n){if(p){const u=n.clientX-h,b=n.clientY-m;s+=u*.005,x+=b*.005,x=Math.max(-Math.PI/3,Math.min(Math.PI/3,x)),h=n.clientX,m=n.clientY}}function Kt(){p=!1}function Zt(n){n.touches.length===1&&(h=n.touches[0].clientX,m=n.touches[0].clientY,p=!0)}function Qt(n){if(n.touches.length===1&&p){const u=n.touches[0].clientX-h,b=n.touches[0].clientY-m;s+=u*.005,x+=b*.005,x=Math.max(-Math.PI/3,Math.min(Math.PI/3,x)),h=n.touches[0].clientX,m=n.touches[0].clientY}}function te(){p=!1}function ee(){y(e)&&r&&o&&(r.aspect=y(e).clientWidth/y(e).clientHeight,r.updateProjectionMatrix(),o.setSize(y(e).clientWidth,y(e).clientHeight))}function wt(){M=requestAnimationFrame(wt),_+=(x-_)*.05,d+=(s-d)*.05,l.rotation.z=d,l.rotation.x=-Math.PI/2+_;const n=Date.now()*5e-4;r.position.y=8+Math.sin(n)*1,o.render(a,r)}Lt();var et=ti();gt(n=>{var u=Ze();E(Z(u)),S(n,u)});var it=E(N(et),2),ie=N(it);{var oe=n=>{var u=Qe();S(n,u)};Le(ie,n=>{typeof THREE>"u"&&n(oe)})}C(it),jt(it,n=>B(e,n),()=>y(e)),C(et),S(i,et),Ot()}var ii=L(`<h2 id="introduction">Introduction</h2> <p>Manifolds are fundamental mathematical objects that have become increasingly important 
	in understanding the structure of high-dimensional data and neural network representations. 
	A manifold is a topological space that locally resembles Euclidean space, providing a 
	powerful framework for understanding complex, nonlinear structures in data <d-cite></d-cite>.</p> <p>The study of manifolds in machine learning has revealed that many high-dimensional 
	datasets actually lie on or near low-dimensional manifolds embedded in the ambient space <d-cite></d-cite>. This insight has led to the development of 
	manifold learning algorithms that can discover these underlying structures and perform 
	dimensionality reduction while preserving the essential geometric properties of the data <d-cite></d-cite>.</p> <p>In the context of artificial intelligence, manifolds provide a geometric perspective on 
	how neural networks organize and represent information. Recent work has shown that the 
	activations of deep neural networks often lie on smooth manifolds, and understanding 
	these geometric structures is crucial for interpretability and robustness <d-cite></d-cite>.</p>`,3);function oi(i){var t=ii(),e=E(Z(t),2),a=E(N(e));G(a,"key","tenenbaum2000global"),q(),C(e);var r=E(e,2),o=E(N(r));G(o,"key","roweis2000nonlinear");var l=E(o,2);G(l,"key","belkin2003laplacian"),q(),C(r);var h=E(r,2),m=E(N(h));G(m,"key","raghunathan2019understanding"),q(),C(h),S(i,t)}var ni=L(`<h2 id="mathematical-notation">Mathematical Notation</h2> <p></p> <h3 id="equations">Display Equations</h3> <p>Or display equations for more complex mathematical expressions:</p> <d-math></d-math> <p>This gradient descent equation shows how we update weights in neural networks.
	The beauty of mathematical typesetting enhances comprehension of complex formulas.</p>`,3);function ai(i){var t=ni(),e=E(Z(t),2);e.textContent=`You can include LaTeX math notation: $f(x) = \\sum_{i=1}^{n} w_i x_i + b$
	This inline math rendering makes it easy to discuss mathematical concepts
	within the flow of text.`;var a=E(e,6);G(a,"block",!0),a.textContent="\\frac{\\partial L}{\\partial w_i} = \\frac{1}{m} \\sum_{j=1}^{m} (h_\\theta(x^{(j)}) - y^{(j)}) x_i^{(j)}",q(2),S(i,t)}var ri=L(`<h2 id="conclusion">Conclusion</h2> <p>This template gives you a solid foundation for creating Distill-style articles 
	with Svelte. You can now add your own interactive components and visualizations.
	The combination provides both beautiful typography and modern interactivity.</p> <p>Notice how the table of contents has tracked your reading progress throughout
	this article. The progress bar shows how far you've come, and the active
	section highlighting helps you stay oriented within the document structure.</p> <p>With these tools, you can create engaging, interactive academic content
	that brings ideas to life through visualization and direct manipulation.
	The future of academic publishing is interactive, and this template
	provides a foundation for that future.</p>`,1);function si(i){var t=ri();q(6),S(i,t)}var li=L(`<h2 id="references">References</h2> <p>The references below provide a comprehensive overview of manifold learning, 
	differential geometry, and their applications in machine learning and AI.</p> <d-citation-list></d-citation-list>`,3);function ci(i){var t=li();E(Z(t),4),S(i,t)}var di=vt(L(`<meta name="description" content="What are manifolds?"/> <link rel="stylesheet" href="https://distill.pub/template.v2.css"/> <script src="https://distill.pub/template.v2.js"><\/script> <style>/* Global styles for Distill content */
		.figure-content {
			padding: 2rem;
			border: 1px solid #ddd;
			border-radius: 4px;
			text-align: center;
			background: #f9f9f9;
		}
		
		.distill-button {
			background: #ee627a;
			color: white;
			border: none;
			padding: 0.5rem 1rem;
			border-radius: 4px;
			cursor: pointer;
			font-size: 1rem;
		}
		
		.distill-button:hover {
			background: #d55a6e;
		}
		
		/* Add padding to content sections for better spacing */
		:global(d-article h2) {
			margin-top: 3rem;
			margin-bottom: 1.5rem;
		}
		
		:global(d-article h3) {
			margin-top: 2rem;
			margin-bottom: 1rem;
		}
		
		:global(d-article p) {
			margin-bottom: 1.5rem;
		}
		
		/* Ensure proper layout with sidebar */
		:global(d-article) {
			line-height: 1.6;
			font-size: 18px;
			color: #333;
		}
		
		/* Ensure hero visual stays within content bounds */
		:global(.hero-container) {
			max-width: 100%;
			overflow: hidden;
		}
		
		:global(d-title) {
			margin-bottom: 2rem;
		}
		
		:global(d-title h1) {
			font-size: 2.5rem;
			font-weight: 300;
			margin-bottom: 1rem;
			color: #013d4f;
		}
		
		:global(d-title p) {
			font-size: 1.2rem;
			color: #666;
			font-weight: 300;
		}
		
		/* Custom front matter styling - condensed version */
		:global(.custom-front-matter) {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin: 1rem 0;
			padding: 1rem 0;
			border-top: 1px solid #e0e0e0;
			flex-direction: row;
			margin-left: 1rem;
		}
		
		:global(.custom-front-matter) .authors-section {
			flex: 1;
			margin-right: 2rem;
		}
		
		:global(.custom-front-matter) .affiliations-section {
			flex: 0 0 150px;
		}
		
		:global(.custom-front-matter) .section-title {
			font-size: 0.65rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.3px;
			color: #888;
			margin-bottom: 0.25rem;
		}
		
		:global(.custom-front-matter) .authors-list {
			font-size: 0.8rem;
			line-height: 1.2;
			color: #333;
			margin-bottom: 0.5rem;
		}
		
		:global(.custom-front-matter) .authors-list a {
			color: #333;
			text-decoration: none;
		}
		
		:global(.custom-front-matter) .authors-list a:hover {
			text-decoration: underline;
		}
		
		:global(.custom-front-matter) .affiliations-list {
			font-size: 0.8rem;
			line-height: 1.2;
			color: #333;
			margin-bottom: 0.75rem;
		}
		
		:global(.custom-front-matter) .affiliations-list a {
			color: #333;
			text-decoration: none;
		}
		
		:global(.custom-front-matter) .affiliations-list a:hover {
			text-decoration: underline;
		}
		
		:global(.custom-front-matter) .published-info {
			font-size: 0.8rem;
			line-height: 1.2;
			color: #333;
		}
		
		:global(.custom-front-matter) .footnotes {
			font-size: 0.7rem;
			color: #666;
			line-height: 1.2;
			margin-top: 0.25rem;
		}
		
		:global(.custom-front-matter) .footnotes p {
			margin: 0.1rem 0;
		}
		
		/* Responsive design for front matter */
		@media (max-width: 768px) {
			:global(.custom-front-matter) {
				flex-direction: column;
				gap: 0.75rem;
				margin: 0.75rem 0;
				padding: 0.75rem 0;
			}
			
			:global(.custom-front-matter .authors-section) {
				margin-right: 0;
			}
			
			:global(.custom-front-matter .affiliations-section) {
				flex: none;
			}
		}</style>`,1)),hi=vt(L(`<!> <!> <d-front-matter><script type="text/json">
	{
		"title": "Why does curvature matter for AI interpretability?",
		"description": "An interactive exploration of manifolds and subspaces in representation spaces of large language models",
		"authors": [
			{
				"author": "Shivam Raval",
				"authorURL": "https://shivam-raval96.github.io/",
				"affiliation": "Harvard University",
				"affiliationURL": "https://harvard.edu"
			}
		],
		"katex": {
			"delimiters": [
				{"left": "$", "right": "$", "display": false}
			]
		},
		"bibliography": "bibliography.bib"
	}
	<\/script><!></d-front-matter> <d-title><h1>Why does curvature matter for AI interpretability?</h1> <p>An interactive exploration of manifolds and subspaces in representation spaces of large language models.</p></d-title> <div class="custom-front-matter"><div class="authors-section"><div class="section-title">Authors</div> <div class="authors-list"><a href="https://shivam-raval96.github.io/">Shivam Raval*</a>,</div> <div class="footnotes"><p>* Correspondence to: sraval@g.harvard.edu</p></div></div> <div class="affiliations-section"><div class="section-title">Affiliations</div> <div class="affiliations-list"><a href="https://harvard.edu">Harvard University</a><br/> <a href="https://mit.edu">Thoughworks</a></div> <div class="section-title">Published</div> <div class="published-info">TBD</div></div></div> <d-article><!> <!> <!> <!></d-article> <d-appendix><h3>Acknowledgments</h3> <p>Thanks to the Distill team for creating the beautiful template.</p> <d-footnote-list></d-footnote-list> <d-citation-list></d-citation-list></d-appendix>`,3));function gi(i){var t=hi();gt(_=>{var d=di();Ie.title="An interactive explainer on manifolds",q(6),S(_,d)});var e=Z(t);Ke(e,{});var a=E(e,2);ei(a,{});var r=E(a,2),o=E(r,2),l=E(o,4),h=N(l);oi(h);var m=E(h,2);ai(m);var x=E(m,2);si(x);var s=E(x,2);ci(s),C(l),E(l,2),S(i,t)}export{gi as component};
