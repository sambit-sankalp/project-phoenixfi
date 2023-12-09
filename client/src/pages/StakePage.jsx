import React, { useState } from "react";
import StakeLayout from "../components/Layout/StakeLayout";
import { ButtonGroup } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faWallet } from "@fortawesome/free-solid-svg-icons";

const StakePage = () => {
  const [state, setState] = useState("Stake");
  const stakeStates = ["Stake", "Unstake"];

  return (
    <StakeLayout>
      <div className="borderz-10 relative flex min-h-screen flex-col items-center justify-center bg-bgsecondary pb-20 pt-20 ">
        <div className="mb-3 grid w-[500px] grid-cols-2 rounded-lg bg-bgprimary p-2">
          {stakeStates.map((stake, index) => (
            <h1
              key={`${stake}-${index}`}
              className={` col-span-1 w-full transform cursor-pointer text-center text-[20px] text-white transition-transform duration-100 active:scale-50 ${
                state === stake ? "w-1/2 rounded-lg bg-bgsecondary" : ``
              }`}
              onClick={() => setState(stake)}
            >
              {stake}
            </h1>
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
                    src="./filecoin-logo.svg"
                    alt="filecoin"
                    className="h-6 w-6"
                  />
                  <p className="m-0 ml-3 whitespace-nowrap text-xl text-white">
                    55 FIL
                  </p>
                </div>
                <div className="flex items-start justify-center py-2">
                  <img src="./fccoin.png" alt="filecoin" className="h-6 w-6" />
                  <p className="m-0 ml-3 whitespace-nowrap text-xl text-white">
                    55 stFIL
                  </p>
                </div>
              </div>
            </div>
            <button className="mx-2 flex transform items-center justify-center rounded-xl bg-blue-500 px-4 py-3 font-bold text-white transition duration-500 hover:bg-blue-700">
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
          <div className={`flex w-full flex-col items-center justify-center`}>
            <div className="mt-4 w-full">
              <div class="relative flex w-full items-end justify-between">
                {/* <div class="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5"></div> */}
                <h5 className="whitespace-nowrap text-[17px] text-white">
                  Stake Amount:{" "}
                </h5>
                <div className="flex items-center justify-center">
                  <input
                    type="number"
                    id="stake"
                    class="mr-3 block w-[100px] rounded-lg bg-transparent p-2.5 text-[17px] text-gray-900 text-white focus:border-none focus:bg-transparent focus:text-white"
                    placeholder={`0 ${state === "Stake" ? "FIL" : "stFIL"}`}
                  />
                  <img
                    src="./filecoin-logo.svg"
                    alt="filecoin"
                    className="h-10 w-10"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 w-full">
              <div class="relative flex w-full items-end justify-between">
                <h5 className="whitespace-nowrap text-[17px] text-white">
                  Rewards:{" "}
                </h5>
                <div className="flex items-center justify-center">
                  <input
                    type="number"
                    id="stake"
                    class="mr-3 block w-[100px] rounded-lg bg-transparent p-2.5 text-[17px] text-gray-900 text-white focus:border-none focus:bg-transparent focus:text-white"
                    placeholder={`0 ${state === "Stake" ? "stFIL" : "FIL"}`}
                    disabled
                  />
                  <img
                    src="./fccoin.png"
                    alt="filecoin"
                    className="h-10 w-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <ButtonGroup className="w-full">
            <p className="mt-3 inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2 !text-[14px] font-semibold text-black transition-colors duration-300 hover:bg-secondary-500">
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

export default StakePage;
