import React from 'react';
import {
  Scale,
  Plus,
  Trash2,
  Star,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import { ActiveTab, Currency, InvestmentProduct } from '../../types';
import { INVESTMENT_PRODUCTS } from '../../data/mockData';
import { formatCurrency, formatPercent } from '../../utils/formatters';

interface ComparisonViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
  selectedCompareIds: string[];
  setSelectedCompareIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
  selectedCompareIds,
  setSelectedCompareIds,
}) => {
  // If fewer than 2 items selected, default to top 3 flagship products
  const productIds =
    selectedCompareIds.length >= 2
      ? selectedCompareIds
      : ['inv-eq-1', 'inv-deb-1', 'inv-alt-1'];

  const comparedProducts = INVESTMENT_PRODUCTS.filter((p) => productIds.includes(p.id));

  const removeProduct = (id: string) => {
    setSelectedCompareIds((prev) => prev.filter((i) => i !== id));
  };

  // Chart data preparation
  const chartData = comparedProducts.map((p) => ({
    name: p.name.split(' ').slice(0, 3).join(' '),
    '1Y Return (%)': p.return1Y,
    '3Y CAGR (%)': p.return3Y,
    '5Y CAGR (%)': p.return5Y,
  }));

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Decision Matrix
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-400 text-[10px] font-bold">
                {comparedProducts.length} Strategies Compared
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Side-by-Side Investment Comparison
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Cross-compare risk ratios, trailing returns, expense drag, and liquidity terms.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('discovery')}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4 text-slate-600" />
              <span>Add More Strategies</span>
            </button>

            <button
              onClick={openBookingModal}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors"
            >
              <span>Review Allocation with Advisor</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1. Returns Comparison Bar Chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-slate-900">Historical Trailing Returns Profile (%)</h3>
              <p className="text-xs text-slate-500">1-Year vs. 3-Year CAGR vs. 5-Year CAGR</p>
            </div>
            <Scale className="w-5 h-5 text-amber-600" />
          </div>

          <div className="h-64 my-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  formatter={(v: any) => [`${v}%`, '']}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="1Y Return (%)" fill="#64748b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="3Y CAGR (%)" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="5Y CAGR (%)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2. Side-by-Side Comparison Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 w-48 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                    Metric / Attribute
                  </th>
                  {comparedProducts.map((prod) => (
                    <th key={prod.id} className="p-4 min-w-[240px] text-slate-900 border-l border-slate-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                            {prod.category}
                          </span>
                          <h4 className="font-display text-sm font-bold text-slate-900 mt-1">
                            {prod.name}
                          </h4>
                        </div>
                        {comparedProducts.length > 2 && (
                          <button
                            onClick={() => removeProduct(prod.id)}
                            className="text-slate-400 hover:text-rose-600 p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {/* Row 1: Asset Class */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Asset Class</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-medium text-slate-800">
                      {p.assetClass}
                    </td>
                  ))}
                </tr>

                {/* Row 2: Risk Profile */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Risk Profile</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.riskLevel === 'Conservative'
                            ? 'bg-emerald-100 text-emerald-800'
                            : p.riskLevel === 'Moderate' || p.riskLevel === 'Balanced'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {p.riskLevel} Risk
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Row 3: 5Y Compounded CAGR */}
                <tr className="hover:bg-slate-50 bg-amber-50/20">
                  <td className="p-4 font-bold text-amber-900">5-Year CAGR (Annualized)</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-mono font-bold text-amber-700 text-sm">
                      +{p.return5Y}% p.a.
                    </td>
                  ))}
                </tr>

                {/* Row 4: 3Y CAGR */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">3-Year CAGR</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-mono font-bold text-slate-900">
                      +{p.return3Y}% p.a.
                    </td>
                  ))}
                </tr>

                {/* Row 5: 1-Year Return */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">1-Year Trailing Return</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-mono font-bold text-emerald-600">
                      +{p.return1Y}%
                    </td>
                  ))}
                </tr>

                {/* Row 6: Minimum Investment */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Minimum Capital Commitment</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-mono text-slate-800">
                      {formatCurrency(p.minInvestment, currency)}
                    </td>
                  ))}
                </tr>

                {/* Row 7: Expense Ratio */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Expense Ratio (TER)</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-mono text-slate-800">
                      {p.expenseRatio}% p.a.
                    </td>
                  ))}
                </tr>

                {/* Row 8: Strategy AUM */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Total Strategy AUM</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200 font-mono text-slate-800">
                      {formatCurrency(p.aum, currency)}
                    </td>
                  ))}
                </tr>

                {/* Row 9: Morningstar Rating */}
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Quantitative Rating</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200">
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(p.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Action Row */}
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Action</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l border-slate-200">
                      <button
                        onClick={openBookingModal}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors text-center"
                      >
                        Invest In Strategy &rarr;
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
