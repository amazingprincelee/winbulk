import React from "react";

const Roadmap = () => {
  return (
    <div className="container roadmap">
      <h3>ROAD MAP</h3>
      <div className="roadmap-content">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="roadmap-item">
              <h2>Token Sale</h2>
              <p>date: 'Q1 2023'</p>
              <p>description: 'Initial Coin Offering to raise funds for the project.'</p>
            </div>
            <div className="roadmap-item">
              <h2>Staking Development</h2>
              <p>date: 'Q2 2023'</p>
              <p>description: 'Start development of the cryptocurrency and its underlying technology'</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="roadmap-item">
              <h2>Decentralized Exchange</h2>
              <p>date: 'Q1 2023'</p>
              <p>description: 'Initial Coin Offering to raise funds for the project.'</p>
            </div>
            <div className="roadmap-item">
              <h2>Main Utility: 'Lottery'</h2>
              <p>date: 'Q2 2023'</p>
              <p>description: 'Start development of the cryptocurrency and its underlying technology'</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
