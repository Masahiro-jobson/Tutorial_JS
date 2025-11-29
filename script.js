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
// const arr = [1, 2, 3, true]
// // const arr2 = new Array(5)
// const arr2 = Array.from("hello")
// console.log(arr2);
// console.log(arr2[0]);

// arr2[0] = "y"
// console.log(arr2)
// console.log(arr2[arr2.length -1])

// const arr = [1, 2, 3, true]
// const arr2 = Array.from("hello")

// arr2.push(4)
// arr2.pop()
// arr2.pop()
// arr2.pop()
// arr2.shift()
// arr2.unshift("new")


// console.log(arr2.indexOf("o"))
// console.log(arr2.lastIndexOf("l"))
// console.log(arr2.includes("l"))

// const arr3 = arr.concat(arr2)
// console.log(arr3)

// const str = arr.join("|")
// console.log(str);

// const arr3 = arr.splice(1,3)
// console.log(arr3)
// console.log(arr3)

// Array Destruction
// const [x, x2,...y] = [1,2,3,4]
// console.log(x, x2, y) 
// const x = [1,2,3,4]
// const y = [1, 2, 3, ...x]
// y.push("hello")
// console.log(x, y) 

// do while loop
//  do{
//     console.log("run")
//     break
// } while(true)
    
//  while(false){
//     console.log("hello")
//     break
// }

// For loop
// const arr1 = [1,2,3]
// for(let i=0; i< arr1.length; i++){
//     console.log(arr[i])
// }
// for(let [i,value] of arr1.entries()){
//     console.log(i,value)
// }

// Objects
// => properties associated with value
// JSON -> JavaScript Object Notation
// const obj = {
//     name:"Alice",
//     Age:25,
//     sayHello: function(){
//         return "hello"
//     }
// }

// obj.age = 26
// obj.name = "Jobson"
// obj["name"] = "Jack"
// obj.newProp = [1,2]
// delete obj.age

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// for(let key in obj){
//     console.log(key)
// }

// const obj2 = {
//     hairColor: "gray",
//     arr: [1,2,3,4],
//     career:{}

// } 

// const obj3 = {...obj, ...obj2}
// // obj3.career.info = "tech"
// // obj2.arr.push("tech")
// obj2.hairColor = "brown"

// console.log(obj2, obj3)

// Sets
// const mySet = new Set([1,2,3]);
// mySet.add(1)
// mySet.delete(1)
// mySet.has(1)
// mySet.size

// for(const value of mySet){

// }

// mySet.clear()
// const arr = Array.from(mySet)
// const arr2 = [...new Set(([1,2,3]))]
// const arr3 = [...mySet]

// MAPS
// const myMap = new Map();
// const numberMap = new Map([[1, "one"], [2, "two"]]);

// myMap.set(4, "four")
// myMap.delete(4)
// myMap.get(1)
// myMap.has(1)

// for(const [key, value] of myMap){}

// myMap.clear();

// const arr = Array.from(myMap)

// 