import React, { useState, useEffect } from 'react';
import { calculateEstimator } from '../services/api';

export default function ConcreteEstimator() {
  const [siteAreaSqm, setSiteAreaSqm] = useState(3500);
  const [buildingFloors, setBuildingFloors] = useState(12);
  const [concreteGrade, setConcreteGrade] = useState('C80 Self-Compacting');
  const [structuralType, setStructuralType] = useState('Board-Formed Monolith');
  const [seismicDamping, setSeismicDamping] = useState(true);

  const [result, setResult] = useState(null);
  const [calculating, setCalculating] = useState(false);

  const handleCalculate = async () => {
    setCalculating(true);
    const data = await calculateEstimator({
      siteAreaSqm: Number(siteAreaSqm),
      buildingFloors: Number(buildingFloors),
      concreteGrade,
      structuralType,
      seismicDamping
    });
    setResult(data);
    setCalculating(false);
  };

  useEffect(() => {
    handleCalculate();
  }, [siteAreaSqm, buildingFloors, concreteGrade, structuralType, seismicDamping]);

  return (
    <section id="estimator" className="section-padding" style={{ background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="brutalist-badge">
            // PARAMETRIC STRUCTURAL CALCULATION ENGINE
          </span>
          <h2 className="section-title">
            CONCRETE CORE & CARBON OFFSET ESTIMATOR
          </h2>
          <p className="section-desc">
            Direct real-time structural estimation model executed via the Spring Boot REST backend. Compute concrete volumetric mass, steel tendon ratios, and pozzolanic CO₂ sequestration.
          </p>
        </div>

        {/* 2-Column Interactive Estimator Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '36px',
          alignItems: 'stretch'
        }} className="estimator-grid">

          {/* Left Column: Form Controls */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '2px solid var(--border-strong)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--accent-orange)',
              letterSpacing: '0.1em',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '12px'
            }}>
              INPUT STRUCTURAL PARAMETERS
            </div>

            {/* Site Area Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                <span>FOOTPRINT SITE AREA:</span>
                <strong style={{ color: 'var(--accent-orange)' }}>{siteAreaSqm.toLocaleString()} m²</strong>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="250"
                value={siteAreaSqm}
                onChange={e => setSiteAreaSqm(e.target.value)}
                style={{ width: '100%', accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
              />
            </div>

            {/* Building Floors Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                <span>MONOLITH STOREYS (FLOORS):</span>
                <strong style={{ color: 'var(--accent-orange)' }}>{buildingFloors} Floors</strong>
              </div>
              <input
                type="range"
                min="2"
                max="48"
                step="1"
                value={buildingFloors}
                onChange={e => setBuildingFloors(e.target.value)}
                style={{ width: '100%', accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
              />
            </div>

            {/* Concrete Grade Selection */}
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '8px' }}>
                CONCRETE COMPRESSION SPECIFICATION:
              </label>
              <select
                value={concreteGrade}
                onChange={e => setConcreteGrade(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem'
                }}
              >
                <option value="C40/50">C40/50 Standard Structural Grade (50 MPa)</option>
                <option value="C60/75 Ultra-High">C60/75 Ultra-High Durability Pozzolan (75 MPa)</option>
                <option value="C80 Self-Compacting">C80/95 Self-Compacting Monolith (95 MPa)</option>
              </select>
            </div>

            {/* Structural Typology */}
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '8px' }}>
                STRUCTURAL ARCHITECTURAL SYSTEM:
              </label>
              <select
                value={structuralType}
                onChange={e => setStructuralType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem'
                }}
              >
                <option value="Board-Formed Monolith">Board-Formed Fair-Faced Monolith</option>
                <option value="Cantilever Mega-Frame">Post-Tensioned Cantilever Mega-Frame</option>
                <option value="Precast Ribbed Shell">Precast Modular Ribbed Shell</option>
              </select>
            </div>

            {/* Seismic Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px' }}>
              <input
                type="checkbox"
                id="seismic"
                checked={seismicDamping}
                onChange={e => setSeismicDamping(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
              />
              <label htmlFor="seismic" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', cursor: 'pointer' }}>
                INCLUDE ZONE 4 SEISMIC DAMPING & REINFORCED TENDONS
              </label>
            </div>
          </div>

          {/* Right Column: Output Readout Screen */}
          <div style={{
            background: 'var(--bg-surface-elevated)',
            border: '2px solid var(--border-strong)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '12px',
                marginBottom: '24px'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>
                  // LIVE STRUCTURAL COMPUTATION
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  API 200 OK
                </span>
              </div>

              {result ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>TOTAL GROSS FLOOR AREA</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 900, color: 'var(--text-main)', marginTop: '4px' }}>
                      {result.totalGrossAreaSqm.toLocaleString()} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>m²</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>CONCRETE VOLUME (CUBIC)</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 900, color: 'var(--accent-orange)', marginTop: '4px' }}>
                      {result.concreteVolumeCubicMeters.toLocaleString()} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>m³</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>HIGH-TENSILE STEEL REBAR</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 900, color: 'var(--text-main)', marginTop: '4px' }}>
                      {result.structuralSteelMetricTons.toLocaleString()} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tons</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>CO₂ SEQUESTRATION OFFSET</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 900, color: '#10b981', marginTop: '4px' }}>
                      -{result.carbonMineralizationOffsetTons.toLocaleString()} <span style={{ fontSize: '0.9rem', color: '#10b981' }}>Tons</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>COMPRESSIVE STRENGTH</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>
                      {result.compressiveStrengthMpa} MPa
                    </div>
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>ESTIMATED CURE TIME</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
                      {result.estimatedCureDays} Days
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>Calculating engineering parameters...</div>
              )}
            </div>

            {/* Estimated Budget Banner */}
            <div style={{
              marginTop: '32px',
              padding: '20px',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-strong)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                  ESTIMATED STRUCTURAL CORE BUDGET
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-orange)' }}>
                  ${result ? result.estimatedStructuralBudgetUsd.toLocaleString() : '---'} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>USD</span>
                </div>
              </div>

              <a href="#rfq" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
                LOCK TENDER ESTIMATE
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
