class User {
    constructor(username){
        this .username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends User{
   constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
   }

   addCourse(){
    console.log(`A new course was added by ${this.username}`);
    
   }
}

const chai = new teacher("chai", "chai@teacher.com","234")

chai.addCourse()
chai.logMe()
console.log(chai);

const tea = new User("ms Dhoni")
// tea.addCourse() not have acees
tea.logMe()

console.log(chai===tea);// FALSE
console.log(chai===teacher);// FALSE
console.log(chai instanceof teacher);//TRUE
console.log(chai instanceof User);//TRUE
