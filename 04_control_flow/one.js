// if 

if(2=="2"){
    console.log("dhruv");
    
}

// "===" check typeof also

if(2==="2"){
  console.log("bansal");
  
}

const temperature = 51

if(temperature<50){
    console.log("temp is less than 50");  
}
else if(temperature == 50){
    console.log("temp is equal to 50");  
}
else{
    console.log("temp is greater than 50");  
}


// not do code this type in if aur else statment
const balance = 1000

if (balance < 500) console.log("test");
if(balance>700)console.log("not good"),
console.log("not recomended");

const userLoggedIn = true
const debitCard = true


if(userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}

if(userLoggedIn && debitCard && 2==2 ){
    console.log("allow to buy course");
}

const banked = false 
if(userLoggedIn || banked  ){
    console.log("allow to buy course");
}
