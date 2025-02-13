import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import GrandParent from './components/GrandParent'

function App() {
  
  const message = "Sample Message from App Component"

  return (
    <>
     <h1>Sharing state between components</h1>
     <Counter />
     <hr/>
     <h1>Prop drilling problem - solution using Context API</h1>
     <GrandParent message={message}/>
    </>
  )
}

export default App
