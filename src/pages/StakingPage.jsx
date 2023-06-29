import React, { useEffect, useState, useMemo } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import ABI from "../ABI";
import "../pages.css";

function StakingPage() {
  const [inputValue, setInputValue] = useState("");
  const [currentAction, setCurrentAction] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0.0);
  const [stakeTransactions, setStakeTransactions] = useState([]); // state variable to store the stake transactions
  const [rewardBalance, setRewardBalance] = useState(0);
  const [connectSignal, setConnectSignal] = useState("Not connect");

  const provider = useMemo(() => new ethers.providers.Web3Provider(window.ethereum), []);
  const signer = provider.getSigner();
  const contractAddress = "0x67397672ddE5F85A64aAf54C711CDBEC07484C35";
  const contract = useMemo(() => new ethers.Contract(contractAddress, ABI, signer), [contractAddress, signer]);

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    };

    const getConnectSignal = async () => {
      const connection = await contract.UIconnection();
      console.log(connection);
      setConnectSignal(connection);
    };

    const getBalance = async () => {
      const balance = await contract.getTokenBalance({
        from: signer.getAddress(),
      });
      const balanceFormatted = ethers.utils.formatEther(balance);
      const balanceRounded = parseFloat(balanceFormatted).toFixed(2);
      setTokenBalance(balanceRounded);
    };

    const getStakingBalance = async () => {
      const stakedBalance = await contract.getStakingBalance();
      const stakedBalanceFormatted = ethers.utils.formatEther(stakedBalance);
      setStakingBalance(stakedBalanceFormatted);

      const transactionCount = await contract.getTransactionCount(); // Add this function to your contract

      // Fetch stake transactions
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

    getConnectSignal().catch(console.error);
    connectWallet().catch(console.error);
    getBalance().catch(console.error);
    getStakingBalance().catch(console.error);
    getRewardBalanceUi().catch(console.error);
  }, [contract, provider, signer]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const handleDeposit = () => {
    setCurrentAction("deposit");
  };

  const handleWithdraw = async (index) => {
    const transaction = stakeTransactions[index];
    const unstakeUpdate = await contract.unstake(transaction.amount);
    await unstakeUpdate.wait();
    toast.success("Withdrawal successful!");
    // You may need to update the stake transactions after the withdrawal
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
    if (currentAction === "deposit") {
      const parsedValue = ethers.utils.parseEther(inputValue);
      const depositUpdate = await contract.stake(parsedValue);
      await depositUpdate.wait();
      setInputValue("");
      toast.success("Deposit successful!"); // Display success toast
    }
  };

  return (
    <div className="stake-container">
      
      <p className="m-2">{connectSignal}</p>
      <div>
              <h1 className="text-center" style={{padding: "5px", marginTop: '20px', border: "2px black solid", borderRadius: "10px"}}>STATUS: Under Development</h1>
            </div>
      <div class="container mt-5">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
              <p>Amount Staked</p>
              <p>{stakingBalance} WBUK</p>
            </div>
            <div class="col-3-lg col-lg-6 border rounded bg-warning border-warning m-2 mx-auto">
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
      <div class="container ">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="container transfer-form text-center mb-5 box-showdown ">
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
                  <button className="submit-button" onClick={handleDeposit}>
                    STAKE
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-5">
            <div
              className=" transfer-form box-showdown"
              style={{ height: "350px" }}
            >
              <h4>Transaction</h4>

              <table class="table">
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
                        <p style={{ fontWeight: "bold" }}>
                        {transaction.stakedAmount &&
                          Math.floor(
                            ethers.utils.formatUnits(
                              transaction.stakedAmount,
                              18
                            )
                          )}{" "}
                        </p>
                        <p>
                          {transaction.daysLocked &&
                            `${transaction.daysLocked} Day Locked`}
                        </p>
                      </td>
                      <td>
                        {transaction.rewardEarned &&
                          Math.floor(
                            ethers.utils.formatUnits(
                              transaction.rewardEarned,
                              18
                            )
                          )}{" "}
                        rewards earned
                      </td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => handleWithdraw(index)}
                        >
                          WITHDRAW
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-center" style={{ fontSize: "0.8rem" }}>
                Earn Rewards: By staking WINBULK(WBUK) tokens, you can earn rewards. The
                more tokens you stake and the longer you stake them, the more
                rewards you can potentially earn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakingPage;
