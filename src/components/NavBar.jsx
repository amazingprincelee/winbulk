import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaFacebook, FaTelegram, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobileView = useMediaQuery({ query: '(max-width: 767px)' });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const whitepaperLink = "https://winbulk.com/doc/whitepaper.pdf"; // Add the URL of the whitepaper here

  const handleNavItemClick = () => {
    if (isMobileView) {
      setIsNavOpen(false); // Close the menu on mobile view after clicking a link
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: "orange" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="navbar-brand logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavOpen ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleNavItemClick}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/StakingPage"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleNavItemClick}
              >
                WINBULK STAKING
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SwapPage"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleNavItemClick}
              >
                WINBULK SWAP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/LotteryPage"
                className="nav-link active text-light"
                aria-current="page"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleNavItemClick}
              >
                WINBULK WINPLAY
              </Link>
            </li>
            {isMobileView && (
              <li className="nav-item">
                <a
                  href={'https://winbulk.com/doc/whitepaper.pdf'}
                  target="_blank" 
                  className="nav-link text-light"
                  style={{ fontSize: "16px", margin: "10px" }}
                  onClick={handleNavItemClick}
                >
                  WHITEPAPER
                </a>
              </li>
            )}
          </ul>
          <a href="https://t.me/OfficialWinbulk" target="_blank" className="social-link"><FaTelegram size={25} /></a>
          <a href="https://twitter.com/oldWinbulk" target="_blank" className="social-link"><FaTwitter size={25} /></a>
          <a href="https://www.facebook.com/OfficialWinBulk" target="_blank" className="social-link"><FaFacebook size={25} /></a>
          <a href="https://discord.gg/u2KmT4UuJN" target="_blank" className="social-link"><FaDiscord size={25} /></a>
          <a href="https://www.linkedin.com/company/winbulk" target="_blank" className="social-link"><FaLinkedin size={25} /></a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
