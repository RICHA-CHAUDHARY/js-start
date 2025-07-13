//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);

// Array methods

// myArr.push(6) //print 1 to 6 number
// myArr.pop()  // last value remove

myArr.unshift(9) // 9 comes first
myArr.shift(); // first value remove 

// console.log(myArr.includes(4));//if number present then true otherwise false
// console.log(myArr.indexOf(1)); //index present or not



// const newArr = myArr.join()

// console.log(typeof newArr); // type string 

// console.log(myArr);


// slice, spice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //this not include the number 3

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // this include all number except 1, 2 and 3.
console.log("C ", myArr);

console.log(myn2);



//////// arrray part 2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heroes)
// console.log(allHeroes);                       // concat use to fully merged both the heroes .

//another method of merge // spread operator

const all_new_heroes = [...marvel_heros,...dc_heroes]

console.log(all_new_heroes);

// another array 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //merge all array in one 
console.log(real_another_array);


// when data select only in array

console.log(Array.isArray("Richa")); // it is not array
console.log(Array.from("Richa")); // from convert in array 
console.log(Array.from({name: "richa"})); // interesting array give output [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





