import React from 'react'

function Product({productDetail}) {

    const {title, price} = productDetail
  return (
    <div>
        <h2>Product Detail</h2>
        <h4>Title: {title}</h4>
        <h4>Price: {price}</h4>
    </div>
  )
}

export default Product