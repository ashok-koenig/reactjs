import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to="/">Products List</Link> | 
        <Link to="/add">Add Product</Link>
    </div>
  )
}

export default Header