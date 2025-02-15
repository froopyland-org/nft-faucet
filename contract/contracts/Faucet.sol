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

    // Add nonce tracking to prevent signature reuse
    mapping(bytes32 => bool) public usedSignatures;

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
     * @notice Claim ERC20 tokens with server signature
     * @dev The caller must send the correct fee and provide a valid signature
     * @param signature The signature from the server
     */
    function claimERC20(bytes memory signature) external payable {
        require(msg.value == FEE, "Incorrect fee");
        require(erc20Token.balanceOf(address(this)) >= ERC20_AMOUNT, "Faucet empty");
        require(!claimedErc20[msg.sender], "Already claimed");

        // Verify signature
        bytes32 messageHash = keccak256(abi.encodePacked(msg.sender, "claimERC20"));
        require(!usedSignatures[messageHash], "Signature already used");
        require(isValidSignature(messageHash, signature), "Invalid signature");

        usedSignatures[messageHash] = true;
        require(erc20Token.transfer(msg.sender, ERC20_AMOUNT), "Transfer failed");
        claimedErc20[msg.sender] = true;
    }

    /**
     * @notice Claim NFTs with server signature
     * @dev The caller must send the correct fee and provide a valid signature
     * @param signature The signature from the server
     */
    function claimNFT(bytes memory signature) external payable {
        require(msg.value == FEE, "Incorrect fee");
        require(!claimedNFT[msg.sender], "Already claimed");

        // Verify signature
        bytes32 messageHash = keccak256(abi.encodePacked(msg.sender, "claimNFT"));
        require(!usedSignatures[messageHash], "Signature already used");
        require(isValidSignature(messageHash, signature), "Invalid signature");

        usedSignatures[messageHash] = true;
        for (uint256 j = 0; j < NFT_MINT_COUNT; j++) {
            faucetNft.mint(msg.sender);
        }
        claimedNFT[msg.sender] = true;
    }

    /**
     * @notice Verify if a signature is valid
     * @param messageHash The hash of the message that was signed
     * @param signature The signature to verify
     */
    function isValidSignature(bytes32 messageHash, bytes memory signature) internal view returns (bool) {
        bytes32 ethSignedMessageHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash));

        address signer = recoverSigner(ethSignedMessageHash, signature);
        return signer == owner();
    }

    /**
     * @notice Recover the signer from a signature
     * @param _ethSignedMessageHash The signed message hash
     * @param _signature The signature
     */
    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature) internal pure returns (address) {
        require(_signature.length == 65, "Invalid signature length");

        bytes32 r;
        bytes32 s;
        uint8 v;

        assembly {
            r := mload(add(_signature, 32))
            s := mload(add(_signature, 64))
            v := byte(0, mload(add(_signature, 96)))
        }

        return ecrecover(_ethSignedMessageHash, v, r, s);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Required to receive ETH
    receive() external payable {}
}
