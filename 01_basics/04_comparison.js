// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log(1<=2);

 console.log("2" > 1);
 console.log("a" > "b");

 console.log(null > 0);
 console.log(null == 0);
 console.log(null >= 0);
 
//the reason is that an equality check == and comparison <>>=<= work differntly
//comparison convert null toa number, treating it as 0.
//  that's why (3) null>=0 and(1) null>0 is false

// === strict check

console.log("2" == 2);
console.log("2" === 2);
