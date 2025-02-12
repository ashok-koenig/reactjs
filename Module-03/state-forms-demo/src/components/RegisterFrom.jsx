import React, { useState } from 'react'

function RegisterFrom() {

    const [formData, setFromData] = useState({name:'', email:'', gender:'', course: ''})

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setFromData({...formData, [name]: value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()  // Prevent the default form submittion to current url or action urls(if specified)
        console.log(formData)
    }

  return (
    <div>
        <h2>Registration From - using useState</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input type='text' name="name" value={formData.name} onChange={handleInputChange}/>
            </div>
            <div>
                Email: <input type='email' name="email" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div>
                Gender: <input type='radio' name='gender' value="male" checked={formData.gender == 'male'} onChange={handleInputChange}/> Male
                        <input type='radio' name='gender' value="female" checked={formData.gender == 'female'} onChange={handleInputChange}/> Female
            </div>
            <div>
                Course: <select name='course' value={formData.course} onChange={handleInputChange}>
                            <option value="">Select course</option>
                            <option value="HTML">HTML</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="React">React</option>
                        </select>
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterFrom