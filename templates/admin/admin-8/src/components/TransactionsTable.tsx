/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertCircle,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Transaction, TransactionStatus, DateRange } from '../types';
import { exportToCSV } from '../data';

interface TransactionsTableProps {
  transactions: Transaction[];
  dateRange: DateRange;
  onExport: () => void;
}

export default function TransactionsTable({ 
  transactions, 
  dateRange,
  onExport
}: TransactionsTableProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Extract unique categories for filter dropdown
  const categories = useMemo(() => {
    const list = new Set(transactions.map(t => t.category));
    return ['All', ...Array.from(list)];
  }, [transactions]);

  // Filter transactions based on dateRange, status, category, and search query
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      // 1. Date range filter
      const txDate = new Date(t.date);
      const startDate = new Date(dateRange.startDate);
      const endDate = new Date(dateRange.endDate);
      
      // Ensure date comparison treats boundary inclusive
      txDate.setHours(0,0,0,0);
      startDate.setHours(0,0,0,0);
      endDate.setHours(0,0,0,0);
      
      const inDateRange = txDate >= startDate && txDate <= endDate;
      
      // 2. Status filter
      const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
      
      // 3. Category filter
      const matchesCategory = categoryFilter === 'All' || t.category === categoryFilter;
      
      // 4. Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        t.id.toLowerCase().includes(query) ||
        t.customer.name.toLowerCase().includes(query) ||
        t.customer.email.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query) ||
        t.method.toLowerCase().includes(query);

      return inDateRange && matchesStatus && matchesCategory && matchesSearch;
    });
  }, [transactions, dateRange, statusFilter, categoryFilter, searchQuery]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredTransactions.length / itemsPerPage));
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTransactions.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTransactions, currentPage]);

  const handleDownloadCSV = () => {
    const csvContent = exportToCSV(filteredTransactions);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ledger_export_${dateRange.startDate}_to_${dateRange.endDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: TransactionStatus) => {
    switch(status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
            <CheckCircle2 className="w-3 h-3" />
            <span>Completed</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
            <Clock className="w-3 h-3" />
            <span>Pending</span>
          </span>
        );
      case 'Failed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-100">
            <XCircle className="w-3 h-3" />
            <span>Failed</span>
          </span>
        );
      case 'Refunded':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#ff3d77]/5 text-[#ff3d77] border border-[#ff3d77]/10">
            <AlertCircle className="w-3 h-3" />
            <span>Refunded</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      id="transactions-ledger-panel"
      className="bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_12px_40px_rgba(63,42,27,0.08)] flex flex-col h-full"
    >
      {/* Title & CSV Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <span className="text-[11px] sm:text-xs font-bold text-[#706861] uppercase tracking-wider">Audit Log</span>
          <h3 className="text-base sm:text-lg font-extrabold text-[#211d1a] tracking-tight mt-0.5">
            Transaction Ledger ({filteredTransactions.length} items)
          </h3>
        </div>

        <button
          id="csv-download-btn"
          onClick={handleDownloadCSV}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#706861] hover:text-[#211d1a] bg-white border border-black/[0.06] hover:border-black/[0.12] rounded-xl shadow-xs hover:shadow-sm transition-all self-start sm:self-auto cursor-pointer min-h-[38px]"
          title="Download ledger slice in CSV format"
          aria-label="Download CSV"
        >
          <Download className="w-4 h-4 text-[#ff6a3d]" />
          <span>Export Ledger</span>
        </button>
      </div>

      {/* Filter Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9b928a]" />
          <input
            id="transaction-search-input"
            type="text"
            placeholder="Search ledger..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="w-full text-xs pl-10 pr-4 py-2.5 border border-black/[0.06] rounded-xl bg-white/70 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff6a3d] min-h-[40px]"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <select
            id="transaction-status-filter"
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
            className="w-full text-xs px-3.5 py-2.5 border border-black/[0.06] rounded-xl bg-white/70 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff6a3d] appearance-none min-h-[40px] cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
            <option value="Refunded">Refunded</option>
          </select>
          <Filter className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9b928a] pointer-events-none" />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <select
            id="transaction-category-filter"
            value={categoryFilter}
            onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
            className="w-full text-xs px-3.5 py-2.5 border border-black/[0.06] rounded-xl bg-white/70 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff6a3d] appearance-none min-h-[40px] cursor-pointer"
          >
            <option value="All">All Categories</option>
            {categories.filter(c => c !== 'All').map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <Filter className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9b928a] pointer-events-none" />
        </div>
      </div>

      {/* Ledger Surface (Desktop/Tablet: Table / Mobile: Cards) */}
      <div className="flex-1 overflow-x-auto">
        {/* Empty State */}
        {filteredTransactions.length === 0 ? (
          <div id="ledger-empty-state" className="flex flex-col items-center justify-center py-10 px-4 border border-dashed border-black/[0.08] rounded-2xl bg-black/[0.01]">
            <span className="w-10 h-10 rounded-full bg-black/[0.03] flex items-center justify-center text-[#9b928a] mb-3">
              <AlertCircle className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-[#211d1a]">No Transactions Found</span>
            <span className="text-[10px] text-[#706861] mt-1 text-center">Try adjusting your filters, query, or reporting period.</span>
          </div>
        ) : (
          <>
            {/* Desktop / Tablet Table */}
            <table id="desktop-ledger-table" className="hidden md:table w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/[0.04]">
                  <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">ID</th>
                  <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Customer</th>
                  <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Date</th>
                  <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Category</th>
                  <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider">Status</th>
                  <th className="py-3 px-3.5 text-[10px] font-extrabold text-[#9b928a] uppercase tracking-wider text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.03]">
                {paginatedTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-black/[0.01] transition-all">
                    <td className="py-3 px-3.5 font-bold text-xs text-[#211d1a]">{tx.id}</td>
                    <td className="py-3 px-3.5">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#211d1a]">{tx.customer.name}</span>
                        <span className="text-[10px] text-[#9b928a] font-medium">{tx.customer.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5 text-xs font-semibold text-[#706861]">{tx.date}</td>
                    <td className="py-3 px-3.5">
                      <span className="px-2 py-0.5 bg-black/[0.03] text-[#706861] text-[10px] font-bold rounded">
                        {tx.category}
                      </span>
                    </td>
                    <td className="py-3 px-3.5">{getStatusBadge(tx.status)}</td>
                    <td className={`py-3 px-3.5 text-right text-xs font-extrabold ${tx.amount < 0 ? 'text-[#ff3d77]' : 'text-emerald-600'}`}>
                      {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Cards (Strictly prevents table overflow on phones) */}
            <div id="mobile-ledger-cards" className="md:hidden space-y-2.5">
              {paginatedTransactions.map((tx) => (
                <div 
                  key={tx.id} 
                  className="bg-white/80 border border-black/[0.04] rounded-xl p-3.5 flex flex-col gap-2.5 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#211d1a]">{tx.id}</span>
                    <span className="text-[10px] text-[#9b928a] font-semibold">{tx.date}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-[#211d1a] truncate">{tx.customer.name}</span>
                      <span className="text-[10px] text-[#9b928a] truncate">{tx.customer.email}</span>
                    </div>
                    <div className={`text-right text-xs font-extrabold shrink-0 ${tx.amount < 0 ? 'text-[#ff3d77]' : 'text-emerald-600'}`}>
                      {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-black/[0.03] pt-2">
                    <span className="px-2 py-0.5 bg-black/[0.03] text-[#706861] text-[10px] font-bold rounded">
                      {tx.category}
                    </span>
                    {getStatusBadge(tx.status)}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination Ribbon */}
      {filteredTransactions.length > itemsPerPage && (
        <div id="ledger-pagination-ribbon" className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-black/[0.04] pt-3 sm:pt-4 mt-3 sm:mt-4">
          <span className="text-[10px] text-[#9b928a] font-semibold">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length}
          </span>
          <div className="flex items-center gap-1 self-end sm:self-auto">
            <button
              id="pagination-prev-btn"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-1.5 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg border border-black/[0.05] disabled:opacity-40 disabled:hover:bg-transparent bg-white hover:bg-black/[0.02] cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold px-2 text-[#211d1a]">{currentPage} / {totalPages}</span>
            <button
              id="pagination-next-btn"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg border border-black/[0.05] disabled:opacity-40 disabled:hover:bg-transparent bg-white hover:bg-black/[0.02] cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
