const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
//*** In this, array itself merge in other array ***//

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
console.log(dc_heros);

const allHeroes = marvel_heros.concat(dc_heros)
//*** In this, element of two array merge and save in third array ***//
console.log(marvel_heros);
console.log(allHeroes);

const allNewHeroes = [...marvel_heros, ...dc_heros]
console.log(allNewHeroes);
//***Is the second method of merge of element and it is better than first method ***//

console.log(allNewHeroes[3][2]);

const realAllNewHeroes = allNewHeroes.flat(Infinity)
console.log(realAllNewHeroes);

const numberArray = [9,5,[3,0,0],7,[2,2,[6,3,["Dhruv number"]]]]

const realNumberArray = numberArray.flat(Infinity)
console.log(realNumberArray);

// console.log(numberArray);

const realNumberArray2 = numberArray.flat(1)
console.log(realNumberArray2);


console.log(Array.isArray(realNumberArray));

console.log(Array.from("dhruv"));
//**** It convert the element in array ****//

console.log(Array.from("dhruv bansal"));
console.log(Array.of("dhruv bansal"));
console.log(Array.from("1,2,3,4"));
console.log(Array.of("1,2,3,4"));

console.log(Array.from({name: "dhruv"}));
/*
It is an interesting question it give empty array
 */

let score1 = "dhruv"
let score2 = 400
let score3 = 200

console.log(Array.of(score1,score2,score3));

//**** Remember ****//
/*
.isArray,.of,.from(are important and tricky) 
*/
