const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// array

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

// map use for in loop aur not check 

// const map = new Map() // map is not iterable that why nothing will print 
// map.set('IN','INDIA')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('FR','FRANCE')
// map.set('IN','INDIA')

// for (const key in map) {
//     console.log(key);
// }


// many time use loop is for each loop 