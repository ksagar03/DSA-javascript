document.write(`<img class="image" src="/images/doubly_linked_list.PNG"> <br/> Its a type of data structure which is used to store list of values <br/>
<b> It is similar to the singly linked list but the only difference is in singly linked list each Node used to point towards the next node but it was not pointing towards the prev node so tho overcome this doubly linked list was introduced where it saves both prev and next node pointers for each node  </b> <br/>
Unlike the array which allocates memory and stores data sequentially(which makes deficult in inserting and removing the data), in linked list values(nodes) are linked via pointers.
<br/>
In liked list each element stored is refered to as <b>Nodes</b>. Each node contains value and pointer, this pointer points to the next element or Node.
Note: The pointer will refers to the Null when it comes to the end of the list
<br/>
The linked list contains <u>head</u> and <u>tail</u> which points towards start and end of the list

<br/>
In linked list insertion and deletion of values was easy but accessing values randomlly is not so easy. <br/>
<b>Time Complexity </b>: <br/> For insertion it is O(1) (but in array it is O(n) ) <br/>for removal it is O(1)(this is for removing the data from the start) or O(n) (when the data is removed from the last then we need to iterate over the list) <br/> for searching and accessing the data it is O(n)  `)

class Node {
  constructor(val){
    this.prev = null
    this.next= null
    this.value = val
  }
}
class doubly_linked_list{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
push(val){
  let newNode = new Node(val)
  if(!this.head){
    this.head = newNode
    this.tail = this.head
    }
  this.tail= newNode
}
}
