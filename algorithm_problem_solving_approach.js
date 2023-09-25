/*
PROBLEM SOLVING-------------------------------------------------- 
Understand the Problem
Explore Concrete Examples
Break It Down
Solve/Simplify
Look Back and Refactor


1. Understand the Problem-----------------------------------------
  a. Restate the problem in your own words
  b. what are expected inputs (eg: whether they are string or number)
  c. what is the expected output
  d. can the expected output, determined from the inputs

2. Explore Concrete Examples-------------------------------------------
  a. Start with simple example, then with more complex example next explore with empty inputs and invalid inputs

3. Break it Down--------------------------------------------------------------
  a. Write down the steps that needs to help you to reach your goal.
  b. don't just write it down by your self be interactive with your interviewer ask them is this the right steps (some time they can reccamand better options or step which you can add into your steps)

4. Solve/simplify 
  a. Try to find the difficult part of the problem were you feel like it will consume more time.
  b. temporarily ignore that difficulty
  c. write a simlified solution
  d. then try to incorporate that difficult part to your code

5. Look back and refactor 
  a. Once you have written code which is working for simple input, check for the edge cases(is it working for differnt inputs)
  b. Can the written code improved for better performance 
  c. once you feel like this is it i cant modify it further, then check for other solutions for the problem understand there approach and campare it with your approach.
*/

// ---------------------------------------------------------------------------------------------
// eg: Write a function which takes in a string and return counts of each character in the string. (assuming that I need to ignore the special char and space)

// const ToGetCharCount = (stri) => {
//   // This function needs to return a object
//   // need to a loop over a string
//   // need to create an new object to store the results
//   // if the key is there in the object then it should increment by one or if the key is not there in the object then create a new key and assign a value 1
//   //
//   let result = {};
//   let str = stri.toLowerCase()
//   console.log(str)
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (result[char] > 0) {
//       result[char]++
//     } else {
//       result[char] = 1
//     }
//   }
//   return result;
// }
// // let obj =ToGetCharCount("Sagar ")

// // document.write(Object.entries(obj))
// console.log(ToGetCharCount("Sagar"))
// in this above written code it is considering spaces and special character

// better approach
const ToGetCharCount = (stri) => {
  let result = {};
  let str = stri.toLowerCase();
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      // /[a-z0-9]/ -- this called a regular expression
      //  we can also use ASCII values instead of regular expression (it is faster than regular expression)
      //   if (result[char] > 0) {
      //   result[char]++
      // } else {
      //   result[char] = 1
      // }
      // this simple if else operator and replaced with conditional operator
      // result[char] >0 ? result[char]++ : result[char] = 1
      // or
      result[char] = ++result[char] || 1;
      // this means if the charactor is present in the object then increment it by one or if it is a new character then assign it to value 1
    }
  }
  return result;
};

console.log(ToGetCharCount("Hi this @ is 1 and 2 #"));
