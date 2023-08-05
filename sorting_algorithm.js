//  there are various sorting algorithm which uses diferent ideas or methods to sort the given data based on the given condition.  (i.e either in increasing or decreasing order)
/*
different sorting algorithm:
1. bubble sort 
2. insertion sort
3. selection sort
4.quick sort
5.heap sort
6.merge sort
7. shell sort ....


There are some built in sorting methods in javascripts: 
sort -> this method is used to sort the given data
a= [10,203,43,2,1] 
if we write a.sort() -> it wont provide correct answer
In This first given data is converted into srtring then it takes the unique key of that string and then it starts sorting using those unique key
this method works well with strings sorting but when it comes to number it does not work
*/

a = [10, 203, 43, 2, 1]
console.log(a.sort())
document.write(`a.sort() gives us wrong input [${a.sort()}] <br/> `)

//  to make built in sort work for numbers, we need to define how to sort.
//  so for that we use optional comparator function
/*
1.The built-in sort method accepts an optional comparator function
2.You can use this comparator function to tell JavaScript how you want it to sort
3.The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
          If it returns a negative number, a should come before b
          If it returns a positive number, a should come after b,
          If it returns 0, a and b are the same as far as the sort is concerned
*/
//   comparator function
const valuecompare = (n1, n2) => {
  return n1 - n2
  //  this is for accending order
  // for decending order
  // return n2-n1
}

document.write(`a.sort(valuecomapre) gives us correct input [${a.sort(valuecompare)}] <br/>`)


// bubble sort algorithm
document.write("--------Bubble sort-------------- <br/>")
const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }
  return arr
}
// In bubble sort largest element is moved to the last(vise-versa)
// there for we can ignore the last or first element in each iteration to menimize the count

const bubbleSortopt = (arr) => {
  // if we have almost sorted array then we can add one more condition to minimize the iteration
  let noswaping = 1;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noswaping = 0
      }
    }
    if (noswaping) break
  }
  return arr
}

arr = [20, 3, 26, 1, 4]
document.write(`sorted array of [${arr}] is ${bubbleSort(arr)} <br/>`)
arr2 = [3, 1, 2, 4, 5, 6]
document.write(`sorted array using optimized [${arr2}] is ${bubbleSortopt(arr2)} <br/>`)

// 2. selection sort -- It is similar to bubble sort but instated of placing large element at the last, it will find the smallest element and replace it at the start.
document.write("------------Selection sort------------------ <br/> Time complexity = O(N^2)  and this algorithm is slowest of all the three algorithm br/>")

const SelectionSort = (arr) =>{
  for (let i=0;i< arr.length; i++){
      let min= i
    for(let j=i+1 ;j<arr.length;j++){
      console.log(i,j)
      if(arr[j] < arr[min]){
        min= j
      }
      document.write(`[${arr}] <br/>` )
    }
    if(i !== min){
    [arr[i],arr[min]]=[arr[min],arr[i]]
    }
     
   
  }
  return arr
} 

arr = [20, 3, 26, 1, 4]
document.write(`sorted array of [${arr}] is [${SelectionSort(arr)}]  <br/>`)

// insertion sort -> In this the each value will be removed and inserted at right places
// It gradually creates a sorted left side subarray and the next upcomming values are placed in-between subarray
document.write("--------------------Insertion sort------------------ <br/>")

const insertion_sort = (arr) => {
  for(let i=1;i<arr.length;i++){
    let currentValue = arr[i]
    for(var j=i-1;j>=0 && arr[j] > currentValue;j--){
      // here if i compare a[j] with a[i] it wont work becuause in the nested loop a[i] will be changing therefore I have assigned the value a[i] to currentValue 
        arr[j+1]=arr[j]
    }
  arr[j+1] = currentValue
    document.write(`[${arr}] <br/>` )
  }

  return arr
}

arr = [20, 3, 26, 1, 4]
document.write(`sorted array of [${arr}] is [${insertion_sort(arr)}] the time complexity is O(n^2)  <br/>`)

