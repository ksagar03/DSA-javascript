/* It is an algorithm which is used to search any data or value from the array.
We have some built in algorithm like indexof which uses for loop to search the index of the required data
*/
//  1. Linear search
// It loops over an array to find whether the value is there in the array or not. there are some built in methods in a javascripts which uses linear search.
// eg: indexof, includes, find , findindex

// const tofindstate =(state,value) =>{
// for(let i=0; i<=state.length; i++){
//     if (state[i] === value){
//       return true
//     }
//   } 
// return false
// }
// let state =["Andhra Pradesh",
//                 "Arunachal Pradesh",
//                 "Assam",
//                 "Bihar",
//                 "Chhattisgarh",
//                 "Goa",
//                 "Gujarat",
//                 "Haryana",
//                 "Himachal Pradesh",
//                 "Jammu and Kashmir",
//                 "Jharkhand",
//                 "Karnataka",
//                 "Kerala",
//                 "Madhya Pradesh",
//                 "Maharashtra",
//                 "Manipur",
//                 "Meghalaya",
//                 "Mizoram",
//                 "Nagaland",
//                 "Odisha",
//                 "Punjab",
//                 "Rajasthan",
//                 "Sikkim",
//                 "Tamil Nadu",
//                 "Telangana",
//                 "Tripura",
//                 "Uttarakhand",
//                 "Uttar Pradesh",
//                 "West Bengal",
//                 "Andaman and Nicobar Islands",
//                 "Chandigarh",
//                 "Dadra and Nagar Haveli",
//                 "Daman and Diu",
//                 "Delhi",
//                 "Lakshadweep",
//                 "Puducherry"]
// let value = prompt("please enter the state to be searched =")
// document.write(`${tofindstate(state,value)? `${value} is there in india` : `${value} is not there in india` }`)

// 2. Binary search: It is faster than linear search algorithm but there is a catch in this the data or array  needs to be sorted. Here it eleminates halfs of the values based on the given input. It uses divide and conquer algorithm
// time complexity => worst case => O(log n) best case O(1)
// const binarysearch = (arr, value) => {
//   let left = 0
//   let right = arr.length - 1
//   // console.log(left, right)
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2)
//     // console.log(mid)
//     if (arr[mid] < value) {
//       left = mid + 1
//     } else if (arr[mid] > value) {
//       right = mid - 1
//     } else return mid
//     // console.log(left, mid, right)
//   }

// }
// console.log(`${binarysearch([1, 3, 4, 5, 7, 10,14], 10)}`)


//eg: string search - naive method
const stringsearch = (str, str1) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str[i + j] !== str1[j]) {
        break
      } // here i+j will help us iterate 1st string to match 2nd string, if the strings are not matching then it will break the inner loop and start from the first 
      if (j == str1.length - 1) {
        count++
        // if j reaches to last string of str1 without breaking the innerloop then it will increment the count by one
      }
    }
  }
  return count

}

document.write(`number of string matches: ${stringsearch("hello llo", "ll")}`)
// above methods time complexity in O(m*n) where m and n are the length on two strings
// to reduce the time complexity, KMP algorithm is used this algorithm will bring down the time complexity
// O(N + M)
// In naive method it is not analyzing the pattern which needs to be searched in the given string (simply it checking repitaively via for loop)
// In KMP algorithm it will analyze the pattern which needs to be searched afterthat it will create an array called LPS(least preffix and suffix)
// eg: "abbaaa" this is the pattern which needs to be searched then 
// abbaaa = [0,0,1,1,2,3]
//  here first 0 tells us about "a" has came one time so at the start it will set to 0 then next "b" this also appears one time so it is set to 0, next "b" is repeating so it is set to 1 and so on..... 