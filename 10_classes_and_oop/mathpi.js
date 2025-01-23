const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

//**not possible in mathpi */
// Object.defineProperty(Math, 'PI', {
//     writable: true,
//     enumerable: true,
// })
// console.log(descriptor);



// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'adrak chai',
    price: 270,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
        
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
    console.log(`${key}  : ${value}`);
    
}
}

