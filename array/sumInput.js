function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Enter a number:", 0);

    // stop if Cancel, empty, or non-numeric
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value); // convert to number and add to array
  }

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

alert(sumInput());
