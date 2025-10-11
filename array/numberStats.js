function numberStats() {
        let numbers=[];
        while(true){
            let value=prompt("Enter a number  ",0);
            if(!isFinite(value)||value===null||value==='')break;
        numbers.push(+value);        
    }
   let sum=0;
   let max=numbers[0];
   let min=numbers[0];
    for(let item of numbers){
    sum+=item;
    if(item>max){
        max=item;
    }
    if(item<min){
        min=item;
    }
   }
   let avg=sum/numbers.length;

  return {sum,avg,max,min}
}
let result=numberStats();

alert(`The sum is ${result.sum} ,The average is ${result.avg} ,max is ${result.max},min is ${result.min}`);

