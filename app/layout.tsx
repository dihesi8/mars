import "./globals.css";
import { Kanit } from "next/font/google";
import type { Metadata } from "next";
import Interactions from "@/components/Interactions";
import Providers from "@/components/Providers";
const kanit = Kanit({ subsets: ["latin"], weight: ["300","400","500","600","700","800","900"], variable: "--font-kanit" });
export const metadata: Metadata = { title: "MARS | Compute for the autonomous economy", description: "MARS is a compute network for autonomous AI agents, built on Robinhood Chain." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={kanit.variable}><body><Providers>{children}<Interactions /></Providers></body></html>;
}
