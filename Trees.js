document.write(`<b><h1>Trees</h1></b> <br/>
It is a data structure which consists of nodes in a parent/child relation ship <br/>
<img class="image" src="images/Trees.png"/> <br/>
<img class="image" src="images/Tree terminology.png"/> <br/>
In linked list we had pointed each node to the next node which used to form a linear line, <br/>
but in Trees each node(parent) will be having one or more branches(which will be pointing towards there children nodes) and the last branch which is pointing nodes are called <u>Leaf Node</u>. <br/>
Note: one parent Node can not point towards the next parent node . <br/>
<ul>
Real world scenariors where trees are used
<li>HTML DOM(document object module)</li>
<li>Netwoking</li>
<li>Machine learning</li>
<li>folder structures in our OS</li>
</ul>
There are so many types of trees which follows same principle but have different properties.Below are some types of trees
<br/>
<b><h3>1. Binary Trees:</h3></b> From the name Binary we can get to know it is refering to 2 i.e each node will be having max to max two childrens.
<ul><b><h4>1.1 Binary Search Trees:</h4></b> It this Trees the data's will be arranged in such a way that each node's(value) left children value will be less than the current node value and right children's value will be more than the current node value</ul>
<img class="image" src="images/Binary tree vs BST.png"/> <br/>

`)


class Node{
  constructor(val){
    this.value = val
    this.left =null
    this.right = null
  }
}
class binarysearchtree{
  constructor(){
    this.root = null
  }
  insert(val){
    let newNode = new Node(val) 
    if(!this.root){
      this.root = newNode
      return this
    }else{
      let current = this.root
    while(true){
      if(val < current.value ){
        if(current.left === null){
          current.left = newNode
          return this
        }
        else current = current.left
     }
      if(val > newNode.value ){
      if(current.right === null){
        current.right = newNode
        return this
      }
      else  current = current.right
    }
    }
  }
  }
}

let BST = new binarysearchtree()
// BST.root = new Node(100)
// BST.root.left = new Node(70)
// BST.root.right = new Node(110)
BST.insert(100)
