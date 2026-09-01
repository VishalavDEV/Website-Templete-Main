import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  Shield,
  Layers,
  ArrowUpRight,
  Download,
  Info,
  Calendar,
  Percent,
  Activity,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { ActiveTab, Currency } from '../../types';
import { triggerDownload } from '../../utils/formatters';

interface PerformanceViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
}

export const PerformanceView: React.FC<PerformanceViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
}) => {
  const [selectedHorizon, setSelectedHorizon] = useState<'1Y' | '3Y' | '5Y' | 'ALL'>('5Y');

  // Benchmark rolling returns comparison data
  const rollingPerformance = [
    { year: '2021', apex: 22.4, msci: 18.5, sp500: 20.9, aggBond: -1.5 },
    { year: '2022', apex: -4.2, msci: -18.1, sp500: -19.4, aggBond: -13.0 },
    { year: '2023', apex: 24.8, msci: 21.8, sp500: 24.2, aggBond: 5.5 },
    { year: '2024', apex: 21.6, msci: 17.2, sp500: 25.0, aggBond: 2.8 },
    { year: '2025', apex: 19.5, msci: 14.8, sp500: 16.4, aggBond: 6.2 },
    { year: '2026 YTD', apex: 16.8, msci: 12.1, sp500: 13.5, aggBond: 4.8 },
  ];

  // Drawdown comparison data
  const drawdownData = [
    { period: '2022 Q1', apex: -2.1, msci: -5.4, sp500: -4.9 },
    { period: '2022 Q2', apex: -5.4, msci: -16.2, sp500: -16.5 },
    { period: '2022 Q3', apex: -8.4, msci: -21.4, sp500: -23.9 },
    { period: '2022 Q4', apex: -3.2, msci: -14.0, sp500: -18.1 },
    { period: '2023 Recovery', apex: 0.0, msci: -6.5, sp500: -8.2 },
    { period: '2024 New High', apex: 0.0, msci: 0.0, sp500: 0.0 },
  ];

  const historicalTable = [
    { horizon: '1 Month', apex: '+1.85%', msci: '+1.10%', sp500: '+1.42%', alpha: '+0.43%' },
    { horizon: '3 Months', apex: '+5.40%', msci: '+3.80%', sp500: '+4.20%', alpha: '+1.20%' },
    { horizon: '6 Months', apex: '+9.80%', msci: '+7.10%', sp500: '+8.40%', alpha: '+1.40%' },
    { horizon: '1 Year', apex: '+24.20%', msci: '+18.10%', sp500: '+21.50%', alpha: '+2.70%' },
    { horizon: '3 Years (CAGR)', apex: '+18.50%', msci: '+12.40%', sp500: '+14.80%', alpha: '+3.70%' },
    { horizon: '5 Years (CAGR)', apex: '+19.80%', msci: '+13.20%', sp500: '+15.60%', alpha: '+4.20%' },
    { horizon: 'Since Inception (1999)', apex: '+16.40%', msci: '+9.80%', sp500: '+10.40%', alpha: '+6.00%' },
  ];

  const downloadFactsheet = () => {
    const content = `APEX WEALTH QUANTITATIVE PERFORMANCE & RISK FACTSHEET\n=======================================================\nTimeframe: ${selectedHorizon}\nSharpe Ratio: 1.84 | Sortino: 2.15 | Beta: 0.88\n5Y CAGR: 19.80% vs MSCI World 13.20% (+4.20% Alpha)\nMax Drawdown: -8.4% vs S&P 500 -23.9%`;
    triggerDownload(`Apex_Performance_Factsheet_${selectedHorizon}.txt`, content);
  };

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Quantitative Verification
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Performance, Alpha &amp; Risk Analytics
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              GIPS-compliant historical track record verified against major international benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadFactsheet}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download Performance Factsheet</span>
            </button>

            <button
              onClick={openBookingModal}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors"
            >
              <span>Audit Track Record with CIO</span>
            </button>
          </div>
        </div>

        {/* 1. Quantitative Core Risk-Return Ratios Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">5Y CAGR</span>
            <div className="font-display text-xl font-bold text-slate-900 font-mono">19.8%</div>
            <span className="text-[10px] text-emerald-600 font-semibold">+660 bps vs World</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Sharpe Ratio</span>
            <div className="font-display text-xl font-bold text-amber-700 font-mono">1.84</div>
            <span className="text-[10px] text-slate-500">Benchmark: 1.05</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Sortino Ratio</span>
            <div className="font-display text-xl font-bold text-slate-900 font-mono">2.15</div>
            <span className="text-[10px] text-slate-500">Downside Adjusted</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Annual Alpha</span>
            <div className="font-display text-xl font-bold text-emerald-600 font-mono">+4.20%</div>
            <span className="text-[10px] text-emerald-700 font-semibold">Active Value Add</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Beta</span>
            <div className="font-display text-xl font-bold text-slate-900 font-mono">0.88</div>
            <span className="text-[10px] text-slate-500">Lower Market Sensitivity</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Annual Volatility</span>
            <div className="font-display text-xl font-bold text-slate-900 font-mono">11.2%</div>
            <span className="text-[10px] text-slate-500">S&amp;P 500: 16.4%</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Max Drawdown</span>
            <div className="font-display text-xl font-bold text-slate-900 font-mono">-8.4%</div>
            <span className="text-[10px] text-emerald-600 font-semibold">65% Lower Contagion</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Charts: Annual Rolling Returns & Drawdown Protection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bar Chart: Year-over-Year Alpha vs Benchmark */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-slate-900">Annual Return Comparison (%)</h3>
                <p className="text-xs text-slate-500">Apex Flagship vs. MSCI World vs. S&amp;P 500</p>
              </div>
              <div className="flex gap-1">
                {(['1Y', '3Y', '5Y', 'ALL'] as const).map((hz) => (
                  <button
                    key={hz}
                    onClick={() => setSelectedHorizon(hz)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-lg ${
                      selectedHorizon === hz
                        ? 'bg-slate-900 text-amber-400'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {hz}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-64 my-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rollingPerformance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    formatter={(v: any) => [`${v}%`, '']}
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '11px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="apex" name="Apex Flagship" fill="#0f172a" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sp500" name="S&P 500" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="msci" name="MSCI World" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
              <span>Apex Flagship Outperformed Benchmarks in 5 out of 6 calendar periods.</span>
            </div>
          </div>

          {/* Drawdown Protection Chart */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-slate-900">Capital Drawdown Defense (%)</h3>
                <p className="text-xs text-slate-500">Peak-to-trough preservation during 2022 selloff</p>
              </div>
              <Shield className="w-5 h-5 text-amber-600" />
            </div>

            <div className="h-64 my-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={drawdownData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="period" tick={{ fontSize: 10, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={[-25, 2]} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    formatter={(v: any) => [`${v}%`, 'Drawdown']}
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '11px' }}
                  />
                  <Line type="monotone" dataKey="apex" name="Apex Portfolio" stroke="#0f172a" strokeWidth={3} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="sp500" name="S&P 500" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" />
                  <Line type="monotone" dataKey="msci" name="MSCI World" stroke="#ef4444" strokeWidth={2} strokeDasharray="2 2" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
              <strong className="text-slate-900">Downside Cushion:</strong> Apex max drawdown capped at -8.4% compared to -23.9% for standard index funds.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Historical Horizon Returns Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-display text-xl font-bold text-slate-900">
              Standardized Trailing Returns Matrix
            </h3>
            <p className="text-xs text-slate-500">Periods ended August 2026. Annualized for &gt; 1 Year.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold text-[10px] tracking-wider">
                <tr>
                  <th className="px-6 py-3.5">Time Horizon</th>
                  <th className="px-6 py-3.5 text-right font-bold text-slate-900">Apex Flagship Strategy</th>
                  <th className="px-6 py-3.5 text-right">MSCI World Index</th>
                  <th className="px-6 py-3.5 text-right">S&amp;P 500 TR</th>
                  <th className="px-6 py-3.5 text-right text-emerald-600 font-bold">Excess Alpha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {historicalTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3.5 font-sans font-bold text-slate-800">{row.horizon}</td>
                    <td className="px-6 py-3.5 text-right font-bold text-slate-950 text-sm bg-amber-50/40">
                      {row.apex}
                    </td>
                    <td className="px-6 py-3.5 text-right text-slate-600">{row.msci}</td>
                    <td className="px-6 py-3.5 text-right text-slate-600">{row.sp500}</td>
                    <td className="px-6 py-3.5 text-right font-bold text-emerald-600">{row.alpha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
