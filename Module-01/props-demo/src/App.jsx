import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Product from './components/Product'
import Header from './components/Header'
import Footer from './components/Footer'

function App() { 

  const peterAge = 26

  const laptopDetail = {title: "Laptop", price: 27878}
  const phoneDetail = {title: "Phone", price: 45454}
  const title = "Company Name Pvt Ltd"
  return (
    <>
      <Header title={title}/>
      <hr />
      <h1>Working with Props</h1>
      <Welcome name="John" age="24"/>
      <Welcome name="Smith" age={25}/>
      <Welcome name="Peter" age={peterAge}/>
      <hr />
      <Product productDetail={laptopDetail}/>
      <Product productDetail={phoneDetail} />
      <hr />
      <Footer title={title}/>
    </>
  )
}

export default App
