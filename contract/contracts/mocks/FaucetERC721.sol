// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FaucetERC721 is ERC721, Ownable {
    uint256 public tokenIdCounter;
    mapping(address => bool) public approvedEntities;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {
        approvedEntities[msg.sender] = true;
    }

    function addApprovedEntity(address entity) external onlyOwner {
        approvedEntities[entity] = true;
    }

    function mint(address to) public {
        require(approvedEntities[msg.sender], "Not authorized");
        _mint(to, tokenIdCounter++);
    }
}
