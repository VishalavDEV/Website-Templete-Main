import React from 'react';
import Layout from '../../components/layout/Layout';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, UserPlus, RefreshCw } from 'lucide-react';

export default function VisitorAnalytics() {
  const visitorData = [
    { period: 'Jan', newVisitors: 28400, returningVisitors: 13600 },
    { period: 'Feb', newVisitors: 32100, returningVisitors: 15900 },
    { period: 'Mar', newVisitors: 38500, returningVisitors: 16500 },
    { period: 'Apr', newVisitors: 34200, returningVisitors: 16800 },
    { period: 'May', newVisitors: 42800, returningVisitors: 21200 },
    { period: 'Jun', newVisitors: 48900, returningVisitors: 24100 },
  ];

  return (
    <Layout title="Visitor Cohorts & Retention" breadcrumb="Home / Analytics / Visitor Analytics">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">New Visitors</span>
            <div className="text-lg sm:text-xl font-bold text-neura-cyan font-mono mt-1 truncate">224.9K</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Returning Visitors</span>
            <div className="text-lg sm:text-xl font-bold text-neura-purple font-mono mt-1 truncate">108.1K</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Return Rate</span>
            <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono mt-1 truncate">32.4%</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Pages / Session</span>
            <div className="text-lg sm:text-xl font-bold text-amber-400 font-mono mt-1 truncate">4.8 Pages</div>
          </div>
        </div>

        {/* New vs Returning Visitor Chart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white">New vs Returning Visitors Growth</h3>
          <div className="w-full h-64 sm:h-80 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitorData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="period" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="newVisitors" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={24} name="New Visitors" />
                <Bar dataKey="returningVisitors" fill="#7000ff" radius={[6, 6, 0, 0]} maxBarSize={24} name="Returning Visitors" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
}
