// const v = 64

// console.log("V=${v}");
// console.log(`V=${v}`);
// console.error("error");
// console.warn("warning");

// const prompt = require("prompt-sync")()

// const v = prompt("type something")
// console.log(v) 

// variable type
// var hello_world = "hello"
// hello_world = "world "

// // let is unmutable not changed later on
// if(true){
//     let x = 3
// }
// console.log(x)
// // const is mutable  changed later on
// const VELOCITY = 34

// let and const are block scoped, which means it can't be accessed from 
// the outside of blocks
// On the other hand, var can be accessed because of function-scoped.

// function tests(){
//     console.log(x);
//     var x = "test"
//     console.log(x);
// }

// tests(); 
// First console statement of x is undefined because before var x
// Second console statement of x is printed because after var x


// Arthimetic notation
// const x = "2345px"
// const y = 2
// // console.log(parseInt(x) - y)
// console.log(x.toString() + y)

// Comparison operator
// === is strict operator
// console.log("1" == 1)
// console.log("1" === 1)

// Logical Operator
// console.log(true&&false)
// console.log(true||false)
// console.log(!(true||false))
// console.log (""||true)
// console.log (""||false)
// console.log (""||"hello")
// console.log (true && "hello")
// console.log (false && "hello")
// console.log (false && "hello")
// console.log (Boolean("hello") && Boolean(2))

// Conditional Statements
// if (true)
//     console.log('hello world')
// else{
//     console.log("run")
//     console.log("")   
// }

// const cond = false ? "okay cool" : "no"
// console.log(cond)

// Switch Statement
// const value = 6

// switch(value){
//     case 3:
//         console.log("3 is cool")
//         break;
//     case 4:
//         console.log("4 is not cool")
//         break;
//     default:
//         console.log("okay")
//         break;

// }

// Array
const arr = [1, 2, 3, true]
// const arr2 = new Array(5)
const arr2 = Array.from("hello")
console.log(arr2);
console.log(arr2[0]);

arr2[0] = "y"
console.log(arr2)
console.log(arr2[arr2.length -1])
