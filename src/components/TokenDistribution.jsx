import React from 'react';
import { Table } from 'react-bootstrap';

const TokenTable = () => {
  const maxSupply = 100000000000;
  const sales = 50000000000;
  const team = 15000000000;
  const marketing = 10000000000;
  const rewards = 5000000000;
  const reserve = maxSupply - (sales + team  + marketing + rewards);
  console.log(sales + team  + marketing);

  const formatValue = (value) => {
    return value.toLocaleString();
  };

  const data = [
    { label: 'Sales', value: formatValue(sales) },
    { label: 'Team and Advisors', value: formatValue(team) },
    { label: 'Marketing', value: formatValue(marketing) },
    { label: 'Community and Rewards', value: formatValue(rewards) },
    { label: 'Reserve Fund', value: formatValue(reserve) },
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
