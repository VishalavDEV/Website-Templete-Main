import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Edit2,
  Trash2,
  Search,
  Filter,
  Truck,
  CreditCard,
  MapPin,
  Calendar,
  Check
} from 'lucide-react';

import StatusBadge from '../components/common/StatusBadge';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import Breadcrumb from '../components/common/Breadcrumb';

import { useApp } from '../context/AppContext';

export default function OrdersPage() {
  const { orders, updateOrderStatus, deleteOrder } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Modals
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const filteredOrders = useMemo(() => {
    return orders.filter(o => {
      const matchesSearch =
        o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.product.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || o.status.toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredOrders.slice(start, start + itemsPerPage);
  }, [filteredOrders, currentPage]);

  const openOrderDetails = (o) => {
    setSelectedOrder(o);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <Breadcrumb />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Order Fulfillment Center
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track real-time shipment dispatches, payment authorizations, and order lifecycles
          </p>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Orders</p>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">8,492</h3>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-brand-600 dark:text-brand-400 rounded-xl">
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed</p>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">7,120</h3>
          </div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending/Processing</p>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">1,030</h3>
          </div>
          <div className="p-3 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cancelled</p>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">342</h3>
          </div>
          <div className="p-3 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 rounded-xl">
            <XCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search order ID, customer name, or item..."
            className="w-full sm:w-80"
          />

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400">Filter Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Product Purchased</th>
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
                    No orders match your criteria.
                  </td>
                </tr>
              ) : (
                paginatedOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                      {o.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{o.customer}</div>
                      <div className="text-xs text-slate-400">{o.customerEmail}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 dark:text-slate-300">
                      {o.product}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-500 dark:text-slate-400">
                      {o.date}
                    </td>
                    <td className="py-3.5 px-4 font-extrabold text-slate-900 dark:text-white">
                      {o.amount}
                    </td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={o.status} />
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openOrderDetails(o)}
                          className="px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400 text-xs font-bold hover:bg-brand-100 transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            setSelectedOrder(o);
                            setIsDeleteModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"
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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* COMPREHENSIVE ORDER DETAILS PANEL / MODAL */}
      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title={`Order Details Telemetry — ${selectedOrder?.id || ''}`}
        maxWidth="max-w-2xl"
      >
        {selectedOrder && (
          <div className="space-y-6">
            {/* Top Status & Customer Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 gap-4">
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Customer Details</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mt-0.5">{selectedOrder.customer}</h3>
                <p className="text-xs text-slate-500">{selectedOrder.customerEmail} • {selectedOrder.customerPhone || '+1 (555) 019-2834'}</p>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Total Paid</span>
                <p className="text-xl font-black text-brand-600 dark:text-brand-400">{selectedOrder.amount}</p>
                <div className="mt-1 flex sm:justify-end"><StatusBadge status={selectedOrder.status} /></div>
              </div>
            </div>

            {/* Product & Payment Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <ShoppingBag className="w-4 h-4 text-brand-500" />
                  <span>Purchased Product</span>
                </div>
                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{selectedOrder.product}</p>
                <p className="text-xs text-slate-500">Quantity: {selectedOrder.productQty || 1} unit(s)</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <CreditCard className="w-4 h-4 text-purple-500" />
                  <span>Payment Instrument</span>
                </div>
                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{selectedOrder.payment}</p>
                <p className="text-xs text-emerald-600 font-semibold">Payment Status: Verified</p>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Fulfillment Destination</p>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {selectedOrder.shippingAddress || "742 Evergreen Terrace, San Francisco, CA 94107"}
                </p>
              </div>
            </div>

            {/* Order Lifecycle Timeline */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Order Dispatch Timeline</h4>
              
              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {(selectedOrder.timeline || [
                  { date: selectedOrder.date + " 09:30 AM", status: "Order Placed", detail: "Payment received and logged." },
                  { date: selectedOrder.date + " 11:45 AM", status: "Processing", detail: "Package prepared at logistics warehouse." },
                  { date: selectedOrder.date + " 02:15 PM", status: selectedOrder.status, detail: `Order is currently ${selectedOrder.status}.` }
                ]).map((t, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-brand-600 ring-4 ring-white dark:ring-slate-900" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.status}</span>
                        <span className="text-[10px] text-slate-400">{t.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Update Status:</span>
                <select
                  value={selectedOrder.status}
                  onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value)}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <option value="Completed">Completed</option>
                  <option value="Processing">Processing</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
              >
                Close Panel
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* DELETE DIALOG */}
      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          if (selectedOrder) deleteOrder(selectedOrder.id);
        }}
        title="Delete Order Record"
        message={`Are you sure you want to permanently delete order ${selectedOrder?.id}?`}
        confirmText="Delete Order"
      />
    </div>
  );
}
