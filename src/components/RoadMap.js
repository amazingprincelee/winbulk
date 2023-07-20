import React from "react";
import { FaCheck } from "react-icons/fa";

const Roadmap = () => {
  return (
    <div className="container roadmap">
      <h3>ROADMAP</h3>
      <div className="row">
        <div className="col-lg-6">
          <div className="roadmap-item">
            <h2>Stage 1: Project Launch</h2>
            <ul>
              <li>Web App Launch <FaCheck /></li>
              <li>Airdrop & Community Growth Initiatives <FaCheck /></li>
              <li>Launch of Social Media Campaign <FaCheck /></li>
              <li>Expansion of Features <FaCheck /></li>
            </ul>
          </div>
          <div className="roadmap-item">
          <h2>Stage 2: WinBulk Sales & Expansion</h2>
            <ul>
              <li>WinBulk Sales <FaCheck /></li>
              <li>Pancakeswap Listing</li>
              <li>Winplay (Web3)</li>
              <li>Audit</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="roadmap-item">
          <h2>Stage 3: Growth and Partnerships</h2>
            <ul>
              <li>Coinmarketcap & Coingecko Listing</li>
              <li>Winplay Expansion</li>
              <li>Engagement in Community Events</li>
              <li>Establishment of Partnerships with Renowned Projects</li>
            </ul>
          </div>
          <div className="roadmap-item">
            <h2>Stage 4: Enhancing Connectivity</h2>
            <ul>
              <li>Introduction of Winbulk Dapp development Services (WDD SERVICES)</li>
              <li>Active Participation in Community Events</li>
              <li>Implementation of Cross-Chain Solutions</li>
              <li>Dapp Services launch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
