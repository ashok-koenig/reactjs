import React from 'react'

function ProductItem({product}) {
    console.log('Rendering '+ product.title)
  return (
    <div><p>{product.title} - {product.price}</p></div>
  )
}

export default ProductItem