document.write(`<h2>Dynamic Programming</h2>
It is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solutions 
<li>It works on the basis of recursion</li>
When to use Dynamic programming ?????
<ul>It only works on problem when it has ::
<li> optimal substructure </li>
<li>overlapping subproblems</li>
</ul>
<h3>overlapping subproblems</h3>
Consider a problem where you are spliting the problem into several subproblems..
so if the subproblems repeats itself several time then we consider it has overlapping subproblems <br/>
Eg: 
<br/>
1.fibonacci sequence :: here the subproblems repeats itself 
<br/>
2.mergesort sort :: here each time sub problem will be different
<h3> optimal substructure</h3>
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems 
<br/>
Normal recursive function of the fibonacci sequence
<img class="image" src="images/DP_Fib_recursive.PNG"/>
<br/>
<b>In this above recursive function as the n increase the time complexity will be <h3>O(2^n)</h3>
which is worst than O(n^2)</b> 
To calculate the fib(6) below will be the recursive call stack
<img class="image" src="images/Fib_recursive_call_statck.PNG"/>
In this stack we can observe that to calculate fib(6) we need fib(5) to find fib(5) we need fib(4) so on <br/>
We can also observe that fib(4), fib(3) is repeating it self and added to call stack again and again 
<h4>So this can be solved using dynamic programing were the values of fib(4) and fib(3) will be stored in the memory and can be used it when ever it is required</h4>
<img class="image" src="images/fib_using_DP.PNG"/>
here the memo[0] will be undefined and memo[1], memo[2] will be returned from a base case, <br/>
We can also predefine those values in the memo array and can remove the base case i.e memo[undefined, 1,1]`)


// Normal recuresive function on fibonacci series

const fib_r = (n) => {
  if(n<=2) return 1 //base case
  return fib_r(n-1) + fib_r(n-2)
}

console.log(fib_r(10))

const dp_fib =(n, memo=[]) =>{
  if(memo[n] !== undefined )  return memo[n]
  if(n<=2) return 1
  let result = dp_fib(n-1, memo) + dp_fib(n-2, memo)
  memo[n] = result
  return result
}