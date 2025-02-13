import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  

  const [products, setProducts] = useState([{id: 1, title: "iPhone 16", price: 16890}])

  const handleAddProduct= (title, price) => {
    const newProduct = {id: products.length+1, title, price}
    setProducts([...products, newProduct])
  }

  return (
    <>
     <h1>Product Management App</h1>
    </>
  )
}

export default App
