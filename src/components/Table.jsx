import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

function Table() {
  const columns = [
    {
      name: 'R',
      selector: row => row.rank,
      sortable: true,
      width: '60px', // Adjust the width as needed
    },
    {
      name: 'Wallet',
      selector: row => row.wallet,
      sortable: true,
      width: '200px', // Adjust the width as needed
    },
    {
      name: 'Balance',
      selector: row => row.balance,
      sortable: true,
    },
    {
      name: 'Earned',
      selector: row => row.earned,
      sortable: true,
    },
  ];


  // createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
  text: {
    primary: '#FFFFFF',
    secondary: '#2aa198',
  },
  background: {
    default: 'none',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

  const data = [
    {
      id: 1,
      rank: '1',
      wallet: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
      balance: 20000000,
      earned: 1 + "BNB"
    },
    {
      id: 2,
      rank: '2',
      wallet: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
      balance: 18000000,
      earned: 1 + "BNB"
    },
    {
      id: 3,
      rank: '3',
      wallet: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2',
      balance: 17000000,
      earned: 1 + "BNB"
    },
  ];

  return (
    <div className="container">
      <div className="table-container">
        <DataTable columns={columns} data={data} theme="solarized" />
      </div>
    </div>
  );
}

export default Table;
