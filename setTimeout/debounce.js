// let f = _.debounce(alert, 1000);

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);
// // debounced function waits 1000ms after the last call and then runs: alert("c")

function debounce(func,time){
 let result=0;
 return function wrapper(arg){
      clearTimeout(result);
   result=setTimeout(()=>func.call(this,arg),time)
 }
}
function func(arg){
    console.log(`${arg}`)
}
let f =debounce(func, 1000);
f("a")
f("b")
f("b")
f("h")
f("b")
f("b")
f("d")
