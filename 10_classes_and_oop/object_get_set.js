const User = {
    _email: 'Dhruv@gmail.com',
    _password: 'hello',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
      this._email = value
    }
}

 const bansal = Object.create(User)

 
console.log(bansal.email);
console.log(bansal);

console.log(User["email"]);

