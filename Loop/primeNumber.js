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
