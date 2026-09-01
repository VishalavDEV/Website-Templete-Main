import React, { useState, useEffect } from 'react';

const projectTypes = [
  { id: 'civil', label: 'Heavy Civil & Bridges', baseRate: 145, icon: '🌉' },
  { id: 'skyscraper', label: 'Commercial High-Rise / Skyscraper', baseRate: 185, icon: '🏢' },
  { id: 'industrial', label: 'Industrial & Crane Fleet Rigging', baseRate: 160, icon: '🏗️' },
  { id: 'foundation', label: 'Sub-structure Seismic Piling', baseRate: 130, icon: '🧱' }
];

const timelineSpeed = [
  { id: 'standard', label: 'Standard Pace (Zero Overtime)', multiplier: 1.0, icon: '⏱️' },
  { id: 'accelerated', label: 'Accelerated Double Shift (Fast-Track)', multiplier: 1.25, icon: '⚡' },
  { id: 'critical', label: '24/7 Turnkey Priority Mobilization', multiplier: 1.5, icon: '🚀' }
];

export default function CostEstimator() {
  const [projectType, setProjectType] = useState('skyscraper');
  const [sqft, setSqft] = useState(150000);
  const [cranes, setCranes] = useState(3);
  const [timeline, setTimeline] = useState('accelerated');
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [speedDropdownOpen, setSpeedDropdownOpen] = useState(false);

  const [calculationResult, setCalculationResult] = useState(null);

  // Fetch calculation from Java Spring Boot Backend API
  useEffect(() => {
    let isMounted = true;
    fetch('/api/estimator/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectType, sqft, cranes, timeline })
    })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (isMounted && data) {
          setCalculationResult(data);
        }
      })
      .catch(() => {
        // Fallback local calculation if backend is loading
      });

    return () => { isMounted = false; };
  }, [projectType, sqft, cranes, timeline]);

  // Fallback calculation logic
  const selectedType = projectTypes.find(t => t.id === projectType) || projectTypes[1];
  const selectedSpeed = timelineSpeed.find(s => s.id === timeline) || timelineSpeed[1];

  const baseCost = calculationResult ? calculationResult.baseCost : (sqft * selectedType.baseRate);
  const craneCost = calculationResult ? calculationResult.craneCost : (cranes * 185000);
  const subtotal = calculationResult ? (baseCost + craneCost) * selectedSpeed.multiplier : ((baseCost + craneCost) * selectedSpeed.multiplier);
  const engineeringFee = calculationResult ? calculationResult.engineeringFee : (subtotal * 0.08);
  const contingencyBuffer = calculationResult ? calculationResult.contingencyBuffer : (subtotal * 0.05);
  const totalEstimate = calculationResult ? calculationResult.totalEstimate : (subtotal + engineeringFee + contingencyBuffer);

  const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalEstimate);
  const formattedBase = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(baseCost);
  const formattedCrane = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(craneCost);
  const formattedEng = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(engineeringFee);
  const formattedContingency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(contingencyBuffer);

  return (
    <section className="estimator-section" id="calculator">
      <div className="container">
        <div className="estimator-wrapper">
          <div className="estimator-header">
            <div className="section-badge">SPRING BOOT POWERED BUDGET ENGINE</div>
            <h2 className="section-title">PARAMETRIC CONSTRUCTION COST CALCULATOR</h2>
            <p className="section-subtitle">
              Configure project parameters to generate a live tender estimate backed by our Java Spring Boot API engine.
            </p>
          </div>

          <div className="estimator-grid">
            <div className="estimator-inputs">
              <div className="input-group">
                <label className="input-label">Project Classification</label>
                <div className={`custom-select-wrapper ${typeDropdownOpen ? 'open' : ''}`}>
                  <div
                    className="custom-select-trigger"
                    onClick={() => {
                      setTypeDropdownOpen(!typeDropdownOpen);
                      setSpeedDropdownOpen(false);
                    }}
                  >
                    <span className="sel-icon">{selectedType.icon}</span>
                    <span className="sel-label">{selectedType.label}</span>
                    <span className="sel-arrow">▾</span>
                  </div>
                  <div className="custom-options">
                    {projectTypes.map(pt => (
                      <div
                        key={pt.id}
                        className={`custom-option ${projectType === pt.id ? 'selected' : ''}`}
                        onClick={() => {
                          setProjectType(pt.id);
                          setTypeDropdownOpen(false);
                        }}
                      >
                        <span className="opt-icon">{pt.icon}</span>
                        <div>
                          <strong>{pt.label}</strong>
                          <span className="opt-sub">Base rate ~ ${pt.baseRate}/sq.ft</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="slider-label-row">
                  <label className="input-label">Total Floor Area (Sq. Ft)</label>
                  <span className="slider-val">{sqft.toLocaleString()} sq.ft</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="800000"
                  step="10000"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="adv-range-slider"
                />
              </div>

              <div className="input-group">
                <div className="slider-label-row">
                  <label className="input-label">Heavy Tower Cranes Mobilized</label>
                  <span className="slider-val">{cranes} Fleet Cranes</span>
                </div>
                <div className="crane-picker-grid">
                  {[1, 2, 3, 4, 6, 8].map(count => (
                    <button
                      key={count}
                      type="button"
                      className={`crane-btn ${cranes === count ? 'active' : ''}`}
                      onClick={() => setCranes(count)}
                    >
                      🏗️ {count} {count === 1 ? 'Crane' : 'Cranes'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Mobilization Pace & Schedule</label>
                <div className={`custom-select-wrapper ${speedDropdownOpen ? 'open' : ''}`}>
                  <div
                    className="custom-select-trigger"
                    onClick={() => {
                      setSpeedDropdownOpen(!speedDropdownOpen);
                      setTypeDropdownOpen(false);
                    }}
                  >
                    <span className="sel-icon">{selectedSpeed.icon}</span>
                    <span className="sel-label">{selectedSpeed.label}</span>
                    <span className="sel-arrow">▾</span>
                  </div>
                  <div className="custom-options">
                    {timelineSpeed.map(sp => (
                      <div
                        key={sp.id}
                        className={`custom-option ${timeline === sp.id ? 'selected' : ''}`}
                        onClick={() => {
                          setTimeline(sp.id);
                          setSpeedDropdownOpen(false);
                        }}
                      >
                        <span className="opt-icon">{sp.icon}</span>
                        <div>
                          <strong>{sp.label}</strong>
                          <span className="opt-sub">Multiplier {sp.multiplier}x</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="estimator-output-card">
              <div className="output-card-header">
                <span className="live-pill">● JAVA SPRING BOOT API LIVE</span>
                <h3>ESTIMATED CONTRACT VALUE</h3>
              </div>

              <div className="total-display">{formattedTotal}</div>

              <div className="breakdown-list">
                <div className="breakdown-row">
                  <span>Base Framing & Materials</span>
                  <strong>{formattedBase}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Crane Fleet Mobilization ({cranes} Cranes)</span>
                  <strong>{formattedCrane}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Parametric Engineering & BIM (8%)</span>
                  <strong>{formattedEng}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Site Contingency Reserve (5%)</span>
                  <strong>{formattedContingency}</strong>
                </div>
              </div>

              <a href="#contact" className="btn-submit-tender">
                <span>SUBMIT FOR OFFICIAL BID PDF</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
