document.write(`<h2>Hash Tables </h2>
<li>Hash Tables are so popular that it is used in almost all the programming languages</li>
<li><b>Defination:</b> Hash tables are used to store Key value pairs (same as objects(Note: objects are build using Hash Tables) but the problem with objects is keys can only be a strings(i.e numbers can not be used as a key )) </li>
<li>In javascripts Hash tables are called a Maps </li>
<li>So when ever we store key as string our computer can't understand what that string ment (eg: pink : #FFC0CB ) so the string is converted or assigned to value using Hash function which will be in computer readable form</li>
<li>So when ever we use that key it should return a same value which was assigned via hash function </li>
<img class="image" src="images/HashTableEg.PNG"/>
In above example "cyan"(key) has been assigned a value 3 by a Hash function so when ever we use a key "cyan" in backend it will take it as a value 3 
<h3>Hash functions</h3>
<li>This are the function which will take an input(no mater what's the size of the input) and returns a fixed size of number data(eg: output: 75635272) <br/> Note: the Hash function will return same output if the given input same as previous one</li>
<img class="image" src="images/Sample_hash_fun.png">
<b>Collision:</b>
Consider while genrating a unique value for the key the hash function genrated same value for one or more key then collision will arise b/n one or more key. <br/>
<b> To avoid collision we have so many methods </b>
<li><img class="image" src="images/separate_chaining.png"/>
Consider 2 keys has been assigned same position, then at the same position it will create a nested array. </li>
<li><img class="image" src="images/linear_probing.png"/>
In this if the two or more key has been assigned same position then it will move the key to next position</li>
`) 

//  A simple Hash function
const SampleHash = (key, length) =>{
  let total =0
  for(let i of key){
    total += i.charCodeAt(0)
    console.log(total)
    // total %= length
  }
  return total%length
}
console.log(SampleHash("sagar",23))
/*
 problems with above Hash function
 1. It will only work when the key is string if the key is value then it does not work
 2. Time complexity is not constant it will depend on the size of the key
 3. and the value are quit predictable and there will be chance of collision b/n two keys it needs to provide a random value
 
improvising Hash function
1. As of now I will only consider strings for the key
2. To stabilize time complexity will add lenght constraint (eg: the key length should not exceed 50 )
3. will add the Prime numbers to while genrating the output for the given key it reduce the chances of collision. Also take a maxarrlength a prime number.

 */

const Improvisedhash=(key,maxarrlength) =>{
  let total = 0
  let prime_number = 19
  for (let i = 0; i<Math.min(key.length, 10); i++){
    total =  total * prime_number + key[i].charCodeAt() 
  }
  return total % maxarrlength
}
console.log(`Improvised hash function :${Improvisedhash("sagar",30)}`)
//  in this above function also there is a slight chance of collision.
// To avoid collision there are so manyu ways some of the way
// 1. separate chaining -> consider 2 keys has been assigned same position, then at the same position it will create a nested array 
// 2. Linear probing: In this if the two or more key has been assigned same position then it will move the key to next position
