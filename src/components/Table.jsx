import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { ethers } from 'ethers';
import ABI from '../ContractABI';
import ClipLoader from 'react-spinners/ClipLoader';

function Table() {
  const rpcUrl = 'https://bsc-dataseed.binance.org/';
  const myContractAddress = '0x75148f1e1BFF2D47B1e8b67EfB8aBbFd94366971';

 
  

  const [topHolders, setTopHolders] = useState(() => {
    const storedData = localStorage.getItem('topHolders');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [loading, setLoading] = useState(true);
  const [contractAddress, setContractAddress] = useState(myContractAddress); // Initial contract address
  const [currentPage, setCurrentPage] = useState(1);

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  const fetchTopHoldersData = async () => {
    try {
      setCurrentPage(1); // Reset current page to 1 when fetching new data

      const holders = await contract.getTopTokenHolders();

      const topHoldersData = [];
      for (let i = 0; i < holders.length; i++) {
        const wallet = holders[i];
        const balance = await contract.balanceOf(wallet);
        const balanceInEth = ethers.utils.formatUnits(balance, 18); // Divide balance by 10^18
        const rank = i + 1;

        topHoldersData.push({ rank, wallet, balance: balanceInEth, status: 'Earning BNB' });
      }
      setTopHolders(topHoldersData);
      setLoading(false);
      localStorage.setItem('topHolders', JSON.stringify(topHoldersData)); // Store the data in localStorage
    } catch (error) {
      console.error('Error fetching top holders data:', error);
    }
  };

  useEffect(() => {
    fetchTopHoldersData(); // Fetch the data initially

    const interval = setInterval(() => {
      fetchTopHoldersData(); // Fetch the data at a regular interval (e.g., 1 minute)
    }, 10000); // 1 minute interval (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, [contractAddress]);

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
      width: '150px',
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      width: '150px',
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
      <div className="table-container" style={{ width: '100%', overflowX: 'auto' }}>
        {loading ? (
          <div className='text-center'>
            <ClipLoader color={"#ffffff"} loading={loading} size={35} />
            <p>Please wait a minute while we load the Top Holders Table.</p>
          </div>
        ) : topHolders.length > 0 ? (
          <div className="custom-table-container">
            <DataTable
              columns={columns}
              data={topHolders}
              theme="solarized"
              pagination
              paginationPerPage={10}
              paginationDefaultPage={currentPage}
              onChangePage={setCurrentPage}
              paginationComponentOptions={{
                noRowsPerPage: true
              }}
            />
          </div>
        ) : (
          <div className='text-white'>Please wait a minute while we load Winbulk TopHolders.</div>
        )}
      </div>
    </div>
  );
}

export default Table;
