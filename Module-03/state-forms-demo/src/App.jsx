import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterFrom from './components/RegisterFrom'

function App() { 

  return (
    <>
      <h1>Contolled Component/Form - using useState</h1>
      <RegisterFrom />
    </>
  )
}

export default App
