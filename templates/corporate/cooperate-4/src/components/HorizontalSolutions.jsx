import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export const HorizontalSolutions = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const solutions = [
    {
      num: "01",
      title: "INTELLIGENT ENTERPRISE",
      meta: "AGENTIC WORKFLOWS // AI GOVERNANCE",
      desc: "Deterministic multi-agent execution layers replacing brittle human workflows across corporate ledgers.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      title: "CONNECTED COMMERCE",
      meta: "HEADLESS MESH // 120K ORDERS/MIN",
      desc: "Global edge-cached transaction engines architected for sub-50ms checkout during peak worldwide flash sales.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      title: "DIGITAL OPERATIONS",
      meta: "EVENT STREAMING // SUB-MS EXECUTION",
      desc: "Real-time Kafka and Rust high-throughput pipelines orchestrating complex manufacturing and logistics meshes.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      title: "CLOUD ECOSYSTEMS",
      meta: "ACTIVE-ACTIVE // 99.999% SLA",
      desc: "Multi-region sovereign Kubernetes clusters with zero-downtime automated disaster failover across 3 continents.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "05",
      title: "DATA INTELLIGENCE",
      meta: "APACHE ICEBERG // REAL-TIME LAKEHOUSE",
      desc: "Unified analytical fabrics combining sub-second operational dashboards with heavy machine learning training.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem" }}>
          <div>
            <div className="mono-tag" style={{ marginBottom: "1rem" }}>
              <span className="mono-tag-accent">04 //</span> ENTERPRISE FRAMEWORKS
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              PROPRIETARY BLUEPRINTS.
            </h2>
          </div>

          {/* Minimal Controls */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="circle-btn" onClick={() => scroll("left")} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <button className="circle-btn" onClick={() => scroll("right")} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="solutions-horizontal-wrapper" ref={scrollRef}>
        <div className="editorial-container-bleed">
          <div className="solutions-horizontal-track">
            {solutions.map((sol) => (
              <div key={sol.num} className="solution-panel-card">
                <img src={sol.img} alt={sol.title} className="solution-panel-img" />

                <div>
                  <div className="sol-panel-num">{sol.num}</div>
                  <div className="mono-tag" style={{ marginTop: "1rem" }}>{sol.meta}</div>
                  <h3 className="sol-panel-title">{sol.title}</h3>
                </div>

                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                    {sol.desc}
                  </p>

                  <Link to="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-electric)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.15em" }}>
                    <span>VIEW BLUEPRINT</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
