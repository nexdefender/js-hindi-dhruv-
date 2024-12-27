const myNum = [7,8,9,12]

const myTotal = myNum.reduce( function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 5)

console.log(myTotal);

const myTotal2 = myNum.reduce ( (acc, currval) =>
    acc+currval ,7
     )

console.log(myTotal2);

const shoppingCart = [
    {
    itemName: "js course",
    price: 399,
    },
    {
    itemName: "data science course",
    price: 13999,
    },
    {
    itemName: "mobile dev course",
    price: 7999,
    },
    {
    itemName: "dhruv sir course ",
    price: 3999,
    },
]

const PriceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price),0)

console.log(PriceToPay);

