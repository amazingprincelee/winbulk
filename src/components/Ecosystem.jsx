import React from "react";
import StatusBtn from "./StatusBtn";

function Ecosystem() {
  return (
    <div class="container ecosystem-container">
      <h3>ECOSYSTEM</h3>
      <div class="row">
        <div class="col-md-3 util-column">
          <h1>WINBULK SALES</h1>
          <StatusBtn status="Under Development" />

          <p>
            Win Sale is an innovative decentralized presale system,
            revolutionizing the way investments are made. With its highly
            efficient and robust self-propelling marketing system, investors can
            now receive immediate bonuses upon purchasing and holding the token.
            Everyone participating in the Winbulk sales is a winner.
          </p>

          <button>Launch App</button>
        </div>
        <div class="col-md-3 util-column">
          <h1>WINBULK LOTTERY</h1>
          <StatusBtn status="Under Development" />

          <p>
            Unleash the Power of Chance With WINBULK, users have the ability to
            create and participate in lotteries using our intuitive
            decentralized application (dApp). The process is simple: users can
            effortlessly create their own lotteries and invite friends, family,
            or the wider community to join in on the fun
          </p>

          <button>Launch App</button>
        </div>
        <div class="col-md-3 util-column">
          <h1>WINBULK STAKING</h1>
          <StatusBtn status="Under Development" />

          <p>
            Win Staking is a cutting-edge platform that allows users to securely
            lock their cryptocurrency holdings and earn passive income through
            staking. By participating in the staking process, users contribute
            to the validation and security of the network while being rewarded
            with additional tokens
          </p>

          <button>Launch App</button>
        </div>
        <div class="col-md-3 util-column">
          <h1>WINBULK SWAP</h1>
          <StatusBtn status="Under Development" />

          <p>
            Win Swap is a revolutionary decentralized exchange (DEX) platform
            that empowers users to seamlessly trade cryptocurrencies with
            enhanced security and efficiency. By leveraging blockchain
            technology, Win Swap eliminates the need for intermediaries,
            ensuring direct peer-to-peer transactions.
          </p>

          <button>Launch App</button>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
