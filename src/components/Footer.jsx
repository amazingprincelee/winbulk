import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <img src={logo} alt="logo" className="img-fluid mb-3" />
            <p>
              Maximize the potential of your cryptocurrency with our exclusive
              features: WINBULK TopHolders, WINPLAY, WINSTAKE etc. Our
              user-friendly platform empowers you to earn lucrative rewards by
              becoming one of the top holders of our tokens. Seize this
              opportunity to optimize your holdings and unlock substantial
              benefits.
            </p>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <h1>UTILITIES</h1>
            <ul className="list-unstyled">
              <li>
                <a href="https://#">WINBULK SALES</a>
              </li>
              <li>
                <a href="https://#">WINPLAY</a>
              </li>
              <li>
                <a href="https://#">DAPP SERVICE</a>
              </li>
              <li>
                <a href="https://#">SWAP & STAKING</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <h1>Follow Us</h1>
            <ul className="list-unstyled">
              <li>
                <a href="https://twitter.com/Winbulk_Token" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://t.me/OfficialWinbulk" target="_blank" rel="noopener noreferrer">Telegram</a>
              </li>
              <li>
                <a href="https://facebook.com/OfficialWinbulk" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <h1>CONTACT US</h1>
            <p>Email: team@winbulk.com</p>
            <Link to="/jobapplication">Career</Link>
            
          </div>
          <a className="whitepaper" href="https://winbulk.com/doc/whitepaper.pdf">White Paper</a>
        </div>

        <div className="container copywrite">
          <p>
            &copy; {new Date().getFullYear()} WINBULK. All rights reserved.
          </p>
          <p>Design by BB</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
