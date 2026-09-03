import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  MessageSquare, 
  CreditCard, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  User,
  ArrowRight,
  GitCommit,
  Layers,
  Check,
  X
} from 'lucide-react';

export const ClientPortalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprints' | 'rfcs' | 'comms' | 'billing'>('sprints');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [selectedRfc, setSelectedRfc] = useState<{ id: string; title: string; content: string } | null>(null);
  const [milestones, setMilestones] = useState([
    { id: 1, title: 'Milestone 01: Core Architecture RFC & Kafka Topology', tag: 'Approved Oct 12 • Code Tag v0.1.0-alpha', status: 'approved', amount: '$35,000 RELEASED' },
    { id: 2, title: 'Milestone 02: Order Gateway Microservice & FIX Protocol Ingestion', tag: 'Approved Nov 04 • Code Tag v0.2.4', status: 'approved', amount: '$45,000 RELEASED' },
    { id: 3, title: 'Milestone 03: Multi-tenant UI Canvas & Sub-2ms Risk Engine', tag: 'Current Sprint 4 • Target Delivery: Nov 28', status: 'review', amount: 'PENDING SIGN-OFF' },
  ]);

  const handleDownload = (docName: string) => {
    setDownloadToast(`Preparing cryptographic bundle: ${docName}.spec.pdf`);
    setTimeout(() => {
      setDownloadToast(`Downloaded: ${docName}.spec.pdf successfully saved.`);
      setTimeout(() => setDownloadToast(null), 3000);
    }, 900);
  };

  const handleSignOff = (id: number) => {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, status: 'approved', amount: 'APPROVED • FUNDS RELEASED' } : m));
  };

  return (
    <div id="client-portal-preview" className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Portal Top Bar */}
      <div className="bg-slate-900 text-white py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30 font-semibold">
                Client Workspace Hub
              </span>
              <span className="text-xs font-mono text-slate-400">&bull; Secure Tenant</span>
            </div>
            <h1 className="text-2xl font-bold font-display text-white mt-1">
              Apex Global Capital &mdash; Production Portal
            </h1>
            <p className="text-xs text-slate-400">Project: Low-Latency Algorithmic Market Execution Terminal (PRJ-9042)</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200">Pod Status: Sprint 4 Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('sprints')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'sprints' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sprint &amp; Milestone Velocity
          </button>
          <button
            onClick={() => setActiveTab('rfcs')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'rfcs' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Architectural RFCs &amp; Specs (4)
          </button>
          <button
            onClick={() => setActiveTab('comms')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'comms' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pod Synchronous Comms
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
              activeTab === 'billing' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Milestone Billing &amp; Sign-offs
          </button>
        </div>

        {/* Tab 1: Sprints & Milestones */}
        {activeTab === 'sprints' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <p className="text-xs font-mono text-slate-500">Overall Progress</p>
                <p className="text-2xl font-bold text-slate-900 font-display mt-0.5">72% Completed</p>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="w-[72%] h-full bg-emerald-500"></div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <p className="text-xs font-mono text-slate-500">Current Velocity</p>
                <p className="text-2xl font-bold text-blue-600 font-display mt-0.5">38 Story Pts</p>
                <p className="text-[11px] text-slate-400 mt-1">Sprint 4 burndown tracking 3 days ahead</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <p className="text-xs font-mono text-slate-500">Test Coverage</p>
                <p className="text-2xl font-bold text-purple-600 font-display mt-0.5">99.1%</p>
                <p className="text-[11px] text-slate-400 mt-1">1,418 automated integration tests pass</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <p className="text-xs font-mono text-slate-500">Assigned Pod</p>
                <p className="text-sm font-bold text-slate-900 mt-1">Pod 02 &bull; Alpha</p>
                <p className="text-[11px] text-slate-400">Lead: Dr. Julian Sterling</p>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-display">
                Contractual Milestone Roadmap
              </h3>
              <div className="space-y-3 text-xs">
                {milestones.map((m) => (
                  <div key={m.id} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${m.status === 'approved' ? 'bg-slate-50 border-slate-200' : 'bg-blue-50/60 border-blue-200'}`}>
                    <div className="flex items-center gap-3">
                      {m.status === 'approved' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      ) : (
                        <Clock className="w-5 h-5 text-blue-600 animate-spin shrink-0" />
                      )}
                      <div>
                        <p className="font-bold text-slate-900">{m.title}</p>
                        <p className="text-slate-500 text-[11px]">{m.tag}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded font-mono font-bold text-[10px] ${m.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                        {m.amount}
                      </span>
                      {m.status !== 'approved' && (
                        <button
                          onClick={() => handleSignOff(m.id)}
                          className="px-3 py-1 rounded-lg bg-blue-600 text-white font-semibold text-[11px] hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
                        >
                          Sign Off &amp; Release
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Architectural RFCs */}
        {activeTab === 'rfcs' && (
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display">
              Living Architectural Design Documents
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900">RFC-104: Zero-Allocation Rust Order Router Specification</p>
                  <p className="text-slate-500 text-[11px]">Author: Julian Sterling &bull; Updated 3 days ago &bull; SHA-256 Verified</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedRfc({
                      id: 'RFC-104',
                      title: 'Zero-Allocation Rust Order Router Specification',
                      content: 'Comprehensive architectural specification detailing zero-copy ring buffers, lockless concurrency primitives, L3 cache alignment strategies, and kernel-bypass network driver configurations achieving 1.2μs deterministic execution.'
                    })}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-100 cursor-pointer text-xs"
                  >
                    View Document
                  </button>
                  <button
                    onClick={() => handleDownload('RFC-104')}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer flex items-center gap-1.5 text-xs shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Spec</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900">RFC-108: SOC 2 Compliant Key Hierarchy &amp; Cloud KMS Secrets Rotation</p>
                  <p className="text-slate-500 text-[11px]">Author: Marcus Vance &bull; Status: Signed Off &bull; Compliant with NIST SP 800-57</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedRfc({
                      id: 'RFC-108',
                      title: 'SOC 2 Compliant Key Hierarchy & Cloud KMS Secrets Rotation',
                      content: 'Production security policy outlining envelope encryption with automated 90-day hardware security module rotation, audit event publishing via AWS CloudTrail, and tamper-evident append-only logging.'
                    })}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-100 cursor-pointer text-xs"
                  >
                    View Document
                  </button>
                  <button
                    onClick={() => handleDownload('RFC-108')}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer flex items-center gap-1.5 text-xs shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Spec</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Pod Comms */}
        {activeTab === 'comms' && (
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display">
              Synchronous Slack &amp; Daily Standup Logs
            </h3>
            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
              <p className="text-slate-400">[Today 09:15 PST] Standup Bot:</p>
              <p className="text-white">&bull; Julian: Deployed ClickHouse partition indexing tests to staging. Latency reduced from 12ms to 3.8ms.</p>
              <p className="text-white">&bull; Elena: Finished Dark Theme institutional design tokens for high-density matrix.</p>
              <p className="text-emerald-400">&bull; CI/CD: 24 commits merged to main with zero regression errors.</p>
            </div>
          </div>
        )}

        {/* Tab 4: Billing */}
        {activeTab === 'billing' && (
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display">
              Invoices &amp; Escrow Milestone Releases
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-slate-900">Invoice #AX-2026-089 (Milestone 02 Complete)</p>
                <p className="text-slate-500 text-[11px]">Paid via ACH Transfer &bull; Receipt Sent to accounting@apex.com</p>
              </div>
              <span className="font-mono font-bold text-emerald-700">$45,000.00 USD</span>
            </div>
          </div>
        )}
      </div>

      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-mono flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* RFC Document Reader Modal */}
      {selectedRfc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-mono text-xs font-bold">
                {selectedRfc.id}
              </span>
              <button
                onClick={() => setSelectedRfc(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              {selectedRfc.title}
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono leading-relaxed max-h-60 overflow-y-auto">
              {selectedRfc.content}
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedRfc(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedRfc.id;
                  setSelectedRfc(null);
                  handleDownload(id);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Spec</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
