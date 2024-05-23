class maxbinheap{
  constructor(){
    this.heap = [null]  // the start 0f the array is null because it makes the understanding easy 
  }

  insert(val)
  {
    this.heap.push(val)
    if(this.heap.length >2) // when first element is inserted then this condition will not allow to execute the below code
    {
      let currentindex = this.heap.length - 1 
      let parentindex = Math.floor(currentindex/2)
      while(this.heap[currentindex] > this.heap[parentindex]){
        // this while loop will goes on execute until the condition is false so to stop swaping and accessing it with null below if conditions is used
        if(currentindex >=1){ 
           [this.heap[currentindex],this.heap[parentindex]] = [this.heap[parentindex],this.heap[currentindex]]
        }
        
       if(parentindex >1){
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
