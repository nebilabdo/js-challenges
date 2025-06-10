function mergeSorted(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;

  // Loop through both arrays and add smaller element to merged array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add any remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Add any remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example usage:
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); 
// Output: [1, 2, 3, 4, 5, 6]
