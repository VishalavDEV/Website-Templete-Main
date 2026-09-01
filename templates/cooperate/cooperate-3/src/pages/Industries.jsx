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
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  padding: '48px',
                  borderRadius: '4px',
                }}
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
                    <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF' }}>
                      {ind.name}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#9B9B9B' }}>
                      Key Benchmark: <strong style={{ color: '#C8F169' }}>{ind.keyMetric.value}</strong>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '18px', color: '#F4F4F4', marginBottom: '24px', lineHeight: 1.6 }}>
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
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '32px',
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      PRIMARY SECTOR VULNERABILITIES
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {ind.challenges.map((c, i) => (
                        <li key={i} style={{ fontSize: '14px', color: '#9B9B9B', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#9B9B9B' }}>•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.1em', marginBottom: '12px' }}>
                      VANTAGE TRANSFORMATION RESPONSE
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {ind.solutions.map((s, i) => (
                        <li key={i} style={{ fontSize: '14px', color: '#F4F4F4', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#C8F169' }}>✓</span>
                          <span>{s}</span>
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
