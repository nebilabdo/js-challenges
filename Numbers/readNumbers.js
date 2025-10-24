 function readNumber(){
    let input=prompt("please enter a number?",0);
    if(!isNaN(input)){
   return input
    }else if(isNaN(input)){
      return readNumber();

    }else if(input===null||input.trim()===""){
     return null;
    }
 }
 alert(`read : ${readNumber()}`)


 //or in other ways 
 function readNumber() {
    let input;

    do {
        input = prompt("Please enter a number", 0);

        // 1. Cancel or empty input
        if (input === null || input.trim() === "") {
            return null;
        }

        // 2. Repeat if not a number
    } while (!isFinite(input));

    // 3. Convert string to number and return
    return +input;
}

let answer = readNumber();

if (answer === null) {
    alert("Read: null");
} else {
    alert(`Read: ${answer}`);
}
//or in other ways 
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num.trim() === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);
