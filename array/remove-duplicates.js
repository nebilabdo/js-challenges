const numbers = [1, 2, 2, 3, 4, 4, 5];
const filternumbers=numbers.filter((value,index)=>numbers.indexOf(value)===index)
console.log(filternumbers)





function removeDuplicates(arr) {
  return [...new Set(arr)];
}


const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
