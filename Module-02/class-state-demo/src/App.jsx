import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [showCounter, setShowCounter] = useState(false)

 const toggleCounter=()=>{
    setShowCounter(!showCounter)
  }
 
  return (
    <>
     <h1>State in class component</h1>
     <button onClick={toggleCounter}>Show/Hide Counter Component</button>
    { showCounter && <Counter />}
    </>
  )
}

export default App
