const standardProduct = {
    id: 'P101',
    name: 'Eco-Friendly Water Bottle',
    price: 19.99,
    category: 'Accessories'
};

const newFeaturesList = ['BPA Free', 'Dishwasher Safe', '500ml Capacity'];


function updatedStandard(standard,addedFeatures,...exraDetails){
 let result={...standard}// i make it copy using spread because i cannot change the standard 
 result.features=[...addedFeatures]
 for(let index of exraDetails ){  // because it it is array that means the to add new features 
if(Array.isArray(index)){
    result.features=[...result.features,...index]// i check it is that features property exist or not 
}else if (typeof(index)==="object"){
    result={...result,...index}
}

}
return result;
}

console.log(updatedStandard(standardProduct ,newFeaturesList,{
    salesPrice:300,
    status:"availiable"
}))
console.log(updatedStandard(standardProduct ,newFeaturesList,{
    salesPrice:300,
    status:"availiable"
},{
    discount:"15%"
}))
console.log(updatedStandard(standardProduct ,newFeaturesList,{
    salesPrice:300,
    status:"availiable"
},["discount:15%"]
    
))


