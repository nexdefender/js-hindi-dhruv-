const score = 400

const balance = new Number(100)

console.log(balance);

console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(7));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toExponential(3));

const hundeereds = 10000000

console.log(hundeereds.toLocaleString('en-IN'));


//+++++++++++++ Maths ++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); // neg covert in positive

console.log(Math.round(6.7));
console.log(Math.min(6,7,8,0,-2));
console.log(Math.max(6,7,8,0,-2));
console.log(Math.ceil(6.1));  // give 7 always
console.log(Math.floor(6.9)); // give 6 always

console.log(Math.random()); // value between 0 to 1 always //


console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.floor(Math.random() * (max - min + 1) + min))












