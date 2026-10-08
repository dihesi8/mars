"use client";
import { useEffect, useRef } from "react";
/** Code panel whose text is typed out from scratch when it scrolls into view. */
export default function Code({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLPreElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.style.visibility = "visible"; return; }
    const nodes: Text[] = []; const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n: Node | null;
    while ((n = w.nextNode())) { const t = n as Text & { __o?: string }; t.__o ??= t.data; nodes.push(t); }
    const full = nodes.map((t) => (t as Text & { __o?: string }).__o as string), total = full.reduce((a, s) => a + s.length, 0);
    el.style.minHeight = `${el.offsetHeight}px`;
    nodes.forEach((t) => (t.data = "")); el.style.visibility = "visible";
    let raf = 0, started = false;
    const run = () => {
      el.classList.add("typing"); const t0 = performance.now();
      const tick = (t: number) => {
        const c = Math.min(total, Math.floor(((t - t0) / 1000) * 110)); let left = c;
        nodes.forEach((nd, i) => { nd.data = full[i].slice(0, Math.max(0, Math.min(full[i].length, left))); left -= full[i].length; });
        if (c < total) raf = requestAnimationFrame(tick); else el.classList.remove("typing");
      }; raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) { started = true; io.disconnect(); run(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return <pre ref={ref} style={{ visibility: "hidden" }} className={`code ${className}`}>{children}</pre>;
}
