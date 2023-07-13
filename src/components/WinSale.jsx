import React, { useState } from "react";
import Timer from "./Timer";
import { ethers } from "ethers";
import ABI from '../ContractABI'

function WinSale() {
  const [isTokenSale, setIsTokenSale] = useState(true);
  const [bnbInputValue, setBnbInputValue] = useState("");
  const [wbukInputValue, setWbukInputValue] = useState("");

  // Conversion rate: 1 wbuk = 0.00000002 BNB
  const conversionRate = 0.00000002;

  const handleChangeBnbInput = (e) => {
    const bnbValue = e.target.value;
    setBnbInputValue(bnbValue);
    const wbukValue = bnbValue / conversionRate;
    setWbukInputValue(wbukValue);
  };

  const handleChangeWbukInput = (e) => {
    const wbukValue = e.target.value;
    setWbukInputValue(wbukValue);
    const addedWbukValue = wbukValue + wbukValue * 0.15; // Add 15% to wbukValue
    setBnbInputValue(addedWbukValue * conversionRate);
  };

  const handleInvest = async () => {
    // Check if the browser has MetaMask installed
    if (window.ethereum) {
      try {
        // Request access to the user's MetaMask wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });
  
        // Create an ethers provider using the injected Ethereum provider from MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
  
        // Get the signer from the provider
        const signer = provider.getSigner();
  
        // Create a contract instance
        const contractAddress = "0x246cc531a16103Cd883E1179ae880323D28b31C0"; // Replace with the actual contract address
        const contractABI = ABI; // Replace with the actual contract ABI
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
  
        // Send the value to the invest() function on the contract
        const valueToSend = ethers.utils.parseEther(bnbInputValue); // Convert BNB value to Wei
        const tx = await contract.invest({ value: valueToSend });
  
        // Wait for the transaction to be mined
        await tx.wait();
  
        console.log("Investment successful!");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error(
        "MetaMask not detected. Please install MetaMask to interact with the contract."
      );
    }
  };
  
  const handleButtonClick = () => {

    handleInvest();
    
    // if (!isTokenSale) {
    //   // Perform any additional logic or actions when the disabled button is clicked
    // } else {
    //   handleInvest();
    // }
  };

  return (
    <div className="container winbuy-container">
      <div className="winbuy-content text-center">
        <h2>WINBULK SALES</h2>
        <Timer />
        <div className="row">
          <input
            onChange={handleChangeBnbInput}
            className="caculator-input col-6 text-justify"
            type="number"
            placeholder="Amount OF BNB"
            value={bnbInputValue}
            style={{ borderRadius: "5px", padding: "5px" }}
          />
          <input
            onChange={handleChangeWbukInput}
            className="caculator-input col-6 text-justify"
            type="number"
            placeholder="AMOUNT OF WBUK"
            value={wbukInputValue}
            style={{ borderRadius: "5px", padding: "5px" }}
          />
          <button
            className={`btn ${!isTokenSale ? "btn-danger" : "btn-success"}`}
            disabled={!isTokenSale}
            onClick={handleButtonClick}
          >
            {isTokenSale ? "BUY NOW" : "SALES NOT STARTED"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinSale;
