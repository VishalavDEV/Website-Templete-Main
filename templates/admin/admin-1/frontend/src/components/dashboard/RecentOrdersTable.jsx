import React, { useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, Eye, MoreVertical, X, CheckCircle, Package, User, Calendar, CreditCard } from 'lucide-react';

export default function RecentOrdersTable({ orders = [] }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const itemsPerPage = 5;

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage) || 1;
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getBadgeClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Processing':
        return 'bg-neura-cyan/15 text-neura-cyan border-neura-cyan/30';
      case 'Pending':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'Cancelled':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-500/15 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-5">
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Recent Orders</h3>
          <p className="text-xs text-slate-400">Live order fulfillment stream across active payment channels.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan/50"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan/50"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto border border-white/10 rounded-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-200">
            {paginatedOrders.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-6 text-center text-slate-400">No matching orders found.</td>
              </tr>
            ) : (
              paginatedOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.04] transition-colors">
                  <td className="p-4 font-mono text-neura-cyan font-bold">{order.id}</td>
                  <td className="p-4 font-medium text-white">{order.customer}</td>
                  <td className="p-4 text-slate-300">{order.product}</td>
                  <td className="p-4 font-mono font-bold text-white">${order.amount}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold ${getBadgeClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400 font-mono">{order.date}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-neura-cyan transition-colors"
                      title="View Order Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
        <span>Showing {paginatedOrders.length} of {filteredOrders.length} orders</span>
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 disabled:opacity-40 hover:bg-white/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-white font-semibold">Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 disabled:opacity-40 hover:bg-white/10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Package className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Order Telemetry: {selectedOrder.id}</span>
              </h3>
              <button onClick={() => setSelectedOrder(null)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex justify-between items-center">
                <span className="text-slate-400">Order Status</span>
                <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${getBadgeClass(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span>
              </div>

              <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Customer</span>
                  <span className="font-bold text-white">{selectedOrder.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Product Package</span>
                  <span className="font-bold text-neura-cyan">{selectedOrder.product}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Billed</span>
                  <span className="font-mono font-bold text-emerald-400">${selectedOrder.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Transaction Date</span>
                  <span className="font-mono text-slate-300">{selectedOrder.date}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
