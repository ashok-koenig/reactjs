import React from 'react'

function DecrementCounter({count, handleDecrement}) {
  return (
    <div>
        <h3>Decrement Counter</h3>
        <h4>Current Count: {count}</h4>
        <button onClick={handleDecrement}>Decrement Count</button>
    </div>
  )
}

export default DecrementCounter