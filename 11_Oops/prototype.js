// let myNmae = "richa     "

// //console.log(myNmae.length);
// console.log(myNmae.truelength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.richa = function(){
    console.log(`richa is present in all objects`);
    
}
Array.prototype.heyricha = function(){
    console.log(`Richa says hello`);
    
}

//heroPower.richa()
myHeroes.richa()
myHeroes.heyricha()
//heroPower.heyricha() // no acesss


// inheritance

const User = {
    name: "chai",
    email: "richa@google",

}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    _proto_: TeachingSupport
}
Teacher._proto_ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.clearTimeout().length}`);
}
anotherUsername.trueLength()