// singleton

const tinderUser = new Object() //=it is singleton // or we write simply this {} = it is non singleton
//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "richa",
            lastname: "chaudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

//merge object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:  1,
        email: "richa@gmail.com"
    },
    {
        id:  1,
        email: "richa@gmail.com"
    },
    {
        id:  1,
        email: "richa@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // key id, name
// console.log(Object.values(tinderUser)); // value 123abc,sammy
// console.log(Object.entries(tinderUser)); //1.key and 2. value

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check any value with help of this in boolean value


// de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "richa"
}
//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

///// JSON
// {
//     "name": "richa"
//     "coursename": "js in hindi"
//     "price": "free"
// }

[
    {},
    {},

]

