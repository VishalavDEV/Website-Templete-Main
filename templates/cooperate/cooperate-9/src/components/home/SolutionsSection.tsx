import React, { useState } from 'react';
import { Users, Briefcase, Building, Landmark, Check, ArrowRight, Sparkles, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

interface SolutionsSectionProps {
  onGetStarted?: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onGetStarted }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions = [
    {
      id: 'individuals',
      title: 'Individual Wealth & Growth',
      audience: 'For High-Earning Individuals & Households',
      icon: Users,
      description: 'Personalized wealth building that unifies all your accounts, forecasts tax liabilities, and pairs you with an accredited fiduciary advisor.',
      stats: [
        { label: 'Avg. Goal Acceleration', value: '+24%' },
        { label: 'Annual Tax Savings', value: '$4,200+' },
        { label: 'Advisor Response Time', value: '< 15 mins' },
      ],
      features: [
        'Automated high-yield cash sweeps & interest maximization',
        'Dynamic home purchase & retirement milestone projections',
        'Real-time portfolio rebalancing with tax loss harvesting',
        'Direct chat & video reviews with your dedicated advisor',
      ],
      badge: 'Most Popular for Individuals',
    },
    {
      id: 'advisors',
      title: 'Financial Advisors & RIAs',
      audience: 'For Independent Wealth Management Practices',
      icon: Briefcase,
      description: 'Empower your advisory practice with conversational AI that prepares client agendas, detects life events, and automates portfolio drift reporting.',
      stats: [
        { label: 'Client Capacity Lift', value: '3.5x' },
        { label: 'Meeting Prep Time', value: '-65%' },
        { label: 'Client Retention Rate', value: '99.2%' },
      ],
      features: [
        'Automated client review summaries & action item dispatch',
        'Client life-event detection from multi-custodian data feeds',
        'SEC & FINRA compliant conversational communication logging',
        'Custom white-label client portal and mobile app',
      ],
      badge: 'For Wealth Practices',
    },
    {
      id: 'family-offices',
      title: 'Family Offices & Private Trusts',
      audience: 'For Multi-Generational Wealth & Estates',
      icon: Building,
      description: 'Unified balance sheet aggregation across private equity, real estate holdings, art, trusts, and traditional public securities.',
      stats: [
        { label: 'Asset Class Coverage', value: '100%' },
        { label: 'Consolidation Speed', value: 'Real-time' },
        { label: 'Multi-Entity Support', value: 'Unlimited' },
      ],
      features: [
        'Multi-entity trust & partnership allocation waterfalls',
        'Private equity capital call tracking & liquidity forecasting',
        'Granular role-based permissions for family members and trustees',
        'Direct bespoke API integration with custodians and private banks',
      ],
      badge: 'Institutional Grade',
    },
    {
      id: 'institutions',
      title: 'Banks & Enterprise FinTechs',
      audience: 'For Retail Depositories & Credit Unions',
      icon: Landmark,
      description: 'Embed intelligent financial relationship tools directly into your mobile banking experience to drive deposit retention and loan growth.',
      stats: [
        { label: 'Deposit Retention Lift', value: '+18%' },
        { label: 'Cross-Sell Conversion', value: '+31%' },
        { label: 'Core Banking Integration', value: '14 Days' },
      ],
      features: [
        'Pre-built core banking SDKs (Jack Henry, FIS, Fiserv)',
        'Contextual cross-sell triggers for mortgages and wealth products',
        'Institutional SOC 2 Type II and GLBA safeguards',
        'Single-tenant cloud deployment or on-premise VPC',
      ],
      badge: 'Enterprise Platform',
    },
  ];

  const current = solutions[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="solutions" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/60 font-semibold block mb-3 font-sans">
          TAILORED SOLUTIONS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
          Solutions designed for every stage of wealth
        </h2>
        <p className="mt-4 text-base text-[#191919]/70 leading-relaxed font-normal">
          Whether you’re an individual building your future, an advisor scaling your firm, or an institution modernizing banking relationships.
        </p>
      </div>

      {/* SOLUTIONS NAVIGATION PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {solutions.map((sol, idx) => {
          const TabIcon = sol.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={sol.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                isActive
                  ? 'bg-[#191919] text-white border-[#191919] shadow-sm'
                  : 'bg-[#F7F5F0] hover:bg-[#EFECE3] text-[#191919] border-transparent'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{sol.title}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SOLUTION SHOWCASE CARD */}
      <div className="bg-[#F7F5F0] rounded-3xl border border-[#EBE8E1] p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: DESCRIPTION & STATS */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 bg-white text-[#191919] border border-[#EBE8E1] rounded-full mb-3">
              {current.badge}
            </span>
            <div className="text-xs font-mono uppercase text-gray-500 tracking-wider">
              {current.audience}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#191919] font-normal mt-1">
              {current.title}
            </h3>
          </div>

          <p className="text-base text-[#191919]/80 leading-relaxed font-normal">
            {current.description}
          </p>

          {/* 3 STAT TILES */}
          <div className="grid grid-cols-3 gap-3 py-2">
            {current.stats.map((s, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-[#EBE8E1] shadow-xs">
                <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-[#191919]">{s.value}</div>
                <div className="text-[11px] text-gray-500 mt-1 font-sans leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

          {/* FEATURE CHECKLIST */}
          <ul className="space-y-2.5 pt-2">
            {current.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#191919]/85">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN: ACTION SUMMARY CARD */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#EBE8E1] shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#191919]">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#191919] block">Finora Solution Tier</span>
                <span className="text-[11px] text-gray-500 font-normal">{current.title}</span>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
              Active
            </span>
          </div>

          <div className="space-y-3 text-xs text-gray-600">
            <div className="p-3 bg-[#F7F5F0] rounded-xl flex items-center justify-between">
              <span>Onboarding Duration</span>
              <span className="font-mono text-black font-semibold">Immediate / Under 24h</span>
            </div>
            <div className="p-3 bg-[#F7F5F0] rounded-xl flex items-center justify-between">
              <span>Advisor Collaboration</span>
              <span className="font-mono text-black font-semibold">1-on-1 Fiduciary Match</span>
            </div>
            <div className="p-3 bg-[#F7F5F0] rounded-xl flex items-center justify-between">
              <span>Compliance Standard</span>
              <span className="font-mono text-emerald-700 font-semibold">SEC / FINRA Ready</span>
            </div>
          </div>

          <button
            onClick={onGetStarted}
            className="w-full py-3.5 bg-[#191919] hover:bg-black text-white text-center text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Get Started with {current.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
