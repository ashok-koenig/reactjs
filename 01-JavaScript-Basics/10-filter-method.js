const numbers = [1, 2, 3, 4, 5, 6]
console.log("All numbers: ", numbers)

const evenNumbers = numbers.filter((num)=> num%2 == 0)

console.log("Even Numbers: ", evenNumbers)

const oddNumbers = numbers.filter((num)=> num%2 == 1)

console.log("Odd Numbers", oddNumbers)