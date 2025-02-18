import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct() {
    const {id} = useParams()
    const titleRef = useRef()
    const priceRef = useRef()
    const [error, setError] = useState(null)
    const [message, setMessage] = useState()

    // Used to fill the input field from the products api
    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get("http://localhost:3000/products/"+id)
            if(response.data){
                titleRef.current.value = response.data.title;
                priceRef.current.value = response.data.price;
            }            
        }
        fetchData()
    }, [id])


    async function updateProduct(editedProduct) {
        try{
            const response = await axios.put("http://localhost:3000/products/"+id, editedProduct)
            console.log(response.data)
            if(response.data.id){
                setMessage("Product updated with id "+ response.data.id)
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
            updateProduct({title, price})
        }
    }
  return (
    <div>
        <h2>Edit product</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Title: <input type='text' ref={titleRef} />
            </div>
            <div>
                Price: <input type='number' ref={priceRef} />
            </div>
            <div>
                <button type='submit'>Update Product</button>
            </div>
            <div className='error'>{error}</div>
            <div className='success'>{message}</div>
        </form>
    </div>
  )
}

export default EditProduct