//Display prime number 2-10
for(let n=2;n<10;n++){
     let counter=0;
    for(let e=1;e<=n;e++){
        if(n%e==0 ){
            counter++;
          
        }
    }
       if(counter==2){
            console.log(n);
            
        }
    
}

// in other methods  
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {     

  for (let j = 2; j < i; j++) {    
    if (i % j == 0) continue nextPrime; 

  alert(i);  
}
//using functions
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i);
  }
}


showPrimes(10);
