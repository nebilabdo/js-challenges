function makeCounter() {
    let count = 0; 
    function counter() {
        return count++;
    }

    counter.set = function(value) {
        count = value;
    };

    counter.decrease = function() {
        return count--;
    };

    return counter; 
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10);
console.log(counter()); // 10

console.log(counter.decrease()); 
console.log(counter()); // 10
