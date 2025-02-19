import React from 'react'

function ExpensiveComponent({count}) {
    console.log("Re-rendering ExpensiveComponent with count "+ count)
  return (
    <div>Result: {count ** count}</div>
  )
}

export default React.memo(ExpensiveComponent) 