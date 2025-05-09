function findUniqueNumbers(arr) {
    const numberCount = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  
    // Return the numbers that appear only once
    return arr.filter(num => numberCount[num] === 1);
  }
  
  // Example 
  const numbers = [4, 5, 6, 4, 7, 8, 5, 9, 8];
  const uniqueNumbers = findUniqueNumbers(numbers);
  console.log(uniqueNumbers); 
  