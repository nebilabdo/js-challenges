function getAverageInput() {
        let numbers=[];
  while(true){
    

  let  value=prompt('enter a numbers',0);
  if (!isFinite(value)||value ===''||value ===null)break;
  numbers.push(+value);
}
  let sum =0;
  for(let num of numbers){
    sum+=num;
  } 
  let avg=sum/numbers.length;

return ({sum,avg});
  
}
let result=getAverageInput();


alert(`The sum is ${result.sum} ,The average is ${result.avg}`);
