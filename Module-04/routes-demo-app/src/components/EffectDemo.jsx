import React, { useEffect, useState } from 'react'

function EffectDemo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('John')

    // case 1: no dependancy - effect will execute for every re-render
    // useEffect(()=>{
    //     console.log("Current state values", count, name)
    // })

    // case 2: empty array - effect will execute only once while mouting the component
    // useEffect(()=>{
    //     console.log("Current state values", count, name)
    // }, [])

    // case 3: specify state variable in the array - if there is an update in the state - the effect will execute. 
    useEffect(()=>{
        console.log("Current state values", count, name)
    }, [name])

  return (
    <div>
        <h2>useEffect Demo</h2>
        <h3>Current Count: {count}</h3>
        <button onClick={()=> setCount((count)=> count+1)}>Increment count</button>
        <h3>Name: {name}</h3>
        <button onClick={()=> setName("Peter")}>Change Name</button>
    </div>
  )
}

export default EffectDemo