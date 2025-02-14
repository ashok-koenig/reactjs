import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <h1>Working with React Router</h1>
        <hr/>
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link> |
        <Link to='/blogs'>Blogs</Link> |
        <Link to='/effect'>useEffect Demo</Link>
        <hr/>
        <Outlet />
    </div>
  )
}

export default Root