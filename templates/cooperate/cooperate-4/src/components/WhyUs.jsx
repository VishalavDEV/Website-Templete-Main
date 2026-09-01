import React from "react";
import { companyData } from "../data/companyData";

export const WhyUs = () => {
  return (
    <section className="section-padding" style={{ background: "rgba(10, 13, 20, 0.7)" }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-indicator"></span>
            THE KINESIS ADVANTAGE
          </div>
          <h2>Built for ambitious organizations.</h2>
          <p className="lead">
            We operate as an extension of your executive leadership, blending
            high-level business strategy with rigorous system engineering.
          </p>
        </div>

        <div className="why-us-grid">
          {companyData.principles.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket bottom-right"></div>

              <div className="why-number">{item.number}</div>
              <h3 className="why-title">{item.title}</h3>
              <div className="why-summary">{item.summary}</div>
              <p className="why-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
