import React, { useEffect, useState, useMemo } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import ABI from "../ContractABI";
import "../pages.css";

function StakingPage() {
  const [inputValue, setInputValue] = useState("");
  const [currentAction, setCurrentAction] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0.0);
  const [stakeTransactions, setStakeTransactions] = useState([]);
  const [rewardBalance, setRewardBalance] = useState(0);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const provider = useMemo(
    () => new ethers.providers.Web3Provider(window.ethereum),
    []
  );
  const signer = provider.getSigner();
  const contractAddress = "0x67397672ddE5F85A64aAf54C711CDBEC07484C35";
  const contract = useMemo(
    () => new ethers.Contract(contractAddress, ABI, signer),
    [contractAddress, signer]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
      setIsWalletConnected(true);
      
    };

    const getBalance = async () => {
      const balance = await contract.getTokenBalance(signer.getAddress());
      const balanceFormatted = ethers.utils.formatEther(balance);
      const balanceRounded = parseFloat(balanceFormatted).toFixed(2);
      setTokenBalance(balanceRounded);
    };

    const getStakingBalance = async () => {
      const stakedBalance = await contract.getStakingBalance();
      const stakedBalanceFormatted = ethers.utils.formatEther(stakedBalance);
      setStakingBalance(stakedBalanceFormatted);

      const transactionCount = await contract.getTransactionCount();

      const transactions = [];
      for (let i = 0; i < transactionCount; i++) {
        const transaction = await contract.getTransaction(i);
        transactions.push(transaction);
      }
      setStakeTransactions(transactions);
    };

    const getRewardBalanceUi = async () => {
      const balanceOfReward = await contract.getRewardBalance();
      const rewardBalanceFormatted = ethers.utils.formatEther(balanceOfReward);
      const rewardRounded = parseFloat(rewardBalanceFormatted).toFixed(2);
      setRewardBalance(rewardRounded);
    };

    
  
  }, [contract, provider, signer]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      setIsWalletConnected(true);
      await getBalance();
      await getStakingBalance();
      await getRewardBalanceUi();
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Error connecting wallet. Please try again.");
    }
  };
  

  const handleWithdraw = async (index) => {
    const transaction = stakeTransactions[index];
    const unstakeUpdate = await contract.unstake(transaction.amount);
    await unstakeUpdate.wait();
    toast.success("Withdrawal successful!");
  };

  const handlePercentageButtonClick = (percentage) => {
    const percentageValue = (percentage / 100) * tokenBalance;
    setInputValue(percentageValue.toString());
  };

  const handleMaxButtonClick = () => {
    setInputValue(tokenBalance.toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isWalletConnected && currentAction === "deposit") {
      const parsedValue = ethers.utils.parseEther(inputValue);
      try {
        const transaction = await contract.stake(parsedValue);
        await transaction.wait();
        setInputValue("");
        toast.success("Deposit successful!"); // Display success toast
      } catch (error) {
        console.error("Error while staking:", error);
        toast.error("Error while staking. Please try again.");
      }
    }
  };
  


  return (
    <div className="stake-container">
      <p className="m-2">
        {isWalletConnected ? "Wallet Connected" : "Not Connected"}
      </p>
      <div className="container mt-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Amount Staked</p>
              <p>{stakingBalance} WBUK</p>
            </div>
            <div className="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Reward Balance</p>
              <p>{rewardBalance} WBUK</p>
            </div>
            <div className="col-3-lg border rounded bg-warning border-warning m-2 mx-auto">
              <p>Token Balance</p>
              <p>{tokenBalance} WBUK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="container transfer-form text-center mb-5 box-showdown">
              <div className="staking-form">
                <h1>GET MORE WINBULK(WBUK) TOKEN</h1>
                <p>STAKE WITH THE FORM BELOW</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    step="any"
                    placeholder="Amount to stake"
                    onChange={handleChange}
                    value={inputValue}
                  />
                  <div className="percentage-buttons">
                    <button
                      className="percentage-button"
                      onClick={() => handlePercentageButtonClick(25)}
                    >
                      25%
                    </button>
                    <button
                      className="percentage-button"
                      onClick={() => handlePercentageButtonClick(50)}
                    >
                      50%
                    </button>
                    <button
                      className="percentage-button"
                      onClick={() => handlePercentageButtonClick(75)}
                    >
                      75%
                    </button>
                    <button
                      className="percentage-button"
                      onClick={handleMaxButtonClick}
                    >
                      Max
                    </button>
                  </div>
                  {isWalletConnected ? (
                    <button className="submit-button" type="submit">
                      Stake
                    </button>
                  ) : (
                    <button
                      className="submit-button"
                      onClick={handleConnectWallet}
                    >
                      Connect Wallet
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div
              className="transfer-form box-showdown"
              style={{ height: "350px" }}
            >
              <h4>Transaction</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">STAKED</th>
                    <th scope="col">EARNED</th>
                    <th scope="col">ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  {stakeTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>
                        {transaction.amount
                          ? ethers.utils.formatEther(transaction.amount)
                          : "0"}
                      </td>
                      <td>
                        {transaction.earned
                          ? ethers.utils.formatEther(transaction.earned)
                          : "0"}
                      </td>

                      <td>
                        <button
                          className="withdraw-button"
                          onClick={() => handleWithdraw(index)}
                        >
                          Withdraw
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-center" style={{ fontSize: "0.8rem" }}>
                Earn Rewards: WBUK will be credited to your account for each
                block you stake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakingPage;
