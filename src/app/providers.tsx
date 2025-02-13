"use client";

import { config } from "@/lib/web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import { WagmiProvider } from "wagmi";

const getQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: 1000 * 60 * 5,
      },
    },
  });
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={getQueryClient()}>
        <ConnectKitProvider
          options={{
            embedGoogleFonts: true,
          }}
          customTheme={{
            "--ck-connectbutton-background": "var(--primary)",
            "--ck-connectbutton-hover-color": "var(--primary-foreground)",
            "--ck-overlay-backdrop-filter": "blur(2px)",
            "--ck-body-background": "var(--background)",
            "--ck-body-background-transparent": "var(--background)",
            "--ck-body-background-secondary": "var(--background)",
            "--ck-body-background-secondary-hover-background": "var(--primary)",
            "--ck-body-background-secondary-hover-outline": "var(--primary)",
            "--ck-body-background-tertiary": "var(--background)",
            "--ck-primary-button-background": "var(--primary)",
            "--ck-primary-button-hover-background": "var(--primary)",
            "--ck-primary-button-hover-color": "var(--primary-foreground)",
          }}
          mode="dark"
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
