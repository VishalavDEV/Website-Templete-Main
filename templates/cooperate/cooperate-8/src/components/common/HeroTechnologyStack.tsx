import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Cloud,
  Database,
  Shield,
  Layers,
  Terminal,
  Activity,
  CheckCircle,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

export interface HeroTechnologyStackProps {
  className?: string;
}

interface TechItem {
  id: string;
  name: string;
  category: "ai" | "cloud" | "data" | "security" | "systems" | "frontend";
  categoryLabel: string;
  role: string;
  metric: string;
  metricLabel: string;
  status: "ACTIVE" | "SYNCD" | "OPTIMAL" | "NOMINAL";
  highlight?: string;
}

const technologies: TechItem[] = [
  {
    id: "pytorch-vllm",
    name: "PyTorch + vLLM",
    category: "ai",
    categoryLabel: "AI & ML",
    role: "Quantized model fine-tuning & PagedAttention inference",
    metric: "1.12 ms",
    metricLabel: "Inference Latency",
    status: "OPTIMAL",
    highlight: "Multi-GPU"
  },
  {
    id: "langgraph",
    name: "LangGraph",
    category: "ai",
    categoryLabel: "AI & ML",
    role: "Autonomous multi-agent cyclic graph orchestration",
    metric: "100%",
    metricLabel: "Deterministic Gate",
    status: "ACTIVE",
    highlight: "Agentic"
  },
  {
    id: "kubernetes",
    name: "Kubernetes + eBPF",
    category: "cloud",
    categoryLabel: "Cloud & Infra",
    role: "Kernel-level observability & active-active scheduling",
    metric: "99.999%",
    metricLabel: "Uptime SLA",
    status: "OPTIMAL",
    highlight: "Multi-Region"
  },
  {
    id: "terraform",
    name: "Terraform / OpenTofu",
    category: "cloud",
    categoryLabel: "Cloud & Infra",
    role: "Immutable declarative multi-cloud infrastructure as code",
    metric: "100%",
    metricLabel: "GitOps Automated",
    status: "SYNCD",
    highlight: "IaC"
  },
  {
    id: "kafka",
    name: "Apache Kafka",
    category: "data",
    categoryLabel: "Data Fabric",
    role: "Distributed petabyte event log & ingestion backbone",
    metric: "4.8M/s",
    metricLabel: "Event Throughput",
    status: "ACTIVE",
    highlight: "Streaming"
  },
  {
    id: "snowflake-iceberg",
    name: "Snowflake + Iceberg",
    category: "data",
    categoryLabel: "Data Fabric",
    role: "Unified open table format lakehouse & elastic SQL",
    metric: "Sub-sec",
    metricLabel: "Query Latency",
    status: "OPTIMAL",
    highlight: "ACID Lakehouse"
  },
  {
    id: "vault",
    name: "HashiCorp Vault",
    category: "security",
    categoryLabel: "Zero-Trust",
    role: "Dynamic short-lived credentials & KMS envelope encryption",
    metric: "Zero",
    metricLabel: "Static Secrets",
    status: "NOMINAL",
    highlight: "mTLS"
  },
  {
    id: "istio",
    name: "Istio Service Mesh",
    category: "security",
    categoryLabel: "Zero-Trust",
    role: "Cryptographic SPIRE identity & mutual TLS traffic encryption",
    metric: "AES-256",
    metricLabel: "End-to-End",
    status: "OPTIMAL",
    highlight: "Microsegmentation"
  },
  {
    id: "rust-go",
    name: "Rust & Go",
    category: "systems",
    categoryLabel: "Systems Core",
    role: "Memory-safe high-concurrency microservices & network workers",
    metric: "< 2.4MB",
    metricLabel: "Memory Footprint",
    status: "ACTIVE",
    highlight: "Low-Latency"
  },
  {
    id: "react-next",
    name: "React 19 & Next.js",
    category: "frontend",
    categoryLabel: "Frontend / Edge",
    role: "Concurrent rendering, server components & edge hydration",
    metric: "< 78ms",
    metricLabel: "Global FCP",
    status: "OPTIMAL",
    highlight: "Edge UI"
  },
  {
    id: "qdrant",
    name: "Qdrant / Milvus",
    category: "ai",
    categoryLabel: "AI & ML",
    role: "Billion-scale dense semantic vector search & GraphRAG",
    metric: "2.8 ms",
    metricLabel: "Vector Retrieval",
    status: "OPTIMAL",
    highlight: "HNSW Graph"
  },
  {
    id: "postgresql",
    name: "PostgreSQL 16",
    category: "data",
    categoryLabel: "Data Fabric",
    role: "Mission-critical ACID transactional core with pgvector",
    metric: "Zero-Loss",
    metricLabel: "Durability SLA",
    status: "ACTIVE",
    highlight: "WAL Replicated"
  }
];

