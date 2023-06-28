import React, { useState } from "react";
import TokenDistribution from './TokenDistribution'

function TokenInfo() {
  const [hardCap, setHardCap] = useState("0 WIN");
  const [topHolders, setTopHolders] = useState(0);

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
                  <td>TOKEN PRICE</td>
                  <td>$0000001</td>
                </tr>
                <tr>
                  <td>HARDCAP</td>
                  <td>RAISED AMOUNT {hardCap}</td>
                </tr>
                <tr>
                  <td>SOFTCAP</td>
                  <td>RAISED AMOUNT {hardCap}</td>
                </tr>
                <tr>
                  <td>TOP HOLDERS</td>
                  <td>RAISED AMOUNT {topHolders}</td>
                </tr>
                <tr>
                  <td>MAX INVESTMENT</td>
                  <td>5 BNB</td>
                </tr>
                <tr>
                  <td>MIN INVESTMENT</td>
                  <td>0.1 BNB</td>
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
                <th scope="col">#</th>
                <th scope="col">TIME</th>
                <th scope="col">CHAIN</th>
                <th scope="col">WALLET ADDRESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1 Hour Ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>2 days ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>1 week ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>3 weeks ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>1 month ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>2 months ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>3 months ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>6 months ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>1 year ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>2 years ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>2 years ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>2 years ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>2 years ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>2 years ago</td>
                <td>BSC</td>
                <td>0xbc6edr345...</td>
                
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>2 years ago</td>
                <td>BSC</td>
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
