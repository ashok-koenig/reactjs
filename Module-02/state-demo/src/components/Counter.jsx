import React from 'react'

function Counter() {

    let count = 0;
    const handleClick = ()=>{
        count ++;
        alert("Increment Button clicked, Count: "+ count)
    }

  return (
    <div>
        <h3>Current Count: {count}</h3>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter