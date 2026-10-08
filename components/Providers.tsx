"use client";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { config } from "@/lib/chain";
export default function Providers({ children }: { children: React.ReactNode }) {
  const [qc] = useState(() => new QueryClient());
  return <WagmiProvider config={config}><QueryClientProvider client={qc}>{children}</QueryClientProvider></WagmiProvider>;
}
