import { viem } from "hardhat";
import { parseEther } from "viem";

async function main() {
  const [deployer] = await viem.getWalletClients();

  console.log("Deploying contracts with account:", deployer.account.address);

  // Deploy ERC20 Mock
  const erc20 = await viem.deployContract("ERC20Mock", [
    "Faucet ERC20",
    "FAUCET",
    18,
  ]);
  console.log("ERC20Mock deployed to:", erc20.address);

  // Deploy NFT Faucet (ERC721)
  const nft = await viem.deployContract("FaucetERC721", [
    "Faucet NFT",
    "FAUCET",
  ]);
  console.log("FaucetERC721 deployed to:", nft.address);

  // Deploy Main Faucet
  const faucet = await viem.deployContract("Faucet", [
    erc20.address,
    nft.address,
  ]);
  console.log("Faucet deployed to:", faucet.address);

  // Set up permissions
  console.log("Configuring NFT permissions...");
  const nftContract = await viem.getContractAt("FaucetERC721", nft.address);
  await nftContract.write.addApprovedEntity([faucet.address], {
    account: deployer.account,
  });

  // Fund faucet with ERC20 tokens
  console.log("Funding faucet with ERC20 tokens...");
  const erc20Contract = await viem.getContractAt("ERC20Mock", erc20.address);
  await erc20Contract.write.mint([
    faucet.address,
    parseEther("1000000"), // 1M tokens
  ]);

  console.log("\n=== Deployment Summary ===");
  console.log("ERC20 Token:  ", erc20.address);
  console.log("NFT Contract: ", nft.address);
  console.log("Main Faucet:  ", faucet.address);
  console.log("Owner Address:", deployer.account.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
