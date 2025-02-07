import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'

function App() { 

  const peterAge = 26
  return (
    <>
      <h1>Working with Props</h1>
      <Welcome name="John" age="24"/>
      <Welcome name="Smith" age={25}/>
      <Welcome name="Peter" age={peterAge}/>
    </>
  )
}

export default App
