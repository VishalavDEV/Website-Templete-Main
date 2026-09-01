import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const VerticalServiceIndex = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const services = [
    {
      num: "01",
      title: "AI & AUTOMATION",
      desc: "Deterministic agentic pipelines, custom private foundation models, and autonomous process orchestration.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      path: "/services"
    },
    {
      num: "02",
      title: "DIGITAL PRODUCTS",
      desc: "High-concurrency platforms, sub-millisecond execution engines, and consumer-grade enterprise ergonomics.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      path: "/services"
    },
    {
      num: "03",
      title: "CLOUD ENGINEERING",
      desc: "Active-active multi-region Kubernetes topologies, sovereign cloud partitions, and FinOps unit governance.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      path: "/services"
    },
    {
      num: "04",
      title: "DATA & INTELLIGENCE",
      desc: "Real-time Apache Iceberg lakehouses, streaming event fabrics, and high-dimensional ML feature stores.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      path: "/services"
    },
    {
      num: "05",
      title: "CYBERSECURITY",
      desc: "Zero-Trust Network Access (ZTNA), eBPF kernel-level runtime protection, and continuous automated audits.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      path: "/services"
    },
    {
      num: "06",
      title: "DIGITAL TRANSFORMATION",
      desc: "Comprehensive legacy monolith refactoring, composable enterprise architectures, and agile transformation.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      path: "/services"
    }
  ];

  return (
    <section className="screen-section" style={{ minHeight: "100vh" }}>
      <div className="editorial-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem" }}>
          <div>
            <div className="mono-tag" style={{ marginBottom: "1rem" }}>
              <span className="mono-tag-accent">03 //</span> CAPABILITIES INDEX
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              DISCIPLINES BUILT AROUND OUTCOMES.
            </h2>
          </div>

          <Link to="/services" className="arch-btn arch-btn-outline" style={{ textDecoration: "none" }}>
            <span>Complete Matrix</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Full-Screen Vertical Service Rows */}
        <div className="service-index-table">
          {services.map((srv, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <Link
                to={srv.path}
                key={srv.num}
                className={`service-index-row ${isHovered ? "active" : ""}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                style={{ textDecoration: "none" }}
              >
                <div className="srv-idx-num">{srv.num}</div>
                <div className="srv-idx-title">{srv.title}</div>
                <div className="srv-idx-desc">{srv.desc}</div>
                <div className="srv-idx-arrow">
                  <ArrowUpRight size={28} />
                </div>

                {/* Floating Preview Image on Hover */}
                <div className="service-hover-reveal">
                  <img src={srv.img} alt={srv.title} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
