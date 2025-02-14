import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Payment() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/about', {replace: true})
        }, 3000)
        
    })
  return (
    <div>
        <h2>Payment processed...</h2>
    </div>
  )
}

export default Payment