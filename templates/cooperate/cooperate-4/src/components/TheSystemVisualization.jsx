import React, { useState } from "react";
import { Cpu, Cloud, Database, Shield, Users, Layers, Activity, Radio } from "lucide-react";

export const TheSystemVisualization = () => {
  const [selectedNode, setSelectedNode] = useState(0);

  const nodes = [
    { name: "DATA CORE", icon: Database, metric: "24.6M Events/s", desc: "Real-time streaming ingestion and lakehouse governance." },
    { name: "AI FABRIC", icon: Cpu, metric: "14ms Inference", desc: "Distributed vector compute and autonomous reasoning agents." },
    { name: "SOVEREIGN CLOUD", icon: Cloud, metric: "99.999% SLA", desc: "Active-active multi-region Kubernetes execution mesh." },
    { name: "APPLICATIONS", icon: Layers, metric: "128 Services", desc: "Composable microfrontends and sub-second transactional APIs." },
    { name: "SECURITY SENTINEL", icon: Shield, metric: "Zero-Trust", desc: "Kernel-level eBPF monitoring and cryptographic validation." },
    { name: "GLOBAL CONSUMERS", icon: Users, metric: "50M+ Endpoints", desc: "Geo-distributed edge workers delivering ultra-low latency." }
  ];

  const current = nodes[selectedNode];

  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="mono-tag" style={{ marginBottom: "1rem" }}>
            <span className="mono-tag-accent">07 //</span> CONTROL MESH
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
            THE SYSTEM.
          </h2>
        </div>

        {/* Futuristic Enterprise Control Terminal */}
        <div className="the-system-terminal">
          {/* Status Top Ribbon */}
          <div className="system-status-ribbon">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--accent-electric)" }}>
              <Radio size={16} />
              <span>LIVE ORCHESTRATION LAYER ONLINE</span>
            </div>
            <div style={{ display: "flex", gap: "2.5rem", color: "var(--text-dim)" }}>
              <span>99.98% SYSTEM AVAILABILITY</span>
              <span>24.6M DATA EVENTS</span>
              <span>128 ACTIVE SERVICES</span>
            </div>
          </div>

          {/* Connected Grid Nodes */}
          <div className="system-nodes-canvas">
            {nodes.map((n, idx) => {
              const Icon = n.icon;
              const isActive = selectedNode === idx;

              return (
                <div
                  key={n.name}
                  className={`system-node-pill ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedNode(idx)}
                >
                  <Icon size={24} color={isActive ? "var(--accent-electric)" : "var(--text-dim)"} style={{ margin: "0 auto 0.75rem auto" }} />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: "700", color: "#fff" }}>
                    {n.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent-electric)", marginTop: "4px" }}>
                    {n.metric}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Diagnostic Detail */}
          <div style={{ background: "#0b0c10", border: "1px solid var(--grid-line)", padding: "2rem", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "center" }}>
            <div>
              <div className="mono-tag" style={{ color: "var(--accent-electric)", marginBottom: "0.5rem" }}>
                [NODE TELEMETRY] — {current.name}
              </div>
              <p style={{ color: "var(--text-white)", fontSize: "1.1rem", lineHeight: "1.6" }}>
                {current.desc}
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "2rem" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)" }}>LATENCY PROFILE</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: "800", color: "var(--accent-electric)" }}>SUB-20MS</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-dim)" }}>ENCRYPTION</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>AES-256-GCM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
