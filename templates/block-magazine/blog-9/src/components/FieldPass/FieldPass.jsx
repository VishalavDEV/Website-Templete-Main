import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import Lanyard from '../Lanyard/Lanyard';
import './FieldPass.css';

export default function FieldPass() {
  return (
    <section className="field-pass-section" aria-label="Explorer Field Pass">
      <div className="atlas-container">
        <div className="field-pass-grid">
          <div className="field-pass-editorial">
            <div className="atlas-section-eyebrow">
              <ShieldCheck size={14} />
              <span>Explorer Credential</span>
            </div>

            <h2 className="atlas-section-title">The Field Pass</h2>

            <p className="atlas-section-subtitle">
              Interactive credential for researchers, field journalists, and members of the ATLAS Discovery Guild.
            </p>

            <ul className="field-pass-benefits">
              <li className="field-pass-benefit-item">
                <div className="field-pass-benefit-icon">
                  <CheckCircle2 size={14} />
                </div>
                <span>Full access to the 1926–2026 digital magazine archive and high-resolution plate scans.</span>
              </li>
              <li className="field-pass-benefit-item">
                <div className="field-pass-benefit-icon">
                  <CheckCircle2 size={14} />
                </div>
                <span>Direct satellite telemetry logs and audio field recordings from active global expeditions.</span>
              </li>
              <li className="field-pass-benefit-item">
                <div className="field-pass-benefit-icon">
                  <CheckCircle2 size={14} />
                </div>
                <span>Personalized reading list bookmarks persisted across all exploration devices.</span>
              </li>
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/saved" className="atlas-btn atlas-btn-primary">
                <span>View Saved Pass ({/* bookmarks count */})</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/magazine" className="atlas-btn atlas-btn-secondary">
                <Compass size={16} />
                <span>Explore Archive</span>
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Lanyard />
          </div>
        </div>
      </div>
    </section>
  );
}
