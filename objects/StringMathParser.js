function Calculator(){
    this.method={
        "+":(a,b)=>a+b,
        "-":(a,b)=>a-b
    }
    this.calculate=function(str){
   let data=str.trim().split(" ");
   let a=+data[0];
   let op=data[1];
   let b =+data[2]
   if(!this.method[op]|| isNaN(a)|| isNaN(b))return NaN;

   return this.method[op](a,b)

    }
    this.addMethod=function(name,func){
return this.method[name]=func;    }
}
let calc=new Calculator()
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate(" 13 + 7 "));
calc.addMethod('/' , (a, b) => a / b)
calc.addMethod('*' , (a, b) => a * b)
calc.addMethod('**' , (a, b) => a ** b)

console.log(calc.calculate("3 / 7"));
console.log(calc.calculate("3 ** 7"));
console.log(calc.calculate("3 * 7"));


