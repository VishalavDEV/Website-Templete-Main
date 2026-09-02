import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  DollarSign,
  Users,
  Percent,
  ShoppingCart,
  Globe,
  Calendar,
  Filter,
  Download
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import ChartCard from '../components/common/ChartCard';
import StatCard from '../components/common/StatCard';
import Breadcrumb from '../components/common/Breadcrumb';

import {
  revenueOverviewData,
  userGrowthData,
  weeklyActivityData,
  geographicData,
  trafficSourceData
} from '../mockData/analytics';
import { downloadMockCSV } from '../mockData/reports';
import { useApp } from '../context/AppContext';

export default function AnalyticsPage() {
  const { addToast } = useApp();
  const [timeFilter, setTimeFilter] = useState('This Month');

  const handleExportAnalytics = () => {
    const csvRows = [
      ["Metric", "Value", "Trend"],
      ["Total Revenue", "$84,320", "+8.2%"],
      ["Total Active Users", "24,892", "+12.5%"],
      ["Conversion Rate", "3.42%", "+0.4%"],
      ["Average Order Value", "$142.80", "+5.2%"]
    ];
    downloadMockCSV("analytics-performance-metrics.csv", csvRows);
    addToast("Analytics metrics exported as CSV", "success");
  };

  return (
    <div className="space-y-8">
      <Breadcrumb />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Analytics & Business Intelligence
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time telemetry, geographic breakdown, and conversion performance metrics
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Time Filter Pills */}
          <div className="flex items-center p-1 bg-slate-200/60 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300">
            {['Today', 'This Week', 'This Month', 'This Year'].map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  timeFilter === filter
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm font-extrabold'
                    : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportAnalytics}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-brand-500/20 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Revenue Performance"
          value="$84,320"
          change="+8.2%"
          isPositive={true}
          icon={DollarSign}
          color="brand"
        />
        <StatCard
          title="Platform Active Users"
          value="24,892"
          change="+12.5%"
          isPositive={true}
          icon={Users}
          color="purple"
        />
        <StatCard
          title="Conversion Rate"
          value="3.42%"
          change="+0.4%"
          isPositive={true}
          icon={Percent}
          color="emerald"
        />
        <StatCard
          title="Average Order Value"
          value="$142.80"
          change="+5.2%"
          isPositive={true}
          icon={ShoppingCart}
          color="brand"
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Revenue Growth & Year-over-Year Comparison"
          subtitle={`Showing performance telemetry for ${timeFilter}`}
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueOverviewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Legend />
              <Line type="monotone" dataKey="currentYear" name="Current Period" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="previousYear" name="Previous Period" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Traffic Sources */}
        <ChartCard
          title="Traffic Sources"
          subtitle="User acquisition channels"
        >
          <div className="space-y-4 pt-2">
            {trafficSourceData.map((src) => (
              <div key={src.source} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{src.source}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{src.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${src.percentage}%`, backgroundColor: src.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* GEOGRAPHIC PERFORMANCE & USER DEMOGRAPHICS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Geographic Performance"
          subtitle="User distribution by country"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs text-slate-400 font-bold uppercase">
                  <th className="py-2.5 px-3">Country</th>
                  <th className="py-2.5 px-3">Active Users</th>
                  <th className="py-2.5 px-3 text-right">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {geographicData.map((geo) => (
                  <tr key={geo.country} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <span className="text-lg">{geo.flag}</span>
                      <span>{geo.country}</span>
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-600 dark:text-slate-400">{geo.users}</td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white text-right">{geo.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>

        {/* User Growth Telemetry Chart */}
        <ChartCard
          title="User Registration vs Retention"
          subtitle="Monthly breakdown of new signups"
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={userGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="newUsers" name="New Signups" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
