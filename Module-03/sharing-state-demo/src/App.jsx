import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import GrandParent from './components/GrandParent'

// step 1: create content and export in root level component
export const Data = createContext('')

function App() {
  
  const message = "Sample Message from App Component"
  const anotherMessage = 'Sample message from APP Componet using Data Content API'

  return (
    <>
     <h1>Sharing state between components</h1>
     <Counter />
     <hr/>
     <h1>Prop drilling problem - solution using Context API</h1>
     {/* Step 2: Wrap the component tree with Context Provider */}
     <Data.Provider value={anotherMessage}>
        <GrandParent message={message}/>
     </Data.Provider>     
    </>
  )
}

export default App
