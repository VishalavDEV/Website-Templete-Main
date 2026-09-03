import React, { useState } from 'react';
import { Material, MATERIALS_DATA } from '../../data/materials';

export const MaterialExplorer: React.FC = () => {
  const [activeMaterialId, setActiveMaterialId] = useState<string>('CONCRETE');

  const currentMaterial = MATERIALS_DATA.find((m) => m.id === activeMaterialId) || MATERIALS_DATA[0];

  return (
    <div className="material-explorer-block">
      <div className="material-title-wrap">
        <h2 className="material-section-title">MATERIAL IS LANGUAGE.</h2>
      </div>

      <div className="material-nav-pills" role="tablist" aria-label="Architectural Materials">
        {MATERIALS_DATA.map((mat) => (
          <button
            key={mat.id}
            role="tab"
            aria-selected={activeMaterialId === mat.id}
            className={`material-tab-btn ${activeMaterialId === mat.id ? 'active' : ''}`}
            onClick={() => setActiveMaterialId(mat.id)}
          >
            {mat.name}
          </button>
        ))}
      </div>

      <div className="material-hero-surface">
        <div
          className="material-macro-canvas"
          style={currentMaterial.textureStyle}
          aria-hidden="true"
        />

        <div className="material-lighting-overlay" aria-hidden="true" />

        <div className="material-surface-content">
          <div className="mat-text-column">
            <h3 className="mat-title">{currentMaterial.name}</h3>
            <p className="mat-essence">{currentMaterial.essence}</p>
            <p className="mat-description">{currentMaterial.description}</p>
          </div>

          <div className="mat-metadata-card">
            <div className="mat-meta-item">
              <span className="mat-meta-label">GEOLOGICAL ORIGIN</span>
              <span className="mat-meta-value">{currentMaterial.origin}</span>
            </div>
            <div className="mat-meta-item">
              <span className="mat-meta-label">SURFACE FINISH</span>
              <span className="mat-meta-value">{currentMaterial.finish}</span>
            </div>
            <div className="mat-meta-item">
              <span className="mat-meta-label">STRUCTURAL COMPRESSIVE</span>
              <span className="mat-meta-value">{currentMaterial.compressive}</span>
            </div>
            <div className="mat-meta-item">
              <span className="mat-meta-label">TACTILE SENSATION</span>
              <span className="mat-meta-value">{currentMaterial.tactile}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
