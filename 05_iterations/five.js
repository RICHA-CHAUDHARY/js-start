// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// arrayname.for each ( call back function (parameter value) {})
// coding.forEach(  function (item) {
//     console.log(item);
// } )

// coding.forEach(  (item)   =>  {
//     console.log(item);
// }  ) 


//  function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);    
// })

const myCoding = [
     {
        langaugeName: "javascript",
        langaugeFileName: "js"
     },
     {
        langaugeName: "java",
        langaugeFileName: "java"
     },
     {
        langaugeName: "python",
        langaugeFileName: "py"
     }
]
myCoding.forEach( (item) => {
    console.log(item.langaugeName);
    
})