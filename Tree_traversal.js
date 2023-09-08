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
<h3>BFS or DFS which one better??</h3>
<li>Answer is it all depends on the tree</li>
<li>In DFS and BFS time complexity is same so we need to consider space complexity for comparion</li>
<img class="image" src="images/basic_tree_eg.PNG" />
<br/>
take an example of this tree where we have so many nodes,
<li>In BFS we need to store each node in a queue so the space complexity is more but DFS we are directly storing the value in the result </li>
<img class="image" src="images/Worst_case_BST.png" />
<li>Here it is vise-versa DFS will take more space than BFS, as in BFS the values will be removed from the queue so the space complexity is less compared to DFS </li>
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
   let leftH =0, rightH =0
   queue.push(this.root)
   while(queue.length){
     currentNode = queue.shift()
     result.push(currentNode.value)
     if(currentNode.left) {queue.push(currentNode.left)
                        leftH++  }
     if(currentNode.right) {queue.push(currentNode.right)
                         rightH++  }
     
   }
   console.log(Math.max(leftH,rightH))
   return result
  }
  DFS_pre_order(){
    let data = []
    let current = this.root
    const DFStraverse = (node) => {
      data.push(node.value)
      if(node.left) DFStraverse(node.left)
      if(node.right) DFStraverse(node.right) 
    }
    DFStraverse(current)
    return data
  }
  DFS_Post_order(){
    let data =[]
    let current = this.root
    const DFSPostTraverse = (node) => {
      if(node.left)DFSPostTraverse(node.left)
      if(node.right)DFSPostTraverse(node.right)
      data.push(node.value)
    }
    DFSPostTraverse(current)
    return data
  }
  DFS_In_order(){
    let data =[]
    let current = this.root
    const DFSInTraverse = (node) => {
      if(node.left)DFSInTraverse(node.left)
       data.push(node.value)
      if(node.right)DFSInTraverse(node.right)
     
    }
    DFSInTraverse(current)
    return height
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
list.push(19)
list.push(17)

/*DFS_pre_order(){
    let currentNode = this.root,
      queue = [],
      resultleft = [],
      resultright = []
    queue.push(this.root)
    while(queue.length){
      currentNode = queue.shift()
      let node = currentNode
      result.push(currentNode)
      if(currentNode.left){
        currentNode= currentNode.left
        queue.push(currentNode)
      }
    }
  } */