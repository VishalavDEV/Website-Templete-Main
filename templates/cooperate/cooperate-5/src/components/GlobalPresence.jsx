import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { GLOBAL_NODES } from '../data/corporateData';

export default function GlobalPresence() {
  const [activeNode, setActiveNode] = useState(GLOBAL_NODES[0]);

  return (
    <section className="section-forest" id="global">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px' }}>
          <div className="editorial-tag">
            <div className="editorial-tag-line"></div>
            <span className="label-caps-forest">NETWORK TOPOLOGY</span>
          </div>
          <h2 className="editorial-heading-lg" style={{ color: 'var(--text-light-primary)' }}>
            GLOBAL BY DESIGN.
          </h2>
          <p className="editorial-desc">
            A distributed network of interconnected delivery centers, research labs, and bare-metal edge nodes operating 24/7 across major sovereign jurisdictions.
          </p>
        </div>

        {/* Deep Forest World Network Shell */}
        <div className="world-forest-shell">
          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%' }}>
              <defs>
                <pattern id="forestDotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#23483C" />
                </pattern>
              </defs>

              <rect width="1000" height="500" fill="url(#forestDotGrid)" />

              {/* Continents in Forest Palettes */}
              <path d="M 120,80 L 320,70 L 340,150 L 260,250 L 190,260 L 120,160 Z" fill="#173229" stroke="#23483C" strokeWidth="1" />
              <path d="M 270,270 L 370,290 L 340,430 L 280,450 L 250,330 Z" fill="#142B23" stroke="#1D3E33" strokeWidth="1" />
              <path d="M 450,90 L 590,80 L 580,180 L 460,190 Z" fill="#173229" stroke="#23483C" strokeWidth="1" />
              <path d="M 460,210 L 590,200 L 570,380 L 490,400 L 450,260 Z" fill="#142B23" stroke="#1D3E33" strokeWidth="1" />
              <path d="M 600,70 L 890,90 L 870,280 L 720,290 L 610,210 Z" fill="#173229" stroke="#23483C" strokeWidth="1" />
              <path d="M 790,340 L 920,330 L 900,430 L 800,420 Z" fill="#173229" stroke="#23483C" strokeWidth="1" />

              {/* Trajectory lines */}
              {GLOBAL_NODES.map((node, i) => {
                if (i === GLOBAL_NODES.length - 1) return null;
                const nextNode = GLOBAL_NODES[i + 1];
                return (
                  <line
                    key={i}
                    x1={node.x * 10}
                    y1={node.y * 5}
                    x2={nextNode.x * 10}
                    y2={nextNode.y * 5}
                    stroke="#D96B27"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    opacity="0.6"
                  />
                );
              })}

              <line x1={GLOBAL_NODES[0].x * 10} y1={GLOBAL_NODES[0].y * 5} x2={GLOBAL_NODES[2].x * 10} y2={GLOBAL_NODES[2].y * 5} stroke="#D96B27" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.8" />
              <line x1={GLOBAL_NODES[1].x * 10} y1={GLOBAL_NODES[1].y * 5} x2={GLOBAL_NODES[6].x * 10} y2={GLOBAL_NODES[6].y * 5} stroke="#D96B27" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.8" />

              {/* Node hotspots */}
              {GLOBAL_NODES.map((node, idx) => {
                const isCurrent = activeNode.name === node.name;
                const cx = node.x * 10;
                const cy = node.y * 5;
                return (
                  <g 
                    key={idx} 
                    onClick={() => setActiveNode(node)}
                    transform={`translate(${cx}, ${cy})`}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle r="12" fill="none" stroke="#D96B27" strokeWidth="1" opacity={isCurrent ? '0.8' : '0.2'} />
                    <circle r={isCurrent ? '6' : '3.5'} fill={isCurrent ? '#D96B27' : '#8FA89B'} />

                    <text
                      x="0"
                      y="-12"
                      textAnchor="middle"
                      fill={isCurrent ? '#F48C4D' : '#C5D4CC'}
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontSize="10"
                      fontWeight="600"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Node Detail Card */}
          <div style={{ background: 'var(--bg-forest-card)', border: '1px solid var(--border-forest)', borderRadius: '12px', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MapPin size={18} color="var(--color-copper)" />
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF' }}>
                  {activeNode.name}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-sage)', marginLeft: '12px' }}>
                  {activeNode.region} — {activeNode.type}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-sage)' }}>
                STATUS: <strong style={{ color: 'var(--color-copper-light)' }}>{activeNode.status}</strong>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-sage)' }}>
                DARK FIBER RTT: <strong style={{ color: '#FFFFFF' }}>{activeNode.ping}</strong>
              </div>
            </div>
          </div>

          {/* Global Operations Metric Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px', borderTop: '1px solid var(--border-forest)', paddingTop: '24px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 600, color: 'var(--color-copper-light)' }}>24</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-sage)', textTransform: 'uppercase' }}>COUNTRIES WITH ACTIVE PLATFORMS</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 600, color: 'var(--color-copper-light)' }}>08</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-sage)', textTransform: 'uppercase' }}>REGIONAL DELIVERY & SECURITY HUBS</div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 600, color: 'var(--color-copper-light)' }}>04</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-sage)', textTransform: 'uppercase' }}>CONTINENTS WITH DIRECT POPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
