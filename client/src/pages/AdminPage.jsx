import React,{useContext, useEffect, useState} from 'react';
import { Layout } from '../components/Layout/Layout';
import Web3Context from '../contexts';
import { setParams } from '../contexts/useContract/writeContract';
import { getAllSPs } from '../contexts/useContract/readContract';
import Web3 from "web3"
const AdminPage = () => {
  const web3 = new Web3(window.ethereum);

  const {_StorageContract,account} = useContext(Web3Context)
  const[minerAddress,setMinerAddress] = useState('');
  const[data,setData]=useState([]);
  const arr=['requested','approved','notApproved'];
  // const[loanAmount,setLoanAmount] = useState('');
  const[reputationScore,setreputationScore] = useState('');
  const[collateral,setCollateral] = useState('');
  const[collateralWei,setCollateralWei] = useState('');

  useEffect(()=>{
  getAllSPs(_StorageContract).then((res)=>{
    console.log(res)
    setData(res)
  })
  },[_StorageContract,account])
  const handleMinerAddress = (e)=>{
    setMinerAddress(e.target.value);
  };
  // const handleLoanAmount = ()=>{
  //   setLoanAmount(e.target.value);
  // }
  const handlereputation = (e)=>{
    setreputationScore(e.target.value)
  }
  const handlecollateral = (e)=>{
    setCollateral(e.target.value)
    const res = web3.utils.toWei(e.target.value, "ether")
    console.log(res)
    setCollateralWei(res)
  }
  const handleAdd = (e)=>{
    e.preventDefault()
    setParams(_StorageContract,account.currentAccount,reputationScore,minerAddress,collateralWei).then(()=>{
      alert("info added and Loan Approved")
    });
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
              Miner ethAddress
            </label>
            <input
              type="text"
              onChange={handleMinerAddress}
              value={minerAddress}
              id="mineraddress"
              class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
              placeholder="0x721d857...6279A7	"
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
              value={reputationScore}
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
              value={collateral}
              class="block w-full rounded-lg border border-secondary-500 bg-transparent p-2.5 text-xl text-white"
              placeholder="997.98"
              required
            />
          </div>
          <div
            onClick={handleAdd}
            className="ml-10 flex cursor-pointer items-center justify-start gap-3 whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2 !text-[15px] font-semibold text-black transition-colors duration-300 hover:bg-secondary-500"
          >
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
                  eth address
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
              
                {data && data.map((d) => (
                  <tr class="">
                    <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium">
                    t0{d.actorid}
                  </th>
                  <td class="px-6 py-4">{d.ethAddress}</td>
                  <td class="px-6 py-4">{web3.utils.fromWei(d.currentLoan)} FIL</td>
                  <td class="px-6 py-4">{d.reputation_score}</td>
                  <td class="px-6 py-4">{web3.utils.fromWei(d.collateral)}</td>

                  <td class="px-6 py-4">{arr[d.status]}</td>
                </tr>
                ))}
                
              
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
