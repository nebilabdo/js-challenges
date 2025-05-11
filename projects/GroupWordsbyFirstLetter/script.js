const Input= ["apple", "banana", "apricot", "blueberry", "cherry"];
const groupWordsByfristletter=Input.reduce((acc,word)=>{
    const firstLetter = word[0];

  if (!acc[firstLetter]) {
    acc[firstLetter] = []; 
  }

  acc[firstLetter].push(word); 

  return acc;
},{});
console.log(groupWordsByfristletter)