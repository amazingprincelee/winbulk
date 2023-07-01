import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function TopHolderTable() {
  return (
    <div className="container">
      <h1>TOP HOLDERS</h1>
      <p>Earn passive income (BNB) by becoming a Top Holder of WIN token</p>
      <div className="table-responsive">
        <table className="table top-holder-table" style={{ color: 'white' }}>
          <thead>
            <tr>
              <th scope="col">RANK</th>
              <th scope="col">BALANCE</th>
              <th scope="col">PRICE</th>
              <th scope="col">WALLET</th>
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
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopHolderTable;
