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
    <section className="knack-section w-full max-w-full overflow-x-hidden px-4 py-8 sm:px-6 md:py-16 bg-[var(--bg-subtle)] border-t border-[var(--border-light)]" id="estimator">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold text-[var(--gold-honey)] tracking-widest uppercase mb-2 block">
            PROJECT ESTIMATOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[var(--text-main)] mb-3 leading-tight">
            Estimate Your Architectural Vision
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-body)] max-w-2xl leading-relaxed">
            Select your desired parameters for instant parametric budget modeling calculated live via our precision engineering engine.
          </p>
        </div>

        {/* Multi-Column Stack (Form vs. Summary Sidebar) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          
          {/* Left Inputs / Form Column */}
          <div className="flex-1 w-full space-y-6 bg-[var(--bg-card)] border border-[var(--border-gold)]/40 rounded-2xl p-5 sm:p-8 shadow-xl">
            
            {/* 1. Project Type Selector */}
            <div className="k-form-group">
              <label className="block text-xs font-mono font-bold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                PROJECT TYPE:
              </label>
              <select
                id="knackProjType"
                className="w-full p-3.5 bg-[var(--bg-surface)] text-[var(--text-heading)] border border-[var(--border-light)] rounded-xl font-medium text-xs sm:text-sm focus:outline-none focus:border-[var(--gold-honey)] min-h-[44px]"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="luxury-villa">New Custom Luxury Villa ($480 / sq ft)</option>
                <option value="modern-remodel">Complete Architectural Remodel ($360 / sq ft)</option>
                <option value="kitchen-bath">Kitchens & Bathrooms Wing ($320 / sq ft)</option>
              </select>
            </div>

            {/* 2. Range Area Slider */}
            <div className="k-form-group">
              <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                <label className="text-xs font-mono font-bold text-[var(--text-heading)] uppercase tracking-wider">
                  LIVING & INTERIOR AREA:
                </label>
                <span id="knackAreaDisplay" className="font-mono font-bold text-xs sm:text-sm text-[var(--gold-honey)] bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-light)]">
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
                className="w-full accent-[var(--gold-honey)] cursor-pointer h-2 bg-[var(--bg-surface)] rounded-lg"
                onChange={(e) => setArea(parseInt(e.target.value, 10))}
              />
            </div>

            {/* 3. Architectural Finish Grade */}
            <div className="k-form-group">
              <label className="block text-xs font-mono font-bold text-[var(--text-heading)] uppercase tracking-wider mb-2">
                ARCHITECTURAL FINISH GRADE:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                <button
                  type="button"
                  className={`min-h-[44px] flex items-center justify-center p-3 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                    gradeName === 'premium'
                      ? 'bg-[var(--gold-honey)] text-black border-[var(--gold-honey)] shadow-md'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-light)] hover:border-[var(--gold-honey)]'
                  }`}
                  onClick={() => handleGradeSelect('premium', 1.0)}
                >
                  PREMIUM BESPOKE
                </button>
                <button
                  type="button"
                  className={`min-h-[44px] flex items-center justify-center p-3 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                    gradeName === 'ultra'
                      ? 'bg-[var(--gold-honey)] text-black border-[var(--gold-honey)] shadow-md'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-light)] hover:border-[var(--gold-honey)]'
                  }`}
                  onClick={() => handleGradeSelect('ultra', 1.25)}
                >
                  ULTRA LUXURY
                </button>
                <button
                  type="button"
                  className={`min-h-[44px] flex items-center justify-center p-3 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                    gradeName === 'masterpiece'
                      ? 'bg-[var(--gold-honey)] text-black border-[var(--gold-honey)] shadow-md'
                      : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-light)] hover:border-[var(--gold-honey)]'
                  }`}
                  onClick={() => handleGradeSelect('masterpiece', 1.5)}
                >
                  ICONIC LANDMARK
                </button>
              </div>
            </div>

          </div>

          {/* Right Pricing Summary Sidebar (Static on mobile, Sticky on desktop) */}
          <div className="static w-full mt-6 lg:mt-0 lg:sticky lg:top-24 lg:w-96 bg-[var(--bg-surface)] border border-[var(--border-gold)] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between flex-shrink-0">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase block">
                ESTIMATED TURNKEY INVESTMENT
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-black text-[var(--gold-honey)] my-2 leading-tight" id="knackEstTotal">
                {estimate.formattedTotal}
              </div>
              <span className="text-xs text-[var(--text-muted)] block mb-6" id="knackEstTimeline">
                ⏱️ Estimated Milestone: ~{estimate.estimatedTimelineMonths} Months (Design + Build)
              </span>

              <div className="space-y-3 border-t border-[var(--border-light)] pt-4 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-muted)]">Architecture & Engineering:</span>
                  <strong className="text-[var(--text-main)] font-mono" id="costArch">
                    ${estimate.architectureCost?.toLocaleString()}
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-muted)]">Structural & Shell Framing:</span>
                  <strong className="text-[var(--text-main)] font-mono" id="costShell">
                    ${estimate.structuralCost?.toLocaleString()}
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-muted)]">Custom Finishes & Pool:</span>
                  <strong className="text-[var(--text-main)] font-mono" id="costFinish">
                    ${estimate.finishesAndPoolCost?.toLocaleString()}
                  </strong>
                </div>
              </div>
            </div>

            <button
              className="btn-honey-gold w-full min-h-[48px] mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4a359] to-[#b8863b] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={onOpenConsultModal}
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
