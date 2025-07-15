// reduce

const myNums = [1, 2, 3]
//function
// const myTotal = myNums.reduce(function (accumlator, currentvalue) {
//     console.log(`acc: ${accumlator} and currval: ${currentvalue}`);
    
//     return accumlator + currentvalue
    
// }, 0)

//arrow function
const myTotal = myNums.reduce( (accumlator,currentvalue) => accumlator + currentvalue, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 999
    },
    {
        itemname: "java course",
        price: 2999
    },
    {
        itemname: "web development",
        price: 9999
    },
    {
        itemname: "data science",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((accumlator,item) => accumlator + item.price, 0)
console.log(priceToPay);

