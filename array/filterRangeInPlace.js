let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr,a,b){
    for(let key=0;key<arr.length;key++){
    let value=arr[key];
    if(value <a || value >b){
        arr.splice(key,1);
        key--;
    }
}};

filterRangeInPlace(arr, 1, 4)
console.log(arr)
