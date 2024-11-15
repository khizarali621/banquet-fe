"use client";
import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import ChainContextProvider from "@/context/ChainContextProvider";
import { supportedChains } from "@/utils/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: supportedChains as any,
  ssr: true, // If your dApp uses server side rendering (SSR)
  // transports:
});

const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [client] = useState(new QueryClient());
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider>
            <ChainContextProvider>{children}</ChainContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};
export default AppProvider;
