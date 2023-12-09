//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ERC4626.sol";
import "@zondax/filecoin-solidity/contracts/v0.8/SendAPI.sol";
import "./SPstruct.sol";

interface IWFIL is IERC20 {
    function deposit() external payable;

    function withdraw(uint256) external;
}

interface IStorageProvider {
    function getStorageProvider(address _miner)
        external
        view
        returns (SPstruct.StorageProvider memory);
}

contract Pool is ERC4626 {
    // a mapping that checks if a user has deposited the token
    mapping(address => uint256) public staker;
    mapping(address => uint256) public collateralStore;
    address public StorageProviderContract;
    IWFIL public immutable wfil;

    constructor(
        IWFIL _wfil,
        string memory _name,
        string memory _symbol
    ) ERC4626(ERC20(address(_wfil)), _name, _symbol) {
        wfil = _wfil;
    }

    function setStorageProvider(address StorageProvider) public {
        StorageProviderContract = StorageProvider;
    }

    /**
     * @notice function to deposit assets and receive vault tokens in exchange
     * @param _assets amount of the asset token
     */

    function stake(uint256 _assets) public payable {
        // checks that the deposited amount is greater than zero.
        require(_assets > 0, "Deposit less than Zero");
        require(_assets == msg.value, "Send the same amount");
        // calling the deposit function from the ERC-4626 library to perform all the necessary functionality
        uint256 shares = previewDeposit(_assets);
        IWFIL(wfil).deposit{value: _assets}();
        _mint(msg.sender, shares);
        // Increase the share of the user
        staker[msg.sender] += _assets;
    }

    /**
     * @notice Function to allow msg.sender to withdraw their deposit plus accrued interest
     * @param _shares amount of shares the user wants to convert
     */
    function unstake(uint256 _shares) public {
        // Validate input
        require(_shares > 0, "Shares must be greater than zero");
        require(msg.sender != address(0), "Cannot withdraw to zero address");
        require(staker[msg.sender] >= _shares, "Insufficient shares");
        // Redeem the shares for the underlying assets
        uint256 assets = convertToAssets(_shares);
        IWFIL(wfil).withdraw(assets);
        _burn(msg.sender, assets);
        // This will transfer the equivalent amount of assets to the receiver
        payable(msg.sender).transfer(assets);
        // Update the staker's share balance
        staker[msg.sender] -= _shares;
    }

    // returns total number of assets
    function totalAssets() public view override returns (uint256) {
        return asset.balanceOf(address(this));
    }

    // returns total balance of user
    function totalAssetsOfUser(address _user) public view returns (uint256) {
        return asset.balanceOf(_user);
    }
    function getDetails() public view returns(SPstruct.StorageProvider memory){
        return IStorageProvider(StorageProviderContract).getStorageProvider(msg.sender);
    }

    function lend() public payable {
        SPstruct.StorageProvider memory miner = IStorageProvider(
            StorageProviderContract
        ).getStorageProvider(msg.sender);
        
        require(msg.sender == miner.ethAddress, "must be the same miner");
        require(msg.value == miner.collateral, "Send the collateral amount");
        IWFIL(wfil).withdraw(miner.currentLoan);
        payable(msg.sender).transfer(miner.currentLoan);
    }
    function native() public view returns(uint256){
        return address(this).balance;
    }

    receive() external payable virtual {}
}
