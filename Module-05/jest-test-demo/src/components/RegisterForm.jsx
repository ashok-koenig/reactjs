import React, { useRef } from 'react'

function RegisterForm({submitData}) {
    const nameRef = useRef()
    const emailRef = useRef()
    const handleSubmit = (event)=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        submitData(name, email)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input type='text' ref={nameRef} data-testid="name-input"/>
            </div>
            <div>
                Email: <input type='email' ref={emailRef} data-testid="email-input"/>
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm