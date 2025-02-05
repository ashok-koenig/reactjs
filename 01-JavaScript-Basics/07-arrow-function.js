// Creating arrow function
const greet = () => {
    console.log("Welcome to Arrow function")
}

greet()

const add = (num1, num2)=>{
    let result = num1 + num2
    console.log("Result is"+ result)
}

add(100, 200)

// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// We can skip curly braces and return keyword if only the return statement is the function body. 
const multiply = (num1, num2) => num1 * num2

let result = multiply(10, 5)
console.log("Product is "+ result)