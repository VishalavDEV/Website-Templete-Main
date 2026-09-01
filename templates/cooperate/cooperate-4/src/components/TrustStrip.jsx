import React from "react";
import { companyData } from "../data/companyData";

export const TrustStrip = () => {
  return (
    <section id="trust-section" className="trust-section">
      <div className="container">
        <div className="trust-content">
          <div className="trust-label">
            Trusted by teams building what comes next.
          </div>

          <div className="trust-logos">
            {companyData.trustLogos.map((logo, idx) => (
              <div key={idx} className="trust-logo-item" title={`${logo.name} - ${logo.subtitle}`}>
                <span className="wordmark">{logo.name}</span>
                <span className="ticker">{logo.ticker}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
