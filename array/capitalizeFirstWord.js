const sentence = "hello world from nebil";
const capitalizeFirstWord=sentence.split(' ').map(data=>data[0].toUpperCase()+ data.slice(1)).join(' ');
console.log(capitalizeFirstWord)