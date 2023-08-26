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
<b>Time Complexity </b>: <br/> For insertion it is O(1) (but in array it is O(n) ) <br/>for removal it is O(1)(this is for removing the data from the start and from the end) or O(n/2) (when the data is removed from the user provided index) <br/> for searching and accessing the data it is O(n)  or O(n/2) (it changes based on the user provided index)<br/> <b>example where the doubly linked list is used: In browseing we can go to previous page and next page </b> `)

class Node {
  constructor(val) {
    this.prev = null
    this.next = null
    this.value = val
  }
}
class doubly_linked_list {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode

    }
    this.length++
    return this
  }
  pop() {
    if (this.length === 0) {
      return undefined
    }
    let currenttail = this.tail
    if (this.length === 1) {
      [this.head, this.tail] = [null, null]

    } else {
      let prevNode = this.tail.prev
      this.tail.prev = null
      prevNode.next = null
      this.tail = prevNode
    }
    this.length--
    return currenttail.value
  }
  shift() {
    if (this.length === 0) {
      return undefined
    }
    let currentHead = this.head
    if (this.length === 1) {
      [this.head, this.tail] = [null, null]
    } else {
      let nextHead = this.head.next
      nextHead.prev = null
      currentHead.next = null
      this.head = nextHead
    }
    this.length--
    return currentHead.value
  }
  unshift(val) {
    // to add element at the start
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.prev = null
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }
  get(position) {
    if (position < 0 || position > this.length) {
      return null
    }
    else if (position >= (this.length / 2)) {
      console.log("working from the last")
      let positionvalue = this.tail
      for (let i = this.length - 1; i >= position; i--) {
        positionvalue = positionvalue.prev
      }
      return positionvalue
    } else {
      console.log("working from the first")
      let positionvalue = this.head
      for (let i = 1; i < position; i++) {
        positionvalue = positionvalue.next
      }
      return positionvalue
    }
  }
  set(val, position) {
    let getposition = this.get(position)
    if (getposition) {
      getposition.value = val
      return getposition.value
    }
    return "undefined position"
  }
  insert(val, position) {
    if (position === 0 || position === 1) return !!this.unshift(val)
    if (position === this.length) return !!this.push(val)
    let getposition = this.get(position)
    if (getposition) {
      let NewNode = new Node(val)
      let currentposition = getposition
      let prevposition = getposition.prev
      NewNode.prev = prevposition
      NewNode.next = currentposition
      prevposition.next = NewNode
      currentposition.prev = NewNode
      this.length++
      return true
    }
    return "undefined position"
  }
remove(position){
  if (position ===0 || position === 1) return !!this.shift()
  if (position === this.length) return !!this.pop()
  let currentNode = this.get(position)
  if (currentNode){
    let prevNode = currentNode.prev
    let nextNode = currentNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    currentNode.prev = null
    currentNode.next = null
    this.length--
    return true 
  }else return false
}
}

let list = new doubly_linked_list()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)

