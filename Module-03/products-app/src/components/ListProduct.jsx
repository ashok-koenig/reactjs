import React from 'react'
import DisplayProduct from './DisplayProduct'

function ListProduct({products}) {
  return (
    <div>
        <h2>List of Products</h2>
        {
            products.map((product)=> <DisplayProduct key={product.id} product={product} />)
        }
    </div>
  )
}

export default ListProduct