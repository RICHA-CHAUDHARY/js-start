// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(typeof myDate); // it is Object

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("12-06-2025")
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date(2025, 6, 12)
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",              //customize localestring
})






