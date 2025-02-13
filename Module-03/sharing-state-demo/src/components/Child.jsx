import React, { useContext } from 'react'
import { Data } from '../App'

function Child({message}) {
    // Step 3: Receive the data in any component using useContext hook
    const anotherMessage = useContext(Data)
  return (
    <div>
        <h2>Child</h2>
        <h4>{message}</h4>
        <h4>{anotherMessage}</h4>
    </div>
  )
}

export default Child