document.write(`<h2>Dijkstra Algorithm</h2>
<li>It is one of the most famous and widely used algorithms around</li>
<li>This algorithm is used to find a shortest path between two vertises in a graph  </li>
<li>It is used in lot of places like finding the shortest path in google maps(or any other map) etc.</li>
<li> To use dijkstra alogrithm we need to use Weighted Graph(This are the type of Graph in which each edge will be assigned with a value) Eg: </li>
<img class="image" src="images/weighted_graph.png"/>`)



class WeightedGraph{
  constructor(){
    this.adjList ={}  
  }
  // Methods
  addvertex(vertex){
    if(!this.adjList[vertex]) this.adjList[vertex] =[]
  }
  addedge(v1,v2, weight){
    this.adjList[v1].push({vertex:v2,weight})
    this.adjList[v2].push({vertex:v1,weight})
  }
}
let g= new WeightedGraph()
g.addvertex("A")
g.addvertex("B")
g.addvertex("C")
g.addvertex("D")
g.addvertex("E")
g.addvertex("F")
g.addedge("A","B",10)
g.addedge("A","C",30)
g.addedge("B","D",5)
g.addedge("C","E",10)
g.addedge("D","E",25)
g.addedge("D","F",29)
g.addedge("E","F",100)


