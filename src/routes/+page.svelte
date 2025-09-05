<script>
	import TableOfContents from './TableOfContents.svelte';
	import HeroVisual from './HeroVisual.svelte';
	
	// Import section components
	import Introduction from './sections/Introduction.svelte';
	import Background from './sections/Background.svelte';
	import RealManifolds from './sections/RealManifolds.svelte';
	import OpenQuestions from './sections/OpenQuestions.svelte';
	import MathematicalNotation from './sections/MathematicalNotation.svelte';
	import Conclusion from './sections/Conclusion.svelte';
	import References from './sections/References.svelte';
</script>

<svelte:head>
	<title>An interactive explainer on manifolds</title>
	<meta name="description" content="What are manifolds?" />
	
	<!-- Load Distill CSS and JavaScript -->
	<link rel="stylesheet" href="https://distill.pub/template.v2.css">
	<script src="https://distill.pub/template.v2.js"></script>
	
	<!-- Move styles to head to avoid Svelte scoping conflicts -->
	<style>
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
		
	</style>
</svelte:head>

<TableOfContents />

<HeroVisual />

<d-front-matter>
	<script type="text/json">
	{
		"title": "Why does curvature matter for AI interpretability?",
		"description": "An interactive exploration of manifolds and subspaces in representation spaces of large language models",
		"authors": [
			{
				"author": "Shivam Raval",
				"authorURL": "https://shivam-raval96.github.io/",
				"affiliation": "Harvard University, Thoughworks",
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
	</script>
</d-front-matter>

<d-title>
	<h1>Why does curvature matter for AI interpretability?</h1>
	<p>An interactive exploration of manifolds and subspaces in representation spaces of large language models.</p>
</d-title>


<d-byline></d-byline>



<d-article>
	<Introduction />
	<MathematicalNotation />
	<Conclusion />
	<References />
</d-article>

<d-appendix>
	<h3>Acknowledgments</h3>
	<p>Thanks to the Distill team for creating the beautiful template.</p>

	<d-footnote-list></d-footnote-list>
	<d-citation-list></d-citation-list>
</d-appendix>