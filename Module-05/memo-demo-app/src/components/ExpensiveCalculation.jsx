import React, { useMemo } from 'react'

function ExpensiveCalculation({count}) {

    const calculate = () =>{
        console.log("Calculating with count " + count)
        return count ** count;
    }

   const result = useMemo(calculate, [count])

  return (
    <div>Expensive Calculation Result: {result}</div>
  )
}

export default ExpensiveCalculation