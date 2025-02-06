import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const title = <h1>Testing with Title Render</h1>

createRoot(document.getElementById('root')).render(
  title
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
