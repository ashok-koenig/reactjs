import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>404 - Page Not Found</h2>
        <Link to='/'>Please go to Home page</Link>
    </div>
  )
}

export default NotFound