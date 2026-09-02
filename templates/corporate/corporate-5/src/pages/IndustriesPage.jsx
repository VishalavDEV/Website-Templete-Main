import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/corporateData';

export default function IndustriesPage() {
  const [selectedIndIdx, setSelectedIndIdx] = useState(0);
  const currentInd = INDUSTRIES_DATA[selectedIndIdx];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '75px' }}>
      {/* 11. Header with Balanced Spacing */}
      <section style={{ padding: '50px 0 40px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
            SECTOR SPECIALIZATION // VERTICAL EXPERTISE
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.4vw, 60px)', fontWeight: 700, color: 'var(--c-charcoal)', lineHeight: 1.1 }}>
            Sectors we transform.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--c-eucalyptus)', maxWidth: '740px', marginTop: '14px', lineHeight: '1.6' }}>
            Specialized architectural blueprints engineered for the specific throughput, security, and compliance demands of critical global sectors.
          </p>
        </div>
      </section>

      {/* 11. Primarily Vertical: Left Navigation + Right Content */}
      <section style={{ padding: '60px 0 100px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="asym-industries-split" style={{ marginTop: '10px' }}>
            {/* Left Vertical Navigation */}
            <div className="asym-industry-nav-list">
              {INDUSTRIES_DATA.map((ind, idx) => (
                <button
                  key={ind.id}
                  className={`asym-industry-nav-item ${selectedIndIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedIndIdx(idx)}
                >
                  {ind.title}
                </button>
              ))}
            </div>

            {/* Right Selected Content Card */}
            <div className="asym-industry-showcase-pane">
              <div className="meta-tag-copper" style={{ marginBottom: '10px' }}>
                SPECIFICATION // {currentInd.code}
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.2vw, 38px)', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '8px' }}>
                {currentInd.title}
              </h2>

              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--c-copper)', marginBottom: '16px' }}>
                {currentInd.subtitle}
              </div>

              <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.7', marginBottom: '24px' }}>
                {currentInd.description}
              </p>

              {/* Metric Card */}
              <div style={{ background: 'var(--c-charcoal)', color: '#FFFFFF', padding: '22px 28px', borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <div className="meta-tag-eucalyptus" style={{ color: 'var(--c-eucalyptus-light)', marginBottom: '4px' }}>
                    MEASURED BENCHMARK
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 700, color: 'var(--c-copper)' }}>
                    {currentInd.metric}
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--c-eucalyptus-light)', textAlign: 'right', maxWidth: '240px' }}>
                  {currentInd.metricLabel}
                </div>
              </div>

              {/* Capabilities */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--c-charcoal)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  MISSION-CRITICAL CAPABILITIES
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {currentInd.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--c-charcoal)' }}>
                      <span style={{ color: 'var(--c-copper)', fontWeight: 800 }}>✓</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-copper-primary">
                <span>Deploy {currentInd.title} Architecture</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Benchmarks */}
      <section style={{ background: 'var(--c-charcoal)', color: 'var(--c-ivory)', padding: '90px 0' }}>
        <div className="container-asym">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div className="meta-tag-copper" style={{ marginBottom: '12px' }}>PROVEN GLOBAL REACH</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.4vw, 42px)', fontWeight: 700, color: '#FFFFFF' }}>GLOBAL BENCHMARKS</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            <div style={{ background: 'var(--c-charcoal-surface)', border: '1px solid var(--border-dark)', padding: '32px', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', fontWeight: 700, color: 'var(--c-copper)', marginBottom: '8px' }}>
                $4.2T
              </div>
              <div className="meta-tag-on-dark" style={{ marginBottom: '8px' }}>
                DAILY ASSET CLEARING
              </div>
              <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6' }}>
                Ultra-low latency financial transactions routed with deterministic state synchronization.
              </p>
            </div>

            <div style={{ background: 'var(--c-charcoal-surface)', border: '1px solid var(--border-dark)', padding: '32px', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', fontWeight: 700, color: 'var(--c-copper)', marginBottom: '8px' }}>
                120M+
              </div>
              <div className="meta-tag-on-dark" style={{ marginBottom: '8px' }}>
                PATIENT RECORDS PROTECTED
              </div>
              <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6' }}>
                Federated private healthcare models trained across multi-hospital research networks.
              </p>
            </div>

            <div style={{ background: 'var(--c-charcoal-surface)', border: '1px solid var(--border-dark)', padding: '32px', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', fontWeight: 700, color: 'var(--c-copper)', marginBottom: '8px' }}>
                850k
              </div>
              <div className="meta-tag-on-dark" style={{ marginBottom: '8px' }}>
                CONNECTED SENSORS
              </div>
              <p style={{ fontSize: '14px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.6' }}>
                Real-time factory floor telemetry predicting equipment failure with sub-second precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
