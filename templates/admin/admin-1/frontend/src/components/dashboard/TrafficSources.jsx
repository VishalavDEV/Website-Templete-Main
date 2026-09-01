import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function TrafficSources({ sources = [] }) {
  const defaultData = [
    { name: 'Direct', percentage: 45, color: '#00f0ff' },
    { name: 'Organic Search', percentage: 28, color: '#7000ff' },
    { name: 'Social Media', percentage: 17, color: '#10b981' },
    { name: 'Referral', percentage: 10, color: '#f59e0b' },
  ];

  const chartData = sources.length ? sources : defaultData;

  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight">Traffic Sources</h3>
        <span className="text-xs text-slate-400 font-mono">24.5K Visitors</span>
      </div>

      <div className="h-44 w-full relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={4}
              dataKey="percentage"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
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
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-lg font-extrabold text-white font-mono">24.5K</span>
          <span className="text-[9px] text-slate-400 font-bold uppercase">Total Sessions</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs border-t border-white/10 pt-3">
        {chartData.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-slate-300 text-[11px] truncate">{item.name}</span>
            </div>
            <span className="font-bold text-white font-mono">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
