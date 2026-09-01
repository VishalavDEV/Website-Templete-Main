import React from 'react';
import Layout from '../../components/layout/Layout';
import TrafficSources from '../../components/dashboard/TrafficSources';
import { Zap, Target, Eye, MousePointer, Share2 } from 'lucide-react';

export default function MarketingDashboard() {
  const campaigns = [
    { name: 'Cyberpunk Launch v4', channel: 'Google Search', budget: '$15,000', leads: 420, roi: '340%' },
    { name: 'AI Developer SDK Promo', channel: 'GitHub & Twitter', budget: '$8,500', leads: 280, roi: '290%' },
    { name: 'Enterprise SaaS Retargeting', channel: 'LinkedIn Ads', budget: '$12,000', leads: 190, roi: '210%' },
  ];

  return (
    <Layout title="Marketing & Campaign Telemetry" breadcrumb="Home / Overview / Marketing Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Impressions</span>
            <div className="text-base sm:text-xl font-bold text-white font-mono mt-1 truncate">1.84M</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Click-Through Rate</span>
            <div className="text-base sm:text-xl font-bold text-neura-cyan font-mono mt-1 truncate">4.85%</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Ad Spend (Q3)</span>
            <div className="text-base sm:text-xl font-bold text-amber-400 font-mono mt-1 truncate">$35,500</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Marketing ROI</span>
            <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono mt-1 truncate">295%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="min-w-0">
            <TrafficSources />
          </div>
          
          <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
            <h3 className="text-lg font-bold text-white tracking-tight">Active Ad Campaigns</h3>
            <div className="space-y-3">
              {campaigns.map(c => (
                <div key={c.name} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs min-w-0">
                  <div className="min-w-0 pr-2">
                    <h4 className="font-bold text-white truncate">{c.name}</h4>
                    <span className="text-[10px] text-slate-400 truncate block">{c.channel}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-neura-cyan block">{c.roi} ROI</span>
                    <span className="text-[10px] text-slate-400">{c.leads} leads</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
