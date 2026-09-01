import React from 'react';
import Layout from '../../components/layout/Layout';
import RevenueAnalytics from '../../components/dashboard/RevenueAnalytics';
import TrafficSources from '../../components/dashboard/TrafficSources';
import SalesBreakdown from '../../components/dashboard/SalesBreakdown';
import { MOCK_REVENUE_DATA } from '../../services/mockData';
import { Activity, Globe, Users, Zap } from 'lucide-react';

export default function AnalyticsDashboard() {
  return (
    <Layout title="Telemetry & Web Analytics Dashboard" breadcrumb="Home / Overview / Analytics Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Total Visitors</span>
            <div className="text-base sm:text-xl font-bold text-white font-mono mt-1 truncate">142,850</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Bounce Rate</span>
            <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono mt-1 truncate">24.2%</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Avg Session</span>
            <div className="text-base sm:text-xl font-bold text-neura-cyan font-mono mt-1 truncate">4m 18s</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Active Stream</span>
            <div className="text-base sm:text-xl font-bold text-neura-purple font-mono mt-1 truncate">1,240 Online</div>
          </div>
        </div>

        <RevenueAnalytics data={MOCK_REVENUE_DATA.monthly} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="min-w-0">
            <TrafficSources />
          </div>
          <div className="min-w-0">
            <SalesBreakdown />
          </div>
        </div>
      </div>
    </Layout>
  );
}
