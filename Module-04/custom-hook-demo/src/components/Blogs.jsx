import React from 'react'
import useFetch from '../hooks/useFetch'

function Blogs() {
    const {data: blogsList, loading, error} = useFetch("http://localhost:3000/blogs")
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
                    blogsList.map((blog)=> <tr key={blog.id}>
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