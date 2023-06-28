import React, { useState } from 'react'

function WinSale() {
    const[tokenAmount, setTokenAmount] = useState("Amount of tokens to receive");


  return (
    <div className='container winbuy-container'>
    <div className="winbuy-content text-center">
        <h2>WIN BUY</h2>
        <div className="row">
          
          <input className="caculator-input col-6" type="number"  placeholder="Amount of BNB TO SEND"/>
          <p className="caculator-output col-6 text-center">{tokenAmount}</p>
          <button className="btn btn-success">BUY</button>


        </div>
      </div>
      </div>
  )
}

export default WinSale