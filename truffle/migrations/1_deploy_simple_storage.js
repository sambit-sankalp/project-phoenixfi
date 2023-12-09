const Pool = artifacts.require("Pool");
const StorageProviderContract = artifacts.require("StorageProviderContract");

module.exports = function (deployer) {
  deployer.deploy(Pool);
  deployer.deploy(StorageProviderContract);
};
