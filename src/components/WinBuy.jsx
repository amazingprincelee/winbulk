import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import React, { useState } from "react";

import { ethers } from "ethers";
import ABI from "../ContractABI";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";

export function WinBuy() {
  var connectedBy = "";

  //connecting wallet code
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  //buying winbulk consts
  const [isTokenSale, setIsTokenSale] = useState(true);
  const [bnbInputValue, setBnbInputValue] = useState("");
  const [wbukInputValue, setWbukInputValue] = useState("");
  const [isLoadingSate, setIsLoading] = useState(false);
  const conversionRate = 0.00000002;

  if (connector) {
    var activeConnector = connector;
    console.log("Connected VIA: ", activeConnector.name);
  }

  //winbulk buying code
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
    if (activeConnector) {
      if (
        activeConnector.name === "MetaMask" ||
        activeConnector.name === "Injected"
      ) {
        if (window.ethereum) {
          try {
            setIsLoading(true);

            await window.ethereum.send("eth_requestAccounts");
            // Request account access from the user
            const web3 = new Web3(window.ethereum);
            // Check if the user is connected to the Arbitrum network
            const chainId = await web3.eth.getChainId();
            var activeChain = chainId.toString();
            //confirm chain is bnb using chain Id
            if (activeChain !== "56") {
              toast.error(
                "Please connect to the Binance Smartchain in MetaMask."
              );
              return;
            }

            //legacy code
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            //winbulk contract
            const contractAddress =
              "0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971";
            const contractABI = ABI;
            const contract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );

            const valueToSend = ethers.utils.parseEther(bnbInputValue);
            console.log("Submitting Transaction");
            const tx = await contract.invest({ value: valueToSend });

            await tx.wait();

            console.log("Investment successful!");
            toast.success("Investment successful!");
          } catch (error) {
            console.error(error);
            console.log("error supplied:", error);
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
      } else if (activeConnector.name === "WalletConnect") {
        try {
          setIsLoading(true);
          await window.ethereum.send("eth_requestAccounts");
          // Request account access from the user
          const web3 = new Web3(window.ethereum);
          // Check if the user is connected to the Arbitrum network
          const chainId = await web3.eth.getChainId();
          var activeChain = chainId.toString();
          //confirm chain is bnb using chain Id
          if (activeChain !== "56") {
            toast.error(
              "Please connect to the Binance Smartchain in MetaMask."
            );
            return;
          }

          //legacy code
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          //winbulk contract
          const contractAddress = "0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971";
          const contractABI = ABI;
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          const valueToSend = ethers.utils.parseEther(bnbInputValue);
          console.log("Submitting Transaction");
          const tx = await contract.invest({ value: valueToSend });

          await tx.wait();

          console.log("Investment successful!");
          toast.success("Investment successful!");
        } catch (error) {
          console.error(error);
          console.log("error supplied:", error);
          toast.error("An error occurred during the investment.");
        } finally {
          setIsLoading(false);
        }
      }
    } else {
      //if activeConnector is undefined
      console.error(
        "MetaMask or compatible wallet not detected. Please install MetaMask or use a compatible wallet to interact with the contract."
      );
      toast.error("No connected wallet. Connect a compatible wallet");
    }
  };

  const handleButtonClick = () => {
    // Additional conditions for toast notifications
    if (!isLoadingSate) {
      if (!isTokenSale) {
        toast.warn("Sales have not started.");
      } else if (!bnbInputValue || parseFloat(bnbInputValue) <= 0) {
        toast.error("Please enter a valid amount of BNB.");
      } else if (parseFloat(bnbInputValue) < 0.01) {
        toast.error("Minimum investment is 0.01 BNB.");
      } else if (!wbukInputValue || parseFloat(wbukInputValue) <= 0) {
        toast.error("Please enter a valid amount of WBUK.");
      } else {
        handleInvest();
      }
    }
  };

  //render prematurely is connected already
  if (isConnected) {
    return (
      <div className="container winbuy-container">
        <div className="winbuy-content text-center">
          <div className="listing-column">
            <div className="listing-row">
              <input
                onChange={handleChangeBnbInput}
                className="caculator-input col-6 text-justify"
                type="number"
                placeholder="Minimum 0.01 BNB"
                value={bnbInputValue}
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  paddingLeft: "10px",
                }}
              />
              <input
                onChange={handleChangeWbukInput}
                className="caculator-input col-6 text-justify"
                type="number"
                placeholder="Amount of WBUK"
                value={wbukInputValue}
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  paddingLeft: "10px",
                }}
              />
              <button
                className={`btn ${!isTokenSale ? "btn-danger" : "btn-success"}`}
                disabled={!isTokenSale || isLoadingSate}
                onClick={handleButtonClick}
              >
                {isLoadingSate ? (
                  <ClipLoader
                    size={20}
                    color="#ffffff"
                    loading={isLoadingSate}
                  />
                ) : isTokenSale ? (
                  "BUY NOW"
                ) : (
                  "SALES NOT STARTED"
                )}
              </button>
            </div>
            <div className="listing-connect-buttons">
              <div className="connected-button-info">
                <h2> Account Info:</h2>
                <div>
                  <div>{ensName ? `${ensName} (${address})` : address}</div>
                  {/* <div>Connected to {activeConnector.name}</div> */}
                  <button onClick={disconnect} className="disconnectBtn">
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="container winbuy-container">
      <div className="winbuy-content text-center">
        <div className="listing-column">
          <div className="listing-row">
            <input
              onChange={handleChangeBnbInput}
              className="caculator-input col-6 text-justify"
              type="number"
              placeholder="Minimum 0.01 BNB"
              value={bnbInputValue}
              style={{
                borderRadius: "5px",
                padding: "5px",
                paddingLeft: "10px",
              }}
            />
            <input
              onChange={handleChangeWbukInput}
              className="caculator-input col-6 text-justify"
              type="number"
              placeholder="Amount of WBUK"
              value={wbukInputValue}
              style={{
                borderRadius: "5px",
                padding: "5px",
                paddingLeft: "10px",
              }}
            />
            <button
              className={`btn ${!isTokenSale ? "btn-danger" : "btn-success"}`}
              disabled={!isTokenSale || isLoadingSate}
              onClick={handleButtonClick}
            >
              {isLoadingSate ? (
                <ClipLoader size={20} color="#ffffff" loading={isLoadingSate} />
              ) : isTokenSale ? (
                "BUY NOW"
              ) : (
                "SALES NOT STARTED"
              )}
            </button>
          </div>
          <div className="listing-connect-buttons">
            <div className="connected-button-info">
              <h2> Account Info:</h2>
              <div>
                {connectors.map((connector) => (
                  <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className="connectBtn"
                  >
                    {connector.name}
                    {!connector.ready && " (Unsupported)"}
                    {isLoading &&
                      connector.id === pendingConnector?.id &&
                      " (connecting)"}
                  </button>
                ))}

                {error && <div>{error.message}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
