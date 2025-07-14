// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
       // console.log("5 is best number");
    }
    //console.log(element);
}
//console.log(element);

for (let index = 1; index <= 10; index++) {
   // console.log(`Outer loop value: ${index}`);
    
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value: ${j} and inner loop ${index}`);
       //console.log(index + '*' + j + ' = ' + index*j );
    }
}
let myArray = ["flash","batman","super"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        //break                  // control flow break;
        continue                 // condition one time skip 
    }
    console.log(`Value of i is ${index}`);
    
    
}
