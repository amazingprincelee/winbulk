import React, { useState } from "react";
import Timer from "./Timer";
import { ethers } from "ethers";
import ABI from '../ContractABI';
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WinSale() {
  const [isTokenSale, setIsTokenSale] = useState(true);
  const [bnbInputValue, setBnbInputValue] = useState("");
  const [wbukInputValue, setWbukInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const conversionRate = 0.00000002;

  const handleChangeBnbInput = (e) => {
    const bnbValue = e.target.value;
    setBnbInputValue(bnbValue);
    const wbukValue = (bnbValue / conversionRate) * 0.85; // Deducting 15%
    setWbukInputValue(wbukValue);
  };

  const handleChangeWbukInput = (e) => {
    const wbukValue = e.target.value;
    setWbukInputValue(wbukValue);
    const addedWbukValue = wbukValue + wbukValue * 0.15;
    setBnbInputValue(addedWbukValue * conversionRate);
  };

  const handleInvest = async () => {
  if (window.ethereum) {
    try {
      setIsLoading(true);

      await window.ethereum.send("eth_requestAccounts");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractAddress = "0x49909799Aeb375A3f62CbBae5186C513CEceE4B6";
      const contractABI = ABI;
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const valueToSend = ethers.utils.parseEther(bnbInputValue);

      const balance = await signer.getBalance();
      const minInvestment = ethers.utils.parseEther("0.1");
      
      if (valueToSend.lt(minInvestment)) {
        throw new Error("Investment amount is below the minimum required.");
      }

      if (balance.lt(valueToSend)) {
        throw new Error("Insufficient balance in your wallet.");
      }

      const tx = await contract.invest({ value: valueToSend });

      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed.");
      }

      toast.success('Investment successful!');
      console.log("Investment successful!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Investment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  } else {
    console.error(
      "MetaMask or compatible wallet not detected. Please install MetaMask or use a compatible wallet to interact with the contract."
    );
  }
};

  

  const handleButtonClick = () => {
    if (!isLoading) {
      handleInvest();
    }
  };

  return (
    <div className="container winbuy-container">
      <ToastContainer />
      <div className="winbuy-content text-center">
        <h2>WINBULK SALES</h2>
        <Timer />
        <div className="row">
          <input
            onChange={handleChangeBnbInput}
            className="caculator-input col-6 text-justify"
            type="number"
            placeholder="Amount OF BNB (Min 0.1)"
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
            disabled={!isTokenSale || isLoading}
            onClick={handleButtonClick}
          >
            {isLoading ? (
              <ClipLoader size={20} color="#ffffff" loading={isLoading} />
            ) : (
              isTokenSale ? "BUY NOW" : "SALES NOT STARTED"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinSale;
