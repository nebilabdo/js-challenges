// 🔍 Challenge: Product Sales Analysis
// ----------------------------------------
// You are given an array of product objects. Each product has:
// - a name (string)
// - a price (number)
// - a list of sales (number of units sold in different regions)
//
//  🧠Your tasks are:
// 1. Use map() to create a new array of products with the total units sold per product.
//    Example output: [{ name: "Product A", totalSold: 120 }, ...]
//
// 2. Use filter() to get only the products that sold more than 100 units in total.
//
// 3. Use reduce() to calculate the overall revenue (price * total units sold for all products).
//
// 🔥 Bonus:
// Find the product with the highest number of units sold.
//
// 🧠 This challenge will help you practice and master working with objects, arrays,
// and JavaScript's most powerful methods: map(), filter(), and reduce().
const products = [
  { name: "Book", price: 20, sales: [10, 15, 8] },
  { name: "Pen", price: 2, sales: [100, 120, 90] },
  { name: "Laptop", price: 500, sales: [1, 1, 0] },
  { name: "Notebook", price: 5, sales: [30, 20, 25] },
];
//1 to get the total units sold per product.
const totalUnitSold=products.map(data=>{
   const totalsold= data.sales.reduce((acc,curr)=>acc+curr,0)
   return {name:data.name,totalsold}
});
console.log(totalUnitSold);
//2 o get only the products that sold more than 100 units in total.
const productsSelled=totalUnitSold.filter(data=>data.totalsold>100)
console.log(productsSelled)

const overallRevenue=products.reduce((acc,curr)=>{
    const totalsold= curr.sales.reduce((acc,curr)=>acc+curr,0)*curr.price
    console.log(totalsold)
    return acc + totalsold;
    
},0)
console.log(overallRevenue)

const highestUnitsold=totalUnitSold.reduce((highest,current)=>highest.totalsold>current.totalsold?highest:current)
console.log(highestUnitsold)