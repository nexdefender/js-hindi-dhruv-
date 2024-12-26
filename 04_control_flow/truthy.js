const userEmail = "DB@gmai.com"
const userAcount = ""
const userAcount2 = []

if(userEmail&&userAcount){
    console.log("Got user email");
    
}
else{
    console.log("don't have user account but have email");
    
}

if(userEmail||userAcount){
    console.log("Got user email but not account");
    
}
else{
    console.log("don't have user email");
    
}

if(userEmail&&userAcount2){
    console.log("[] it mean true");
    
}
else{
    console.log("don't have user email");
    
}

//+++++++++ which are truthy or falsy value +++++++++++//

// FALSY VALUE
//  false, 0, -0, bigInt 0n, "", null, undefined, NaN

//TRUTHY VALUE
// else above are truthy value 
// like "0", 'false', " ", [], {}, function(){},

if(userEmail.length===0){
       console.log("Array is empty");
       
}

if(userAcount2.length===0){
       console.log("Array is empty");
       
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
     console.log("object is empty");
     
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  // 5 output
// val1 = null ?? 10 // 10 output
// val1 = undefined ?? 15  // 15  output
val1 = null ?? 10 ?? 20  // 10 output

console.log(val1);

// Terniary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");


