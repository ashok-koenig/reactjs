import React from 'react'

 // De-Structuring props while receiving in function component
function Welcome({name, age}) { 
  return (
    <div>
        <h2>Welcome {name}, age is {age}</h2>
    </div>
  )
}

export default Welcome