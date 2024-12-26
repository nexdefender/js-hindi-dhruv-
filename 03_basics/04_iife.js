// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();// this semicolon imp for written two iife

( () => {
    console.log(`DB CONNECTED TWO`);
    
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("dhruv");

