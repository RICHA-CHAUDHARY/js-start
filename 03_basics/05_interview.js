// JAVA EXECUTION CONTEXT = HOW JS RUN AND EXECUTE FILE

// CODE FILE -> GLOBAL EXECUTION CONTXT -> THIS

// GLOBAL EXECUTION CONTXT
// FUNCTION EXECUTION CONTXT
// EVAL EXECUTION CONTXT

// JS CODE EXECUTE -> 1.MEMORY CREATION PHASE OR CREATION FACE -> ONLY MEMORY ALLOCATE
//2. EXECUTION PHASE -> EXECUTE ALSO

let val1 = 10
let val2 = 5
function addNum(num1,num2) {
    let total = num1 + num2
    return total   
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
//STEPS 1. GLOBAL EXECUTION -> THIS
// STEP 2. MEMORY PHASE val1 -> undefined; val2 - undefined; add num -> defination; result1 and 2 -> undefined
// STEP 3. EXECUTION PHASE -> val1 = 10; val2 = 5; addnum = no work = new variable environment + execution thread 'when work is complete then delete also. 

//practical
