// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SPstruct {
        enum Status{requested,approved,notApproved}
        struct StorageProvider {
        bool isRegistered;
        address ethAddress;
        uint64 actorid;
        uint256 currentLoan;
        uint64 reputation_score;
        uint256 collateral;
        Status status;
    }
}