function findMissingNumber(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, cur) => acc + cur, 0);

  return expectedSum - actualSum;
}

const result = findMissingNumber([10, 8, 9, 7, 5, 4, 2, 3, 1]);

console.log(result);
