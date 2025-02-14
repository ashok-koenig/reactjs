import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element:<Home />},
      // {path: 'home', element: <Home />},
      {path: 'about', element: <About />}
    ]
  }
])

function App() { 
  return (<RouterProvider router={router}/>)
}

export default App
