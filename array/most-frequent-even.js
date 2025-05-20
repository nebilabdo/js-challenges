function mostFrequentEven(nums) {
    const freqMap = nums
        .filter(n => n % 2 === 0) // even numbers only
        .reduce((map, num) => {
            map[num] = (map[num] || 0) + 1;
            return map;
        }, {});

    if (Object.keys(freqMap).length === 0) return -1;

    return Object.entries(freqMap)
        .sort((a, b) => b[1] - a[1] || a[0] - b[0])[0][0] * 1; // convert key back to number
}
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
console.log(mostFrequentEven([1, 3, 5, 7]));      
console.log(mostFrequentEven([4, 4, 4, 2, 2, 2]));    
console.log(mostFrequentEven([10, 10, 10, 20, 20]));   
