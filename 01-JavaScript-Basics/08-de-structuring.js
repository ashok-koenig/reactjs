const point = [100, 200, 300]

// const x = point[0]
// const y = point[1]

//De-structuring in Arrays
const [x,y] = point

console.log(x, y)

const person = { name: "John smith", age: 25, isStudent: false }

// const name = person.name
// const age = person.age;
// const isStudent = person.isStudent

// De-Structuring in Objects
const {name, age, isStudent} = person

console.log(name, age, isStudent)