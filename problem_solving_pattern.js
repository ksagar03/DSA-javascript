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

const anagram = (s1,s2) => {
if(s1.length != s2.length){
  return false
}
  let fc1= {}
  let fc2= {}
for (val of s1){
    fc1[val]= ++fc1[val] || 1
  }
  for (val of s2){
    fc2[val]= ++fc2[val] || 1
  }

  for(let key in fc1 ){
    if (!(key in fc2))
    {
      return false 
    }
    if (fc1[key] !== fc2[key])
      return false
  }
  return true
}
document.write(`The given string is ${anagram("aaz","zza")? "anagram" : "not anagram" }`)
// console.log(anagram("sagar","sgyar"))





