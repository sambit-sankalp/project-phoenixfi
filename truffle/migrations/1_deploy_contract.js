const Pool = artifacts.require("Pool");
const StorageProviderContract = artifacts.require("StorageProviderContract");

module.exports = function (deployer) {
  // deployer.deploy(Pool,"0x65E4e8D7bd50191abFee6E5BcDc4d16DDfE9975E","Phoenix.fi Token","pFIL");
  deployer.deploy(StorageProviderContract);
};
