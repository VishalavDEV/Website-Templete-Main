import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Activity,
  Award,
  ArrowUpRight,
  TrendingDown,
  Calendar,
  AlertCircle
} from 'lucide-react';
import api from '../utils/api';
import ChartCard from '../components/ChartCard';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid
} from 'recharts';

export default function Analytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const res = await api.get('/dashboard');
        setData(res.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch analytics statistics.');
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0' }}>
        <div style={{ width: '30px', height: '30px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '40px 0' }}>
        <AlertCircle size={36} style={{ color: 'var(--danger)' }} />
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{error}</p>
      </div>
    );
  }

  const PIE_COLORS = ['#F0D36B', '#E5A93B', '#F4EFE0', '#7C766C', '#C5C0B3'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Platform Analytics</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real-time statistics and metric tracking configurations.</p>
        </div>
      </div>

      {/* Grid: 2 charts (Large Area and Bar) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="analytics-grid-row">
        
        {/* Revenue Area Chart */}
        <ChartCard
          title="Revenue & Expenditure Analytics"
          subtitle="Sales growth trends relative to operating overhead"
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data?.revenueChart}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C766C" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#7C766C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFEAD8" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '10px' }} />
              <Area type="monotone" dataKey="revenue" stroke="#E5A93B" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($)" />
              <Area type="monotone" dataKey="expenses" stroke="#7C766C" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" name="Expenses ($)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* User Growth Bar Chart */}
        <ChartCard
          title="User Acquisition Curve"
          subtitle="Cumulative growth in registered operator accounts"
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data?.userGrowthChart}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFEAD8" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '10px' }} />
              <Bar dataKey="users" fill="#F0D36B" radius={[4, 4, 0, 0]} name="Users" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Grid: Pie distribution + Key ratings */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="analytics-grid-row">
        
        {/* Category distribution */}
        <ChartCard
          title="Product Shares"
          subtitle="Orders distribution percentage relative to catalog categories"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
            <ResponsiveContainer width="45%" height={220} minWidth={180}>
              <PieChart>
                <Pie
                  data={data?.salesDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data?.salesDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '150px' }}>
              {data?.salesDistribution.map((item, idx) => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: PIE_COLORS[idx] }} />
                    <span style={{ color: 'var(--text-muted)' }}>{item.name}</span>
                  </div>
                  <span style={{ fontWeight: 700 }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>

        {/* Detailed KPI summary metrics */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Strategic Goals Rating</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Progress relative to annual thresholds</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
            {[
              { label: 'Sales Target Volume', score: data?.performance?.sales || 0 },
              { label: 'Customer Retention Index', score: data?.performance?.customerSatisfaction || 0 },
              { label: 'Operations Success Rate', score: data?.performance?.ordersCompleted || 0 },
              { label: 'Platform Stability Rating', score: data?.performance?.platformPerformance || 0 }
            ].map((perf) => (
              <div key={perf.label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--text-muted)' }}>{perf.label}</span>
                  <span style={{ color: 'var(--text-main)' }}>{perf.score}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-secondary)', borderRadius: '10px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${perf.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ height: '100%', backgroundColor: 'var(--accent)', borderRadius: '10px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
