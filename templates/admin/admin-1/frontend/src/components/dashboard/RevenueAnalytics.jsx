import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, DollarSign, ShoppingBag, CreditCard } from 'lucide-react';
import { MOCK_REVENUE_DATA } from '../../services/mockData';

export default function RevenueAnalytics({ data: parentData, activeRange = 'monthly', onRangeChange }) {
  const [activeTab, setActiveTab] = useState(activeRange);
  const [chartData, setChartData] = useState(() => {
    if (parentData && parentData.length) return parentData;
    return MOCK_REVENUE_DATA[activeRange] || MOCK_REVENUE_DATA.monthly;
  });

  useEffect(() => {
    if (parentData && parentData.length) {
      setChartData(parentData);
    }
  }, [parentData]);

  const handleTabClick = async (tab) => {
    setActiveTab(tab);
    if (onRangeChange) {
      const resData = await onRangeChange(tab);
      if (resData && resData.length) {
        setChartData(resData);
        return;
      }
    }
    // Fallback to internal dataset switching so tabs ALWAYS work smoothly on all pages
    setChartData(MOCK_REVENUE_DATA[tab] || MOCK_REVENUE_DATA.monthly);
  };

  const exportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["Period,Revenue,Sales,AvgOrder", ...chartData.map(e => `${e.month},${e.revenue},${e.sales},${e.avgOrder}`)].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `neura_revenue_report_${activeTab}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate dynamic totals based on current chart data
  const totalRev = chartData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalSalesCount = chartData.reduce((acc, curr) => acc + curr.sales, 0);
  const avgOrderVal = totalSalesCount > 0 ? (totalRev / totalSalesCount).toFixed(2) : '39.28';

  return (
    <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-6 min-w-0 overflow-hidden">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center flex-wrap gap-2">
            <span>Revenue Intelligence</span>
            <span className="px-2.5 py-0.5 rounded-full bg-neura-cyan/20 text-neura-cyan text-xs font-mono">
              REALTIME
            </span>
          </h2>
          <p className="text-xs text-slate-400">Comprehensive financial performance across active telemetry nodes.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 sm:space-x-3 w-full sm:w-auto">
          {/* Tabs */}
          <div className="p-1 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-1 text-xs font-semibold">
            {['monthly', 'weekly', 'daily'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Export Button */}
          <button
            onClick={exportCSV}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan/40 text-slate-300 hover:text-neura-cyan transition-all flex items-center space-x-1.5 text-xs font-medium"
          >
            <Download className="w-4 h-4" />
            <span className="inline">Export</span>
          </button>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center space-x-3 sm:space-x-4">
          <div className="p-2.5 sm:p-3 rounded-xl bg-neura-cyan/20 text-neura-cyan shrink-0">
            <DollarSign className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase block truncate">Total Revenue</span>
            <div className="text-base sm:text-lg font-bold text-white font-mono truncate">${totalRev.toLocaleString()}</div>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center space-x-3 sm:space-x-4">
          <div className="p-2.5 sm:p-3 rounded-xl bg-neura-purple/20 text-neura-purple shrink-0">
            <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase block truncate">Total Sales</span>
            <div className="text-base sm:text-lg font-bold text-white font-mono truncate">{totalSalesCount.toLocaleString()}</div>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center space-x-3 sm:space-x-4">
          <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
            <CreditCard className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase block truncate">Average Order</span>
            <div className="text-base sm:text-lg font-bold text-white font-mono truncate">${avgOrderVal}</div>
          </div>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="w-full h-64 sm:h-72 lg:h-80 pt-2 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7000ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#7000ff" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="month" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
            <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{
                backgroundColor: '#0B1020',
                borderColor: 'rgba(255,255,255,0.15)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#00f0ff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#7000ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
