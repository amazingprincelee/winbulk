import React from "react";
import TokenSwapForm from "../components/TokenSwapForm";
import "../pages.css";

function SwapPage() {
  const customizedStyle = {
    color: "white",
    margin: "20px",
    textAlign: "center",
    fontSize: "2rem", // Adjust the font size as desired
  };

  const columnStyle = {
    height: "auto", // Remove the fixed height for the columns
    marginBottom: "20px", // Add some spacing between the columns
  };

  return (
    <div className="swap-page-container">
      <h1 style={customizedStyle}>WINBULK SWAP</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={columnStyle}>
            <p style={{ color: "white", fontSize: "1.2rem" }}>
              Win Swap is a revolutionary decentralized exchange (DEX) platform
              that empowers users to seamlessly trade cryptocurrencies with
              enhanced security and efficiency. By leveraging blockchain
              technology, Win Swap eliminates the need for intermediaries,
              ensuring direct peer-to-peer transactions.
            </p>
            <div>
              <h1 className="text-center" style={{padding: "5px", marginTop: '20px', border: "2px black solid", borderRadius: "10px"}}>STATUS: Under Development</h1>
            </div>
          </div>
          <div className="col-md-6" style={columnStyle}>
            <TokenSwapForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapPage;
