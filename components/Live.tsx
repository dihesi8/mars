"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useBlockNumber, useGasPrice } from "wagmi";
import { formatGwei } from "viem";
import { marsChain, HAS_RPC } from "@/lib/chain";
export default function Live() {
  const { data: block } = useBlockNumber({ watch: HAS_RPC, query: { enabled: HAS_RPC } });
  const { data: gas } = useGasPrice({ query: { enabled: HAS_RPC } });
  const { scrollY } = useScroll();
  const r = useTransform(scrollY, (v) => v * 0.3), l = useTransform(scrollY, (v) => -v * 0.3);
  const tiles = [["Latest block", block !== undefined ? block.toLocaleString() : HAS_RPC ? "..." : "RPC not set"], ["Gas price", gas !== undefined ? `${Number(formatGwei(gas)).toFixed(4)} gwei` : HAS_RPC ? "..." : "RPC not set"], ["Chain ID", String(marsChain.id)], ["Network", marsChain.name]];
  const row = (rev: boolean) => Array.from({ length: 12 }, (_, i) => tiles[(i + (rev ? 2 : 0)) % 4]).map(([k, v], i) => (
    <div key={i} className="flex h-[200px] w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/70 p-6"><span className="font-light text-[#D7E2EA]/70">{k}</span><span className="text-3xl font-semibold">{v}</span></div>
  ));
  return (
    <section className="space-y-3 overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40" aria-label="Live chain data">
      <motion.div style={{ x: l, willChange: "transform" }} className="-ml-[600px] flex gap-3">{row(false)}</motion.div>
      <motion.div style={{ x: r, willChange: "transform" }} className="-ml-[1400px] flex gap-3">{row(true)}</motion.div>
    </section>
  );
}
