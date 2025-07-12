const name = "richa"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('RIChap-ka-com')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('C'));


const newString = gamename.substring(0, 4)// no negative number in substring
console.log(newString);

const anotherString = gamename.slice(-8, 4)//use many things
console.log(anotherString);

const newStringOne = "   richa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url  = "https://richa.com/richa%20chaudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('richa'))

console.log(gamename.split('-'));
