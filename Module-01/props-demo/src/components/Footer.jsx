import React from 'react'
import "./Footer.css"

function Footer({title}) {
  return (
    <div className='footerStyle'>
        <h5>All rights reserved &copy; 2025 {title}</h5>
    </div>
  )
}

export default Footer