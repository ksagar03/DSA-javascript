// to check how Big O notaion will work in Objects, array, ....
//  Objects --------------------------------------------
//  Objects are unordered data structure which will be stored in Key value pair
//  WHEN TO USE OBJECTS
//   1. when you don't need order
//   2. When you need fast access/ insertion and removal (Time complexity is O(1))
//   3. Searching in Object is O(n) i.e linear

let obj = {
name: "sagar",
male: true,
favnumber: [1,2,3,4]
}  

//  Objects methods in javascript

// 1. object.keys  -> O(N)

document.write(`object.keys output :: ${Object.keys(obj)} <br/>`)
//  here i have used <br/> because document.write will be rendered in the HTML page

// 2. object.values -O(N)  --- returns values of the objetcs

document.write(` Object.values output :: ${Object.values(obj)} <br/>`)

// 3. Object.entries  -> O(N) 

document.write(` Object.entries output :: ${Object.entries(obj)} <br/>`)

// 4. Object.hasOwnProperty -> O(1) --- this methods will return whether the key which has been asked is present in the objects

document.write(` Object.hasOwnProperty :: ${ obj.hasOwnProperty("male") }`)