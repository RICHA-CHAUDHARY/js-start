const accountId = 144553
let accountEmail = "richa@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed


accountEmail = "rich@ri.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/
