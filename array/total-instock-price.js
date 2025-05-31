/**
 * Challenge: Calculate Total Price of In-Stock Products
 *
 * Description:
 * Given an array of product objects, each with a 'name', 'price', and 'inStock' property,
 * your task is to:
 * 1. Filter the products to include only those that are in stock (inStock === true)
 * 2. Map the filtered products to their 'price' values
 * 3. Use reduce to calculate the total price of the in-stock products
 *
 * Example:
 * Input:
 * [
 *   { name: "Pen", price: 5, inStock: true },
 *   { name: "Notebook", price: 20, inStock: false },
 *   { name: "Pencil", price: 3, inStock: true }
 * ]
 *
 * Output:
 * 8 // Only "Pen" and "Pencil" are in stock → 5 + 3 = 8
 */


const products = [
  { name: "Pen", price: 5, inStock: true },
  { name: "Notebook", price: 20, inStock: false },
  { name: "Pencil", price: 3, inStock: true }
];
const productsInStock=products.filter(data=>data.inStock).reduce((acc,curr)=>acc+curr.price,0)
console.log(productsInStock)