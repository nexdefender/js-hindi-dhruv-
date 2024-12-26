// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,7]

for (const car of arr) {
    console.log(car);
}

const beauty = "hello sweety!"
for (const base of beauty) {
    console.log(`Each char is ${base}`);
    
}


// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

console.log(map);// unique value

for (const [duniya, value] of map) {
    console.log(duniya, ':-', value);
    
}

// const myObject ={
//     'game1': 'Free Fire',
//     'game2': 'Pubgy'
// }

// for (const [games,value] of myObject) {
//     console.log(games, ':-', value);
    
// }

// NOT ITERABLE //