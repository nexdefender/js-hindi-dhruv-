// singleton
// Object.create


// object literals
const mysym = Symbol("key1")

const JsUser ={
    name: "dhruv",
    age: 18,
    [mysym]: "mykey1",
    mysym: "mykey2",
    "full name": "dhruv basnal",
    email: "dhruv@google.com",
    isLoggedIn: true,
    lastLoginDays: ["sunday","monday="]
}

// method to call object //
console.log(JsUser.email); // this is a method for not all like full name not work in this method

console.log(JsUser["email"]);// this methos good enough in this full name work
console.log(JsUser["full name"]);
console.log(JsUser.lastLoginDays);
console.log(JsUser["lastLoginDays"]);

console.log(JsUser[mysym]);
console.log(typeof JsUser[mysym]);

JsUser.email = "dhruv@chatgpt.com"

// Object.freeze(JsUser)// by this value not change even after someone change it

JsUser.email ="bansal@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
    
}

JsUser.greeting_two = function(){
    console.log(`hello JS user, ${this.name}`);
    
}

 console.log(JsUser.greeting());
 console.log(JsUser.greeting_two());
