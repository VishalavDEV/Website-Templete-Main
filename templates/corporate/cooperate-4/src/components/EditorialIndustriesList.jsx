import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const EditorialIndustriesList = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const industries = [
    {
      name: "Finance & Capital Markets",
      tag: "ALGORITHMIC CLEARING · $45B+ DAILY SETTLEMENT",
      desc: "Sub-millisecond trade execution engines, automated Basel IV compliance, and private sovereign banking cloud partitions."
    },
    {
      name: "Healthcare & Genomics",
      tag: "CLINICAL AI · 14M+ SECURE RECORDS",
      desc: "Federated machine learning across research cohorts with zero data leakage and cryptographic HIPAA governance."
    },
    {
      name: "Retail & Digital Commerce",
      tag: "HEADLESS MESH · 120K ORDERS/MIN",
      desc: "Edge-cached checkout pipelines and real-time omni-channel stock synchronization built for global peak velocity."
    },
    {
      name: "Manufacturing & Industrial",
      tag: "INDUSTRY 4.0 · -38% UNPLANNED DOWNTIME",
      desc: "Real-time edge computer vision QA and IoT digital twins synchronizing planetary shop floor operations."
    },
    {
      name: "Logistics & Global Supply",
      tag: "AUTONOMOUS ROUTING · 3.2M SHIPMENTS",
      desc: "Dynamic multi-modal freight route recalculation adapting to customs clearance and weather constraints in real-time."
    },
    {
      name: "Education & Knowledge Tech",
      tag: "ADAPTIVE AI · 2.8M ACTIVE LEARNERS",
      desc: "Scalable interactive knowledge fabrics with personalized learning pacing and verifiable digital credentialing."
    }
  ];

  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div style={{ marginBottom: "4rem" }}>
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            SECTORS
          </div>
          <h2 className="section-serif-heading">
            Tailored for regulated and high-volume industries.
          </h2>
        </div>

        {/* Large Editorial List */}
        <div>
          {industries.map((ind, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={ind.name}
                className="editorial-industry-item"
                onMouseEnter={() => setHoveredIdx(idx)}
              >
                <div>
                  <h3 className="industry-huge-name">
                    {ind.name}
                  </h3>

                  {isHovered && (
                    <div style={{ marginTop: "1rem", animation: "fadeIn 0.3s ease" }}>
                      <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.5rem" }}>
                        {ind.tag}
                      </div>
                      <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.05rem", maxWidth: "650px", lineHeight: "1.6" }}>
                        {ind.desc}
                      </p>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Link to="/industries" className="pill-btn pill-btn-outline" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}>
                    <span>EXPLORE</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
