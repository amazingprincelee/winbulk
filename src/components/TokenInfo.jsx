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
            <h1>SALES INFORMATION</h1>
            <table className="table" style={{ color: "white" }}>
              <tbody>
                <tr>
                  <td>TOKEN PRICE IN BNB</td>
                  <td>{bnbTokenPrice} BNB</td>
                </tr>
                <tr>
                  <td>Target</td>
                  <td>{hardCap} BNB</td>
                </tr>
                <tr>
                  <td>AMOUNT RAISED</td>
                  <td>{amountRaised} BNB</td>
                </tr>
                <tr>
                  <td>MAX INVESTMENT</td>
                  <td>{maxInvestment} BNB</td>
                </tr>
                <tr>
                  <td>MIN INVESTMENT</td>
                  <td>{minInvestment} BNB</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div>
            <h1>Token Distribution</h1>
            <TokenDistribution />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
