import React from 'react'
import Parent from './Parent'

function GrandParent({message}) {
  return (
    <div>
        <h2>Grand Parent</h2>
        <Parent message={message}/>
    </div>
  )
}

export default GrandParent