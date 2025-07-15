// for of loop

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}
const greetings = "Hello World!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

//Maps
// in map two values are same but always print only one
const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN','INDIA')

//console.log(map);
for (const [key,value] of map) {
   // console.log(key, ':-', value);
}


const myObject = {    // in object for of loop not work
    game1 : 'NFS',
    game2 :  'spiderman'
}
for (const [key,value] of myObject) {
    console.log(key, ':-'), value;
    
    
}
