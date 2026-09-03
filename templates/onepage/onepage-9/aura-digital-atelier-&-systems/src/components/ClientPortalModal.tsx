import React, { useState } from 'react';
import { UserSession, ClientProject, ProjectMilestone } from '../types';
import { MOCK_CLIENT_PROJECT } from '../data/mockData';
import { X, CheckCircle2, Clock, Download, Plus, CreditCard, FileCode, Shield, LogOut, MessageSquare, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  userSession: UserSession;
  onLogout: () => void;
  onShowToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  userSession,
  onLogout,
  onShowToast
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'milestones' | 'deliverables' | 'billing' | 'ticket'>('overview');
  const [projectData, setProjectData] = useState<ClientProject>(MOCK_CLIENT_PROJECT);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketPriority, setTicketPriority] = useState<'normal' | 'high' | 'critical'>('high');
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleDownloadDeliverable = (filename: string) => {
    onShowToast('Download Initiated', `Packaging secure bundle: ${filename}`, 'info');
  };

  const handlePayInvoice = (invoiceId: string) => {
    setProjectData((prev) => ({
      ...prev,
      invoices: prev.invoices.map((inv) =>
        inv.id === invoiceId ? { ...inv, status: 'Paid' } : inv
      )
    }));
    onShowToast('Invoice Settled', `Transaction for ${invoiceId} verified and recorded.`, 'success');
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketDescription) {
      onShowToast('Missing Details', 'Please specify a subject and description for the change request.', 'info');
      return;
    }

    setIsSubmittingTicket(true);
    setTimeout(() => {
      setIsSubmittingTicket(false);
      setTicketSubmitted(true);
      onShowToast(
        'Ticket Dispatched to Lead Architect',
        'Alexander Sterling will review this change request in today’s standup.',
        'success'
      );
      setTimeout(() => {
        setTicketSubmitted(false);
        setTicketSubject('');
        setTicketDescription('');
        setActiveTab('overview');
      }, 1500);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4"
        >
          {/* Top Bar with User Info & Logout */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-800 bg-slate-950">
            <div className="flex items-center gap-3">
              <img
                src={userSession.user?.avatar}
                alt={userSession.user?.name}
                className="w-10 h-10 rounded-full object-cover border border-indigo-400/50"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-white">
                    {userSession.user?.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ACTIVE POD
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {userSession.user?.company} • {userSession.user?.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/30 text-xs text-slate-400 hover:text-rose-300 transition-colors flex items-center gap-1.5"
                title="Sign out of portal"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Close Portal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: 'Cockpit Overview' },
              { id: 'milestones', label: `Milestones (${projectData.milestones.length})` },
              { id: 'deliverables', label: `Deliverables & Code (${projectData.deliverables.length})` },
              { id: 'billing', label: 'Invoices & SLA' },
              { id: 'ticket', label: '+ Scope Request' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
                  activeTab === t.id
                    ? 'border-indigo-500 text-indigo-300'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content Stage */}
          <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Active Project Banner */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-slate-950 via-slate-950 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-indigo-300 uppercase tracking-wider mb-1">
                      PROJECT ID: {projectData.id}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {projectData.name}
                    </h3>
                    <div className="text-xs text-slate-400 mt-1">
                      Lead Systems Architect: <span className="text-slate-200">{projectData.leadArchitect}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono text-slate-400 uppercase">Velocity Health</div>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ● {projectData.health}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-slate-400 uppercase tracking-wider">Overall Engagement Velocity</span>
                    <span className="text-indigo-300 font-bold">{projectData.progressPercent}% Completed</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                      style={{ width: `${projectData.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Quick Summary Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">CURRENT SPRINT FOCUS</div>
                    <div className="text-sm font-semibold text-slate-100 mt-1">
                      Fleet Anomaly Telemetry WebGL Canvas
                    </div>
                    <div className="text-[11px] text-indigo-400 mt-2">Target Demo: Friday 10:00 AM PST</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">CODE COMMITS THIS WEEK</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                      34 Commits
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2">All CI test branches passing</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">NEXT MILESTONE SLA</div>
                    <div className="text-sm font-semibold text-slate-100 mt-1">
                      Sept 12, 2025
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2">Production Canary Rollout</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'milestones' && (
              <div className="space-y-4">
                {projectData.milestones.map((m, idx) => (
                  <div
                    key={m.id}
                    className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {m.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                        {m.status === 'in-progress' && <Clock className="w-5 h-5 text-indigo-400 animate-spin" />}
                        {m.status === 'upcoming' && <Clock className="w-5 h-5 text-slate-600" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-400 uppercase">
                          Phase 0{idx + 1} • {m.date}
                        </div>
                        <h4 className="font-display font-bold text-base text-white mt-0.5">{m.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-xl">{m.description}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${
                          m.status === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : m.status === 'in-progress'
                            ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                            : 'bg-slate-900 text-slate-500'
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'deliverables' && (
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Verified Production Artifacts
                </div>
                {projectData.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <FileCode className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-200">{item.name}</div>
                        <div className="text-xs text-slate-500 font-mono">
                          {item.type} • {item.size} • Uploaded {item.date}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownloadDeliverable(item.name)}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Invoices &amp; Retainer Accounting
                </div>
                {projectData.invoices.map((inv) => (
                  <div
                    key={inv.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-bold text-white font-mono">{inv.id}</div>
                      <div className="text-xs text-slate-400">Retainer Cycle • Issued {inv.date}</div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-bold font-mono text-white">{inv.amount}</div>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase ${
                            inv.status === 'Paid' ? 'text-emerald-400' : 'text-indigo-400'
                          }`}
                        >
                          ● {inv.status}
                        </span>
                      </div>

                      {inv.status === 'Pending' ? (
                        <button
                          onClick={() => handlePayInvoice(inv.id)}
                          className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02]"
                        >
                          Pay Invoice
                        </button>
                      ) : (
                        <button
                          onClick={() => onShowToast('Receipt Downloaded', `Receipt for ${inv.id} exported.`, 'info')}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white"
                        >
                          Receipt
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ticket' && (
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Submit Architectural Change Request or Feature Ticket
                </h4>
                <p className="text-xs text-slate-400 mb-6">
                  Dispatched directly to your dedicated Lead Architect and logged in the sprint backlog.
                </p>

                {ticketSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Change request logged in sprint backlog. Alexander Sterling will triage within 2 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                        Request Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Add multi-tenant tenant isolation for European enterprise beta"
                        value={ticketSubject}
                        onChange={(e) => setTicketSubject(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                        Priority Level
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'normal', label: 'Normal Backlog' },
                          { id: 'high', label: 'High Priority (Next Sprint)' },
                          { id: 'critical', label: 'Critical Blocker (Immediate)' }
                        ].map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setTicketPriority(p.id as any)}
                            className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                              ticketPriority === p.id
                                ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300'
                                : 'bg-slate-900 border-slate-800 text-slate-400'
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                        Technical Description &amp; Acceptance Criteria
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Provide architectural parameters or business rationale..."
                        value={ticketDescription}
                        onChange={(e) => setTicketDescription(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-400/60"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingTicket}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 disabled:opacity-50 transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmittingTicket ? 'Logging Ticket...' : 'Dispatch Change Request'}</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
