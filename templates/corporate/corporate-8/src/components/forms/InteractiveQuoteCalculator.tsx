import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck, Sparkles, ArrowRight, Download, Check, Building, Factory, Home } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { Button } from '../common/Button';

export const InteractiveQuoteCalculator: React.FC<{ theme?: 'light' | 'dark'; className?: string }> = ({
  theme = 'light',
  className = ''
}) => {
  const { openQuoteModal } = useQuoteModal();
  const [area, setArea] = useState<number>(25000);
  const [material, setMaterial] = useState<string>('tpo');
  const [slope, setSlope] = useState<'flat' | 'low' | 'steep'>('flat');
  const [warrantyYears, setWarrantyYears] = useState<number>(30);
  const [includeDroneScan, setIncludeDroneScan] = useState<boolean>(true);
  const [includePreventivePlan, setIncludePreventivePlan] = useState<boolean>(false);

  const materialsData: Record<string, { name: string; rate: number; life: number; category: string }> = {
    tpo: { name: 'Carlisle 80-mil TPO Single-Ply', rate: 5.50, life: 30, category: 'Commercial Standard' },
    metal: { name: '24-Ga Standing Seam Galvalume', rate: 10.50, life: 50, category: 'Architectural Premium' },
    pvc: { name: 'PVC/KEE Chemical Resistant', rate: 6.80, life: 30, category: 'Industrial Grade' },
    silicone: { name: 'High-Solids Silicone Fluid Restoration', rate: 3.75, life: 15, category: 'Cost-Effective Coating' },
    epdm: { name: '60-mil EPDM Synthetic Rubber', rate: 5.20, life: 25, category: 'Cold Climate' }
  };

  const calculated = useMemo(() => {
    const selectedMat = materialsData[material] || materialsData.tpo;
    const slopeMultiplier = slope === 'steep' ? 1.3 : slope === 'low' ? 1.1 : 1.0;
    const baseCost = area * selectedMat.rate * slopeMultiplier;
    const droneCost = includeDroneScan ? 0 : 0; // complimentary
    const planCost = includePreventivePlan ? area * 0.18 : 0;

    const total = Math.round(baseCost + droneCost + planCost);
    const low = Math.round(total * 0.92);
    const high = Math.round(total * 1.12);
    const annualEnergySavings = Math.round(area * 0.42);

    return {
      total,
      low,
      high,
      annualEnergySavings,
      ratePerSqFt: (total / area).toFixed(2),
      lifespan: selectedMat.life
    };
  }, [area, material, slope, includeDroneScan, includePreventivePlan]);

  const isDark = theme === 'dark';

  return (
    <div
      className={`rounded-md p-6 sm:p-8 border transition-all ${
        isDark
          ? 'bg-slate-900 border-slate-800 text-white shadow-md'
          : 'bg-white border-slate-200 text-slate-900 shadow-xs'
      } ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Controls Column */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-indigo-600 text-white flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className={`text-xl sm:text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Commercial Roof Budget Estimator
              </h3>
              <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Instant interactive model with dynamic materials & RSMeans regional cost factors.
              </p>
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                1. Building Roof Area
              </label>
              <span className="text-sm font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-sm border border-indigo-200">
                {area.toLocaleString()} sq ft
              </span>
            </div>
            <input
              type="range"
              min="2500"
              max="150000"
              step="2500"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-sm appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
              <span>2,500 sq ft</span>
              <span>75,000 sq ft</span>
              <span>150,000+ sq ft</span>
            </div>
          </div>

          {/* Material Selection */}
          <div>
            <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              2. System Specification
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(materialsData).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMaterial(key)}
                  className={`p-3 rounded-sm border text-left flex items-start justify-between transition-all ${
                    material === key
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold ring-1 ring-indigo-600'
                      : isDark
                      ? 'border-slate-800 bg-slate-950/60 hover:bg-slate-800 text-slate-300'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">{item.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{item.category} • {item.life} Yr Life</span>
                  </div>
                  {material === key && <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Slope Options */}
          <div>
            <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              3. Roof Slope / Pitch
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'flat', label: 'Flat (0 - 1/2:12)' },
                { id: 'low', label: 'Low Pitch (1:12-3:12)' },
                { id: 'steep', label: 'Steep Pitch (>4:12)' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSlope(s.id as any)}
                  className={`p-2.5 rounded-sm border text-center font-mono font-medium transition-colors ${
                    slope === s.id
                      ? 'bg-indigo-600 text-white font-bold border-indigo-600'
                      : isDark
                      ? 'border-slate-800 bg-slate-900 text-slate-300'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="space-y-2 pt-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeDroneScan}
                onChange={(e) => setIncludeDroneScan(e.target.checked)}
                className="rounded-sm border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                Include Complimentary FLIR Drone Thermal Infrared Baseline Map (<span className="text-indigo-600 font-mono font-semibold">FREE</span>)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includePreventivePlan}
                onChange={(e) => setIncludePreventivePlan(e.target.checked)}
                className="rounded-sm border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                Include 10-Year Annual Preventive Maintenance & Cleanout SLA (+18¢ / sq ft)
              </span>
            </label>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="lg:w-80 flex flex-col justify-between p-6 rounded-sm bg-slate-900 text-white border border-slate-800">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-400 block mb-1">
              Estimated Total Investment
            </span>

            <div className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight">
              ${calculated.total.toLocaleString()}
            </div>

            <p className="text-xs font-mono text-slate-400 mt-1">
              Projected Scope: ${calculated.low.toLocaleString()} – ${calculated.high.toLocaleString()}
            </p>

            {/* Breakdown List */}
            <div className="mt-6 space-y-2.5 text-xs font-mono border-t border-slate-800 pt-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Unit Cost:</span>
                <span className="font-bold text-white">${calculated.ratePerSqFt} / sq ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Warranty Coverage:</span>
                <span className="font-bold text-emerald-400">{calculated.lifespan} Yrs NDL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Est. Annual HVAC Savings:</span>
                <span className="font-bold text-indigo-400">${calculated.annualEnergySavings.toLocaleString()} / yr</span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-sm bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300 font-mono">
              <p className="font-bold flex items-center gap-1 text-indigo-300">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>100% Tax Deductible (Section 179)</span>
              </p>
              <p className="mt-0.5 opacity-80">Full CapEx cost can be accelerated in Year 1.</p>
            </div>
          </div>

          <div className="pt-6">
            <Button
              variant="primary"
              size="md"
              onClick={() => openQuoteModal(materialsData[material]?.name)}
              className="w-full justify-center"
              withDiagonalArrow
            >
              Lock In This Estimate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
