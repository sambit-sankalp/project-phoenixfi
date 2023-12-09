// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@zondax/filecoin-solidity/contracts/v0.8/types/CommonTypes.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/MinerAPI.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/types/MinerTypes.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/cbor/BigIntCbor.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/PrecompilesAPI.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/utils/BigInts.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/utils/FilAddresses.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./SPstruct.sol";

contract StorageProviderContract {
    //Struct to hold storage provider details
    address public poolAdress;
    address public Owner;
    mapping(address => SPstruct.StorageProvider) public SPstore;
    address[] public SPstoreArray;
    mapping(uint256 => uint256) public actorStore;
    mapping(address => bool) adminWhitelist;
    uint256 public counter;
    address public owner;
    constructor(){
        Owner = msg.sender;
    }
    function addAdmin(address _newadmin) public {
        require(msg.sender == owner,"Only admin");
        adminWhitelist[_newadmin] = true;
    }
    function register() public {
        require(
            SPstore[msg.sender].isRegistered == false,
            "Already registered"
        );
        uint64 actor_id = PrecompilesAPI.resolveEthAddress(msg.sender);
        SPstruct.StorageProvider memory sp;
        sp.isRegistered = true;
        sp.ethAddress = msg.sender;
        sp.actorid = actor_id;
        sp.status = SPstruct.Status.notApproved;
        SPstore[msg.sender] = sp;
        actorStore[counter] = actor_id;
        SPstoreArray.push(msg.sender);
        counter++;
    }
    function changeBeneficiary(
        uint64 minerId,
        uint64 beneficiaryActorId,
        uint256 quota,
        int64 expiration
    ) public {
        MinerTypes.ChangeBeneficiaryParams memory params;
        params.new_beneficiary = FilAddresses.fromActorID(beneficiaryActorId);
        params.new_quota = BigInts.fromUint256(quota);
        params.new_expiration = CommonTypes.ChainEpoch.wrap(expiration);
        MinerAPI.changeBeneficiary(
            CommonTypes.FilActorId.wrap(minerId),
            params
        );

    }
    function request(uint256 requestLoanAmt) public {
        SPstore[msg.sender].status = SPstruct.Status.requested;
        SPstore[msg.sender].currentLoan = requestLoanAmt;

    }

    function getIDfromETH(address minerAddress) public view returns (uint64) {
        return PrecompilesAPI.resolveEthAddress(minerAddress);
    }

    function getIDfromFIL(CommonTypes.FilAddress memory addr)
        public
        view
        returns (uint64)
    {
        return PrecompilesAPI.resolveAddress(addr);
    }

    function getBenef(uint64 miner_id)
        public
        view
        returns (int256, MinerTypes.GetBeneficiaryReturn memory)
    {
        CommonTypes.FilActorId actorId = CommonTypes.FilActorId.wrap(miner_id);
        return MinerAPI.getBeneficiary(actorId);
    }

    function getFILAddress(bytes memory data)
        public
        pure
        returns (CommonTypes.FilAddress memory)
    {
        return FilAddresses.fromBytes(data);
    }

    function setParams(
        uint64 score,
        address miner,
        uint256 collateral
    ) public {
        require(adminWhitelist[msg.sender]==true||msg.sender==Owner,"Only admin");
        SPstore[miner].reputation_score = score;
        SPstore[miner].collateral = collateral;
        SPstore[miner].status = SPstruct.Status.approved;
    }

    function getStorageProvider(address _miner)
        public
        view
        returns (SPstruct.StorageProvider memory)
    {
        return SPstore[_miner];
    }
}
