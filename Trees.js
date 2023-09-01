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
<b>Time complexity</b>:
for INSERTING & SEARCHING we will have average time complexity of O(log n) which is pretty much good
<br/>
but for the worst case time complexity - were we have one sided BST Eg: <br/>
<img class="image" src="images/Worst_case_BST.png" />
<br/>
here for searching the value 91 in BST we need go all the way to end so it will take O(n) time complexity.
`)


class Node{
  constructor(val){
    this.value = val
    this.left =null
    this.right = null
    this.count = 0
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
// Here if we have a duplicate values then the while loop will run in infinite so to avoide that we can either 
// 1.ignore the duplicate or 
// 2. we can have a count which will have count of each node
//  i will implement 2nd method
      if (val === current.value){
        current.count++
        return this
      }
      if(val < current.value ){
        if(current.left === null){
          current.left = newNode
          return this
        }
        else current = current.left
     }
      else if(val > current.value ){
      if(current.right === null){
        current.right = newNode
        return this
      }
      else  current = current.right
    }
    }
  }
  }
  find(val){
    if(!this.root){
      return "please insert value"
    }
      let isfound = false
      let current = this.root
      while(current && !isfound){
        // if the value is not htere in the tree and we met end of the tree (i.e current === leaf node left or rigt value(which will be null) ) 
        if(val < current.value){
          current = current.left
          }
        else if(val > current.value){
          current = current.right
        }
        else {
        isfound = true
        return current
        }
      }
    return "the value was not found"
  }
}

let BST = new binarysearchtree()
// BST.root = new Node(100)
// BST.root.left = new Node(70)
// BST.root.right = new Node(110)
BST.insert(100)
BST.insert(150)
BST.insert(20)
BST.insert(50)
BST.insert(200)

