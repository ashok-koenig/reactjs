import React, { useRef, useState } from 'react'

function RegisterFrom() {

    const nameRef = useRef()
    const emailRef = useRef()
    const maleRef = useRef()
    const femaleRef = useRef()
    const courseRef = useRef()

    const [errors, setErrors] = useState({})

    const validateForm = () =>{
        const currentErrors = {}
        if(!nameRef.current.value) { currentErrors.name = "Name is required" }
        if(!emailRef.current.value) { currentErrors.email = "Email is required" }
        if(maleRef.current.checked == false && femaleRef.current.checked == false) { currentErrors.gender = "Gender is required"}
        if(!courseRef.current.value) { currentErrors.course = "Course is required"}
        setErrors(currentErrors)
        return Object.keys(currentErrors).length == 0
    }

    const hanldeSubmit = (event)=>{
        event.preventDefault();
        if(validateForm()){
            console.log(nameRef.current.value)
            console.log(emailRef.current.value)
            console.log(maleRef.current.checked ? maleRef.current.value : femaleRef.current.value)
            console.log(courseRef.current.value)
        }else{
            console.log("Form Validation Failed")
        }
        
    }

  return (
    <div>
        <h2>Registration From - using useRef</h2>
        <form onSubmit={hanldeSubmit}>
            <div>
                Name: <input type='text' name="name" ref={nameRef} />
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
                Email: <input type='email' name="email" ref={emailRef}/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
                Gender: <input type='radio' name='gender' value="male" ref={maleRef} /> Male
                        <input type='radio' name='gender' value="Female" ref={femaleRef} /> Female
                {errors.gender && <span className='error'>{errors.gender}</span>}
            </div>
            <div>
                Course: <select name='course' ref={courseRef}>
                            <option value="">Select course</option>
                            <option value="HTML">HTML</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="React">React</option>
                        </select>
                {errors.course && <span className='error'>{errors.course}</span>}
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterFrom
