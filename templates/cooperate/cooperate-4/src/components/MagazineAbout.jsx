import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const MagazineAbout = () => {
  return (
    <section className="editorial-section bg-sand">
      <div className="editorial-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Large Editorial Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                height: "560px",
                borderRadius: "24px 100px 24px 100px",
                overflow: "hidden",
                border: "2px solid var(--bg-espresso)",
                boxShadow: "16px 16px 0 var(--bg-terracotta)"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Architecture and human engineering"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1.5rem" }}>
              WHO WE ARE
            </div>

            <h2 className="section-serif-heading" style={{ marginBottom: "2rem", color: "var(--text-espresso)" }}>
              Technology with a human point of view.
            </h2>

            <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "2.5rem" }}>
              KINESIS GLOBAL is an independent digital systems and AI engineering firm.
              We unite elite distributed systems engineers, machine learning scientists,
              and strategic product leaders to build enduring platforms for ambitious organizations.
            </p>

            <Link to="/about" className="pill-btn pill-btn-outline" style={{ marginBottom: "4rem" }}>
              <span>OUR FULL STORY</span>
              <ArrowUpRight size={16} />
            </Link>

            {/* Three Large Integrated Numbers (NO cards) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", borderTop: "2px solid var(--bg-espresso)", paddingTop: "2.5rem" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.85rem, 2.6vw, 2.5rem)", fontWeight: "700", color: "var(--text-espresso)", lineHeight: 1 }}>
                  12+
                </div>
                <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginTop: "0.5rem" }}>
                  YEARS
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.85rem, 2.6vw, 2.5rem)", fontWeight: "700", color: "var(--text-espresso)", lineHeight: 1 }}>
                  150+
                </div>
                <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginTop: "0.5rem" }}>
                  PROJECTS
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.85rem, 2.6vw, 2.5rem)", fontWeight: "700", color: "var(--text-espresso)", lineHeight: 1 }}>
                  50+
                </div>
                <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginTop: "0.5rem" }}>
                  MARKETS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
