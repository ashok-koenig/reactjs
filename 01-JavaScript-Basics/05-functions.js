// Creating function using function keyword
function greet() {
    console.log("Welcome to JavaScript Functions")
}

// Calling a function
greet()

// Function with parameters
function add(num1, num2){
    let result = num1 + num2;
    console.log("Result is "+ result)
}

// Calling function with parameters
add(10, 20)

// Function with return value
function sub(num1, num2){
    let result = num1 - num2
    return result;
}

// Calling a function with parameter and recieve the return value
let diff = sub(100, 50)
console.log("Difference is "+ diff)