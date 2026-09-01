import React, { useState } from 'react';
import {
  TrendingUp,
  Shield,
  Layers,
  PieChart,
  Briefcase,
  Building,
  Clock,
  Landmark,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  DollarSign,
  Info,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  FileText
} from 'lucide-react';
import { ActiveTab, Currency, InvestmentSolution, RiskLevel } from '../../types';
import { INVESTMENT_SOLUTIONS } from '../../data/mockData';
import { formatCurrency } from '../../utils/formatters';

interface SolutionsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
  selectedSolutionId: string;
  setSelectedSolutionId: (id: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
  selectedSolutionId,
  setSelectedSolutionId,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [modalSolution, setModalSolution] = useState<InvestmentSolution | null>(null);

  const categories = [
    'All',
    'Equity',
    'Debt',
    'Mutual Funds',
    'Alternative',
    'Portfolio Management',
    'Wealth Management',
    'Retirement',
    'Institutional',
  ];

  const filteredSolutions =
    activeCategoryFilter === 'All'
      ? INVESTMENT_SOLUTIONS
      : INVESTMENT_SOLUTIONS.filter((s) => s.category === activeCategoryFilter);

  const getRiskBadgeColor = (risk: RiskLevel) => {
    switch (risk) {
      case 'Conservative':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Moderate':
      case 'Balanced':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Growth':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Aggressive':
      case 'High Yield':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'PieChart':
        return <PieChart className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Building':
        return <Building className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" />;
      default:
        return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Comprehensive Asset Solutions
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Institutional Rigor Tailored to Your Wealth Horizon
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Choose from 8 specialized investment categories designed to maximize risk-adjusted capital growth, deliver consistent yield, and preserve generational wealth.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategoryFilter === cat
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className={`bg-white rounded-2xl border transition-all p-7 shadow-xs hover:shadow-xl flex flex-col justify-between ${
                sol.highlight ? 'border-amber-400/80 ring-1 ring-amber-400/20' : 'border-slate-200'
              }`}
            >
              <div className="space-y-4">
                {/* Top badges */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 text-amber-400 rounded-xl shadow-xs">
                      {getIcon(sol.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {sol.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900">{sol.title}</h3>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-full border ${getRiskBadgeColor(
                      sol.riskLevel
                    )}`}
                  >
                    {sol.riskLevel} Risk
                  </span>
                </div>

                <p className="text-xs font-medium text-amber-800 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/50">
                  {sol.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">{sol.overview}</p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-3 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                      5Y CAGR / Yield
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono">{sol.cagr5Y}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                      Time Horizon
                    </span>
                    <span className="text-xs font-bold text-slate-900">{sol.horizon}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                      Min Investment
                    </span>
                    <span className="text-xs font-bold text-amber-700 font-mono">
                      {formatCurrency(sol.minInvestment, currency)}
                    </span>
                  </div>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Strategic Advantages
                  </span>
                  <ul className="space-y-1.5">
                    {sol.benefits.slice(0, 3).map((ben, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setModalSolution(sol)}
                  className="text-xs font-bold text-slate-700 hover:text-amber-700 flex items-center gap-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Factsheet Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedSolutionId(sol.id);
                      setActiveTab('portfolio');
                    }}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    Simulate
                  </button>
                  <button
                    onClick={() => {
                      setModalSolution(sol);
                    }}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors flex items-center gap-1"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Detail Factsheet Modal */}
      {modalSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setModalSolution(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-xl font-bold"
            >
              &times;
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 text-amber-400 rounded-xl">
                  {getIcon(modalSolution.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {modalSolution.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {modalSolution.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {modalSolution.overview}
              </p>

              {/* Grid specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-amber-50/60 p-4 rounded-xl border border-amber-200/60 text-center">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    Target Return / CAGR
                  </span>
                  <span className="text-sm font-bold text-amber-900 font-mono">
                    {modalSolution.cagr5Y}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    Risk Category
                  </span>
                  <span className="text-xs font-bold text-slate-900">{modalSolution.riskLevel}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    Min Allocation
                  </span>
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    {formatCurrency(modalSolution.minInvestment, currency)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">
                    Total Strategy AUM
                  </span>
                  <span className="text-xs font-bold text-slate-900">{modalSolution.aum}</span>
                </div>
              </div>

              {/* Suitable profile */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Suitable Investor Profile
                </h4>
                <p className="text-xs text-slate-600">{modalSolution.suitableFor}</p>
              </div>

              {/* Features list */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Key Portfolio Features &amp; Strategy Basket
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {modalSolution.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setModalSolution(null);
                    setActiveTab('comparison');
                  }}
                  className="text-xs font-bold text-slate-700 hover:text-amber-700"
                >
                  Compare with other funds &rarr;
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setModalSolution(null);
                      openBookingModal();
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  >
                    Consult Dedicated Advisor
                  </button>
                  <button
                    onClick={() => {
                      setModalSolution(null);
                      setActiveTab('portal');
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-xs"
                  >
                    Invest in Strategy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
