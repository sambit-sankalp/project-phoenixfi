/* eslint-disable */
import React, { useState } from 'react';
import Pool from '../contracts/Pool.json';
import StorageProviderContract from '../contracts/StorageProviderContract.json';

import { Web3Context } from './index';
import Web3 from 'web3';


const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState({
    accounts: null,
    currentAccount: null,
  });
  const [_StorageContract, setStorageontract] = useState('');
  const [_Pool, setPoolContract] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      // console.log('We have the ethereum object');
    }
    var web3 = new Web3(window.ethereum);

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const chain = await web3.eth.getChainId();
    setAccount({
      accounts: accounts,
      currentAccount: accounts[0],
    });

    if (accounts.length !== 0) {
      getContract(chain, accounts);
    } else {
      console.log('No authorized account found');
    }
  };
  const getContract = (chain) => {
    var web3 = new Web3(window.ethereum);

        const deployedNetwork = StorageProviderContract.networks[chain];
        const deployedNetwork1 = Pool.networks[chain];


    const instance0 = new web3.eth.Contract(
        StorageProviderContract.abi,
      deployedNetwork && deployedNetwork.address
    );
    
    const instance1 = new web3.eth.Contract(
        Pool.abi,
        deployedNetwork1 && deployedNetwork1.address
      );
      

      setStorageontract(instance0);
      setPoolContract(instance1);

  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnected,
        account,
        _StorageContract,
        _Pool
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
