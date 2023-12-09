//add admin
const addAdmin = async (contract,account,newAdmin) => {
      if (!contract) {
        return false;
      }
      const res = await contract.methods
        .addAdmin(newAdmin)
        .send({ from: account });
      return res;
    };
//register
const register = async(contract,account)=>{
    console.log(contract)
    if (!contract) {
      return false;
    }
}
//stake
const stake = async (contract,account,amount) => {
    console.log(contract)
      if (!contract) {
        return false;
      }
      const res = await contract.methods
        .stake(amount,account)
        .send({ from: account });
      return res;
    };
    //unstake
const unStake = async(contract,account,amount)=>{
    console.log(contract);
    if (!contract) {
        return false;
      }
      const res = await contract.methods.unstake(amount).send({from:account});

      return res;
}

//lend
const lend = async(contract,account,amount)=>{
    if(!contract){
        return false;
    }
    const res = await contract.methods.lend().send({from:account,value:amount})
    return res;
} 
//request
const request = async(contract,account,amount)=>{
    if(!contract){
        return false;
    }
    const res =  await contract.methods.request(amount).send({from:account})
    return res;

}

//set params

const setParams = async(contract,account,score,miner,collateral)=>{
    if(!contract){
        return false;
    }
    const res = await contract.methods.setParams(score,miner,collateral).send({from:account});
    return res;
}

const setSPContract = async(contract,account,address)=>{
    if(!contract){
        return false;
    }
    const res = await contract.methods.setStorageProvider(address).send({from:account});

} 

export {addAdmin,setSPContract,setParams,request,lend,unStake,stake,register}