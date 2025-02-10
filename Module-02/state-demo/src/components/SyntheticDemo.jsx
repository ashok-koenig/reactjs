import React, { useState } from 'react'

function SyntheticDemo() {
    const [message, setMessage] = useState('No message')

    const handleInputChange = (event) => {
        setMessage(event.target.value)
    }

  return (
    <div>
        <h1>Synthetic Events Demo</h1>
        <input type='text' onChange={handleInputChange} value={message}/>
        <h2>Message is {message}</h2>
    </div>
  )
}

export default SyntheticDemo