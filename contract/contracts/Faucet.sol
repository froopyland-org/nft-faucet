// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

/**
 * @title Faucet
 * @author skusez
 * @notice Faucet is a contract that allows users to claim ERC20 tokens and NFTs.
 * @dev This contract is a simple example of a Faucet contract.
 * The contract maintains a balance of ERC20 tokens and NFTs.
 * Only whitelisted NFT owners can claim.
 * Very simple and basic implementation
 */
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IMintableERC721 is IERC721 {
    function mint(address to) external;
}

contract Faucet is Ownable {
    uint256 public constant FEE = 0.0001 ether;
    uint256 public constant ERC20_AMOUNT = 10_000 ether;
    uint256 public constant NFT_MINT_COUNT = 3;

    IERC20 public erc20Token;
    IMintableERC721 public faucetNft;
    mapping(address => bool) public claimedErc20;
    mapping(address => bool) public claimedNFT;

    constructor(address initialERC20Token, address initialNftAddress) Ownable(msg.sender) {
        erc20Token = IERC20(initialERC20Token);
        faucetNft = IMintableERC721(initialNftAddress);
    }

    /**
     * @notice Set the ERC20 token.
     * @param newToken The address of the new ERC20 token.
     */
    function setERC20Token(address newToken) external onlyOwner {
        erc20Token = IERC20(newToken);
    }

    /**
     * @notice Claim ERC20 tokens.
     * @dev The caller must send the correct fee.
     * The contract must have enough balance of ERC20 tokens.
     * The caller must not have already claimed.
     */
    function claimERC20() external payable {
        require(msg.value == FEE, "Incorrect fee");
        require(erc20Token.balanceOf(address(this)) >= ERC20_AMOUNT, "Faucet empty");
        require(!claimedErc20[msg.sender], "Already claimed");
        require(erc20Token.transfer(msg.sender, ERC20_AMOUNT), "Transfer failed");
        claimedErc20[msg.sender] = true;
    }

    /**
     * @notice Claim NFTs.
     * @dev The caller must send the correct fee.
     * The contract must have enough balance of NFTs.
     * The caller must not have already claimed.
     */
    function claimNFT() external payable {
        require(msg.value == FEE, "Incorrect fee");
        require(!claimedNFT[msg.sender], "Already claimed");
        for (uint256 j = 0; j < NFT_MINT_COUNT; j++) {
            faucetNft.mint(msg.sender);
        }
        claimedNFT[msg.sender] = true;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Required to receive ETH
    receive() external payable {}
}
