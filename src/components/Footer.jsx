import React from "react";
import logo from "../images/logo.png";

// PreviousComponent code...
// ...

function Footer() {
  return (
    <footer className=" container footer text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <img src={logo} alt="logo" className="img-fluid mb-3" />
            <p>
              Maximize the potential of your cryptocurrency with our exclusive
              features: WIN Staking, WIN SWAP, and WIN LOTTERY. Our
              user-friendly platform empowers you to earn lucrative rewards by
              becoming one of the top holders of our tokens. Seize this
              opportunity to optimize your holdings and unlock substantial
              benefits.
            </p>
            <p className=" mt-5">Designed by BB</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="underline mb-3">Utilities</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://#">LOTTERY</a>
              </li>
              <li>
                <a href="https://#">STAKING</a>
              </li>
              <li>
                <a href="https://#">SWAP</a>
              </li>
              <li>
                <a href="https://#">LAUNCH PAD</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h3 className="underline mb-3">Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://#">Twitter</a>
              </li>
              <li>
                <a href="http://#">Telegram</a>
              </li>
              <li>
                <a href="http://#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>
            &copy; {new Date().getFullYear()} WINBULK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
