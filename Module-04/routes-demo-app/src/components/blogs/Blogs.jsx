import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <div>
        <h2>Blogs Page</h2>
        <hr/>
        <Link to="/blogs">List of Blogs</Link> | 
        <Link to="/blogs/add">Add Blog</Link>
        <hr/>
        <Outlet />
    </div>
  )
}

export default Blogs