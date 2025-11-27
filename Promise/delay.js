function delay(ms) {
  // your code
  return new Promise(function(resolve,reject){
     setTimeout(()=>resolve(),ms)
  })
}

delay(3000).then(() => console.log('runs after 3 seconds'));


// to make even shorter 
function delay(ms) {
  // your code
  return new Promise(resolve=>setTimeout(resolve,ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));
