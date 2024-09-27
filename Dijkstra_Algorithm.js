document.write(`<h2>Dijkstra Algorithm</h2>
<li>It is one of the most famous and widely used algorithms around</li>
<li>This algorithm is used to find a shortest path between two vertises in a graph  </li>
<li>It is used in lot of places like finding the shortest path in google maps(or any other map) etc.</li>
<li> To use dijkstra alogrithm we need to use Weighted Graph(This are the type of Graph in which each edge will be assigned with a value) Eg: </li>
<img class="image" src="images/weighted_graph.png"/>`);

class NaivePriorityQueue {
  // this will arrange the data in based the priority lowest  priority will be at the top
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }
  dqueue() {
    return this.queue.shift();
  }
  // sort(){
  //   this.queue.sort((a,b) => a.priority - b.priority)
  // }
} // But the time complexity of above priority queue is O(N log N) which is bad

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  // Methods
  addvertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addedge(v1, v2, weight) {
    this.adjList[v1].push({ vertex: v2, weight });
    this.adjList[v2].push({ vertex: v1, weight });
  }

  DijkstraAlgo(startV, endV) {
    let priorityVertex = new NaivePriorityQueue();
    let calcDist = {};
    let previous = {};
    let smallest
    let efficientPath = []
    // Initial values of calcDist and previous
    for (let i in this.adjList) {
      if (i === startV) {
        calcDist[i] = 0;
        priorityVertex.enqueue(i, 0);
        // the starting vertex provided by a user should be assigned with priority 0 and the distance will will also be zero  
      } else {
        calcDist[i] = Infinity;
        priorityVertex.enqueue(i, Infinity);
      }
      previous[i] = null;
    }
    // initial state created
    while (priorityVertex.queue.length) {
      smallest = priorityVertex.dqueue().val
      // dqueue().val has been written because dqueue() function will return the the vertex value and priority but we need only vertex value
      if (smallest == endV) {

        // console.log(calcDist)
        // console.log(previous)
        // need to build array that will return at the end
        while (previous[smallest]) {
          efficientPath.push(smallest)
          smallest = previous[smallest]
        }
        break;
      }
      if (smallest || calcDist[smallest] !== Infinity) {
        for (let neighbour in this.adjList[smallest]) {
          let neighbourNode = this.adjList[smallest][neighbour]
          // console.log(neighbourNode)
          let candidate = calcDist[smallest] + neighbourNode.weight
          // console.log(candidate)
          if (candidate < calcDist[neighbourNode.vertex]) {
            calcDist[neighbourNode.vertex] = candidate
            previous[neighbourNode.vertex] = smallest
            priorityVertex.enqueue(neighbourNode.vertex, candidate)
          }
        }

      }
    }
    efficientPath.push(startV)
    return efficientPath.reverse()
    // console.log(priorityVertex);
    // console.log(previous);
  }
}
// A simple priority Queue

let g = new WeightedGraph();
g.addvertex("A");
g.addvertex("B");
g.addvertex("C");
g.addvertex("D");
g.addvertex("E");
g.addvertex("F");
g.addvertex("G");
g.addedge("A", "B", 4);
g.addedge("A", "C", 1);
g.addedge("A", "D", 2);
g.addedge("B", "G", 2);
g.addedge("C", "E", 8);
g.addedge("D", "E", 1);
g.addedge("C", "F", 2);
g.addedge("F", "E", 3);
g.addedge("G", "E", 5);

console.log(g.DijkstraAlgo("A", "E"))

// let q= new PriorityQueue()
// q.enqueue("C",5)
// q.enqueue("A",3)
// q.enqueue("D",9)
// q.enqueue("N",1)
// q.enqueue("G",8)
// q.enqueue("I",5)
// q.enqueue("X",2)
// q.enqueue("Q",7)


