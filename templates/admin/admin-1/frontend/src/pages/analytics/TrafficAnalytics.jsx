import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Globe, TrendingUp, Filter, Download } from 'lucide-react';

export default function TrafficAnalytics() {
  const [range, setRange] = useState('30D');

  const rangeDatasets = {
    'Today': {
      trend: [
        { period: '00:00 - 04:00', direct: 1800, organic: 1200, paid: 600, social: 450 },
        { period: '04:00 - 08:00', direct: 3200, organic: 2400, paid: 1100, social: 890 },
        { period: '08:00 - 12:00', direct: 7800, organic: 5600, paid: 2900, social: 2100 },
        { period: '12:00 - 16:00', direct: 9400, organic: 6800, paid: 3400, social: 2700 },
        { period: '16:00 - 20:00', direct: 6900, organic: 4900, paid: 2600, social: 1950 },
        { period: '20:00 - 24:00', direct: 4100, organic: 3100, paid: 1500, social: 1100 },
      ],
      channels: [
        { channel: 'Direct Traffic', sessions: 33200, conversions: 2450 },
        { channel: 'Organic Search', sessions: 24000, conversions: 1780 },
        { channel: 'Paid Search', sessions: 12100, conversions: 890 },
        { channel: 'Social Media', sessions: 9190, conversions: 620 },
        { channel: 'Referrals', sessions: 5800, conversions: 380 },
      ]
    },
    '7D': {
      trend: [
        { period: 'Mon', direct: 4200, organic: 3100, paid: 1500, social: 1100 },
        { period: 'Tue', direct: 5100, organic: 3800, paid: 1900, social: 1400 },
        { period: 'Wed', direct: 5800, organic: 4300, paid: 2200, social: 1700 },
        { period: 'Thu', direct: 6400, organic: 4900, paid: 2600, social: 2100 },
        { period: 'Fri', direct: 7200, organic: 5400, paid: 2900, social: 2400 },
        { period: 'Sat', direct: 4800, organic: 3600, paid: 1800, social: 1300 },
        { period: 'Sun', direct: 3900, organic: 2900, paid: 1400, social: 980 },
      ],
      channels: [
        { channel: 'Direct Traffic', sessions: 37400, conversions: 2650 },
        { channel: 'Organic Search', sessions: 28000, conversions: 2010 },
        { channel: 'Paid Search', sessions: 14300, conversions: 1120 },
        { channel: 'Social Media', sessions: 10980, conversions: 790 },
        { channel: 'Referrals', sessions: 7600, conversions: 520 },
      ]
    },
    '30D': {
      trend: [
        { period: 'Week 1', direct: 12400, organic: 8500, paid: 4200, social: 3100 },
        { period: 'Week 2', direct: 14200, organic: 9800, paid: 5100, social: 3900 },
        { period: 'Week 3', direct: 16800, organic: 11400, paid: 6400, social: 4800 },
        { period: 'Week 4', direct: 19500, organic: 13200, paid: 7800, social: 5600 },
      ],
      channels: [
        { channel: 'Direct Traffic', sessions: 62900, conversions: 4200 },
        { channel: 'Organic Search', sessions: 42900, conversions: 3100 },
        { channel: 'Paid Search', sessions: 23500, conversions: 1850 },
        { channel: 'Social Media', sessions: 17400, conversions: 1200 },
        { channel: 'Referrals', sessions: 12500, conversions: 950 },
      ]
    },
    '90D': {
      trend: [
        { period: 'Month 1', direct: 38000, organic: 26000, paid: 14000, social: 10500 },
        { period: 'Month 2', direct: 46000, organic: 32000, paid: 18500, social: 13800 },
        { period: 'Month 3', direct: 54000, organic: 39000, paid: 22000, social: 16900 },
      ],
      channels: [
        { channel: 'Direct Traffic', sessions: 138000, conversions: 9850 },
        { channel: 'Organic Search', sessions: 97000, conversions: 7120 },
        { channel: 'Paid Search', sessions: 54500, conversions: 4180 },
        { channel: 'Social Media', sessions: 41200, conversions: 2950 },
        { channel: 'Referrals', sessions: 28400, conversions: 1980 },
      ]
    }
  };

  const currentTrendData = rangeDatasets[range]?.trend || rangeDatasets['30D'].trend;
  const currentChannelData = rangeDatasets[range]?.channels || rangeDatasets['30D'].channels;

  return (
    <Layout title="Traffic Channel Analytics" breadcrumb="Home / Analytics / Traffic Analytics">
      <div className="space-y-6">
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <Globe className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Traffic Channel Performance</span>
            </h2>
            <p className="text-xs text-slate-400">In-depth traffic volume, source acquisition, and channel trends.</p>
          </div>

          <div className="p-1 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-1 text-xs font-semibold">
            {['Today', '7D', '30D', '90D'].map(t => (
              <button
                key={t}
                onClick={() => setRange(t)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  range === t ? 'bg-neura-cyan text-black font-bold shadow-glow-cyan' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Traffic Over Time AreaChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h3 className="text-base font-bold text-white">Traffic Acquisition Trends ({range})</h3>
            <span className="text-xs font-mono text-neura-cyan">Live Telemetry Filter: {range}</span>
          </div>

          <div className="w-full h-64 sm:h-80 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7000ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#7000ff" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="period" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Area type="monotone" dataKey="direct" stroke="#00f0ff" strokeWidth={3} fill="url(#colorDirect)" name="Direct Traffic" />
                <Area type="monotone" dataKey="organic" stroke="#7000ff" strokeWidth={2} fill="url(#colorOrganic)" name="Organic Search" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channel Performance BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h3 className="text-base font-bold text-white">Channel Sessions vs Conversions ({range})</h3>
            <span className="text-xs font-mono text-emerald-400">Range: {range}</span>
          </div>

          <div className="w-full h-64 sm:h-72 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentChannelData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="channel" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="sessions" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={24} name="Total Sessions" />
                <Bar dataKey="conversions" fill="#10b981" radius={[6, 6, 0, 0]} maxBarSize={24} name="Conversions" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
}
