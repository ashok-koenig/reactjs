// Creating an object
const person = { name: "John smith", age: 25, isStudent: false }

// Access a value with dot notation
console.log(person.name)

// Access a value with bracket notation
console.log(person['age'])

// Display all object properies 
console.log(person)

// Modify values
person.age = 26
person["isStudent"]=true

// Display all object properies 
console.log(person)

// person = "John" // Not possible since person object is created with const

// for-in loop to iterate over the properies in an object
for (const key in person) {
    console.log(key, " - ", person[key])
}