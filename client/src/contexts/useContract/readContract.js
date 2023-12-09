//get SP
const getSPData =async(contract, miner)=>{
    if (!contract) {
        return false;
      }
      const res = await contract.methods.getPatient(miner).call();
      return res;
  } 

  const getTotalCount = async(contract)=>{
    if (!contract) {
        return false;
      }
      const res = await contract.methods.counter().call();
      return res;
  }
  const getAllSPs = async(contract)=>{
    if (!contract) {
        return false;
      }
      let arr=[];
      const counter = await contract.methods.counter().call();
      // console.log(counter)
      for(let i=0;i<counter;i++){

          const res = await contract.methods.SPstoreArray(i).call();
          const res2 = await contract.methods.SPstore(res).call();
          arr.push(res2);
      }
      return arr;
    
  }
  const PreviewSwap = async(contract,amount=0)=>{
    if(!contract){
        return false;
    }
    const res = await contract.methods.previewDeposit(amount).call()
    // console.log(res)
    return res;
  }
  const PreviewSharesSwap = async(contract,shares=0)=>{
    if(!contract){
        return false;
    }
    const res = await contract.methods.previewRedeem(shares).call()
    // console.log(res)
    return res;
  }
  const currentSPinfo = async(contract,account)=>{
    if(!contract){
      return false;
  }
  const res = await contract.methods.SPstore(account).call();
  return res;
  }
  export {PreviewSwap,getAllSPs,getSPData,getTotalCount,PreviewSharesSwap,currentSPinfo}