import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProduct from './components/AddProduct'
import ListProduct from './components/ListProduct'

export const Offer = createContext(0)

function App() {  

  const [products, setProducts] = useState([{id: 1, title: "iPhone 16", price: 16890}])

  const handleAddProduct= (title, price) => {
    const newProduct = {id: products.length+1, title, price}
    setProducts([...products, newProduct])
  }

  const [offerPercentage, setOfferPercentage] = useState(0)

  return (
    <>
     <h1>Product Management App</h1>
     <div>
      Set Offer Percentage: 
      <input type='number' value={offerPercentage} onChange={(event) => setOfferPercentage(event.target.value)} />
     </div>
     <AddProduct handleAddProduct={handleAddProduct}/>
     <Offer.Provider value={offerPercentage}>
        <ListProduct products={products}/>
     </Offer.Provider>
     
    </>
  )
}

export default App
