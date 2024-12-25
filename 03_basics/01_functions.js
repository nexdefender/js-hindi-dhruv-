// console.log("D");
// console.log("H");
// console.log("R");
// console.log("U");
// console.log("V");
// console.log("b");

function sayMyName() {
    console.log("D");
console.log("H");
console.log("R");
console.log("U");
console.log("V");
console.log("b");
}

// sayMyName()
                      // parameter
function addTwoNumber(number1,number2){
     console.log(number1 + number2)
     console.log(number1 - number2)
}

function addTwoNumber2(number1,number2){
     let result2 = number1 + number2
     return result2 
     // return ke baad kuch bhi karo print nhi hota hai
}

        //argument
addTwoNumber(3,4)
const result = addTwoNumber(3,4)

addTwoNumber2(5,8)
const result2 = addTwoNumber2(3,4)

console.log("Result: ", result); // undefined
console.log("Result2: ", result2); //15


function loginUserMessage(username){
 //if(!username)ase bhi likh sakte hai
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

const result3 = loginUserMessage("dhruv bansal")
const result4 = loginUserMessage()
console.log(result4);
console.log(result3);

                          // by this if user not give any value it is work as a default value
function loginUserMessage2(username = "arthav"){
    
       return `${username} just logged in`
   }

   const result5 = loginUserMessage2()
   const result6 = loginUserMessage2("dhruv")

   
   console.log(result5);
   console.log(result6);

   