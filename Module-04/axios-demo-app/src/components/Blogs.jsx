import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blogs() {
    const [blogsList, setBlogsList] = useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get("http://localhost:3000/blogs")
                // console.log(response)
                setBlogsList(response.data)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    })

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

  return (
    <div>
        <h2>Blogs List</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogsList.map((blog)=><tr key={blog.id}>
                                                <td>{blog.id}</td>
                                                <td>{blog.title}</td>
                                                <td>{blog.content}</td>
                                            </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Blogs