const words = ["pen", "pencil", "book", "paper", "eraser"];
const letter = "p";
const filterByFristLetter=words.filter(word=>word.startsWith(letter))
console.log(filterByFristLetter)
const filterByFristLetter2=words.filter(word=>word.slice(0,1)=== letter)
console.log(filterByFristLetter2)