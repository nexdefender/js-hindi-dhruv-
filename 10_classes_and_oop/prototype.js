// let myName = "Dhruv     "
// let myFatherName = "Praveen     "

// console.log(myName.length);
// console.log(myName.truelength);
// console.log(myName.trim().length);
// console.log(myFatherName.trim().length);

let myHero = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.dhruv = function(){
    console.log(`dhurv is present in all objects`);
    
}

Array.prototype.heyDhruv = function(){
    console.log(`Dhruv says Hello`);
    
}

console.log(heroPower.dhruv())
myHero.dhruv()
// heroPower.heyDhruv() // Not run because it is array
// heroPower.dhruv()   // run because string is object also
myHero.heyDhruv()


//inheritance


const user = {
    name: 'Bansal',
    email: 'bansal@google.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// moder synthax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "DhruvBansal    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true lendth is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"dhruv".trueLength()
"mangoJuice".trueLength()