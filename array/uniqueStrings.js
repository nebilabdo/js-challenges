
  


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
    let uniqe=[];

let  unique=(arr)=> arr.filter((item)=>{
  if(!uniqe.includes(item)){
    uniqe.push(item);
    return true;
    }
     return false;
})
console.log( unique(strings) ); // Hare, Krishna, :-O

//in the other methods 
let uniqueStrings=str=>str.filter((item,index)=>strings.indexOf(item)===index)

console.log(uniqueStrings(strings))


//in the other methods 
function uniques(arr) {
  let result=[]
for(let str of arr){
   if(!result.includes(str)){  result.push(str);

} 
 }
 return result;

}



console.log( uniques(strings) ); // Hare, Krishna, :-O
