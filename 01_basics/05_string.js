const name = "dhruv"
const repoCount = 50

console.log(name + repoCount + " value"); // not recomended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // reecomended

const gameName = new String('dhruv-DBC')  

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4) //last vale not include
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   bansal  "
console.log(newStringOne);
console.log(newStringOne.trim()); //++++ trim remove spaces trimstart and trimend was also there ++++//

const url = "http://dhruv.com/dhruv%20bansal"

console.log( url.replace('%20', '-'));

console.log( url.includes('dhruv'));
console.log( url.includes('pagal'));

console.log(gameName.split('-')); 



