import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { ShoppingBag, TrendingUp, DollarSign, Award } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SALES_MONTHLY = [
  { month: 'Jan', orders: 120, revenue: 45000 },
  { month: 'Feb', orders: 145, revenue: 58000 },
  { month: 'Mar', orders: 180, revenue: 72000 },
  { month: 'Apr', orders: 210, revenue: 89000 },
  { month: 'May', orders: 250, revenue: 104000 },
  { month: 'Jun', orders: 290, revenue: 125000 },
];

export const SalesDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sales Dashboard"
        subtitle="Track sales velocity, deals volume, order fulfillment, and regional performance."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Monthly Sales Volume" value="$125,000" change={14.2} icon={DollarSign} />
        <StatCard title="Total Completed Orders" value="290" change={9.5} icon={ShoppingBag} />
        <StatCard title="Average Order Value" value="$431.03" change={3.8} icon={TrendingUp} />
        <StatCard title="Top Sales Rep" value="David Vance" change={22.1} icon={Award} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Monthly Order Volume & Sales Trend</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SALES_MONTHLY}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="revenue" fill="#0c93e7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
