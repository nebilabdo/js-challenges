let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "nn", age: 19, surname: "Hathaway" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(field){
  return function(a,b){
    return a[field]>b[field]?1:-1
  }
}
console.log(users.sort(byField("name")))
console.log(users.sort(byField("age")))
console.log(users.sort(byField("surname")))
