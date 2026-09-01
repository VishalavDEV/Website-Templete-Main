import React from "react";
import { companyData } from "../data/companyData";
import { Globe, ArrowUpRight } from "lucide-react";

export const AboutPage = ({ onOpenContact }) => {
  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            ABOUT KINESIS GLOBAL
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            We engineer the invisible digital fabric that powers modern industry.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "720px", lineHeight: "1.75", marginBottom: "2rem" }}>
            Founded in 2014, KINESIS GLOBAL combines elite distributed systems engineering,
            advanced artificial intelligence research, and executive management consulting.
          </p>
          <button className="pill-btn pill-btn-dark" onClick={onOpenContact}>
            <span>INITIATE STRATEGIC BRIEF</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* Editorial Story */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "4.5rem", alignItems: "center" }}>
            <div>
              <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
                OUR PHILOSOPHY
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", marginBottom: "1.5rem", color: "var(--text-espresso)" }}>
                Uncompromising engineering rigor in an era of superficial noise.
              </h2>
              <p style={{ color: "var(--text-espresso-muted)", marginBottom: "1.25rem", lineHeight: "1.8", fontSize: "1.05rem" }}>
                Modern enterprises cannot afford fragile prototypes or brittle cloud architectures.
                When millions of users and billions in capital depend on your software, failure is
                not a permissible outcome.
              </p>
              <p style={{ color: "var(--text-espresso-muted)", lineHeight: "1.8", fontSize: "1.05rem" }}>
                At KINESIS GLOBAL, we reject one-size-fits-all templates. We build bespoke deterministic
                systems, sovereign AI clusters, and resilient data lakehouses engineered to withstand
                the next decade of exponential technological disruption.
              </p>
            </div>

            <div
              style={{
                width: "100%",
                height: "460px",
                borderRadius: "24px 80px 24px 80px",
                overflow: "hidden",
                border: "2px solid var(--bg-espresso)",
                boxShadow: "14px 14px 0 var(--bg-terracotta)"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Leadership"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              EXECUTIVE BOARD
            </div>
            <h2 className="section-serif-heading">
              Pioneers in distributed intelligence.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {companyData.leadership.map((leader, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-sand-light)",
                  border: "2px solid var(--bg-espresso)",
                  borderRadius: "18px",
                  padding: "2.25rem",
                  boxShadow: "6px 6px 0 var(--bg-terracotta)"
                }}
              >
                <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.5rem" }}>
                  {leader.specialty}
                </div>
                <h3 style={{ fontSize: "1.45rem", color: "var(--text-espresso)", marginBottom: "0.25rem" }}>
                  {leader.name}
                </h3>
                <div style={{ fontSize: "0.9rem", color: "var(--text-espresso-dim)", fontFamily: "var(--font-mono)", marginBottom: "1.25rem" }}>
                  {leader.role}
                </div>
                <p style={{ fontSize: "0.95rem", color: "var(--text-espresso-muted)", lineHeight: "1.65" }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Hubs */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              GLOBAL HUBS
            </div>
            <h2 className="section-serif-heading">
              Four strategic engineering centers.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {companyData.offices.map((office, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-sand-light)",
                  border: "2px solid var(--bg-espresso)",
                  borderRadius: "16px",
                  padding: "2rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--bg-terracotta)", marginBottom: "0.75rem" }}>
                  <Globe size={18} />
                  <span className="editorial-tag" style={{ fontSize: "0.7rem" }}>
                    {office.region}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-espresso)", marginBottom: "0.5rem" }}>
                  {office.city}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-espresso-muted)", marginBottom: "1rem" }}>
                  {office.address}
                </p>
                <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", fontSize: "0.68rem" }}>
                  TIMEZONE: {office.timezone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
