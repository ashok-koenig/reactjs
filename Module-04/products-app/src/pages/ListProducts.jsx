import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ListProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError]= useState(null)

    async function loadAllProducts(){
        try{
            const response = await axios.get("http://localhost:3000/products")
            // console.log(response.data)
            setProducts(response.data)
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        loadAllProducts()
    }, [])

  return (
    <div>ListProducts</div>
  )
}

export default ListProducts