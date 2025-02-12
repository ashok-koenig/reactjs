import React, { useRef } from 'react'

function FocusDemo() {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
  return (
    <div>
        <h2>Focus to input element using useRef</h2>
        <div>
            First Name: <input type='text' ref={firstNameRef} />
        </div>
        <div>
            Last Name: <input type='text' ref={lastNameRef} />
        </div>
        <div>
            <button onClick={() => firstNameRef.current.focus()}>Focus to First Name</button>
        </div>
        <div>
            <button onClick={() => lastNameRef.current.focus()}>Focus to Last Name</button>
        </div>
    </div>
  )
}

export default FocusDemo