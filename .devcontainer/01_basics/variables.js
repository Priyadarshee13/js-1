const accountid = 12345
let accountemail="pg@gmail.com"
var accountpassword="abc123"

accountemail="gg@gmail.com"
accountpassword="abc234"

/*prefer not to use var due to bad scope and functional scope issue*/


console.log(accountid );
console.table([ accountid ,accountemail,accountpassword])
