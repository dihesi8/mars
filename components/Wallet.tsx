"use client";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { marsChain } from "@/lib/chain";
export default function Wallet() {
  const [m, setM] = useState(false); useEffect(() => setM(true), []);
  const { address, chainId, isConnected } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  if (!m) return <button className="cta text-sm">Connect wallet</button>;
  if (!isConnected) return (
    <button className="cta text-sm" disabled={isPending} title={error?.message} onClick={() => {
      if (!connectors[0]) { window.open("https://metamask.io/download", "_blank"); return; }
      connect({ connector: connectors[0], chainId: marsChain.id });
    }}>{isPending ? "Connecting..." : "Connect wallet"}</button>
  );
  if (chainId !== marsChain.id) return <button className="cta text-sm" onClick={() => switchChain({ chainId: marsChain.id })}>Switch to Robinhood Chain</button>;
  return <button className="ghost text-sm" title="Disconnect" onClick={() => disconnect()}>{address!.slice(0, 6)}...{address!.slice(-4)}</button>;
}
