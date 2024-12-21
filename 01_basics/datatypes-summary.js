// Primitive

// 7 types : string, Number, Boolean , null, undeined, Symbol ,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(anotherId);
console.log(id);


// const bigNumber = 3463474573456236436n




// Refernce type(Non-Primitive)

//Array, Objects(most useful) , Functions

const heros = ["shaktiman", "naagraj", "doga"] //array

let myObject ={
                 name: "dhruv",
                 age: 22,
              }    // object
            

const myFunction = function(){
    console.log("hello world");
    
}              //function

console.log(typeof bigNumber); //undefined
console.log(typeof outsideTemp);//object
console.log(typeof myFunction);//function
console.log(typeof heros);//object

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) make copy, Heap(Non-Primitive) make reference

// this is stack ---------//
let myYoutubename ="dhruvbansal.com"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
 console.log(anothername);

 //in this both give different//
// ----------//

//this is heap---------------//
let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dhruv@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//in this both give same
//---------------//
