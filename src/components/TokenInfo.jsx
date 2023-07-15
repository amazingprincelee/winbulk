import React, { useState } from "react";
import TokenDistribution from "./TokenDistribution";
import Table from "./Table";

function TokenInfo() {
  const bnbTokenPrice = (0.00000002).toFixed(8);
  const tokenPriceDollar = 0.00000488;
  const totalSupply = 100000000000;
  const bnbCurrentPrice = 240;

  const marketCapCalculation = totalSupply * bnbTokenPrice * bnbCurrentPrice;
  const formattedMarketCap = marketCapCalculation.toLocaleString();

  const [amountSold, setAmountSold] = useState(0);
  const [amountRaised, setAmountRaised] = useState(0); // Amount of BNB raised from sales
  const [hardCap, setHardCap] = useState(1000);
  const [holders, setHolders] = useState(0);
  const [marketCap, setMarketCap] = useState(formattedMarketCap);
  const [maxInvestment, setMaxInvestment] = useState(5);
  const [minInvestment, setMinInvestment] = useState(0.1);

  return (
    <div className="container token-info">
      <div className="row  token-content">
      <div className="col-md-6 style-top-holder">
          <h1 className="text-center">Top Holders Table</h1>
          <p className="text-center">
            TO ENTER THE TOP HOLDER AND GET REWARDED.
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
                  <td>TOKEN PRICE IN $</td>
                  <td>$ {tokenPriceDollar}</td>
                </tr>
                <tr>
                  <td>TOKEN PRICE IN BNB</td>
                  <td>{bnbTokenPrice} BNB</td>
                </tr>
                <tr>
                  <td>HARDCAP</td>
                  <td>{hardCap} BNB</td>
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
                  <td>{maxInvestment} BNB</td>
                </tr>
                <tr>
                  <td>MIN INVESTMENT</td>
                  <td>{minInvestment} BNB</td>
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

        
      </div>
    </div>
  );
}

export default TokenInfo;
