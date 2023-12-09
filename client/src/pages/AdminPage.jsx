import React,{useContext, useState} from 'react';
import { Layout } from '../components/Layout/Layout';
import Web3Context from '../contexts';
import { setParams } from '../contexts/useContract/writeContract';
const AdminPage = () => {
  const {_StorageContract,account} = useContext(Web3Context)
  const[minerAddress,setMinerAddress] = useState('');
  // const[loanAmount,setLoanAmount] = useState('');
  const[reputationScore,setreputationScore] = useState('');
  const[collateral,setCollateral] = useState('');
  const handleMinerAddress = (e)=>{
    setMinerAddress(e.target.value);
  }
  // const handleLoanAmount = ()=>{
  //   setLoanAmount(e.target.value);
  // }
  const handlereputation = ()=>{
    setreputationScore(e.target.value)
  }
  const handlecollateral = ()=>{
    setCollateral(e.target.value)
  }
  const handleAdd = ()=>{
    setParams(_StorageContract,account.currentAccount,minerAddress,collateral);
  }

  return (
    <Layout>
      <div className="borderz-10 relative flex min-h-screen flex-col items-center justify-center bg-bgsecondary pb-20 pt-20 ">
        <form class="flex w-10/12 flex-row items-end justify-between">
          <div class="ml-5 w-full whitespace-nowrap">
            <label
              for="mineraddress"
              class=" mb-2 block text-lg font-medium text-secondary-500"
            >
              Miner ID
            </label>
            <input
              type="text"
              onChange={handleMinerAddress}
              value = {minerAddress}
              id="mineraddress"
              class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
              placeholder="f01234567"
              required
            />
          </div>
          {/* <div class="ml-5 w-full whitespace-nowrap">
            <label
              for="loan"
              class="mb-2 block text-lg font-medium text-secondary-500"
            >
              Loan
            </label>
            <input
              type="text"
              id="loan"
              onChange={handleLoanAmount}
              value = {loanAmount}
              class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
              placeholder="1000"
              required
            />
          </div> */}
          <div class="ml-5 w-full whitespace-nowrap">
            <label
              for="reputation"
              class="mb-2 block text-lg font-medium text-secondary-500"
            >
              Reputation Score
            </label>
            <input
              type="text"
              onChange={handlereputation}
              value = {reputationScore}
              id="reputation"
              class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
              placeholder="535.23"
              required
            />
          </div>
          <div class="ml-5 w-full whitespace-nowrap">
            <label
              for="collateral"
              class="mb-2 block text-lg font-medium text-secondary-500"
            >
              Collateral
            </label>
            <input
              type="text"
              id="collateral"
              onChange={handlecollateral}
              value = {collateral}
              class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
              placeholder="997.98"
              required
            />
          </div>
          <div onClick={handleAdd} className="ml-10 flex cursor-pointer items-center justify-start gap-3 whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2 !text-[15px] font-semibold text-black transition-colors duration-300 hover:bg-secondary-500">
            Add
          </div>
        </form>

        <div class="relative mt-10 w-10/12 overflow-x-auto rounded-lg">
          <table class="w-full rounded-lg text-left text-xl text-gray-500">
            <thead class="rounded-xl bg-bgprimary text-xl uppercase text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Miner ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Loan
                </th>
                <th scope="col" class="px-6 py-3">
                  Reputation
                </th>
                <th scope="col" class="px-6 py-3">
                  Collateral
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#43454b] text-white">
              <tr class="">
                <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium">
                  f01233456
                </th>
                <td class="px-6 py-4">650</td>
                <td class="px-6 py-4">650</td>
                <td class="px-6 py-4">240.04</td>
                <td class="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
