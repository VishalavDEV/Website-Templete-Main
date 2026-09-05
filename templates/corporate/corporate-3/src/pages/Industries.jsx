import React from 'react';
import PageHeader from '../components/PageHeader';
import IndustryExplorer from '../components/IndustryExplorer';
import { industriesData } from '../data/industries';
import CTA from '../components/CTA';

export default function Industries() {
  return (
    <main>
      <PageHeader
        badge="SECTOR MASTERY"
        title="INDUSTRY"
        highlight="DEPTH."
        description="Deep sector expertise across critical global industries. Combining domain intimacy with frontier technological execution."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Industries' }
        ]}
      />

      {/* Interactive Industry Explorer */}
      <IndustryExplorer />

      {/* Deep Dive Sector Grid */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">GLOBAL SECTOR OVERVIEWS</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              HOW WE ADVANCE KEY INDUSTRIES
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="industry-sector-card"
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingBottom: '20px',
                    marginBottom: '28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#C8F169' }}>
                      {ind.code}
                    </span>
                    <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#FFFFFF' }}>
                      {ind.name}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#9B9B9B' }}>
                      Key Benchmark: <strong style={{ color: '#C8F169' }}>{ind.keyMetric.value}</strong>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '17px', color: '#F4F4F4', marginBottom: '24px', lineHeight: 1.6, wordBreak: 'break-word' }}>
                  {ind.tagline}
                </p>

                {/* Sub-sectors Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                  {ind.subSectors.map((sub, i) => (
                    <span key={i} className="badge-outline">
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Challenges & Solutions Split */}
                <div className="industry-split-grid">
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      PRIMARY SECTOR VULNERABILITIES
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.challenges.map((c, i) => (
                        <li key={i} style={{ fontSize: '14px', color: '#9B9B9B', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#9B9B9B', flexShrink: 0, marginTop: '2px' }}>•</span>
                          <span style={{ minWidth: 0, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      VANTAGE TRANSFORMATION RESPONSE
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {ind.solutions.map((s, i) => (
                        <li key={i} style={{ fontSize: '14px', color: '#F4F4F4', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ color: '#C8F169', flexShrink: 0, marginTop: '2px' }}>✓</span>
                          <span style={{ minWidth: 0, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
