// Creating an array
var marks = [100, 99, 78, 70]

// Display all the array values
console.log(marks)

// Access the first array value (index 0)
console.log(marks[0])

// Modify second array value (index 1)
marks[1]= 100

// Display all the array values
console.log(marks)

// Iterate over the array values - find the sum of all the marks

var sum = 0;
for(let value of marks){
    sum = sum + value
}

console.log("Total marks: "+ sum)