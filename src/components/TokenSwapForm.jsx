import React from "react";
import toggleIcon from "../images/toggle-icon.png";
import bnbLogo from "../images/icon/bnb-logo.png";

function TokenSwapForm() {
  return (
    <div className="swap-form">
      <div className="token-1-selector">
        <p>From:</p>
        <div className="token-selector">
          <button className="token-1-btn">
            <img src={bnbLogo} alt="bnb-logo" />
            BNB
          </button>
          <p>0.0</p>
        </div>
        <div className="swap-form-balance">
          <p>Balance:</p>
          <p>$0</p>
        </div>
      </div>

      <div className="toggle-container text-center">
        <button className="toggle-icon">
          <img src={toggleIcon} alt="toggle-icon" />
        </button>
      </div>
      

      <div className="token-1-selector">
        <p>To (estimate):</p>
        <div className="token-selector">
          <button className="token-2-btn">Select a token</button>
          <p>0.0</p>
        </div>
        <div className="swap-form-balance">
          <p>Balance:</p>
          <p>$0</p>
        </div>
      </div>
      <button className="connect2wallet-btn">Connect to wallet</button>
    </div>
  );
}

export default TokenSwapForm;
