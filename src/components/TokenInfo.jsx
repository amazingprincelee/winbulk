import React, { useState } from "react";
import TokenDistribution from './TokenDistribution'

function TokenInfo() {
    const bnbTokenPrice = 0.00000005;
    const tokenPriceDollar = 0.000012;
    const totalSupply  = 100000000000;
    const bnbCurrentPrice = 240;

    const marketCapCalculation = (totalSupply * bnbTokenPrice) * bnbCurrentPrice;
const formattedMarketCap = marketCapCalculation.toLocaleString();


  const [hardCap, setHardCap] = useState(0);
  const [holders, setHolders] = useState(0);
  const [marketCap, setMarketCap] = useState(formattedMarketCap);

 

  

  return (
    <div className="container token-info">
      <h3>TOKEN INFO</h3>
      <div className="row mt-5 token-content">
        <div className="col-md-6">
          <div class="sales-info">
            <h1>SALES INFORMATION</h1>
            <table class="table" style={{color:'white'}}>
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
                  <td>AMOUNT TO SELL</td>
                  <td>1000 BNB</td>
                </tr>
                <tr>
                  <td>AMOUNT SOLD</td>
                  <td> {hardCap} BNB</td>
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
          <h1>TOP HOLDERS</h1>
          <p>Earn passive income (BNB) by becoming a Top Holder of WIN token</p>
          <table className="table top-holder-table" style={{color:'white'}}>
            <thead>
              <tr>
                <th scope="col">RANK</th>
                <th scope="col">BALANCE</th>
                <th scope="col">PRICE</th>
                <th scope="col">WALLET ADDRESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>1,000,000</td>
                <td>$1,000</td>
                <td>0xbc6edr345...</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
