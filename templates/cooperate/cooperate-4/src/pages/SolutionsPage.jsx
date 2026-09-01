import React, { useState } from "react";
import { Cpu, Cloud, Database, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const SolutionsPage = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState("All");

  const solutions = [
    {
      id: "ai-orchestration",
      title: "Autonomous AI Agent Orchestration Fabric",
      category: "Enterprise AI",
      icon: Cpu,
      tagline: "Moving from conversational toys to mission-critical deterministic agent workflows.",
      overview: "An enterprise-grade orchestration layer that binds proprietary foundational LLMs with vector knowledge graphs, transactional APIs, and human-in-the-loop governance cockpits.",
      pillars: [
        "Deterministic Safety Guardrails & Zero Hallucinations",
        "Multi-Agent Consensus Protocols & State Sync",
        "Zero Data Leakage Sovereign VPC Isolation",
        "Full Audit Provenance & Cryptographic Logging"
      ],
      techStack: ["LangGraph", "Rust", "vLLM", "Qdrant", "OpenTelemetry"],
      stats: "94% autonomous workflow resolution with 0 hallucination leaks.",
      speed: "< 45ms P99 latency",
      readiness: "Production Tier-1"
    },
    {
      id: "sovereign-cloud",
      title: "Sovereign Multi-Cloud & GitOps Infrastructure",
      category: "Cloud Infrastructure",
      icon: Cloud,
      tagline: "Active-active multi-region Kubernetes clusters with automated cryptographic governance.",
      overview: "Eliminate cloud vendor lock-in while slashing egress bills. Our GitOps multi-cloud framework delivers automated continuous delivery across AWS, GCP, Azure, and on-premise sovereign hardware.",
      pillars: [
        "Automated Sub-2s Multi-Region Disaster Failover",
        "Zero-Trust Service Mesh (Istio / eBPF Kernel Defense)",
        "Granular FinOps Cloud Spend Telemetry & Auto-Scaling",
        "Declarative Infrastructure as Code (Terraform / Pulumi)"
      ],
      techStack: ["Kubernetes", "Istio", "eBPF", "Terraform", "ArgoCD"],
      stats: "45% reduction in annual cloud spend with 99.999% uptime.",
      speed: "< 2s failover",
      readiness: "Multi-Cloud Certified"
    },
    {
      id: "streaming-engine",
      title: "Sub-Millisecond High-Throughput Streaming Engine",
      category: "Distributed Systems",
      icon: Zap,
      tagline: "Processing millions of events per second with deterministic microsecond precision.",
      overview: "Architected in Rust and Go, this streaming engine powers high-frequency settlement, telemetry ingestion, and instant fraud detection across planetary networks.",
      pillars: [
        "Kafka & Apache Flink Real-Time Stream Ingestion",
        "Lock-Free Ring Buffers & Zero-Copy Serialization",
        "Distributed In-Memory Sharded Cache Topologies",
        "Sub-50ms Global P99 Worldwide Edge Propagation"
      ],
      techStack: ["Rust", "Apache Kafka", "Flink", "gRPC", "Redis Enterprise"],
      stats: "12M+ concurrent queries processed with 0 queue backpressure.",
      speed: "18µs execution",
      readiness: "Ultra-Low Latency"
    },
    {
      id: "data-lakehouse",
      title: "Unified Real-Time Lakehouse & Vector Analytics",
      category: "Data Systems",
      icon: Database,
      tagline: "Single source of truth combining operational analytics with real-time ML feature stores.",
      overview: "Break down chaotic enterprise data silos into a modern Apache Iceberg lakehouse that serves both sub-second executive dashboards and heavy machine learning model training.",
      pillars: [
        "Automated Streaming ETL Pipelines & Schema Evolution",
        "Semantic Data Governance & Row-Level RBAC Access",
        "Real-Time High-Dimensional Vector Embeddings",
        "Auditor-Ready Data Lineage & Immutable Snapshots"
      ],
      techStack: ["Apache Iceberg", "DuckDB", "ClickHouse", "dbt", "Milvus"],
      stats: "10x query acceleration over legacy data warehouses.",
      speed: "Sub-second SQL",
      readiness: "SOC2 Compliant"
    }
  ];

  const categories = ["All", "Enterprise AI", "Cloud Infrastructure", "Distributed Systems", "Data Systems"];

  const filteredSolutions = activeTab === "All"
    ? solutions
    : solutions.filter((s) => s.category === activeTab);

  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            PROPRIETARY SOLUTION BLUEPRINTS
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            Production-ready architectural frameworks engineered to accelerate enterprise deployment.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "760px", lineHeight: "1.75", marginBottom: "2.5rem" }}>
            Rather than starting from a blank page, KINESIS GLOBAL deploys battle-tested architectural
            blueprints that cut transformation timelines in half while maintaining sovereign control,
            deterministic reliability, and bespoke customizability.
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat)}
                className={`pill-btn ${activeTab === cat ? "pill-btn-dark" : "pill-btn-outline"}`}
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.78rem" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Stack */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;

              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  style={{
                    backgroundColor: "var(--bg-sand-light)",
                    border: "2px solid var(--bg-espresso)",
                    borderRadius: "24px",
                    padding: "3rem",
                    boxShadow: "10px 10px 0 var(--bg-terracotta)"
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "3.5rem" }}>
                    {/* Left Details */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ padding: "6px 10px", backgroundColor: "var(--bg-espresso)", color: "var(--accent-chartreuse)", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                          <Icon size={16} />
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase" }}>
                            {sol.category}
                          </span>
                        </div>
                        <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)", fontSize: "0.7rem" }}>
                          BLUEPRINT #{sol.id.toUpperCase()}
                        </span>
                      </div>

                      <h2 style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.4rem)", marginBottom: "0.75rem", color: "var(--text-espresso)" }}>
                        {sol.title}
                      </h2>

                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--bg-terracotta)", fontWeight: "600", marginBottom: "1.25rem" }}>
                        {sol.tagline}
                      </p>

                      <p style={{ color: "var(--text-espresso-muted)", lineHeight: "1.8", marginBottom: "2rem", fontSize: "1.05rem" }}>
                        {sol.overview}
                      </p>

                      <div style={{ marginBottom: "2rem" }}>
                        <div className="editorial-tag" style={{ color: "var(--text-espresso)", marginBottom: "0.75rem" }}>
                          ARCHITECTURAL PILLARS
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                          {sol.pillars.map((pil, pIdx) => (
                            <div key={pIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", color: "var(--text-espresso)" }}>
                              <CheckCircle2 size={16} color="var(--bg-terracotta)" style={{ marginTop: "3px", flexShrink: 0 }} />
                              <span>{pil}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginBottom: "0.5rem" }}>
                          RECOMMENDED INFRASTRUCTURE STACK
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                          {sol.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.75rem",
                                padding: "4px 10px",
                                backgroundColor: "var(--bg-sand-dark)",
                                borderRadius: "6px",
                                color: "var(--text-espresso)"
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Outcomes Box */}
                    <div
                      style={{
                        backgroundColor: "var(--bg-espresso)",
                        color: "var(--text-cream)",
                        borderRadius: "18px",
                        padding: "2.25rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)", marginBottom: "1.25rem" }}>
                          IMPACT BENCHMARK & TELEMETRY
                        </div>

                        <div style={{ marginBottom: "2rem" }}>
                          <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.7rem" }}>
                            VERIFIED ENTERPRISE RESULT
                          </div>
                          <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "#fff", fontWeight: "600", marginTop: "6px", lineHeight: "1.4" }}>
                            {sol.stats}
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", borderTop: "1px solid var(--border-cream-thin)", paddingTop: "1.25rem", marginBottom: "2rem" }}>
                          <div>
                            <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.68rem" }}>
                              EXECUTION SPEED
                            </div>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "var(--accent-chartreuse)", fontWeight: "700", marginTop: "4px" }}>
                              {sol.speed}
                            </div>
                          </div>
                          <div>
                            <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.68rem" }}>
                              GOVERNANCE
                            </div>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "#fff", fontWeight: "700", marginTop: "4px" }}>
                              {sol.readiness}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          className="pill-btn pill-btn-chartreuse"
                          style={{ width: "100%", justifyContent: "center" }}
                          onClick={onOpenContact}
                        >
                          <span>REQUEST BLUEPRINT BRIEF</span>
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="editorial-section-sm bg-sand-dark" style={{ borderTop: "2px solid var(--bg-espresso)", marginTop: "4rem" }}>
        <div className="editorial-wrap" style={{ textAlign: "center" }}>
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            CUSTOM ARCHITECTURE
          </div>
          <h2 className="section-serif-heading" style={{ marginBottom: "1.25rem" }}>
            Need a bespoke enterprise blueprint?
          </h2>
          <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.1rem", maxWidth: "680px", margin: "0 auto 2rem auto" }}>
            Our Senior Architects co-design customized multi-cloud and sovereign AI infrastructures tailored to your precise regulatory and computational requirements.
          </p>
          <button className="pill-btn pill-btn-dark" onClick={onOpenContact}>
            <span>SCHEDULE ARCHITECTURE CONSULTATION</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

