
function sayMyName(){ //syntax
    console.log("R");
    console.log("I");
    console.log("C");
    console.log("H");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result         // after return value no any value work or print.
    return number1 + number2
}

const result = addTwoNumbers(3,"4") // print 34
addTwoNumbers(3,"a") // print 3a

//console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
} 
//console.log(loginUserMessage("richa")); // if we pass the value then richa print otherwise sam print


//console.log(loginUserMessage("richa")) // () then value is undefined 

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username: "richa",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//pass arrays

const myNewArray = [200, 400, 100, 600]
function returnsecondValue(getArray){
    return getArray[1]
}
//console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200,400,600,100]));

