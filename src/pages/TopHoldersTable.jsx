import React from "react";
import Table from "../components/Table";

function TopHoldersTable() {
  const handleCopyAddress = () => {
    const address = "0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971";
    navigator.clipboard.writeText(address);
    alert("Contract address copied to clipboard!");
  };

  return (
    <div className="container space-above">
      <div className="advertisement-area">
        <div className="advertisement">
          <div className="advertisement-content">
            <span className="advertisement-message">
              Advertise Here: Advertisement Cost 21,250,000 WBUK
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="text-center" style={{ color: "white" }}>
            Top Holders
          </h1>
          <div className="top-holder-table">
            <Table />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="centered-content">
            <h4>How to Join Top Holder</h4>
            <ol>
              <li>Log into Your Wallet</li>
              <li>Change your wallet to Binance Smart Chain</li>
              <li>Copy the sales contract address</li>
              <li>Send BNB to the sales contract address</li>
              <li>Add/Import WBUK Token to your wallet with the contract address</li>
            </ol>

            <div className="address-container text-center">
              <div className="address-copy">
                <span className="contract-address">
                0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971
                </span>
                <button onClick={handleCopyAddress} className="copy-button">
                  Copy Contract Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHoldersTable;
