import React, { useState, useEffect, useCallback } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

export default function CostCalculator({ onOpenQuote }) {
  const [projectType, setProjectType] = useState('residential');
  const [area, setArea] = useState(3500);
  const [finishMultiplier, setFinishMultiplier] = useState(1.25);
  const [selectedAddons, setSelectedAddons] = useState({
    smartBms: true,
    solarArray: true,
    infinityPool: false,
    acousticGlass: false
  });

  const addonPrices = {
    smartBms: 25000,
    solarArray: 20000,
    infinityPool: 35000,
    acousticGlass: 18000
  };

  const [estimate, setEstimate] = useState({
    totalBudget: 962500,
    materialsCost: 433125,
    laborCost: 336875,
    designCost: 115500,
    permitCost: 77000,
    estimatedMonths: 15
  });

  const calculateEstimateLocally = useCallback(() => {
    let baseRate = 220;
    if (projectType === 'commercial') baseRate = 280;
    else if (projectType === 'industrial') baseRate = 160;
    else if (projectType === 'renovation') baseRate = 140;

    let addonsTotal = 0;
    Object.keys(selectedAddons).forEach(k => {
      if (selectedAddons[k]) addonsTotal += addonPrices[k];
    });

    const rawTotal = (area * baseRate * finishMultiplier) + addonsTotal;
    const materials = Math.round(rawTotal * 0.45);
    const labor = Math.round(rawTotal * 0.35);
    const design = Math.round(rawTotal * 0.12);
    const permits = Math.round(rawTotal * 0.08);
    const total = materials + labor + design + permits;

    let months = Math.round(Math.sqrt(area) / 4);
    if (months < 4) months = 4;
    if (months > 28) months = 28;

    return {
      totalBudget: total,
      materialsCost: materials,
      laborCost: labor,
      designCost: design,
      permitCost: permits,
      estimatedMonths: months
    };
  }, [projectType, area, finishMultiplier, selectedAddons]);

  useEffect(() => {
    const fetchEstimateFromBackend = async () => {
      const activeAddonCosts = Object.keys(selectedAddons)
        .filter(k => selectedAddons[k])
        .map(k => addonPrices[k]);

      try {
        const res = await fetch('/api/calculator/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            projectType,
            area,
            finishMultiplier,
            addonCosts: activeAddonCosts
          })
        });
        if (res.ok) {
          const data = await res.json();
          setEstimate({
            totalBudget: data.totalBudget,
            materialsCost: data.materialsCost,
            laborCost: data.laborCost,
            designCost: data.designCost,
            permitCost: data.permitCost,
            estimatedMonths: data.estimatedMonths
          });
          return;
        }
      } catch (e) {
        // Fallback locally
      }
      setEstimate(calculateEstimateLocally());
    };

    fetchEstimateFromBackend();
  }, [projectType, area, finishMultiplier, selectedAddons, calculateEstimateLocally]);

  const toggleAddon = (key) => {
    setSelectedAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="calculator-section perspective-container" id="calculator">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>INSTANT ESTIMATION</div>
          <h2 className="section-title">PROJECT COST CALCULATOR</h2>
          <p className="section-desc" style={{ margin: '12px auto 0 auto' }}>
            Estimate budget, material allocation, and completion timeline for your architectural or commercial project in real time with our Spring Boot estimation engine.
          </p>
        </div>

        <div className="calc-wrapper tilt-3d">
          <div className="calc-controls">
            {/* 1. Project Type */}
            <div className="calc-field-group">
              <label className="calc-label">1. Select Project Type</label>
              <div className="calc-type-grid">
                {[
                  { key: 'residential', label: '🏢 Residential / Villa' },
                  { key: 'commercial', label: '🏬 Commercial Office' },
                  { key: 'industrial', label: '🏗️ Industrial Logistics' },
                  { key: 'renovation', label: '🔨 Structural Renovation' }
                ].map(t => (
                  <button
                    key={t.key}
                    type="button"
                    className={`calc-type-btn ${projectType === t.key ? 'active' : ''}`}
                    onClick={() => setProjectType(t.key)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area Slider */}
            <div className="calc-field-group">
              <div className="slider-val-display">
                <label className="calc-label" style={{ margin: 0 }}>2. Built-up Area (Sq Ft)</label>
                <span className="slider-val-number">{area.toLocaleString()} sq ft</span>
              </div>
              <div className="calc-slider-box">
                <input
                  type="range"
                  className="calc-range-input"
                  min="800"
                  max="30000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value, 10))}
                />
              </div>
            </div>

            {/* 3. Finish Grade */}
            <div className="calc-field-group">
              <label className="calc-label">3. Finish & Engineering Tier</label>
              <div className="calc-type-grid">
                {[
                  { multiplier: 1.0, label: 'Standard Grade' },
                  { multiplier: 1.25, label: 'Premium Luxe' },
                  { multiplier: 1.55, label: 'Ultra-Luxury Custom' }
                ].map(f => (
                  <button
                    key={f.multiplier}
                    type="button"
                    className={`calc-finish-btn ${finishMultiplier === f.multiplier ? 'active' : ''}`}
                    onClick={() => setFinishMultiplier(f.multiplier)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Add-ons */}
            <div className="calc-field-group">
              <label className="calc-label">4. Architectural Add-ons</label>
              <div className="calc-addons-grid">
                <label className="calc-checkbox-label">
                  <input
                    type="checkbox"
                    className="calc-addon-check"
                    checked={selectedAddons.smartBms}
                    onChange={() => toggleAddon('smartBms')}
                  />
                  <span>Smart BMS & Automation (+$25k)</span>
                </label>

                <label className="calc-checkbox-label">
                  <input
                    type="checkbox"
                    className="calc-addon-check"
                    checked={selectedAddons.solarArray}
                    onChange={() => toggleAddon('solarArray')}
                  />
                  <span>Solar Array & Battery (+$20k)</span>
                </label>

                <label className="calc-checkbox-label">
                  <input
                    type="checkbox"
                    className="calc-addon-check"
                    checked={selectedAddons.infinityPool}
                    onChange={() => toggleAddon('infinityPool')}
                  />
                  <span>Infinity Pool / Landscape (+$35k)</span>
                </label>

                <label className="calc-checkbox-label">
                  <input
                    type="checkbox"
                    className="calc-addon-check"
                    checked={selectedAddons.acousticGlass}
                    onChange={() => toggleAddon('acousticGlass')}
                  />
                  <span>Acoustic Glass Walls (+$18k)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="calc-result-card">
            <div>
              <div className="calc-result-header">
                <span className="estimate-title">Estimated Budget Range</span>
                <div className="estimate-amount">${estimate.totalBudget.toLocaleString()}</div>
                <div className="estimate-timeline">
                  <Clock size={16} />
                  <span>Estimated Timeline: ~{estimate.estimatedMonths} Months</span>
                </div>
              </div>

              <ul className="breakdown-list" style={{ marginTop: '24px' }}>
                <li className="breakdown-item">
                  <span>Materials & Concrete:</span>
                  <span>${estimate.materialsCost.toLocaleString()}</span>
                </li>
                <li className="breakdown-item">
                  <span>Engineering & Labor:</span>
                  <span>${estimate.laborCost.toLocaleString()}</span>
                </li>
                <li className="breakdown-item">
                  <span>Architectural Design & BIM:</span>
                  <span>${estimate.designCost.toLocaleString()}</span>
                </li>
                <li className="breakdown-item">
                  <span>Permits & Compliance:</span>
                  <span>${estimate.permitCost.toLocaleString()}</span>
                </li>
              </ul>
            </div>

            <button className="btn btn-primary" onClick={onOpenQuote} style={{ width: '100%' }}>
              GET OFFICIAL PROPOSAL
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
