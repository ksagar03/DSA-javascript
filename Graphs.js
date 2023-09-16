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
In aobe example we had numbers what if insted of numbers we had some strings so at that time we can use hash maps
<h3>Time and space complexity b/n Adjacency matrix and Adjacency list</h3>
<img class="image" src="images/Big O of Adj matrix and list.png" />
`)

// Building a uni-directed Graph
class Graph{
  constructor(){
    this.adjlist = {}
  }
  addvertex(vertex){
   if(!this.adjlist[vertex]) this.adjlist[vertex] = []
    else return alert("this vertex already exsist please add another vertex")
    // if the vertex is already there then it will be rewitten so to avoid that if condition is written
  }
  addedges(v1,v2){
    if(this.adjlist[v1] && this.adjlist[v2]){
      this.adjlist[v1].push(v2)
      this.adjlist[v2].push(v1)
      return this.adjlist
    }else{
      return alert("vertex is not there in the list")
    }
  }

removeedges(v1,v2){
   if(this.adjlist[v1] || this.adjlist[v2]){
     this.adjlist[v1]  = this.adjlist[v1].filter( v => v !== v2)
      this.adjlist[v2]  = this.adjlist[v2].filter( v => v !== v1)
   }else{
      return alert("vertex is not there in the list")
    }
}
removevertex(v1){
  if(this.adjlist[v1]){
     let vertex = this.adjlist[v1]
    for(let i in vertex){
      this.removeedges(v1,vertex[i])
    }
   delete this.adjlist[v1]
  }else{
      return alert("vertex is not--- there in the list")
    }
}
}
let graph = new Graph()
graph.addvertex("sagar")
graph.addvertex("surya")
graph.addvertex("kiran")
graph.addedges("sagar","surya")
graph.addedges("sagar","kiran")
graph.addedges("kiran","surya")



