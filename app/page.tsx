import { Check } from "lucide-react";
import Hero from "@/components/Hero";
import Wallet from "@/components/Wallet";
import Live from "@/components/Live";
import VideoBg from "@/components/VideoBg";
import Code from "@/components/Code";
import Market from "@/components/Market";
import { FadeIn } from "@/components/Reveal";
import { stats, offer, flow, life, events, agents, loop, ops, rewards, old, mars, privacy, stack } from "@/lib/data";

const VAR = ["up", "zoom", "left", "right", "flip"] as const;
const H = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => <FadeIn wheel={false}><h2 className={`h2 ${dark ? "" : "hero-heading"}`} style={dark ? { color: "#0C0C0C" } : undefined}>{children}</h2></FadeIn>;
const Ico = ({ I }: { I: React.ComponentType<{ size?: number }> }) => <span className="ico"><I size={22} /></span>;
const Pnl = ({ title, children }: { title: string; children: React.ReactNode }) => <FadeIn className="card"><h3 className="!mt-0 mb-4">{title}</h3>{children}</FadeIn>;

function NetworkGraph() {
  const pts: [number, number, string][] = [[170, 75, "GPU / 24GB"], [820, 80, "CPU / 32C"], [130, 290, "GPU / 48GB"], [850, 295, "GPU / 80GB"], [350, 335, "EDGE / 8C"], [680, 330, "CPU / 64C"]];
  return (
    <svg viewBox="0 0 1000 380" className="w-full rounded-[28px] border border-[#D7E2EA]/15 bg-[#0C0C0C]/60" role="img" aria-label="Network of compute nodes around the MARS core">
      {pts.map(([x, y, l], i) => (<g key={i}>
        <line x1="500" y1="190" x2={x} y2={y} stroke="#BE4C00" strokeOpacity=".45" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2s" repeatCount="indefinite" /></line>
        <circle r="4" fill="#fff"><animateMotion dur={`${2 + i * 0.35}s`} repeatCount="indefinite" path={`M500 190 L${x} ${y}`} /></circle>
        <circle cx={x} cy={y} r="9" fill="#D7E2EA"><animate attributeName="r" values="7;12;7" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" /></circle>
        <text x={x} y={y + 30} textAnchor="middle" fill="#D7E2EA" fillOpacity=".7" fontSize="15">{l}</text>
      </g>))}
      <circle cx="500" cy="190" r="62" fill="url(#c)" /><text x="500" y="196" textAnchor="middle" fill="#fff" fontWeight="900" fontSize="26">MARS</text>
      <defs><radialGradient id="c"><stop offset="0" stopColor="#BE4C00" /><stop offset="1" stopColor="#18011F" /></radialGradient></defs>
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      <VideoBg />
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 bg-gradient-to-b from-black/60 to-transparent px-5 py-4 sm:px-8">
        <a href="#top" className="text-2xl font-black tracking-tight">MARS<span className="text-[#BE4C00]">.</span></a>
        <div className="hidden gap-8 font-medium uppercase tracking-wider md:flex">
          {[["Network", "#network"], ["Agents", "#agents"], ["Nodes", "#nodes"], ["Mechanism", "#mechanism"], ["Docs", "#docs"]].map(([t, h]) => <a key={t} href={h} className="hover:opacity-70">{t}</a>)}
        </div>
        <Wallet />
      </nav>
      <Hero />

      <section className="sec !pt-10"><div className="wrap grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map(([n, l], i) => <FadeIn key={l} delay={i * 0.1} className="card text-center"><div className="hero-heading text-[clamp(2rem,5vw,3.5rem)] font-black">{n}</div><div className="text-sm font-light opacity-70">{l}</div></FadeIn>)}
      </div></section>

      <section id="offer" className="sec light rounded-t-[40px] bg-white text-[#0C0C0C] sm:rounded-t-[50px] md:rounded-t-[60px]"><div className="wrap">
        <H dark>Infrastructure for agents that actually do work.</H>
        <div className="grid3">{offer.map(([I, t, d, tag], i) => <FadeIn key={t} delay={i * 0.08} variant={VAR[i % 5]} className="card"><Ico I={I} /><h3>{t}</h3><p>{d}</p><span className="tag">{tag}</span></FadeIn>)}</div>
      </div></section>

      <section id="mechanism" className="sec relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"><div className="wrap">
        <H>From intent to verified compute.</H>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{flow.map(([I, t, d], i) => <FadeIn key={t} delay={i * 0.08} variant={VAR[i % 5]} className="card"><Ico I={I} /><h3 className="!text-lg">{t}</h3><p className="text-sm">{d}</p></FadeIn>)}</div>
        <div className="split">
          <Pnl title="Task lifecycle">{life.map(([t, d, s], i) => <div key={t} className="step"><span className="ico !h-9 !w-9"><Check size={16} /></span><div className="flex-1"><b>{t}</b><small>{d}</small></div><span className={`pill ${i === 3 ? "ok" : ""}`}>{s}</span></div>)}</Pnl>
          <Pnl title="Protocol event stream"><Code>{events.map(([t, c, m]) => <span key={t}><span className={c}>[{t}]</span> {m}{"\n"}</span>)}</Code></Pnl>
        </div>
      </div></section>

      <section id="network" className="sec !pb-0"><div className="wrap">
        <H>A compute market in motion.</H><FadeIn><NetworkGraph /></FadeIn>
      </div><Live /></section>

      <section id="agents" className="sec light rounded-t-[40px] bg-white text-[#0C0C0C] sm:rounded-t-[50px] md:rounded-t-[60px]"><div className="wrap">
        <H dark>Agents become the users of compute.</H>
        <div className="grid3">{agents.map(([I, t, d, tag], i) => <FadeIn key={t} delay={i * 0.08} variant={VAR[i % 5]} className="card"><Ico I={I} /><h3>{t}</h3><p>{d}</p><span className="tag">{tag}</span></FadeIn>)}</div>
      </div></section>

      <section className="sec"><div className="wrap">
        <H>Autonomous execution loop.</H>
        <div className="split">
          <FadeIn><Code className="h-full"><span className="g">AGENT / MARKET_ANALYST</span>{`\n\nobservation = "volatility spike"\nconfidence = 0.91\n\n`}<span className="c">decision</span>{` = "investigate"\n`}<span className="c">task</span>{` = create_compute_task({\n  operation: "correlation",\n  datasets: ["AAPL","NVDA","MSFT"],\n  privacy: "fragmented",\n  budget: "24 MARS"\n})\n\n`}<span className="g">{"-> task #92831 submitted"}</span>{`\n\nawait result()\n`}<span className="g">{"-> anomaly_score: 0.83"}</span>{`\n\nnext_action = "deep_analysis"`}</Code></FadeIn>
          <Pnl title="Agent decision loop">{loop.map(([t, d]) => <div key={t} className="step"><div><b>{t}</b><small>{d}</small></div></div>)}</Pnl>
        </div>
      </div></section>

      <section id="nodes" className="sec light rounded-t-[40px] bg-white text-[#0C0C0C] sm:rounded-t-[50px] md:rounded-t-[60px]"><div className="wrap"><H dark>Hire the right node.</H><Market /></div></section>

      <section className="sec"><div className="wrap">
        <H>Turn idle hardware into productive infrastructure.</H>
        <div className="split">
          <Pnl title="Operator dashboard"><table><thead><tr><th>Metric</th><th>Current</th><th>Status</th></tr></thead><tbody>{ops.map(([m, v, s]) => <tr key={m}><td>{m}</td><td>{v}</td><td><span className="pill ok">{s}</span></td></tr>)}</tbody></table></Pnl>
          <Pnl title="What affects rewards?">{rewards.map(([I, t, d]) => <div key={t} className="step"><Ico I={I} /><div><b>{t}</b><small>{d}</small></div></div>)}</Pnl>
        </div>
      </div></section>

      <section className="sec light rounded-t-[40px] bg-white text-[#0C0C0C] sm:rounded-t-[50px] md:rounded-t-[60px]"><div className="wrap">
        <H dark>Different by design.</H>
        <div className="split">
          <FadeIn variant="left" className="card"><h3 className="!mt-0">Traditional compute</h3>{old.map((t) => <p key={t} className="mt-3">{t}</p>)}</FadeIn>
          <FadeIn variant="right" className="card !border-[#BE4C00]"><h3 className="!mt-0">MARS network</h3>{mars.map((t) => <p key={t} className="mt-3 flex gap-2"><Check className="mt-1 shrink-0 text-emerald-600" size={18} />{t}</p>)}</FadeIn>
        </div>
      </div></section>

      <section id="security" className="sec"><div className="wrap">
        <H>Compute without exposing the whole picture.</H>
        <div className="grid3">{privacy.map(([I, t, d], i) => <FadeIn key={t} delay={i * 0.1} variant={VAR[i % 5]} className="card"><Ico I={I} /><h3>{t}</h3><p>{d}</p></FadeIn>)}</div>
      </div></section>

      <section id="docs" className="sec"><div className="wrap">
        <H>Made for builders.</H>
        <div className="split">
          <Pnl title="Developer stack"><Code>{stack.map(([k, v]) => <span key={k}><span className="g">{k.padEnd(10)}</span>{v}{"\n"}</span>)}</Code></Pnl>
          <Pnl title="Example agent request"><Code>{`{\n  `}<span className="c">"agent"</span>{`: "market-analyst",\n  `}<span className="c">"operation"</span>{`: "correlation",\n  `}<span className="c">"nodes"</span>{`: 7,\n  `}<span className="c">"privacy"</span>{`: "fragmented",\n  `}<span className="c">"budget"</span>{`: "24 MARS",\n  `}<span className="c">"verification"</span>{`: "majority"\n}\n\n`}<span className="g">status: accepted</span></Code></Pnl>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <FadeIn className="rounded-[40px] border-2 border-[#D7E2EA] aurora p-8 text-center sm:rounded-[60px] sm:p-16">
          <h2 className="h2 hero-heading !mb-8">Give agents a network to think on.</h2>
          <div className="flex flex-wrap justify-center gap-4"><Wallet /><a className="ghost" href="#nodes">Browse nodes</a></div>
        </FadeIn>
      </div></section>

      <footer className="px-6 py-10 text-center text-sm font-light opacity-60"><b className="font-semibold">MARS.</b> Autonomous Compute Network. Built on Robinhood Chain.</footer>
    </main>
  );
}
