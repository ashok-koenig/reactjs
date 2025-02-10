import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameList from './components/NameList'
import ProductList from './components/ProductList'
import FriendsList from './components/FriendsList'

function App() {  

  return (
    <>
      <h1>Working with List and Conditional Rendering</h1>
      <NameList />
      <ProductList />
      <FriendsList />
    </>
  )
}

export default App
