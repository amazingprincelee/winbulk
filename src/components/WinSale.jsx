import React, { useState } from "react";
import Timer from "./Timer";
import { ethers } from "ethers";
import ABI from "../ContractABI";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//wallet connect dependencies import
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { Profile } from "./Profile";
import { WinBuy } from "./WinBuy";

function WinSale() {
  //wallet connect code
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider()]
  );
  // // Set up wagmi config
  const config = createConfig({
    autoConnect: false,
    connectors: [
      new MetaMaskConnector({ 
        chains}),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: "4f6f222a74193a54bcf122c18015731c",
          name: "WalletConnect"
        },
      }),
      // new InjectedConnector({
      //   chains,
      //   options: {
      //     name: "Injected",
      //     shimDisconnect: true,
      //   },
      // }),
    ],
    publicClient,
    webSocketPublicClient,
  });







  const [isTokenSale, setIsTokenSale] = useState(true);
  const [bnbInputValue, setBnbInputValue] = useState("");
  const [wbukInputValue, setWbukInputValue] = useState("");
  const [isLoadingSate, setIsLoading] = useState(false);

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
    if (connector.name === "Metamask") {
      if (window.ethereum) {
        try {
          setIsLoading(true);

          await window.ethereum.send("eth_requestAccounts");

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const contractAddress = "0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971";
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

  return (
    <div className="container winbuy-container">
      <div className="winbuy-content text-center">
        <Timer />
            <WagmiConfig config={config}>
              <WinBuy />
            </WagmiConfig>
      </div>
      <ToastContainer />
    </div>
  );
}

export default WinSale;
