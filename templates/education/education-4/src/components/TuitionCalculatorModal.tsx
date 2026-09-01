import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  DollarSign, 
  HelpCircle, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Percent, 
  GraduationCap,
  Download
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/universityData';

interface TuitionCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions: () => void;
}

export const TuitionCalculatorModal: React.FC<TuitionCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions
}) => {
  const [residency, setResidency] = useState<'in-state' | 'out-state' | 'international'>('in-state');
  const [level, setLevel] = useState<'undergraduate' | 'graduate'>('undergraduate');
  const [housing, setHousing] = useState<'on-campus' | 'off-campus' | 'commuter'>('on-campus');
  const [meritScore, setMeritScore] = useState<'3.9+' | '3.7-3.89' | '3.4-3.69' | 'below-3.4'>('3.9+');
  const [familyIncome, setFamilyIncome] = useState<'tier1' | 'tier2' | 'tier3' | 'tier4'>('tier2');

  if (!isOpen) return null;

  // Base tuition
  const baseTuitionPerSemester = {
    undergraduate: {
      'in-state': 12400,
      'out-state': 19800,
      'international': 23500
    },
    graduate: {
      'in-state': 15800,
      'out-state': 22500,
      'international': 26000
    }
  }[level][residency];

  // Room & Board
  const housingCosts = {
    'on-campus': 6800,
    'off-campus': 5400,
    'commuter': 0
  }[housing];

  // Mandatory Campus & Tech Fees
  const fees = 950;
  const booksAndSupplies = 600;

  // Merit Scholarship Calculation
  const meritGrants = {
    '3.9+': 7500,
    '3.7-3.89': 5000,
    '3.4-3.69': 2500,
    'below-3.4': 0
  }[meritScore];

  // Need-based University Endowment Grant
  const needGrants = {
    tier1: 6500, // < $65,000 family income
    tier2: 4200, // $65,000 - $110,000
    tier3: 2000, // $110,000 - $160,000
    tier4: 0     // > $160,000
  }[familyIncome];

  const totalCostBeforeAid = baseTuitionPerSemester + housingCosts + fees + booksAndSupplies;
  const totalAid = meritGrants + needGrants;
  const netEstimatedSemesterCost = Math.max(0, totalCostBeforeAid - totalAid);
  const annualEstimate = netEstimatedSemesterCost * 2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-['Playfair_Display',serif]">
                Tuition & Net Price Estimator
              </h2>
              <p className="text-xs text-slate-400">
                Official Modern University Financial Aid Calculator • Academic Year 2026–2027
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Form Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Degree Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Academic Degree Level
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLevel('undergraduate')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    level === 'undergraduate'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Undergraduate
                </button>
                <button
                  type="button"
                  onClick={() => setLevel('graduate')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    level === 'graduate'
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Graduate / Master
                </button>
              </div>
            </div>

            {/* Residency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Residency Status
              </label>
              <select
                value={residency}
                onChange={(e) => setResidency(e.target.value as any)}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="in-state">Massachusetts Resident (In-State)</option>
                <option value="out-state">Domestic Out-of-State</option>
                <option value="international">International Student (F-1 Visa)</option>
              </select>
            </div>

            {/* Housing & Living */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Housing & Residence Plan
              </label>
              <select
                value={housing}
                onChange={(e) => setHousing(e.target.value as any)}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="on-campus">On-Campus Residence Hall & Meal Plan ($6,800/sem)</option>
                <option value="off-campus">Off-Campus Apartment ($5,400/sem)</option>
                <option value="commuter">Commuter from Home ($0)</option>
              </select>
            </div>

            {/* Academic GPA / Merit Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Cumulative GPA (Merit Scholarships)
              </label>
              <select
                value={meritScore}
                onChange={(e) => setMeritScore(e.target.value as any)}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="3.9+">3.90+ GPA (Presidential Scholar: $7,500/sem)</option>
                <option value="3.7-3.89">3.70 - 3.89 GPA (Dean's Honor Grant: $5,000/sem)</option>
                <option value="3.4-3.69">3.40 - 3.69 GPA (Faculty Achievement: $2,500/sem)</option>
                <option value="below-3.4">Standard Consideration</option>
              </select>
            </div>
          </div>

          {/* Household Income Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Household Annual Income (Need-Blind Endowment Aid)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'tier1', label: '< $65k / yr', aid: '+$6,500/sem' },
                { id: 'tier2', label: '$65k – $110k', aid: '+$4,200/sem' },
                { id: 'tier3', label: '$110k – $160k', aid: '+$2,000/sem' },
                { id: 'tier4', label: '> $160k / yr', aid: 'Standard' }
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setFamilyIncome(t.id as any)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    familyIncome === t.id
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs block">{t.label}</span>
                  <span className="text-[10px] text-emerald-700 font-semibold">{t.aid}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Calculation Summary Card */}
          <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">
                  Estimated Net Price
                </span>
                <div className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white mt-0.5">
                  ${netEstimatedSemesterCost.toLocaleString()}
                  <span className="text-sm font-sans font-normal text-slate-400"> / semester</span>
                </div>
              </div>
              <div className="text-left sm:text-right bg-slate-800/80 px-3.5 py-2 rounded-lg border border-slate-700">
                <span className="text-[11px] text-slate-400 block">Annual Academic Year</span>
                <span className="text-base font-bold text-emerald-300">
                  ${annualEstimate.toLocaleString()} / year
                </span>
              </div>
            </div>

            {/* Cost Breakdown Items */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Tuition & Instruction:</span>
                <span className="font-semibold text-white">${baseTuitionPerSemester.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Merit Scholarships:</span>
                <span className="font-semibold text-emerald-400">-${meritGrants.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Housing & Dining:</span>
                <span className="font-semibold text-white">${housingCosts.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Need-Based Grants:</span>
                <span className="font-semibold text-emerald-400">-${needGrants.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Campus & Tech Fees:</span>
                <span className="font-semibold text-white">${fees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span>Books & Materials:</span>
                <span className="font-semibold text-white">${booksAndSupplies.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 leading-tight">
            * Estimates based on 2026–2027 board-approved tuition rates. 100% of demonstrated need is met.
          </p>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors flex-1 sm:flex-none"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmissions();
              }}
              className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-950/20 flex items-center justify-center gap-1.5 flex-1 sm:flex-none"
            >
              <span>Apply for Admission & Aid</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
