document.write(`<h2>Tree traversel</h2> Genrally in linked list the traverse is easy i.e it can be one direction or both the direction and it is easy to traverse <br/> but in 
Trees it is deficult to traverse because in each node we have one or more child node so traversing is bit tricker and we have so many methods which can be implemented for traversing the Tree
<ul>Commonlly used traverse techniques:
<li>Breadth first search(BFS)</li>
<li>Depth first search(DFS)</li></ul>
<br/>
<img class="image" src="images/Breadth_first_search.png" />
<br/>
In BFS the traversing is done horizantally (root -> node -> child node)
<h3>DFS</h3>
In DFS we have 3 different approaches 
<li>DFS In-order</li>
<li>DFS Pre-order</li>
<li>DFS Post-order</li>
<img class="image" src="images/DFS_In-order.png" />
<img class="image" src="images/DFS_Pre-order.png" />
<img class="image" src="images/DFS_Post-order.png" />


`)

class Node{
  constructor(val){
    this.value=val
    this.left = null
    this.right = null
    
  }
}
class tree{
  constructor(){
    this.root = null 
  }
  push(val){
    let Newnode = new Node(val)
    if (this.root == null){
      this.root = Newnode
      return this
    }else{
      let current = this.root
      while(true)
      {
        if (!current.left){
        current.left = Newnode
        return this
      } else if (!current.right)
      {
        current.right = Newnode
        return this
      } else current =current.left
        
      }
       
    }
  }
  //  implementing BFS 
 BFS(){
    let currentNode = this.root, 
      queue =[],
      result = []
   queue.push(this.root)
   while(queue.length){
     currentNode = queue.shift()
     result.push(currentNode.value)
     if(currentNode.left) queue.push(currentNode.left)
     if(currentNode.right) queue.push(currentNode.right) 
     
   }
   return result
  }
}

let list = new tree()
list.push(10)
list.push(6)
list.push(15)
list.push(3)
list.push(9)
list.push(20)
list.push(12)
list.push(10)
