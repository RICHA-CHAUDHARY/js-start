//let a = 10
const b = 20 
var c = 30

{} // = scope
let a = 300
if (true) {
    let a = 10
    const b = 20 
   // console.log("INNER:", a);
    
}

// var c = 300

// console.log(a);
// console.log(b);
// console.log(c);  

// nested scope

function one () {
    const username = "richa"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two() // function call
}
//one()

if (true) {
    const username = "richa"
    if (username === "richa") {
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// e========================== intresting ============================

console.log(addone(5));
function addone(num) {
    return num + 1
}

// this is hoisting 
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}