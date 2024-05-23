class graphs {
  constructor(){
    this.adjlist ={}
  }
  toaddvertex (v1){
    if(!this.adjlist[v1]) {
      this.adjlist[v1] =[]
      return this.adjlist
    }else return "this vertex is already there in the adjlist"
  }
  toaddedges(v1,v2){
    if (this.adjlist[v1] && this.adjlist[v2]){
      this.adjlist[v1].push(v2)
      this.adjlist[v2].push(v1)
      return this.adjlist
    }else return "invaild vertex"
  }
  toremoveedges(v1,v2){
    if(this.adjlist[v1] && this.adjlist[v2]){
      this.adjlist[v1]=this.adjlist[v1].filter((v) => (v !== v2))
      this.adjlist[v2]=this.adjlist[v2].filter((v) => (v !== v1))
      return this.adjlist
    }else return "invaild vertex"
  }
  toremovevertex(v){
    if(this.adjlist[v]){
      let vertex = this.adjlist[v]
      for(let v1 in vertex ){
        
        console.log(vertex[v1])
        this.toremoveedges(v,vertex[v1])
      }
      delete this.adjlist[v]
      return this.adjlist
    }else return "invalid index"
  }
  DFS_Traverse(vertex){
    let visited = {}
    let result  =[]
    let adjlist  = this.adjlist
    function DFS(vertex){
       if(!vertex){
         return
    }
      visited[vertex] = true
      result.push(vertex)

      adjlist[vertex].map((val) => { if(!visited[val]) {return DFS(val)}})
      
    }
    DFS(vertex)
    return this.result
    
  }

  //  bfs and dfs traversing via iteration
  DFS_iterative(vertex){
    let queue = [vertex]
    let isvisited = {}
    let result = []
    isvisited[vertex] = true
    while(queue.length){
      vertex = queue.pop() // for DFS will remove element from the last but for BFS it will be removed from the start
      result.push(vertex)
      this.adjlist[vertex].map((val) => {
        if(!isvisited[val]){
          isvisited[val] = true
          queue.push(val)
        }
      })
      
    }
    return result
  }
  
  
}

let g = new graphs();
g.toaddvertex("A");
g.toaddvertex("B");
g.toaddvertex("C");
g.toaddvertex("D");
g.toaddvertex("E");
g.toaddvertex("F");
g.toaddedges("A", "B");
g.toaddedges("A", "C");
g.toaddedges("B", "D");
g.toaddedges("C", "E");
g.toaddedges("D", "E");
g.toaddedges("D", "F");
g.toaddedges("E", "F");
