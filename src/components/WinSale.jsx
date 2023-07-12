import React, { useState } from 'react';
import Timer from './Timer';

function WinSale() {
  const [isTokenSale, setIsTokenSale] = useState();
  const [bnbInputValue, setBnbInputValue] = useState('');
  const [wbukInputValue, setWbukInputValue] = useState('');

  // Conversion rate: 1 wbuk = 0.00000002 BNB
  const conversionRate = 0.00000002;

  const handleChangeBnbInput = (e) => {
    const bnbValue = e.target.value;
    setBnbInputValue(bnbValue);
    const wbukValue = bnbValue / conversionRate;
    const deductedWbukValue = wbukValue - (wbukValue * 0.15); // Deduct 15% from wbukValue
    setWbukInputValue(deductedWbukValue);
  };

  const handleChangeWbukInput = (e) => {
    const wbukValue = e.target.value;
    setWbukInputValue(wbukValue);
    const addedWbukValue = wbukValue + (wbukValue * 0.15); // Add 15% to wbukValue
    setBnbInputValue(addedWbukValue * conversionRate);
  };

  const handleButtonClick = () => {
    if (!isTokenSale) {
      // Perform any additional logic or actions when the disabled button is clicked
    }
  };

  return (
    <div className="container winbuy-container">
      <div className="winbuy-content text-center">
        <h2>WINBULK SALES</h2>
        <Timer />
        <div className="row">
          <input
            onChange={handleChangeBnbInput}
            className="caculator-input col-6 text-justify"
            type="number"
            placeholder="Amount OF BNB"
            value={bnbInputValue}
            style={{ borderRadius: "5px", padding: "5px" }}
          />
          <input
            onChange={handleChangeWbukInput}
            className="caculator-input col-6 text-justify"
            type="number"
            placeholder="AMOUNT OF WBUK"
            value={wbukInputValue}
            style={{ borderRadius: "5px", padding: "5px" }}
          />
          <button
            className={`btn ${!isTokenSale ? 'btn-danger' : 'btn-success'}`}
            disabled={!isTokenSale}
            onClick={handleButtonClick}
          >
            {isTokenSale ? 'BUY WBUK' : 'SALES NOT STARTED'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinSale;
