import React, { useState } from 'react'

function Counter() {

    // console.log(useState(0))
    const [count, setCount] = useState(0)

    // let count = 0;
    const handleClick = ()=>{
        setCount((count)=> count+1)
        // count ++;
        // alert("Increment Button clicked, Count: "+ count)
    }

  return (
    <div>
        <h3>Current Count: {count}</h3>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter