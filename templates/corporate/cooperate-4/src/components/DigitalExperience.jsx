import React, { useState, useEffect } from "react";
import {
  Cpu,
  Cloud,
  Database,
  Network,
  Shield,
  Activity,
  Zap,
  Server,
  Radio,
  CheckCircle
} from "lucide-react";

export const DigitalExperience = () => {
  const nodes = [
    {
      id: "ai-core",
      name: "Autonomous AI Engine",
      icon: Cpu,
      status: "OPTIMAL (99.8%)",
      latency: "14ms",
      throughput: "14,200 req/sec",
      description: "Distributed LLM inference and agentic workflow orchestration with deterministic safety gates.",
      bars: [45, 78, 62, 90, 84, 96, 75, 88, 92, 98, 85, 91]
    },
    {
      id: "cloud-infra",
      name: "Hybrid Cloud Mesh",
      icon: Cloud,
      status: "ACTIVE-ACTIVE",
      latency: "28ms",
      throughput: "4.8 Gbps Egress",
      description: "Multi-region Kubernetes clusters with automated GitOps deployment and sub-second failover.",
      bars: [70, 65, 80, 85, 90, 75, 70, 80, 85, 92, 88, 94]
    },
    {
      id: "data-lake",
      name: "Real-time Lakehouse",
      icon: Database,
      status: "SYNCED (1.4M ev/s)",
      latency: "8ms",
      throughput: "1.4M Events/sec",
      description: "Apache Iceberg & ClickHouse high-concurrency analytical fabric with real-time vector embeddings.",
      bars: [60, 72, 85, 68, 94, 88, 92, 78, 85, 90, 96, 99]
    },
    {
      id: "global-mesh",
      name: "Global Edge Network",
      icon: Network,
      status: "GLOBAL (48 POPs)",
      latency: "18ms",
      throughput: "38M Queries/hr",
      description: "Edge worker routing with geo-distributed state synchronization and smart cache invalidation.",
      bars: [80, 85, 90, 88, 92, 95, 89, 94, 96, 98, 93, 97]
    },
    {
      id: "security-gate",
      name: "Zero-Trust Sentinel",
      icon: Shield,
      status: "ARMED & VERIFIED",
      latency: "< 2ms",
      throughput: "100% Inspected",
      description: "eBPF kernel-level runtime security, cryptographic token validation, and automated compliance auditing.",
      bars: [95, 98, 96, 99, 97, 98, 100, 99, 98, 100, 99, 100]
    }
  ];

  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const activeNode = nodes[activeNodeIndex];

  // Auto-cycle nodes gently if not interacted with recently
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <section className="section-padding experience-section">
      <div className="container">
        <div className="section-header center">
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            DIGITAL SYSTEMS ARCHITECTURE
          </div>
          <h2>From complexity to clarity.</h2>
          <p className="lead">
            An interactive representation of the interconnected digital fabric we
            architect for modern enterprises. Click any node to inspect real-time
            system telemetry.
          </p>
        </div>

        {/* Interactive Matrix Showcase Container */}
        <div className="interactive-matrix-frame">
          {/* Top Telemetry Status Bar */}
          <div className="telemetry-status-bar">
            <div className="live-indicator">
              <span className="live-dot"></span>
              <span>LIVE TELEMETRY: GLOBAL MESH ONLINE</span>
            </div>

            <div style={{ display: "flex", gap: "2rem", color: "var(--text-dim)" }}>
              <span>SYSTEM HEALTH: 99.999%</span>
              <span>GLOBAL REGIONS: 24 ACTIVE</span>
              <span>SECURITY PROTOCOL: ZTNA-v4</span>
            </div>
          </div>

          {/* Node Topology Selectors */}
          <div className="nodes-topology-grid">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = idx === activeNodeIndex;

              return (
                <div
                  key={node.id}
                  className={`node-selector-card ${isSelected ? "active" : ""}`}
                  onClick={() => setActiveNodeIndex(idx)}
                >
                  <Icon className="node-icon" size={24} />
                  <div className="node-name">{node.name}</div>
                  <div className="node-status-text">{node.status}</div>
                </div>
              );
            })}
          </div>

          {/* Live Node Telemetry Display Panel */}
          <div className="telemetry-display-panel">
            {/* Left: Detailed Diagnostic Description */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-cyan)" }}>
                  [ACTIVE NODE INSPECTOR]
                </span>
                <span style={{ fontSize: "0.75rem", background: "rgba(0,242,195,0.1)", color: "#00f2c3", padding: "2px 8px", borderRadius: "4px" }}>
                  STATUS: {activeNode.status}
                </span>
              </div>

              <h3 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>{activeNode.name}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                {activeNode.description}
              </p>

              {/* Simulated Real-Time Graph */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)", marginBottom: "4px" }}>
                  <span>DYNAMIC LOAD TELEMETRY (100ms SAMPLING)</span>
                  <span>PEAK CAP: 99.4%</span>
                </div>
                <div className="telemetry-graph-mock">
                  {activeNode.bars.map((bar, bIdx) => (
                    <div
                      key={bIdx}
                      className="telemetry-bar"
                      style={{ height: `${bar}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Performance Telemetry Readouts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", borderLeft: "1px solid var(--border-subtle)", paddingLeft: "1.5rem" }}>
              <div style={{ background: "rgba(18,22,32,0.6)", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Round-Trip Latency
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: "800", color: "var(--accent-cyan)" }}>
                  {activeNode.latency}
                </div>
              </div>

              <div style={{ background: "rgba(18,22,32,0.6)", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Current System Throughput
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: "800", color: "#ffffff" }}>
                  {activeNode.throughput}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <CheckCircle size={14} color="#00f2c3" />
                <span>Zero Packet Loss Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
