import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  ShoppingBag,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Activity,
  ArrowRight,
  Eye,
  Trash2,
  AlertCircle
} from 'lucide-react';
import api from '../utils/api';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import Modal from '../components/Modal';
import OrderTimeline from '../components/OrderTimeline';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export default function Dashboard({ triggerUpdateBadges }) {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Selected order details modal state
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showTimelineModal, setShowTimelineModal] = useState(false);

  // Fetch Dashboard Stats and Recent Orders
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const statsRes = await api.get('/dashboard');
        const ordersRes = await api.get('/orders');
        setStats(statsRes.data);
        setOrders(ordersRes.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Could not connect to Spring Boot server. Make sure the backend is running.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Update order status trigger (e.g. from table action or timeline)
  const handleUpdateStatus = async (orderId, nextStatus) => {
    try {
      const res = await api.put(`/orders/${orderId}/status`, { status: nextStatus });
      // Update local state
      setOrders(prev => prev.map(o => o.id === orderId ? res.data : o));
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(res.data);
      }
      if (triggerUpdateBadges) triggerUpdateBadges();
    } catch (err) {
      console.error('Failed to update order status:', err);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '20px' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          style={{ width: '40px', height: '40px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }}
        />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading dashboard reports...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '16px', padding: '30px' }}>
        <AlertCircle size={40} style={{ color: 'var(--danger)' }} />
        <h4 style={{ color: 'var(--text-main)', fontWeight: 700 }}>Connection Error</h4>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '400px', fontSize: '0.9rem' }}>{error}</p>
        <button onClick={() => window.location.reload()} className="btn-primary" style={{ marginTop: '10px' }}>Retry Connection</button>
      </div>
    );
  }

  const PIE_COLORS = ['#F0D36B', '#E5A93B', '#F4EFE0', '#7C766C', '#C5C0B3'];

  // Status Badge components
  const getStatusBadge = (status) => {
    let bg = 'var(--bg-secondary)';
    let color = 'var(--text-muted)';
    
    if (status === 'Completed') { bg = 'var(--success-bg)'; color = 'var(--success)'; }
    else if (status === 'Processing') { bg = 'var(--info-bg)'; color = 'var(--info)'; }
    else if (status === 'Pending') { bg = 'var(--warning-bg)'; color = 'var(--warning)'; }
    else if (status === 'Cancelled') { bg = 'var(--danger-bg)'; color = 'var(--danger)'; }

    return (
      <span style={{
        backgroundColor: bg,
        color: color,
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '0.78rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {status}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
    >
      {/* 1. Welcoming Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Good Morning, Admin <span className="wave-hand">👋</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginTop: '4px' }}>
            Here's what's happening with your platform today.
          </p>
        </div>

        {/* Date tracker badge */}
        <button
          onClick={() => navigate('/analytics')}
          className="btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.85rem' }}
        >
          View Live Analytics <TrendingUp size={16} />
        </button>
      </div>

      {/* 2. Statistics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        <StatCard
          title="Total Users"
          value={stats?.totalUsers}
          growth={stats?.usersGrowth}
          sparklineData={stats?.usersSparkline}
          icon={Users}
        />
        <StatCard
          title="Total Products"
          value={stats?.totalProducts}
          growth={stats?.productsGrowth}
          sparklineData={stats?.productsSparkline}
          icon={ShoppingBag}
        />
        <StatCard
          title="Total Orders"
          value={stats?.totalOrders}
          growth={stats?.ordersGrowth}
          sparklineData={stats?.ordersSparkline}
          icon={ShoppingCart}
        />
        <StatCard
          title="Revenue"
          value={`$${stats?.totalRevenue}`}
          growth={stats?.revenueGrowth}
          sparklineData={stats?.revenueSparkline}
          icon={DollarSign}
        />
      </div>

      {/* 3. Charts & Analytics Double Panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px',
        alignItems: 'stretch'
      }} className="dashboard-grid-charts">
        
        {/* Left: Revenue Area Chart */}
        <ChartCard
          title="Revenue & Expenditures Overview"
          subtitle="Monthly breakdown of operational income"
          action={
            <select
              style={{ padding: '6px 12px', border: '1px solid var(--border-color)', borderRadius: '18px', outline: 'none', fontSize: '0.8rem', fontWeight: 600, backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)' }}
            >
              <option>Last 8 Months</option>
              <option>Previous Year</option>
            </select>
          }
        >
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={stats?.revenueChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F0D36B" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#F0D36B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C766C" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#7C766C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', borderColor: 'var(--border-color)', fontFamily: 'var(--font-family)' }} />
              <Area type="monotone" dataKey="revenue" stroke="#E5A93B" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($)" />
              <Area type="monotone" dataKey="expenses" stroke="#7C766C" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" name="Expenses ($)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Right: Pie Distribution */}
        <ChartCard
          title="Sales Distribution"
          subtitle="Top sales share by product category"
        >
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={stats?.salesDistribution}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={4}
                dataKey="value"
              >
                {stats?.salesDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
            {stats?.salesDistribution.slice(0, 3).map((item, idx) => (
              <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: PIE_COLORS[idx] }} />
                  <span style={{ color: 'var(--text-muted)' }}>{item.name}</span>
                </div>
                <span style={{ fontWeight: 700 }}>{item.value}%</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* 4. Platform Performance & Activity */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '24px'
      }} className="dashboard-grid-lower">
        
        {/* Left: Platform health progress indicators */}
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
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Performance Overview</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Current indicators rating</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Loop through performance progress scales */}
            {[
              { label: 'Target Sales Accomplished', val: stats?.performance?.sales || 0 },
              { label: 'Customer Satisfaction', val: stats?.performance?.customerSatisfaction || 0 },
              { label: 'Orders Processed Successfully', val: stats?.performance?.ordersCompleted || 0 },
              { label: 'Platform Performance Rating', val: stats?.performance?.platformPerformance || 0 }
            ].map((perf) => (
              <div key={perf.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--text-muted)' }}>{perf.label}</span>
                  <span style={{ color: 'var(--text-main)' }}>{perf.val}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-secondary)', borderRadius: '10px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${perf.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{ height: '100%', backgroundColor: 'var(--accent)', borderRadius: '10px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Orders List */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>Recent Activity Orders</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Latest transactions registered</p>
            </div>
            <button
              onClick={() => navigate('/orders')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Full Orders Log <ArrowRight size={14} />
            </button>
          </div>

          {/* Activity Table */}
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 4).map((order) => (
                  <tr key={order.id}>
                    <td style={{ fontWeight: 700, color: 'var(--text-main)' }}>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.productName}</td>
                    <td style={{ fontWeight: 600 }}>${order.amount.toFixed(2)}</td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => { setSelectedOrder(order); setShowTimelineModal(true); }}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-muted)',
                            padding: '4px',
                            borderRadius: '4px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Timeline Tracking Dialog Modal */}
      <Modal
        isOpen={showTimelineModal}
        onClose={() => { setShowTimelineModal(false); setSelectedOrder(null); }}
        title={`Order Lifecycle Timeline: ${selectedOrder?.id}`}
        size="lg"
      >
        {selectedOrder && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Customer details</p>
                <h4 style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '4px' }}>{selectedOrder.customerName}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Product: {selectedOrder.productName}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status / Amount</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  {getStatusBadge(selectedOrder.status)}
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>${selectedOrder.amount.toFixed(2)}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Payment status: <span style={{ fontWeight: 600 }}>{selectedOrder.paymentStatus}</span></p>
              </div>
            </div>

            {/* Timeline component */}
            <OrderTimeline order={selectedOrder} />

            {/* Status updates shortcuts */}
            {selectedOrder.status !== 'Completed' && selectedOrder.status !== 'Cancelled' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '35px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>Advance order step:</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {selectedOrder.status === 'Pending' && (
                    <button onClick={() => handleUpdateStatus(selectedOrder.id, 'Processing')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                      Start Processing
                    </button>
                  )}
                  {selectedOrder.status === 'Processing' && (
                    <button onClick={() => handleUpdateStatus(selectedOrder.id, 'Shipped')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                      Ship Package
                    </button>
                  )}
                  {selectedOrder.status === 'Shipped' && (
                    <button onClick={() => handleUpdateStatus(selectedOrder.id, 'Completed')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                      Confirm Delivery
                    </button>
                  )}
                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'Cancelled')}
                    className="btn-danger"
                    style={{ padding: '8px 16px', fontSize: '0.8rem', marginLeft: 'auto' }}
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </motion.div>
  );
}
