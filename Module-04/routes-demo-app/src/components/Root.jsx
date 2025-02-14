import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
        <h1>Working with React Router</h1>
        <hr/>
        <Outlet />
    </div>
  )
}

export default Root