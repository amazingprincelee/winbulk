import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import TokenDistribution from "./TokenDistribution";
import Table from "./Table";
import contractAbi from "../ContractABI";

function TokenInfo() {
  const rpcUrl = 'https://bsc-dataseed.binance.org/';
  const myContractAddress = '0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971';

  const [bnbTokenPrice, setBnbTokenPrice] = useState("0");
  const [hardCap, setHardCap] = useState("0");
  const [amountRaised, setAmountRaised] = useState("0");
  const [maxInvestment, setMaxInvestment] = useState("0");
  const [minInvestment, setMinInvestment] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const contract = new ethers.Contract(myContractAddress, contractAbi, provider);

        if (provider) {
          const tokenPrice = ethers.utils.formatUnits(await contract.tokenPrice(), 18);
          const hardCap = ethers.utils.formatUnits(await contract.hardCap(), 18);
          const amountRaised = ethers.utils.formatUnits(await contract.raisedAmount(), 18);
          const maxInvestment = ethers.utils.formatUnits(await contract.maxInvestment(), 18);
          const minInvestment = ethers.utils.formatUnits(await contract.minInvestment(), 18);

          setBnbTokenPrice(tokenPrice);
          setHardCap(hardCap);
          setAmountRaised(amountRaised);
          setMaxInvestment(maxInvestment);
          setMinInvestment(minInvestment);
        } else {
          console.error("Please connect to the correct Ethereum network");
        }
      } catch (error) {
        console.error("Failed to connect to the Ethereum provider:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container token-info">
      <div className="row  token-content">
        <div className="col-md-6 style-top-holder">
          <h1 className="text-center"> Winbulk TopHolders</h1>
          <p className="text-center">
            TO ENTER WINBULK TOP HOLDERS AND GET REWARDED.
            <br /> Buy more WBUK token to enter or maintain your rank
          </p>
          <div className="">
            <Table />
          </div>
        </div>
        <div className="col-md-6">
          <div className="sales-info">
            <h1>ABOUT WINBULK</h1>
            <p>
            WINBULK (WBUK) is an innovative cryptocurrency project built on the Binance Smart Chain (BSC). It aims to disrupt the traditional investment landscape by offering a range of decentralized utilities and empowering users to participate in the Winbulk ecosystem. With features such as Winbulk TopHolding and benefits, WinPlay, WinStake and other utilities to come, the project strives to provide a comprehensive and rewarding experience to its users.
            </p>

            <h1>WINBULK HOLDERS</h1>

            <p>
            As a distinguished member of our community, WINBULK Top Holders are entitled to a portion of the allocated percentage of the base cryptocurrency, currently denominated in BNB. This exclusive privilege ensures that our esteemed top holders receive benefits from every transaction conducted within the Top Holder utility, thereby fostering a mutually rewarding relationship with our platform.
            </p>
            
          </div>
          
            
            
          
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
