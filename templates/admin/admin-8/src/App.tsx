/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import StatCards from './components/StatCards';
import RevenueChart from './components/RevenueChart';
import TransactionsTable from './components/TransactionsTable';
import ProductOverview from './components/ProductOverview';
import ViewPerformanceCard from './components/ViewPerformanceCard';
import MiniCalendar from './components/MiniCalendar';

import { 
  INITIAL_TRANSACTIONS, 
  INITIAL_PRODUCTS, 
  INITIAL_VIEW_PERFORMANCE, 
  getKPIs,
  exportToCSV
} from './data';
import { Transaction, DateRange } from './types';
import { Sparkles, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  // Navigation & Sizing States
  const [currentTab, setCurrentTab] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Core Data States
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '2026-08-01',
    endDate: '2026-08-31'
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Dynamic simulation & feedback states
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter transactions by selectedDate if active
  const activeTransactionsForLedger = useMemo(() => {
    if (!selectedDate) return transactions;
    return transactions.filter(t => t.date === selectedDate);
  }, [transactions, selectedDate]);

  // Compute stats based on current visible transactions
  const totals = useMemo(() => {
    const completed = transactions.filter(t => t.status === 'Completed');
    const count = completed.length;
    const gross = completed.reduce((sum, t) => sum + (t.amount > 0 ? t.amount : 0), 0);
    return { count, gross };
  }, [transactions]);

  // Calculate current active KPIs
  const activeKPIs = useMemo(() => {
    return getKPIs(transactions);
  }, [transactions]);

  // Trigger simulated Refresh / Randomization of metrics
  const handleRefresh = () => {
    setIsRefreshing(true);
    setToastMessage("Synchronizing sales channels...");

    setTimeout(() => {
      // Simulate adding a random new transaction from a customer
      const names = ['Clark Kent', 'Selina Kyle', 'Barry Allen', 'Diana Prince', 'Arthur Curry'];
      const emails = ['ckent@dailyplanet.com', 'cat@gotham.org', 'flash@star-labs.com', 'diana@themyscira.gov', 'aquaman@atlantis.org'];
      const categories = ['Enterprise License', 'SaaS Subscriptions', 'Consulting', 'Support Services'];
      const methods = ['Credit Card', 'PayPal', 'Apple Pay', 'Wire Transfer'];

      const randomIdx = Math.floor(Math.random() * names.length);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomMethod = methods[Math.floor(Math.random() * methods.length)];
      const randomAmount = Math.floor(Math.random() * 2400) + 150;

      const newTx: Transaction = {
        id: `TX-${Math.floor(Math.random() * 9000) + 1000}`,
        customer: {
          name: names[randomIdx],
          email: emails[randomIdx]
        },
        date: '2026-08-24', // Today's simulated date
        status: 'Completed',
        amount: randomAmount,
        method: randomMethod,
        category: randomCategory
      };

      setTransactions(prev => [newTx, ...prev]);
      setIsRefreshing(false);
      setToastMessage("Dashboard updated! Appended 1 new live ledger record.");
    }, 900);
  };

  // Close toast automatically after 4 seconds
  useEffect(() => {
    if (toastMessage && !isRefreshing) {
      const timer = setTimeout(() => setToastMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, isRefreshing]);

  // Export full reports
  const handleExportReport = () => {
    const csvContent = exportToCSV(transactions);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `spark_admin_report_full_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setToastMessage("Full database export compiled and initiated.");
  };

  return (
    <div className="aura-bg">
      {/* Decorative Aura Blending Layers - Ember Glow Light Theme */}
      <div className="aura-layer-1" aria-hidden="true" />
      <div className="aura-layer-2" aria-hidden="true" />

      {/* Main Container Stage */}
      <div className="aura-content min-h-screen flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <Sidebar 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* Workspace Panels */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header 
            currentTab={currentTab}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
            onExport={handleExportReport}
            setMobileOpen={setMobileOpen}
          />

          <main className="flex-1 p-3.5 sm:p-5 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto">
            {currentTab === 'overview' && (
              <div id="tab-panel-overview" className="space-y-4 sm:space-y-6">
                {/* Hero Headline Banner */}
                <Hero 
                  dateRange={dateRange} 
                  totalSalesCount={totals.count}
                  grossRevenue={totals.gross}
                />

                {/* KPI Metrics List */}
                <StatCards kpis={activeKPIs} />

                {/* Analytical Charts and Calendar Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Revenue Line Chart Panel */}
                  <div className="lg:col-span-2">
                    <RevenueChart isRefreshing={isRefreshing} />
                  </div>

                  {/* Operational Mini Calendar */}
                  <div className="lg:col-span-1">
                    <MiniCalendar 
                      transactions={transactions} 
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  </div>
                </div>

                {/* Ledger Transactions and Stream Performance Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="lg:col-span-2">
                    <TransactionsTable 
                      transactions={activeTransactionsForLedger} 
                      dateRange={dateRange}
                      onExport={handleExportReport}
                    />
                  </div>

                  <div className="lg:col-span-1">
                    <ViewPerformanceCard performanceData={INITIAL_VIEW_PERFORMANCE} />
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'products' && (
              <div id="tab-panel-products" className="space-y-4 sm:space-y-6">
                <div className="bg-white/68 backdrop-blur-[18px] p-4 sm:p-6 border border-[rgba(33,29,26,0.09)] rounded-2xl shadow-[0_12px_40px_rgba(63,42,27,0.08)] flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#211d1a]">Product Inventory Overview</h2>
                    <p className="text-xs text-[#706861] mt-1">Status logs, stock quantities, and return metrics for sales items.</p>
                  </div>
                </div>
                <ProductOverview products={INITIAL_PRODUCTS} />
              </div>
            )}

            {currentTab === 'transactions' && (
              <div id="tab-panel-transactions" className="space-y-4 sm:space-y-6">
                <div className="bg-white/68 backdrop-blur-[18px] p-4 sm:p-6 border border-[rgba(33,29,26,0.09)] rounded-2xl shadow-[0_12px_40px_rgba(63,42,27,0.08)] flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#211d1a]">Ledger Registry Audit</h2>
                    <p className="text-xs text-[#706861] mt-1">Review complete transactions records. Filter by boundary periods or download ledger backups.</p>
                  </div>
                </div>
                <TransactionsTable 
                  transactions={transactions} 
                  dateRange={dateRange}
                  onExport={handleExportReport}
                />
              </div>
            )}

            {currentTab === 'calendar' && (
              <div id="tab-panel-calendar" className="space-y-4 sm:space-y-6">
                <div className="bg-white/68 backdrop-blur-[18px] p-4 sm:p-6 border border-[rgba(33,29,26,0.09)] rounded-2xl shadow-[0_12px_40px_rgba(63,42,27,0.08)]">
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#211d1a]">Schedules & Calendar View</h2>
                  <p className="text-xs text-[#706861] mt-1">Select calendar milestones to isolate specific daily metrics and transactions audits.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="lg:col-span-1">
                    <MiniCalendar 
                      transactions={transactions} 
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  </div>
                  <div className="lg:col-span-2 bg-white/68 backdrop-blur-[18px] border border-[rgba(33,29,26,0.09)] p-4 sm:p-6 rounded-2xl shadow-[0_12px_40px_rgba(63,42,27,0.08)]">
                    <h3 className="text-sm font-extrabold text-[#211d1a] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#ff6a3d]" />
                      <span>Filtered Operations Log for {selectedDate || 'All Days'}</span>
                    </h3>
                    
                    {activeTransactionsForLedger.length === 0 ? (
                      <div className="py-12 flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-bold text-[#706861]">No Ledger Records Found</span>
                        <span className="text-[10px] text-[#9b928a] mt-1">Choose a highlighted day with active indicators.</span>
                      </div>
                    ) : (
                      <div className="space-y-2.5 sm:space-y-3">
                        {activeTransactionsForLedger.map((tx) => (
                          <div key={tx.id} className="flex items-center justify-between p-3 sm:p-3.5 bg-white/80 rounded-xl border border-black/[0.04] shadow-xs">
                            <div className="min-w-0 pr-2">
                              <span className="block text-xs font-bold text-[#211d1a] truncate">{tx.customer.name}</span>
                              <span className="text-[10px] text-[#706861] mt-0.5 block truncate">{tx.id} • {tx.category}</span>
                            </div>
                            <div className="text-right shrink-0">
                              <span className={`block text-xs font-extrabold ${tx.amount < 0 ? 'text-[#ff3d77]' : 'text-emerald-600'}`}>
                                {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                              </span>
                              <span className="text-[10px] text-[#9b928a]">{tx.method}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Dynamic Pop-up Toast Feedback */}
      {toastMessage && (
        <div 
          id="system-feedback-toast"
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 flex items-center gap-3 bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-xl p-3.5 sm:p-4 rounded-2xl animate-bounce"
        >
          {isRefreshing ? (
            <RefreshCw className="w-5 h-5 text-[#ff6a3d] animate-spin shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          )}
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-extrabold text-[#211d1a]">System Event Notification</span>
            <span className="text-[10px] text-[#706861] font-medium mt-0.5 truncate">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
