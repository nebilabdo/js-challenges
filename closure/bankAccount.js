function bankAccount(){
    let balance=0;
    function deposit(amount){
      balance+=amount;
      console.log(`your Account is created with ${amount},your current balance is ${balance}`)
    }
    function withdrow(amount){
   if(balance>amount){
     balance-=amount
      console.log(`your Account is cdebited with ${amount},your current balance is ${balance}`)
   }
    }
    function getBalance(){
        console.log(balance)
    }
    return { deposit,withdrow,getBalance}
    
}
let manager=bankAccount();
manager.deposit(2000)
manager.deposit(2000)
manager.deposit(2000)
manager.getBalance()
