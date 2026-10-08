"use client";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { Cpu, X } from "lucide-react";
import { Wheel } from "./Reveal";
import { nodes } from "@/lib/data";
import { marsChain } from "@/lib/chain";
export default function Market() {
  const [sel, setSel] = useState<(typeof nodes)[number] | null>(null);
  const [dur, setDur] = useState("1 hour"); const [agent, setAgent] = useState("market-analysis-agent"); const [toast, setToast] = useState("");
  const { isConnected } = useAccount(); const { connect, connectors } = useConnect();
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, []);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(""), 4000); return () => clearTimeout(t); }, [toast]);
  const confirm = () => {
    if (!isConnected) { if (!connectors[0]) { window.open("https://metamask.io/download", "_blank"); return; } connect({ connector: connectors[0], chainId: marsChain.id }); return; }
    setToast(`Hire request for ${sel![0]} (${dur}) prepared. Connect the marketplace contract to settle it onchain.`); setSel(null);
  };
  return (<>
    <div className="grid3">{nodes.map((n) => (
      <Wheel key={n[0]} className="h-full" range={[-4, 4]} radius={200}><div className="card h-full">
        <div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><span className="ico"><Cpu size={22} /></span><div><div className="font-bold">{n[0]}</div><div className="text-xs font-light opacity-60">{n[1]}</div></div></div><span className="ok pill whitespace-nowrap">Online</span></div>
        <div className="my-5 text-4xl font-black">{n[2]} <span className="text-sm font-light opacity-60">MARS / hour</span></div>
        <div className="grid grid-cols-2 gap-3">{n[3].map(([k, v]) => <div key={k}><div className="text-xs opacity-50">{k}</div><div className="text-sm font-medium">{v}</div></div>)}</div>
        <button className="cta mt-6 w-full text-sm" onClick={() => setSel(n)}>Hire node</button>
      </div></Wheel>))}</div>
    {sel && <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4" onClick={() => setSel(null)}>
      <div role="dialog" aria-modal className="relative w-full max-w-md rounded-[28px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 text-[#D7E2EA]" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" className="absolute right-4 top-4" onClick={() => setSel(null)}><X /></button>
        <h3 className="text-2xl font-bold">Hire {sel[0]}</h3><p className="mt-1 font-light opacity-70">Rate: {sel[2]} MARS / hour</p>
        <label className="mt-5 block text-sm opacity-70">Execution duration<select value={dur} onChange={(e) => setDur(e.target.value)} className="mt-1 w-full rounded-xl border border-[#D7E2EA]/30 bg-transparent p-3 text-base">{["1 hour", "4 hours", "12 hours", "24 hours"].map((o) => <option key={o} className="bg-black">{o}</option>)}</select></label>
        <label className="mt-4 block text-sm opacity-70">Agent / workload<input value={agent} onChange={(e) => setAgent(e.target.value)} className="mt-1 w-full rounded-xl border border-[#D7E2EA]/30 bg-transparent p-3 text-base" /></label>
        <button className="cta mt-6 w-full" onClick={confirm}>{isConnected ? "Confirm hire" : "Connect wallet to hire"}</button>
      </div></div>}
    {toast && <div role="status" className="fixed bottom-6 left-1/2 z-[70] w-[min(92vw,520px)] -translate-x-1/2 rounded-2xl border border-[#D7E2EA]/30 bg-[#18011F] p-4 text-sm text-[#D7E2EA]">{toast}</div>}
  </>);
}
