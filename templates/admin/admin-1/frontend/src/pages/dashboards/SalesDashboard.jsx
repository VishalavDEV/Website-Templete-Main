import React from 'react';
import Layout from '../../components/layout/Layout';
import KpiCards from '../../components/dashboard/KpiCards';
import RevenueAnalytics from '../../components/dashboard/RevenueAnalytics';
import SalesBreakdown from '../../components/dashboard/SalesBreakdown';
import RecentOrdersTable from '../../components/dashboard/RecentOrdersTable';
import { MOCK_ORDERS, MOCK_REVENUE_DATA, MOCK_SALES_BREAKDOWN } from '../../services/mockData';
import { DollarSign, TrendingUp, Award, ShoppingBag, Target } from 'lucide-react';

export default function SalesDashboard() {
  const salesReps = [
    { name: 'Sarah Connor', deals: 42, revenue: '$148,200', target: '115%', status: 'Exceeded' },
    { name: 'Mike Chen', deals: 38, revenue: '$124,500', target: '102%', status: 'Exceeded' },
    { name: 'Emily Park', deals: 29, revenue: '$98,400', target: '94%', status: 'On Track' },
    { name: 'David Lee', deals: 24, revenue: '$72,100', target: '88%', status: 'On Track' },
  ];

  return (
    <Layout title="Sales Command Dashboard" breadcrumb="Home / Overview / Sales Dashboard">
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-3 min-w-0">
            <div className="p-2.5 sm:p-3 rounded-xl bg-neura-cyan/20 text-neura-cyan shrink-0">
              <DollarSign className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-bold uppercase block truncate">Monthly Sales</span>
              <div className="text-base sm:text-xl font-bold text-white font-mono truncate">$148,254</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-3 min-w-0">
            <div className="p-2.5 sm:p-3 rounded-xl bg-neura-purple/20 text-neura-purple shrink-0">
              <Target className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-bold uppercase block truncate">Quota Attainment</span>
              <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono truncate">108.4%</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-3 min-w-0">
            <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-bold uppercase block truncate">Orders Volume</span>
              <div className="text-base sm:text-xl font-bold text-white font-mono truncate">3,420</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 flex items-center space-x-3 min-w-0">
            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
              <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-bold uppercase block truncate">Refund Rate</span>
              <div className="text-base sm:text-xl font-bold text-white font-mono truncate">0.42%</div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-8 min-w-0">
            <RevenueAnalytics data={MOCK_REVENUE_DATA.monthly} />
          </div>
          <div className="lg:col-span-4 min-w-0">
            <SalesBreakdown data={MOCK_SALES_BREAKDOWN} />
          </div>
        </div>

        {/* Top Sales Representatives Table */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
            <Award className="w-5 h-5 text-amber-400 mr-2" />
            <span>Top Sales Representatives</span>
          </h3>
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-4">Representative</th>
                  <th className="p-4">Deals Closed</th>
                  <th className="p-4">Total Revenue</th>
                  <th className="p-4">Quota Target</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {salesReps.map((rep) => (
                  <tr key={rep.name} className="hover:bg-white/[0.04]">
                    <td className="p-4 font-bold text-white">{rep.name}</td>
                    <td className="p-4 font-mono">{rep.deals}</td>
                    <td className="p-4 font-mono font-bold text-neura-cyan">{rep.revenue}</td>
                    <td className="p-4 font-mono text-emerald-400">{rep.target}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                        {rep.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Table */}
        <RecentOrdersTable orders={MOCK_ORDERS} />
      </div>
    </Layout>
  );
}
