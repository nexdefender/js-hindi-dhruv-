// array

const myArr = [0,1 ,2,3 ,4 ,5] //element different bhi ho sakte hai

const myHeros = ["iron man","spiderman"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[3]);
console.log(myHeros[1]);
console.log(myArr2[1]);

// Array methods

myArr.push(6)
myArr.push('dhruv')

myArr.push(7) //add element in array

console.log(myArr.includes(7));

myArr.pop()//always remove last element

myArr.unshift(5) //it add element in array in starting but not use it high because it shift all element position which is load on computer 

myArr.unshift('dhruv')

myArr.shift()//it remove element from start

console.log(myArr.includes(5));// it give ans that it is in array aur not

console.log(myArr.indexOf(3)); // if it is in array give array postion otherwise give -1

const newArr =myArr.join() // it covert array in string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//+++++slice, splice++++++++++//

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3) // not include last range

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // inclue last range but this is not orignal diff btw slice and splice 

console.log("C ",myArr);
console.log(myn2);

//****** differnce btw slice and splice is *****//

// in slice only range print in outpit not difference in orignal array
// but in  splice range was print but it also change array by remove the range of splice 





