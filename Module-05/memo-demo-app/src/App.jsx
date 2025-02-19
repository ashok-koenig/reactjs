import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensiveComponent from './components/ExpensiveComponent'
import ExpensiveCalculation from './components/ExpensiveCalculation'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  return (
    <>      
      <h1>Avoiding unnecessary re-renders - React.memo & useMemo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setName('Smith')}>
          name is {name}
        </button>
      </div>
      <ExpensiveComponent count={count}/>
      <ExpensiveCalculation count={count} />
    </>
  )
}

export default App
