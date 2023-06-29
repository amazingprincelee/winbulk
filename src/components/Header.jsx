import React from "react";
import { useHistory } from "react-router-dom";
import heroeImage from "../images/winbulk-utils.png";
import WinSale from "./WinSale";

function Header() {
  const history = useHistory();

  const handleBuyClick = () => {
    const buyButton = document.getElementById("buy-button");
    if (buyButton) {
      const yOffset = 50; // adjust this value to your preference
      const y =
        buyButton.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-container mb-5">
          <div className="left-column">
            <div className="header-title">
              WINBULK
              <p className="motto">
                THE FIRST PROFITABLE TOKEN SALE SYTEM & LOTTERY DAPP
              </p>
            </div>

            <p className="desc" style={{ fontSize: "1rem" }}>
              WinBulk introduces a groundbreaking token presale system, known as
              WINBULK SALES, which sets a new standard in effectiveness and
              self-propulsion. incorporating a unique and lucrative pair lottery
              system that generates significant profits.
            </p>
            <div className="button-container">
              <button
                className="primary-btn"
                onClick={() => history.push("/StakingPage")}
              >
                HOW TO BUY
              </button>
              <a href="htpp//#" className="whitepaper">
                WHITEPAPER
              </a>
            </div>
          </div>

          <div className="right-column header-image">
            <img src={heroeImage} alt="staking %" />
          </div>
        </div>

        <WinSale />
      </div>
    </div>
  );
}

export default Header;
