import React, { useState, useEffect, useCallback } from 'react';
import { Calculator, ArrowRight, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export default function Estimator({ onOpenConsultModal }) {
  const [projectType, setProjectType] = useState('luxury-villa');
  const [area, setArea] = useState(6500);
  const [gradeMultiplier, setGradeMultiplier] = useState(1.0);
  const [gradeName, setGradeName] = useState('premium');

  const [estimate, setEstimate] = useState({
    totalInvestment: 3120000,
    architectureCost: 468000,
    structuralCost: 1248000,
    finishesAndPoolCost: 1404000,
    estimatedTimelineMonths: 16,
    formattedTotal: '$3,120,000'
  });

  const calculate = useCallback(async (pType, sqFt, mult) => {
    try {
      const res = await fetch('/api/estimator/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType: pType,
          squareFeet: sqFt,
          gradeMultiplier: mult
        })
      });
      if (res.ok) {
        const data = await res.json();
        setEstimate(data);
        return;
      }
    } catch (e) {
      // Fallback local calculation
    }

    // Local calculation fallback if API not reachable
    let baseSqFt = 480;
    if (pType === 'modern-remodel') baseSqFt = 360;
    if (pType === 'kitchen-bath') baseSqFt = 320;

    const total = Math.round(sqFt * baseSqFt * mult);
    const arch = Math.round(total * 0.15);
    const shell = Math.round(total * 0.40);
    const finish = Math.round(total * 0.45);
    const months = Math.round(Math.sqrt(sqFt) * 0.12 + 8);

    setEstimate({
      totalInvestment: total,
      architectureCost: arch,
      structuralCost: shell,
      finishesAndPoolCost: finish,
      estimatedTimelineMonths: months,
      formattedTotal: `$${total.toLocaleString()}`
    });
  }, []);

  useEffect(() => {
    calculate(projectType, area, gradeMultiplier);
  }, [projectType, area, gradeMultiplier, calculate]);

  const handleGradeSelect = (grade, mult) => {
    setGradeName(grade);
    setGradeMultiplier(mult);
  };

  return (
    <section className="knack-section bg-subtle" id="estimator">
      <div className="container">
        <div className="estimator-container-box">
          <div className="est-left-form">
            <span className="k-tag">PROJECT ESTIMATOR</span>
            <h2 className="k-title">Estimate Your Architectural Vision</h2>
            <p className="k-desc">
              Select your desired parameters for instant parametric budget modeling calculated live via Spring Boot API.
            </p>

            <div className="k-form-group">
              <label>PROJECT TYPE:</label>
              <select
                id="knackProjType"
                className="k-select"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="luxury-villa">New Custom Luxury Villa ($480 / sq ft)</option>
                <option value="modern-remodel">Complete Architectural Remodel ($360 / sq ft)</option>
                <option value="kitchen-bath">Kitchens & Bathrooms Wing ($320 / sq ft)</option>
              </select>
            </div>

            <div className="k-form-group">
              <div className="range-header">
                <label>LIVING & INTERIOR AREA:</label>
                <span id="knackAreaDisplay" className="area-tag">
                  {area.toLocaleString()} SQ FT
                </span>
              </div>
              <input
                type="range"
                id="knackAreaRange"
                min="2500"
                max="20000"
                step="500"
                value={area}
                className="k-range"
                onChange={(e) => setArea(parseInt(e.target.value, 10))}
              />
            </div>

            <div className="k-form-group">
              <label>ARCHITECTURAL FINISH GRADE:</label>
              <div className="grade-toggle-group">
                <button
                  type="button"
                  className={`grade-btn ${gradeName === 'premium' ? 'active' : ''}`}
                  onClick={() => handleGradeSelect('premium', 1.0)}
                >
                  PREMIUM BESPOKE
                </button>
                <button
                  type="button"
                  className={`grade-btn ${gradeName === 'ultra' ? 'active' : ''}`}
                  onClick={() => handleGradeSelect('ultra', 1.25)}
                >
                  ULTRA LUXURY
                </button>
                <button
                  type="button"
                  className={`grade-btn ${gradeName === 'masterpiece' ? 'active' : ''}`}
                  onClick={() => handleGradeSelect('masterpiece', 1.5)}
                >
                  ICONIC LANDMARK
                </button>
              </div>
            </div>
          </div>

          <div className="est-right-result">
            <div className="result-top">
              <span className="res-sub">ESTIMATED TURNKEY INVESTMENT</span>
              <div className="res-amount" id="knackEstTotal">
                {estimate.formattedTotal}
              </div>
              <span className="res-timeline" id="knackEstTimeline">
                ⏱️ Estimated Milestone: ~{estimate.estimatedTimelineMonths} Months (Full Design + Build)
              </span>
            </div>

            <div className="result-breakdown">
              <div className="res-row">
                <span>Architecture & Engineering:</span>
                <strong id="costArch">${estimate.architectureCost?.toLocaleString()}</strong>
              </div>
              <div className="res-row">
                <span>Structural & Shell Framing:</span>
                <strong id="costShell">${estimate.structuralCost?.toLocaleString()}</strong>
              </div>
              <div className="res-row">
                <span>Custom Finishes & Pool:</span>
                <strong id="costFinish">${estimate.finishesAndPoolCost?.toLocaleString()}</strong>
              </div>
            </div>

            <button
              className="btn-honey-gold full-w trigger-consult-modal"
              onClick={onOpenConsultModal}
            >
              Schedule Private Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
