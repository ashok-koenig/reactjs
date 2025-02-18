import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import PageNotFound from './pages/PageNotFound'
import ListProducts from './pages/ListProducts'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {index: true, element: <ListProducts />},
      {path: 'add', element: <AddProduct />},
      {path: 'edit/:id', element: <EditProduct />}
    ]
  }
])

function App() {
  
  return <RouterProvider router={router} />
}

export default App
