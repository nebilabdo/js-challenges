/*🧩 Challenge: "Calculate Average of Positive Numbers"
You are given an array of numbers. Write a function that calculates the average of all the positive numbers ithe array. If there are no positive numbers, return 0.

✅ Example:

Input: [4, -2, 7, -1, 0, 5]
Output: 5.33
*/

let data=[4, -2, 7, -1, 0, 5]
const positiveData=data.filter(data=>data>0).reduce((acc,sum)=>acc+sum,0)/data.filter(data=>data>0).length;
console.log(`the average of the the positives values of data is ${positiveData}`)
