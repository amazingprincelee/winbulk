import React, { useState } from "react";
import TokenDistribution from './TokenDistribution'
import TopHolderTable from "./TopHolderTable";

function TokenInfo() {
    const bnbTokenPrice = 0.00000005;
    const tokenPriceDollar = 0.000012;
    const totalSupply  = 100000000000;
    const bnbCurrentPrice = 240;

    const marketCapCalculation = (totalSupply * bnbTokenPrice) * bnbCurrentPrice;
const formattedMarketCap = marketCapCalculation.toLocaleString();

  const [amountSold, setAmountSold] = useState(0);
  const [amountRaised, setAmountRaised] = useState(0)// Amount of BNB raised from sales
  const [hardCap, setHardCap] = useState(0);
  const [holders, setHolders] = useState(0);
  const [marketCap, setMarketCap] = useState(formattedMarketCap);

 

  

  return (
    <div className="container token-info">
      <h3>TOKEN INFO</h3>
      <div className="row mt-5 token-content">
        <div className="col-md-6">
          <div className="sales-info">
            <h1>SALES INFORMATION</h1>
            <table className="table" style={{color:'white'}}>
              <tbody>
                <tr>
                  <td>TOKEN PRICE IN $</td>
                <td>$ {tokenPriceDollar}</td>
                </tr>
                <tr>
                  <td>TOKEN PRICE IN BNB</td>
                  <td>0.00000005 BNB</td>
                </tr>
                <tr>
                  <td>HARDCAP</td>
                  <td>1000 BNB</td>
                </tr>
                <tr>
                  <td>AMOUNT RAISED</td>
                  {/* amount of raise in bnb */}
                  <td>{amountRaised} BNB</td>
                </tr>
                <tr>
                  <td>AMOUNT SOLD</td>
                  <td> {amountSold}</td>
                </tr>
                <tr>
                  <td>HOLDERS</td>
                  <td>{holders}</td>
                </tr>
                <tr>
                  <td>MAX INVESTMENT</td>
                  <td>5 BNB</td>
                </tr>
                <tr>
                  <td>MIN INVESTMENT</td>
                  <td>0.1 BNB</td>
                </tr>
                <tr>
                  <td>Market Cap</td>
                  <td>$ {marketCap}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h1>Token Distribution</h1>
            <TokenDistribution />
          </div>
        </div>

        <div className="col-md-6">
         <TopHolderTable />
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
