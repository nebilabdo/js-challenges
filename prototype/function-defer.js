function f() {
  console.log("Hello!");
}
Function.prototype.defer=function(ms){
   setTimeout(this,ms)
}
f.defer(2000); // shows "Hello!" after 1 second
