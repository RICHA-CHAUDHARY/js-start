// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFe
    console.log(`DB CONNECTED`);
})(); // always end the code with ; sign then the other code will run

((name) => {
    // unnamed IIFe

    console.log(`DB CONNECTED ${name}`);
    
} ) ('richa')
   

// pollution of global scope is create problem, so we have to remove that pollution use iife.
