import React,{useEffect,useContext}from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components for different pages
import Web3Context from "./contexts";

import HomePage from './pages/HomePage';
import StakePage from './pages/StakePage';

const App = () => {
  window.ethereum&&window.ethereum.on('accountsChanged', function (accounts) {
    setTimeout(window.location.reload(false), 1000);
  });

  //CheckIfWallet is Connectd
  const { checkIfWalletIsConnected } = useContext(Web3Context);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/stake" element={<StakePage />} />
      </Routes>

  );
};

export default App;
