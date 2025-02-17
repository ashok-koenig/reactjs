function max(num1, num2){
    if(num1 > num2) return num1

    if(num1 < num2) return num2

    return "Numbers are equal"
}

console.log("Max value is ", max(100, 200))
console.log("Max value is ", max(300, 200))
console.log("Max value is ", max(100, 100))