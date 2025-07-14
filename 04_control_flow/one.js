// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature < 40) {  // code execute \\ false - not execute
//     console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");
// }
// console.log("Execute");



// >, <, <=, >=, ==, !=, ===, !== 



// const score  = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);


//shorthand notation

//const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); not write this type of line in code

// if (balance < 500) {
//     console.log("less than 750");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
    
// }


const UserLoggedIn = true
const debitCard = true
const loggedinFromGoogle = false;
const loggedinFromGmail = true;

if (UserLoggedIn && debitCard) {
    console.log("allow to buy courses");
}
if (loggedinFromGoogle || loggedinFromGmail) {
    console.log("User logged in");
}
