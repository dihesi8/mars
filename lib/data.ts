import { Cpu, Lock, Bot, ShieldCheck, Store, Link2, TrendingUp, ShieldAlert, Database, Brain, BadgeCheck, Workflow, Split, KeyRound, ListChecks, Server, Gauge, Layers } from "lucide-react";
export const stats = [["1,284", "Active compute nodes"], ["8.42M", "Completed workloads"], ["42.8M", "MARS distributed"], ["99.42%", "Execution success"]];
export const offer = [
  [Cpu, "Distributed Compute", "Send workloads to independent nodes instead of depending on a single compute provider.", "GPU · CPU · Memory"],
  [Lock, "Private Workloads", "Fragmented and encrypted task payloads keep raw inputs away from individual workers.", "Fragmented data"],
  [Bot, "Agent Runtime", "Agents discover capacity, submit tasks, monitor execution and use results to trigger their next action.", "Autonomous"],
  [ShieldCheck, "Verifiable Results", "Multiple workers independently execute a workload and produce commitments for result comparison.", "Result consensus"],
  [Store, "Compute Marketplace", "Browse node capacity by GPU, RAM, throughput, reputation, region and MARS price.", "Hire a node"],
  [Link2, "Onchain Settlement", "Robinhood Chain handles task commitments, payment records, staking and protocol coordination.", "Robinhood Chain"],
] as const;
export const flow = [[Bot, "Agent", "Defines objective, budget and privacy requirements."], [Lock, "Encrypt", "Payload is prepared and split into computational fragments."], [Server, "Dispatch", "Matching engine assigns suitable nodes."], [ShieldCheck, "Verify", "Results are compared and committed as proof data."], [Link2, "Settle", "Workers receive MARS according to completed work."]] as const;
export const life = [["Task created", "Agent requests volatility analysis", "Ready"], ["Fragments assigned", "7 compatible nodes selected", "Live"], ["Execution", "Workers process assigned fragments", "87%"], ["Result verified", "Consensus threshold reached", "Done"]];
export const events: [string, string, string][] = [["10:42:31", "g", "task.created #92831"], ["10:42:33", "g", "fragments.generated 09"], ["10:42:35", "c", "node.assigned MARS-7F82A"], ["10:42:37", "c", "node.assigned MARS-19B42"], ["10:42:39", "c", "node.result.commit"], ["10:42:41", "g", "verification.pass 7/7"], ["10:42:42", "g", "reward.settle 14.80 MARS"], ["10:42:43", "m", "agent.result.received"]];
export const agents = [
  [TrendingUp, "Market Analyst", "Detect anomalies, compare datasets and request distributed calculations.", "Active · 2,841 runs"],
  [ShieldAlert, "Risk Agent", "Runs portfolio and scenario calculations using distributed compute capacity.", "Active · 1,992 runs"],
  [Database, "Data Agent", "Cleans, transforms and summarizes large datasets before downstream analysis.", "Active · 5,482 runs"],
  [Brain, "Inference Agent", "Routes model inference requests to GPU nodes based on memory and latency.", "GPU required"],
  [BadgeCheck, "Verification Agent", "Checks worker outputs and flags inconsistent computation results.", "Verification"],
  [Workflow, "Custom Workflow", "Build a multi-step agent that chains several compute jobs together.", "Build your own"],
] as const;
export const loop = [["Observe", "Read available signals and previous results."], ["Decide", "Select the next operation and compute budget."], ["Delegate", "Send private computation to the MARS network."], ["Act", "Use verified output to trigger the next task."]];
export const nodes = [
  ["MARS-GPU-24", "Quantum Bay / US-East", "3.80", [["GPU", "RTX 4090 · 24GB"], ["CPU", "16 Core"], ["RAM", "64 GB"], ["Latency", "21 ms"]]],
  ["MARS-GPU-48", "Atlas Compute / EU-West", "6.90", [["GPU", "A6000 · 48GB"], ["CPU", "24 Core"], ["RAM", "128 GB"], ["Latency", "34 ms"]]],
  ["MARS-GPU-80", "Vertex Labs / AP-South", "11.40", [["GPU", "A100 · 80GB"], ["CPU", "32 Core"], ["RAM", "256 GB"], ["Latency", "48 ms"]]],
  ["MARS-CPU-32", "CoreGrid / EU-Central", "2.10", [["CPU", "32 Core EPYC"], ["RAM", "128 GB"], ["Storage", "2 TB NVMe"], ["Latency", "29 ms"]]],
  ["MARS-EDGE-08", "Lagos Edge / Africa", "0.85", [["CPU", "8 Core"], ["RAM", "32 GB"], ["Storage", "1 TB NVMe"], ["Latency", "18 ms"]]],
  ["MARS-BATCH-64", "DataForge / US-West", "4.60", [["CPU", "64 Core EPYC"], ["RAM", "512 GB"], ["Storage", "8 TB NVMe"], ["Latency", "27 ms"]]],
] as const;
export const ops = [["Reputation", "98.7", "Excellent"], ["Tasks completed", "4,821", "+82 today"], ["Success rate", "99.42%", "Healthy"], ["Earned", "18,492 MARS", "Lifetime"]];
export const rewards = [[Gauge, "Compute resources", "More capable hardware can serve higher-value jobs."], [Server, "Reliability", "Consistent uptime improves eligibility."], [BadgeCheck, "Verification", "Accurate results preserve node reputation."]] as const;
export const old = ["Centralized provider owns the execution environment.", "Pricing and capacity are controlled by one marketplace.", "Agent has limited native economic coordination.", "Trust is mostly placed in the provider."];
export const mars = ["Independent nodes compete for workloads.", "Agent budgets can route jobs automatically.", "Execution can be independently verified.", "Onchain settlement and reputation layer."];
export const privacy = [[Split, "Fragmentation", "Workloads can be divided into smaller computational units before dispatch."], [KeyRound, "Encryption", "Payloads are represented as encrypted task material in the workflow."], [ListChecks, "Verification", "Independent results can be compared before a final result is accepted."]] as const;
export const stack = [["CHAIN", "Robinhood Chain / EVM"], ["TOKEN", "$MARS"], ["CONTRACTS", "Solidity"], ["FRONTEND", "React / Next.js"], ["WEB3", "viem / wagmi"], ["WORKERS", "Node.js / Python"], ["AGENTS", "Tool-calling runtime"], ["DATA", "Fragment + encrypt + commit"]];
export const Layer = Layers;
