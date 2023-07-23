//  Note: this  problem solving pattens will not help you in all the problems


//  1. Frequency counter (O(N)) -- time complexity
//  This Pattern helps us to avoid using nested loops (O(N^2)) so that time complexity can be reduced  
//  This pattern uses objects or sets to collect values/frequency of values
/*  Eg:
 Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same
    eg:
    [2,4,4,6] [4,36,16,16]  --> returns true
    
 */

// basic approch(Naive approach)
// const same = (a1, a2) => {
//   if (a1.length != a2.length) {
//     return false
//   }
//   for (let i = 0; i < a1.length; i++) {
//     let indexvalue = a2.indexOf(a1[i] ** 2)
//     if (indexvalue == -1) {
//       return false
//     }
//     a2.splice(indexvalue, 1)
//   }
//   return true

// }

// document.write(` naive approach: ${same([1, 2, 4], [1, 16, 4])}`)

// above code will take O(N^2)(as it uses nestedfor loop (1. normal for loop and 2nd is indexof)) time complexity so avoide this we can use frequency counter

// frequency counter

// const same = (a1, a2) => {
//   if (a1.length != a2.length) {
//     return false
//   }
//   let fc1={}
//   let fc2={}
//   for(val of a1){
//     fc1[val]= ++fc1[val] || 1
//   }
//   for (val of a2){
//     fc2[val]= ++fc2[val] || 1 
//   }
//   console.log(fc1,fc2)
//   for(let key in fc1){ 
//     if(!(key ** 2 in fc2)){
//       // This if condition will check whether the  keys are matching in fc1 and fc2
//       return false
//     }
//     if(fc2[key ** 2] !== fc1[key]){
//       return false
//       // this if condition will check whether the values are matching for the respective key in fc1 and fc2
//     }
//   }
//   return true
// }
// document.write(same([1,4,2,3,2,4],[1,16,16,4,4,9]))


// Example two  Anagrams
/*Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman */

// const anagram = (s1,s2) => {
// if(s1.length != s2.length){
//   return false
// }
//   let fc1= {}
//   let fc2= {}
// for (val of s1){
//     fc1[val]= ++fc1[val] || 1
//   }
//   for (val of s2){
//     fc2[val]= ++fc2[val] || 1
//   }

//   for(let key in fc1 ){
//     if (!(key in fc2))
//     {
//       return false 
//     }
//     if (fc1[key] !== fc2[key])
//       return false
//   }
//   return true
// }
// document.write(`The given string is ${anagram("aaz","zza")? "anagram" : "not anagram" }`)
// console.log(anagram("sagar","sgyar"))
// 2nd way

// const secondwayanagram = (s11,s12) =>{
//   if(s11.length != s12.length){
//   return false
// }
//   let fc={}
//   for (val of s11)
//     {
//       fc[val]= ++fc[val] || 1
//     }
//   for (val of s12){
//     if(!fc[val]){
//       return false
//       //  if the value is not present in the obj then it will return false 
//     }else{
//       fc[val] -=1
//       // if the value is present in the obj then it will reduce that respective key's value by one
//     }

// }
//    return true
// }

// document.write(`The given string is ${secondwayanagram("aaz","zza")? "anagram" : "not anagram" }`)



/* 2.  Multiple pointers pattern
There will be senario where a value needs to be searched in array or strings.... so we use pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well

for Multiple pointers pattern either the array needs to be sorted or it should fallow some pattern(same applicale for strings)
*/

/*
Examples:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/
//  naive solution --> time complexity --> O(N^2)

// const sumzero = (array) =>{
//   let z=[]
//   for(let i =0; i<=array.length; i++){
//     for(let j = i+1; j<= array.length; j++){
//       if(array[i]+array[j]===0){
//         z.push(array[i],array[j])
//       }
//     }
//   }
//   return z
// }
// // console.log(sumzero([-3,-2,-1,0,1,2]))
// document.write(sumzero([-3,-2,-1,0,1,2,3]))

// Above code has time complexity of O(N^2) to overcome this we will be using multiple pointers
//  multiple pointer  -> O(N)
// const sumzeropointers = (a1) => {
//   // let z = []
//   // let position = []
//   let left = 0
//   let right = a1.length - 1
//   while (left < right) {
//     let sum = a1[left] + a1[right]

//     if (sum === 0) {
//       // z.push(a1[left], a1[right])
//       // position.push(left, right)
//       return [a1[left], a1[right], [left, right]]
//     } else if (sum < 0) {
//       left++
//     } else {
//       right--
//     }
//   }
// }

// console.log(sumzeropointers([-3, -2, -1, 0, 1, 2]))

// problem 2:
// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

// const countUniqueValues = (arr) => {
//   if (arr.length === 0){
//     return
//   }
//   let left = 0
//   let right = 1
//   while (right <= arr.length - 1) {
//     if (arr[left] == arr[right]) {
//       right++
//     } else {
//       unique++
//       left++
//       arr[left] = arr[right]
//     }
//     console.log(arr)
//   }
// // we can also perform this using for loop 
//   return left+1
// }
// document.write(`No of unique values ${countUniqueValues([0,0, 1, 1, 1, 1, 2, 2, 3,3,5,13])}`)



/*3. Sliding window 
this algorithm is useful when a subset needs to be searched with in the array. In this we create a window which contains either array or a number and this windo can increase or decrease based on the condition.
This window slides over a array or srting to find desired result.
*/ 
/* example:
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/
// naive solution:
// const maxSubarraySum = (arr,n) =>{
//   let max= -1;
//   for(let i= 0 ;i<arr.length - n +1;i++){
//     sum=0;
//     for(let j=0;j<n;j++)
//       // here j can't be equal to i as, i increases the j<n condition will not satisfy and break the loop 
//       {
//         sum+=arr[i+j]
//       }
//     // console.log(max,sum)
//     if (sum >max){
//       max=sum
//     }
  
//   }
//   return max
// }
// document.write(`max subarray sum of an array = ${maxSubarraySum([1,2,3,4,5,6],3)} <br/> `)

// //  above solution has time complexity O(N^2) as it has nested loop so to overcome this nested loop we use sliding window.
// // solution:
// const maxSubarraySumSW = (arr,n) =>{
//   if (n>arr.length) return null
//   let maxsum=0
//   let tempsum=0
//   for (let i=0; i<n;i++)
//     {
//       maxsum+=arr[i]
//     }
//   tempsum=maxsum
//   for(let j=n; j<arr.length;j++){
//     tempsum = tempsum -arr[j-n] +arr[j]
//     maxsum= Math.max(tempsum,maxsum)
//   }
//   return maxsum
// }
// document.write("using sliding window algoritm <br/>")
// document.write(`max subarray sum of an array using sliding window algorithm = ${maxSubarraySumSW([1,2,3,4,5,6],3)}  `)
/* 3. divide and conquer method:
this is a really importent algorithm it is used in various plases
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

*/
// example: brinary search

const binarysearch = (arr,value) =>{
  let first = 0
  let last= arr.length -1
  while(first <= last){
   mid= Math.floor((last+first)/2);
  if(arr[mid] > value){
    last = mid -1
  }else if(arr[mid] < value){
    first = mid +1
  }else{
    return mid
  }
  return -1
}

console.log(binarysearch([1,2,3,4,5],3))