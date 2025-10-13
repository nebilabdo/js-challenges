let arr = [5, 3, 8, 1];
let filterRange=(arr,a,b)=>arr.filter((item,index)=>item>=a && item<=b);
console.log(filterRange(arr, 1, 4));
console.log(arr)
