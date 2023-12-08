import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components for different pages
import HomePage from './pages/HomePage';
import StakePage from './pages/StakePage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/stake" element={<StakePage />} />
        <Route exact path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
