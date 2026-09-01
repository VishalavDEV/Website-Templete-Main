import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Activity, 
  FileText, 
  ArrowUpRight, 
  ArrowDownRight, 
  Lock, 
  RefreshCw, 
  Download, 
  Layers,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const FinancialDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    'overview' | 'cashflow' | 'health' | 'risk' | 'performance' | 'forecast' | 'reports'
  >('overview');

  const [simulationMultiplier, setSimulationMultiplier] = useState(1);

  return (
    <div id="vantage-core-platform-ui" className="w-full bg-[#070A10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top OS Window Header */}
      <div className="bg-[#0B0F19] px-4 sm:px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider flex items-center gap-2">
            VANTAGE CORE™ TELEMETRY ENGINE v4.8
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
              LIVE MULTI-BANK SYNC
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400 hidden sm:inline">Entity: Global Apex Conglomerate LLC</span>
          <span className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
            Illustrative Platform Demo
          </span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="bg-[#090D15] px-4 sm:px-6 border-b border-white/5 flex items-center gap-1 sm:gap-4 overflow-x-auto text-xs font-mono py-2">
        {[
          { id: 'overview', label: 'Portfolio Overview' },
          { id: 'cashflow', label: 'Cash Flow' },
          { id: 'health', label: 'Financial Health' },
          { id: 'risk', label: 'Risk Exposure' },
          { id: 'performance', label: 'Performance' },
          { id: 'forecast', label: 'Forecast' },
          { id: 'reports', label: 'Reports' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as any)}
            className={`px-3 py-2 rounded-md whitespace-nowrap transition-all cursor-pointer ${
              activeSection === tab.id
                ? 'bg-emerald-500/15 text-emerald-300 font-medium border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dashboard Body */}
      <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#070A10] to-[#04060A]">
        {/* OVERVIEW SECTION */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            {/* Top 4 KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#0C111C] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Consolidated Treasury</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-serif font-semibold text-white">$142,850,000</span>
                  <span className="text-emerald-400 text-xs font-mono flex items-center">+4.2%</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">18 Global Operating Accounts</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0C111C] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Weighted Cost of Debt</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-serif font-semibold text-emerald-400">4.85%</span>
                  <span className="text-emerald-400 text-xs font-mono flex items-center">-65 bps</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">SOFR + 1.25% Syndicated Margin</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0C111C] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Working Capital Ratio</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-serif font-semibold text-white">2.45x</span>
                  <span className="text-emerald-400 text-xs font-mono flex items-center">Optimal</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">90-day liquidity buffer coverage</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0C111C] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">FX VaR Exposure</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-serif font-semibold text-white">$1.12M</span>
                  <span className="text-emerald-400 text-xs font-mono flex items-center">92% Hedged</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">Dynamic derivative collar active</p>
              </div>
            </div>

            {/* Main Interactive Table & Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Liquidity Stream Distribution */}
              <div className="lg:col-span-7 p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-white font-normal">Global Operating Liquidity Stream</h4>
                  <span className="text-xs font-mono text-slate-400">Multi-Bank Swift Connect</span>
                </div>

                {/* Visual Bar Graph */}
                <div className="space-y-3 pt-2">
                  {[
                    { entity: 'North American Treasury Hub (USD)', val: '$68.4M', pct: 48, color: 'bg-emerald-500' },
                    { entity: 'London EMEA Operations (EUR/GBP)', val: '$44.1M', pct: 31, color: 'bg-teal-500' },
                    { entity: 'Singapore APAC Holding Desk (SGD/USD)', val: '$22.8M', pct: 16, color: 'bg-[#D4AF37]' },
                    { entity: 'Zurich Special Purpose Vehicle (CHF)', val: '$7.55M', pct: 5, color: 'bg-slate-400' },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1 text-xs font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span>{item.entity}</span>
                        <span className="font-semibold text-white">{item.val} ({item.pct}%)</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-[#080B11] border border-white/5 rounded-lg flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Zero idle cash detected across all entities
                  </span>
                  <span className="text-emerald-400 font-semibold">Yield Earned: $428k/mo</span>
                </div>
              </div>

              {/* Real-Time Advisory Action Items */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg text-white font-normal">Vantage Fiduciary Recommendations</h4>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">3 Active</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-[#080B11] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">Refinance Tranche B Debt</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">High Priority</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Opportunity to reduce credit spread by 45 bps via direct private placement.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080B11] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">Roll EUR/USD 90D Hedge</span>
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-amber-950 px-1.5 py-0.5 rounded">Medium</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Lock in favorable forward points ahead of ECB rate announcement.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080B11] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">Working Capital Sweeping</span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">Automated</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Nightly automated liquidity sweep into overnight institutional repo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CASH FLOW SECTION */}
        {activeSection === 'cashflow' && (
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#0C111C] border border-white/5">
              <h4 className="font-serif text-lg text-white mb-2">30 / 60 / 90-Day Predictive Cash Flow Trajectory</h4>
              <p className="text-xs text-slate-400 mb-6">Deterministic forecast factoring historical invoice cycles, recurring vendor contracts, and debt service.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-lg bg-[#080B11] border border-white/5">
                  <span className="text-slate-400 block mb-1">Day 30 Projected Net Cash</span>
                  <span className="text-xl text-white font-semibold block">$151.2M</span>
                  <span className="text-emerald-400 text-[11px]">+ $8.35M net operating inflow</span>
                </div>
                <div className="p-4 rounded-lg bg-[#080B11] border border-white/5">
                  <span className="text-slate-400 block mb-1">Day 60 Projected Net Cash</span>
                  <span className="text-xl text-white font-semibold block">$159.8M</span>
                  <span className="text-emerald-400 text-[11px]">Includes Q3 supplier settlement</span>
                </div>
                <div className="p-4 rounded-lg bg-[#080B11] border border-white/5">
                  <span className="text-slate-400 block mb-1">Day 90 Projected Net Cash</span>
                  <span className="text-xl text-white font-semibold block">$172.4M</span>
                  <span className="text-emerald-400 text-[11px]">+ $29.5M surplus available for M&A</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FINANCIAL HEALTH */}
        {activeSection === 'health' && (
          <div className="p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-4">
            <h4 className="font-serif text-lg text-white">Institutional Financial Health & Solvency Score</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 bg-[#080B11] rounded-lg">
                <span className="text-slate-400">Altman Z-Score</span>
                <span className="text-lg text-emerald-400 block font-semibold mt-1">4.22 (Safe Zone)</span>
              </div>
              <div className="p-3 bg-[#080B11] rounded-lg">
                <span className="text-slate-400">Interest Coverage</span>
                <span className="text-lg text-white block font-semibold mt-1">8.4x EBITDA</span>
              </div>
              <div className="p-3 bg-[#080B11] rounded-lg">
                <span className="text-slate-400">Quick Ratio</span>
                <span className="text-lg text-white block font-semibold mt-1">1.92x</span>
              </div>
              <div className="p-3 bg-[#080B11] rounded-lg">
                <span className="text-slate-400">Debt / Equity</span>
                <span className="text-lg text-emerald-400 block font-semibold mt-1">0.68 (De-leveraged)</span>
              </div>
            </div>
          </div>
        )}

        {/* RISK EXPOSURE */}
        {activeSection === 'risk' && (
          <div className="p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-4">
            <h4 className="font-serif text-lg text-white">Multi-Factor Risk Breakdown</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#080B11] rounded-lg border border-white/5">
                <span className="text-slate-400 block mb-1">Interest Rate Sensitivity (+100 bps)</span>
                <span className="text-white text-base font-semibold block">-$140,000 / yr</span>
                <span className="text-emerald-400 text-[10px]">95% hedged via fixed-rate swap</span>
              </div>
              <div className="p-4 bg-[#080B11] rounded-lg border border-white/5">
                <span className="text-slate-400 block mb-1">Counterparty Bank Concentration</span>
                <span className="text-emerald-400 text-base font-semibold block">Max 14% Per Tier-1 Bank</span>
                <span className="text-slate-400 text-[10px]">Fully distributed risk</span>
              </div>
              <div className="p-4 bg-[#080B11] rounded-lg border border-white/5">
                <span className="text-slate-400 block mb-1">Commodity Input Price Spike (+15%)</span>
                <span className="text-white text-base font-semibold block">Protected by options collar</span>
                <span className="text-emerald-400 text-[10px]">Zero margin degradation</span>
              </div>
            </div>
          </div>
        )}

        {/* PERFORMANCE */}
        {activeSection === 'performance' && (
          <div className="p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-4 font-mono text-xs">
            <h4 className="font-serif text-lg text-white font-normal">Capital Yield & Strategic Return Tracking</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 pb-2">
                    <th className="pb-2">Strategic Asset Mandate</th>
                    <th className="pb-2">Allocated Capital</th>
                    <th className="pb-2">Net Annualized Return</th>
                    <th className="pb-2">Benchmark Alpha</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  <tr>
                    <td className="py-2.5 font-sans font-medium">Core Private Infrastructure Fund IV</td>
                    <td>$45.0M</td>
                    <td className="text-emerald-400">9.2%</td>
                    <td>+240 bps</td>
                    <td><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Performing</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans font-medium">Senior Secured Direct Lending Tranche</td>
                    <td>$60.0M</td>
                    <td className="text-emerald-400">10.8%</td>
                    <td>+380 bps</td>
                    <td><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Performing</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans font-medium">Macro Absolute Return Overlay</td>
                    <td>$37.85M</td>
                    <td className="text-emerald-400">7.4%</td>
                    <td>+190 bps</td>
                    <td><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Performing</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FORECAST */}
        {activeSection === 'forecast' && (
          <div className="p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-4">
            <h4 className="font-serif text-lg text-white">5-Year Strategic Capital Horizon & Balance Sheet Projections</h4>
            <p className="text-xs text-slate-400">Simulating scenario expansions: Base Case, Inflation Shock, and Accelerated M&A.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#080B11] rounded-lg">
                <span className="text-emerald-400 font-semibold block mb-1">Base Growth Scenario</span>
                <span className="text-xl text-white block">$240M Enterprise Treasury</span>
                <span className="text-slate-400 text-[11px]">3.8x EBITDA Valuation Multiple Expansion</span>
              </div>
              <div className="p-4 bg-[#080B11] rounded-lg">
                <span className="text-[#D4AF37] font-semibold block mb-1">Accelerated M&A Buyout</span>
                <span className="text-xl text-white block">$420M Post-Synergy Balance</span>
                <span className="text-slate-400 text-[11px]">$34M in annual SG&A consolidation</span>
              </div>
              <div className="p-4 bg-[#080B11] rounded-lg">
                <span className="text-slate-400 font-semibold block mb-1">Defensive Stagflation Test</span>
                <span className="text-xl text-white block">100% Solvency Preserved</span>
                <span className="text-slate-400 text-[11px]">Zero covenant breach in 10k simulations</span>
              </div>
            </div>
          </div>
        )}

        {/* REPORTS */}
        {activeSection === 'reports' && (
          <div className="p-5 rounded-xl bg-[#0C111C] border border-white/5 space-y-3 font-mono text-xs">
            <h4 className="font-serif text-lg text-white font-normal font-sans">Audit-Ready Board Reporting Packages</h4>
            <div className="space-y-2">
              {[
                { name: 'Q3 Board of Directors Capital & Treasury Briefing.pdf', date: 'Oct 2026', size: '4.2 MB' },
                { name: 'Enterprise Basel IV Solvency & Liquidity Audit Certificate.pdf', date: 'Sep 2026', size: '1.8 MB' },
                { name: 'Multi-Currency FX Derivative Collar Settlement Ledger.xlsx', date: 'Sep 2026', size: '840 KB' },
              ].map((doc, idx) => (
                <div key={idx} className="p-3 bg-[#080B11] border border-white/5 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-200">{doc.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400">
                    <span>{doc.date}</span>
                    <span>{doc.size}</span>
                    <button className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer">
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer System Status Bar */}
      <div className="bg-[#090D15] px-6 py-3 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            256-Bit Encrypted Financial Tunnel
          </span>
          <span className="hidden sm:inline">SWIFT Connectivity: Nominal</span>
          <span className="hidden md:inline">Latency: 14ms</span>
        </div>
        <span>Illustrative corporate telemetry data</span>
      </div>
    </div>
  );
};
