import React from 'react';
import Layout from '../../components/layout/Layout';
import { ArrowDown, Eye, MousePointer, Activity, Clock } from 'lucide-react';

export default function BehaviorAnalytics() {
  const userJourney = [
    { step: 1, page: 'Landing Page (/)', visitors: '142,850', dropoff: '25%', time: '45s' },
    { step: 2, page: 'Product Features (/products)', visitors: '107,137', dropoff: '35%', time: '1m 20s' },
    { step: 3, page: 'Pricing & Plans (/pricing)', visitors: '69,639', dropoff: '40%', time: '2m 10s' },
    { step: 4, page: 'Checkout Gateway (/checkout)', visitors: '41,783', dropoff: '15%', time: '1m 05s' },
    { step: 5, page: 'Completed Purchase (/success)', visitors: '35,515', dropoff: '0%', time: 'Completed' },
  ];

  return (
    <Layout title="User Behavior & Journey Flow" breadcrumb="Home / Analytics / User Behavior">
      <div className="space-y-6">
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
              <Activity className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Visual User Journey & Dropoff Flow</span>
            </h3>
            <p className="text-xs text-slate-400">Track user navigation steps through conversion pages.</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto py-4">
            {userJourney.map((j, i) => (
              <React.Fragment key={j.step}>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-neura-cyan/40 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-9 h-9 rounded-xl bg-neura-cyan/20 text-neura-cyan font-bold flex items-center justify-center font-mono text-sm border border-neura-cyan/40">
                      #{j.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{j.page}</h4>
                      <span className="text-[11px] text-slate-400">Avg Time on Page: {j.time}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono font-bold text-white text-sm block">{j.visitors} users</span>
                    {j.dropoff !== '0%' && (
                      <span className="text-[10px] text-rose-400 font-mono">Dropoff: {j.dropoff}</span>
                    )}
                  </div>
                </div>

                {i < userJourney.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="p-1 rounded-full bg-white/10 text-neura-cyan">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
