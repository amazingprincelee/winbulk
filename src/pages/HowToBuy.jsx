import React, { useState } from "react";

function HowToBuy() {
  const salesAddress = "0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971"; // Replace this with the actual sales address

  const [copyStatus, setCopyStatus] = useState("Copy contract address");
  const [currentAccount, setCurrentAccount] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(salesAddress);
    setCopyStatus("Copied");
  };

  //check if wallet is connected
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

  
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // wallet connect
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
   
  return (
    <div className="container mt-5 mb-5 text-white">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-12">
            <div className="mt-5"></div>
          <h3>WBUK Available on the TOPHOLDER</h3>
          <p>The only avenue to acquire WBUK at present is by engaging in either the TopHolder program or any ongoing events hosted on our social media platforms.</p>
          <h4>To invest in TopHolder, follow these steps:</h4>
          <ul>
            <li>Log into your Wallet (Metamask/TrustWallet)</li>
            <li>  
            {currentAccount ? (
        <p>Connected Account: {currentAccount}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
            </li>
            <li>Change your network to Smart Chain network</li>
            <li className="mt-2 mb-2">
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-primary"
                  onClick={handleCopy}
                  disabled={copyStatus === "Copied"}
                >
                  {copyStatus}
                </button>
              </div>
            </li>
            <li>Send BNB to Contract Address you copied in the blue button.</li>
            <li>Select I understand (Metamask Desktop)</li>
            <li>Send BNB (Minimum investment is 0.01)</li>
            <li>Send BNB</li>
            <li>Add token to wallet with sales address</li>
          </ul>
          <p>BUY MORE TO JOIN TOP HOLDERS AND EARN BNB.</p>
          <p>Join competitions to Get WBUK rewards</p>
        </div>

        <div className="col-lg-6 col-md-12 mt-5">
          <h3>Alternative, you can send BNB to the contract address to Join TopHolder List</h3>
          <ul>
            <li>Log into your Wallet (Metamask/TrustWallet)</li>
          
            <li>Change your network to Smart Chain network</li>
            <li className="mt-2 mb-2">
             
              <div className="d-flex align-items-center">
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
            <li>Send BNB (Minimum investment is 0.01)</li>
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
