// countVowels.js

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Test cases
console.log(countVowels("hello"));
console.log(countVowels("Nebil Abdo"));
