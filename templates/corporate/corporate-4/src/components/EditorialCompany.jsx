import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const EditorialCompany = () => {
  return (
    <section className="screen-section">
      <div className="editorial-container">
        <div className="company-mag-grid">
          {/* Large Image Frame */}
          <div className="mag-image-frame">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="KINESIS Global Architecture & Modern Innovation"
            />
          </div>

          {/* Editorial Content + Integrated Numbers */}
          <div>
            <div className="mono-tag" style={{ marginBottom: "1.5rem" }}>
              <span className="mono-tag-accent">02 //</span> IDENTITY & POSTURE
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3.8rem)", lineHeight: "1.05", marginBottom: "2rem" }}>
              WE ARE A TECHNOLOGY COMPANY FOR COMPANIES THAT REFUSE TO STAND STILL.
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2.5rem" }}>
              Headquartered across San Francisco, London, Singapore, and Zurich, KINESIS
              combines elite distributed systems architects and applied machine learning
              scientists to deliver the world's most resilient enterprise platforms.
            </p>

            <Link to="/about" className="arch-btn" style={{ textDecoration: "none" }}>
              <span>Read Full Operating Manifesto</span>
              <ArrowRight size={16} />
            </Link>

            {/* Integrated Huge Statistics (No cards) */}
            <div className="mag-integrated-stats">
              <div>
                <div className="integrated-stat-num">12+</div>
                <div className="integrated-stat-lbl">Years of Rigor</div>
              </div>
              <div>
                <div className="integrated-stat-num">50+</div>
                <div className="integrated-stat-lbl">Global Markets</div>
              </div>
              <div>
                <div className="integrated-stat-num">150+</div>
                <div className="integrated-stat-lbl">Major Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
