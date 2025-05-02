

//To find the maximum numbers in the elements 
function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}
console.log(majorityElement([3, 2, 3] ))
console.log(majorityElement([2,2,1,1,1,2,2]))

