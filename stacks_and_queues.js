// stacks and queues
document.write(`<b>STACKS:</b> they are abstract type data structure which is used to store data <br/> <img class="image" src="images/Stacks.PNG" /> <br/>
It fallows a principle <b>LIFO - Last In First Out</b> eg: recursion
<br/>
example 2: Control Z  - for undoing the things
<br/>
there are various way to implement stacks: <br/> 
 1. built in method on array: push(this will add the element at the last) and pop(this will remove the element from the last) unshift(this will add the element at the start), shift(this will remove the element at the start) but using shift and unshift is not a best practice in array (as it requires to reorder the index of the array) 
 <br/>
2. Using singly linked list: we can write our own method to remove the add and remove the data but the problem is pop method in singly linked list is have having time complexity of O(n) so insted of that I will be defining shift and unshift methods
<br/>
<img class="image" src="images/time_complexity_of_stacks.PNG" />
<br/>
<br/>
<b>QUEUES:</b> It is similar to stacks but the only difference is it fallows <b>FIFO - First In First Out</b>
<br/>
there are various way to implement stacks: <br/> 
 1. built in method on array: using push and shift (or unshift and pop ) method we can follow the principle FIFO <br/>
 2. Using singly linked list `);

class Node {
  constructor(val) {
    (this.value = val), (this.next = null);
  }
}
class stack {
  constructor() {
    (this.first = null), (this.last = null), (this.size = 0);
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let currenthead = this.first;
      this.first = newNode;
      newNode.next = currenthead;
    }
    this.size++;
    return this;
  }
  shift() {
    if (!this.first) return "please insert the value to remove";
    this.first = this.first.next;
    this.size--;
    if (this.size == 0) {
      this.first = null;
      this.last = null;
    }
    return this;
  }
}
// queues method --------------------------------------------------------
class queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  shift() {
    if (!this.first) return "please insert the value to remove";
    this.first = this.first.next;
    this.size--;
    if (this.size == 0) {
      this.first = null;
      this.last = null;
    }
    return this;
  }
}

let list = new stack();
list.unshift(100);
list.unshift(90);
list.unshift(80);
// list.unshift(70)
// list.unshift(60)
// list.unshift(50)
// list.unshift(40)

let queues = new queue();
queues.push(10);
queues.push(20);
queues.push(30);
queues.push(40);
queues.push(50);
queues.push(60);
