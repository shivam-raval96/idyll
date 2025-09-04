<script>
	import D3ScatterPlot from '../D3ScatterPlot.svelte';
	
	// Sample data for the scatterplot
	export const scatterData = [
		{x: 2.5, y: 3.2, label: "Neural Network A", category: "Deep Learning"},
		{x: 1.8, y: 2.9, label: "Random Forest", category: "Ensemble"},
		{x: 3.1, y: 4.1, label: "SVM", category: "Kernel Methods"},
		{x: 2.2, y: 3.8, label: "Neural Network B", category: "Deep Learning"},
		{x: 1.5, y: 2.1, label: "Decision Tree", category: "Tree-based"},
		{x: 3.8, y: 4.5, label: "Transformer", category: "Deep Learning"},
		{x: 2.8, y: 3.5, label: "Gradient Boosting", category: "Ensemble"},
		{x: 1.2, y: 1.8, label: "Linear Regression", category: "Linear"},
		{x: 3.5, y: 4.2, label: "CNN", category: "Deep Learning"},
		{x: 2.0, y: 2.7, label: "Logistic Regression", category: "Linear"}
	];
</script>

<!-- Interactive Visualization Section -->
<h2 id="interactive-visualization">Interactive Visualization</h2>

<p>
	Below is an interactive D3.js scatterplot showing different machine learning models 
	plotted by their performance metrics. Hover over each point to see details.
	This visualization demonstrates how complex data can be made accessible through
	interactive elements.
</p>

<d-figure id="ml-scatterplot">
	<D3ScatterPlot data={scatterData} width={700} height={450} />
	<figcaption>
		Interactive scatterplot of machine learning models. Each point represents a different 
		algorithm, colored by category. Hover to see model details and performance metrics.
	</figcaption>
</d-figure>

<p>
	The visualization above shows how different machine learning algorithms 
	perform across various metrics. Deep learning models tend to cluster 
	in the upper right, while simpler linear models appear in the lower left.
</p>
