import React from 'react'

function Header({title}) {
    const myStyle = {
                        color: "green", 
                        backgroundColor: "yellow"
                    }
  return (
    <div>
        <h1 style={myStyle}>{title}</h1>
    </div>
  )
}

export default Header