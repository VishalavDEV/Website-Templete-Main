import React, { useState, useEffect } from 'react';
import { calculateEstimate } from '../api/client';

export default function EstimatorSection({ onOpenQuoteModal }) {
  const [buildingType, setBuildingType] = useState('commercial');
  const [areaSqFt, setAreaSqFt] = useState(85000);
  const [lodMultiplier, setLodMultiplier] = useState(1.0);
  const [estimateData, setEstimateData] = useState({
    totalInvestment: 35700000,
    structuralSteelCost: 14280000,
    smartFacadeCost: 10710000,
    bimMepCost: 10710000,
    estimatedMonths: 24,
    formattedTotal: '$35,700,000'
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCurrent = true;
    const fetchEstimate = async () => {
      setLoading(true);
      const res = await calculateEstimate(buildingType, areaSqFt, lodMultiplier);
      if (isCurrent && res) {
        setEstimateData(res);
      }
      setLoading(false);
    };

    const timeout = setTimeout(fetchEstimate, 100);
    return () => {
      isCurrent = false;
      clearTimeout(timeout);
    };
  }, [buildingType, areaSqFt, lodMultiplier]);

  return (
    <section className="futurix-estimator-section" id="estimator">
      <div className="container">
        <div className="section-title-box">
          <div className="smart-tech-pill">
            <span>PARAMETRIC COST ESTIMATOR</span>
            <span className="cyber-slashes">///</span>
          </div>
          <h2>Automated 3D BIM Tender & Turnkey Calculation</h2>
        </div>

        <div className="estimator-tech-box">
          {/* Controls Side */}
          <div className="est-form-side">
            <div className="form-row">
              <label>1. BUILDING CLASSIFICATION</label>
              <select 
                value={buildingType} 
                onChange={(e) => setBuildingType(e.target.value)} 
                className="tech-select"
                id="bimBuildingType"
              >
                <option value="commercial">Commercial High-Rise Complex ($420 / sq ft)</option>
                <option value="smart-residential">Smart Residential Smart-Tower ($380 / sq ft)</option>
                <option value="datacenter">Hyperscale Modular Data Center ($580 / sq ft)</option>
              </select>
            </div>

            <div className="form-row">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label>2. STRUCTURAL AREA (SQ FT)</label>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  {areaSqFt.toLocaleString()} SQ FT
                </span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="400000" 
                step="5000" 
                value={areaSqFt} 
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="tech-range" 
                id="bimAreaRange"
              />
            </div>

            <div className="form-row">
              <label>3. 3D BIM LEVEL OF DEVELOPMENT (LOD)</label>
              <div className="lod-button-group">
                <button 
                  type="button" 
                  className={`lod-btn ${lodMultiplier === 1.0 ? 'active' : ''}`}
                  onClick={() => setLodMultiplier(1.0)}
                >
                  LOD 300 (Design)
                </button>
                <button 
                  type="button" 
                  className={`lod-btn ${lodMultiplier === 1.15 ? 'active' : ''}`}
                  onClick={() => setLodMultiplier(1.15)}
                >
                  LOD 400 (Fabrication)
                </button>
                <button 
                  type="button" 
                  className={`lod-btn ${lodMultiplier === 1.25 ? 'active' : ''}`}
                  onClick={() => setLodMultiplier(1.25)}
                >
                  LOD 500 (Digital Twin)
                </button>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="est-price-side">
            <span className="sub-head">ESTIMATED TURNKEY INVESTMENT (SPRING BOOT VERIFIED)</span>
            <div className="big-price-tag" id="bimEstimatedTotal">
              {loading ? 'CALCULATING...' : estimateData.formattedTotal}
            </div>
            <div className="timeline-tag">
              ⏱️ Estimated Milestone: ~{estimateData.estimatedMonths} Months (Clash-Free 3D Verified)
            </div>

            <div className="breakdown-grid">
              <div className="b-row">
                <span>Structural Steel & Frame:</span> 
                <strong>${(estimateData.structuralSteelCost || 0).toLocaleString()}</strong>
              </div>
              <div className="b-row">
                <span>Smart Facade & Glazing:</span> 
                <strong>${(estimateData.smartFacadeCost || 0).toLocaleString()}</strong>
              </div>
              <div className="b-row">
                <span>BIM MEP & Robotics:</span> 
                <strong>${(estimateData.bimMepCost || 0).toLocaleString()}</strong>
              </div>
            </div>

            <button 
              className="btn-cyan-gradient" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}
              onClick={onOpenQuoteModal}
            >
              REQUEST BINDING EPC TENDER PROPOSAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
