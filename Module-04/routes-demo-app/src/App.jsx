import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Blogs from './components/blogs/Blogs'
import ListBlogs from './components/blogs/ListBlogs'
import AddBlog from './components/blogs/AddBlog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element:<Home />},
      // {path: 'home', element: <Home />},
      {path: 'about', element: <About />},
      {
        path: 'blogs', 
        element: <Blogs />, 
        children: [
          {index: true, element: <ListBlogs />},
          {path: 'add', element: <AddBlog />}
        ]
      }
    ]
  }
])

function App() { 
  return (<RouterProvider router={router}/>)
}

export default App
