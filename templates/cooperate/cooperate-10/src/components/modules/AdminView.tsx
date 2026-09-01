import React, { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Layers,
  Bell,
  Activity,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  Download,
  DollarSign,
  TrendingUp,
  Settings,
  Lock,
  Edit,
  Trash2,
  Sparkles
} from 'lucide-react';
import { ActiveTab, Currency, InvestmentProduct, AppNotification } from '../../types';
import { INVESTMENT_PRODUCTS, DEMO_HOLDINGS } from '../../data/mockData';
import { formatCurrency, triggerDownload } from '../../utils/formatters';

interface AdminViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  notifications: AppNotification[];
  setNotifications: React.Dispatch<React.SetStateAction<AppNotification[]>>;
}

interface ManagedClient {
  id: string;
  name: string;
  account: string;
  aum: number;
  advisor: string;
  kyc: 'Verified' | 'Pending' | 'Review';
  riskScore: string;
}

export const AdminView: React.FC<AdminViewProps> = ({
  setActiveTab,
  currency,
  notifications,
  setNotifications,
}) => {
  const [adminTab, setAdminTab] = useState<'overview' | 'clients' | 'products' | 'broadcast' | 'audit'>('overview');
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  // Managed clients list state
  const [clientsList, setClientsList] = useState<ManagedClient[]>([
    { id: 'cl-1', name: 'Alexander Wright', account: 'AW-9842-104', aum: 1428500, advisor: 'Sarah Jenkins, CFA', kyc: 'Verified', riskScore: 'Moderate-Growth (78)' },
    { id: 'cl-2', name: 'Elena Rostova', account: 'ER-3109-882', aum: 385000, advisor: 'Liam Thorne, CFA', kyc: 'Verified', riskScore: 'Aggressive (84)' },
    { id: 'cl-3', name: 'Montague Heritage Trust', account: 'MH-7712-409', aum: 8400000, advisor: 'Sarah Jenkins, CFA', kyc: 'Verified', riskScore: 'Conservative (45)' },
    { id: 'cl-4', name: 'Dr. Kabir Oberoi', account: 'KO-1142-990', aum: 920000, advisor: 'Marcus Vance, CAIA', kyc: 'Verified', riskScore: 'Moderate (62)' },
    { id: 'cl-5', name: 'Vanguard Capital Partners LLC', account: 'VC-0092-111', aum: 24500000, advisor: 'David Sterling, CFA', kyc: 'Verified', riskScore: 'High Growth (90)' },
    { id: 'cl-6', name: 'Sophia Chen', account: 'SC-5521-304', aum: 650000, advisor: 'Elena Dubois, CFP', kyc: 'Pending', riskScore: 'Balanced (55)' },
  ]);

  const [productsList, setProductsList] = useState<InvestmentProduct[]>(INVESTMENT_PRODUCTS);
  const [clientSearch, setClientSearch] = useState('');

  // Handle broadcast notification
  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMessage) return;

    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      title: broadcastTitle,
      message: broadcastMessage,
      timestamp: 'Just now',
      read: false,
      type: 'info',
    };

    setNotifications((prev) => [newNotif, ...prev]);
    setBroadcastSuccess(true);
    setBroadcastTitle('');
    setBroadcastMessage('');
    setTimeout(() => setBroadcastSuccess(false), 4000);
  };

  const filteredClients = clientsList.filter(
    (c) =>
      c.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
      c.account.toLowerCase().includes(clientSearch.toLowerCase()) ||
      c.advisor.toLowerCase().includes(clientSearch.toLowerCase())
  );

  const exportAuditLogs = () => {
    const csv = `Timestamp,Actor,Action,IP Address,Status\n2026-08-26 10:14:02,System Admin,Nav Recalculation Complete,192.168.1.104,SUCCESS\n2026-08-26 09:30:15,Sarah Jenkins,Client Rebalance Mandate Executed,10.0.4.22,SUCCESS\n2026-08-26 08:45:00,Security Daemon,GIPS Regulatory Compliance Verify,127.0.0.1,PASSED\n2026-08-26 08:00:11,Market Feeds,Global Index Sync (8 Feeds),10.0.2.1,SUCCESS`;
    triggerDownload(`Apex_Admin_Audit_Logs_${new Date().toISOString().slice(0, 10)}.csv`, csv);
  };

  return (
    <div className="w-full py-10 space-y-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-display text-2xl font-bold shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Institutional Master Console
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  System Online
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5">
                Apex Executive Management Suite
              </h1>
              <p className="text-xs text-slate-400">
                Fiduciary Oversight &bull; Global AUM: $48.5 Billion &bull; SEC CRD #293810
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportAuditLogs}
              className="px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Audit Logs</span>
            </button>
          </div>
        </div>

        {/* Sub-nav Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 mt-6 pb-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Executive KPIs', icon: Activity },
            { id: 'clients', label: 'Client Accounts (42,000+)', icon: Users },
            { id: 'products', label: 'Fund & Strategy Admin', icon: Layers },
            { id: 'broadcast', label: 'Broadcast Advisory Alert', icon: Bell },
            { id: 'audit', label: 'Compliance & Audit Log', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = adminTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setAdminTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Admin Body Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= OVERVIEW TAB ================= */}
        {adminTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Global Total AUM
                </span>
                <div className="font-display text-2xl font-bold text-slate-900 font-mono">
                  {formatCurrency(48500000000, currency)}
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold">+18.4% YoY Inflow</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Today's Net Liquidity Inflow
                </span>
                <div className="font-display text-2xl font-bold text-emerald-600 font-mono">
                  +{formatCurrency(142500000, currency)}
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold">142 Institutional Trades</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Active Fiduciary Desks
                </span>
                <div className="font-display text-2xl font-bold text-slate-900 font-mono">
                  38 Partners
                </div>
                <span className="text-[10px] text-slate-500">98.4% Utilization</span>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Compliance Health Score
                </span>
                <div className="font-display text-2xl font-bold text-amber-900 font-mono">
                  100% Certified
                </div>
                <span className="text-[10px] text-amber-800 font-semibold">GIPS &amp; SEC Compliant</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-slate-900">Systemic Liquidity Health &amp; Risk Heatmap</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-700 block">Tier-1 Capital Ratio</span>
                  <div className="font-mono text-lg font-bold text-emerald-600">22.4%</div>
                  <span className="text-[10px] text-slate-500">Regulatory Min: 10.5%</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-700 block">VaR (99% Confidence 1-Day)</span>
                  <div className="font-mono text-lg font-bold text-slate-900">0.82% ($397M)</div>
                  <span className="text-[10px] text-slate-500">Well within risk envelope</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-700 block">Custodial Vault Reserve</span>
                  <div className="font-mono text-lg font-bold text-slate-900">$4.1B Cash / T-Bills</div>
                  <span className="text-[10px] text-slate-500">100% Segregated at BNY Mellon</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CLIENTS TAB ================= */}
        {adminTab === 'clients' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Client Account Ledger</h3>
                <p className="text-xs text-slate-500">Direct oversight of active institutional and private accounts</p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search client, account ID, banker..."
                  value={clientSearch}
                  onChange={(e) => setClientSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-400 uppercase font-semibold text-[10px]">
                  <tr>
                    <th className="p-3">Client Name</th>
                    <th className="p-3">Account Number</th>
                    <th className="p-3 text-right">AUM Portfolio</th>
                    <th className="p-3">Assigned Fiduciary</th>
                    <th className="p-3 text-center">KYC Status</th>
                    <th className="p-3">Risk Assessment</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {filteredClients.map((cl) => (
                    <tr key={cl.id} className="hover:bg-slate-50">
                      <td className="p-3 font-sans font-bold text-slate-900">{cl.name}</td>
                      <td className="p-3 text-amber-700 font-bold">{cl.account}</td>
                      <td className="p-3 text-right font-bold text-slate-900">
                        {formatCurrency(cl.aum, currency)}
                      </td>
                      <td className="p-3 font-sans text-slate-700">{cl.advisor}</td>
                      <td className="p-3 text-center font-sans">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            cl.kyc === 'Verified'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {cl.kyc}
                        </span>
                      </td>
                      <td className="p-3 font-sans text-slate-600 text-[11px]">{cl.riskScore}</td>
                      <td className="p-3 text-center font-sans">
                        <button
                          onClick={() => {
                            setActiveTab('portal');
                          }}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-[10px] font-bold"
                        >
                          View Portal &rarr;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= PRODUCTS TAB ================= */}
        {adminTab === 'products' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Investment Strategy Administration</h3>
                <p className="text-xs text-slate-500">Control active NAV valuation feeds and fund subscription limits</p>
              </div>
              <button
                onClick={() => alert('New fund vehicle creation wizard initialized.')}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Launch New Strategy</span>
              </button>
            </div>

            <div className="space-y-3">
              {productsList.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{prod.name}</span>
                      <span className="px-2 py-0.5 bg-white text-slate-700 rounded text-[10px] font-semibold border border-slate-200">
                        {prod.category}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      AUM: {formatCurrency(prod.aum, currency)} &bull; 5Y CAGR: +{prod.return5Y}% &bull; TER: {prod.expenseRatio}%
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Trading Active
                    </span>
                    <button
                      onClick={() => alert(`Editing configuration for ${prod.name}`)}
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= BROADCAST TAB ================= */}
        {adminTab === 'broadcast' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-2xl mx-auto space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Broadcast Advisory Alert to All Clients
              </h3>
              <p className="text-xs text-slate-500">
                Pushes an instant notification to all active client portals and investor notification feeds.
              </p>
            </div>

            {broadcastSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Advisory broadcast sent to 42,000+ client accounts successfully!</span>
              </div>
            )}

            <form onSubmit={handleBroadcast} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Notification Headline *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FOMC Rate Decision & Tactical Rebalancing Mandate"
                  value={broadcastTitle}
                  onChange={(e) => setBroadcastTitle(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Message Content *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Details of the market advisory, portfolio adjustments, or statutory notice..."
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-md transition-colors"
              >
                Send Broadcast Alert &rarr;
              </button>
            </form>
          </div>
        )}

        {/* ================= AUDIT LOG TAB ================= */}
        {adminTab === 'audit' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Regulatory Security &amp; Transaction Audit Log</h3>
                <p className="text-xs text-slate-500">Immutable immutable ledger of institutional actions</p>
              </div>
              <button
                onClick={exportAuditLogs}
                className="px-3 py-1.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Download CSV
              </button>
            </div>

            <div className="space-y-2 text-xs font-mono">
              {[
                { time: '2026-08-26 10:14:02', actor: 'System Admin', action: 'Daily NAV Calculation Completed & Locked', status: 'SUCCESS' },
                { time: '2026-08-26 09:30:15', actor: 'Sarah Jenkins, CFA', action: 'Approved Alexander Wright Tactical Rebalance', status: 'SUCCESS' },
                { time: '2026-08-26 08:45:00', actor: 'GIPS Compliance Engine', action: 'Trailing Performance Alpha Matrix Verification', status: 'PASSED' },
                { time: '2026-08-26 08:00:11', actor: 'Feeds Daemon', action: 'Global Benchmark Indices Synchronization (8 Feeds)', status: 'SUCCESS' },
              ].map((log, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-[10px] block">{log.time}</span>
                    <span className="font-bold text-slate-900">{log.action}</span>
                    <span className="text-[11px] text-slate-500 block">Actor: {log.actor}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {log.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
