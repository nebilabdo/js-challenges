'use strict'
let question=[[`1. What is the output of the following code?
console.log(typeof undefined);
a) "undefined"
b) "null"
c) "object"
d) "string" `],
[`2. Which keyword is used to declare a block-scoped variable?
a) var
b) let
c) const
d) Both b and c,
`],
[`3. What does the nullish coalescing operator (??) do?
a) Returns the right operand if the left operand is null or undefined
b) Returns the left operand if it's falsy
c) Returns the right operand always
d) Returns true if both operands are null
`] ];
let count=0;
let answer=["a","d","a"];
for(let x=0;x<question.length;x++){
    let val=prompt(question[x]);
    if (val==answer[x]){
        count++;
    }
}
if (question.length==3){
    alert (`your result is ${count} out of ${3}`);
}
    
