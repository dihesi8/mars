import { defineChain } from "viem";
import { createConfig, http } from "wagmi";
const rpc = process.env.NEXT_PUBLIC_RPC_URL || "";
const ex = process.env.NEXT_PUBLIC_EXPLORER_URL || "";
const cur = process.env.NEXT_PUBLIC_CURRENCY || "ETH";
export const marsChain = defineChain({
  id: Number(process.env.NEXT_PUBLIC_CHAIN_ID || 1),
  name: "Robinhood Chain",
  nativeCurrency: { name: cur, symbol: cur, decimals: 18 },
  rpcUrls: { default: { http: [rpc] } },
  blockExplorers: ex ? { default: { name: "Explorer", url: ex } } : undefined,
});
export const HAS_RPC = !!rpc;
export const MARS_TOKEN = process.env.NEXT_PUBLIC_MARS_TOKEN || "";
export const config = createConfig({
  chains: [marsChain], connectors: [], ssr: true,
  transports: { [marsChain.id]: http(rpc || undefined) },
});
