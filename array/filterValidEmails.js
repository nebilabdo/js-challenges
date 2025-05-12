const input=["user@example.com", "user.example.com", "user@com", "hello@site.org"];
//expected output
//["user@example.com", "hello@site.org"]

const filterValidEmails=input.filter(email=>email.includes('@') && email.split('@')[1].includes('.'))
console.log(filterValidEmails) 