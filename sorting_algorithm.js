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

a= [10,203,43,2,1]
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
const valuecompare = (n1,n2) =>{
   return n1-n2
  //  this is for accending order
  // for decending order
   // return n2-n1
}

document.write(`a.sort(valuecomapre) gives us correct input [${a.sort(valuecompare)}] `)