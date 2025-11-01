function printNumbers(from ,to){
  let current=from;
  let timerId=()=>{
  if(current===to){
  clearInterval(printNum)
}
alert(current)
current++;
  }
    let printNum=setInterval(neba,1000);   // make after function

}
printNumbers(2,8)
//using settimeout
function printNumbers(from, to){
  let current=from;
  let timerId=setTimeout(function printNum(){
   alert(current)
   if(current!==to){
    timerId=setTimeout(printNum,1000)
    current++
   }
  },1000)
}

printNumbers(2,8)
//most simpler way 
function printNumbers(from, to) {  
  let id = setInterval(() => {
    alert(from++);
    if (from > to) {
      clearInterval(id);
    }
  }, 1000);
}
printNumbers(2,8)
