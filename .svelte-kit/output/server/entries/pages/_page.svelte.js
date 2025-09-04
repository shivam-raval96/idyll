import { f as current_component, h as ensure_array_like, i as head, j as attr_style, k as attr_class, e as escape_html, l as stringify, c as pop, p as push } from "../../chunks/index.js";
import "clsx";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function TableOfContents($$payload, $$props) {
  push();
  let activeSection = "";
  let scrollProgress = 0;
  const tocItems = [
    {
      id: "introduction",
      title: "Introduction",
      level: 1
    },
    {
      id: "interactive-visualization",
      title: "Interactive Visualization",
      level: 1
    },
    {
      id: "interactive-components",
      title: "Interactive Components",
      level: 1
    },
    {
      id: "mathematical-notation",
      title: "Mathematical Notation",
      level: 1
    },
    {
      id: "equations",
      title: "Display Equations",
      level: 2
    },
    {
      id: "code-blocks",
      title: "Code Blocks",
      level: 1
    },
    {
      id: "syntax-highlighting",
      title: "Syntax Highlighting",
      level: 2
    },
    {
      id: "side-notes",
      title: "Side Notes",
      level: 1
    },
    {
      id: "footnotes",
      title: "Footnotes & Margin Content",
      level: 2
    },
    {
      id: "conclusion",
      title: "Conclusion",
      level: 1
    }
  ];
  onDestroy(() => {
  });
  const each_array = ensure_array_like(tocItems);
  head($$payload, ($$payload2) => {
    $$payload2.out += `<style>
		.toc-container {
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
		}
	</style>`;
  });
  $$payload.out += `<div class="toc-container"><div class="toc-progress-container"><div class="toc-progress-bar"><div class="toc-progress-fill"${attr_style(`height: ${stringify(scrollProgress)}%`)}></div> <div class="toc-progress-indicator"${attr_style(`top: ${stringify(scrollProgress)}%`)}></div></div> <div class="toc-title">Contents</div> <ul class="toc-list"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li class="toc-item"><a${attr_class(`toc-link level-${stringify(item.level)} ${stringify(activeSection === item.id ? "active" : "")}`)}>${escape_html(item.title)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div>`;
  pop();
}
function HeroVisual($$payload, $$props) {
  push();
  onDestroy(() => {
  });
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script><!---->`;
  });
  $$payload.out += `<div class="hero-container svelte-pz775c"><div class="info-overlay svelte-pz775c"><div class="title svelte-pz775c">A low dimensional manifold</div> <div class="instructions svelte-pz775c">LLM activations live on curves surfaces like this surface.</div> <div class="status svelte-pz775c">TBD</div></div> <div class="visual-container svelte-pz775c">`;
  if (typeof THREE === "undefined") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="loading-message">Loading 3D visualization...</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Introduction($$payload) {
  $$payload.out += `<h2 id="introduction">Introduction</h2> <p>Manifolds are fundamental mathematical objects that have become increasingly important 
	in understanding the structure of high-dimensional data and neural network representations. 
	A manifold is a topological space that locally resembles Euclidean space, providing a 
	powerful framework for understanding complex, nonlinear structures in data <d-cite key="tenenbaum2000global"></d-cite>.</p> <p>The study of manifolds in machine learning has revealed that many high-dimensional 
	datasets actually lie on or near low-dimensional manifolds embedded in the ambient space <d-cite key="roweis2000nonlinear"></d-cite>. This insight has led to the development of 
	manifold learning algorithms that can discover these underlying structures and perform 
	dimensionality reduction while preserving the essential geometric properties of the data <d-cite key="belkin2003laplacian"></d-cite>.</p> <p>In the context of artificial intelligence, manifolds provide a geometric perspective on 
	how neural networks organize and represent information. Recent work has shown that the 
	activations of deep neural networks often lie on smooth manifolds, and understanding 
	these geometric structures is crucial for interpretability and robustness <d-cite key="raghunathan2019understanding"></d-cite>.</p>`;
}
function MathematicalNotation($$payload) {
  $$payload.out += `<h2 id="mathematical-notation">Mathematical Notation</h2> <p>You can include LaTeX math notation: $f(x) = \\sum_{i=1}^{n} w_i x_i + b$
	This inline math rendering makes it easy to discuss mathematical concepts
	within the flow of text.</p> <h3 id="equations">Display Equations</h3> <p>Or display equations for more complex mathematical expressions:</p> <d-math block="">\\frac{\\partial L}{\\partial w_i} = \\frac{1}{m} \\sum_{j=1}^{m} (h_\\theta(x^{(j)}) - y^{(j)}) x_i^{(j)}</d-math> <p>This gradient descent equation shows how we update weights in neural networks.
	The beauty of mathematical typesetting enhances comprehension of complex formulas.</p>`;
}
function Conclusion($$payload) {
  $$payload.out += `<h2 id="conclusion">Conclusion</h2> <p>This template gives you a solid foundation for creating Distill-style articles 
	with Svelte. You can now add your own interactive components and visualizations.
	The combination provides both beautiful typography and modern interactivity.</p> <p>Notice how the table of contents has tracked your reading progress throughout
	this article. The progress bar shows how far you've come, and the active
	section highlighting helps you stay oriented within the document structure.</p> <p>With these tools, you can create engaging, interactive academic content
	that brings ideas to life through visualization and direct manipulation.
	The future of academic publishing is interactive, and this template
	provides a foundation for that future.</p>`;
}
function References($$payload) {
  $$payload.out += `<h2 id="references">References</h2> <p>The references below provide a comprehensive overview of manifold learning, 
	differential geometry, and their applications in machine learning and AI.</p> <d-citation-list></d-citation-list>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>An interactive explainer on manifolds</title>`;
    $$payload2.out += `<meta name="description" content="What are manifolds?"/> <link rel="stylesheet" href="https://distill.pub/template.v2.css"/> <script src="https://distill.pub/template.v2.js"><\/script> <style>
		/* Global styles for Distill content */
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
		.custom-front-matter {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin: 1rem 0;
			padding: 1rem 0;
			border-top: 1px solid #e0e0e0;
			flex-direction: row;
			margin-left: 1rem;
		}
		
		.custom-front-matter .authors-section {
			flex: 1;
			margin-right: 2rem;
		}
		
		.custom-front-matter .affiliations-section {
			flex: 0 0 150px;
		}
		
		.custom-front-matter .section-title {
			font-size: 0.65rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.3px;
			color: #888;
			margin-bottom: 0.25rem;
		}
		
		.custom-front-matter .authors-list {
			font-size: 0.8rem;
			line-height: 1.2;
			color: #333;
			margin-bottom: 0.5rem;
		}
		
		.custom-front-matter .authors-list a {
			color: #333;
			text-decoration: none;
		}
		
		.custom-front-matter .authors-list a:hover {
			text-decoration: underline;
		}
		
		.custom-front-matter .affiliations-list {
			font-size: 0.8rem;
			line-height: 1.2;
			color: #333;
			margin-bottom: 0.75rem;
		}
		
		.custom-front-matter .affiliations-list a {
			color: #333;
			text-decoration: none;
		}
		
		.custom-front-matter .affiliations-list a:hover {
			text-decoration: underline;
		}
		
		.custom-front-matter .published-info {
			font-size: 0.8rem;
			line-height: 1.2;
			color: #333;
		}
		
		.custom-front-matter .footnotes {
			font-size: 0.7rem;
			color: #666;
			line-height: 1.2;
			margin-top: 0.25rem;
		}
		
		.custom-front-matter .footnotes p {
			margin: 0.1rem 0;
		}
		
		/* Responsive design for front matter */
		@media (max-width: 768px) {
			.custom-front-matter {
				flex-direction: column;
				gap: 0.75rem;
				margin: 0.75rem 0;
				padding: 0.75rem 0;
			}
			
			.custom-front-matter .authors-section {
				margin-right: 0;
			}
			
			.custom-front-matter .affiliations-section {
				flex: none;
			}
		}
	</style>`;
  });
  TableOfContents($$payload);
  $$payload.out += `<!----> `;
  HeroVisual($$payload);
  $$payload.out += `<!----> <d-front-matter><script type="text/json">
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
	<\/script><!----></d-front-matter> <d-title><h1>Why does curvature matter for AI interpretability?</h1> <p>An interactive exploration of manifolds and subspaces in representation spaces of large language models.</p></d-title> <div class="custom-front-matter"><div class="authors-section"><div class="section-title">Authors</div> <div class="authors-list"><a href="https://shivam-raval96.github.io/">Shivam Raval*</a>,</div> <div class="footnotes"><p>* Correspondence to: sraval@g.harvard.edu</p></div></div> <div class="affiliations-section"><div class="section-title">Affiliations</div> <div class="affiliations-list"><a href="https://harvard.edu">Harvard University</a><br/> <a href="https://mit.edu">Thoughworks</a></div> <div class="section-title">Published</div> <div class="published-info">TBD</div></div></div> <d-article>`;
  Introduction($$payload);
  $$payload.out += `<!----> `;
  MathematicalNotation($$payload);
  $$payload.out += `<!----> `;
  Conclusion($$payload);
  $$payload.out += `<!----> `;
  References($$payload);
  $$payload.out += `<!----></d-article> <d-appendix><h3>Acknowledgments</h3> <p>Thanks to the Distill team for creating the beautiful template.</p> <d-footnote-list></d-footnote-list> <d-citation-list></d-citation-list></d-appendix>`;
}
export {
  _page as default
};
