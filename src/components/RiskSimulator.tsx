import React, { useState, useMemo } from 'react';
import {
  Activity,
  Moon,
  Apple,
  Cigarette,
  Wine,
  Brain,
  Dna,
  Sparkles,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  Info,
  Heart,
  Zap,
} from 'lucide-react';
import { LifestyleInputs } from '../types';
import { calculateHealthRisk } from '../utils/healthCalculations';

export const RiskSimulator: React.FC = () => {
  // Default realistic baseline inputs
  const defaultInputs: LifestyleInputs = {
    physicalActivity: 3, // moderate (3-4x/wk)
    sleepHours: 7.0,     // 7 hrs
    nutritionQuality: 4, // clean Mediterranean
    smoking: 0,          // none
    alcohol: 1,          // light
    stressLevel: 3,      // moderate work stress
    familyHistoryRisk: 1,// mild family predisposition
  };

  const [inputs, setInputs] = useState<LifestyleInputs>(defaultInputs);

  const analysis = useMemo(() => calculateHealthRisk(inputs), [inputs]);

  const handleSliderChange = (field: keyof LifestyleInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const resetToBaseline = () => {
    setInputs(defaultInputs);
  };

  const getActivityLabel = (val: number) => {
    switch (val) {
      case 1: return 'Sedentary (<30 min/wk)';
      case 2: return 'Light (1-2 days/wk)';
      case 3: return 'Moderate (3-4 days/wk)';
      case 4: return 'Active (5+ days/wk)';
      case 5: return 'Athletic / High Performance';
      default: return '';
    }
  };

  const getNutritionLabel = (val: number) => {
    switch (val) {
      case 1: return 'High Ultra-processed Foods';
      case 2: return 'Standard / Inconsistent';
      case 3: return 'Balanced Whole Foods';
      case 4: return 'Mediterranean / Nutrient-Rich';
      case 5: return 'Optimal Longevity & Micronutrient Rich';
      default: return '';
    }
  };

  const getSmokingLabel = (val: number) => {
    switch (val) {
      case 0: return 'Non-Smoker (Zero Tobacco/Vape)';
      case 1: return 'Occasional / Social';
      case 2: return 'Moderate (Daily)';
      case 3: return 'Heavy (1+ packs/day)';
      default: return '';
    }
  };

  const getAlcoholLabel = (val: number) => {
    switch (val) {
      case 0: return 'None / Abstinent';
      case 1: return 'Light (1-2 drinks/wk)';
      case 2: return 'Moderate (3-7 drinks/wk)';
      case 3: return 'Frequent (>8 drinks/wk)';
      default: return '';
    }
  };

  const getStressLabel = (val: number) => {
    switch (val) {
      case 1: return 'Minimal / Very Calm';
      case 2: return 'Mild / Well-Managed';
      case 3: return 'Moderate Workday Load';
      case 4: return 'Elevated / High Tension';
      case 5: return 'Chronic / Overwhelming';
      default: return '';
    }
  };

  const getFamilyLabel = (val: number) => {
    switch (val) {
      case 0: return 'No Known Early Family Conditions';
      case 1: return 'Mild / Late-Onset Conditions';
      case 2: return 'Moderate (1 First-Degree Relative)';
      case 3: return 'Strong (Multiple First-Degree Relatives)';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <Activity className="w-4 h-4 text-[#A8904F]" />
            <span>Interactive Longevity & Lifestyle Simulation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Explore Your Health Risks
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Understand how lifestyle factors may influence your overall health. Adjust the sliders to see real-time shifts in your preventive resilience profile.
          </p>
        </div>

        <button
          onClick={resetToBaseline}
          className="px-4 py-2 rounded-xl bg-[#F5F2ED] hover:bg-[#E5E2DD] text-xs font-semibold text-[#2D3A2D] border border-[#E5E2DD] flex items-center space-x-1.5 transition-all shadow-xs shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#A8904F]" />
          <span>Reset to Baseline</span>
        </button>
      </div>

      {/* Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: 7 Interactive Lifestyle Controls */}
        <div className="lg:col-span-7 space-y-5">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
              <span className="font-bold font-serif text-base text-[#2D3A2D]">
                Personal Lifestyle Variables
              </span>
              <span className="text-[11px] text-[#5A5A40] font-mono">
                Real-Time Recalculation
              </span>
            </div>

            {/* 1. Physical Activity */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Activity className="w-4 h-4 text-[#A8904F]" />
                  <span>Physical Activity & Cardio</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-medium">
                  {getActivityLabel(inputs.physicalActivity)}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={inputs.physicalActivity}
                onChange={(e) => handleSliderChange('physicalActivity', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#5A5A40] font-mono">
                <span>Sedentary</span>
                <span>Active</span>
                <span>Athletic</span>
              </div>
            </div>

            {/* 2. Sleep Hours */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Moon className="w-4 h-4 text-[#5A5A40]" />
                  <span>Nightly Sleep Duration</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-bold font-mono">
                  {inputs.sleepHours.toFixed(1)} Hours
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="10"
                step="0.5"
                value={inputs.sleepHours}
                onChange={(e) => handleSliderChange('sleepHours', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#5A5A40] font-mono">
                <span>4 hrs (Deficit)</span>
                <span>8 hrs (Optimal)</span>
                <span>10 hrs</span>
              </div>
            </div>

            {/* 3. Nutrition Quality */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Apple className="w-4 h-4 text-emerald-600" />
                  <span>Nutrition & Dietary Quality</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-medium">
                  {getNutritionLabel(inputs.nutritionQuality)}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={inputs.nutritionQuality}
                onChange={(e) => handleSliderChange('nutritionQuality', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
            </div>

            {/* 4. Smoking & Vaping */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Cigarette className="w-4 h-4 text-[#8C5D3E]" />
                  <span>Smoking & Tobacco Exposure</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-medium">
                  {getSmokingLabel(inputs.smoking)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={inputs.smoking}
                onChange={(e) => handleSliderChange('smoking', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
            </div>

            {/* 5. Alcohol */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Wine className="w-4 h-4 text-rose-600" />
                  <span>Alcohol Intake</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-medium">
                  {getAlcoholLabel(inputs.alcohol)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={inputs.alcohol}
                onChange={(e) => handleSliderChange('alcohol', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
            </div>

            {/* 6. Stress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Brain className="w-4 h-4 text-[#A8904F]" />
                  <span>Stress & Autonomic Load</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-medium">
                  {getStressLabel(inputs.stressLevel)}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={inputs.stressLevel}
                onChange={(e) => handleSliderChange('stressLevel', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
            </div>

            {/* 7. Family History */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-semibold text-[#2D3A2D]">
                  <Dna className="w-4 h-4 text-[#8A9A5B]" />
                  <span>Family History Weighting</span>
                </div>
                <span className="text-[11px] text-[#2D3A2D] font-medium">
                  {getFamilyLabel(inputs.familyHistoryRisk)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={inputs.familyHistoryRisk}
                onChange={(e) => handleSliderChange('familyHistoryRisk', Number(e.target.value))}
                className="w-full accent-[#2D3A2D] h-2 bg-[#F5F2ED] rounded-lg cursor-pointer"
              />
            </div>

          </div>
        </div>

        {/* Right: Dynamic Simulation Results & Potential Profile */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Main Risk Output Card */}
          <div className="rounded-2xl bg-[#2D3A2D] text-white p-6 sm:p-7 border border-white/10 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-widest text-[#A8904F] uppercase font-bold">
                SIMULATION OUTPUT
              </span>
              <span
                className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase border"
                style={{ backgroundColor: `${analysis.riskColor}33`, borderColor: analysis.riskColor, color: '#FFFFFF' }}
              >
                {analysis.riskTier}
              </span>
            </div>

            {/* Composite Score Circle & Biological Age Delta */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-white/70">Preventive Resilience Score</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold font-serif text-white">
                    {analysis.overallScore}
                  </span>
                  <span className="text-xs font-mono text-[#A8904F]">/ 100</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-right">
                <p className="text-[10px] text-white/60 uppercase font-mono">Biological Age Delta</p>
                <p className="text-xl font-bold font-serif text-[#A8904F] mt-0.5">
                  {analysis.biologicalAgeDelta <= 0 ? `${analysis.biologicalAgeDelta} yrs` : `+${analysis.biologicalAgeDelta} yrs`}
                </p>
                <p className="text-[10px] text-white/60">
                  {analysis.biologicalAgeDelta <= 0 ? 'Favorable Longevity' : 'Lifestyle Accelerated'}
                </p>
              </div>
            </div>

            {/* Sub-Pillar Breakdown Bars */}
            <div className="space-y-2.5 pt-2 text-xs">
              
              <div>
                <div className="flex justify-between text-white/70 text-[11px] mb-1">
                  <span>Cardiovascular Resilience</span>
                  <span className="font-mono text-white">{analysis.cardioScore}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-emerald-400 h-full rounded-full transition-all duration-300" style={{ width: `${analysis.cardioScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white/70 text-[11px] mb-1">
                  <span>Metabolic & Glycemic Balance</span>
                  <span className="font-mono text-white">{analysis.metabolicScore}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-[#A8904F] h-full rounded-full transition-all duration-300" style={{ width: `${analysis.metabolicScore}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white/70 text-[11px] mb-1">
                  <span>Vitality & Cognitive Energy</span>
                  <span className="font-mono text-white">{analysis.vitalityScore}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className="bg-[#8A9A5B] h-full rounded-full transition-all duration-300" style={{ width: `${analysis.vitalityScore}%` }} />
                </div>
              </div>

            </div>

            {/* Potential Profile Callout */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-[#A8904F]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Potential Profile Shift</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {analysis.potentialGain.description}
              </p>
              <div className="flex items-center justify-between text-[11px] text-white/60 pt-1">
                <span>Target Tier: <strong className="text-white">{analysis.potentialGain.potentialRiskTier}</strong></span>
                <span className="text-[#A8904F] font-mono font-semibold">+{analysis.potentialGain.scoreImprovement} Pts</span>
              </div>
            </div>

          </div>

          {/* Targeted Actionable Recommendations */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-sm space-y-3">
            <h3 className="text-sm font-bold font-serif text-[#2D3A2D]">
              Personalized Lifestyle Levers
            </h3>
            <div className="space-y-2.5">
              {analysis.primaryDeltas.map((delta, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#2D3A2D]">{delta.category}</span>
                    <span className="text-[10px] font-mono text-[#2D3A2D] bg-white border border-[#E5E2DD] px-1.5 py-0.5 rounded-md font-bold">
                      {delta.impact}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A5A40]">{delta.action}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Mandatory Clinical Disclaimer Banner */}
      <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-start space-x-3 text-xs text-[#5A5A40]">
        <Info className="w-4 h-4 text-[#A8904F] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Educational Simulator Disclaimer:</strong> This tool provides educational estimates based on validated population lifestyle models and does not diagnose medical conditions or substitute for professional clinical advice. Always consult your physician before making substantial changes to your exercise or diet protocols.
        </p>
      </div>

    </div>
  );
};
