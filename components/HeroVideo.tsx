"use client";
import { useEffect, useRef } from "react";
const VIDEO = "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5fc5651c-3b5d-4171-b507-87f7e635d1b4.mp4";
/** Hero-only background video: plays once on load, then rests on its last frame. */
export default function HeroVideo() {
  const v = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const e = v.current; if (!e) return;
    e.muted = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { e.pause(); return; }
    e.currentTime = 0; e.play().catch(() => {});
  }, []);
  return (
    <div aria-hidden className="absolute inset-0">
      <video ref={v} src={VIDEO} muted playsInline autoPlay preload="auto" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0C0C0C]/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0C0C0C]" />
    </div>
  );
}
