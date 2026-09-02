import React, { useState } from 'react';
import { Check, Calculator, Sparkles, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [loanVolume, setLoanVolume] = useState<number>(2500);
  const [avgLoanSize, setAvgLoanSize] = useState<number>(450000);

  // Calculations
  const hoursSavedPerLoan = 4.5;
  const totalHoursSavedMonthly = Math.round(loanVolume * hoursSavedPerLoan);
  const estimatedCostSavingsMonthly = Math.round(totalHoursSavedMonthly * 48); // $48/hr avg loan officer & processing wage
  const conversionLiftValue = Math.round(loanVolume * 0.045 * (avgLoanSize * 0.015)); // 4.5% conversion lift * 1.5% origination revenue

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100 bg-[#FAFAFA]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-semibold block mb-3">
          INSTITUTIONAL ROI & PRICING
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
          Clear, predictable pricing scaled to your origination volume
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#191919]/70 leading-relaxed">
          Replaces fragmented point solutions and tedious manual condition chasing with an all-in-one conversational intelligence engine.
        </p>
      </div>

      {/* INTERACTIVE ROI CALCULATOR */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10 md:p-12 mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-[#191919]" />
          <h3 className="font-semibold text-lg text-[#191919]">Institutional ROI Simulator</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* SLIDERS */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="text-gray-700">Monthly Loan Applications</span>
                <span className="font-mono text-[#191919] font-bold text-base">{loanVolume.toLocaleString()} apps/mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={loanVolume}
                onChange={(e) => setLoanVolume(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#191919]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                <span>500 apps</span>
                <span>10,000 apps</span>
                <span>25,000+ apps</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="text-gray-700">Average Funded Loan Amount</span>
                <span className="font-mono text-[#191919] font-bold text-base">${avgLoanSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="1500000"
                step="25000"
                value={avgLoanSize}
                onChange={(e) => setAvgLoanSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#191919]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                <span>$50,000 (Auto/Consumer)</span>
                <span>$450,000 (Conforming)</span>
                <span>$1.5M (Jumbo/Commercial)</span>
              </div>
            </div>
          </div>

          {/* ROI OUTPUT CARD */}
          <div className="lg:col-span-6 bg-[#F8F9FA] p-6 rounded-2xl border border-gray-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200/70">
              <span className="text-[11px] font-mono text-gray-500 block">PROCESSING HOURS SAVED</span>
              <div className="text-2xl font-serif text-[#191919] mt-1 font-normal">
                {totalHoursSavedMonthly.toLocaleString()} hrs/mo
              </div>
              <p className="text-[11px] text-gray-500 mt-1">Eliminates repetitive manual chasing</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200/70">
              <span className="text-[11px] font-mono text-gray-500 block">EST. OPERATIONAL SAVINGS</span>
              <div className="text-2xl font-serif text-emerald-700 mt-1 font-normal">
                ${estimatedCostSavingsMonthly.toLocaleString()}/mo
              </div>
              <p className="text-[11px] text-gray-500 mt-1">Lower cost-to-originate</p>
            </div>

            <div className="sm:col-span-2 bg-[#191919] text-white p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300">ESTIMATED REVENUE UPLIFT</span>
                <div className="text-xl sm:text-2xl font-serif font-normal">
                  +${conversionLiftValue.toLocaleString()} / month
                </div>
              </div>
              <a
                href="#book-demo"
                className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                Get Full ROI Model
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3 PRICING TIERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TIER 1 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 block">GROWTH LENDER</span>
            <div className="text-3xl font-serif text-[#191919] font-normal">$2,400 <span className="text-xs font-sans text-gray-500">/ month</span></div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Ideal for regional mortgage brokers, credit unions, and community banks processing up to 1,000 loans/month.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs text-gray-700">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> SMS & Email Multi-turn AI</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Standard Encompass / Blend POS Sync</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 100% CFPB & TCPA Audit Trail</li>
            </ul>
          </div>
          <a href="#book-demo" className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-black text-center text-xs font-medium rounded-lg transition">
            Select Plan
          </a>
        </div>

        {/* TIER 2: FEATURED */}
        <div className="bg-[#191919] text-white p-8 rounded-2xl border border-black shadow-lg relative flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-300 block">ENTERPRISE SCALE</span>
              <span className="text-[10px] font-mono bg-white/20 text-white px-2 py-0.5 rounded">MOST POPULAR</span>
            </div>
            <div className="text-3xl font-serif font-normal">$6,800 <span className="text-xs font-sans text-gray-400">/ month</span></div>
            <p className="text-xs text-gray-300 leading-relaxed">
              For mid-sized to large lenders needing high-volume voice channels, custom underwriting triggers, and priority SLAs.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs text-gray-200">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Full Voice, SMS & Email Omnichannel</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Custom LOS Schema & CRM Webhooks</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Automated Payroll & Asset Verification API</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Dedicated Solutions Architect</li>
            </ul>
          </div>
          <a href="#book-demo" className="w-full py-2.5 bg-white text-black text-center text-xs font-medium rounded-lg hover:bg-gray-100 transition">
            Book Institutional Demo
          </a>
        </div>

        {/* TIER 3 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 block">TIER 1 BANK & SERVICER</span>
            <div className="text-3xl font-serif text-[#191919] font-normal">Custom <span className="text-xs font-sans text-gray-500">/ annual contract</span></div>
            <p className="text-xs text-gray-600 leading-relaxed">
              For top-tier national depositories, government-sponsored enterprises (GSEs), and master servicers.
            </p>
            <ul className="space-y-2.5 pt-2 text-xs text-gray-700">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Single-Tenant Dedicated VPC or On-Premise</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Custom Regulatory Governance & Audit Tooling</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 99.999% SLA & 24/7 Red-Phone Support</li>
            </ul>
          </div>
          <a href="#book-demo" className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-black text-center text-xs font-medium rounded-lg transition">
            Contact Enterprise Sales
          </a>
        </div>
      </div>
    </section>
  );
};
