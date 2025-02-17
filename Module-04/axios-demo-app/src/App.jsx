import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs'
import BlogsList from './components/BlogsList'

function App() {
  
  return (
    <>
      <h1>Working with Axios for API Integration</h1>
      {/* <Blogs /> */}
      <BlogsList />
    </>
  )
}

export default App
