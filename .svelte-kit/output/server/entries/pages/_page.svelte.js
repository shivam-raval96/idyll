import { f as current_component, h as head, i as bind_props, c as pop, p as push, j as ensure_array_like, k as attr_style, l as attr_class, e as escape_html, m as stringify } from "../../chunks/index.js";
import { h as fallback } from "../../chunks/utils.js";
import "d3";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function D3ScatterPlot($$payload, $$props) {
  push();
  let width = fallback($$props["width"], 600);
  let height = fallback($$props["height"], 400);
  let data = fallback($$props["data"], () => [], true);
  const defaultData = [
    {
      x: 10,
      y: 20,
      label: "Point A",
      category: "Type 1"
    },
    {
      x: 25,
      y: 30,
      label: "Point B",
      category: "Type 2"
    },
    {
      x: 40,
      y: 15,
      label: "Point C",
      category: "Type 1"
    },
    {
      x: 55,
      y: 45,
      label: "Point D",
      category: "Type 3"
    },
    {
      x: 30,
      y: 35,
      label: "Point E",
      category: "Type 2"
    },
    {
      x: 70,
      y: 25,
      label: "Point F",
      category: "Type 1"
    },
    {
      x: 45,
      y: 50,
      label: "Point G",
      category: "Type 3"
    },
    {
      x: 60,
      y: 10,
      label: "Point H",
      category: "Type 2"
    },
    {
      x: 80,
      y: 40,
      label: "Point I",
      category: "Type 1"
    },
    {
      x: 20,
      y: 45,
      label: "Point J",
      category: "Type 3"
    }
  ];
  data.length > 0 ? data : defaultData;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<style>
		.d3-tooltip {
			position: absolute;
			text-align: left;
			padding: 8px;
			font-size: 12px;
			background: rgba(0, 0, 0, 0.8);
			color: white;
			border: 0px;
			border-radius: 4px;
			pointer-events: none;
			box-shadow: 0 2px 4px rgba(0,0,0,0.3);
		}
		
		.scatterplot-container {
			display: flex;
			justify-content: center;
			margin: 20px 0;
		}
		
		.dot {
			transition: all 0.2s ease;
		}
		
		.dot:hover {
			filter: brightness(1.2);
		}
	</style>`;
  });
  $$payload.out += `<div class="scatterplot-container"><svg></svg></div>`;
  bind_props($$props, { width, height, data });
  pop();
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
function _page($$payload) {
  const scatterData = [
    {
      x: 2.5,
      y: 3.2,
      label: "Neural Network A",
      category: "Deep Learning"
    },
    {
      x: 1.8,
      y: 2.9,
      label: "Random Forest",
      category: "Ensemble"
    },
    {
      x: 3.1,
      y: 4.1,
      label: "SVM",
      category: "Kernel Methods"
    },
    {
      x: 2.2,
      y: 3.8,
      label: "Neural Network B",
      category: "Deep Learning"
    },
    {
      x: 1.5,
      y: 2.1,
      label: "Decision Tree",
      category: "Tree-based"
    },
    {
      x: 3.8,
      y: 4.5,
      label: "Transformer",
      category: "Deep Learning"
    },
    {
      x: 2.8,
      y: 3.5,
      label: "Gradient Boosting",
      category: "Ensemble"
    },
    {
      x: 1.2,
      y: 1.8,
      label: "Linear Regression",
      category: "Linear"
    },
    {
      x: 3.5,
      y: 4.2,
      label: "CNN",
      category: "Deep Learning"
    },
    {
      x: 2,
      y: 2.7,
      label: "Logistic Regression",
      category: "Linear"
    }
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>My Distill Blog</title>`;
    $$payload2.out += `<meta name="description" content="A Distill-style blog built with Svelte"/> <style>
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
	</style>`;
  });
  TableOfContents($$payload);
  $$payload.out += `<!----> `;
  HeroVisual($$payload);
  $$payload.out += `<!----> <d-front-matter><script type="text/json">
	{
		"title": "Interactive Machine Learning Visualization",
		"description": "An exploration of neural networks with interactive components",
		"authors": [
			{
				"author": "Shivam Raval",
				"authorURL": "https://shivam-raval96.github.io/",
				"affiliation": "Harvard University/TW",
				"affiliationURL": "https://yourorg.com"
			}
		],
		"katex": {
			"delimiters": [
				{"left": "$", "right": "$", "display": false}
			]
		}
	}
	<\/script><!----></d-front-matter> <d-title><h1>Interactive Machine Learning Visualization</h1> <p>Understanding neural networks through interactive exploration</p></d-title> <d-byline></d-byline> <d-article><h2 id="introduction">Introduction</h2> <p>This is an example of how to create a Distill-style article using Svelte. 
		You can include interactive visualizations, mathematical equations, and rich media.
		This article demonstrates the integration of modern web technologies with 
		academic publishing standards.</p> <p>The combination of Svelte's reactive framework with Distill's beautiful 
		typography creates an engaging reading experience. Notice how the table 
		of contents on the left tracks your progress through the article.</p> <h2 id="interactive-visualization">Interactive Visualization</h2> <p>Below is an interactive D3.js scatterplot showing different machine learning models 
		plotted by their performance metrics. Hover over each point to see details.
		This visualization demonstrates how complex data can be made accessible through
		interactive elements.</p> <d-figure id="ml-scatterplot">`;
  D3ScatterPlot($$payload, { data: scatterData, width: 700, height: 450 });
  $$payload.out += `<!----> <figcaption>Interactive scatterplot of machine learning models. Each point represents a different 
			algorithm, colored by category. Hover to see model details and performance metrics.</figcaption></d-figure> <p>The visualization above shows how different machine learning algorithms 
		perform across various metrics. Deep learning models tend to cluster 
		in the upper right, while simpler linear models appear in the lower left.</p> <h2 id="interactive-components">Interactive Components</h2> <p>Here's how you can add interactive elements. The Distill template provides 
		special components for figures, equations, and citations. These components
		are designed to enhance the reader's understanding through direct manipulation.</p> <d-figure id="example-figure"><figure><div class="figure-content"><p>This is where you'd put your interactive visualization or chart.</p> <button class="distill-button">Click me!</button></div> <figcaption>An example of an interactive figure. You can replace this with any Svelte component.</figcaption></figure></d-figure> <h2 id="mathematical-notation">Mathematical Notation</h2> <p>You can include LaTeX math notation: $f(x) = \\sum_{i=1}^{n} w_i x_i + b$
		This inline math rendering makes it easy to discuss mathematical concepts
		within the flow of text.</p> <h3 id="equations">Display Equations</h3> <p>Or display equations for more complex mathematical expressions:</p> <d-math block="">\\frac{\\partial L}{\\partial w_i} = \\frac{1}{m} \\sum_{j=1}^{m} (h_\\theta(x^{(j)}) - y^{(j)}) x_i^{(j)}</d-math> <p>This gradient descent equation shows how we update weights in neural networks.
		The beauty of mathematical typesetting enhances comprehension of complex formulas.</p> <h2 id="code-blocks">Code Blocks</h2> <p>Code blocks with syntax highlighting help readers understand implementation details.
		The following example shows a simple neural network implementation in Python.</p> <d-code block="" language="python">import numpy as np
import matplotlib.pyplot as plt

def neural_network(x, weights, bias):
    return np.tanh(np.dot(x, weights) + bias)

# Example usage
x = np.random.randn(100, 10)
weights = np.random.randn(10, 5)
bias = np.random.randn(5)
output = neural_network(x, weights, bias)</d-code> <h3 id="syntax-highlighting">Syntax Highlighting</h3> <p>The syntax highlighting makes code more readable and helps identify 
		different language constructs. This is particularly useful when 
		explaining algorithms or providing implementation examples.</p> <h2 id="side-notes">Side Notes</h2> <p>You can add side notes and margin content <d-footnote>This is a footnote that appears in the margin. It provides 
		additional context without interrupting the main narrative flow.</d-footnote> to provide additional context without interrupting the main flow.
		These margin notes are perfect for tangential information.</p> <h3 id="footnotes">Footnotes &amp; Margin Content</h3> <p>Footnotes and margin content allow for a layered reading experience.
		Readers can choose to engage with supplementary information or focus
		on the main narrative thread.</p> <h2 id="conclusion">Conclusion</h2> <p>This template gives you a solid foundation for creating Distill-style articles 
		with Svelte. You can now add your own interactive components and visualizations.
		The combination provides both beautiful typography and modern interactivity.</p> <p>Notice how the table of contents has tracked your reading progress throughout
		this article. The progress bar shows how far you've come, and the active
		section highlighting helps you stay oriented within the document structure.</p> <p>With these tools, you can create engaging, interactive academic content
		that brings ideas to life through visualization and direct manipulation.
		The future of academic publishing is interactive, and this template
		provides a foundation for that future.</p></d-article> <d-appendix><h3>Acknowledgments</h3> <p>Thanks to the Distill team for creating the beautiful template.</p> <d-footnote-list></d-footnote-list> <d-citation-list></d-citation-list></d-appendix>`;
}
export {
  _page as default
};
