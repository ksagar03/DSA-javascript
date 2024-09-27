document.write(`<h2>Graphs</h2>Graphs are very useful data structure,<li>It is used in almost all the places from social media(instagram reels, adds recommandation) to streeming websites(movie recommandation) </li>
<img class="image" src="images/UseOfGraphs.png" />

<b>Defination</b> It is a collection of nodes and connection between the nodes. 
<br/>
<img class="image" src="images/Graphs_eg.png" />
<h3>Terminologies in Graphs</h3>
<ol>Vertex :: basically a node is called as a vertex</ol>
<ol>Edge :: It is connection or a Link b/n two nodes</ol>
<ol><b>Unidirected Graph</b> -> This are the type of graph in which the both the vertex(node) are connected each other
Eg: <img class="image" src="images/unidirected graph.png"/></ol>
In the above example "A" node can what is there inside "B" and vise-versa
<ol><b>Directed graph::</b> This are the type of graph in which there is one or both side connection can be there . Note: An edge can point both the direction  Eg:
<img class="image" src="images/directed_graph.png"/>
</ol>
In the above example "B" node can see what is there in "A" node but "A" node can't see what is there in "B" node
<ol><b>Un_Weighted graph::</b> The Graph which are shown above as an example is unweighted graphs </ol>
<ol><b>Weighted graph::</b> this are type of graph in which each and connection b/ node will be assigned with a value
Eg: <img class="image" src="images/weighted_graph.png"/> </ol>
<h4>Basic implementation</h4>
Basically in doubly linked list we used .next and .previous to make the connection(for binary tree we used left and right to reprasent the connection) but in Graph we cant use that idea
<b> So there are two ways of reprasenting the connection b/ the vertex(nodes):</b>
<li>Adjacency matrix</li>
<li>Adjacency list</li>
<img class="image" src="images/adjacency matrix.png"/>
A matrix is a two dimensional reprasentation
and it is reprasented in nested array
<img class="image" src="images/adjacency_list.png"/>
In Adjacency list each node connection's with other node will be stored in the array eg: take a node "3" which has two connection one at 2 and other at 4 so it will be reprasented as a [[2,4]] <br/>
In above example we had numbers what if insted of numbers we had some strings so at that time we can use hash maps
<h3>Time and space complexity b/n Adjacency matrix and Adjacency list</h3>
<img class="image" src="images/Big O of Adj matrix and list.png" />
`);

// Building a uni-directed Graph
class Graph {
  constructor() {
    this.adjlist = {};
  }
  addVertex(vertex) {
    if (!this.adjlist[vertex]) this.adjlist[vertex] = [];
    else return alert("this vertex already exsist please add another vertex");
    // if the vertex is already there then it will be rewitten so to avoid that if condition is written
  }
  addEdge(v1, v2) {
    if (this.adjlist[v1] && this.adjlist[v2]) {
      this.adjlist[v1].push(v2);
      this.adjlist[v2].push(v1);
      return this.adjlist;
    } else {
      return alert("vertex is not there in the list");
    }
  }

  removeedges(v1, v2) {
    if (this.adjlist[v1] || this.adjlist[v2]) {
      this.adjlist[v1] = this.adjlist[v1].filter((v) => v !== v2);
      this.adjlist[v2] = this.adjlist[v2].filter((v) => v !== v1);
    } else {
      return alert("vertex is not there in the list");
    }
  }
  removevertex(v1) {
    if (this.adjlist[v1]) {
      let vertex = this.adjlist[v1];
      for (let i in vertex) {
        this.removeedges(v1, vertex[i]);
      }
      delete this.adjlist[v1];
    } else {
      return alert("vertex is not--- there in the list");
    }
  }

  DFS_recursive(vertex) {
    let isVisited = {};
    let result = [];
    let adjlist = this.adjlist;
    function DFS(vertex) {
      if (!vertex) {
        return null;
      }
      isVisited[vertex] = true;
      result.push(vertex);
      // this.adjlist[vertex]  this line will not work as this will be pointing twoards the attributes of current function(DFS)
      adjlist[vertex].map((value) => {
        if (!isVisited[value]) {
          return DFS(value);
        }
      });
    }
    DFS(vertex);
    return result;
  }
  DFS_itirative(vertex) {
    let stack = [];
    let isvisited = {};
    let result = [];
    stack.push(vertex);
    while (stack.length) {
      vertex = stack.pop();
      if (!isvisited[vertex]) {
        isvisited[vertex] = true;
        result.push(vertex);
        this.adjlist[vertex].map((value) => stack.push(value));
      }
    }
    return result;
  }
  BFS_iterative(vertex) {
    let queue = [];
    let isvisited = {};
    let result = [];
    queue.push(vertex);
    while (queue.length) {
      vertex = queue.shift();
      if (!isvisited[vertex]) {
        isvisited[vertex] = true;
        result.push(vertex);
        this.adjlist[vertex].map((value) => queue.push(value));
      }
      // In the Above code all the values will added to queue so for smaller graph it is easy to store thos e things in queue but what if the graph is too huge
    }
    return result;
  }
  BFS_improvedIterative(vertex) {
    let queue = [vertex];
    let isvisited = {};
    let result = [];
    isvisited[vertex] = true;
    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);
      this.adjlist[vertex].map((value) => {
        if (!isvisited[value]) {
          isvisited[value] = true;
          queue.push(value);
        }
      });
      //  for this space complextity wil be less
    }
    return result;
  }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// ---------------------------------------------------------
// Graph traversal---
document.write(`<h2>Graph traversal</h3>
There are two basic methods for traverse
<li>DFS(Depth first serach)</li>
<li>BFS(breadth first search)</li>
Unlilke in binary tree we used to start from the root and traverse all the node but in Graph there is no concept of root node
<br/>
<img class="image" src="images/graph_traversal.png" />
In BFS first we will cover all the edges of one vertex and then we will go to next vertex <br/>
Eg: take a vertex "0" which has following edges [1,6,2] so it will traverse this conected vertex then it will move to next vertex....
<br/>
<br/>
In DFS it will traverse to the next vertex one by one
Eg: Lets take a vertex "0"(let us traverse increasing order) so it will start traversing from 0->1->5 after 5 there is no were to go so it will move back to 1 and traverse the other side so it will go like this 0->1->5->6->7->9->8->6 
<li>Taking this below example to implement the DFS code</li>
<img class="image" src="images/graph_DFS.png"/>`);
