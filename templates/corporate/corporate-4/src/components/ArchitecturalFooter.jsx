import React from "react";
import { Link } from "react-router-dom";

export const ArchitecturalFooter = ({ onOpenBrief }) => {
  return (
    <footer style={{ background: "#050608", borderTop: "1px solid var(--grid-line)", padding: "6rem 0 3rem 0" }}>
      <div className="editorial-container">
        {/* Huge Monogram + Statement */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <div className="monogram-box" style={{ width: "50px", height: "50px", fontSize: "1.4rem" }}>
            K
          </div>
          <span className="mono-tag" style={{ letterSpacing: "0.3em" }}>KINESIS GLOBAL SYSTEMS</span>
        </div>

        <div className="footer-huge-statement" onClick={onOpenBrief} style={{ cursor: "pointer" }}>
          MAKE THE NEXT MOVE.
        </div>

        {/* Minimal Navigation Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2.5rem", borderTop: "1px solid var(--grid-line)", paddingTop: "3rem", marginBottom: "4rem" }}>
          <div>
            <div className="mono-tag" style={{ color: "#fff", marginBottom: "1rem" }}>DIRECTORIES</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><Link to="/about" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Manifesto</Link></li>
              <li><Link to="/services" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Capabilities</Link></li>
              <li><Link to="/solutions" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Solutions</Link></li>
              <li><Link to="/work" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <div className="mono-tag" style={{ color: "#fff", marginBottom: "1rem" }}>SECTORS</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><Link to="/industries" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Finance & Trading</Link></li>
              <li><Link to="/industries" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Life Sciences</Link></li>
              <li><Link to="/industries" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Retail Commerce</Link></li>
              <li><Link to="/industries" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Manufacturing 4.0</Link></li>
            </ul>
          </div>

          <div>
            <div className="mono-tag" style={{ color: "#fff", marginBottom: "1rem" }}>RESEARCH</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><Link to="/insights" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Executive Briefs</Link></li>
              <li><Link to="/insights" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Architecture Papers</Link></li>
              <li><Link to="/contact" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>RFP Submission</Link></li>
            </ul>
          </div>

          <div>
            <div className="mono-tag" style={{ color: "#fff", marginBottom: "1rem" }}>GLOBAL DESK</div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
              San Francisco, CA<br />
              London, UK<br />
              Singapore<br />
              Zurich, CH
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--grid-line)", paddingTop: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-dim)", flexWrap: "wrap", gap: "1rem" }}>
          <div>© 2026 KINESIS GLOBAL SYSTEMS INC.</div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <span>PRIVACY PROTOCOL</span>
            <span>TERMS OF ENGAGEMENT</span>
            <span>DISCLOSURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
