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

    if(loading) return <h3>Products are loading...</h3>
    if(error) return <h3>Error: {error}</h3>

  return (<div>
        <h2>List of Products</h2>
        <table border={1} width={"100%"}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=><tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                            </tr>)
                }
            </tbody>
        </table>
    </div>)
}

export default ListProducts