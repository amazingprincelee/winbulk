import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import the useHistory hook
import heroeImage from "../images/winbulk-utils.png";



function Header() {
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory(); // Get the history object from react-router-dom

  const handleClick1 = () => {
    history.push("/topholders"); // Navigate to the "top holders" page
  };

  const handleClick2 = () => {
    history.push("/howtobuy"); // Navigate to the "top holders" page
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

              <p className="desc" style={{fontSize: '1rem', textAlign:'justify'}}>
              WINBULK (WBUK) is an innovative cryptocurrency project built on the Binance Smart Chain (BSC). It aims to disrupt the traditional investment landscape by offering a range of decentralized utilities and empowering users to participate in the Winbulk ecosystem.
              </p>
              {/* <p className="desc">
                WinBulk introduces a groundbreaking token presale system, known
                as WINBULK TopHolders, which sets a new standard in effectiveness and
                self-propulsion, incorporating a unique and lucrative pair
                Winplay that generates significant profits.
              </p> */}

              <div className="header-action-btn">
                <button className="action-btn" onClick={handleClick1}>
                  TOP HOLDERS
                </button>
                <button className="action-btn" onClick={handleClick2}>
                  GET WBUK
                </button>
                
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
      </div>
    </div>
  );
}

export default Header;
