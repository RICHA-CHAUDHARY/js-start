// singleton

// object literals 

//symbol use
const mySym = Symbol("key1")

Object.create // create a object
const JsUser = {
    name: "Richa",
    "full name": "Richa Chaudhary",
    [mySym]: "myKey1", // use symbol write in [] bracket

    age: 25,
    location: "Delhi",
    email: "richa.chaudhry@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(JsUser.email); // access but not sometime correct way
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]); // type of string 


JsUser.email = "richa@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "richa@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting()); // reference of function /// () this denotes the value 
console.log(JsUser.greetingTwo());

 


