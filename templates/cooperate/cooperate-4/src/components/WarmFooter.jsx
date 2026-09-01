import React from "react";
import { Link } from "react-router-dom";

export const WarmFooter = ({ onOpenProjectModal }) => {
  return (
    <footer style={{ backgroundColor: "var(--bg-sand-dark)", borderTop: "2px solid var(--bg-espresso)", padding: "5rem 0 3rem 0" }}>
      <div className="editorial-wrap">
        {/* Large Typographic Company Name */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", borderBottom: "1px solid var(--border-espresso-medium)", paddingBottom: "3rem", marginBottom: "3rem" }}>
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ textDecoration: "none" }}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: "700", color: "var(--text-espresso)", lineHeight: "0.95", letterSpacing: "-0.03em" }}>
                KINESIS <span style={{ fontSize: "clamp(1.2rem, 2.2vw, 2rem)", fontFamily: "var(--font-mono)", color: "var(--bg-terracotta)" }}>GLOBAL</span><span style={{ color: "var(--bg-terracotta)" }}>.</span>
              </div>
            </Link>
            <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginTop: "1rem" }}>
              ENTERPRISE AI & SYSTEMS ARCHITECTURE // SAN FRANCISCO · LONDON · SINGAPORE · ZURICH
            </div>
          </div>

          <div>
            <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginBottom: "0.5rem" }}>
              DIRECT INQUIRIES & ADVISORY
            </div>
            <a
              href="mailto:hello@kinesisglobal.com"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.6rem",
                color: "var(--text-espresso)",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              hello@kinesisglobal.com
            </a>
          </div>
        </div>

        {/* Minimal Navigation Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem", marginBottom: "3.5rem" }}>
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none", flexWrap: "wrap" }}>
            <li>
              <Link to="/about" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/services" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                CAPABILITIES
              </Link>
            </li>
            <li>
              <Link to="/solutions" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                SOLUTIONS
              </Link>
            </li>
            <li>
              <Link to="/industries" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                INDUSTRIES
              </Link>
            </li>
            <li>
              <Link to="/work" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                WORK
              </Link>
            </li>
            <li>
              <Link to="/insights" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                INSIGHTS
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "var(--text-espresso)", textDecoration: "none" }}>
                CONTACT
              </Link>
            </li>
          </ul>

          <button className="pill-btn pill-btn-dark" onClick={onOpenProjectModal} style={{ padding: "0.65rem 1.4rem", fontSize: "0.75rem" }}>
            <span>INITIATE PROJECT BRIEF</span>
          </button>
        </div>

        {/* Small Bottom Line */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-espresso-thin)", paddingTop: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-espresso-dim)", flexWrap: "wrap", gap: "1rem" }}>
          <div>© 2026 KINESIS GLOBAL Inc. All rights reserved.</div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <span>Privacy</span>
            <span>·</span>
            <span>Terms of Engagement</span>
            <span>·</span>
            <span>Zero-Trust Security Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
