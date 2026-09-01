import React, { useState } from 'react';
import {
  PieChart as PieIcon,
  TrendingUp,
  TrendingDown,
  Download,
  Sliders,
  Shield,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Zap
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { ActiveTab, Currency, PortfolioHolding } from '../../types';
import { DEMO_HOLDINGS, DEMO_CLIENT } from '../../data/mockData';
import { formatCurrency, formatPercent, triggerDownload } from '../../utils/formatters';

interface PortfolioViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
}) => {
  const [holdings, setHoldings] = useState<PortfolioHolding[]>(DEMO_HOLDINGS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [pnlView, setPnlView] = useState<'all' | 'unrealized' | 'realized'>('unrealized');
  const [rebalanceEquity, setRebalanceEquity] = useState<number>(55);
  const [rebalanceDebt, setRebalanceDebt] = useState<number>(22);
  const [rebalanceAlt, setRebalanceAlt] = useState<number>(20);
  const [rebalanceSimulated, setRebalanceSimulated] = useState(false);

  // Calculations
  const totalInvested = holdings.reduce((sum, h) => sum + h.investedValue, 0);
  const totalCurrentValue = holdings.reduce((sum, h) => sum + h.currentValue, 0);
  const totalGainLoss = totalCurrentValue - totalInvested;
  const totalGainLossPct = (totalGainLoss / totalInvested) * 100;
  const todaysChange = 4280.5;
  const todaysChangePct = 0.30;
  const portfolioCagr = 15.8;

  // Asset allocation aggregated
  const allocationData = [
    { name: 'Equities', value: 55.0, color: '#0f172a' },
    { name: 'Fixed Income (Debt)', value: 22.0, color: '#2563eb' },
    { name: 'Alternative Assets', value: 19.6, color: '#9333ea' },
    { name: 'Liquidity / Cash', value: 3.4, color: '#059669' },
  ];

  // Historical growth data
  const historicalGrowth = [
    { year: '2021', value: 720000, invested: 650000 },
    { year: '2022', value: 840000, invested: 750000 },
    { year: '2023', value: 995000, invested: 880000 },
    { year: '2024', value: 1180000, invested: 1000000 },
    { year: '2025', value: 1320000, invested: 1100000 },
    { year: '2026 (YTD)', value: 1428500, invested: 1150000 },
  ];

  const filteredHoldings = holdings.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || h.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const exportPortfolioReport = () => {
    const csvContent =
      'Symbol,Name,Category,Allocation %,Units,Buy Price,Current Price,Invested Value,Current Value,Total Gain Loss $\n' +
      holdings
        .map(
          (h) =>
            `"${h.symbol}","${h.name}","${h.category}",${h.allocationPct}%,${h.units},$${h.buyPrice},$${h.currentPrice},$${h.investedValue},$${h.currentValue},$${h.totalGainLoss}`
        )
        .join('\n');
    triggerDownload(`Apex_Portfolio_Report_${new Date().toISOString().slice(0, 10)}.csv`, csvContent);
  };

  return (
    <div className="w-full py-10 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Institutional Portfolio Management
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Live Rebalanced
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Apex Flagship Multi-Asset Portfolio
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Account: <strong className="text-slate-800">{DEMO_CLIENT.accountNumber}</strong> &bull; Client: {DEMO_CLIENT.name} &bull; Fiduciary Lead: {DEMO_CLIENT.advisorName}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportPortfolioReport}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download Portfolio Report</span>
            </button>

            <button
              onClick={openBookingModal}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-xs transition-colors"
            >
              <span>Schedule Strategy Call</span>
            </button>
          </div>
        </div>

        {/* 1. Core Portfolio Summary KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
          {/* Card 1 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Total Portfolio Value
            </span>
            <div className="font-display text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              {formatCurrency(totalCurrentValue, currency)}
            </div>
            <span className="text-[10px] text-slate-600">Mark to Market NAV</span>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Invested Principal
            </span>
            <div className="font-display text-xl sm:text-2xl font-bold text-slate-800 font-mono">
              {formatCurrency(totalInvested, currency)}
            </div>
            <span className="text-[10px] text-slate-600">Net Contributed</span>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Overall Gain / Loss
            </span>
            <div className="font-display text-xl sm:text-2xl font-bold text-emerald-600 font-mono flex items-center">
              <ArrowUpRight className="w-5 h-5 mr-0.5" />
              {formatCurrency(totalGainLoss, currency)}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold">
              +{totalGainLossPct.toFixed(2)}% Cumulative
            </span>
          </div>

          {/* Card 4 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Today's Change
            </span>
            <div className="font-display text-xl sm:text-2xl font-bold text-emerald-600 font-mono flex items-center">
              <ArrowUpRight className="w-5 h-5 mr-0.5" />
              +{formatCurrency(todaysChange, currency)}
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold">
              +{todaysChangePct}% Today
            </span>
          </div>

          {/* Card 5 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Portfolio CAGR
            </span>
            <div className="font-display text-xl sm:text-2xl font-bold text-slate-900 font-mono">
              {portfolioCagr}%
            </div>
            <span className="text-[10px] text-slate-600">5-Year Compounded</span>
          </div>

          {/* Card 6 */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              <span>Risk Metric</span>
            </span>
            <div className="font-display text-xl font-bold text-amber-900">
              Sharpe: 1.84
            </div>
            <span className="text-[10px] text-amber-800 font-semibold">Beta 0.92 &bull; Mod-Growth</span>
          </div>
        </div>
      </section>

      {/* 2. Charts Section: Asset Allocation Donut + Historical Compounding Area Chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Asset Allocation Donut */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <PieIcon className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-base text-slate-900">Asset Class Allocation</h3>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                Target Drift: &lt;2.2%
              </span>
            </div>

            <div className="h-64 my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value}%`, 'Weight']}
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              {allocationData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs p-1.5 rounded bg-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-700 font-medium text-[11px]">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Compounding Area Chart */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-slate-900">Historical Portfolio Growth vs. Principal</h3>
                <p className="text-xs text-slate-500">5-Year cumulative value appreciation trajectory</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-slate-900"></span> Current Value
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> Principal
                </span>
              </div>
            </div>

            <div className="h-64 my-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={historicalGrowth} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="valGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0f172a" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#64748b' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    formatter={(val: any) => [formatCurrency(Number(val), currency), 'Value']}
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#0f172a" strokeWidth={2.5} fillOpacity={1} fill="url(#valGrad)" />
                  <Area type="monotone" dataKey="invested" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#invGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 text-slate-500">
              <span>Benchmark: MSCI All Country World Index (12.2% CAGR)</span>
              <span className="font-bold text-emerald-700">Apex Alpha: +360 bps</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Individual Holdings Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Table Toolbar */}
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search holdings or symbol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
              >
                <option value="All">All Asset Classes</option>
                <option value="Equity">Equity</option>
                <option value="Debt">Fixed Income (Debt)</option>
                <option value="Alternative">Alternative</option>
                <option value="Cash">Cash Liquidity</option>
              </select>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-slate-500">Showing {filteredHoldings.length} Positions</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold text-[10px] tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Asset / Symbol</th>
                  <th className="px-4 py-3.5">Category</th>
                  <th className="px-4 py-3.5 text-right">Allocation</th>
                  <th className="px-4 py-3.5 text-right">Units</th>
                  <th className="px-4 py-3.5 text-right">Avg Cost</th>
                  <th className="px-4 py-3.5 text-right">LTP (Price)</th>
                  <th className="px-4 py-3.5 text-right">Current Value</th>
                  <th className="px-4 py-3.5 text-right">Unrealized P&amp;L</th>
                  <th className="px-5 py-3.5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredHoldings.map((h) => {
                  const isGain = h.totalGainLoss >= 0;
                  return (
                    <tr key={h.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="font-bold text-slate-900">{h.name}</div>
                        <div className="font-mono text-[10px] text-amber-700 font-semibold">{h.symbol}</div>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                          {h.category}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono font-bold text-slate-800">
                        {h.allocationPct}%
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono text-slate-600">
                        {h.units.toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono text-slate-600">
                        ${h.buyPrice.toFixed(2)}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono font-bold text-slate-900">
                        ${h.currentPrice.toFixed(2)}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono font-bold text-slate-900">
                        {formatCurrency(h.currentValue, currency)}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono">
                        <div className={`font-bold ${isGain ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {isGain ? '+' : ''}
                          {formatCurrency(h.totalGainLoss, currency)}
                        </div>
                        <div className={`text-[10px] ${isGain ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {isGain ? '+' : ''}
                          {h.totalGainLossPct.toFixed(2)}%
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <button
                          onClick={() => {
                            setActiveTab('discovery');
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition-colors"
                        >
                          Trade / Top-up
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Rebalancing Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-950 rounded-xl text-amber-400 border border-blue-800/50">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Interactive Portfolio Rebalance Simulator
                </h3>
                <p className="text-xs text-slate-400">
                  Simulate tactical weighting shifts to evaluate projected volatility and expected yield changes.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setRebalanceSimulated(true);
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors shrink-0"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Simulate Rebalance Impact</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slider 1 */}
            <div className="space-y-2 bg-slate-800/70 p-4 rounded-xl border border-slate-750">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Equity Growth Allocation</span>
                <span className="font-mono font-bold text-amber-400">{rebalanceEquity}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="80"
                value={rebalanceEquity}
                onChange={(e) => setRebalanceEquity(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block">Current Target: 55% &bull; Range 30-80%</span>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2 bg-slate-800/70 p-4 rounded-xl border border-slate-750">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Fixed Income (Debt) Yield</span>
                <span className="font-mono font-bold text-amber-400">{rebalanceDebt}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={rebalanceDebt}
                onChange={(e) => setRebalanceDebt(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block">Current Target: 22% &bull; Range 10-50%</span>
            </div>

            {/* Slider 3 */}
            <div className="space-y-2 bg-slate-800/70 p-4 rounded-xl border border-slate-750">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Alternative Assets &amp; Gold</span>
                <span className="font-mono font-bold text-amber-400">{rebalanceAlt}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                value={rebalanceAlt}
                onChange={(e) => setRebalanceAlt(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block">Current Target: 20% &bull; Range 5-35%</span>
            </div>
          </div>

          {rebalanceSimulated && (
            <div className="p-4 bg-blue-950/80 border border-blue-800 rounded-xl space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulation Result: Projected Sharpe 1.91 (Risk Reduction: -7.2%)</span>
              </div>
              <p className="text-xs text-slate-300">
                Adjusting equity to {rebalanceEquity}% and fixed income to {rebalanceDebt}% reduces maximum portfolio drawdown risk while maintaining an expected 5-Year CAGR of 14.9%. Would you like to transmit this rebalance mandate to your dedicated private banker?
              </p>
              <div className="pt-2 flex gap-2">
                <button
                  onClick={openBookingModal}
                  className="px-4 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-lg"
                >
                  Confirm Mandate with Advisor
                </button>
                <button
                  onClick={() => setRebalanceSimulated(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
