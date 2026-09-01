import React from 'react';
import { Package, Award } from 'lucide-react';

export default function TopProducts({ products = [] }) {
  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
          <Package className="w-4 h-4 mr-2 text-neura-cyan" />
          <span>Top Products</span>
        </h3>
        <span className="text-xs text-neura-cyan font-mono">By Revenue</span>
      </div>

      <div className="space-y-3">
        {products.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                item.rank === 1 ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' :
                item.rank === 2 ? 'bg-slate-300/20 text-slate-200 border border-slate-300/40' :
                'bg-amber-700/20 text-amber-500 border border-amber-700/40'
              }`}>
                #{item.rank}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">{item.name}</h4>
                <p className="text-[10px] text-slate-400">{item.category} • {item.unitsSold} units</p>
              </div>
            </div>
            <span className="text-xs font-bold text-neura-cyan font-mono">{item.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
