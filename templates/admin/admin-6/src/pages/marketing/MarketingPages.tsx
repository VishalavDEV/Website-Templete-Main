import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { INITIAL_CAMPAIGNS, INITIAL_COUPONS } from '../../data/mockData';
import { Campaign, Coupon } from '../../types';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';
import { Megaphone, Play, CheckCircle, Pause, Mail, Percent, Tag, Users, Plus } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const CAMPAIGN_ROI_DATA = [
  { name: 'Hardware Expo', budget: 45000, spent: 28400, leads: 145 },
  { name: 'CyberShield Launch', budget: 12000, spent: 11800, leads: 320 },
  { name: 'Quantum Router Promo', budget: 25000, spent: 18000, leads: 210 },
];

const EMAIL_PERFORMANCE_DATA = [
  { week: 'Week 1', openRate: 32.4, ctr: 5.8 },
  { week: 'Week 2', openRate: 34.8, ctr: 6.4 },
  { week: 'Week 3', openRate: 38.2, ctr: 7.1 },
  { week: 'Week 4', openRate: 41.5, ctr: 8.0 },
];

const PROMO_REVENUE_DATA = [
  { promo: 'Summer Hardware Sale', revenue: 24500 },
  { promo: 'CyberShield Launch', revenue: 18000 },
];

const SEGMENT_PIE_DATA = [
  { name: 'VIP Enterprise', value: 142, color: '#0c93e7' },
  { name: 'SaaS High-Growth', value: 320, color: '#6366f1' },
  { name: 'Re-engagement', value: 85, color: '#f59e0b' },
];

