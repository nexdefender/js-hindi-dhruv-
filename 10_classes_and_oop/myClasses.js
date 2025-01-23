// ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password =password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Dhruv", " Dhruv@gamil.com","47447")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// Behind the scene

function User2(username,email,password){
    this.username = username;
    this.email = email;
    this.password =password;
}

User2.prototype.encryptPassword2 = function(){
    return `${this.password}abc`
    }

    User2.prototype.changeUserName2= function(){
        return `${this.email.toUpperCase()}`
    }

const tea = new User2("bansal d", " bansal@gamil.com","47447")

console.log(tea.encryptPassword2());
console.log(tea.changeUserName2());

