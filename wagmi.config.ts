import { defineConfig } from "@wagmi/cli";
import { hardhat, react, actions } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/lib/contracts.ts",

  plugins: [
    hardhat({
      project: "contract",
      deployments: {
        Faucet: {
          31337: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
        },
      },
    }),
    react(),
    actions(),
  ],
});
