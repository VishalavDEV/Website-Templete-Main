import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe } from "lucide-react";

export const Footer = ({ onOpenContact }) => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="brand-logo" style={{ marginBottom: "1.25rem" }}>
              <div className="brand-icon">
                <span>K</span>
              </div>
              <div>
                <span>KINESIS</span>
                <span className="tag">GLOBAL</span>
              </div>
            </Link>

            <p>
              Architecting the digital systems, autonomous AI fabrics, and cloud
              infrastructures behind tomorrow's market leaders.
            </p>

            <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--accent-cyan)", fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
              <Globe size={16} />
              <span>4 Global Engineering Hubs</span>
            </div>
          </div>

          {/* Navigation Column 1: Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-nav">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about">Leadership Board</Link>
              </li>
              <li>
                <Link to="/work">Selected Work</Link>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  style={{ color: "var(--text-muted)", fontSize: "0.9rem", textAlign: "left" }}
                >
                  Careers & Fellowships
                </button>
              </li>
              <li>
                <Link to="/contact">Contact & Offices</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Capabilities */}
          <div>
            <div className="footer-col-title">Capabilities</div>
            <ul className="footer-nav">
              <li>
                <Link to="/services">AI & Automation</Link>
              </li>
              <li>
                <Link to="/services">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services">Cloud & Infrastructure</Link>
              </li>
              <li>
                <Link to="/services">Data & Lakehouses</Link>
              </li>
              <li>
                <Link to="/services">Cybersecurity & ZTNA</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Industries */}
          <div>
            <div className="footer-col-title">Industries</div>
            <ul className="footer-nav">
              <li>
                <Link to="/industries">Finance & Trading</Link>
              </li>
              <li>
                <Link to="/industries">Healthcare & Genomics</Link>
              </li>
              <li>
                <Link to="/industries">Retail & Commerce</Link>
              </li>
              <li>
                <Link to="/industries">Manufacturing 4.0</Link>
              </li>
              <li>
                <Link to="/industries">Logistics & Supply</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 4: Resources */}
          <div>
            <div className="footer-col-title">Resources</div>
            <ul className="footer-nav">
              <li>
                <Link to="/insights">Executive Insights</Link>
              </li>
              <li>
                <Link to="/work">Case Studies</Link>
              </li>
              <li>
                <Link to="/solutions">Architecture Whitepapers</Link>
              </li>
              <li>
                <Link to="/about">Security & Compliance</Link>
              </li>
              <li>
                <Link to="/contact">RFP Submission</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 KINESIS GLOBAL INC. All rights reserved. Built with React.
          </div>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ cursor: "pointer" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer" }}>Terms of Engagement</span>
            <span style={{ cursor: "pointer" }}>Security Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
