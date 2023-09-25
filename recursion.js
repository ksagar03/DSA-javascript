/*Recursion:
it is a functions which call itself to perform some action.
When ever a functions are called, it will be saved under stack in order.
so when ever javascripts sees return or end of functions call stack pops out the functions.
In Recursive the function calls itself multiple time(i.e a newly called functions will be pushed on top of call statck). but this function calling need to stop at some point that is at base case.
Here in recursive function we will be adding the base case so that when the base case is satisfied the function calll will be stopped.
and one more point to be remembered is to provide different input when function is called itself
*/

// 1st problem  -- write a recursive function to provide a count down

// const countdown = (n) =>{
//   if(n<=0){
//     document.write("count down ended")
//     return
//   }
//   document.write(`${n} <br/>`)
//   n--; // by decripmenting the number we are providing different input for recursive function
//   countdown(n)
// }

// countdown(10)

// problem 2: write a recursive code for sumrange

// const sumrange = (n) => {
//   if (n == 1) return 1
//    return n + sumrange(n - 1)
// }
// document.write(`sumrange: ${sumrange(4)} `)

// problem 3 : factorial
// const factorial = (n) => {
//   if(n===0) return "invalid input"
//   if (n===1) return 1
//   return n * factorial(n-1)
// }
// document.write(`factorial = ${factorial(10)}`)

// problem 4: to find odd numbers in an array using recursion

const oddnumbers = (arr) => {
  let result = []; // if the value is odd then it will be stored inside this empty array
  function findoddnumbers(input) {
    if (input.length === 0) {
      return;
    }
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    findoddnumbers(input.slice(1));
  }
  findoddnumbers(arr);
  return result;
};

document.write(`odd numbers ${oddnumbers([1, 2, 3, 4, 5, 6])} <br/>`);

//  this above method is helpful when the value needs to be stored.
// alternative method for the above problem
// here nested function will not be used

// const alternatemethod = (arr) => {
//   let result =[]

//   if(arr.length ===0){
//     return
//   } // base condition

//   if(arr[0]%2 !== 0){
//     result.push(arr[0])
//   }

//   result =result.concat(alternatemethod(arr.slice(1)))
//   return result
// }

// document.write(`alternate method where nested function is not used: ${alternatemethod([1,2,3,4,5,6])}`)
