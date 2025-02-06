import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  

  const message = "Hello, John"
  const element = <h2>Welcome to JSX</h2>
  const price = 100
  const quantity = 5 

  const person = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    email: "john@email.com"
  }

  return (
    <>
       <h1>Welcome to React App</h1>
       <hr />
        <p>Learning React is simple</p>
        <h2>{message}</h2>
        {element}
        <hr/>
        <h3>Price: {price}</h3>
        <h3>Quantity: {quantity}</h3>
        <h3>Total Cost: {price * quantity}</h3>
        <hr/>
        <h3>Person Details</h3>
        <h5>Name: {person.firstName} {person.lastName}</h5>
        <h5>Age: {person.age}</h5>
        <h5>Email: {person.email}</h5>
    </>  
  )
}

export default App
