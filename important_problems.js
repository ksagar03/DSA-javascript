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


const matrix_zero = (matrix) => {
  // let row = 
      // let col = 
      let location ={}
      for ( let i in matrix){
          for (let j in matrix[0]){
              if(matrix[i][j] == 0 ){
                location[i] = j
                location[j] = i
              }

          }
        
      }
    return (location)
  
}


document.write(matrix_zero([0,1,2,0],[3,4,5,2],[1,3,1,5]))

