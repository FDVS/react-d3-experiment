# react-d3-experiment
Created with CodeSandbox

<h1>Context</h1>
<p>I have a relatively large dataset, tens of thousands of nodes and a few hundred thousand links. I tried having the server push the stratified data out all at once, but it was taking forever. So I tried this solution, getting the data as I have it in the database, flattened and building it up on the front-end piece by piece.</p>

<p>It doesn't feel like the best approach, but since I'm new to React and D3 it has helped me grasp some new concepts.</p>

<h1>Requirements</h1>
<ul>
<li>The basic need I have is, to be able to look into any branch of the hierarchical dataset and analyze it's surroundings a few levels at a time.</li>

<li>I need to be able to filter nodes on that subset, but the tree needs to remain fully, so the filtering doesn't collapse branches. I think I'm going to use some sort of highlighting of nodes to indicate a hit or a miss on the filter.</li>

<li>I need the tree to grow in both directions since I'll be in the middle of the data set almost always.</li>

<li>I need to be able to list several trees at once, given there are multiple objects with similar names that usually need to be taken into account at the same time.</li>
</ul>

<h1>Disclaimer</h1>
<p>I work in a language called RPGLE and I am not intimate with JS in general, React and D3 in specific.</p>
<p>That being said, please let me know if I'm being an idiot anywhere in my code, I can't learn if I don't know what I'm doing wrong.</p>

<p>I didn't use PropTypes or Typescript specifically because I come from RPGLE and that language forces me to declare everything, so I just needed a breather from that. If this project ever gets to production, I will opt into one of those, most likely PropTypes, since it looks like there's a lower learning curve than TypeScript.</p>
