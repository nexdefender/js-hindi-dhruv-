class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const dhruv = new User ("dhruv")
// console.log(dhruv.createId())
dhruv.logMe()
console.log(dhruv)

class teacher extends User{
    constructor(email,username){
        super(username)
        this.email = email
    }
}

const phone = new teacher("samsung","sam@phones.com")
// console.log(phone.createId());

phone.logMe()