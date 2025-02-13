import { getDefaultConfig } from "connectkit";
import { berachainTestnetbArtio, hardhat } from "viem/chains";
import { createConfig } from "wagmi";

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [berachainTestnetbArtio, hardhat],

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Fromo NFT Faucet",

    // Optional App Info
    appDescription: "Fromo NFT Faucet",
    appUrl: "https://fromo.xyz", // your app's url
    appIcon: "https://fromo.xyz/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
