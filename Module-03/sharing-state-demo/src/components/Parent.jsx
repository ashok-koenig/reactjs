import React from 'react'
import Child from './Child'

function Parent({message}) {
  return (
    <div>
        <h2>Parent</h2>
        <Child message={message} />
    </div>
  )
}

export default Parent