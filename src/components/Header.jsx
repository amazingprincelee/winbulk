import React, { useState } from "react";
import heroeImage from "../images/winbulk-utils.png";
import WinSale from "./WinSale";

function Header() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-container mb-5">
          <div className="left-column">
            <div className="left-column-content">
              <div className="header-title">
                <h1 className="website-title">WINBULK</h1>
                <p className="motto">
                  THE FIRST PROFITABLE TOKEN SALE SYSTEM & LOTTERY DAPP
                </p>
              </div>

              <p className="desc">
                WinBulk introduces a groundbreaking token presale system, known
                as WINBULK SALES, which sets a new standard in effectiveness and
                self-propulsion, incorporating a unique and lucrative pair
                lottery system that generates significant profits.
              </p>

              <div className="header-action-btn">
                <button className="action-btn" onClick={handleClick}>
                  HOW TO BUY
                </button>
                <a
                  className="whitepaper"
                  href="https://winbulk.com/doc/whitepaper.pdf"
                >
                  WHITEPAPER
                </a>
              </div>

              {showMessage && (
                <div className="message-container">
                  <button className="close-btn" onClick={handleClose}>
                    X
                  </button>
                  <p className="buy-btn-message">How to buy will be updated soon</p>
                  
                </div>
              )}
            </div>
          </div>

          <div className="right-column">
            <img src={heroeImage} alt="staking %" />
          </div>
        </div>

        <WinSale />
      </div>
    </div>
  );
}

export default Header;
