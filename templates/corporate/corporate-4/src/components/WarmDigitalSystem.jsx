import React, { useState } from "react";
import { Users, Database, Cpu, Layers, Activity, TrendingUp } from "lucide-react";

export const WarmDigitalSystem = () => {
  const [activeNode, setActiveNode] = useState(0);

  const systemNodes = [
    {
      title: "PEOPLE",
      icon: Users,
      meta: "HUMAN EXPERIENCE",
      desc: "Intuitive, high-density interfaces designed to eliminate cognitive fatigue and empower operators."
    },
    {
      title: "DATA",
      icon: Database,
      meta: "LAKEHOUSE FABRIC",
      desc: "Unified real-time streaming pipelines with automated data lineage and deterministic governance."
    },
    {
      title: "AI",
      icon: Cpu,
      meta: "AUTONOMOUS REASONING",
      desc: "Domain-fine-tuned models and multi-agent workflows executing with zero-hallucination guardrails."
    },
    {
      title: "PRODUCTS",
      icon: Layers,
      meta: "TRANSACTION ENGINES",
      desc: "Sub-millisecond API networks, composable microfrontends, and global multi-region edge caching."
    },
    {
      title: "OPERATIONS",
      icon: Activity,
      meta: "ACTIVE-ACTIVE MESH",
      desc: "Kubernetes orchestration across sovereign cloud hardware with sub-second failover guarantees."
    },
    {
      title: "BUSINESS",
      icon: TrendingUp,
      meta: "MEASURABLE EBITDA",
      desc: "Quantifiable operational velocity, cloud cost optimization, and enduring competitive moats."
    }
  ];

  const current = systemNodes[activeNode];

  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div className="warm-system-canvas-box">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)", marginBottom: "0.75rem" }}>
                [CONNECTED ENTERPRISE ARCHITECTURE]
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.8rem)", color: "var(--text-cream)", marginBottom: "0.5rem" }}>
                The Connected System.
              </h2>
              <p style={{ color: "var(--text-cream-muted)", fontSize: "1.05rem", maxWidth: "620px" }}>
                A holistic digital operating fabric uniting human operators, autonomous AI,
                and high-throughput distributed infrastructure.
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)" }}>SYSTEM STATUS</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#fff", fontWeight: "700" }}>99.999% HEALTH</div>
            </div>
          </div>

          {/* Connected Grid Nodes */}
          <div className="system-nodes-warm-grid">
            {systemNodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = activeNode === idx;

              return (
                <div
                  key={node.title}
                  className={`system-node-warm-pill ${isActive ? "active" : ""}`}
                  onClick={() => setActiveNode(idx)}
                >
                  <Icon size={28} style={{ margin: "0 auto 1rem auto" }} />
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: "700" }}>
                    {node.title}
                  </div>
                  <div className="editorial-tag" style={{ fontSize: "0.65rem", marginTop: "4px" }}>
                    {node.meta}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Diagnostic Detail Box */}
          <div style={{ marginTop: "2.5rem", background: "var(--bg-espresso-card)", borderRadius: "20px", border: "1px solid var(--border-cream-thin)", padding: "2rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)", marginBottom: "0.5rem" }}>
                INSPECTING {current.title} TIER
              </div>
              <p style={{ color: "var(--text-cream)", fontSize: "1.15rem", lineHeight: "1.6", maxWidth: "700px" }}>
                {current.desc}
              </p>
            </div>

            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <div className="editorial-tag" style={{ color: "var(--text-cream-dim)" }}>LATENCY</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--accent-chartreuse)", fontWeight: "700" }}>
                  SUB-20MS
                </div>
              </div>
              <div>
                <div className="editorial-tag" style={{ color: "var(--text-cream-dim)" }}>RELIABILITY</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "#fff", fontWeight: "700" }}>
                  100% PROVEN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
