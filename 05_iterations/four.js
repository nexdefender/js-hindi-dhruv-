// For In loop


const myObject = {
    JS : 'javascript',
    Cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple",

}

for (const key in myObject) {
   console.log(key);
   
}
console.log(" ");
// give left element
for (const key in myObject) {
   console.log(myObject[key]);
   
}
// give right element
console.log(" ");

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
    
 }

const progrmaing = ["js","rb","py","java","cpp"]

for (const [key,value] in progrmaing) {
   
   console.log(key,progrmaing[key]);
   
}