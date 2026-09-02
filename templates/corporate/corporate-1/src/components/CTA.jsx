import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './CTA.css';

export default function CTA({
  tag = "READY TO TRANSFORM",
  title = "Have a challenge worth solving?",
  description = "Let's turn your next ambitious idea into something real. Partner with our senior architects and strategy consultants to engineer your competitive future.",
  primaryButtonText = "Start a Conversation",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Explore Case Studies",
  secondaryButtonLink = "/work"
}) {
  return (
    <section className="luxury-cta-section">
      <div className="cta-canvas">
        <div className="cta-radial-core" />
        <div className="cta-grid-mesh" />
        <div className="cta-floating-pip pip-1" />
        <div className="cta-floating-pip pip-2" />
      </div>

      <div className="container">
        <div className="luxury-cta-container">
          <span className="section-tag">{tag}</span>
          <h2 className="luxury-cta-title">{title}</h2>
          <p className="luxury-cta-description">{description}</p>

          <div className="luxury-cta-actions">
            <Link to={primaryButtonLink} className="btn btn-primary btn-lg cta-main-btn">
              <span>{primaryButtonText}</span>
              <ArrowUpRight size={18} className="btn-arrow" />
            </Link>
            {secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="btn btn-secondary btn-lg">
                <span>{secondaryButtonText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
