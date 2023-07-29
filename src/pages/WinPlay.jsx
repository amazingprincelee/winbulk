import React, { useEffect } from "react";

function WinPlay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container lottery-page">
      <div>
        <div className="status-container">
          <h1 className="text-center status">STATUS: Under Construction</h1>
        </div>

        <div className="row" style={{ background: "white" }}>
          <div className="col-4 play-container">
            <h6>Numbers Of Players: 10</h6>
            <h6>Entrie: 7</h6>
            <p>Minimum AMount: 0.1 BNB</p>
            <input type="number" placeholder="Enter Amount" />
            <button>Enter</button>
          </div>
          <div className="col-4 play-container">
            <h6>Numbers Of Players: 10</h6>
            <h6>Entrie: 5</h6>
            <p>Minimum AMount: 0.5 BNB</p>
            <input type="number" placeholder="Enter Amount" />
            <button>Enter</button>
          </div>
          <div className="col-4 play-container">
            <h6>Numbers Of Players: 10</h6>
            <h6>Entrie: 3</h6>
            <p>Minimum AMount: 1 BNB</p>
            <input type="number" placeholder="Enter Amount" />
            <button>Enter</button>
          </div>
        </div>

        <div className="content">
          <h1>About WinPlay</h1>
          <p>
            Welcome to WinPlay, where you can unleash the power of chance! Our
            platform offers users the exciting opportunity to participate in our
            intuitive WinPlay decentralized application (dApp) system. Here's
            how it works:
          </p>
          <p>
            1. Simple and Effortless Entry: Joining a game on WinPlay is a
            breeze. With just a few clicks, users can enter a game by staking a
            certain amount of BNB. No complicated procedures or lengthy
            registration forms — it's as easy as it gets.
          </p>
          <p>
            2. Embrace the Element of Surprise: Once the game entry is complete,
            the anticipation begins. WinPlay operates on a random selection
            process, meaning the winner is chosen entirely by chance. It's a
            fair and unbiased method, ensuring everyone has an equal opportunity
            to win.
          </p>
          <p>
            3. Claim Your Reward: When the winner is picked, they will be
            entitled to a handsome reward. The prize consists of the total
            amount staked by all participants, minus a small 5% service fee.
            This fee is crucial to sustain and improve our platform, allowing us
            to provide you with an outstanding user experience.
          </p>
          <p>
            4. Transparency and Security: At WinPlay, we prioritize transparency
            and security. All transactions and random selections are recorded on
            the blockchain, making them immutable and verifiable. You can trust
            that every aspect of the process is conducted with integrity and
            precision.
          </p>
          <p>
            5. Continuous Gaming: The fun never stops at WinPlay. We offer a
            wide range of games with various entry amounts and rewards. Feel
            free to explore and engage in multiple games to increase your
            chances of winning big!
          </p>
          <p>
            6. Social and Community-Oriented: WinPlay is not just a platform;
            it's a thriving community of like-minded individuals who share a
            passion for gaming and winning. Join our social channels, interact
            with fellow players, and stay updated on the latest game releases
            and special events.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WinPlay;
