import React from 'react'

function RegisterFrom() {
  return (
    <div>
        <h2>Registration From - using useRef</h2>
        <form>
            <div>
                Name: <input type='text' name="name" />
            </div>
            <div>
                Email: <input type='email' name="email" />
            </div>
            <div>
                Gender: <input type='radio' name='gender' value="male" /> Male
                        <input type='radio' name='gender' value="Female" /> Female
            </div>
            <div>
                Course: <select name='course'>
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
