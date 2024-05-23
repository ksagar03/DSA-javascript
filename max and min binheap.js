class maxbinheap{
  constructor(){
    this.heap = []  // the start 0f the array is null because it makes the understanding easy 
  }

  insert(val)
  {
    this.heap.push(val)
    if(this.heap.length >0) // when first element is inserted then this condition will not allow to execute the below code
    {
      let currentindex = this.heap.length - 1 
      let parentindex = Math.floor(currentindex/2)
      while(this.heap[currentindex] > this.heap[parentindex]){
        // this while loop will goes on execute until the condition is false so to stop swaping and accessing it with null below if conditions is used
        if(currentindex >=0){ 
           [this.heap[currentindex],this.heap[parentindex]] = [this.heap[parentindex],this.heap[currentindex]]
        }
        
       if(parentindex >0){
            currentindex = parentindex
        parentindex = Math.floor(currentindex/2)
      } else break
       }

    }
    return this.heap
  }
}

let heaplist = new maxbinheap()

heaplist.insert(100)
heaplist.insert(200)
heaplist.insert(150)
heaplist.insert(24)

//  for minbinary heap just need to change the while condition from more than to less than

// Priority Queue
class Node{
  constructor(val,priority){
    this.val = val,
    this.priority = priority
  }
}
 class priorityQueue{
   constructor(){
     this.array = []
   }
   insert(val, priority){
     let newNode = new Node(val, priority)
     this.array.push(newNode)
     if(this.array.length >0){
       let currentindex = this.array.length -1
       let parentindex = Math.floor(currentindex/2)
       while(this.array[currentindex].priority < this.array[parentindex].priority){
         if(currentindex >=0){
           [this.array[currentindex],this.array[parentindex] ] =[this.array[parentindex],this.array[currentindex] ] 
         }
         if(parentindex > 0){
           currentindex = parentindex
           parentindex = Math.floor(currentindex/2)
         }else break
       }
     }
     return this.array
   }
   toRemove(){
     let length = this.array.length
     if (length >0){
       if (length ==1){
         return this.array.pop()
       }
      let removed = this.array[0]
      let replaced  = this.array.pop()
     this.array[0] = replaced
       length = this.array.length
     if(length < 2) return removed
      if(length ==2) {
        if (this.array[0].priority > this.array[1].priority){
          [this.array[0], this.array[1]] = [this.array[1], this.array[0]]
          return removed
        }
      }

       let i= 0
       let leftindex = 1
        let rightindex = 2
       while (this.array[i].priority >= this.array[leftindex].priority || this.array[i].priority >= this.array[rightindex].priority) {
         if (this.array[leftindex].priority < this.array[rightindex].priority){
           [this.array[i] , this.array[leftindex]] = [this.array[leftindex] , this.array[i]]
           i = leftindex
         }else {
            [this.array[i] , this.array[rightindex]] = [this.array[rightindex] , this.array[i]]
             i= rightindex
         }
       leftindex = 2*i
       rightindex = 2*i +1
       if (this.array[leftindex] == undefined || this.array[rightindex] == undefined) break;
      } 
       return removed
     }else return "please add more data"

   }


 }
let heap = new priorityQueue();
heap.insert("feaver", 3);
heap.insert("surgery", 1);
heap.insert("cough", 4);
heap.insert("fracture", 2);
heap.insert("infection", 7);
heap.insert("headache", 5);
heap.insert("flue", 6);

