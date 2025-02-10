import React, { useState } from 'react'

function Counter() {

    // console.log(useState(0))
    const [count, setCount] = useState(0)

    // let count = 0;
    const handleClick = ()=>{
      // function call with new value to the state variable
      setCount(count + 1)
        // setCount((count)=> count+1)
        // count ++;
        // alert("Increment Button clicked, Count: "+ count)
    }

  return (
    <div>
      <h1>State using Number</h1>
        <h3>Current Count: {count}</h3>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter