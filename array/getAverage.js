let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];
let sum=0;
let getAverageAge=arr=>arr.reduce((sum,item)=>sum+=item.age,0)/arr.length
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
