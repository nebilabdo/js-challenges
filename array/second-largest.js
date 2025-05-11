function secondLargest(arr) {
  const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return null;
  }
}

console.log(secondLargest([4, 1, 9, 2]));
console.log(secondLargest([10, 5, 0, 3]));
console.log(secondLargest([5, 5, 5, 5]));
