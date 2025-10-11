// Create array, add elements, replace middle, remove first, prepend new elements

let styles = ["Jazz", "Blues"];        // Step 1
styles.push("Rock-n-Roll");           // Step 2
let middleIndex = Math.floor((styles.length - 1) / 2);
styles[middleIndex] = "Classics";     // Step 3
let firstValue = styles.shift();      // Step 4
styles.unshift("Rap", "Reggae");      // Step 5

console.log(styles);                  // Final array
console.log(firstValue);              // Removed first value
