function camelize(str){
    let camelized=str.split('-').map((word,index)=>(index === 0)? word : word[0].toUpperCase()+ word.slice(1)
).join('')
     
    
    
    return camelized
}
console.log(camelize("background-color") )
console.log(camelize("list-style-image") )
