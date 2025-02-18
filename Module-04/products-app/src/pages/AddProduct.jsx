import axios from 'axios'
import React, { useRef, useState } from 'react'

function AddProduct() {
    const titleRef = useRef()
    const priceRef = useRef()
    const [error, setError] = useState(null)
    const [message, setMessage] = useState()
    async function addProduct(newProduct) {
        try{
            const response = await axios.post("http://localhost:3000/products", newProduct)
            console.log(response.data)
            if(response.data.id){
                setMessage("Product create with id "+ response.data.id)
            }
        }catch(err){
            setError(err.message)
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const title = titleRef.current.value
        const price = priceRef.current.value
        if(title && price){
            // console.log(title, price)
            // addProduct({title, price})
            const newProduct = {title, price}
            addProduct(newProduct)
        }
    }
  return (
    <div>
        <h2>Add new product</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Title: <input type='text' ref={titleRef} />
            </div>
            <div>
                Price: <input type='number' ref={priceRef} />
            </div>
            <div>
                <button type='submit'>Add Product</button>
            </div>
            <div className='error'>{error}</div>
            <div className='success'>{message}</div>
        </form>
    </div>
  )
}

export default AddProduct