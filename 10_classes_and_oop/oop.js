const user = {
    username: 'Dhruv',
    logincount: 8,
    signrdIn: true,
    
    
    getUserDetails: function(){
        console.log("gGot user detail from datbase");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    },
}



console.log(user.username);
console.log(user["username"]);
console.log(user["getUserDetails"]);
console.log(user.getUserDetails());

// for global context
console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

// we use new to give it at from start
// if not new it overwitr it
const userOne = new User("dhruv",12,true)
const userTwo = new User("bansal",11,false)
console.log(userOne.constructor);  
console.log(userTwo);  

// NEW //
// 1. naya object create hota hai
// 2. passon the value
// 3. this was created that add the value 
// 4. and than it give us value



