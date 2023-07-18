import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatusBtn from "./StatusBtn";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

function Ecosystem() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      setShowScrollIndicator(scrollLeft > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="ecosystem-wrapper">
      <SimpleBar className="container ecosystem-scroll-container">
        <h3 className="ecosystem-heading">ECOSYSTEM</h3>
        {showScrollIndicator && (
          <div className="scroll-indicator left">
            <span>&#8249;</span>
          </div>
        )}
        <div className="ecosystem-container">
          <div className="ecosystem-row">
            <div className="util-column">
              <h1 className="util-title">WINBULK TopHolders</h1>
              <StatusBtn status="100% Completed" />
              <p>
                Winbulk TopHolder is at the forefront of innovation,
                transforming traditional investment approaches and redefining
                how value is preserved for WBUK holders. Our
                platform guarantees seamless value appreciation and
                continuous benefits for our investors.
              </p>
              <Link to="/">
                {" "}
                {/* Add the Link component and specify the target route */}
                <button className="launch-button">Launch App</button>
              </Link>
            </div>
            <div className="util-column">
              <h1 className="util-title">WINPLAY</h1>
              <StatusBtn status="20% Completed" />
              <p>
                Unleash the Power of Chance With WinPlay, users have the ability
                to create and participate our intuitive WinPlay decentralized
                application (dApp) system. The process is simple: users can
                effortlessly create their own game and invite friends,
              </p>
              <Link to="/LotteryPage">
                {" "}
                {/* Add the Link component and specify the target route */}
                <button className="launch-button">Launch App</button>
              </Link>
            </div>
            <div className="util-column">
              <h1 className="util-title"> DAPP Services</h1>
              <StatusBtn status="50% Completed" />
              <p>
                Our innovative Dapp Services is dedicated to helping individuals
                and businesses create and enhance their own utilities, while
                also providing a platform for buying and selling utility
                services using our exclusive WBUK token. We enable you to
                harness the power of utility creation.
              </p>
              <Link to="/BlockchainServices">
                {" "}
                {/* Add the Link component and specify the target route */}
                <button className="launch-button">Launch App</button>
              </Link>
            </div>
            <div className="util-column">
              <h1 className="util-title">WINBULK STAKING</h1>
              <StatusBtn status="50% Completed" />
              <p>
                Win Staking is a cutting-edge platform that allows users to
                securely lock their cryptocurrency holdings and earn passive
                income through staking. By participating in the staking process,
                users contribute to the validation and security of the network.
              </p>
              <Link to="/StakingPage">
                {" "}
                {/* Add the Link component and specify the target route */}
                <button className="launch-button">Launch App</button>
              </Link>
            </div>
            <div className="util-column">
              <h1 className="util-title">WINBULK SWAP</h1>
              <StatusBtn status="10% Completed" />
              <p>
                Win Swap is a revolutionary decentralized exchange (DEX)
                platform that empowers users to seamlessly trade
                cryptocurrencies with enhanced security and efficiency. By
                leveraging blockchain technology, Win Swap eliminates the need
                for intermediaries, ensuring direct peer-to-peer transactions.
              </p>
              <Link to="/SwapPage">
                {" "}
                {/* Add the Link component and specify the target route */}
                <button className="launch-button">Launch App</button>
              </Link>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}

export default Ecosystem;
