import React, { useRef, useState } from 'react'

function AddProduct({handleAddProduct}) {
    const titleRef = useRef()
    const priceRef = useRef()

    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const validateForm = () =>{
        const currentErrors = {}
        if(!titleRef.current.value) { currentErrors.title = "Title is required"}
        if(!priceRef.current.value) { currentErrors.price = "Price is required"}
        setErrors(currentErrors)
        return Object.keys(currentErrors).length == 0
    }

    const handleSubmit= (event)=>{
        event.preventDefault()
        setMessage('')
        if(validateForm()){
            handleAddProduct(titleRef.current.value, priceRef.current.value)
            titleRef.current.value = ''
            priceRef.current.value = ''
            setMessage('New product created!')
        }        
    }
  return (
    <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Product Title: 
                <input type='text' name='title' placeholder='Enter product title' ref={titleRef}/>
                {errors.title && <span className='error'>{errors.title}</span>}
            </div>
            <div>
                Product Price: 
                <input type='number' name='price' placeholder='Enter product price' ref={priceRef}/>
                {errors.price && <span className='error'>{errors.price}</span>}
            </div>
            <div>
                <button type='submit'>Add product</button>
                <h4 className='success'>{message}</h4>
            </div>
        </form>
    </div>
  )
}

export default AddProduct