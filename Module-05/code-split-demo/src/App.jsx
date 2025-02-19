import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {index: true, element: <Home />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <Contact />}
    ]
  }
])

function App() {
  
  return <RouterProvider router={router} />
}

export default App
