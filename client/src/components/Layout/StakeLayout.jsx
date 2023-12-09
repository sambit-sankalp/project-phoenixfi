import React from 'react';
import { Footer } from '../marginals/Footer';
import { Header } from '../marginals/Header';

const StakeLayout = ({ children, className = '' }) => {
  return (
    <main className={`main relative overflow-hidden ${className && className}`}>
      <Header isStakePage={true} />
      {children}
      <Footer />
    </main>
  );
};

export default StakeLayout;
