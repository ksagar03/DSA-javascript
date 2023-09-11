document.write(`<h1>HEAPS</h1>
<b>It is a type of Tree</b>
In heaps also we have so many types 
<br/>for more information check this <a href="https://en.wikipedia.org/wiki/List_of_data_structures">link</a> 
<h2>Binary heaps</h2>
It is similar to binary search tree but the only change is the rules of arranging the nodes
<br/>
there are two types of binary heaps
<li>MaxBinaryHeap</li>
<li>MinBinaryHeap</li>
In <b>MaxBinaryHeap</b> the parent Node should be more that the Child Node(note: there is no restriction in placing the child nodes)
Eg: In the below example as we can see "25" is more than "19" but this a valid Maxbinaryheap as the rule is applied only to the respective parent and child nodes it has no link with the other parent node 
<img class="image" src="images/MaxBinaryHeap.png"/>
<br/>
In <b>MinBinaryHeap</b> it is Vise versa child nodes should be more than the parent node 
eg: 
<img class="image" src="images/MinBinaryHeap.png"/>
<br/>
<b>Binary heap Most commonlly used used to implement <u>priority Queues</u> </b>
also Binary heaps are used in graphs traversal
<h3>Priority Queue:</h3>
<li>It is a data structure where each element has a priority, and the elements with higher priorities are served before elements with lower priorities.</li>
<li>Normally in Binary heap the value are stored in array or list and based on the value inserted it will be aranged, <br/>
But in Priority queue if we follow the same method then time complexity will be more... </li>
`)

class MaxBinHeap{
  constructor(){
    this.value = [41,39,33,18,27,12]
  }
  
insert(val){
  this.value.push(val)
  let arr = this.ToFindCorrectPlace()
  return arr
}
  ToFindCorrectPlace(){
    let arr = this.value
    let currentIndex = this.value.length - 1
    let parentIndex = Math.floor(currentIndex-1/2)
    while(arr[currentIndex] > arr[parentIndex] && currentIndex >0 ){
      [arr[currentIndex],arr[parentIndex]] = [arr[parentIndex],arr[currentIndex]] 
      currentIndex = parentIndex
      parentIndex = Math.floor(currentIndex-1/2)
      
    
  }
    this.value = arr
    return arr
  }
  // ExtractMaxBinary(){
  //   let arr = this.value
  //  let parentIndex = 0
  //   const oldRoot = this.value[0]
  //     let lastNode = arr.pop()
  //   arr[0] = lastNode
  //   console.log(arr)
  //   // [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]]
  //   let childIndex1  = 2*parentIndex + 1
  //   let childIndex2 = 2*parentIndex + 2
  //   let maxChildValue = Math.max(arr[childIndex1],arr[childIndex2])
    
  //   while(arr[parentIndex] < maxChildValue){
      
  //     let temp = maxChildValue
  //       // console.log(maxChildValue)
  //       // console.log(arr[parentIndex])
  //       if(arr[childIndex1] == temp){
  //       temp = childIndex1
  //     }else temp = childIndex2 
  //         console.log(temp)
  //     [arr[parentIndex],arr[temp]] = [arr[temp], arr[parentIndex]]
  //   parentIndex = temp
  //   childIndex1  = 2*parentIndex + 1
  //   childIndex2 = 2*parentIndex + 2
  //   maxChildValue = Math.max(arr[childIndex1],arr[childIndex2])
  //     console.log(maxChildValue)
  // }
  //   this.value = arr
  //   return oldRoot
  // }
  //  the problem with above solution is if the ethier of the childindex is null then can't swap the value
  
ExtractMaxBin(){
  
  // let length = this.value.length
  let oldroot = this.value[0]
  let lastNode  =  this.value.pop()
  if (this.value.length > 0){
   this.value[0] = lastNode
  this.bubblein() 
  }
  
  return oldroot
}
  bubblein(){
    let parentindex= 0
    let element = this.value[0]
    while(true)
    {
      
      let length = this.value.length
      let childindex1  = 2*parentindex + 1
      let childindex2 = 2*parentindex + 2
      let leftChild, rightChild
      let swap = null
      if (childindex1 < length){
      leftChild = this.value[childindex1]
      if(element < leftChild){
        swap = childindex1
      }
      }

    if (childindex2 < length){
     rightChild = this.value[childindex2]
      if((swap === null && element < rightChild)||
        (swap !== null &&  rightChild > leftChild)){
        swap = childindex2
      }
    }
     
      if(swap == null) break;
       [this.value[parentindex],this.value[swap]]= 
      [this.value[swap],this.value[parentindex]]
      parentindex = swap
      element = this.value[swap] 
    
    }
  }
}
list = new MaxBinHeap()
// need to check this ExtractBinmax

// Priority Queues: --------------------------------------------------

class Node{
  constructor(val){
    this.value = val
    this.priority = null
  }
}
 class PriorityQueue{
   constructor(){
     this.values =[]
   }
   insert(val){
     let NewNode = new Node(val) 
     this.values.push(NewNode)
     this.ToFindCorrectPlaceNode()
   }
   ToFindCorrectPlaceNode(){
     let arr= this.values
     let currentNodeIndex = arr.length - 1
     let parentNodeIndex = (currentNodeIndex -1)/2
     while(arr[currentNodeIndex].priority < arr[currentNodeIndex].priority ){
       [arr[currentNodeIndex],arr[parentNodeIndex]] = 
       [arr[parentNodeIndex],arr[currentNodeIndex]]
       currentNodeIndex = parentNodeIndex
       parentNodeIndex = (currentNodeIndex -1)/2
     }
   }
 }
 let heap = new PriorityQueue()
