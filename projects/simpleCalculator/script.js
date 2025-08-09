 let value1=+(prompt("Write the first value"));
        let operator=prompt("Write the operator");
        let value2=+(prompt("Write the second value"));
        if(value1 ==="" ||  value2==="" ||  operator ===""|| value1 === null ||  value2=== null ||  operator === null ){
            alert("you have'nt inserted all the neccessary values");
        }
        
        else if (typeof value1!== "number"  || typeof value2!== "number"){
                    alert('invalid input');
                }
                else{

        switch(operator){
        case "+":
        alert( value1+value2);
        break;
         case "-":
        alert( value1-value2);
        break; case "*":
        alert( value1*value2);
        break; case "/":
        alert( value1/value2);
        break;
        default:
             alert('The operator is invalid');
        break;
}}
