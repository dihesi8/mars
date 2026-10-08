"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
export default function Cursor() {
  const x = useMotionValue(-200), y = useMotionValue(-200);
  const rx = useSpring(x, { stiffness: 450, damping: 38 }), ry = useSpring(y, { stiffness: 450, damping: 38 });
  const gx = useSpring(x, { stiffness: 70, damping: 18 }), gy = useSpring(y, { stiffness: 70, damping: 18 });
  const [on, setOn] = useState(false), [mode, setMode] = useState("idle"), [down, setDown] = useState(false), [vis, setVis] = useState(true);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const mv = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY); setVis(true);
      const t = e.target as HTMLElement; const card = t.closest?.(".card") as HTMLElement | null;
      if (card) { const r = card.getBoundingClientRect(); card.style.setProperty("--mx", `${e.clientX - r.left}px`); card.style.setProperty("--my", `${e.clientY - r.top}px`); }
      setMode(t.closest?.("a,button,select,input,label") ? "link" : card ? "card" : "idle");
      document.querySelectorAll<HTMLElement>(".cta,.ghost").forEach((b) => {
        const r = b.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        b.style.translate = Math.hypot(dx, dy) < 70 + r.width / 2 ? `${dx * 0.25}px ${dy * 0.3}px` : "0 0";
      });
    };
    const d = () => setDown(true), u = () => setDown(false), out = (e: MouseEvent) => !e.relatedTarget && setVis(false);
    addEventListener("pointermove", mv); addEventListener("pointerdown", d); addEventListener("pointerup", u); document.addEventListener("mouseout", out);
    return () => { removeEventListener("pointermove", mv); removeEventListener("pointerdown", d); removeEventListener("pointerup", u); document.removeEventListener("mouseout", out); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  const s = down ? 0.7 : mode === "link" ? 2 : mode === "card" ? 1.5 : 1;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] transition-opacity" style={{ opacity: vis ? 1 : 0 }}>
      <motion.div className="fixed left-0 top-0 h-72 w-72 rounded-full" style={{ x: gx, y: gy, marginLeft: -144, marginTop: -144, background: "radial-gradient(circle,rgba(190,76,0,.16),transparent 65%)" }} />
      <motion.div className="fixed left-0 top-0 h-9 w-9 rounded-full border border-[#D7E2EA] mix-blend-difference" style={{ x: rx, y: ry, marginLeft: -18, marginTop: -18 }} animate={{ scale: s, backgroundColor: mode === "link" ? "rgba(215,226,234,.9)" : "rgba(215,226,234,0)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
      <motion.div className="fixed left-0 top-0 h-2 w-2 rounded-full bg-[#BE4C00]" style={{ x, y, marginLeft: -4, marginTop: -4 }} />
    </div>
  );
}
