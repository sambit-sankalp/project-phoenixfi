import React, { useState, useContext, useEffect } from 'react';
import StakeLayout from '../components/Layout/StakeLayout';
import { ButtonGroup } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Web3Context from '../contexts';
import {
  faArrowsRotate,
  faRetweet,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {
  PreviewSwap,
  PreviewSharesSwap,
} from '../contexts/useContract/readContract';
import { stake, unStake } from '../contexts/useContract/writeContract';
import Web3 from 'web3';
import axios from 'axios';

const StakePage = () => {
  const web3 = new Web3(window.ethereum);
  const [state, setState] = useState('Stake');
  const stakeStates = ['Stake', 'Unstake'];
  const [stakeFIL, setstakeFIL] = useState(0);
  const [stakepFIL, setstakepFIL] = useState(0);
  const [FILamount, setFILamount] = useState(0);
  const [pFILamount, setpFILamount] = useState(0);
  const [swapState, setSwapState] = useState(false);
  const { account, balance, pFIL, _Pool } = useContext(Web3Context);

  const coinToAddress = {
    USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    DAI: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    FUEL: '0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a',
  };

  const handleChangeFIL = async (e) => {
    const balance = web3.utils.toWei(e.target.value, 'ether');
    setFILamount(balance);
    setstakeFIL(e.target.value);
    const res = await PreviewSwap(_Pool, e.target.value);
    setstakepFIL(res);
  };

  const handleChangepFIL = async (e) => {
    const balance = web3.utils.toWei(e.target.value, 'ether');
    setpFILamount(balance);
    setstakepFIL(e.target.value);
    const res = await PreviewSharesSwap(_Pool, e.target.value);
    setstakeFIL(res);
  };

  const handleSwap = () => {
    setSwapState(true);
  };

  return (
    <StakeLayout>
      <div className="borderz-10 relative flex min-h-screen flex-col items-center justify-center bg-bgsecondary pb-20 pt-20 ">
        {swapState && (
          <div className="fixed z-10 flex h-screen  w-screen items-center justify-center bg-black/50 backdrop-blur-sm">
            <CurrencyExchange
              coinData={coinToAddress}
              account={account.currentAccount}
              setSwapState={setSwapState}
            />
          </div>
        )}
        <div className="mb-3 grid w-[500px] grid-cols-2 rounded-lg bg-bgprimary p-2">
          {stakeStates.map((stake, index) => (
            <div className="flex items-center justify-center">
              <div
                key={`${stake}-${index}`}
                className={` col-span-1 w-full transform cursor-pointer text-center text-[20px] text-white transition-transform duration-100 active:scale-50 ${
                  state === stake ? 'w-1/2 rounded-lg bg-bgsecondary' : ``
                }`}
                onClick={() => {
                  setState(stake);
                  setstakeFIL(0);
                  setstakepFIL(0);
                }}
              >
                {stake}
              </div>
            </div>
          ))}
        </div>
        <div class="flex h-auto w-[500px] flex-col items-center justify-center rounded-lg border-2 border-black bg-bgprimary p-4 pr-2 pt-2">
          <div className="flex w-full items-center justify-end">
            <div className="flex w-2/5 items-center justify-around rounded-xl bg-bgsecondary px-1 py-1">
              <FontAwesomeIcon
                icon={faWallet}
                className="ml-2 h-6 w-6 text-white"
              />
              <div className="ml-2 flex w-10/12 items-center justify-between rounded-lg bg-bgprimary px-4 py-0">
                <div className="flex items-start justify-center py-2">
                  <img
                    src="https://res.cloudinary.com/amznpersonal1/image/upload/v1702181571/svqvobckidm7xzwqm4ue.svg"
                    alt="filecoin"
                    className="h-6 w-6"
                  />
                  <p className="m-0 ml-3 whitespace-nowrap text-xl text-white">
                    {balance} FIL
                  </p>
                </div>
                <div className="flex items-start justify-center py-2">
                  <img src="https://res.cloudinary.com/amznpersonal1/image/upload/v1702181572/lhrhauajx4dect3a3smj.png" alt="filecoin" className="h-6 w-6" />
                  <p className="m-0 ml-3 whitespace-nowrap text-xl text-white">
                    {pFIL}pFIL
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleSwap}
              className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto"
            >
              <FontAwesomeIcon
                icon={faArrowsRotate}
                className="mr-2 transform transition duration-500 ease-in-out hover:rotate-180"
              />
              Swap
            </button>
          </div>

          <div className="flex w-full items-center justify-between">
            <h5 class="w-full text-left text-[25px] font-bold text-white">
              {state}
            </h5>
          </div>
          {/* <div class="mt-5 h-2.5 w-full rounded-full border border-secondary-500 bg-transparent">
            <div
              class="h-2.5 rounded-full bg-secondary-500"
              style={{ width: '70%' }}
            ></div>
          </div>
          <div class="mt-3 flex w-full items-center justify-between text-white">
            <span class="text-base font-medium text-white opacity-70">
              Total Staked: 70K
            </span>
            <span class="text-sm font-medium text-white opacity-70">100K</span>
          </div> */}
          <div
            className={`flex w-full  ${
              state === 'Stake' ? 'flex-col' : 'flex-col-reverse'
            } items-center justify-center`}
          >
            <div className="mt-4 w-full">
              <div class="relative flex w-full items-end justify-between">
                {/* <div class="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5"></div> */}
                <div className="flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/amznpersonal1/image/upload/v1702181571/svqvobckidm7xzwqm4ue.svg"
                    alt="filecoin"
                    className="h-8 w-8"
                  />
                  <h5 className="ml-2 whitespace-nowrap text-[17px] text-white">
                    FIL:
                  </h5>
                </div>
                <div className="flex items-center justify-center">
                  <input
                    onChange={handleChangeFIL}
                    type="number"
                    id="stake"
                    value={stakeFIL}
                    class="mr-3 block w-[100px] rounded-lg bg-transparent p-2.5 text-[17px] text-gray-900 text-white focus:border-none focus:bg-transparent focus:text-white"
                    placeholder={`0 ${state === 'Stake' ? 'FIL' : 'stFIL'}`}
                    disabled={state === 'Stake' ? false : true}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 w-full">
              <div class="relative flex w-full items-end justify-between">
                <div className="flex items-center justify-center">
                  <img src="https://res.cloudinary.com/amznpersonal1/image/upload/v1702181572/lhrhauajx4dect3a3smj.png" alt="filecoin" className="h-8 w-8" />
                  <h5 className="ml-2 whitespace-nowrap text-[17px] text-white">
                    pFIL:
                  </h5>
                </div>
                <div className="flex items-center justify-center">
                  <input
                    type="number"
                    id="stakepFIL"
                    value={stakepFIL}
                    onChange={handleChangepFIL}
                    class="mr-3 block w-[100px] rounded-lg bg-transparent p-2.5 text-[17px] text-gray-900 text-white focus:border-none focus:bg-transparent focus:text-white"
                    placeholder={`0 ${state === 'Stake' ? 'stFIL' : 'FIL'}`}
                    disabled={state === 'Stake' ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>
          <ButtonGroup className="w-full">
            <p
              onClick={() => {
                state === 'Stake'
                  ? stake(_Pool, account.currentAccount, FILamount).then(() => {
                      alert('Staked Successfully!');
                    })
                  : unStake(_Pool, account.currentAccount, pFILamount).then(
                      () => {
                        alert('Unstake Succesful !');
                      }
                    );
              }}
              className="mt-3 inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2 !text-[14px] font-semibold text-black transition-colors duration-300 hover:bg-secondary-500"
            >
              {state}
            </p>
          </ButtonGroup>
          {/* <div className="mt-2 w-full">
            <div class="relative flex w-full items-center justify-between">
              <h5 className="whitespace-nowrap text-[12px] text-secondary-200 opacity-50">
                Annual Estimated Rewards{' '}
              </h5>
              <h5 className="whitespace-nowrap text-[12px] text-secondary-200 opacity-50">
                0.00 FIL{' '}
              </h5>
            </div>
          </div> */}
          {/* <div className="mt-2 w-full">
            <div class="relative flex w-full items-center justify-between">
              {/* <div class="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5"></div> 
              <h5 className="whitespace-nowrap text-[12px] text-secondary-200 opacity-50">
                Estimated APY
              </h5>
              <h5 className="whitespace-nowrap text-[12px] text-secondary-200 opacity-50">
                13.52 %
              </h5>
            </div>
          </div> */}
        </div>
      </div>
    </StakeLayout>
  );
};

const CurrencyExchange = ({ coinData, account, setSwapState }) => {
  const [coinAddr, setcoinAddr] = useState(coinData[Object.keys(coinData)[0]]);
  const [amount, setamount] = useState(0);
  const [isAlert, setisAlert] = useState(false);
  const [error, seterror] = useState('');

  const swap = async () => {
    // try {
    const response = await axios({
      method: 'get',
      url: `https://backend-inc.onrender.com/swap?accountAddress=${account}&srcCoinAddr=${coinAddr}&amt=${amount}`,
      withCredentials: false,
      params: {
        access_token: '4WyjmE36P9R1UQDLFrszynHOkM4d15mW',
      },
    });

    if (response.data.error) {
      setisAlert(true);
      seterror(response.data.error);
      return;
    }
  };

  return (
    <>
      {isAlert && (
        <div
          id="toast-danger"
          class="fixed bottom-5 right-5 mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
          role="alert"
        >
          <div class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">Not enough balance</div>
          <button
            type="button"
            class="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
            onClick={() => setSwapState(false)}
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="flex h-auto w-[30%] items-center justify-center rounded-lg bg-bgsecondary px-12 py-10 shadow-md">
        <div className="flex w-full flex-col items-center justify-center space-y-3">
          <div className="align-items flex w-9/12 justify-center">
            <div className="flex flex-col items-start justify-start">
              <label
                for="token"
                class="mb-2 block text-lg font-medium text-secondary-500"
              >
                Select the token
              </label>
              <select
                id="token"
                onChange={(e) => setcoinAddr(e.options[e.selectedIndex].text)}
                class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-lg text-secondary-500"
              >
                {Object.keys(coinData).map((coin, index) => (
                  <option key={coin} selected={index === 0} value={coin}>
                    {coin}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label
                for="amount"
                class=" mb-2 block text-lg font-medium text-secondary-500"
              >
                Amount
              </label>
              <input
                type="text"
                onChange={(e) => setamount(e.target.value)}
                value={amount}
                id="amount"
                class="ml-3 block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
                placeholder="2"
                required
              />
            </div>
          </div>
          <FontAwesomeIcon icon={faRetweet} className="h-6 w-6 text-white" />
          <div className="ml-3 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2  text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto">
            FIL
            <img src="https://res.cloudinary.com/amznpersonal1/image/upload/v1702181571/svqvobckidm7xzwqm4ue.svg" alt="filecoin" className="h-6 w-6" />
          </div>
          <div
            onClick={() => swap()}
            className="!mt-10 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto"
          >
            <FontAwesomeIcon icon={faWallet} />
            Convert
          </div>
        </div>
      </div>
    </>
  );
};

export default StakePage;
