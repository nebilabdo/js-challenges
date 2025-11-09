function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}


console.log(sum(1)(2).toString()); // 3
console.log(+sum(1)(2)(3)); // 6
console.log(+sum(5)(-1)(2)); // 6
console.log(+sum(6)(-1)(-2)(-3)); // 0
console.log(+sum(0)(1)(2)(3)(4)(5)); // 15

//Using recursion 
function sum(a) {
  function f(b) {
    // Recursive call: add b to a and return a new function expecting next value
    return sum(a + b);
  }

  // Convert function to primitive so we can see the result that means either operator or alert 
  f.toString = function() {
    return a;
  };

  return f;
}

console.log(+sum(1)(2));        // 3
console.log(sum(1)(2)(3).toString());     // 6
console.log(+sum(5)(-1)(2));    // 6
console.log(+sum(6)(-1)(-2)(-3)); // 0
