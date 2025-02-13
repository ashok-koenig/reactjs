import React from 'react'

function IncrementCounter({count, handleIncrement}) {
  return (
    <div>
        <h3>Increment Counter</h3>
        <h4>Current Count: {count}</h4>
        <button onClick={handleIncrement}>Increment Count</button>
    </div>
  )
}

export default IncrementCounter