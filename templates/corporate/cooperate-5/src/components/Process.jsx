import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/corporateData';

export default function Process() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section className="section-warm" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto 60px' }}>
          <div className="editorial-tag" style={{ justifyContent: 'center' }}>
            <div className="editorial-tag-line"></div>
            <span className="label-caps">DELIVERY LIFECYCLE</span>
          </div>
          <h2 className="editorial-heading-lg">SYSTEMS ENGINEERING PROCESS</h2>
          <p className="editorial-desc" style={{ margin: '0 auto' }}>
            A deterministic five-phase delivery methodology designed to eliminate integration risk and deliver resilient production infrastructure.
          </p>
        </div>

        {/* Vertical Journey Timeline */}
        <div className="process-vertical-journey">
          <div className="process-spine-line"></div>

          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <div
                key={stage.step}
                className={`process-journey-stage ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStepIdx(idx)}
                onMouseEnter={() => setActiveStepIdx(idx)}
              >
                <div className="process-stage-node">
                  {stage.step}
                </div>

                <div className="process-stage-content">
                  <div className="stage-tagline-caps">{stage.tagline}</div>
                  <h3 className="stage-title-editorial">{stage.name}</h3>
                  <p className="stage-desc-text">{stage.description}</p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                    {stage.deliverables.map((item, dIdx) => (
                      <span key={dIdx} className="service-chip" style={{ fontSize: '11px' }}>
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
