"use server";

import { ownersSet } from "@/lib/whitelist";
import { normalize } from "@/lib/utils";
import { keccak256, concat, toBytes, stringToHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";

export async function generateClaimSignature({
  address,
  type,
}: {
  address: string | undefined;
  type: "erc20" | "nft";
}) {
  if (!process.env.SIGNER_PRIVATE_KEY) {
    throw new Error("SIGNER_PRIVATE_KEY is not set");
  }

  if (!address) {
    throw new Error("Address is not set");
  }

  // check if the address has the whitelist nft
  const isWhitelisted = ownersSet.has(normalize(address));
  if (!isWhitelisted) {
    throw new Error("Address is not whitelisted");
  }

  // Create an account from the private key
  const account = privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY as `0x${string}`
  );

  // Create the message hash the same way as the smart contract
  const messageHash = keccak256(concat([toBytes(address), stringToHex(type)]));

  // Sign the hash (Viem automatically prepends the Ethereum Signed Message prefix)
  const signature = await account.signMessage({
    message: { raw: messageHash },
  });

  return signature;
}
