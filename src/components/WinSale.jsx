import React, { useState } from 'react'
import Timer from './Timer'

function WinSale() {
    const[tokenAmount, setTokenAmount] = useState("AMOUNT OF WBUK TO RECEIVE");


  return (
    <div className='container winbuy-container'>
    <div className="winbuy-content text-center">
        <h2>WINBULK SALES</h2>
        <Timer />
        <div className="row">
  <input className="caculator-input col-6 text-justify" type="number" placeholder="Amount of BNB TO SEND" />
  <p className="caculator-output col-6 text-justified">{tokenAmount}</p>
  <button className="btn btn-success">BUY WBUK</button>
</div>

      </div>
      </div>
  )
}

export default WinSale