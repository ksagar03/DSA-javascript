

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

const sumrange = (n) => {
  if (n == 1) return 1
   return n + sumrange(n - 1)
}
document.write(`sumrange: ${sumrange(4)} `)