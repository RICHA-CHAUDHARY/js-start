const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt, "", null, undefined, NaN 

// truthy values

// "0", "false", "", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
}

//Nullish Coleascing Operator (??) 2 keyword -> null, undefined

let val1;
// val1 = 5 ?? 10 // first value print
// val1 = null ?? 10      // output 10
//val1 = undefined ?? 15  // output 15
val1 = null ?? 10 ?? 30  // output 10

console.log(val1);

// Terninary Operator 

//condition ? true : false

const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