const telemetryLogs = [
  "✓ [AI_CORE] vLLM inference batch executed on 8x NVIDIA H100 (1.18ms)",
  "✓ [DATA_FABRIC] Kafka partition cluster synced: 4.82M msg/sec nominal",
  "✓ [ZERO_TRUST] SPIRE mTLS certificate rotated via HashiCorp Vault",
  "✓ [CLOUD_MESH] Kubernetes multi-region cluster health: 100% nominal",
  "✓ [EDGE_NODE] Sub-80ms First Contentful Paint verified across 24 edge POPS",
  "✓ [LAKEHOUSE] Iceberg snapshot committed with ACID consistency guarantee"
];

export const HeroTechnologyStack: React.FC<HeroTechnologyStackProps> = ({
  className = ""
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeTechId, setActiveTechId] = useState<string>("pytorch-vllm");
  const [currentLogIdx, setCurrentLogIdx] = useState(0);

  // Rotate telemetry logs
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogIdx((prev) => (prev + 1) % telemetryLogs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { id: "all", label: "All Tech" },
    { id: "ai", label: "AI / ML" },
    { id: "cloud", label: "Cloud / Infra" },
    { id: "data", label: "Data Fabric" },
    { id: "security", label: "Zero-Trust" },
    { id: "systems", label: "Systems" }
  ];

  const filteredTechnologies =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  const activeTech =
    technologies.find((t) => t.id === activeTechId) || technologies[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ai":
        return <Cpu className="w-3.5 h-3.5 text-[#0A2E23]" />;
      case "cloud":
        return <Cloud className="w-3.5 h-3.5 text-[#0A2E23]" />;
      case "data":
        return <Database className="w-3.5 h-3.5 text-[#0A2E23]" />;
      case "security":
        return <Shield className="w-3.5 h-3.5 text-[#0A2E23]" />;
      case "systems":
        return <Terminal className="w-3.5 h-3.5 text-[#0A2E23]" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-[#0A2E23]" />;
    }
  };

  return (
    <div
      className={`relative w-full h-full min-h-[440px] sm:min-h-[500px] rounded-xs border border-[#E6E2D8] bg-[#FAF8F5] overflow-hidden flex flex-col justify-between p-4 sm:p-5 shadow-xs ${className}`}
    >
      {/* Top Telemetry Header */}
      <div className="relative z-10 space-y-3 border-b border-[#E6E2D8]/80 pb-3.5">
        <div className="flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider text-[#5E636E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCF34A] border border-[#0A2E23] animate-pulse" />
            <span className="font-bold text-[#0A2E23]">TECHNOLOGY_STACK_LIVE</span>
            <span className="text-[#C4BFB2]">/</span>
            <span className="hidden sm:inline text-[#7C828D]">PRODUCTION ARCHITECTURE</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[10px] text-[#7C828D]">SLA: <strong>99.999%</strong></span>
            <span className="px-1.5 py-0.5 bg-[#0A2E23] text-[#CCF34A] text-[9px] font-bold rounded-xs">
              ACTIVE STACK
            </span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-[10px] font-mono-tech uppercase tracking-wider rounded-xs border transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-[#0A2E23] text-[#FAF8F5] border-[#0A2E23] font-bold"
                    : "bg-white text-[#5E636E] border-[#E6E2D8] hover:border-[#0A2E23]/40 hover:text-[#121316]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Center Area: Interactive Tech Grid & Active Inspector */}
      <div className="relative z-10 py-3 grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start my-auto">
        {/* Technology Cards Grid (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-2 gap-2">
          {filteredTechnologies.slice(0, 6).map((tech) => {
            const isHovered = tech.id === activeTechId;
            return (
              <button
                key={tech.id}
                type="button"
                onClick={() => setActiveTechId(tech.id)}
                onMouseEnter={() => setActiveTechId(tech.id)}
                className={`text-left p-2.5 rounded-xs border transition-all duration-200 cursor-pointer relative group ${
                  isHovered
                    ? "bg-[#0A2E23] text-[#FAF8F5] border-[#0A2E23] shadow-xs"
                    : "bg-white text-[#121316] border-[#E6E2D8] hover:border-[#0A2E23]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div
                    className={`p-1 rounded-xs ${
                      isHovered ? "bg-[#CCF34A] text-[#0A2E23]" : "bg-[#F5F2EB] text-[#0A2E23]"
                    }`}
                  >
                    {getCategoryIcon(tech.category)}
                  </div>
                  <span
                    className={`font-mono-tech text-[9px] px-1 py-0.2 rounded-xs uppercase ${
                      isHovered
                        ? "bg-white/15 text-[#CCF34A]"
                        : "bg-[#FAF8F5] text-[#7C828D] border border-[#E6E2D8]"
                    }`}
                  >
                    {tech.highlight}
                  </span>
                </div>

                <div className="font-mono-tech text-xs font-bold truncate">
                  {tech.name}
                </div>

                <div
                  className={`text-[10px] font-mono-tech truncate mt-0.5 ${
                    isHovered ? "text-[#C4BFB2]" : "text-[#7C828D]"
                  }`}
                >
                  {tech.metricLabel}: <strong className={isHovered ? "text-[#CCF34A]" : "text-[#0A2E23]"}>{tech.metric}</strong>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tech Inspector HUD (5 cols) */}
        <div className="md:col-span-5 bg-white border border-[#E6E2D8] p-3.5 rounded-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-2">
            <div className="flex items-center gap-1.5 font-mono-tech text-[10px] text-[#0A2E23] font-bold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23]" />
              <span>INSPECTION HUD</span>
            </div>
            <span className="px-1.5 py-0.2 bg-[#FAF8F5] border border-[#E6E2D8] font-mono-tech text-[9px] text-[#0A2E23] rounded-xs font-bold">
              {activeTech.status}
            </span>
          </div>

          <div>
            <div className="font-mono-tech text-[9px] uppercase text-[#7C828D]">
              {activeTech.categoryLabel}
            </div>
            <h4 className="font-serif-editorial text-lg text-[#121316] font-normal leading-tight">
              {activeTech.name}
            </h4>
          </div>

          <p className="text-[11px] text-[#5E636E] leading-relaxed">
            {activeTech.role}
          </p>

          <div className="pt-2 border-t border-[#E6E2D8] grid grid-cols-2 gap-2 font-mono-tech text-[10px]">
            <div className="p-1.5 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs">
              <div className="text-[9px] text-[#7C828D] uppercase">{activeTech.metricLabel}</div>
              <div className="font-bold text-[#0A2E23] text-xs">{activeTech.metric}</div>
            </div>
            <div className="p-1.5 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs">
              <div className="text-[9px] text-[#7C828D] uppercase">Execution</div>
              <div className="font-bold text-[#121316] text-xs">Sovereign VPC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Telemetry Event Bus Log Ticker */}
      <div className="relative z-10 bg-[#111315] text-[#FAF8F5] border border-[#24282F] px-3 py-2 rounded-xs font-mono-tech text-[10px] flex items-center justify-between gap-2 overflow-hidden">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal className="w-3.5 h-3.5 text-[#CCF34A] shrink-0" />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentLogIdx}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-[#E6E2D8] truncate"
            >
              {telemetryLogs[currentLogIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="text-[9px] text-[#CCF34A] uppercase shrink-0 font-bold hidden sm:inline">
          LIVE BUS
        </span>
      </div>

      {/* Bottom Technical Grid Indicator */}
      <div className="relative z-10 flex items-center justify-between font-mono-tech text-[9px] uppercase tracking-widest text-[#7C828D] pt-2 border-t border-[#E6E2D8]/80 mt-1">
        <span>ECOSYSTEM: 6 LAYERS // 36 PROTOCOLS</span>
        <Link
          to="/capabilities"
          className="inline-flex items-center gap-1 text-[#0A2E23] hover:underline font-bold"
        >
          <span>FULL ARCHITECTURE</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
