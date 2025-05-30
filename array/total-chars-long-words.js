const words = ["sun", "nebila", "code", "javascript", "hi"];
//expected output=16
const findLongTotalChar=words.filter(char=>char.length>4).reduce((acc,curr)=>{
    const totalChar=acc+curr.length;
    return totalChar
},0)
console.log(findLongTotalChar)