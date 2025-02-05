// Creating function using Expression function - Introduced in ES5
const greet = function(){
    console.log("Welcome to Expression function")
}

greet()

// Callback function - a function will recieve another function as a parameter
const myFunction = function(callback){
    callback()
}

myFunction(greet)


const add = function(num1, num2){
    console.log("Sum result is "+ (num1 + num2))
}

add(100, 200)