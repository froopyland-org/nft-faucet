/* eslint-disable @typescript-eslint/no-explicit-any */
import { assert, expect } from "chai";
import { viem } from "hardhat";
import { parseEther } from "viem";

describe("Faucet Contract Tests", () => {
  let faucet: any;
  let erc20: any;
  let nft: any;
  let owner: any;
  let user: any;
  let publicClient: any;

  const FEE = parseEther("0.0001");
  const ERC20_AMOUNT = parseEther("10000");
  const NFT_MINT_COUNT = 3;

  const getFaucet = async () => {
    return await viem.getContractAt("Faucet", faucet.address);
  };

  const getERC20 = async () => {
    return await viem.getContractAt("ERC20Mock", erc20.address);
  };

  const getFaucetERC721 = async () => {
    return await viem.getContractAt("FaucetERC721", nft.address);
  };

  before(async () => {
    [owner, user] = await viem.getWalletClients();
    publicClient = await viem.getPublicClient();

    // Deploy mock ERC20
    erc20 = await viem.deployContract("ERC20Mock", ["TestToken", "TT", 18]);

    // Deploy mock ERC721
    nft = await viem.deployContract("FaucetERC721", ["TestNFT", "TNFT"]);

    // Deploy Faucet
    faucet = await viem.deployContract("Faucet", [erc20.address, nft.address]);

    // Add faucet to approved entities
    await (
      await getFaucetERC721()
    ).write.addApprovedEntity([faucet.address], {
      account: owner.account,
    });

    // Fund faucet with ERC20
    await erc20.write.mint([faucet.address, ERC20_AMOUNT * 10n], {
      account: owner.account,
    });
  });

  describe("Deployment", () => {
    it("Should set the correct ERC20 token", async () => {
      assert.notStrictEqual(await faucet.read.erc20Token(), erc20.address);
    });

    it("Should set the correct owner", async () => {
      assert.notStrictEqual(await faucet.read.owner(), owner.account.address);
    });
  });

  describe("ERC20 Claims", () => {
    it("Should allow claiming ERC20 tokens", async () => {
      await (
        await getFaucet()
      ).write.claimERC20({
        value: FEE,
        account: user.account,
      });
      // Check ERC20 balance
      const balance = await (
        await getERC20()
      ).read.balanceOf([user.account.address]);
      assert.equal(balance, ERC20_AMOUNT);

      // Check claimed status
      const claimed = await (
        await getFaucet()
      ).read.claimedErc20([user.account.address]);

      assert.equal(claimed, true);
    });

    it("Should revert with incorrect fee", async () => {
      await expect(
        faucet.write.claimERC20(undefined, {
          value: parseEther("0.00009"),
          account: user.account,
        })
      ).to.be.rejectedWith("Incorrect fee");
    });

    it("Should revert if already claimed", async () => {
      await expect(
        (await getFaucet()).write.claimERC20({
          value: FEE,
          account: user.account,
        })
      ).to.be.rejectedWith("Already claimed");
    });
  });

  describe("NFT Claims", () => {
    it("Should allow claiming NFTs", async () => {
      // Mint NFTs to faucet
      for (let i = 0; i < NFT_MINT_COUNT; i++) {
        await (
          await getFaucetERC721()
        ).write.mint([faucet.address], { account: owner.account });
      }

      await (
        await getFaucet()
      ).write.claimNFT({
        value: FEE,
        account: user.account,
      });

      // Check NFT balances
      const balance = await (
        await getFaucetERC721()
      ).read.balanceOf([user.account.address]);
      assert.equal(balance, BigInt(NFT_MINT_COUNT));

      // Check claimed status
      const claimed = await (
        await getFaucet()
      ).read.claimedNFT([user.account.address]);
      assert.equal(claimed, true);
    });
  });

  describe("Withdrawals", () => {
    it("Should allow owner to withdraw fees", async () => {
      const initialBalance = await publicClient.getBalance({
        address: owner.account.address,
      });

      await faucet.write.withdraw({ account: owner.account });

      const newBalance = await publicClient.getBalance({
        address: owner.account.address,
      });

      assert.isTrue(newBalance > initialBalance);
    });
  });
});
