import React from 'react';
import { MaterialExplorer } from '../materials/MaterialExplorer';
import { ProcessTimeline } from './ProcessTimeline';

export const ProcessSection: React.FC = () => {
  return (
    <section className="material-process-section" id="process" aria-label="Materials and Process">
      <div className="material-header-bar">
        <span className="hero-issue-tag" style={{ color: 'var(--color-clay)' }}>
          05 / 08 — TECTONIC STUDY
        </span>
        <span className="meta-label" style={{ color: 'var(--color-stone)' }}>
          RAW MATERIAL ALCHEMY
        </span>
      </div>

      {/* 17 & 18 Material Explorer */}
      <MaterialExplorer />

      {/* 19 & 20 Process Timeline & Drawing Schematic */}
      <ProcessTimeline />
    </section>
  );
};
