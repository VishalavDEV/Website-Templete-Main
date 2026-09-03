import React, { useState } from 'react';
import { ProcessStage, PROCESS_STAGES } from '../../data/process';

export const ProcessTimeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('01');

  const activeStage = PROCESS_STAGES.find((s) => s.id === activeStageId) || PROCESS_STAGES[0];

  return (
    <div className="process-timeline-block" style={{ marginTop: '5rem' }}>
      <div className="section-header-bar" style={{ borderColor: 'rgba(248, 245, 239, 0.18)', marginBottom: '3rem' }}>
        <span className="section-number" style={{ color: 'var(--color-clay)' }}>05 / 08</span>
        <span className="section-category" style={{ color: 'var(--color-stone)' }}>Methodology & Spatial Genesis</span>
      </div>

      <div className="material-title-wrap">
        <h2 className="material-section-title">
          FROM<br />IDEA<br />TO<br />SPACE.
        </h2>
      </div>

      {/* 20 Architectural Drawing Animation Schematic Box */}
      <div className="drawing-schematic-wrapper" aria-label="Technical Architectural Drawing Animation">
        <div className="schematic-header">
          <div className="schematic-breadcrumbs">
            {PROCESS_STAGES.map((s) => (
              <span
                key={s.id}
                className={`schematic-crumb ${s.id === activeStageId ? 'active' : ''}`}
              >
                {s.schematic} {s.id !== '05' ? '→' : ''}
              </span>
            ))}
          </div>
          <span className="schematic-indicator">ACTIVE STAGE: {activeStage.title} // VECTOR BLUEPRINT</span>
        </div>

        <div className="schematic-canvas-box">
          <svg className="schematic-svg" viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base Coordinate Datum */}
            <line x1="40" y1="280" x2="760" y2="280" stroke="rgba(248, 245, 239, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="120" y1="40" x2="120" y2="280" stroke="rgba(248, 245, 239, 0.1)" strokeWidth="1" />
            <line x1="400" y1="40" x2="400" y2="280" stroke="rgba(248, 245, 239, 0.1)" strokeWidth="1" />
            <line x1="680" y1="40" x2="680" y2="280" stroke="rgba(248, 245, 239, 0.1)" strokeWidth="1" />

            {/* Layer 1: Sketch (Observe) */}
            <g className={`schematic-layer ${activeStageId >= '01' ? 'visible' : ''}`}>
              <path d="M120 280 Q 250 180 400 240 T 680 160" stroke="#C9C1B5" strokeWidth="1.5" strokeDasharray="6 3" />
              <circle cx="120" cy="280" r="3" fill="#C9C1B5" />
              <circle cx="400" cy="240" r="3" fill="#C9C1B5" />
              <circle cx="680" cy="160" r="3" fill="#C9C1B5" />
              <text x="130" y="270" fill="rgba(201, 193, 181, 0.7)" fontSize="10" fontFamily="var(--font-mono)">DATUM 01</text>
            </g>

            {/* Layer 2: Grid (Imagine) */}
            <g className={`schematic-layer ${activeStageId >= '02' ? 'visible' : ''}`}>
              <line x1="200" y1="60" x2="200" y2="280" stroke="rgba(169, 103, 80, 0.4)" strokeWidth="1" />
              <line x1="600" y1="60" x2="600" y2="280" stroke="rgba(169, 103, 80, 0.4)" strokeWidth="1" />
              <line x1="140" y1="140" x2="660" y2="140" stroke="rgba(169, 103, 80, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="140" y1="210" x2="660" y2="210" stroke="rgba(169, 103, 80, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="210" y="80" fill="var(--color-clay)" fontSize="10" fontFamily="var(--font-mono)">GRID-A</text>
              <text x="540" y="80" fill="var(--color-clay)" fontSize="10" fontFamily="var(--font-mono)">GRID-B</text>
            </g>

            {/* Layer 3: Structure (Draw) */}
            <g className={`schematic-layer ${activeStageId >= '03' ? 'visible' : ''}`}>
              <rect x="220" y="110" width="360" height="170" stroke="var(--color-ivory)" strokeWidth="1.5" />
              <line x1="220" y1="110" x2="280" y2="70" stroke="var(--color-ivory)" strokeWidth="1" />
              <line x1="580" y1="110" x2="640" y2="70" stroke="var(--color-ivory)" strokeWidth="1" />
              <line x1="280" y1="70" x2="640" y2="70" stroke="var(--color-ivory)" strokeWidth="1.5" />
              <line x1="580" y1="280" x2="640" y2="240" stroke="var(--color-ivory)" strokeWidth="1" />
              <line x1="640" y1="70" x2="640" y2="240" stroke="var(--color-ivory)" strokeWidth="1" />
              {/* Tension Columns */}
              <line x1="300" y1="110" x2="300" y2="280" stroke="var(--color-rust)" strokeWidth="2" />
              <line x1="500" y1="110" x2="500" y2="280" stroke="var(--color-rust)" strokeWidth="2" />
            </g>

            {/* Layer 4: Volume (Build) */}
            <g className={`schematic-layer ${activeStageId >= '04' ? 'visible' : ''}`}>
              <polygon points="220,110 280,70 640,70 580,110" fill="rgba(169, 103, 80, 0.2)" stroke="var(--color-clay)" strokeWidth="1" />
              <polygon points="580,110 640,70 640,240 580,280" fill="rgba(48, 40, 37, 0.4)" stroke="var(--color-stone)" strokeWidth="1" />
              {/* Massive Cantilever Block */}
              <rect x="180" y="140" width="160" height="60" fill="rgba(201, 193, 181, 0.15)" stroke="var(--color-clay)" strokeWidth="1.2" />
              <text x="190" y="175" fill="var(--color-ivory)" fontSize="9" fontFamily="var(--font-mono)">7.8m CANTILEVER</text>
            </g>

            {/* Layer 5: Space (Live) */}
            <g className={`schematic-layer ${activeStageId === '05' ? 'visible' : ''}`}>
              <path d="M260 210 L 360 210 L 360 280 L 260 280 Z" fill="rgba(248, 245, 239, 0.35)" />
              <circle cx="310" cy="245" r="18" fill="rgba(255, 245, 230, 0.15)" />
              {/* Sunbeam Light Rays */}
              <line x1="280" y1="70" x2="310" y2="245" stroke="rgba(255, 245, 230, 0.4)" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="450" y1="70" x2="480" y2="245" stroke="rgba(255, 245, 230, 0.4)" strokeWidth="1" strokeDasharray="4 2" />
              <text x="270" y="250" fill="var(--color-deep-brown)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="700">VOID</text>
            </g>
          </svg>
        </div>
      </div>

      {/* 19 Horizontal Process Timeline */}
      <div className="horizontal-process-timeline" role="tablist" aria-label="Process Stages">
        {PROCESS_STAGES.map((stage) => (
          <div
            key={stage.id}
            role="tab"
            aria-selected={activeStageId === stage.id}
            tabIndex={0}
            className={`timeline-stage-card ${activeStageId === stage.id ? 'active' : ''}`}
            onClick={() => setActiveStageId(stage.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveStageId(stage.id);
              }
            }}
          >
            <div className="stage-top-meta">
              <span>{stage.id}</span>
              <span>{stage.schematic}</span>
            </div>
            <h3 className="stage-title">{stage.title}</h3>
            <p className="stage-desc">{stage.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
