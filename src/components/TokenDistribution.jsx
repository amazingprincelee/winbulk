import React from 'react';
import { Table } from 'react-bootstrap';

const TokenTable = () => {
  const maxSupply = 10e9;
  const sales = 20000e6;
  const team = 1000e6;
  const bonuses = 100e6;
  const airdrop = 200e6;
  const bounty = 200e6;
  const liquidity = 20e9;
  const winLotteryServices = 10e9;
  const lockedRemainder =  (sales + team + bonuses + airdrop + bounty + liquidity + winLotteryServices) - maxSupply;

  const formatValue = (value) => {
    return value.toLocaleString();
  };

  const data = [
    { label: 'Sales', value: formatValue(sales) },
    { label: 'Team', value: formatValue(team) },
    { label: 'Bonuses', value: formatValue(bonuses) },
    { label: 'Airdrop', value: formatValue(airdrop) },
    { label: 'Bounty', value: formatValue(bounty) },
    { label: 'Liquidity', value: formatValue(liquidity) },
    { label: 'Marketing', value: formatValue(winLotteryServices) },
    { label: 'Amount to Lock', value: formatValue(lockedRemainder) },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={{color: 'white'}}>{item.label}</td>
            <td style={{color: 'white'}}>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TokenTable;
