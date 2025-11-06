//The task has two parts.

//Given the following objects:

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
//Use __proto__ to assign prototypes in a way that any property lookup will follow the path
// : pockets → bed → table → head. 
// For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table

};

let pockets = {
  money: 2000,
  __proto__:bed

};
console.log(pockets.glasses)

head.glasses //because js gets directly the head does not find it that much
//  but in the above frist checkd inside itself then it does not exist go up through prototype link
