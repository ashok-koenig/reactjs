import React from 'react'

function DisplayProduct({product}) {
    const {id, title, price} = product
  return (
    <div>
        <table border={1}>
            <tr>
                <td>Product Id</td>
                <td>{id}</td>
            </tr>
            <tr>
                <td>Product Title</td>
                <td>{title}</td>
            </tr>
            <tr>
                <td>Product Price</td>
                <td>{price}</td>
            </tr>
        </table>
        <hr/>
    </div>
  )
}

export default DisplayProduct