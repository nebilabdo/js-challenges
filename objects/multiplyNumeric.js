let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multplyNumeric(prop){
   
    for(key in prop){
        if(typeof prop[key]==="number"){
            prop[key]*=2
        }
    }
    
}
multplyNumeric(menu);
console.log(menu);
