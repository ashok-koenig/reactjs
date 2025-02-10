import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import NameDemo from './components/NameDemo'
import SyntheticDemo from './components/SyntheticDemo'
import MovieDetail from './components/MovieDetail'

function App() {

  return (
    <>
     <h1>State Management and Event Handling</h1>
     <Counter />
     <NameDemo />
     <MovieDetail />
     <SyntheticDemo />
    </>
  )
}

export default App
