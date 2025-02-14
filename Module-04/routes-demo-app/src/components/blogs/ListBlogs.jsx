import React from 'react'
import { Link } from 'react-router-dom'

function ListBlogs() {
  return (
    <div>
        <h3>List of Blogs</h3>
        <div><Link to="/blogs/1">Blog post 1</Link></div>
        <div><Link to="/blogs/2">Blog post 2</Link></div>
    </div>
  )
}

export default ListBlogs