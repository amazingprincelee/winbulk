import React, { useState } from 'react'
import Timer from './Timer'

function WinSale() {
    const[tokenAmount, setTokenAmount] = useState("");


  return (
    <div className='container winbuy-container'>
    <div className="winbuy-content text-center">
        <h2>WINBULK SALES</h2>
        <Timer />
        <div className="row">
  <input className="caculator-input col-6 text-justify" type="number" placeholder="Amount OF BNB" />
  <input className="caculator-input col-6 text-justify" type="number" placeholder="AMOUNT OF WBUK" />
  <button className="btn btn-success">BUY WBUK</button>
</div>

      </div>
      </div>
  )
}

export default WinSale