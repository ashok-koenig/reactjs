import React, { useState } from 'react'

function NameDemo() {
    const [name, setName] = useState('John')

    const handleNameChange = () =>{
        setName("Smith")
    }
  return (
    <div>
        <h1>State using string</h1>
        <h3>Name is {name}</h3>
        <button onClick={handleNameChange}>Change Name</button>
    </div>
  )
}

export default NameDemo 