// Primitive
// 7 types : string, number, boolean, null, undefined, symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345678298272674748388n


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]//array
let myObj= {                              //objects
    name : "richa",
    age : 22,
}

const myFunction = function(){ 
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

//Primitve Datatypes
/*
Number = number
String =  string
Boolean = boolean
null = object
undefined = undefined
symbol = symbol
BigInt = bigint

//Non Primitive Datatypes
Arrays = object
functions = function
Object = object

JS is dynamically type language.Beacuse, data type will automatically assisgned at time of compilation or code execution.
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// *** 1.Stack (Primitive) 2.passed or assigned by value(call by value) 3.Changes to copies dont effect the original, *** 1.Heap (Non-Primitive) 2. accessed via references(stored in stack) 3.change value through another references affects original.

let myYoutubename = "richachaudhary.com"

let anothername = myYoutubename
anothername = "development"

// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "richa@google.com"

console.log(userOne.email);
console.log(userTwo.email);



