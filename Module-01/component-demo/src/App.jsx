import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFunction from './components/MyFunction'
import MyClass from './components/MyClass'

function App() {  

  return (
    <>
      <h1>Working with Components</h1>
      <MyFunction />
      <MyFunction />
      <MyFunction />
      <MyClass />
    </>
  )
}

export default App
