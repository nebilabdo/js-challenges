function Accumulator(startingValue){
this.value=startingValue;
this.read=function(){
    let a=+prompt("enter a number you need to add in value ",0)
    this.value+=a;
}
}
let accumulator=new Accumulator(8);
accumulator.read();
accumulator.read();
alert(accumulator.value)
