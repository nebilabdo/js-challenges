function groupById(users) {
  return users.reduce((result, user) => {
    result[user.id] = user;  // use user.id as key and the whole user as value
    return result;
  }, {}); // start with an empty object
}

// Example usage:
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);
