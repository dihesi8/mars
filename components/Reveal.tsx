"use client";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
const V = { up: { y: 30 }, zoom: { scale: 0.85 }, left: { x: -60 }, right: { x: 60 }, flip: { rotate: -6, y: 40 } };
export type Variant = keyof typeof V;
export function FadeIn({ children, delay = 0, variant = "up", className = "", wheel = true }: { children: React.ReactNode; delay?: number; variant?: Variant; className?: string; wheel?: boolean }) {
  const inner = <motion.div className={`${className}${wheel ? " h-full" : ""}`} initial={{ opacity: 0, ...V[variant] }} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }} viewport={{ once: true, margin: "50px" }} transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}>{children}</motion.div>;
  return wheel ? <Wheel className="h-full" range={[-4, 4]} radius={200}>{inner}</Wheel> : inner;
}
/** Rotating-wheel scroll motion: scrolling down turns clockwise, scrolling up turns anti-clockwise. */
export function Wheel({ children, className, range = [-8, 8], offset = ["start end", "end start"], radius = 250 }: { children: React.ReactNode; className?: string; range?: [number, number]; offset?: string[]; radius?: number }) {
  const ref = useRef<HTMLDivElement>(null); const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: offset as any });
  const r = useSpring(useTransform(p, [0, 1], range), { stiffness: 90, damping: 22, mass: 0.6 });
  return <motion.div ref={ref} className={className} style={reduce ? undefined : { rotate: r, transformOrigin: `50% ${radius}%`, willChange: "transform" }}>{children}</motion.div>;
}
