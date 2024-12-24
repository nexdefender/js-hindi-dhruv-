const tinderUser =new Object() // singelton object
const tinderUserTwo = {} // non singelton object

tinderUser.id = '123abc'
tinderUser.name = "ben10"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(tinderUserTwo);

const regularUser ={
    email: "father@gmail.com",
    fullname: {
        userfullname: {
            firstname: "praveen",
            middlename: "kumar",
            lastname: "bansal",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "c", 4: "d",}
const obj5 = {4: "e", 5: "d",}

// const realRegularUser = regularUser.flat(Infinity)
// console.log(realRegularUser);
// console.log(Object.of(obj1,obj2));
// not possible in objects

const obj3 = {obj1,obj2}
console.log(obj3);
// samr problem as array both go as a obj in another object

const obj4 = Object.assign(obj1 , obj2)
console.log(obj4);


const obj6 = Object.assign({},obj1,obj2,obj5)
console.log(obj6);

// all above are  good method to merge object //

const obj7 = {...obj1,...obj2,...obj5}
console.log(obj7);
// this is best method to merge objects also


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// give that this property is available aur not 


const users = [
    {
        id: 231,
        name: "dhruv",
        
    },
    {
        id: 232,
        name: "praveen",

    },
    {
        id: 233,
        name: "mamta",

    }
]

console.log(users);
console.log(users[1]);
console.log(users[2]["id"]);

console.log(Object.keys(users));
console.log(Object.entries(users));
console.log(Object.keys(users[2]));
