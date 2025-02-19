import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <h1>Code Splitting Demo - Lazy Loading, & Dynamic import</h1>
        <hr />
        <div>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link>
        </div>
        <hr/>
        <Outlet />
    </div>
  )
}

export default RootLayout