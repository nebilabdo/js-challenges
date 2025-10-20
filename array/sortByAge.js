let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];
let sortByAge=arr.sort((a,b)=>a.age-b.age)

console.log(sortByAge)

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
//or

let arr = [ pete, john, mary ];
function sortByAge(arra){
  let temp;
  for(let x=0; x<arra.length-1;x++){
    for(let y=x+1; y<arra.length;y++){
        if( arra[x].age>arra[y].age){
           temp=arra[x];
            arra[x]=arra[y];
            arra[y]=temp;
        }
  }
} 
 return arra;

}

// now: [john, mary, pete]
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
console.log(arr);
