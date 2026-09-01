import React from 'react';
import Layout from '../../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Globe, DollarSign } from 'lucide-react';

export default function GeographicAnalytics() {
  const geoData = [
    { country: 'United States', visitors: 64200, revenue: 48500 },
    { country: 'Germany', visitors: 28400, revenue: 19200 },
    { country: 'United Kingdom', visitors: 24100, revenue: 16400 },
    { country: 'Japan', visitors: 18900, revenue: 12800 },
    { country: 'India', visitors: 16500, revenue: 8400 },
    { country: 'Canada', visitors: 12400, revenue: 9100 },
  ];

  return (
    <Layout title="Geographic Regional Performance" breadcrumb="Home / Analytics / Geographic Analytics">
      <div className="space-y-6">
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <Globe className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Regional Traffic & Revenue Distribution</span>
          </h3>

          <div className="w-full h-64 sm:h-80 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={geoData} layout="vertical" margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis type="number" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis dataKey="country" type="category" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={90} />
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
                <Bar dataKey="visitors" fill="#00f0ff" radius={[0, 6, 6, 0]} maxBarSize={20} name="Visitors Count" />
                <Bar dataKey="revenue" fill="#10b981" radius={[0, 6, 6, 0]} maxBarSize={20} name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Geographic Table */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white">Top Geographic Markets</h3>
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-4">Country / Region</th>
                  <th className="p-4">Total Visitors</th>
                  <th className="p-4">Revenue Contribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {geoData.map(g => (
                  <tr key={g.country} className="hover:bg-white/[0.04]">
                    <td className="p-4 font-bold text-white">{g.country}</td>
                    <td className="p-4 font-mono">{g.visitors.toLocaleString()}</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">${g.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
