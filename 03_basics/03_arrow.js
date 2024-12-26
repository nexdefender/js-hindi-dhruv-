const user = {
    username: "bansal",
    price: 1000,

    welcomeMessage: function (){
        console.log(` ${this.username} , welcome to website `);
       console.log(this);
        
    },
    
}

user.welcomeMessage()
user.username = "aaditya"
user.welcomeMessage()
console.log(user.welcomeMessage);

// function chai(){

//     console.log(this); 

// }

// chai()

// const chai = function () {
//     let username = "dhruv"
//     console.log(this.usernam);
    
// }

// chai()


// ARROW FUNCTION //

// first method if curly bracket than return required
const chai = (num1,num2) => {
       return num1 + num2
}
console.log("1st method: ",chai(7,9));


// second method if simple bracket than return not reqired
const chai2 = (num1,num2) =>  (num1 + num2)
console.log("2nd method: ",chai2(9,9));


// for objects 
const chai3 = (num1,num2) => ({username: "dhruv"})
console.log(chai3());


const myArray = [2,3,4,5,6,7]

