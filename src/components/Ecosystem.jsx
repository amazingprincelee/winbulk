import React from "react";
import StatusBtn from "./StatusBtn";
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';


function Ecosystem() {
  return (
    <SimpleBar className="container ecosystem-scroll-container">
      <h3 className="ecosystem-heading">ECOSYSTEM</h3>
      <div className="ecosystem-container">
        <div className="ecosystem-row">
          <div className="util-column">
            <h1 className="util-title">WINBULK SALES</h1>
            <StatusBtn status="80% Completed" />
            <p>
              Win Sale is one of our innovative decentralized utilities, it
              revolutionizing the way investments are made. With its highly
              efficient and robust self-propelling marketing system, investors
              can now receive immediate bonuses upon purchasing and holding the
              token. Everyone participating in the Winbulk sales is a winner.
            </p>
            <button className="launch-button">Launch App</button>
          </div>
          <div className="util-column">
            <h1 className="util-title">WINBULK LOTTERY</h1>
            <StatusBtn status="5% Completed" />
            <p>
              Unleash the Power of Chance With WINBULK, users have the ability
              to create and participate in lotteries using our intuitive
              decentralized application (dApp). The process is simple: users can
              effortlessly create their own lotteries and invite friends,
              family, or the wider community to join in on the fun.
            </p>
            <button className="launch-button">Launch App</button>
          </div>
          <div className="util-column">
            <h1 className="util-title">WINBULK STAKING</h1>
            <StatusBtn status="50% Completed" />
            <p>
              Win Staking is a cutting-edge platform that allows users to
              securely lock their cryptocurrency holdings and earn passive
              income through staking. By participating in the staking process,
              users contribute to the validation and security of the network
              while being rewarded with additional tokens.
            </p>
            <button className="launch-button">Launch App</button>
          </div>
          <div className="util-column">
            <h1 className="util-title">WINBULK SWAP</h1>
            <StatusBtn status="10% Completed" />
            <p>
              Win Swap is a revolutionary decentralized exchange (DEX) platform
              that empowers users to seamlessly trade cryptocurrencies with
              enhanced security and efficiency. By leveraging blockchain
              technology, Win Swap eliminates the need for intermediaries,
              ensuring direct peer-to-peer transactions.
            </p>
            <button className="launch-button">Launch App</button>
          </div>
        </div>
      </div>
    </SimpleBar>
  );
}

export default Ecosystem;
