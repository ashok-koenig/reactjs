console.log("Working with JavaScript Variables");

// Creating a global variable with var keyword and initializing with a string value.
var globalVariable = "This is global variable";

// Print the variable value into console
console.log(globalVariable);

globalVariable = "Modified global variable"



// Simple block
{
    console.log(globalVariable);
    let blockVariable = "This is block variable"
    console.log(blockVariable)

    blockVariable = "Modified block variable"
    console.log(blockVariable)
}

//console.log(blockVariable) // Not possible