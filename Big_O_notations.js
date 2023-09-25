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
  favnumber: [1, 2, 3, 4],
};

//  Objects methods in javascript

// 1. object.keys  -> O(N)

document.write(`OBJECTS <br/>object.keys output :: ${Object.keys(obj)} <br/>`);
//  here i have used <br/> because document.write will be rendered in the HTML page

// 2. object.values -O(N)  --- returns values of the objetcs

document.write(` Object.values output :: ${Object.values(obj)} <br/>`);

// 3. Object.entries  -> O(N)

document.write(` Object.entries output :: ${Object.entries(obj)} <br/>`);

// 4. Object.hasOwnProperty -> O(1) --- this methods will return whether the key which has been asked is present in the objects

document.write(` Object.hasOwnProperty :: ${obj.hasOwnProperty("male")} <br/>`);

// ARRAY---------------------------------------------------------
//  arrays are ordered list of data.
// 1. Access data  -> O(1)  i.e it will be instent eg. a[3] = "sagar"
// 2. insertion and deletion   -> it depends on where insertion is done i.e at the end or middle or start"
//       eg. ["A","B","C","D"]  -> index- [0,1,2,3]  if you are inserting data at the start then the index needs to be changed for all the data so at that time it will O(N) time to complete the task (same for inserting data in the middle)
// 3. searching  -> Time complexity is O(N)

//  built in Array methods
/*
1. push -> O(1)
2. pop -> O(1)
            Above two have O(1) time complexity as we add and remove data at the end of the array.
3. shift ->O(N)
4. unshift -> O(N)
5. concat -> O(N)  --> merges two or more array 
6. slice -> O(N) -> to break down array 
7. splice -> O(N) -> to add data at the start, middle, and end.
8. sort -> O(N*logN) -> in sorting we have different algorithm so each algorithm will have different time complexity
9. forEach/map/filter/reduce/etc ... O(N)
*/

// concat example
document.write("<br/>ARRAY <br/> concat example <br/>");
let a1 = [3, 2, 5, 8];
let a2 = [9, 7, 1, 0];

document.write(`concatination :: ${a1.concat(a2)} <br/>`);
