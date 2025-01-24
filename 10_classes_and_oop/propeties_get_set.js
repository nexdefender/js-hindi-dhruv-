function User(email,password){
    this._email = email
    this._password = password

    // For email
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase() 
        },
        set: function(value){
            this._email = value
        }
    })

    // For psassword
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase() 
        },
        set: function(value){
            this._password = value
        }
    })

}



const chai = new User("dhruv@dhruv.com","bansal")
console.log(chai.email);
console.log(chai.password);
console.log(chai);
