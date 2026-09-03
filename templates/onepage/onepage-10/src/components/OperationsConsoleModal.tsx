import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { analyticsService } from '../services/analyticsService';
import { reportService } from '../services/reportService';
import { storageService } from '../services/storageService';
import {
  X,
  Terminal,
  Users,
  MessageSquare,
  Workflow,
  FileSpreadsheet,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  Search,
  Plus,
  RefreshCw,
  Activity,
  ShieldCheck,
  Building
} from 'lucide-react';

export const OperationsConsoleModal: React.FC = () => {
  const {
    isOperationsConsoleOpen,
    setIsOperationsConsoleOpen,
    consultations,
    updateConsultationStatus,
    deleteConsultation,
    contacts,
    updateContactStatus,
    deleteContact,
    workflows,
    toggleWorkflowStatus,
    deleteWorkflow,
    duplicateWorkflow,
    addToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'consultations' | 'contacts' | 'workflows' | 'audit'>('consultations');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  if (!isOperationsConsoleOpen) return null;

  const stats = analyticsService.getOperationsStats();
  const auditLogs = storageService.getAuditLog();

  const handleExportConsole = () => {
    reportService.exportOperationsConsoleCSV();
    addToast({
      type: 'success',
      title: 'Operations Ledger Exported',
      message: 'Downloaded complete CSV package of consultations, messages, and workflows.'
    });
  };

  const filteredConsultations = consultations.filter(c => {
    const matchesSearch =
      c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredContacts = contacts.filter(m => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'completed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'cancelled':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default:
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="w-full max-w-5xl bg-[#0C0C12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Console Header */}
        <div className="p-4 sm:p-5 border-b border-white/5 bg-gradient-to-r from-[#08080A] via-[#0C0C12] to-[#141422] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-display text-white">
                  NEXORA Operations & Telemetry Console
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  LIVE BACKEND EMULATOR
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Persistent local database state • Multi-agent telemetry • Client audit records
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportConsole}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-black bg-white hover:bg-slate-200 rounded-full shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => setIsOperationsConsoleOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close operations console"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Top Metric Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#08080A] border-b border-white/5 p-3 sm:p-4 gap-2 sm:gap-4">
          <div className="p-3 rounded-xl bg-[#0C0C12] border border-white/5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Strategy Inquiries</span>
              <Users className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <p className="text-xl font-bold text-white font-display mt-1">{stats.consultationCount}</p>
          </div>

          <div className="p-3 rounded-xl bg-[#0C0C12] border border-white/5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Direct Messages</span>
              <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <p className="text-xl font-bold text-white font-display mt-1">{stats.contactsCount}</p>
          </div>

          <div className="p-3 rounded-xl bg-[#0C0C12] border border-white/5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Active Agent Workflows</span>
              <Workflow className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <p className="text-xl font-bold text-white font-display mt-1">
              {stats.activeWorkflows} / {stats.totalWorkflows}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#0C0C12] border border-white/5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Reports Dispatched</span>
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-xl font-bold text-white font-display mt-1">{stats.reportsGenerated}</p>
          </div>
        </div>

        {/* Nav Tabs & Filter Bar */}
        <div className="px-4 py-3 bg-[#08080A] border-b border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-[#0C0C12] p-1 rounded-xl border border-white/5 overflow-x-auto">
            <button
              onClick={() => { setActiveTab('consultations'); setStatusFilter('all'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'consultations' ? 'bg-white/10 text-white border border-white/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              Consultations ({consultations.length})
            </button>
            <button
              onClick={() => { setActiveTab('contacts'); setStatusFilter('all'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'contacts' ? 'bg-white/10 text-white border border-white/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact Inquiries ({contacts.length})
            </button>
            <button
              onClick={() => { setActiveTab('workflows'); setStatusFilter('all'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'workflows' ? 'bg-white/10 text-white border border-white/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              Workflows ({workflows.length})
            </button>
            <button
              onClick={() => { setActiveTab('audit'); setStatusFilter('all'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'audit' ? 'bg-white/10 text-white border border-white/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              Audit Stream ({auditLogs.length})
            </button>
          </div>

          {/* Search & Filter */}
          {activeTab !== 'audit' && (
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter records..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#0C0C12] border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white placeholder-slate-600"
                />
              </div>

              {activeTab === 'consultations' && (
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 text-xs bg-[#0C0C12] border border-white/10 rounded-lg text-slate-300 focus:outline-none focus:border-indigo-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              )}
            </div>
          )}
        </div>

        {/* Tab Content Tables */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#08080A]">
          {/* TAB 1: CONSULTATIONS */}
          {activeTab === 'consultations' && (
            <div className="space-y-3">
              {filteredConsultations.length === 0 ? (
                <div className="py-16 text-center text-slate-500">
                  <Users className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                  <p className="text-sm font-medium">No consultation records match your filter.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 text-slate-400 uppercase font-mono text-[10px]">
                        <th className="py-2.5 px-3">Lead / Company</th>
                        <th className="py-2.5 px-3">Focus Area</th>
                        <th className="py-2.5 px-3">Target Date</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredConsultations.map(c => (
                        <tr key={c.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">{c.fullName}</div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <Building className="w-3 h-3 text-indigo-400" />
                              <span>{c.company}</span> • <span className="font-mono">{c.id}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5 font-mono">{c.email}</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="text-slate-300 font-medium">{c.areaOfInterest}</span>
                            <p className="text-[11px] text-slate-400 truncate max-w-xs mt-0.5">&ldquo;{c.message}&rdquo;</p>
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap">
                            <div className="text-slate-300">{c.preferredDate}</div>
                            <div className="text-[10px] text-slate-400">{c.preferredTime}</div>
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap">
                            <select
                              value={c.status}
                              onChange={e => updateConsultationStatus(c.id, e.target.value as any)}
                              className={`px-2 py-1 text-[11px] font-semibold rounded-lg border focus:outline-none ${getStatusBadge(
                                c.status
                              )} bg-[#0C0C12]`}
                            >
                              <option value="pending">Pending</option>
                              <option value="scheduled">Scheduled</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="py-3 px-3 text-right whitespace-nowrap">
                            <button
                              onClick={() => deleteConsultation(c.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors"
                              title="Delete record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CONTACT INQUIRIES */}
          {activeTab === 'contacts' && (
            <div className="space-y-3">
              {filteredContacts.length === 0 ? (
                <div className="py-16 text-center text-slate-500">
                  <MessageSquare className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                  <p className="text-sm font-medium">No direct messages match your filter.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredContacts.map(m => (
                    <div key={m.id} className="p-4 rounded-xl bg-[#0C0C12] border border-white/5 flex flex-col sm:flex-row items-start justify-between gap-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{m.name}</span>
                          <span className="text-slate-400 text-xs">({m.email})</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                            {m.id}
                          </span>
                        </div>
                        <h5 className="text-xs font-bold text-indigo-400">{m.subject}</h5>
                        <p className="text-xs text-slate-300 leading-relaxed bg-[#08080A] p-2.5 rounded-lg border border-white/5">
                          {m.message}
                        </p>
                        <span className="text-[10px] text-slate-400 font-mono">Received: {new Date(m.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-start">
                        <button
                          onClick={() => deleteContact(m.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: WORKFLOWS */}
          {activeTab === 'workflows' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {workflows.map(wf => (
                  <div key={wf.id} className="p-4 rounded-xl bg-[#0C0C12] border border-white/5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">{wf.name}</h4>
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                            wf.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}>
                            {wf.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{wf.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 bg-[#08080A] p-2 rounded-lg text-center text-[11px] border border-white/5">
                      <div>
                        <span className="text-slate-400 block">Executions</span>
                        <span className="font-mono font-bold text-slate-200">{wf.totalExecutions.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Success Rate</span>
                        <span className="font-mono font-bold text-emerald-400">{wf.successRate}%</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Steps</span>
                        <span className="font-mono font-bold text-indigo-400">{wf.steps.length} Nodes</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-white/5 text-xs">
                      <span className="text-[10px] text-slate-400 font-mono">Last Run: {wf.lastRun || 'N/A'}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => toggleWorkflowStatus(wf.id)}
                          className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                            wf.status === 'active'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {wf.status === 'active' ? 'Pause' : 'Activate'}
                        </button>
                        <button
                          onClick={() => duplicateWorkflow(wf.id)}
                          className="px-2 py-1 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors"
                        >
                          Duplicate
                        </button>
                        <button
                          onClick={() => deleteWorkflow(wf.id)}
                          className="p-1 text-slate-400 hover:text-rose-400 rounded hover:bg-white/5 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: AUDIT STREAM */}
          {activeTab === 'audit' && (
            <div className="space-y-2">
              <div className="p-3 bg-[#0C0C12] rounded-xl border border-white/5 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Sovereign Immutable Audit Feed (Live)</span>
                </span>
                <span>50 Recent Entries</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {auditLogs.map(log => (
                  <div key={log.id} className="p-2.5 rounded-lg bg-[#0C0C12] border border-white/5 flex items-start gap-3">
                    <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                    <span className="text-indigo-400 shrink-0 font-bold">&lt;{log.type.toUpperCase()}&gt;</span>
                    <span className="text-slate-300 flex-1">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-[#08080A] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted local runtime • All modifications persist across browser sessions</span>
          </span>
          <button
            onClick={() => setIsOperationsConsoleOpen(false)}
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/10"
          >
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
};
