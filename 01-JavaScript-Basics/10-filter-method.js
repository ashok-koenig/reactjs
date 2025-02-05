const numbers = [1, 2, 3, 4, 5, 6]
console.log("All numbers: ", numbers)

const evenNumbers = numbers.filter((num)=> num%2 == 0)

console.log("Even Numbers: ", evenNumbers)

const oddNumbers = numbers.filter((num)=> num%2 == 1)

console.log("Odd Numbers", oddNumbers)

const products = [
                    {name: "Laptop", price: 100}, 
                    {name: "Desktop", price: 150},
                    {name: "Phone", price: 80}
                ]
console.log("Actual Products: ", products)
const filteredProducts = products.filter((product)=> product.price >=100)

console.log("Filtered Products: ", filteredProducts)

const filteredProductNames = filteredProducts.map((product)=> product.name.toUpperCase())

console.log("Filtered Product Names: ", filteredProductNames)

