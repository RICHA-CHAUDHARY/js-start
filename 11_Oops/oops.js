const User = {
    username: "Richa",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
        
        
    }
}
// console.log(User.username);
// console.log(User.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this

}
const userOne = new user("richa", 12, true)
const userTwo = new user("javascript", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

