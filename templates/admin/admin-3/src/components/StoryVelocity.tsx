import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Award, AlertTriangle, Calendar } from 'lucide-react';

export const StoryVelocity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'READS' | 'COMPLETION' | 'SAVES' | 'SHARES' | 'RETURNING'>('READS');
  const [dateRange, setDateRange] = useState<'7 DAYS' | '30 DAYS' | '90 DAYS' | 'YEAR'>('30 DAYS');

  // Generate mock datasets based on active tab and date range
  const getData = () => {
    const base = activeTab === 'READS' ? 1200 : activeTab === 'COMPLETION' ? 75 : activeTab === 'SAVES' ? 300 : activeTab === 'SHARES' ? 150 : 50;
    const multiplier = dateRange === '7 DAYS' ? 1 : dateRange === '30 DAYS' ? 4 : dateRange === '90 DAYS' ? 12 : 52;

    return [
      { date: 'Mon', value: Math.round(base * (0.8 + Math.random() * 0.4)) },
      { date: 'Tue', value: Math.round(base * (0.9 + Math.random() * 0.5)) },
      { date: 'Wed', value: Math.round(base * (1.1 + Math.random() * 0.4)) },
      { date: 'Thu', value: Math.round(base * (1.0 + Math.random() * 0.6)) },
      { date: 'Fri', value: Math.round(base * (1.3 + Math.random() * 0.5)) },
      { date: 'Sat', value: Math.round(base * (1.4 + Math.random() * 0.7)) },
      { date: 'Sun', value: Math.round(base * (1.2 + Math.random() * 0.5)) }
    ];
  };

  const data = getData();

  const tabs: Array<'READS' | 'COMPLETION' | 'SAVES' | 'SHARES' | 'RETURNING'> = ['READS', 'COMPLETION', 'SAVES', 'SHARES', 'RETURNING'];
  const ranges: Array<'7 DAYS' | '30 DAYS' | '90 DAYS' | 'YEAR'> = ['7 DAYS', '30 DAYS', '90 DAYS', 'YEAR'];

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Data Observatory</span>
          <h3 className="font-serif font-bold text-[#183B56] text-xl">Story Velocity</h3>
        </div>

        {/* Date Ranges */}
        <div className="flex items-center gap-1 bg-[#F5F9FB] p-1 rounded-xl border border-[#DCE7EC]">
          {ranges.map(range => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`
                px-3 py-1.5 text-xs font-semibold rounded-lg transition-all
                ${dateRange === range
                  ? 'bg-white text-[#183B56] shadow-2xs border border-[#DCE7EC]'
                  : 'text-[#718096] hover:text-[#203040]'
                }
              `}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#DCE7EC] pb-3">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer
              ${activeTab === tab
                ? 'bg-[#183B56] text-white shadow-sm'
                : 'bg-[#F5F9FB] text-[#718096] hover:bg-[#CDEFF4]/30 hover:text-[#183B56] border border-[#DCE7EC]'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart Canvas */}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6FAFD4" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6FAFD4" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#DCE7EC" vertical={false} />
            <XAxis dataKey="date" stroke="#718096" fontSize={11} tickLine={false} />
            <YAxis stroke="#718096" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#FFFFFF', borderColor: '#DCE7EC', borderRadius: '12px', color: '#203040', fontSize: '12px' }}
            />
            <Area type="monotone" dataKey="value" stroke="#183B56" strokeWidth={2.5} fillOpacity={1} fill="url(#colorVelocity)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Highlights & Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#DCE7EC]">
        <div className="flex items-center gap-3 p-3 bg-[#F5F9FB] rounded-xl border border-[#DCE7EC]">
          <div className="p-2.5 rounded-lg bg-[#5FAF8A]/10 text-[#5FAF8A]">
            <Award size={18} />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#718096] uppercase">Peak Moment</p>
            <p className="text-sm font-bold text-[#203040]">Saturday (1.4x baseline)</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-[#F5F9FB] rounded-xl border border-[#DCE7EC]">
          <div className="p-2.5 rounded-lg bg-[#D6A85D]/10 text-[#D6A85D]">
            <AlertTriangle size={18} />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#718096] uppercase">Lowest Activity</p>
            <p className="text-sm font-bold text-[#203040]">Monday morning trough</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-[#F5F9FB] rounded-xl border border-[#DCE7EC]">
          <div className="p-2.5 rounded-lg bg-[#6FAFD4]/20 text-[#183B56]">
            <TrendingUp size={18} />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#718096] uppercase">Period Growth</p>
            <p className="text-sm font-bold text-[#5FAF8A]">+18.4% vs last period</p>
          </div>
        </div>
      </div>

    </div>
  );
};
