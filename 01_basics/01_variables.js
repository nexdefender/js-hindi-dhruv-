const accountId = 171717
let accountEmail = "dhruv@google.com"
var accountPassword = "2006"
accountCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed

 accountEmail = "db@gc.com"
 accountPassword = "221211"
accountCity = "ajmer"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
