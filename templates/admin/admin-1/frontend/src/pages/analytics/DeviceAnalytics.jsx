import React from 'react';
import Layout from '../../components/layout/Layout';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Layers, Laptop, Smartphone, Tablet } from 'lucide-react';

export default function DeviceAnalytics() {
  const deviceData = [
    { name: 'Desktop', value: 65, color: '#00f0ff' },
    { name: 'Mobile', value: 28, color: '#7000ff' },
    { name: 'Tablet', value: 7, color: '#10b981' },
  ];

  const osData = [
    { os: 'Windows', users: 48500 },
    { os: 'macOS', users: 34200 },
    { os: 'Android', users: 19800 },
    { os: 'iOS', users: 16400 },
    { os: 'Linux', users: 12100 },
  ];

  return (
    <Layout title="Device & OS Telemetry" breadcrumb="Home / Analytics / Device Analytics">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Device Donut Chart */}
          <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
            <h3 className="text-base font-bold text-white">Device Category Share</h3>
            <div className="h-56 sm:h-64 w-full relative flex items-center justify-center min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{
                      backgroundColor: '#0B1020',
                      borderColor: 'rgba(255,255,255,0.15)',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-lg sm:text-xl font-extrabold text-white font-mono">65%</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase">Desktop Lead</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-around gap-2 text-xs pt-2 border-t border-white/10">
              {deviceData.map(d => (
                <div key={d.name} className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="text-slate-300">{d.name} ({d.value}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Systems BarChart */}
          <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
            <h3 className="text-base font-bold text-white">Operating Systems Distribution</h3>
            <div className="w-full h-56 sm:h-64 min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={osData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="os" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                  <Bar dataKey="users" fill="#7000ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Active Users" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
