//for

for (let bansal = 0; bansal < 6; bansal++) {
    const element = bansal
    console.log(element);
    
    
}

// 1 to 10 table
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop: ${1}`);
    
    for (let j = 1; j <=  10; j++) {
        // console.log(`inner loop: ${j}`);
       // console.log(i + '*' + j + ' = ' + i*j);
        
        
    }
    
}

let myArray = ["ironman","spiderman","DrStrange"]
console.log("ArrayLength: ",myArray.length);


for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
    
}

// break and continue

for (let i = 1; i <= 14; i++) {
    if(i==7){
        console.log(`detect 7`);
        break;
        
    }
   console.log(`element i is ${i}`);
   
    
}

for (let i = 1; i <= 14; i++) {
    
    if(i==7||i==12){
        console.log(`detect i is ${i}`);
        continue;
        
    }
   console.log(`element i is ${i}`);

}

//++++++ DIFFERENCE BTW BREAK AND CONTINUE ++++++//
//BREAK: IT COMPLETLY OUT OF LOOP
//CONTINUE: IT GIVE CHANCE AND ONLY ONE TIME NOT PRINT IT ALTHOUGH LOOP CONTINUE
// EX ARE GIVEN ABOVE