import React, { useState } from 'react'

function RegisterFrom() {

    const [formData, setFromData] = useState({name:'', email:'', gender:'', course: ''})
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const currentErrors = {}
        if(!formData.name) { currentErrors.name = "Name is required" }
        if(!formData.email) { currentErrors.email = "Email is required" }
        if(!formData.gender) { currentErrors.gender = "Gender is required" }
        if(!formData.course) { currentErrors.course = "Course is required" }
        console.log(currentErrors)
        setErrors(currentErrors)
        return Object.keys(currentErrors).length == 0
    }

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setFromData({...formData, [name]: value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()  // Prevent the default form submittion to current url or action urls(if specified)
        if(validateForm()){
            console.log("Validation success,",formData)
        }else{
            console.log("Validation failed")
        }       
    }

  return (
    <div>
        <h2>Registration From - using useState</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input type='text' name="name" value={formData.name} onChange={handleInputChange}/>
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
                Email: <input type='email' name="email" value={formData.email} onChange={handleInputChange}/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
                Gender: <input type='radio' name='gender' value="male" checked={formData.gender == 'male'} onChange={handleInputChange}/> Male
                        <input type='radio' name='gender' value="female" checked={formData.gender == 'female'} onChange={handleInputChange}/> Female
                {errors.gender && <span className='error'>{errors.gender}</span>}
            </div>
            <div>
                Course: <select name='course' value={formData.course} onChange={handleInputChange}>
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