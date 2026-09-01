import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function SalesBreakdown({ data = [] }) {
  const defaultData = [
    { name: 'Electronics', value: 4820, color: '#00f0ff' },
    { name: 'Software', value: 3460, color: '#7000ff' },
    { name: 'Services', value: 2150, color: '#10b981' },
    { name: 'Licenses', value: 1996, color: '#f59e0b' },
  ];

  const chartData = data.length ? data : defaultData;
  const totalSales = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 flex flex-col justify-between space-y-4 min-w-0 overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Sales Breakdown</h3>
        <span className="text-xs text-neura-cyan font-mono font-medium">Q3 Overview</span>
      </div>

      {/* Donut Chart with Center Total Label */}
      <div className="relative w-full h-48 sm:h-52 flex items-center justify-center min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={4}
              dataKey="value"
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
          <span className="text-lg sm:text-xl font-extrabold text-white font-mono">${totalSales.toLocaleString()}</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">Total Sales</span>
        </div>
      </div>

      {/* Breakdown Legend */}
      <div className="space-y-2.5 pt-2 border-t border-white/10">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 min-w-0 pr-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-slate-300 font-medium truncate">{item.name}</span>
            </div>
            <span className="font-bold text-white font-mono shrink-0">${item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
