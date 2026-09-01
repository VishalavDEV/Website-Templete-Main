import React, { useState, useEffect } from 'react';

export default function Configurator({ onConfigureChange }) {
  const [terrain, setTerrain] = useState('lakefront');
  const [area, setArea] = useState(450);
  const [poolPackage, setPoolPackage] = useState('infinity25');
  const [minergieP, setMinergieP] = useState(true);
  const [subterraneanVault, setSubterraneanVault] = useState(false);

  const [estimate, setEstimate] = useState({
    formattedTotal: '€3,595,000',
    totalEstimatedCost: 3595000,
    livingArea: 216,
    suitesArea: 162,
    wellnessArea: 72,
    blueprintLabels: {
      living: 'LIVING & PAVILION (216 M²)',
      suites: 'MASTER SUITES (162 M²)',
      wellness: 'WELLNESS & SPA (72 M²)',
      pool: 'INFINITY WATER BASIN (25M)'
    },
    energyStandard: 'Swiss Minergie-P',
    warranty: '10-Year Guarantee'
  });

  const [terrainOpen, setTerrainOpen] = useState(false);
  const [poolOpen, setPoolOpen] = useState(false);

  // Fetch estimate from Spring Boot API whenever parameters change
  useEffect(() => {
    const fetchEstimate = async () => {
      try {
        const res = await fetch('/api/configurator/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            terrain,
            area,
            poolPackage,
            minergieP,
            subterraneanVault
          })
        });
        if (res.ok) {
          const data = await res.json();
          setEstimate(data);
          if (onConfigureChange) {
            onConfigureChange({
              terrain,
              area,
              poolPackage,
              estimate: data
            });
          }
        }
      } catch (err) {
        console.warn('API estimate calculation error, using local computation:', err);
        // Fallback local calculation
        const terrainRates = { lakefront: 7500, mountain: 8200, forest: 6800 };
        const poolCosts = { infinity25: 220000, reflection: 140000, indoor: 380000, none: 0 };
        const base = (terrainRates[terrain] || 7500) * area;
        const pool = poolCosts[poolPackage] || 0;
        const extra = (minergieP ? 65000 : 0) + (subterraneanVault ? 180000 : 0);
        const total = base + pool + extra;

        setEstimate({
          formattedTotal: `€${total.toLocaleString()}`,
          totalEstimatedCost: total,
          livingArea: Math.round(area * 0.48),
          suitesArea: Math.round(area * 0.36),
          wellnessArea: Math.round(area * 0.16),
          blueprintLabels: {
            living: `LIVING & PAVILION (${Math.round(area * 0.48)} M²)`,
            suites: `MASTER SUITES (${Math.round(area * 0.36)} M²)`,
            wellness: `WELLNESS & SPA (${Math.round(area * 0.16)} M²)`,
            pool: poolPackage === 'reflection' ? 'MIRROR REFLECTION POND & FIRE PIT' :
                  poolPackage === 'indoor' ? 'INDOOR SUBTERRANEAN SPA & POOL' : 'INFINITY WATER BASIN (25M)'
          },
          energyStandard: 'Swiss Minergie-P',
          warranty: '10-Year Guarantee'
        });
      }
    };

    fetchEstimate();
  }, [terrain, area, poolPackage, minergieP, subterraneanVault, onConfigureChange]);

  const terrainOptions = [
    { value: 'lakefront', icon: '🏞️', title: "Lakefront Water's Edge", sub: 'Cantilevered pier & reflection pool (€7,500/m²)' },
    { value: 'mountain', icon: '⛰️', title: 'Alpine Mountain Slope', sub: 'Granite rock foundation & thermal glass (€8,200/m²)' },
    { value: 'forest', icon: '🌲', title: 'Private Pine Forest Estate', sub: 'Continuous timber wrap & acoustic peace (€6,800/m²)' }
  ];

  const poolOptions = [
    { value: 'infinity25', icon: '🏊', title: '25m Black Quartz Infinity Pool', sub: 'Perimeter overflow + heated SPA (€220,000)' },
    { value: 'reflection', icon: '🌊', title: 'Mirror Reflection Pool & Fire Pit', sub: 'Shallow architectural reflection pond (€140,000)' },
    { value: 'indoor', icon: '♨️', title: 'Indoor Subterranean Wellness Suite', sub: 'Thermal bath, sauna & cold plunge (€380,000)' }
  ];

  const activeTerrain = terrainOptions.find((o) => o.value === terrain) || terrainOptions[0];
  const activePool = poolOptions.find((o) => o.value === poolPackage) || poolOptions[0];

  return (
    <section className="config-section" id="configurator">
      <div className="container">
        <div className="blueprint-hud-container">
          {/* Left Column: Interactive 2D Blueprint Schematic HUD */}
          <div className="blueprint-preview-col">
            <div className="blueprint-hud-header">
              <div className="hud-chip">LIVE BIM SCHEMATIC // REV 4.2</div>
              <div className="hud-coords">GENEVA STUDIO • SPRING BOOT ENGINE</div>
            </div>

            <div className="blueprint-canvas-box" id="blueprintSchematic">
              <div className="bp-grid-lines"></div>
              {/* Dynamic Floor Plan Visual */}
              <div className="bp-floorplan-visual">
                <div className="bp-room room-living">
                  <span className="room-lbl">
                    {estimate.blueprintLabels?.living || `LIVING & PAVILION (${estimate.livingArea} M²)`}
                  </span>
                </div>
                <div className="bp-room room-suites">
                  <span className="room-lbl">
                    {estimate.blueprintLabels?.suites || `MASTER SUITES (${estimate.suitesArea} M²)`}
                  </span>
                </div>
                <div className="bp-room room-wellness">
                  <span className="room-lbl">
                    {estimate.blueprintLabels?.wellness || `WELLNESS & SPA (${estimate.wellnessArea} M²)`}
                  </span>
                </div>
                <div className="bp-pool-zone" id="bpPoolZone">
                  <span className="room-lbl">
                    {estimate.blueprintLabels?.pool || 'INFINITY WATER BASIN (25M)'}
                  </span>
                </div>
              </div>
              <div className="bp-crosshair"></div>
            </div>

            <div className="blueprint-hud-footer">
              <div className="b-spec-item">
                <strong>{estimate.energyStandard || 'Minergie-P'}</strong>
                <span>Energy Standard</span>
              </div>
              <div className="b-spec-item">
                <strong>100%</strong>
                <span>Seismic Stability</span>
              </div>
              <div className="b-spec-item">
                <strong>{estimate.warranty || 'Turnkey'}</strong>
                <span>Swiss Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Configuration Controls */}
          <div className="blueprint-controls-col">
            <span className="mini-tag">PARAMETRIC ARCHITECTURAL ENGINE</span>
            <h2 className="config-hud-title">Configure Your Residence</h2>
            <p className="config-hud-desc">
              Adjust terrain landscape, living footprint, and water amenities to generate real-time turnkey budgetary benchmarks calculated by the Spring Boot server.
            </p>

            <div className="config-fields-list">
              {/* Selector 1: Terrain */}
              <div className="cfg-item">
                <label className="cfg-lbl">01 // TERRAIN & FOUNDATION TYPE</label>
                <div className={`custom-villa-select ${terrainOpen ? 'open' : ''}`} id="terrainSelect">
                  <div
                    className="villa-select-trigger"
                    onClick={() => {
                      setTerrainOpen(!terrainOpen);
                      setPoolOpen(false);
                    }}
                  >
                    <span className="v-icon">{activeTerrain.icon}</span>
                    <span className="v-label">{activeTerrain.title}</span>
                    <span className="v-arrow">▾</span>
                  </div>
                  {terrainOpen && (
                    <div className="villa-select-dropdown" style={{ display: 'block' }}>
                      {terrainOptions.map((opt) => (
                        <div
                          key={opt.value}
                          className={`v-opt ${terrain === opt.value ? 'selected' : ''}`}
                          onClick={() => {
                            setTerrain(opt.value);
                            setTerrainOpen(false);
                          }}
                        >
                          <div>
                            <strong>{opt.title}</strong>
                            <small>{opt.sub}</small>
                          </div>
                          <span>✓</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Selector 2: Area Slider */}
              <div className="cfg-item">
                <label className="cfg-lbl">
                  02 // TOTAL INTERIOR LIVING AREA: <span className="color-copper">{area} m²</span>
                </label>
                <input
                  type="range"
                  min="250"
                  max="1200"
                  step="25"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value, 10))}
                  className="copper-slider"
                />
                <div className="slider-scale-ticks">
                  <span>250 m² (Pavilion)</span>
                  <span>650 m² (Villa)</span>
                  <span>1200 m² (Estate)</span>
                </div>
              </div>

              {/* Selector 3: Pool Package */}
              <div className="cfg-item">
                <label className="cfg-lbl">03 // POOL & WELLNESS PACKAGE</label>
                <div className={`custom-villa-select ${poolOpen ? 'open' : ''}`} id="poolSelect">
                  <div
                    className="villa-select-trigger"
                    onClick={() => {
                      setPoolOpen(!poolOpen);
                      setTerrainOpen(false);
                    }}
                  >
                    <span className="v-icon">{activePool.icon}</span>
                    <span className="v-label">{activePool.title}</span>
                    <span className="v-arrow">▾</span>
                  </div>
                  {poolOpen && (
                    <div className="villa-select-dropdown" style={{ display: 'block' }}>
                      {poolOptions.map((opt) => (
                        <div
                          key={opt.value}
                          className={`v-opt ${poolPackage === opt.value ? 'selected' : ''}`}
                          onClick={() => {
                            setPoolPackage(opt.value);
                            setPoolOpen(false);
                          }}
                        >
                          <div>
                            <strong>{opt.title}</strong>
                            <small>{opt.sub}</small>
                          </div>
                          <span>✓</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Options */}
              <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                  <input
                    type="checkbox"
                    checked={minergieP}
                    onChange={(e) => setMinergieP(e.target.checked)}
                    style={{ accentColor: 'var(--color-copper)' }}
                  />
                  <span>Minergie-P Zero Carbon (+€65,000)</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                  <input
                    type="checkbox"
                    checked={subterraneanVault}
                    onChange={(e) => setSubterraneanVault(e.target.checked)}
                    style={{ accentColor: 'var(--color-copper)' }}
                  />
                  <span>Subterranean Wine Vault (+€180,000)</span>
                </label>
              </div>
            </div>

            {/* Total Result Card */}
            <div className="hud-invoice-card">
              <div className="invoice-left">
                <span className="inv-label">TURNKEY ARCHITECTURAL ESTIMATE:</span>
                <div className="inv-price">{estimate.formattedTotal}</div>
                <small className="inv-note">
                  *Includes structural permits, interior fit-out, and 10-year Swiss warranty.
                </small>
              </div>
              <a href="#contact" className="btn-hud-commission">
                COMMISSION CONSULTATION →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
