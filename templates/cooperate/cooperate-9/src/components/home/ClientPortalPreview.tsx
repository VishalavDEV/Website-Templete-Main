import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClientPortalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'allocation' | 'risk' | 'documents'>('overview');

  return (
    <section id="client-portal-preview" className="py-24 sm:py-32 bg-[#F4F3F3] border-b border-[#E5E5E5] px-6 sm:px-10 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-14 border-b border-[#E5E5E5]">
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#191919]/50 font-medium block mb-2">
              10 / CLIENT PORTAL
            </span>
            <span className="text-xs font-mono text-[#191919]/40">
              SECURE FIDUCIARY TELEMETRY
            </span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#191919] font-normal leading-tight tracking-tight">
              Institutional reporting & access.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/70 leading-relaxed font-light max-w-2xl">
              Clients and investment committees receive continuous visibility into multi-asset allocations, risk sensitivity metrics, and audited performance reports.
            </p>
          </div>
        </div>

        {/* PORTAL PREVIEW FRAME (Restrained / Minimalist) */}
        <div className="pt-12">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-xs overflow-hidden">
            {/* Top Bar of Portal */}
            <div className="p-4 sm:p-6 bg-[#191919] text-white flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono tracking-wider text-white/90 font-medium">
                  NORTHBRIDGE CLIENT TELEMETRY • MANDATE ACCT #NB-8921-INST
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-white/60 uppercase">
                  STATUS: LIVE CUSTODIAL FEED
                </span>
                <Link
                  to="/client-portal"
                  className="px-3 py-1 bg-white/15 hover:bg-white/25 text-white text-xs font-medium rounded transition-colors"
                >
                  Enter Portal
                </Link>
              </div>
            </div>

            {/* Portal Tab Navigation */}
            <div className="flex border-b border-[#E5E5E5] bg-[#FAFAFA] px-6 overflow-x-auto">
              {[
                { id: 'overview', label: 'Portfolio Overview' },
                { id: 'allocation', label: 'Asset Allocation' },
                { id: 'risk', label: 'Risk Sensitivity' },
                { id: 'documents', label: 'Reports & Audits' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3.5 px-4 text-xs font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-[#191919] text-[#191919]'
                      : 'border-transparent text-[#191919]/60 hover:text-[#191919]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="p-6 sm:p-10 space-y-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 bg-[#F4F3F3] rounded-xl">
                      <span className="text-[10px] font-mono uppercase text-[#191919]/50 block">CONSOLIDATED NAV</span>
                      <span className="font-serif text-3xl text-[#191919] mt-1 block">$148,250,000</span>
                      <span className="text-xs text-emerald-700 font-mono mt-1 block">+8.42% YTD Net Return</span>
                    </div>

                    <div className="p-5 bg-[#F4F3F3] rounded-xl">
                      <span className="text-[10px] font-mono uppercase text-[#191919]/50 block">LIQUIDITY BUFFER (0-30D)</span>
                      <span className="font-serif text-3xl text-[#191919] mt-1 block">$12,400,000</span>
                      <span className="text-xs text-[#191919]/60 font-mono mt-1 block">8.36% Total Weight</span>
                    </div>

                    <div className="p-5 bg-[#F4F3F3] rounded-xl">
                      <span className="text-[10px] font-mono uppercase text-[#191919]/50 block">SHARPE RATIO (3-YR)</span>
                      <span className="font-serif text-3xl text-[#191919] mt-1 block">1.74</span>
                      <span className="text-xs text-[#191919]/60 font-mono mt-1 block">Benchmark: 1.12</span>
                    </div>
                  </div>

                  {/* Allocation Table */}
                  <div className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                    <div className="bg-[#FAFAFA] p-3 border-b border-[#E5E5E5] text-[10px] font-mono text-[#191919]/60 grid grid-cols-12">
                      <div className="col-span-5">MANDATE / ASSET CLASS</div>
                      <div className="col-span-3 text-right">MARKET VALUE</div>
                      <div className="col-span-2 text-right">WEIGHT</div>
                      <div className="col-span-2 text-right">1-YR RETURN</div>
                    </div>
                    <div className="divide-y divide-[#E5E5E5] text-xs">
                      {[
                        { name: 'Global Quality Equity SMA', val: '$51,887,500', weight: '35.0%', ret: '+14.2%' },
                        { name: 'Direct Senior Private Debt Pool', val: '$37,062,500', weight: '25.0%', ret: '+10.8%' },
                        { name: 'Sovereign & IG Fixed Income', val: '$29,650,000', weight: '20.0%', ret: '+5.4%' },
                        { name: 'Core Infrastructure SPV', val: '$22,237,500', weight: '15.0%', ret: '+8.9%' },
                        { name: 'Treasury Cash & Short Bills', val: '$7,412,500', weight: '5.0%', ret: '+4.8%' },
                      ].map((row, idx) => (
                        <div key={idx} className="p-3.5 grid grid-cols-12 items-center hover:bg-[#F4F3F3]/50 transition-colors">
                          <div className="col-span-5 font-medium text-[#191919]">{row.name}</div>
                          <div className="col-span-3 text-right font-mono text-[#191919]/80">{row.val}</div>
                          <div className="col-span-2 text-right font-mono text-[#191919]/80">{row.weight}</div>
                          <div className="col-span-2 text-right font-mono text-emerald-700 font-semibold">{row.ret}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'allocation' && (
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-mono text-[#191919]/50 block">TACTICAL VS STRATEGIC ALLOCATION TARGETS</span>
                  <div className="space-y-3">
                    {[
                      { name: 'Public Equities', current: 35, target: 35 },
                      { name: 'Private Markets & Direct Debt', current: 25, target: 25 },
                      { name: 'Fixed Income', current: 20, target: 20 },
                      { name: 'Real Assets & Infrastructure', current: 15, target: 15 },
                      { name: 'Cash & Short-Term Liquidity', current: 5, target: 5 },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-[#F4F3F3] rounded-xl space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-[#191919]">{item.name}</span>
                          <span className="font-mono text-[#191919]/70">{item.current}% Actual / {item.target}% Target</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#191919]" style={{ width: `${item.current * 2}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'risk' && (
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-mono text-[#191919]/50 block">PORTFOLIO STRESS SIMULATIONS</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 bg-[#F4F3F3] rounded-xl space-y-1">
                      <span className="text-[#191919]/50 uppercase text-[10px] font-mono block">SOVEREIGN RATE +200 BPS</span>
                      <span className="text-sm font-semibold font-mono text-[#191919] block">-1.2% NAV Impact</span>
                      <p className="text-[11px] text-[#191919]/70 font-light">Short duration buffer neutralizes yield curve steepening.</p>
                    </div>
                    <div className="p-4 bg-[#F4F3F3] rounded-xl space-y-1">
                      <span className="text-[#191919]/50 uppercase text-[10px] font-mono block">EQUITY DRAWDOWN -25%</span>
                      <span className="text-sm font-semibold font-mono text-[#191919] block">-7.4% NAV Impact</span>
                      <p className="text-[11px] text-[#191919]/70 font-light">Protected by non-correlated private credit and infrastructure.</p>
                    </div>
                    <div className="p-4 bg-[#F4F3F3] rounded-xl space-y-1">
                      <span className="text-[#191919]/50 uppercase text-[10px] font-mono block">USD/EUR -15% DEVALUATION</span>
                      <span className="text-sm font-semibold font-mono text-[#191919] block">+0.4% NAV Impact</span>
                      <p className="text-[11px] text-[#191919]/70 font-light">Fully hedged currency collar program insulated FX exposure.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-mono text-[#191919]/50 block">AUDITED STATEMENTS & VALUATION BOOKS</span>
                  {[
                    { title: 'Q3 2025 Comprehensive Institutional Fiduciary Statement', date: 'October 15, 2025', size: '2.4 MB PDF' },
                    { title: 'Annual Multi-Asset Risk & Attribution Audit 2024-2025', date: 'September 30, 2025', size: '4.8 MB PDF' },
                    { title: 'Private Market Co-Investment Valuation & Waterfall Schedule', date: 'August 12, 2025', size: '1.9 MB PDF' },
                  ].map((doc, idx) => (
                    <div key={idx} className="p-4 bg-[#F4F3F3] rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-medium text-[#191919] block">{doc.title}</span>
                        <span className="text-[10px] font-mono text-[#191919]/50">{doc.date} • {doc.size}</span>
                      </div>
                      <span className="text-xs font-mono text-[#191919] font-medium bg-white px-3 py-1 rounded border border-[#E5E5E5] cursor-pointer hover:bg-gray-50">
                        View Statement
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mandatory Compliance Demonstration Label */}
            <div className="p-4 bg-[#FAFAFA] border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <span className="text-[11px] font-mono text-[#191919]/50">
                * Demonstration interface — no real financial data.
              </span>
              <span className="text-[11px] font-mono text-[#191919]/60">
                256-Bit SSL Encrypted • SOC 2 Type II Compliant Infrastructure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
