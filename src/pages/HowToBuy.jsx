import React, { useState } from "react";

function HowToBuy() {
  const salesAddress = "0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971"; // Replace this with the actual sales address

  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(salesAddress);
    setCopyStatus("Copied");
  };

  return (
    <div className="container mt-5 mb-5 text-white">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12">
            <div className="mt-5"></div>
          <h3>HOW TO BUY (Method ONE) (Recommended)</h3>
          <ul>
            <li>Log into your Wallet (Metamask/TrustWallet)</li>
            <li>Change your network to Smart Chain network</li>
            <li>
              Copy Sales address
              <div className="d-flex align-items-center">
                <span className="mr-2">{salesAddress}</span>
                <button
                  className="btn btn-primary"
                  onClick={handleCopy}
                  disabled={copyStatus === "Copied"}
                >
                  {copyStatus}
                </button>
              </div>
            </li>
            <li>Send BNB to Sales Address.</li>
            <li>Select I understand (Metamask Desktop)</li>
            <li>Send BNB (Minimum investment is 0.1)</li>
            <li>Send BNB</li>
            <li>Add token to wallet with sales address</li>
          </ul>
          <p>BUY MORE TO JOIN TOP HOLDERS AND EARN BNB.</p>
          <p>Join competitions to Get WBUK rewards</p>
        </div>

        <div className="col-lg-6 col-md-12 mt-5">
          <h3>HOW TO BUY (Method TWO) (Alternative)</h3>
          <ul>
            <li>Log into your Wallet (Metamask/TrustWallet)</li>
            <li>Change your network to Smart Chain network</li>
            <li>
              Copy Sales address
              <div className="d-flex align-items-center">
                <span className="mr-2">{salesAddress}</span>
                <button
                  className="btn btn-primary"
                  onClick={handleCopy}
                  disabled={copyStatus === "Copied"}
                >
                  {copyStatus}
                </button>
              </div>
            </li>
            <li>Send BNB to Sales Address.</li>
            <li>Select I understand (Metamask Desktop)</li>
            <li>Send BNB (Minimum investment is 0.1)</li>
            <li>Send BNB</li>
            <li>Add token to wallet with sales address</li>
          </ul>
          <p>BUY MORE TO JOIN TOP HOLDERS AND EARN BNB.</p>
          <p>Join competitions to Get WBUK rewards</p>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
