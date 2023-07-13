import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { ethers } from 'ethers';
import ContractABI from '../ContractABI';

function Table() {
  const rpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";

  const [topHolders, setTopHolders] = useState(() => {
    const storedData = localStorage.getItem('topHolders');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [loading, setLoading] = useState(true);

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const contractAddress = '0x246cc531a16103Cd883E1179ae880323D28b31C0';
  const contract = new ethers.Contract(contractAddress, ContractABI, provider);

  const fetchTopHoldersData = async () => {
    try {
      const holders = await contract.getTopTokenHolders();

      const topHoldersData = [];
      for (let i = 0; i < holders.length; i++) {
        const wallet = holders[i];
        const balance = await contract.balanceOf(wallet);
        const balanceInEth = ethers.utils.formatUnits(balance, 18); // Divide balance by 10^18
        const rank = i + 1;
        topHoldersData.push({ rank, wallet, balance: balanceInEth });
      }
      setTopHolders(topHoldersData);
      setLoading(false);
      localStorage.setItem('topHolders', JSON.stringify(topHoldersData)); // Store the data in localStorage
    } catch (error) {
      console.error('Error fetching top holders data:', error);
    }
  };

  useEffect(() => {
    if (topHolders.length === 0) {
      fetchTopHoldersData();
    } else {
      setLoading(false);
    }
  }, [topHolders]);

  const columns = [
    {
      name: 'Rank',
      selector: (row) => row.rank,
      sortable: true,
      width: '60px',
    },
    {
      name: 'Wallet',
      selector: (row) => row.wallet,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Balance',
      selector: (row) => row.balance,
      sortable: true,
    },
    {
      name: 'Earned',
      selector: (row) => row.earned,
      sortable: true,
    },
  ];

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

  return (
    <div className="container">
      <div className="table-container">
        {loading ? (
          <div className='text-center'>Loading data...
            <p>Please Wait A minute while we load the Top Holders Table.</p>
          </div>
        ) : topHolders.length > 0 ? (
          <DataTable columns={columns} data={topHolders} theme="solarized" />
        ) : (
          <div>Please Wait A minute while we load the Top Holders Table.</div>
        )}
      </div>
    </div>
  );
}

export default Table;
