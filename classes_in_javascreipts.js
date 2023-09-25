// Why to learn classes? --> the data structure like linked list, stacks, queue, binary trees, graphs, does not have a built in libraries in javascripts (eg: array has a built in library) so to create a custom library we require classes.
/*
What is classes ?? (classes are like a blueprint so once the blueprint is created one can use that blueprint to create objects)
Classes are the templets to create one or more objects
classes contains methods..
each class should contain one method called constructer
which takes up the values or data (note: always use constructor keyword to create that method)
Syntax eg : 
class name{
constructor(firstname, lastname){
this.firstname = firstname
this.lastname = lastname
}
}


*/
// class name{
//   constructor(fname,lname){
//     this.firstname=fname
//     this.lastname=lname
//     // here in this."" anything can be defined
//   }
// }

// // creating objects -> to create new objects we need to use "new"
// let userone = new name("sagar","krishna")
// console.log(userone)
// document.write(Object.values(userone))

// With in a class we can define mutiple methods
// just like array, which has multiple inbuild methods(which performs different actions to provide specify output)
/* there are two types for method declaration,
1. instance methods
2. static methods
*/

// instance methods

class claculate_avg_marks {
  constructor(marks) {
    this.marks = [];
  }
  addmarks(marks) {
    this.marks.push(marks);
    return this.marks;
  }
  sum(marks) {
    let sum_of_marks = this.marks.reduce(function (a, b) {
      return a + b;
    });
    return sum_of_marks / this.marks.length;
  }
}

let s1marks = new claculate_avg_marks();
console.log(s1marks);

// 2. statics methods: this methods can not be called using newly created objects. It should be called using a class name.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

document.write(`when the method or a varible defined via static, it can not be called by a instance or objects eg: if i call p1.displayname then it should return undefined <br/>
p1.displayName :${p1.displayName} <br/>
if i call the same thing using a class name then it should return a value <br/>
Point.displayName :${Point.displayName} <br/>
same goes for methods which are difined via statics`);
