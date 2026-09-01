import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { TrendingUp, Users, ShoppingBag, DollarSign, Download, PieChart as PieChartIcon, BarChart3, Filter } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import { useToast } from '../../context/ToastContext';

const SALES_TREND_DATA = [
  { label: 'Week 1', sales: 24000, customers: 120, conversion: 3.8 },
  { label: 'Week 2', sales: 38000, customers: 190, conversion: 4.2 },
  { label: 'Week 3', sales: 45000, customers: 240, conversion: 4.6 },
  { label: 'Week 4', sales: 58000, customers: 310, conversion: 5.1 },
];

const CUSTOMER_LTV_DATA = [
  { month: 'Jan', ltv: 1200, cac: 350 },
  { month: 'Feb', ltv: 1450, cac: 340 },
  { month: 'Mar', ltv: 1700, cac: 320 },
  { month: 'Apr', ltv: 1950, cac: 310 },
  { month: 'May', ltv: 2300, cac: 290 },
  { month: 'Jun', ltv: 2800, cac: 280 },
];

const SKU_MARGIN_DATA = [
  { sku: 'Server Rack X9', revenue: 709858, cost: 397600, profit: 312258 },
  { sku: 'CyberShield Pro', revenue: 1156110, cost: 133500, profit: 1022610 },
  { sku: 'Quantum Router', revenue: 278996, cost: 139500, profit: 139496 },
  { sku: 'Executive Desk', revenue: 63707, cost: 32300, profit: 31407 },
];

interface ProductMarginRecord {
  skuCode: string;
  name: string;
  category: string;
  price: number;
  cost: number;
  marginPercent: string;
  totalProfit: string;
}

const MARGIN_LEADERBOARD: ProductMarginRecord[] = [
  { skuCode: 'PRD-SFT-002', name: 'CyberShield Pro Security Suite', category: 'Software', price: 1299.00, cost: 150.00, marginPercent: '88.5%', totalProfit: '$1,022,610' },
  { skuCode: 'PRD-NET-003', name: 'Quantum Router 10Gbps Enterprise', category: 'Networking', price: 899.99, cost: 450.00, marginPercent: '50.0%', totalProfit: '$139,496' },
  { skuCode: 'PRD-ACC-004', name: 'Ergonomic Executive Desk Console', category: 'Office', price: 749.50, cost: 380.00, marginPercent: '49.3%', totalProfit: '$31,407' },
  { skuCode: 'PRD-ENT-001', name: 'Enterprise Cloud Server Rack X9', category: 'Hardware', price: 4999.00, cost: 2800.00, marginPercent: '44.0%', totalProfit: '$312,258' },
];

export const SalesAnalyticsPage: React.FC = () => {
  const { showToast } = useToast();

  const handleExportReport = () => {
    const csvContent = "data:text/csv;charset=utf-8,Week,Sales,Customers,Conversion\nWeek 1,24000,120,3.8\nWeek 2,38000,190,4.2\nWeek 3,45000,240,4.6\nWeek 4,58000,310,5.1";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sales_analytics_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Export Complete', 'Exported Sales Analytics CSV Report.');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Sales Analytics & Conversion"
        subtitle="Deep dive into regional sales velocity, customer cohort retention, and conversion funnels."
        actions={
          <button
            onClick={handleExportReport}
            className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Export Report
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard title="Gross Sales Revenue" value="$165,000" change={19.5} icon={DollarSign} />
        <StatCard title="Average Order Value" value="$425.00" change={4.2} icon={ShoppingBag} />
        <StatCard title="Conversion Rate" value="4.8%" change={1.2} icon={TrendingUp} />
        <StatCard title="Repeat Purchase Rate" value="68.4%" change={6.8} icon={Users} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Weekly Sales Velocity</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={SALES_TREND_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="label" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="sales" stroke="#0c93e7" fill="#0c93e720" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const CustomerAnalyticsPage: React.FC = () => {
  const { showToast } = useToast();

  const handleExportCohorts = () => {
    const csvContent = "data:text/csv;charset=utf-8,Month,LTV,CAC\nJan,1200,350\nFeb,1450,340\nMar,1700,320\nApr,1950,310\nMay,2300,290\nJun,2800,280";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "customer_ltv_cohorts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Export Complete', 'Exported Customer Cohort LTV vs CAC Report.');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Customer Analytics & Cohorts"
        subtitle="Customer Lifetime Value (LTV), Customer Acquisition Cost (CAC), and retention ratios."
        actions={
          <button onClick={handleExportCohorts} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Cohorts
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Avg Customer LTV" value="$2,800" change={22.4} icon={DollarSign} />
        <StatCard title="Customer Acquisition (CAC)" value="$280" change={-12.0} trend="up" icon={Users} />
        <StatCard title="LTV : CAC Ratio" value="10.0x" change={18.2} icon={TrendingUp} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">LTV vs CAC Growth Trend</h3>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CUSTOMER_LTV_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="ltv" stroke="#10b981" strokeWidth={3} name="LTV ($)" />
              <Line type="monotone" dataKey="cac" stroke="#f43f5e" strokeWidth={2} name="CAC ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const ProductAnalyticsPage: React.FC = () => {
  const columns: Column<ProductMarginRecord>[] = [
    { key: 'name', header: 'Product Item', sortable: true },
    { key: 'skuCode', header: 'SKU Code' },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'price', header: 'Price ($)', render: (p) => `$${p.price.toFixed(2)}` },
    { key: 'cost', header: 'Cost ($)', render: (p) => `$${p.cost.toFixed(2)}` },
    { key: 'marginPercent', header: 'Profit Margin %', sortable: true, render: (p) => <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{p.marginPercent}</span> },
    { key: 'totalProfit', header: 'Total Gross Profit', sortable: true, render: (p) => <span className="font-extrabold text-slate-900 dark:text-white">{p.totalProfit}</span> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Product Analytics & Margins" subtitle="Product sell-through rates, profit margin per SKU, and return velocity." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Avg Gross Margin" value="64.2%" change={4.1} icon={PieChartIcon} />
        <StatCard title="Top Grossing SKU" value="CyberShield Pro" change={28.5} icon={ShoppingBag} />
        <StatCard title="Return Rate" value="0.8%" change={-15.0} trend="up" icon={BarChart3} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">SKU Revenue vs Profit Margin Distribution</h3>
        <p className="text-xs text-slate-500 mb-4">Comparison of gross revenue ($) vs net profit margin ($) per catalog product SKU.</p>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SKU_MARGIN_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="sku" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="revenue" fill="#0c93e7" name="Gross Revenue ($)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" fill="#10b981" name="Net Profit ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={MARGIN_LEADERBOARD} keyExtractor={(p) => p.skuCode} searchPlaceholder="Search product margin metrics..." />
    </div>
  );
};

export const ReportsPage: React.FC = () => {
  const { showToast } = useToast();
  return (
    <div className="space-y-6">
      <PageHeader title="Custom BI Reports Generator" subtitle="Build custom business intelligence reports with automated export scheduling." />
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Scheduled Reports Registry</h3>
        <div className="flex gap-3">
          <button onClick={() => showToast('Report Generated', 'Weekly Executive BI Report ready for download.')} className="px-4 py-2 bg-brand-600 text-white text-xs font-semibold rounded-xl">
            Generate Executive Report
          </button>
        </div>
      </div>
    </div>
  );
};
