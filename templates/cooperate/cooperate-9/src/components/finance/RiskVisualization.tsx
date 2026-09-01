import React, { useState } from 'react';
import { Shield, AlertTriangle, Lock, Eye, Activity, CheckCircle2, Sliders, RefreshCw } from 'lucide-react';

export const RiskVisualization: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [stressScenario, setStressScenario] = useState<'normal' | 'stagflation' | 'liquidity_freeze' | 'cyber_outage'>('normal');

  const riskPillars = [
    {
      id: 'enterprise-risk',
      title: 'Enterprise Risk',
      subtitle: 'Board Governance & Strategic Mandates',
      status: 'Protected',
      score: 98,
      description: 'Comprehensive top-down risk governance ensuring all corporate strategic initiatives are insulated against regulatory shifts, geopolitical trade tensions, and systemic shocks.',
      metrics: [
        { label: 'Governance Coverage', value: '100%' },
        { label: 'Scenario Stress Tests', value: '50k / Day' },
        { label: 'Regulatory Adherence', value: 'Zero Breach' },
      ],
      radarPoints: [85, 92, 78, 95, 88, 94],
    },
    {
      id: 'liquidity-management',
      title: 'Liquidity Management',
      subtitle: 'Multi-Currency Reserves & Cash Flow Buffers',
      status: 'Optimal',
      score: 96,
      description: 'Real-time multi-jurisdiction cash monitoring ensuring 90-day liquidity buffer coverage even in sudden bank freezing or sovereign debt market dislocations.',
      metrics: [
        { label: 'Immediate Liquid Reserves', value: '$850M+' },
        { label: 'Buffer Coverage Days', value: '180 Days' },
        { label: 'Automated Sweeps', value: '100% Nightly' },
      ],
      radarPoints: [92, 98, 85, 80, 94, 90],
    },
    {
      id: 'market-risk',
      title: 'Market Risk',
      subtitle: 'FX, Interest Rate & Commodity Hedging',
      status: 'Hedged',
      score: 94,
      description: 'Dynamic derivative architecture hedging balance-sheet sensitivity against currency devaluations, central bank rate spikes, and critical commodity inflation.',
      metrics: [
        { label: 'FX Sensitivity Hedged', value: '94%' },
        { label: 'Rate Volatility Cap', value: '< 25 bps' },
        { label: 'Tail-Risk Drawdown Limit', value: '-3.5%' },
      ],
      radarPoints: [78, 85, 96, 92, 80, 88],
    },
    {
      id: 'credit-risk',
      title: 'Credit Risk',
      subtitle: 'Counterparty Solvency & Underwriting',
      status: 'Tier-1 Prime',
      score: 99,
      description: 'Algorithmic counterparty risk tiering ensuring receivables and deposits are diversified strictly across investment-grade, sovereign-backed clearing houses.',
      metrics: [
        { label: 'Max Counterparty Exposure', value: '12.5%' },
        { label: 'Default Probability (10Y)', value: '0.01%' },
        { label: 'Collateralization Rate', value: '125%' },
      ],
      radarPoints: [95, 90, 88, 99, 92, 85],
    },
    {
      id: 'operational-risk',
      title: 'Operational Risk',
      subtitle: 'Business Continuity & Process Controls',
      status: 'Redundant',
      score: 97,
      description: 'Zero single-point-of-failure process engineering across payment gateways, cross-border settlements, and legal contract lifecycle management.',
      metrics: [
        { label: 'Failover RPO', value: '< 1 second' },
        { label: 'Disaster Recovery RTO', value: '< 5 minutes' },
        { label: 'Execution Redundancy', value: 'Triple-Hub' },
      ],
      radarPoints: [88, 85, 90, 82, 97, 93],
    },
    {
      id: 'cyber-risk',
      title: 'Cyber Risk',
      subtitle: 'Cryptographic Security & System Integrity',
      status: 'Hardened',
      score: 99,
      description: 'Military-grade cryptographic enclave architecture, continuous zero-trust validation, and automated air-gapped ledger backups.',
      metrics: [
        { label: 'Encryption Standard', value: 'AES-256-GCM' },
        { label: 'Penetration Test Rating', value: 'Tier 1 Prime' },
        { label: 'Zero-Trust Verification', value: 'Every API Call' },
      ],
      radarPoints: [94, 91, 86, 95, 90, 99],
    },
  ];

  const current = riskPillars[selectedPillar];

  return (
    <div id="risk-visualization-matrix" className="bg-[#0A0D15] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Top Header & Stress Scenarios Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              VANTAGE RISKLENS™ DEFENSIVE MATRIX
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Six-Pillar Capital Protection Framework
          </h3>
        </div>

        {/* Scenario Controls */}
        <div className="flex items-center gap-2 bg-[#06080E] p-1.5 rounded-xl border border-white/10 text-xs font-mono">
          <span className="text-slate-400 px-2 hidden sm:inline">Simulate Shock:</span>
          <button
            onClick={() => setStressScenario('normal')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              stressScenario === 'normal'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Baseline
          </button>
          <button
            onClick={() => setStressScenario('stagflation')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              stressScenario === 'stagflation'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Stagflation (+300bps)
          </button>
          <button
            onClick={() => setStressScenario('liquidity_freeze')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              stressScenario === 'liquidity_freeze'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Credit Freeze
          </button>
        </div>
      </div>

      {/* Main 2-Column Risk Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10">
        {/* Left: 6 Pillar Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          {riskPillars.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#101624] border-emerald-500/40 shadow-lg shadow-emerald-950/20 translate-x-1'
                    : 'bg-[#070A10] border-white/5 hover:border-white/15 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-semibold ${
                    isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-white/5 text-slate-400'
                  }`}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-sm font-sans font-medium ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-400">{pillar.subtitle}</p>
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400'
                  }`}>
                    {pillar.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Pillar Inspector & Radar Simulation */}
        <div className="lg:col-span-7 bg-[#06080E] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                  RISK DOMAIN 0{selectedPillar + 1}
                </span>
                <h4 className="font-serif text-2xl text-white font-normal mt-0.5">
                  {current.title}
                </h4>
              </div>

              <div className="text-right font-mono">
                <span className="text-[10px] text-slate-400 block">Resilience Index</span>
                <span className="text-2xl font-semibold text-emerald-400">{current.score} / 100</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-light mt-4 mb-6">
              {current.description}
            </p>

            {/* Stress Simulation Status Badge */}
            <div className="p-3.5 rounded-lg bg-[#0A0E17] border border-white/5 mb-6 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-300 mb-1">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Active Scenario: <strong className="text-white uppercase">{stressScenario.replace('_', ' ')}</strong>
                </span>
                <span className="text-emerald-400">Tolerance Margin: +99.4%</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {stressScenario === 'normal' && 'Steady-state market operating conditions with standard multi-bank liquidity.'}
                {stressScenario === 'stagflation' && 'Yield curve shifts +300 bps upward; automated derivative swaps absorb interest spikes.'}
                {stressScenario === 'liquidity_freeze' && 'Commercial paper market freezes; 180-day internal cash buffer prevents refinancing distress.'}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-[#0A0D15] rounded-lg border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                  <span className="text-sm font-mono font-semibold text-emerald-400 mt-1 block">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Fiduciary Risk Clearance: Approved</span>
            <span>Illustrative risk modeling framework</span>
          </div>
        </div>
      </div>
    </div>
  );
};
