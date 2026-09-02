import React, { useState } from 'react';
import {
  User,
  Shield,
  CreditCard,
  FileText,
  Clock,
  Download,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight,
  Bell,
  Settings,
  Lock,
  PieChart,
  Layers,
  ArrowUpRight,
  DollarSign
} from 'lucide-react';
import { ActiveTab, Currency, Transaction, ClientProfile, AppNotification } from '../../types';
import { DEMO_CLIENT, DEMO_HOLDINGS, DEMO_TRANSACTIONS } from '../../data/mockData';
import { formatCurrency, formatPercent, triggerDownload } from '../../utils/formatters';

interface ClientPortalViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  openBookingModal: () => void;
  notifications: AppNotification[];
}

type PortalSubTab = 'overview' | 'holdings' | 'transactions' | 'statements' | 'watchlist' | 'sips' | 'profile';

export const ClientPortalView: React.FC<ClientPortalViewProps> = ({
  setActiveTab,
  currency,
  isLoggedIn,
  setIsLoggedIn,
  openBookingModal,
  notifications,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<PortalSubTab>('overview');
  const [client, setClient] = useState<ClientProfile>(DEMO_CLIENT);
  const [transactions, setTransactions] = useState<Transaction[]>(DEMO_TRANSACTIONS);
  const [txFilter, setTxFilter] = useState<string>('All');
  const [watchlist, setWatchlist] = useState<string[]>([
    'Apex Semiconductor Alpha Portfolio',
    'Apex Sovereign AAA Fixed Income',
    'Apex Senior Private Credit Fund',
    'Global Physical Gold ETF',
  ]);
  const [newWatchlistInput, setNewWatchlistInput] = useState('');
  const [activeSipPause, setActiveSipPause] = useState<Record<string, boolean>>({});

  // Client persona switch
  const switchClientPersona = (persona: 'alex' | 'elena') => {
    if (persona === 'alex') {
      setClient(DEMO_CLIENT);
    } else {
      setClient({
        id: 'cl-44109',
        name: 'Elena Rostova',
        email: 'elena.rostova@globalinvest.com',
        accountNumber: 'ER-3109-882',
        clientType: 'Private Wealth',
        advisorName: 'Liam Alexander Thorne',
        totalPortfolioValue: 385000,
        totalInvestedAmount: 310000,
        cashBalance: 14500,
        riskScore: 'Aggressive-Growth (Score: 84/100)',
        kycStatus: 'Verified',
        joinedYear: 2021,
      });
    }
  };

  const filteredTransactions =
    txFilter === 'All'
      ? transactions
      : transactions.filter((t) => t.type === txFilter);

  const handleAddWatchlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWatchlistInput.trim()) return;
    setWatchlist((prev) => [...prev, newWatchlistInput.trim()]);
    setNewWatchlistInput('');
  };

  const handleRemoveWatchlist = (item: string) => {
    setWatchlist((prev) => prev.filter((w) => w !== item));
  };

  const downloadTaxSummary = () => {
    const reportText = `APEX WEALTH MANAGEMENT - CLIENT TAX & CAPITAL GAINS SUMMARY\n==========================================================\nClient: ${client.name}\nAccount: ${client.accountNumber}\nTax Year: 2025-2026\n\nTotal Realized Capital Gains: $24,150.00\nTotal Dividends Received: $8,420.00\nForeign Tax Credits Deducted: $1,240.00\nNet Unrealized Portfolio P&L: $278,500.00\n\nFiduciary Seal: Verified & Signed by Qualified Custodian\nForm 1099-B / Schedule D Compliant.`;
    triggerDownload(`Apex_Tax_Statement_${client.accountNumber}_2026.txt`, reportText);
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto py-16 px-4">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
            <Lock className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Secure Client Portal Access
            </h2>
            <p className="text-xs text-slate-500">
              Sign in to manage your holdings, download statements, and consult your private wealth banker.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => {
                switchClientPersona('alex');
                setIsLoggedIn(true);
              }}
              className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Demo Login: Alexander Wright (Ultra HNI)</span>
            </button>

            <button
              onClick={() => {
                switchClientPersona('elena');
                setIsLoggedIn(true);
              }}
              className="w-full py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Demo Login: Elena Rostova (Growth Investor)</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
            Protected by 256-bit SSL encryption &amp; biometric multi-factor authentication.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 space-y-8">
      {/* 1. Client Header & Persona Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-display text-xl font-bold shrink-0">
              {client.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-display text-2xl font-bold text-white">{client.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                  {client.clientType}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>KYC {client.kycStatus}</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Account ID: <strong className="text-slate-200">{client.accountNumber}</strong> &bull; Private Wealth Banker:{' '}
                <span className="text-amber-400 font-semibold">{client.advisorName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-xs bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-slate-300">
              <span>Switch Profile: </span>
              <button
                onClick={() => switchClientPersona('alex')}
                className={`font-bold ml-1 ${client.name.includes('Alexander') ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
              >
                Alexander
              </button>
              <span className="mx-1">/</span>
              <button
                onClick={() => switchClientPersona('elena')}
                className={`font-bold ${client.name.includes('Elena') ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
              >
                Elena
              </button>
            </div>

            <button
              onClick={openBookingModal}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors"
            >
              Consult Banker
            </button>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto border-b border-slate-200 mt-6 pb-2 no-scrollbar">
          {[
            { id: 'overview', label: 'Portfolio Overview', icon: PieChart },
            { id: 'holdings', label: 'My Investments', icon: Layers },
            { id: 'transactions', label: 'Transaction Logs', icon: Clock },
            { id: 'statements', label: 'Statements & Tax Docs', icon: FileText },
            { id: 'watchlist', label: 'Watchlist', icon: TrendingUp },
            { id: 'sips', label: 'Active Auto-SIPs', icon: RefreshCw },
            { id: 'profile', label: 'Risk Profile & Settings', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as PortalSubTab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Sub-Tab Content Views */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= OVERVIEW TAB ================= */}
        {activeSubTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Total Wealth Balance
                </span>
                <div className="font-display text-2xl font-bold text-slate-900 font-mono">
                  {formatCurrency(client.totalPortfolioValue, currency)}
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold">+24.22% Cumulative Alpha</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Invested Capital
                </span>
                <div className="font-display text-2xl font-bold text-slate-800 font-mono">
                  {formatCurrency(client.totalInvestedAmount, currency)}
                </div>
                <span className="text-[10px] text-slate-500">6 Strategic Positions</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Unallocated Cash &amp; Yield
                </span>
                <div className="font-display text-2xl font-bold text-slate-900 font-mono">
                  {formatCurrency(client.cashBalance, currency)}
                </div>
                <span className="text-[10px] text-slate-500">Earning 4.85% APY</span>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Investor Risk Score
                </span>
                <div className="font-display text-xl font-bold text-amber-900">
                  {client.riskScore}
                </div>
                <span className="text-[10px] text-amber-800 font-semibold">Suitable for Equity + Credit</span>
              </div>
            </div>

            {/* Quick Actions & Recent Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-base text-slate-900">Direct Wealth Actions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setActiveSubTab('holdings')}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 text-left transition-all group"
                  >
                    <Layers className="w-5 h-5 text-amber-600 mb-2" />
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-amber-800">
                      View Holdings
                    </span>
                    <span className="text-[10px] text-slate-500">Live mark-to-market</span>
                  </button>

                  <button
                    onClick={() => setActiveSubTab('statements')}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 text-left transition-all group"
                  >
                    <FileText className="w-5 h-5 text-blue-600 mb-2" />
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-blue-800">
                      Tax Statements
                    </span>
                    <span className="text-[10px] text-slate-500">Form 1099 &amp; P&amp;L</span>
                  </button>

                  <button
                    onClick={openBookingModal}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 text-left transition-all group"
                  >
                    <User className="w-5 h-5 text-emerald-600 mb-2" />
                    <span className="text-xs font-bold text-slate-900 block group-hover:text-emerald-800">
                      Book Banker
                    </span>
                    <span className="text-[10px] text-slate-500">Dedicated review</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-amber-600" />
                    <span>Client Activity Alerts</span>
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-400">Real-time</span>
                </div>
                <div className="space-y-2">
                  {notifications.slice(0, 3).map((notif) => (
                    <div key={notif.id} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{notif.title}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{notif.timestamp}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{notif.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= HOLDINGS TAB ================= */}
        {activeSubTab === 'holdings' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Active Investment Holdings</h3>
                <p className="text-xs text-slate-500">6 Positions across Public Equities, Debt &amp; Private Credit</p>
              </div>
              <button
                onClick={() => setActiveTab('discovery')}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl"
              >
                + Add Investment Product
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-400 uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="p-3">Asset</th>
                    <th className="p-3">Class</th>
                    <th className="p-3 text-right">Units</th>
                    <th className="p-3 text-right">Invested</th>
                    <th className="p-3 text-right">Current Value</th>
                    <th className="p-3 text-right">Gain / Loss</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {DEMO_HOLDINGS.map((h) => (
                    <tr key={h.id} className="hover:bg-slate-50">
                      <td className="p-3 font-sans">
                        <div className="font-bold text-slate-900">{h.name}</div>
                        <span className="text-[10px] text-amber-700 font-bold">{h.symbol}</span>
                      </td>
                      <td className="p-3 font-sans">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700 font-semibold">
                          {h.category}
                        </span>
                      </td>
                      <td className="p-3 text-right text-slate-600">{h.units.toLocaleString()}</td>
                      <td className="p-3 text-right text-slate-700">
                        {formatCurrency(h.investedValue, currency)}
                      </td>
                      <td className="p-3 text-right font-bold text-slate-900">
                        {formatCurrency(h.currentValue, currency)}
                      </td>
                      <td className="p-3 text-right font-bold text-emerald-600">
                        +{formatCurrency(h.totalGainLoss, currency)} ({h.totalGainLossPct.toFixed(1)}%)
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= TRANSACTIONS TAB ================= */}
        {activeSubTab === 'transactions' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Transaction History &amp; Orders</h3>
                <p className="text-xs text-slate-500">Audited transaction ledger with custody confirmations</p>
              </div>

              <div className="flex gap-1.5 flex-wrap">
                {['All', 'BUY', 'SELL', 'SIP', 'DIVIDEND'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTxFilter(type)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg ${
                      txFilter === type
                        ? 'bg-slate-900 text-amber-400 font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-400 uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Asset</th>
                    <th className="p-3 text-right">Amount</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-right">Custody Hash</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50">
                      <td className="p-3 text-slate-500 font-sans">{tx.date}</td>
                      <td className="p-3 font-sans">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            tx.type === 'DIVIDEND'
                              ? 'bg-emerald-100 text-emerald-800'
                              : tx.type === 'SIP'
                              ? 'bg-blue-100 text-blue-800'
                              : tx.type === 'BUY'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="p-3 font-sans font-bold text-slate-800">{tx.assetName}</td>
                      <td className="p-3 text-right font-bold text-slate-900">
                        {formatCurrency(tx.amount, currency)}
                      </td>
                      <td className="p-3 text-center font-sans">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                          {tx.status}
                        </span>
                      </td>
                      <td className="p-3 text-right text-[10px] text-slate-400">{tx.txHash || 'Custody-Direct'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= STATEMENTS & TAX DOCS TAB ================= */}
        {activeSubTab === 'statements' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Statements &amp; Tax Documents</h3>
                <p className="text-xs text-slate-500">Official tax reports, Form 1099, and quarterly audited P&amp;L</p>
              </div>
              <button
                onClick={downloadTaxSummary}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl"
              >
                <Download className="w-4 h-4" />
                <span>Download FY 2025-26 Tax Bundle</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Annual Tax Package Form 1099-B / Schedule D', period: 'FY 2025-26', size: '2.4 MB PDF' },
                { title: 'Q2 2026 Comprehensive Portfolio Valuation Statement', period: 'Q2 2026', size: '1.8 MB PDF' },
                { title: 'Foreign Tax Credit & Dividend Deductions Statement', period: '2025-2026', size: '950 KB PDF' },
                { title: 'Certified Custodial Asset Holding Certificate', period: 'Current', size: '1.1 MB PDF' },
              ].map((doc, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white rounded-xl text-amber-600 border border-slate-200">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{doc.title}</h4>
                      <p className="text-[10px] text-slate-400">{doc.period} &bull; {doc.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={downloadTaxSummary}
                    className="p-2 text-slate-600 hover:text-amber-700 rounded-lg hover:bg-white"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= WATCHLIST TAB ================= */}
        {activeSubTab === 'watchlist' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Custom Investment Watchlist</h3>
                <p className="text-xs text-slate-500">Track curated strategies for tactical deployment</p>
              </div>
            </div>

            <form onSubmit={handleAddWatchlist} className="flex gap-2 max-w-md">
              <input
                type="text"
                placeholder="Add fund or index to watchlist..."
                value={newWatchlistInput}
                onChange={(e) => setNewWatchlistInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl"
              >
                + Add
              </button>
            </form>

            <div className="space-y-2">
              {watchlist.map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-slate-900">{item}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-emerald-600 font-bold">+18.4% 1Y</span>
                    <button
                      onClick={() => handleRemoveWatchlist(item)}
                      className="text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ACTIVE SIPS TAB ================= */}
        {activeSubTab === 'sips' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Automated Recurring Mandates (SIPs)</h3>
                <p className="text-xs text-slate-500">Manage systematic debit schedules and target strategies</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { id: 'sip-1', name: 'Apex AI & Semiconductor Alpha Portfolio', amount: 5000, nextDate: 'Sep 01, 2026' },
                { id: 'sip-2', name: 'Apex Sovereign AAA Fixed Income Fund', amount: 5000, nextDate: 'Sep 01, 2026' },
              ].map((sip) => {
                const isPaused = activeSipPause[sip.id];
                return (
                  <div
                    key={sip.id}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900">{sip.name}</h4>
                      <p className="text-slate-500 text-[11px]">
                        Monthly Contribution: <strong>{formatCurrency(sip.amount, currency)}</strong> &bull; Next Execution: {sip.nextDate}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setActiveSipPause((prev) => ({ ...prev, [sip.id]: !prev[sip.id] }))
                        }
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                          isPaused ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {isPaused ? 'Resume SIP' : 'Pause SIP'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= PROFILE & SETTINGS TAB ================= */}
        {activeSubTab === 'profile' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
              Client Profile, KYC &amp; Risk Settings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Investor Credentials
                </span>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Legal Name:</span>
                  <span className="font-bold text-slate-900">{client.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-mono text-slate-900">{client.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">KYC Status:</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified (SEC &amp; FINMA)
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  Private Wealth Assignment
                </span>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Assigned Banker:</span>
                  <span className="font-bold text-slate-900">{client.advisorName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Risk Assessment:</span>
                  <span className="font-bold text-amber-700">{client.riskScore}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Client Tier:</span>
                  <span className="font-bold text-slate-900">{client.clientType}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
