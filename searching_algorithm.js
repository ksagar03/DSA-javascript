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

const binarysearch = (arr, value) => {
  let left = 0
  let right = arr.length - 1
  console.log(left, right)
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] < value) {
      left = mid - 1
    } else if (arr[mid] > value) {
      right = mid + 1
    } else return mid
    console.log(left, mid, right)
  }

}
console.log(`${binarysearch([1, 3, 4, 5, 7, 10], 3)}`)
