import React, { useContext } from 'react'
import { Offer } from '../App'

function DisplayProduct({product}) {
    const {id, title, price} = product
    const offerPercentage = useContext(Offer)
    const offerPrice = price - (price * offerPercentage / 100)
  return (
    <div>
        <table border={1}>
            <tbody>           
                <tr>
                    <td>Product Id</td>
                    <td>{id}</td>
                </tr>
                <tr>
                    <td>Product Title</td>
                    <td>{title}</td>
                </tr>
                <tr>
                    <td>Product Actual Price</td>
                    <td>{price} <span className='success'>{offerPercentage}% Offer</span></td>
                </tr> 
                <tr>
                    <td>Product Offer Price</td>
                    <td>{offerPrice}</td>
                </tr>
            </tbody>
        </table>
        <hr/>
    </div>
  )
}

export default DisplayProduct