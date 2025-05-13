/*🔹 Challenge: Filter Valid Usernames
You are given a list of usernames. A valid username must:

Be at least 5 characters long

Only contain letters and numbers (no special characters or spaces)
*/

const usernames = ["neb123", "a$@!", "hello_world", "goodUser99", "hi", "user123"];

const neba=usernames.filter(username=>{
    const validUsername=/^[a-zA-Z1-9]+$/.test(username);
   return  username.length>5 && validUsername
});
console.log(neba)