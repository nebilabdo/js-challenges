const character=['a','b','c','a','a','b'];
const countChar=character.reduce((acc,char)=>{
 acc[char]=(acc[char]||0)+1;
 return acc;
},{})
console.log(countChar)