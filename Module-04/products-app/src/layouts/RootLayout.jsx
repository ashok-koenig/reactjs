import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


function RootLayout() {
  return (
    <div>
        <h1>Product Management App</h1>
        <Header />
        <hr />
        <Outlet />
        <hr />
        <Footer />
    </div>
  )
}

export default RootLayout