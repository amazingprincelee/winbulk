import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import the useHistory hook
import heroeImage from "../images/winbulk-utils.png";
import WinSale from "./WinSale";


function Header() {
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory(); // Get the history object from react-router-dom

  const handleClick = () => {
    history.push("/topholders"); // Navigate to the "top holders" page
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
                  THE FIRST PROFITABLE TOKEN SALE SYSTEM & UTILITIES
                </p>
              </div>

              <p className="desc">
                WinBulk introduces a groundbreaking token presale system, known
                as WINBULK TopHolders, which sets a new standard in effectiveness and
                self-propulsion, incorporating a unique and lucrative pair
                Winplay that generates significant profits.
              </p>

              <div className="header-action-btn">
                <button className="action-btn" onClick={handleClick}>
                  TOP HOLDERS TABLE
                </button>
                <a
                  className="whitepaper"
                  href="https://winbulk.com/doc/whitepaper.pdf"
                  target="_blank"
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
