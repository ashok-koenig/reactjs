import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

    async function handleDelete(id) {
        const result = confirm("Are yor sure, you want to delete this product?")
        if(result){
            setLoading(true)
            setError(null)
            try{
                await axios.delete("http://localhost:3000/products/"+id)
                loadAllProducts()
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        
    }


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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=><tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <Link to={'/edit/'+product.id}>Edit</Link>
                                                    <button onClick={()=>handleDelete(product.id)}>Delete</button>
                                                </td>
                                            </tr>)
                }
            </tbody>
        </table>
    </div>)
}

export default ListProducts