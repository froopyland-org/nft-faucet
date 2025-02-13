// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const ERC20_FAUCET_ADDRESS = "0x49b775262e272bED00B6Cf0d07a5083a7eeFe19E";
const NFT_FAUCET_ADDRESS = "0x6baAc180BF212Bd7663382E4D96D7d8eF5bD1bf7";

const FaucetModule = buildModule("FaucetModule", (m) => {
  m.contract("ERC20Mock", ["Faucet ERC20", "FAUCET", 18]);

  m.contract("ERC721Mock", ["Faucet NFT", "FAUCET", "FAUCET"]);

  const faucet = m.contract("Faucet", [
    ERC20_FAUCET_ADDRESS,
    NFT_FAUCET_ADDRESS,
  ]);

  return { faucet };
});

export default FaucetModule;
