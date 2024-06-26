// practice problems

/*
1. 2sums
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// const Two_sum = (nums, target) => {
//   let obj = {}
//   for (i in nums){
//     if( obj[target - nums[i]]){
//       return([obj[target - nums[i]], i])

//     }else obj[nums[i]] = i

//   }
//   return null
// }


// document.write(`2 sums: ${Two_sum([2,7,11,15], 18)}`)

//  Problem 2 Set matix zeros
/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
Eg: Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

// const matrix_zero = (matrix) => {
//    let locationx = {}
//     let locationy = {}
//     for(let i in matrix){
//         for(let j in matrix[0]){
//             if(matrix[i][j] ==0){
//                 locationx[i] = j
//                 locationy[j] = i
//             }


//         }
//     }
//     for (let i in matrix){
//         for(let j in matrix[0]){
//             if(locationx[i] || locationy[j])
//                 matrix[i][j] = 0

//         }
//     }
//     console.log(matrix)
//     return matrix

// };


// document.write(matrix_zero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))


// Problem 3 Add two number

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         // here if next value is not assigned or created then it assign value null
//     }
// }
// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//         // at the start head and tail will be assigned with value null after inserting the value head and tail will get updated
//     }
//     push(val) {
//         var newNode = new Node(val);
//         if (this.head == null && this.tail == null) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         // if we are not returning any value then it will show as undefiend
//         //  so to return whole list just need to return this  --> it will return the current list
//         return this;
//     }
// }

// // setting up the given data

// let l1 = ToaddData([2,4,3])

// let l2 = ToaddData([5,6,7])
// // console.log(l1)


// function ToaddData(data){
//     let linkledList = new SinglyLinkedList()
//     for(let i of data ){
//         linkledList.push(i)
//     }
//     return linkledList
// }

// //  Actual functionality



// const Add_two_numbers = (l1,l2) => {

//     let sum = 0
//     let carry = 0
//     let dummyNode = new Node(0)
//     let currentNode = dummyNode
//     while(l1 || l2 || sum>0){

//         if(l1){
//             sum += l1.value
//             l1 = l1.next
//         }
//         if (l2){
//             sum += l2.value
//             l2 = l2.next
            
//         }
//         carry = Math.floor(sum/10)
//         sum = sum%10

//         currentNode.next = new Node(sum)
//         currentNode = currentNode.next
//         sum = carry
//     }
//     console.log(currentNode)
//     return dummyNode
// }


// document.write(`To add two linked list ${Add_two_numbers(l1, l2)}`)

/* Problem 4
Best time to buy and sell stocks
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

const bestTime = (data) =>{
    let start =0 
    let end = 1
    let profit = 0
    let tempProfit
    while (end < data.length){
        if(data[start] < data[end]){
            tempProfit = data[end] - data[start]
            profit = Math.max(profit, tempProfit)
            
        } else start = end
        end++
    }
    return profit
}

document.write(`your profit will be ${bestTime([10,2,33,12,31,34])}`)

/*
problem 5: missing number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/
const missing_number = (array) =>{
    let total_sum = array.length * (array.length +1)/2
    let total_array_sum = [...array].reduce((a,b) => a+b,0)
    return total_sum - total_array_sum
}

document.write(` <br/> missing number in the array:[9,6,4,2,3,5,7,0,1] is ${missing_number([9,6,4,2,3,5,7,0,1])}`)
