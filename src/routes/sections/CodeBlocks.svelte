<!-- Code Blocks Section -->
<h2 id="code-blocks">Code Blocks</h2>

<p>
	Code blocks with syntax highlighting help readers understand implementation details.
	The following example shows a simple neural network implementation in Python.
</p>

<d-code block language="python">
import numpy as np
import matplotlib.pyplot as plt

def neural_network(x, weights, bias):
    return np.tanh(np.dot(x, weights) + bias)

# Example usage
x = np.random.randn(100, 10)
weights = np.random.randn(10, 5)
bias = np.random.randn(5)
output = neural_network(x, weights, bias)
</d-code>

<h3 id="syntax-highlighting">Syntax Highlighting</h3>

<p>
	The syntax highlighting makes code more readable and helps identify 
	different language constructs. This is particularly useful when 
	explaining algorithms or providing implementation examples.
</p>
