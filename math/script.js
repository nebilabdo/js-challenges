const functionDifference=function(s,t){
    let sumS=0;
    let sumT=0;
    // for each is an array so i need to convert the string to array by using split 
    s.split('').forEach(char=>{ 
        sumS+=char.charCodeAt(0);
    })
    t.split('').forEach(char=>{
        sumT+=char.charCodeAt(0);
    })
    return String.fromCharCode(sumT-sumS);
}
console.log(functionDifference('abde','abcdef'))


// using map 
function getCharCodeSum(str) {
    return str.split('').map(char => char.charCodeAt(0)).reduce((acc, curr) => acc + curr, 0);
  }
  
  const findTheDifferenceUsingMap = function(s, t) {
    const sumS = getCharCodeSum(s);
    const sumT = getCharCodeSum(t);
    return String.fromCharCode(sumT - sumS);
  };
  console.log(findTheDifferenceUsingMap("abcd", "abcde")); 

  
  // using reduce 
  function getCharCodeSumWithReduce(str) {
    return str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }
  
  const findTheDifferenceWithreduce = function(s, t) {
    const sumS = getCharCodeSumWithReduce(s);
    const sumT = getCharCodeSumWithReduce(t);
    return String.fromCharCode(sumT - sumS);
  };
  console.log(findTheDifferenceWithreduce("abcd", "abcde")); 

  // using for of
  const findTheDifferenceWithforof = function(s, t) {
    let sumS = 0;
    let sumT = 0;

    for (let char of s) {
        sumS += char.charCodeAt(0);
    }

    for (let char of t) {
        sumT += char.charCodeAt(0);
    }

    let diff = sumT - sumS;
    return String.fromCharCode(diff);
};
console.log(findTheDifferenceWithforof("abcd", "abcde")); 



