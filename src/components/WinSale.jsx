import React, { useState } from "react";
import Timer from "./Timer";
import { ethers } from "ethers";
import ABI from "../ContractABI";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const wbukValue = parseFloat(e.target.value); // Parse the input string to a floating-point number
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
        const tx = await contract.invest({ value: valueToSend });

        await tx.wait();

        console.log("Investment successful!");
        toast.success("Investment successful!");
      } catch (error) {
        console.error(error);
        toast.error("An error occurred during the investment.");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error(
        "MetaMask or compatible wallet not detected. Please install MetaMask or use a compatible wallet to interact with the contract."
      );
      toast.error("MetaMask or compatible wallet not detected.");
    }
  };

  const handleButtonClick = () => {
    // Additional conditions for toast notifications
    if (!isLoading) {
      if (!isTokenSale) {
        toast.warn("Sales have not started.");
      } else if (!bnbInputValue || parseFloat(bnbInputValue) <= 0) {
        toast.error("Please enter a valid amount of BNB.");
      } else if (parseFloat(bnbInputValue) < 0.1) {
        toast.error("Minimum investment is 0.1 BNB.");
      } else if (!wbukInputValue || parseFloat(wbukInputValue) <= 0) {
        toast.error("Please enter a valid amount of WBUK.");
      } else {
        handleInvest();
      }
    }
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
            placeholder="Amount. OF BNB"
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
      <ToastContainer />
    </div>
  );
}

export default WinSale;
