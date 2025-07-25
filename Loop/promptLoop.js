/* The check for num <= 100 – that is, the entered value is still not greater than 100.
The check && num is false when num is null or an empty string. Then the while loop stops too.
*/
//using do while loop
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
//using for loop 
let num;
for (;;) {
  num = prompt("Enter a number greater than 100?", 0);
  if (num === null || num === "") break; // User clicked Cancel or entered nothing
  if (num > 100) break; // Number is greater than 100
}
