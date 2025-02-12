import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterFrom from './components/RegisterForm'

function App() {
  

  return (
    <>
     <h1>Uncontrolled Component/form - using useRef</h1>
     <RegisterFrom />
    </>
  )
}

export default App
