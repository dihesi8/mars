"use client";
import { useEffect } from "react";
/** Card spotlight and button magnet only (no custom cursor). Mouse devices only. */
export default function Interactions() {
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mv = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest?.(".card") as HTMLElement | null;
      if (card) { const r = card.getBoundingClientRect(); card.style.setProperty("--mx", `${e.clientX - r.left}px`); card.style.setProperty("--my", `${e.clientY - r.top}px`); }
      document.querySelectorAll<HTMLElement>(".cta,.ghost").forEach((b) => {
        const r = b.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        b.style.translate = Math.hypot(dx, dy) < 70 + r.width / 2 ? `${dx * 0.25}px ${dy * 0.3}px` : "0 0";
      });
    };
    addEventListener("pointermove", mv);
    return () => removeEventListener("pointermove", mv);
  }, []);
  return null;
}
