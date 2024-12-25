const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh",

}

// 2nd method 
const{courseInstructor} = course
const{coursename: cn} = course // by this we can change name

console.log(courseInstructor);
console.log(cn);

// {
//     "name": "dhruv",
//     "coursename": "js  in hindi"',
//     "price": "free",
// }
