import React, { useState, useEffect } from 'react';
import { ArrowRight, Sliders } from 'lucide-react';
import { calculateEstimator } from '../services/api';

export default function AerodynamicEstimator({ onOpenRfqWithEstimate }) {
  const [params, setParams] = useState({
    targetHeightMeters: 240,
    totalFloors: 58,
    aerodynamicProfile: 'Twisted Vortex Aerofoil',
    facadeType: 'Dynamic Origami PV Louvers',
    siteAreaSqm: 3800,
    skyGardenAtriums: true
  });

  const [result, setResult] = useState(null);

  const triggerCalculate = async () => {
    const res = await calculateEstimator(params);
    setResult(res);
  };

  useEffect(() => {
    triggerCalculate();
  }, [params]);

  return (
    <section id="estimator" style={{ padding: '90px 0', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag" style={{ marginBottom: '14px' }}>
            Feasibility Tool
          </div>
          <h2 className="section-title" style={{ marginBottom: '10px' }}>
            Project Estimator
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Estimate floor area, sustainability offsets, and structural budgets based on preliminary architectural parameters.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '36px', alignItems: 'start' }} className="estimator-grid">
          
          {/* Controls */}
          <div className="aero-card" style={{ padding: '28px', background: 'var(--bg-surface)' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '20px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={16} /> Parameters
            </h3>

            {/* Height */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Target Height</span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {params.targetHeightMeters} meters ({params.totalFloors} floors)
                </span>
              </div>
              <input
                type="range"
                min="80"
                max="450"
                step="10"
                value={params.targetHeightMeters}
                onChange={(e) => setParams({ ...params, targetHeightMeters: parseFloat(e.target.value), totalFloors: Math.round(parseFloat(e.target.value) / 3.8) })}
                style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
              />
            </div>

            {/* Site Area */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Site Footprint</span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-main)' }}>
                  {params.siteAreaSqm.toLocaleString()} m²
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="8000"
                step="250"
                value={params.siteAreaSqm}
                onChange={(e) => setParams({ ...params, siteAreaSqm: parseFloat(e.target.value) })}
                style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
              />
            </div>

            {/* Typology */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Aerodynamic Profile
              </label>
              <select
                value={params.aerodynamicProfile}
                onChange={(e) => setParams({ ...params, aerodynamicProfile: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              >
                <option value="Twisted Vortex Aerofoil">Twisted Aerofoil (Low Drag)</option>
                <option value="Elliptical Double-Curvature">Elliptical Double-Curvature</option>
                <option value="Diagrid Kinetic Shell">Diagrid Structural Shell</option>
              </select>
            </div>

            {/* Facade */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Facade System
              </label>
              <select
                value={params.facadeType}
                onChange={(e) => setParams({ ...params, facadeType: e.target.value })}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              >
                <option value="Dynamic Origami PV Louvers">Dynamic Origami Solar Louvers</option>
                <option value="Biomorphic Living Breath Skin">Biomorphic Living Wall Skin</option>
                <option value="Triple-Glazed Aerogel Skin">Triple-Glazed Insulated Envelope</option>
              </select>
            </div>

            {/* Garden Checkbox */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={params.skyGardenAtriums}
                onChange={(e) => setParams({ ...params, skyGardenAtriums: e.target.checked })}
                style={{ accentColor: 'var(--accent-primary)' }}
              />
              <span>Include Sky Garden Terraces (-5% wind drag)</span>
            </label>
          </div>

          {/* Results Card */}
          <div className="aero-card" style={{ padding: '30px', background: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Preliminary Assessment</h3>
              <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', padding: '4px 10px', borderRadius: '4px' }}>
                {result?.leedCertificationLevel || 'LEED Platinum Target'}
              </span>
            </div>

            {/* 4 Clean Metric Boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '24px' }}>
              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>GROSS FLOOR AREA</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginTop: '2px' }}>
                  {result ? `${result.grossFloorAreaSqm?.toLocaleString()} m²` : '--'}
                </div>
              </div>

              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>DRAG REDUCTION</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginTop: '2px' }}>
                  {result ? `-${result.aerodynamicDragReductionPercent}%` : '--'}
                </div>
              </div>

              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>SOLAR GENERATION</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginTop: '2px' }}>
                  {result ? `${result.solarEnergyGeneratedMwhYear} MWh` : '--'}
                </div>
              </div>

              <div style={{ background: 'var(--card-subtle-bg)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>ESTIMATED TIMELINE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginTop: '2px' }}>
                  {result ? `${result.estimatedConstructionMonths} Months` : '--'}
                </div>
              </div>
            </div>

            {/* Budget Banner */}
            <div
              style={{
                background: 'var(--card-subtle-bg)',
                border: '1px solid var(--border-strong)',
                borderRadius: '8px',
                padding: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>ESTIMATED BUDGET</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--text-main)' }}>
                  ${result?.estimatedStructuralBudgetMln}M USD
                </div>
              </div>

              <button
                onClick={() => onOpenRfqWithEstimate(params, result)}
                className="btn btn-primary"
                style={{ padding: '10px 18px', fontSize: '0.86rem' }}
              >
                Request Proposal <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .estimator-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