export const CampaignsPage: React.FC = () => {
  const { showToast } = useToast();
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);

  const handleStatusTransition = (id: string, newStatus: Campaign['status']) => {
    setCampaigns((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
    showToast('Campaign State Updated', `Campaign status changed to ${newStatus}`);
  };

  const columns: Column<Campaign>[] = [
    { key: 'name', header: 'Campaign Name', sortable: true },
    { key: 'type', header: 'Channel Type', sortable: true },
    {
      key: 'budget',
      header: 'Budget',
      sortable: true,
      render: (c) => <span className="font-bold">${c.budget.toLocaleString()}</span>,
    },
    {
      key: 'spent',
      header: 'Spent',
      sortable: true,
      render: (c) => <span className="text-slate-600 dark:text-slate-400">${c.spent.toLocaleString()}</span>,
    },
    { key: 'leadsGenerated', header: 'Leads Generated', sortable: true },
    {
      key: 'roi',
      header: 'ROI Multiplier',
      sortable: true,
      render: (c) => <span className="font-extrabold text-emerald-600">{c.roi}x</span>,
    },
    {
      key: 'status',
      header: 'Workflow Stage',
      sortable: true,
      render: (c) => (
        <Badge
          variant={
            c.status === 'Active'
              ? 'success'
              : c.status === 'Completed'
              ? 'indigo'
              : c.status === 'Scheduled'
              ? 'info'
              : 'neutral'
          }
        >
          {c.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Campaign Workflow',
      render: (c) => (
        <div className="flex items-center gap-2">
          {c.status === 'Draft' && (
            <button
              onClick={() => handleStatusTransition(c.id, 'Scheduled')}
              className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg flex items-center gap-1"
            >
              <Play className="w-3 h-3" /> Schedule
            </button>
          )}
          {c.status === 'Scheduled' && (
            <button
              onClick={() => handleStatusTransition(c.id, 'Active')}
              className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-lg flex items-center gap-1"
            >
              <Play className="w-3 h-3" /> Launch Active
            </button>
          )}
          {c.status === 'Active' && (
            <button
              onClick={() => handleStatusTransition(c.id, 'Completed')}
              className="px-2.5 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-lg flex items-center gap-1"
            >
              <CheckCircle className="w-3 h-3" /> Mark Completed
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Marketing Campaigns & ROI" subtitle="Track omni-channel campaigns, lead generation, ROI, and budget spent." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Campaigns" value="1" change={0} icon={Megaphone} />
        <StatCard title="Total Leads Generated" value="465" change={24.8} icon={Users} />
        <StatCard title="Average Campaign ROI" value="4.3x" change={14.2} icon={Percent} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Campaign Budget vs Spent vs Leads Generated</h3>
        <p className="text-xs text-slate-500 mb-4">Financial comparison of campaign budget allocation ($) vs actual spend ($).</p>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CAMPAIGN_ROI_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="budget" fill="#0c93e7" name="Allocated Budget ($)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="spent" fill="#6366f1" name="Actual Spent ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={campaigns} keyExtractor={(c) => c.id} searchPlaceholder="Search campaigns..." />
    </div>
  );
};

export const EmailMarketingPage: React.FC = () => {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [segment, setSegment] = useState('All Subscribers');

  const handleCreateBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim()) return;
    showToast('Broadcast Sent', `Dispatched "${subject}" to ${segment} (48,500 subscribers).`);
    setIsModalOpen(false);
    setSubject('');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Email Marketing & Newsletters"
        subtitle="Automated email sequences, open rates, click-through rates, and subscriber engagement."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Broadcast
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Subscribers" value="48,500" change={12.4} icon={Mail} />
        <StatCard title="Average Open Rate" value="34.8%" change={3.2} icon={Percent} />
        <StatCard title="Click-Through Rate (CTR)" value="6.4%" change={1.8} icon={Users} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Email Open Rate & CTR Growth</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={EMAIL_PERFORMANCE_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="week" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="openRate" stroke="#10b981" strokeWidth={3} name="Open Rate (%)" />
              <Line type="monotone" dataKey="ctr" stroke="#0c93e7" strokeWidth={2} name="CTR (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Email Broadcast">
        <form onSubmit={handleCreateBroadcast} className="space-y-4">
          <FormInput label="Email Subject Line" required value={subject} onChange={(e) => setSubject(e.target.value)} />
          <FormSelect
            label="Target Audience Segment"
            options={[
              { label: 'All Subscribers (48,500)', value: 'All Subscribers' },
              { label: 'VIP Enterprise (142)', value: 'VIP Enterprise' },
              { label: 'SaaS High-Growth (320)', value: 'SaaS High-Growth' },
            ]}
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
          />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Send Broadcast</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const PromotionsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Promotions & Seasonal Offers" subtitle="Seasonal promotional banners, flash sale schedules, and landing page deals." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Promotions" value="2" change={0} icon={Tag} />
        <StatCard title="Promo Revenue Generated" value="$42,500" change={18.2} icon={Percent} />
        <StatCard title="Claimed Discount Rate" value="14.2%" change={2.1} icon={Users} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Promotional Campaign Revenue</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PROMO_REVENUE_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="promo" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="revenue" fill="#6366f1" name="Revenue ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const CouponsPage: React.FC = () => {
  const { showToast } = useToast();
  const [coupons, setCoupons] = useState<Coupon[]>(() => storageService.get<Coupon[]>('app_coupons', INITIAL_COUPONS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [code, setCode] = useState('');
  const [discountValue, setDiscountValue] = useState(25);

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    const newCoupon: Coupon = {
      id: `cpn_${Date.now()}`,
      code: code.toUpperCase(),
      discountType: 'Percentage',
      discountValue,
      usageCount: 0,
      limit: 100,
      status: 'Active',
      expiryDate: new Date(Date.now() + 90 * 86400000).toISOString().split('T')[0],
    };
    const updated = [newCoupon, ...coupons];
    setCoupons(updated);
    storageService.set('app_coupons', updated);
    showToast('Coupon Created', `Created promo coupon ${newCoupon.code} (${discountValue}% Off)`);
    setIsModalOpen(false);
    setCode('');
  };

  const columns: Column<Coupon>[] = [
    { key: 'code', header: 'Coupon Code', sortable: true, render: (c) => <span className="font-extrabold text-brand-600">{c.code}</span> },
    { key: 'discountType', header: 'Discount Type' },
    { key: 'discountValue', header: 'Value', render: (c) => <span className="font-bold">{c.discountType === 'Percentage' ? `${c.discountValue}%` : `$${c.discountValue}`}</span> },
    { key: 'usageCount', header: 'Redeemed Count', sortable: true, render: (c) => <span>{c.usageCount} / {c.limit}</span> },
    { key: 'expiryDate', header: 'Expiration Date', sortable: true },
    { key: 'status', header: 'Status', render: (c) => <Badge variant="success">{c.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Coupons & Discount Codes"
        subtitle="Promo codes, percentage discounts, fixed order credits, usage limits, and expiration tracking."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Coupon
          </button>
        }
      />

      <DataTable columns={columns} data={coupons} keyExtractor={(c) => c.id} searchPlaceholder="Search coupon codes..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Promo Coupon">
        <form onSubmit={handleCreateCoupon} className="space-y-4">
          <FormInput label="Coupon Code" required value={code} onChange={(e) => setCode(e.target.value)} />
          <FormInput label="Discount Percentage (%)" type="number" required value={discountValue.toString()} onChange={(e) => setDiscountValue(Number(e.target.value))} />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Coupon</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const SegmentsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Customer Audience Segments" subtitle="RFM segmentation, high-value VIP cohorts, and re-engagement target groups." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="VIP Enterprise Segment" value="142 accounts" change={8.4} icon={Users} />
        <StatCard title="SaaS High-Growth Segment" value="320 accounts" change={14.1} icon={Users} />
        <StatCard title="Re-engagement Cohort" value="85 accounts" change={-5.0} trend="up" icon={Users} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Audience Segment Distribution</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={SEGMENT_PIE_DATA} innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
                {SEGMENT_PIE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
