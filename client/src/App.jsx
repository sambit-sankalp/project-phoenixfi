import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components for different pages
import HomePage from './pages/HomePage';
import StakePage from './pages/StakePage';

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/stake" element={<StakePage />} />
      </Routes>

  );
};

export default App;
