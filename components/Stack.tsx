"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { marsChain, MARS_TOKEN } from "@/lib/chain";
const rows = (a: [string, string][]) => a.map(([k, v]) => <div key={k} className="flex justify-between gap-4 border-b border-[#D7E2EA]/15 py-3 text-sm sm:text-base"><span className="text-[#D7E2EA]/60">{k}</span><span className="break-all text-right">{v || "Not set"}</span></div>);
function Card({ i, n, cat, title, children }: { i: number; n: number; cat: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const s = useTransform(p, [0, 1], [1, 1 - (n - 1 - i) * 0.03]);
  return (
    <div ref={ref} className="sticky mb-[20vh]" style={{ top: `calc(8vh + ${i * 24}px)` }}>
      <motion.div style={{ scale: s }} className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-8 md:rounded-[60px] md:p-10">
        <p className="font-light uppercase tracking-widest text-[#D7E2EA]/60">{cat}</p>
        <h3 className="hero-heading mb-6 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-none">{title}</h3>
        {children}
      </motion.div>
    </div>
  );
}
export default function Stack() {
  const ex = marsChain.blockExplorers?.default.url;
  return (
    <section id="nodes" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none">Network</h2>
        <Card i={0} n={3} cat="Agents" title="Agents"><p className="text-lg font-light">No agents registered yet.</p></Card>
        <Card i={1} n={3} cat="Compute" title="Nodes"><p className="text-lg font-light">No nodes registered yet.</p></Card>
        <Card i={2} n={3} cat="Build" title="Build on MARS">
          {rows([["Chain", marsChain.name], ["Chain ID", String(marsChain.id)], ["MARS token", MARS_TOKEN]])}
          {ex && <a className="ghost mt-6 inline-block" href={ex} target="_blank" rel="noreferrer">Open explorer</a>}
        </Card>
      </div>
    </section>
  );
}
