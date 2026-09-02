import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  DollarSign,
  ShoppingBag,
  Clock,
  Download,
  Plus,
  Eye,
  Edit2,
  Trash2,
  Filter,
  ArrowUpDown,
  Calendar as CalendarIcon,
  TrendingUp
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import StatCard from '../components/common/StatCard';
import ChartCard from '../components/common/ChartCard';
import StatusBadge from '../components/common/StatusBadge';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import Breadcrumb from '../components/common/Breadcrumb';

import { useApp } from '../context/AppContext';
import {
  revenueOverviewData,
  userGrowthData,
  salesDistributionData,
  weeklyActivityData
} from '../mockData/analytics';
import { downloadMockCSV } from '../mockData/reports';

export default function DashboardPage() {
  const { orders, updateOrderStatus, deleteOrder, addToast } = useApp();

  // Search, Filter, Sort, Pagination State for Recent Orders
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Modals state
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editStatus, setEditStatus] = useState('');

  // Filtered and Sorted Orders
  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      const matchesSearch =
        o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.product.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || o.status.toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    }).sort((a, b) => {
      if (sortBy === 'amount-high') {
        const valA = typeof a.amount === 'number' ? a.amount : parseFloat(String(a.amount || 0).replace(/[^0-9.-]+/g, ""));
        const valB = typeof b.amount === 'number' ? b.amount : parseFloat(String(b.amount || 0).replace(/[^0-9.-]+/g, ""));
        return valB - valA;
      }
      if (sortBy === 'amount-low') {
        const valA = typeof a.amount === 'number' ? a.amount : parseFloat(String(a.amount || 0).replace(/[^0-9.-]+/g, ""));
        const valB = typeof b.amount === 'number' ? b.amount : parseFloat(String(b.amount || 0).replace(/[^0-9.-]+/g, ""));
        return valA - valB;
      }
      return new Date(b.date) - new Date(a.date);
    });
  }, [orders, searchTerm, statusFilter, sortBy]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredOrders.slice(start, start + itemsPerPage);
  }, [filteredOrders, currentPage]);

  const handleExportSummary = () => {
    const csvRows = [
      ["Order ID", "Customer", "Product", "Date", "Amount", "Payment", "Status"],
      ...orders.map(o => [o.id, o.customer, o.product, o.date, o.amount, o.payment, o.status])
    ];
    downloadMockCSV("dashboard-orders-summary.csv", csvRows);
    addToast("Exported Orders CSV report successfully!", "success");
  };

  const todayDateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-900 via-navy-800 to-indigo-950 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-brand-300 border border-white/10 mb-3">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{todayDateStr}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Good Evening, Admin 👋
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              Here's what's happening with your platform today. All revenue metrics and user activities are updated live.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleExportSummary}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/15 backdrop-blur-md transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* STATISTICS CARDS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="24,892"
          change="+12.5%"
          isPositive={true}
          icon={Users}
          color="brand"
          delay={0.1}
        />
        <StatCard
          title="Total Revenue"
          value="$84,320"
          change="+8.2%"
          isPositive={true}
          icon={DollarSign}
          color="purple"
          delay={0.2}
        />
        <StatCard
          title="Total Orders"
          value="8,492"
          change="+15.4%"
          isPositive={true}
          icon={ShoppingBag}
          color="emerald"
          delay={0.3}
        />
        <StatCard
          title="Pending Requests"
          value="342"
          change="-4.8%"
          isPositive={false}
          icon={Clock}
          color="amber"
          delay={0.4}
        />
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Overview (2 Cols) */}
        <ChartCard
          title="Revenue Overview"
          subtitle="Monthly revenue compared to target & previous year"
          className="lg:col-span-2"
          action={
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/50">
              <TrendingUp className="w-3.5 h-3.5" />
              +14.8% YTD Growth
            </span>
          }
        >
          <ResponsiveContainer width="100%" height={280} minWidth={100} minHeight={200}>
            <AreaChart data={revenueOverviewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Area type="monotone" dataKey="currentYear" name="2026 Revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrent)" />
              <Area type="monotone" dataKey="previousYear" name="2025 Revenue" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorPrev)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Sales Distribution Donut Chart */}
        <ChartCard
          title="Sales Distribution"
          subtitle="Category performance breakdown"
        >
          <ResponsiveContainer width="100%" height={220} minWidth={100} minHeight={200}>
            <PieChart>
              <Pie
                data={salesDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={5}
                dataKey="value"
              >
                {salesDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            {salesDistributionData.map(item => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-600 dark:text-slate-300 font-medium truncate">{item.name}</span>
                <span className="ml-auto font-bold text-slate-900 dark:text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* SECONDARY CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <ChartCard
          title="User Growth"
          subtitle="Monthly new & active platform users"
        >
          <ResponsiveContainer width="100%" height={240} minWidth={100} minHeight={200}>
            <AreaChart data={userGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Area type="monotone" dataKey="activeUsers" name="Active Users" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Weekly Activity Bar Chart */}
        <ChartCard
          title="Weekly Activity"
          subtitle="Order volume breakdown across days"
        >
          <ResponsiveContainer width="100%" height={240} minWidth={100} minHeight={200}>
            <BarChart data={weeklyActivityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.15)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="orders" name="Orders Count" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* RECENT ORDERS TABLE */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Live transaction status and order fulfillment records
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search ID, customer, product..."
              className="w-full sm:w-64"
            />

            {/* Filter Dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="date-desc">Newest First</option>
              <option value="amount-high">Amount: High to Low</option>
              <option value="amount-low">Amount: Low to High</option>
            </select>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70 text-sm">
              {paginatedOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    No orders match your current filters.
                  </td>
                </tr>
              ) : (
                paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      {order.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{order.customer}</div>
                      <div className="text-xs text-slate-400">{order.customerEmail}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-medium">
                      {order.product}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 text-xs">
                      {order.date}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      {order.amount}
                    </td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5 opacity-90">
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setIsViewModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/50 transition-colors"
                          title="View Order Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setEditStatus(order.status);
                            setIsEditModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-colors"
                          title="Update Status"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setIsDeleteModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors"
                          title="Delete Order"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* VIEW ORDER MODAL */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title={`Order Details ${selectedOrder?.id || ''}`}
        maxWidth="max-w-xl"
      >
        {selectedOrder && (
          <div className="space-y-6 text-sm">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase">Customer</span>
                <p className="font-bold text-slate-800 dark:text-slate-100">{selectedOrder.customer}</p>
                <p className="text-xs text-slate-500">{selectedOrder.customerEmail}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase">Amount & Status</span>
                <p className="font-bold text-slate-900 dark:text-white text-base">{selectedOrder.amount}</p>
                <div className="mt-1"><StatusBadge status={selectedOrder.status} /></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Item Summary</h4>
              <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedOrder.product}</span>
                <span className="text-xs text-slate-500">Qty: {selectedOrder.productQty || 1}</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Shipping Information</h4>
              <p className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                {selectedOrder.shippingAddress || "Standard Priority Delivery"}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* EDIT ORDER MODAL */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`Update Order Status ${selectedOrder?.id || ''}`}
        maxWidth="max-w-md"
      >
        {selectedOrder && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500">
              Change fulfillment status for <span className="font-bold text-slate-800 dark:text-slate-200">{selectedOrder.customer}</span>.
            </p>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Fulfillment Status
              </label>
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-500"
              >
                <option value="Completed">Completed</option>
                <option value="Processing">Processing</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updateOrderStatus(selectedOrder.id, editStatus);
                  setIsEditModalOpen(false);
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-500/20"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* DELETE CONFIRM DIALOG */}
      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          if (selectedOrder) deleteOrder(selectedOrder.id);
        }}
        title="Delete Order Record"
        message={`Are you sure you want to delete order ${selectedOrder?.id}? This action cannot be undone.`}
        confirmText="Delete Order"
        isDanger={true}
      />
    </div>
  );
}
