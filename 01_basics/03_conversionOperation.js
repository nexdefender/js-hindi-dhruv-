let score = "33"  //only number output number

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score2 = "33abc" //letter with number output NaN

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = null //it mean output is 0

console.log(typeof score3);
console.log(typeof (score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = undefined // it mean output is NaN

console.log(typeof score4);
console.log(typeof (score4));

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let score5 = true // it mean output is 1 for true and 0 for false

console.log(typeof score5);
console.log(typeof (score5));

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "dhruv"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

// 1=>True
// 0=>false
// "" =>False
// "dhruv" =>True

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************Operations****************

let value = 3
let negValue = -value

console.log(value);
console.log(negValue);

console.log(2**3); // 2 ki power 3

let str1 ="hello"
let str2 =" dhruv"

let str3 = str1 +str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 1 + "2");
console.log("1" + 2 + 2);
console.log("1" + "2");
console.log(1+2);
console.log(str1+str2);

console.log((2+2)/4);
console.log(2/4+2);

console.log(true);
console.log(+true);
console.log(+"");
console.log("");

let num1,num2,num3
num1 =num2 =num3 = 2+2

let gameCounter =100
gameCounter++;
console.log(gameCounter++);
console.log(++gameCounter);









