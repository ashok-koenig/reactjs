import React from 'react'

function ProductList() {
    const products = [
        {id: 1, title: "Laptop", price: 3222},
        {id: 2, title: "Desktop", price: 6544},
        {id: 3, title: "Phone", price: 3543},
    ]
  return (
    <div>
        <h2>Products List - Static Array of Objects</h2>
        <ul>
            {products.map((item)=> <li key={item.id}>{item.id} - {item.title} - {item.price}</li>)}
        </ul>
    </div>
  )
}

export default ProductList