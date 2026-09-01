import React from 'react';
import Layout from '../../components/layout/Layout';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import RevenueAnalytics from '../../components/dashboard/RevenueAnalytics';
import { MOCK_REVENUE_DATA } from '../../services/mockData';

export default function FinanceDashboard() {
  return (
    <Layout title="Executive Finance & Cashflow" breadcrumb="Home / Overview / Finance Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Net Profit (YTD)</span>
            <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono mt-1 truncate">$482,500</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Total Expenses</span>
            <div className="text-base sm:text-xl font-bold text-rose-400 font-mono mt-1 truncate">$124,300</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Cash Reserve</span>
            <div className="text-base sm:text-xl font-bold text-neura-cyan font-mono mt-1 truncate">$1.20M</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Unpaid Invoices</span>
            <div className="text-base sm:text-xl font-bold text-amber-400 font-mono mt-1 truncate">$18,400</div>
          </div>
        </div>

        <RevenueAnalytics data={MOCK_REVENUE_DATA.monthly} />
        <RecentTransactions />
      </div>
    </Layout>
  );
}
