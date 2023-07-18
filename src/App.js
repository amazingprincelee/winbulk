import React, { useEffect} from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import TokenInfo from "./components/TokenInfo";
import StakingPage from "./pages/StakingPage";
import WinPlay from "./pages/WinPlay";
import SwapPage from "./pages/SwapPage";
import DappServices from "./pages/DappServices";
import Roadmap from "./components/RoadMap";
import Team from "./components/Team";
import TopHolders from "./pages/TopHolders";



function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>
            <Header />
            <Ecosystem />
            <Roadmap />
            <Team />
            <TokenInfo />
          </div>
        </Route>
        <Route path="/WinPlay">
          <WinPlay />
        </Route>
        <Route path="/StakingPage">
          <StakingPage />
        </Route>
        <Route path="/SwapPage">
          <SwapPage />
        </Route>
        <Route path="/DappServices">
          <DappServices />
        </Route>
        <Route path="/TopHolders">
          <TopHolders />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
