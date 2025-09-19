let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function checkingSalaries(prop){
    let sum=0;
    for(let key in prop){
        sum += prop[key];
        
        
        
    }
    return sum;
    
}
console.log(checkingSalaries(salaries));
