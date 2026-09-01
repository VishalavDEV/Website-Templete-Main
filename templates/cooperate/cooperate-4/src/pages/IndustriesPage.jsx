import React, { useState } from "react";
import { industriesData } from "../data/industriesData";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const IndustriesPage = ({ onOpenContact }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0].id);

  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            SPECIALIZED SECTOR PRACTICES
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            Tailored engineering for heavily regulated and high-velocity markets.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "750px", lineHeight: "1.75", marginBottom: "2rem" }}>
            Generic software architectures collapse under strict regulatory constraints and massive transaction volumes.
            KINESIS GLOBAL engineers vertical-specific platforms with compliance and latency guarantees baked in.
          </p>

          {/* Quick Jump Bar */}
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {industriesData.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`pill-btn ${selectedIndustry === ind.id ? "pill-btn-dark" : "pill-btn-outline"}`}
                style={{ padding: "0.5rem 1.15rem", fontSize: "0.75rem", textDecoration: "none" }}
              >
                <span>{ind.number} // {ind.name.split(" ")[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Deep-Dive Stack */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                style={{
                  backgroundColor: "var(--bg-sand-light)",
                  border: "2px solid var(--bg-espresso)",
                  borderRadius: "24px",
                  padding: "3rem",
                  boxShadow: "10px 10px 0 var(--bg-terracotta)"
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "3.5rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.35rem", color: "var(--bg-terracotta)", fontWeight: "700" }}>
                        {ind.number}
                      </span>
                      <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)" }}>
                        INDUSTRY PRACTICE
                      </span>
                    </div>

                    <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", marginBottom: "0.75rem", color: "var(--text-espresso)" }}>
                      {ind.name}
                    </h2>

                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--bg-terracotta)", fontWeight: "600", marginBottom: "1.25rem" }}>
                      {ind.tagline}
                    </p>

                    <p style={{ color: "var(--text-espresso-muted)", lineHeight: "1.8", marginBottom: "2rem", fontSize: "1.05rem" }}>
                      {ind.description}
                    </p>

                    <div>
                      <div className="editorial-tag" style={{ color: "var(--text-espresso)", marginBottom: "0.75rem" }}>
                        KEY STRATEGIC CHALLENGES SOLVED
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        {ind.keyChallengesSolved.map((chal, cIdx) => (
                          <div key={cIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.92rem", color: "var(--text-espresso)" }}>
                            <CheckCircle2 size={16} color="var(--bg-terracotta)" style={{ marginTop: "3px", flexShrink: 0 }} />
                            <span>{chal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Sector Impact Callout Box */}
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
                        SECTOR IMPACT & BENCHMARK
                      </div>

                      <div style={{ marginBottom: "2rem" }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.75rem", fontWeight: "700", color: "#fff", lineHeight: 1 }}>
                          {ind.stats.metric}
                        </div>
                        <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.72rem", marginTop: "8px" }}>
                          {ind.stats.label}
                        </div>
                      </div>

                      <div className="editorial-tag" style={{ color: "var(--text-cream-dim)", fontSize: "0.7rem", marginBottom: "0.75rem" }}>
                        PROVEN ARCHITECTURE SOLUTIONS
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {ind.solutions.map((sol, sIdx) => (
                          <li key={sIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-cream-muted)" }}>
                            <span style={{ color: "var(--accent-chartreuse)" }}>→</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-cream-thin)" }}>
                      <button
                        className="pill-btn pill-btn-chartreuse"
                        style={{ width: "100%", justifyContent: "center" }}
                        onClick={onOpenContact}
                      >
                        <span>ENGAGE {ind.name.split(" ")[0].toUpperCase()} TEAM</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote Banner */}
      <section className="editorial-section-sm bg-sand-dark" style={{ borderTop: "2px solid var(--bg-espresso)", marginTop: "4rem" }}>
        <div className="editorial-wrap" style={{ textAlign: "center" }}>
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            REGULATORY ASSURANCE
          </div>
          <h2 className="section-serif-heading" style={{ maxWidth: "850px", margin: "0 auto 1.5rem auto" }}>
            Zero-Trust, HIPAA, SEC, and Basel IV compliant by default.
          </h2>
          <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.1rem", maxWidth: "680px", margin: "0 auto 2rem auto" }}>
            Every software topology engineered by KINESIS GLOBAL undergoes rigorous third-party auditing, formal mathematical verification, and automated continuous compliance testing.
          </p>
          <button className="pill-btn pill-btn-dark" onClick={onOpenContact}>
            <span>REQUEST REGULATORY COMPLIANCE BRIEF</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

