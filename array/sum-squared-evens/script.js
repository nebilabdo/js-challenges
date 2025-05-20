/*Input: [1, 2, 3, 4, 5, 6]  
Output: 56
💡 Explanation:
Even numbers: 2, 4, 6
Squares: 4, 16, 36
Sum: 4 + 16 + 36 =  56
*/


const input=[1, 2, 3, 4, 5, 6]  ;
const sumofSquaredEvenNumbers=input.filter(data=>data%2==0).map(data=>data*data).reduce((sum,arr)=>sum+arr,0);
console.log(sumofSquaredEvenNumbers)


//To make it more descriptive 
// const input = [1, 2, 3, 4, 5, 6];

// const evenNumbers = input.filter(num => num % 2 === 0);
// const squared = evenNumbers.map(num => num * num);
// const sum = squared.reduce((acc, val) => acc + val, 0);

// console.log(sum);
