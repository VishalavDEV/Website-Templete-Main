import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, DollarSign, ShoppingCart, UserCheck, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { AnalyticsService, OrderService, Order } from '../../services/apiServices';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { ChartSkeleton, StatCardSkeleton } from '../../components/common/LoadingSkeleton';

const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('monthly');
  const [summary, setSummary] = useState<any>(null);
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [distributionData, setDistributionData] = useState<any[]>([]);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, [timeframe]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const summaryRes = await AnalyticsService.getSummary();
      setSummary(summaryRes);

      const revRes = await AnalyticsService.getRevenueChart(timeframe);
      setRevenueData(revRes);

      const distRes = await AnalyticsService.getCategoryDistribution();
      setDistributionData(distRes);

      const ordersRes = await OrderService.getAll({ page: 0, size: 5, sortBy: 'orderDate', direction: 'desc' });
      setRecentOrders(ordersRes.content || []);
    } catch (err) {
      console.error('Failed to load dashboard metrics', err);
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ['#6366F1', '#8B5CF6', '#06B6D4', '#22C55E', '#F59E0B'];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 font-medium">Real-time statistics, revenue metrics, and orders management</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading || !summary ? (
          Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
        ) : (
          <>
            <StatCard
              title="Total Revenue"
              value={`$${summary.revenue.value.toLocaleString()}`}
              change={summary.revenue.change}
              isIncrease={summary.revenue.isIncrease}
              comparison={summary.revenue.comparison}
              icon={DollarSign}
              colorClass="success"
            />
            <StatCard
              title="Total Orders"
              value={summary.orders.value}
              change={summary.orders.change}
              isIncrease={summary.orders.isIncrease}
              comparison={summary.orders.comparison}
              icon={ShoppingCart}
              colorClass="primary"
            />
            <StatCard
              title="Active Customers"
              value={summary.customers.value}
              change={summary.customers.change}
              isIncrease={summary.customers.isIncrease}
              comparison={summary.customers.comparison}
              icon={UserCheck}
              colorClass="accent"
            />
            <StatCard
              title="Total Users"
              value={summary.users.value}
              change={summary.users.change}
              isIncrease={summary.users.isIncrease}
              comparison={summary.users.comparison}
              icon={Users}
              colorClass="secondary"
            />
          </>
        )}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex flex-col justify-between min-h-[380px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-slate-800 text-base">Revenue Statistics</h3>
              <p className="text-xs text-slate-400 font-semibold">Track gross revenue over selected time periods</p>
            </div>
            <div className="flex border border-slate-200 rounded-xl overflow-hidden text-xs">
              {['daily', 'weekly', 'monthly', 'yearly'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1.5 font-bold transition-all capitalize border-r last:border-0 border-slate-200 ${
                    timeframe === tf ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 hover:bg-slate-55'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          {loading ? (
            <div className="h-64 w-full bg-slate-50/50 animate-pulse rounded-xl" />
          ) : (
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1E293B', borderRadius: '12px', border: 'none', color: '#fff' }}
                    labelStyle={{ fontWeight: 'bold', fontSize: '12px' }}
                    itemStyle={{ fontSize: '12px', color: '#6366F1' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Category distribution */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-base">Category Distribution</h3>
            <p className="text-xs text-slate-400 font-semibold mb-6">Proportion of product counts by department</p>
          </div>
          {loading ? (
            <div className="h-48 w-full bg-slate-50/50 animate-pulse rounded-xl" />
          ) : (
            <div className="h-48 w-full flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {distributionData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-semibold text-slate-500">
            {distributionData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                <span className="truncate">{d.name} ({d.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white border border-slate-100 rounded-2xl card-shadow overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-base">Recent Orders</h3>
            <p className="text-xs text-slate-400 font-semibold">Latest purchases generated by consumers</p>
          </div>
          <button
            onClick={() => navigate('/orders')}
            className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-850 active:scale-95 transition-all"
          >
            View all orders
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/30 text-xs font-bold text-slate-400 tracking-wider">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Payment Status</th>
                <th className="p-4">Order Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <tr key={i} className="border-b border-slate-50 animate-pulse">
                    <td className="p-4" colSpan={7}>
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                    </td>
                  </tr>
                ))
              ) : recentOrders.length === 0 ? (
                <tr>
                  <td className="p-4 text-center text-slate-400 text-sm" colSpan={7}>No recent orders</td>
                </tr>
              ) : (
                recentOrders.map((o) => (
                  <tr key={o.id} className="border-b border-slate-50 text-sm font-semibold text-slate-700 hover:bg-slate-50/40 transition-colors">
                    <td className="p-4 text-indigo-600 font-bold">#{o.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={o.customer.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                          alt="Avatar"
                          className="h-7 w-7 rounded-lg object-cover"
                        />
                        <span>{o.customer.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-400 text-xs font-semibold">
                      {new Date(o.orderDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-slate-900 font-bold">${o.amount.toFixed(2)}</td>
                    <td className="p-4">
                      <StatusBadge status={o.paymentStatus} />
                    </td>
                    <td className="p-4">
                      <StatusBadge status={o.orderStatus} />
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => navigate(`/orders/${o.id}`)}
                        className="px-3 py-1.5 border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
