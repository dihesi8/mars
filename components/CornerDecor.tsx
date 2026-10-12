"use client";
import { motion, useReducedMotion } from "framer-motion";
const defs = <defs><linearGradient id="dg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#B600A8" /><stop offset=".55" stopColor="#7621B0" /><stop offset="1" stopColor="#BE4C00" /></linearGradient></defs>;
const shapes = [
  <svg key="a" viewBox="0 0 100 100">{defs}<circle cx="50" cy="50" r="26" fill="url(#dg)" /><ellipse cx="50" cy="50" rx="46" ry="14" fill="none" stroke="#D7E2EA" strokeWidth="2.5" transform="rotate(-24 50 50)" strokeOpacity=".8" /></svg>,
  <svg key="b" viewBox="0 0 100 100">{defs}<polygon points="50,6 90,28 90,72 50,94 10,72 10,28" fill="none" stroke="url(#dg)" strokeWidth="5" /><polygon points="50,30 70,41 70,63 50,74 30,63 30,41" fill="url(#dg)" fillOpacity=".7" /><circle cx="50" cy="52" r="5" fill="#D7E2EA" /></svg>,
  <svg key="c" viewBox="0 0 100 100">{defs}{[24, 40, 56, 72].map((p) => <g key={p} stroke="#D7E2EA" strokeOpacity=".7" strokeWidth="3"><line x1={p} y1="6" x2={p} y2="20" /><line x1={p} y1="80" x2={p} y2="94" /><line x1="6" y1={p} x2="20" y2={p} /><line x1="80" y1={p} x2="94" y2={p} /></g>)}<rect x="20" y="20" width="60" height="60" rx="12" fill="url(#dg)" /><rect x="36" y="36" width="28" height="28" rx="6" fill="#0C0C0C" fillOpacity=".6" /></svg>,
  <svg key="d" viewBox="0 0 100 100">{defs}<circle cx="50" cy="50" r="40" fill="none" stroke="#D7E2EA" strokeOpacity=".5" strokeDasharray="3 6" /><circle cx="50" cy="50" r="22" fill="url(#dg)" /><circle cx="50" cy="10" r="6" fill="#BE4C00"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" /></circle></svg>,
];
const pos = ["left-[3%] top-[6%]", "right-[3%] top-[10%]", "left-[4%] bottom-[8%]", "right-[4%] bottom-[6%]"];
export default function CornerDecor({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {shapes.map((s, i) => (
        <motion.div key={i} className={`absolute w-14 sm:w-20 md:w-28 ${pos[i]}`} initial={{ opacity: 0, scale: 0.3, rotate: i % 2 ? 40 : -40 }} whileInView={{ opacity: 0.9, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 70, damping: 12, delay: i * 0.15 }}>
          <motion.div animate={reduce ? undefined : { y: [0, -16, 0], rotate: [0, i % 2 ? -6 : 6, 0] }} transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}>{s}</motion.div>
        </motion.div>
      ))}
    </div>
  );
}
