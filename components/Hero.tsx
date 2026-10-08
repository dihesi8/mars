import { FadeIn } from "./Reveal";
import { marsChain } from "@/lib/chain";
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center">
      <svg className="pointer-events-none absolute left-1/2 top-1/2 w-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 opacity-40" viewBox="-200 -200 400 400" aria-hidden>
        <g className="spin" style={{ transformOrigin: "center" }}><circle r="190" fill="none" stroke="#D7E2EA" strokeOpacity=".35" strokeDasharray="2 8" /><circle cx="190" r="6" fill="#BE4C00" /><circle cx="-134" cy="134" r="4" fill="#B600A8" /></g>
        <g className="spin2" style={{ transformOrigin: "center" }}><circle r="140" fill="none" stroke="#D7E2EA" strokeOpacity=".35" /><circle cy="-140" r="5" fill="#D7E2EA" /><circle cx="99" cy="99" r="4" fill="#BE4C00" /></g>
        <circle r="70" fill="url(#g)"><animate attributeName="r" values="66;76;66" dur="4s" repeatCount="indefinite" /></circle><defs><radialGradient id="g"><stop offset="0" stopColor="#BE4C00" /><stop offset="1" stopColor="#18011F" /></radialGradient></defs>
      </svg>
      <div className="relative">
        <FadeIn wheel={false} delay={0.15}><h1 className="hero-heading text-[clamp(4.5rem,22vw,22rem)] font-black uppercase leading-none tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,.55)]">MARS</h1></FadeIn>
        <FadeIn wheel={false} delay={0.35}><p className="mx-auto max-w-2xl text-[clamp(1.1rem,2.4vw,1.8rem)] font-light [text-shadow:0_2px_20px_rgba(0,0,0,.7)]">Compute for the <b className="font-semibold">autonomous</b> economy. Built on Robinhood Chain.</p></FadeIn>
        <FadeIn delay={0.5} className="mt-8 flex flex-wrap justify-center gap-4"><a className="cta" href="#agents">Explore agents</a><a className="ghost" href="#nodes">Hire compute</a></FadeIn>
        <FadeIn delay={0.65} className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 font-light [text-shadow:0_2px_16px_rgba(0,0,0,.7)]"><span><b className="font-semibold">1,284</b> active nodes</span><span><b className="font-semibold">8.42M</b> tasks processed</span><span><b className="font-semibold">99.42%</b> verified execution</span><span><b className="font-semibold">{marsChain.id}</b> chain ID</span></FadeIn>
      </div>
    </section>
  );
}
