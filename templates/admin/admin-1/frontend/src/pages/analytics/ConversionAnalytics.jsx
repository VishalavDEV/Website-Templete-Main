import React from 'react';
import Layout from '../../components/layout/Layout';
import { Zap, TrendingUp, DollarSign, CheckCircle2 } from 'lucide-react';

export default function ConversionAnalytics() {
  const funnel = [
    { stage: '1. Total Website Visitors', count: 142850, rate: '100%', color: 'from-blue-500 to-neura-cyan' },
    { stage: '2. Product Viewers', count: 107137, rate: '75.0%', color: 'from-neura-cyan to-indigo-500' },
    { stage: '3. Cart / Pricing Select', count: 69639, rate: '48.7%', color: 'from-indigo-500 to-neura-purple' },
    { stage: '4. Initiated Checkout', count: 41783, rate: '29.2%', color: 'from-neura-purple to-pink-500' },
    { stage: '5. Successful Payments', count: 35515, rate: '24.8%', color: 'from-emerald-400 to-teal-500' },
  ];

  return (
    <Layout title="Conversion Funnel Analytics" breadcrumb="Home / Analytics / Conversion Analytics">
      <div className="space-y-6">
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
                <Zap className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Sales & Conversion Funnel (24.8% Overall Rate)</span>
              </h3>
              <p className="text-xs text-slate-400">Stage-by-stage acquisition and payment conversion performance.</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
              HIGH EFFICIENCY
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {funnel.map((f) => (
              <div key={f.stage} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white">{f.stage}</span>
                  <span className="font-mono text-neura-cyan font-bold">{f.count.toLocaleString()} ({f.rate})</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${f.color} transition-all duration-1000`}
                    style={{ width: f.rate }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
