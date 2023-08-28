document.write(`<b>Linked List</b> <br/> Its a type of data structure which is used to store list of values <br/>
Unlike the array which allocates memory and stores data sequentially(which makes deficult in inserting and removing the data), in linked list values(nodes) are linked via pointers.
<br/>
In liked list each element stored is refered to as <b>Nodes</b>. Each node contains value and pointer, this pointer points to the next element or Node.
Note: The pointer will refers to the Null when it comes to the end of the list
<br/>
The linked list contains <u>head</u> and <u>tail</u> which points towards start and end of the list
<img class="image" src="/images/linked_list_eg.jpg">
<br/>
In linked list insertion and deletion of values was easy but accessing values randomlly is not so easy. <br/>
<b>Time Complexity </b>: <br/> For insertion it is O(1) (but in array it is O(n) ) <br/>for removal it is O(1)(this is for removing the data from the start) or O(n) (when the data is removed from the last then we need to iterate over the list) <br/> for searching and accessing the data it is O(n)  `)


//  lets start with code
class Node {
  constructor(val) {
    this.value = val
    this.next = null
    // here if next value is not assigned or created then it assign value null
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
    // at the start head and tail will be assigned with value null after inserting the value head and tail will get updated
  }
  push(val) {
    var newNode = new Node(val)
    if (this.head == null && this.tail == null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    // if we are not returning any value then it will show as undefiend
    //  so to return whole list just need to return this  --> it will return the current list
    return this
  }
  traverse() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
  pop() {
    if (!this.head) {
      return undefined
    }
    var current = this.head
    var prev = current
    while (current.next) {
      prev = current
      current = current.next // this line will help us to move one element ahead

    }
    this.tail = prev
    this.tail.next = null
    this.length--
    if (this.length === 0) { // this is an edge case where if the length is equal to zero then head and tail will be assigned null
      this.head = null
      this.tail = null
    }
    return current
    // perv.next = null
  }
  shift() {
    //  to remvoe start of the element
    if (!this.head) {
      return undefined
    }
    var oldhead = this.head
    // var nexthead= this.head.next
    this.head = oldhead.next
    this.length--
    console.log(oldhead.value)
    // console.log(nexthead.value)
    console.log(this.head.value)
    if (this.length === 0) { // this is an edge case where if the length is equal to zero then head and tail will be assigned null
      this.head = null
      this.tail = null
    }
    return oldhead
  }
  unshift(val) {
    var newheadnode = new Node(val)
    if (this.head == null && this.tail == null) {
      this.head = newNode
      this.tail = this.head
    }
    else {
      var currenthead = this.head
      this.head = newheadnode
      newheadnode.next = currenthead
      this.length++
    }
    return this
  }
  get(position) {
    if (position < 0 || position >= this.length) {
      return "undefined position"
    }
    let currentnode = this.head
    for (let i = 0; i < position; i++) {
      currentnode = currentnode.next
    }
    // console.log(currentnode)
    return currentnode
  }
  set(index, val) {
    // to change the value of the node for the given index 
    let nodeindex = this.get(index)
    if (nodeindex) {
      nodeindex.value = val
    } else {
      return "undeifned index"
    }
    return nodeindex
  }
  insert(index, val) {
    // this will insert a value at given position
    // to cover up edge cases 
    if (index < 0 || index > this.length) {
      return "please provide valid index"
    }
    if (index === 0) {
      let value = this.unshift(val)
      if (value) {
        return true
      } else return false
      // or return !! this.unshit(val) this will return true or false
    }
    if (index === this.length) {
      let value = this.push(val)
      if (value) {
        return true
      } else return false
      // or return !! this.push(val) this will return true or false
    }
    // all the edge cases covered
    let previndexnode = this.get(index - 1)
    // let currentindexnode = this.get(index)// insted of calling a get function again which will add more time complexity, just we can do previndexnode.next
    let currentindexnode = previndexnode.next
    let newindexnode = new Node(val)
    previndexnode.next = newindexnode
    newindexnode.next = currentindexnode
    this.length++
    return this

  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return !!this.set()
    }
    if (index === this.length) return !!this.pop()
    let prevIndexNode = this.get(index - 1)
    let currentIndexNode = prevIndexNode.next
    prevIndexNode.next = currentIndexNode.next
    this.length--
    return true
  }
  reverse() {
    if (!this.head) {
      return "please insert the data"
   }
    //  Here in reverse the current node should point towards the previous node that
    //  but if we do like that then "next node pointer will be gone" so to overcome that we should save the next node in some variable before pointing towards the previous pointer
    let currentnode = this.head 
    this.head = this.tail // here swaping of head and tail is happening
    this.tail = currentnode
    let next
    let prevnode = null
    for (let i = 0; i < this.length; i++) {
      next = currentnode.next // current nodes next is saved in the variable  
      currentnode.next = prevnode
      prevnode = currentnode
      currentnode = next

    }
    return this
  }
}



// var first = new Node("1")

// first.next =new Node("2")
// first.next.next =new Node("3")
// first.next.next.next = new Node("4")
// console.log(first)
// if i want to assign any new value then i need to write first.next.next...... it goes on.., so to avoid that, we can create a method which will do that for us.
/*
Node {value: "hi", next: Node}
next: Object
next: Object
next: null
value: "this"
__proto__: Object
value: "hello"
__proto__: Object
value: "hi"
__proto__: Object 
*/
let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.push(10)



console.log(list)
// At the start it will be empty
// SinglyLinkedList {head: null, tail: null, length: 0}
/*
list.push("h1llo")
SinglyLinkedList {head: Node, tail: Node, length: 1}
// for the first element push head and tail will point towards the same node
list.push("sagar")
SinglyLinkedList {head: Node, tail: Node, length: 2}
head: Object
next: Object // 2nd node  
next: null // there are only two elements so next is set to null
value: "sagar"
__proto__: Object
value: "h1llo"   // 1st node
__proto__: Object
length: 2
tail: Object  // tail is pointing towards the last element of the node
next: null
value: "sagar"
__proto__: Object
__proto__: Object
 */

