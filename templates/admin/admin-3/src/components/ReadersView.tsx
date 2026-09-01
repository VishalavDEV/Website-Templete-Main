import React from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

export const ReadersView: React.FC = () => {
  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Audience Observatory</span>
          <h3 className="font-serif font-bold text-[#183B56] text-xl">Reader Momentum & Demographics</h3>
        </div>
        <span className="text-xs font-mono bg-[#5FAF8A]/10 text-[#5FAF8A] px-3 py-1 rounded-xl border border-[#5FAF8A]/30">
          +9.4% Growth This Month
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-[#183B56]">
            <Users size={18} />
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#DCE7EC]">Active</span>
          </div>
          <p className="text-2xl font-serif font-bold text-[#183B56]">42,850</p>
          <p className="text-xs text-[#718096]">Monthly Active Subscribers</p>
        </div>

        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-[#5FAF8A]">
            <TrendingUp size={18} />
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#DCE7EC]">Retention</span>
          </div>
          <p className="text-2xl font-serif font-bold text-[#183B56]">62.4%</p>
          <p className="text-xs text-[#718096]">Returning Reader Rate</p>
        </div>

        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-[#D6A85D]">
            <Award size={18} />
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#DCE7EC]">Engagement</span>
          </div>
          <p className="text-2xl font-serif font-bold text-[#183B56]">8 min</p>
          <p className="text-xs text-[#718096]">Avg Session Duration</p>
        </div>

        <div className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-[#6FAFD4]">
            <Globe size={18} />
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#DCE7EC]">Global</span>
          </div>
          <p className="text-2xl font-serif font-bold text-[#183B56]">84 Countries</p>
          <p className="text-xs text-[#718096]">Academic & Institutional Reach</p>
        </div>
      </div>
    </div>
  );
};
