import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const cardInputRef = useRef();
  const navigate = useNavigate();

  const handlePayment=()=>{
    if(cardInputRef.current.value && cardInputRef.current.value.length == 12){
      navigate('/payment')
    }
  }

  return (
    <div>
        <h2>Home page content...</h2>
        <div>
          Enter Card Detail: <input type='text' ref={cardInputRef} />
        </div>
        <div>
          <button onClick={handlePayment}>Process Payment</button>
        </div>
    </div>
  )
}

export default Home