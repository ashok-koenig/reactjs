import React from 'react'

function NameList() {
    const names = ["John", "Smith", "Peter", "Bob"]
  return (
    <div>
        <h2>Rendering static list</h2>
        {/* <ol>
            <li>{names[0]}</li>
            <li>{names[1]}</li>
            <li>{names[2]}</li>
            <li>{names[3]}</li>
        </ol> */}
        <ol>
            {names.map((name)=> <li>{name}</li>)}
        </ol>
    </div>
  )
}

export default NameList