import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const AccordionServices = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      num: "01",
      title: "DIGITAL STRATEGY",
      desc: "Re-architecting monolithic enterprise operations into composable, high-velocity digital operating models.",
      deliverables: ["Enterprise Modernization Blueprint", "Composable API Mesh", "Digital Maturity Audits"],
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      title: "AI & INTELLIGENCE",
      desc: "Deterministic agentic pipelines, custom private foundation models, and autonomous operational intelligence.",
      deliverables: ["Deterministic Multi-Agent Loops", "Private Foundation Model Fine-Tuning", "Vector Intelligence Hubs"],
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      title: "PRODUCT ENGINEERING",
      desc: "Sub-millisecond execution engines, high-concurrency microfrontends, and mission-critical consumer-grade platforms.",
      deliverables: ["Distributed Systems in Go/Rust", "Sub-50ms API Architecture", "Design Systems & Ergonomics"],
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      title: "DATA SYSTEMS",
      desc: "Real-time Apache Iceberg lakehouses, streaming event fabrics, and high-dimensional ML feature stores.",
      deliverables: ["Real-time Lakehouse Architecture", "Streaming ETL Pipelines", "Automated Data Lineage"],
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "05",
      title: "CLOUD & INFRASTRUCTURE",
      desc: "Active-active multi-region Kubernetes topologies, sovereign cloud partitions, and FinOps cost governance.",
      deliverables: ["Automated Multi-Region GitOps", "Sub-second Disaster Failover", "Cloud Unit Economics Optimization"],
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "06",
      title: "SECURITY",
      desc: "Zero-Trust Network Access (ZTNA), eBPF kernel-level runtime protection, and continuous automated audits.",
      deliverables: ["Cryptographic Zero-Trust Mesh", "Kernel-Level Runtime Defense", "SOC2 / ISO27001 Readiness"],
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const toggleRow = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem" }}>
          <div>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              CAPABILITIES
            </div>
            <h2 className="section-serif-heading">
              End-to-end disciplines built for scale.
            </h2>
          </div>

          <Link to="/services" className="pill-btn pill-btn-outline">
            <span>FULL CAPABILITIES</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Large Accordion List */}
        <div className="services-accordion-list">
          {services.map((srv, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={srv.num}
                className={`service-accordion-row ${isOpen ? "open" : ""}`}
                onClick={() => toggleRow(idx)}
              >
                <div className="service-row-header">
                  <div className="service-row-title-wrap">
                    <span className="service-row-number">{srv.num}</span>
                    <span className="service-row-title">{srv.title}</span>
                  </div>

                  <span className="service-toggle-symbol">+</span>
                </div>

                {isOpen && (
                  <div className="service-row-drawer">
                    <div>
                      <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "2rem", color: "var(--text-cream)" }}>
                        {srv.desc}
                      </p>

                      <div className="editorial-tag" style={{ color: "var(--accent-chartreuse)", marginBottom: "1rem" }}>
                        CORE DELIVERABLES
                      </div>

                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {srv.deliverables.map((item, dIdx) => (
                          <li key={dIdx} style={{ fontSize: "0.95rem", color: "var(--text-cream)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ color: "var(--accent-chartreuse)" }}>→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-drawer-img">
                      <img src={srv.img} alt={srv.title} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
