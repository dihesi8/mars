"use client";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const VIDEO = "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5fc5651c-3b5d-4171-b507-87f7e635d1b4.mp4";
/** Sharp over the hero, then blurs and dims as you scroll past it. */
export default function VideoBg() {
  const v = useRef<HTMLVideoElement>(null); const [h, setH] = useState(800);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [h * 0.3, h * 0.95], [0, 18], { clamp: true });
  const dim = useTransform(scrollY, [0, h * 0.95], [0.3, 0.8], { clamp: true });
  const filter = useMotionTemplate`blur(${blur}px)`;
  useEffect(() => {
    setH(innerHeight); const r = () => setH(innerHeight); addEventListener("resize", r);
    const e = v.current; if (e) { e.muted = true; if (!matchMedia("(prefers-reduced-motion: reduce)").matches) e.play().catch(() => {}); }
    return () => removeEventListener("resize", r);
  }, []);
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#0C0C0C]">
      <motion.video ref={v} src={VIDEO} muted loop playsInline autoPlay preload="auto" style={{ filter }} className="h-full w-full scale-110 object-cover" />
      <motion.div style={{ opacity: dim }} className="absolute inset-0 bg-[#0C0C0C]" />
    </div>
  );
}
