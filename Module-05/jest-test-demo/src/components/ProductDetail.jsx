import React, { useEffect, useState } from 'react'

function ProductDetail({productId}) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchProduct() {
            try{
                const response = await fetch('http://localhost:3000/products/'+productId)
                const data = await response.json()
                setProduct(data)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchProduct()
    }, [productId])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

  return (
    <div>
        {product ? "Title: "+ product.title : "Product not found"}
    </div>
  )
}

export default ProductDetail