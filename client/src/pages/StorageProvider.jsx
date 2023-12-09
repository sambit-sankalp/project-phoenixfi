import React, { useState,useContext, useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { ButtonGroup } from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Web3Context from '../contexts';
import {register,request,changeBeneficiary} from '../contexts/useContract/writeContract';
import { getAllSPs,currentSPinfo } from '../contexts/useContract/readContract';
import Web3 from "web3"
const StorageProvider = () => {
  const web3 = new Web3(window.ethereum);
  const [formID, setformID] = useState(1);
  const formIds = [1, 2];
  const {_StorageContract,account} = useContext(Web3Context)
  const [isRegistered, setisRegistered] = useState(false);
  const [loan,setLoan]= useState(0);
  const [SP,setSP] = useState('');
  useEffect(()=>{
    currentSPinfo(_StorageContract,account.currentAccount).then(res=>{
      console.log(res)
      setSP(res)
    })
  },[_StorageContract,account])
  const handleLoanAmount = (e)=>{
    
    setLoan(e.target.value)
  }
  const handlerequest = ()=>{
    // const balance = web3.utils.toWei(loan, "ether");
    // request(_StorageContract,account.currentAccount,balance).then(()=>{
    //   alert("Loan requested.. Please wait for approval");
    // })
    setformID(formID+1)
  }
  const handleBenef = ()=>{
    changeBeneficiary(_StorageContract,account.currentAccount,)
  }
  const handleForm = (id) => {
    switch (id) {
      case 1:
        return (
          <div className="flex w-1/4 flex-col items-start justify-center">
            <h3 class="mb-1 w-full text-[16px] font-medium text-white">
              Loan Amount
            </h3>
            <div className="mt-0 w-20 border-b-2 border-secondary-500"></div>
            <div class="mb-4 mt-7 flex w-full items-center justify-center">
              <div class="w-full whitespace-nowrap">
                <label
                  for="loan"
                  class="mb-2 block text-lg font-medium text-secondary-500"
                >
                  Loan Amount
                </label>
                <input
                  type="text"
                  id="loan"
                  class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
                  placeholder="997.98"
                  onChange={handleLoanAmount}
                  value={loan}
                  required
                />
              </div>
            </div>
            <div
              onClick={handlerequest}
              className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500"
            >
              Request
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex w-1/4 flex-col items-start justify-center">
            <h3 class="mb-1 w-full text-[16px] font-medium text-white">
              Accept and Change Beneficiary Address
            </h3>
            <div className="mt-0 w-40 border-b-2 border-secondary-500"></div>
            <p class="mb-4 mt-6 w-full text-[13px] font-medium text-white">
              <span className="font-bold">Loan Amount:</span> {web3.utils.fromWei(SP.currentLoan)} FIL
            </p>
            <p class="mb-4 w-full text-[13px] font-medium text-white">
              <span className="font-bold">Calculated reputation Score:</span> {SP.reputation_score}
            </p>
            <p class="mb-4 w-full text-[13px] font-medium text-white">
              <span className="font-bold">Collateral to Pledge:</span> {SP.collateral}
            </p>
            <p class="mb-4 w-full text-[13px] font-medium text-white">
              <span className="font-bold">Estimated Epoch: 518,400(~6 mo)</span>
            </p>
            <p class="mb-4 w-full text-[13px] font-medium text-white">
              <span className="font-bold">Beneficiary ActorId: t059850</span>
            </p>
            {/* <div class="mb-4 flex w-full items-center justify-center">
              <div class="w-full whitespace-nowrap">
                <label
                  for="address"
                  class="mb-2 block text-lg font-medium text-secondary-500"
                >
                  Beneficiary Address
                </label>
                <input
                  type="text"
                  id="address"
                  class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
                  placeholder="0xf260e02D3B5CA5e5284b9fEc3a72d6a70e5A16bD"
                  required
                />
              </div>
            </div> */}
            <div
              onClick={handleBenef}
              className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500"
            >
              Go Next
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex w-1/4 flex-col items-start justify-center">
            <h3 class="mb-1 w-full text-[16px] font-medium text-white">
              Pledge Collateral
            </h3>
            <div className="mt-0 w-32 border-b-2 border-secondary-500"></div>
            <div class="mb-4 mt-7 flex w-full items-center justify-center">
              <div class="w-full whitespace-nowrap">
                <label
                  for="collateral"
                  class="mb-2 block text-lg font-medium text-secondary-500"
                >
                  Collateral Amount
                </label>
                <input
                  type="text"
                  id="collateral"
                  class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
                  placeholder="567.89"
                  required
                />
              </div>
            </div>
            <div className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500">
              Take loans
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <Layout>
      <div className="borderz-10 relative flex min-h-screen w-full flex-col items-center justify-center bg-bgsecondary pb-20 pt-20 ">
        {isRegistered ? (
          <>
            <ol class="mb-4 flex w-1/4 items-center sm:mb-5">
              {formIds.map((id) => (
                <li
                  key={id}
                  onClick={() => setformID(id)}
                  class={`flex w-full cursor-pointer items-center text-black after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-blue-100 after:content-['']`}
                >
                  <div
                    class={`flex h-10 w-10 shrink-0 items-center font-extrabold justify-center rounded-full bg-blue-100 ${
                      id === formID
                        ? 'h-[40px] w-[40px] border-4 border-black text-[15px]'
                        : ''
                    }`}
                  >
                    {id}
                  </div>
                </li>
              ))}
              <li onClick={() => setformID(3)} class="flex w-auto items-center">
                <div
                  class={`flex h-10 w-10 shrink-0 cursor-pointer font-extrabold items-center justify-center rounded-full bg-blue-100 ${
                    3 === formID
                      ? 'h-[40px] w-[40px] border-4 border-black text-[15px]'
                      : ''
                  }`}
                >
                  3
                </div>
              </li>
            </ol>
            {handleForm(formID)}
          </>
        ) : (
          <ButtonGroup className="block">
            <div
              onClick={() => {
                // register(_StorageContract,account.currentAccount).then(()=>{
                //   alert("Succesfully registered")
                // }
                // )
                setisRegistered(true)
              }}
              className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 text-3xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto"
            >
              <FontAwesomeIcon icon={faSignIn} />
              Onboard as a Storage Provider
            </div>
          </ButtonGroup>
        )}
      </div>
    </Layout>
  );
};

export default StorageProvider;
