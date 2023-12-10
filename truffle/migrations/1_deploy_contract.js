const Pool = artifacts.require("Pool");
const StorageProviderContract = artifacts.require("StorageProviderContract");

module.exports = function (deployer) {
  deployer.deploy(Pool,"0xaC26a4Ab9cF2A8c5DBaB6fb4351ec0F4b07356c4","Phoenix.fi Token","pFIL");
  deployer.deploy(StorageProviderContract);
};
