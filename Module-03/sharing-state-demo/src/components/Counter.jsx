import React, { useState } from 'react'
import IncrementCounter from './IncrementCounter'
import DecrementCounter from './DecrementCounter'

function Counter() {

    const [count, setCount] = useState(0)
    const handleIncrement= ()=>{
        setCount((count)=> count+1)
    }
    const handleDecrement= ()=>{
        setCount((count)=> count-1)
    }

  return (
    <div>
        <h2>Counter Demo - Lifting state up to parent component</h2>
        <IncrementCounter count={count} handleIncrement={handleIncrement}/>
        <DecrementCounter count={count} handleDecrement={handleDecrement}/>
    </div>
  )
}

export default Counter