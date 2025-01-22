function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function CreateUser(username, email, password){
    // synthax of call in function
    SetUsername.call(this, username)
    
    // this.username = username
    this.email = email
    this.password = password
}

const chai = new CreateUser("chai", "chai@fb.com","123")

console.log(chai);
