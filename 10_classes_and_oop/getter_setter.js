class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}dhruv`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const dhruv = new User ("dhruv@google.com","abc")

console.log(dhruv.password);
console.log(dhruv.email);
