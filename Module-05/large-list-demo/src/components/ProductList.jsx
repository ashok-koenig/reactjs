import React from 'react'
import ProductItem from './ProductItem';
import { FixedSizeList } from 'react-window';

const products = [];
for(let i=1; i <= 1000 ; i++){
    products.push({id: i, title: "Product "+i , price: i*5 })
}

function ProductList() {
  return (
    <div>
        {/* <h2>Products list - without optimization</h2>
        {
            products.map((product)=> <ProductItem key={product.id} product={product} />)
        } */}
        <h2>Products List - optimized with react-window</h2>
        <FixedSizeList height={500} width={500} itemCount={products.length} itemSize={50}>
            {
                ({index, style})=> <div style={style}> <ProductItem product={products[index]} /> </div>
            }
        </FixedSizeList>
    </div>
  )
}

export default ProductList