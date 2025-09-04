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
	</script>
</d-front-matter>

<d-title>
	<h1>Why does curvature matter for AI interpretability?</h1>
	<p>An interactive exploration of manifolds and subspaces in representation spaces of large language models.</p>
</d-title>


<div class="custom-front-matter">
	<div class="authors-section">
		<div class="section-title">Authors</div>
		<div class="authors-list">
			<a href="https://shivam-raval96.github.io/">Shivam Raval*</a>, 
			
		</div>
		<div class="footnotes">
			<p>* Correspondence to: sraval@g.harvard.edu</p>
		</div>
	</div>
	
	<div class="affiliations-section">
		<div class="section-title">Affiliations</div>
		<div class="affiliations-list">
			<a href="https://harvard.edu">Harvard University</a><br>
			<a href="https://mit.edu">Thoughworks</a>
		</div>
		
		<div class="section-title">Published</div>
		<div class="published-info">TBD</div>
	</div>
</div>



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