const user = {
    username: "richa",
    price: 999,
    
    // this keyword makes current contxt 
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`); //this work in oject
        console.log(this);
        
    }
}
// user.welcomeMessage() // deafult value
// user.username = "sam"
// user.welcomeMessage()


// function chai() {
//     let username = "richa"
//     console.log(this.username); // this not work in function
// }
// chai()

// const chai = function(){
//     let username = "richa"           // print undefined
//     console.log(this.username);
// }

const chai = () => {
    let username = "richa"
    console.log(this);
}
// chai()

// arrow function

// const addTwo = (num1, num2) => {  // basic arrow function
//     return num1 + num2
// }
//const addTwo = (num1, num2) => num1 + num2 // implict return not return paranthesis

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "richa"})

console.log(addTwo(3,4));

const myArray = [2, 5, 3, 7, 8]
//myArray.forEach(function () {}) // or we write () => ()


