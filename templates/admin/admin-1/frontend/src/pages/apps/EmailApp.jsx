import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Mail, Inbox, Send, Star, Trash2, Edit3, Search, X, Check, ArrowLeft } from 'lucide-react';

export default function EmailApp() {
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [search, setSearch] = useState('');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showComposeModal, setShowComposeModal] = useState(false);

  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'AWS Cloud Billing',
      emailAddress: 'billing@aws.amazon.com',
      subject: 'Monthly Infrastructure Billing Statement',
      snippet: 'Your monthly usage for August 2026 is finalized at $12,450.00.',
      body: 'Hello Admin,\n\nYour monthly infrastructure billing statement for August 2026 has been generated. The total charge of $12,450.00 will be auto-debited from your linked payment method on August 25, 2026.\n\nSummary:\n- EC2 / GPU Instances: $8,200.00\n- S3 Storage & Egress: $2,850.00\n- CloudFront CDN: $1,400.00\n\nThank you for choosing AWS.',
      time: '09:42 AM',
      unread: true,
      starred: true,
      folder: 'inbox'
    },
    {
      id: 2,
      sender: 'Security Alert Engine',
      emailAddress: 'sec-ops@neura.tech',
      subject: 'SOC2 Compliance Audit Passed',
      snippet: 'All 14 node security checks executed cleanly with 0 vulnerabilities.',
      body: 'Greetings Security Team,\n\nOur automated SOC2 Type II compliance validator has completed scanning all 14 Kubernetes cluster nodes and Spring Boot microservices.\n\nResult: PASSED (0 Critical, 0 High, 0 Medium vulnerabilities).\n\nAudit log hash: sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      time: 'Yesterday',
      unread: false,
      starred: false,
      folder: 'inbox'
    },
    {
      id: 3,
      sender: 'Stripe Billing System',
      emailAddress: 'receipts@stripe.com',
      subject: 'Successful Deposit: $24,100.00',
      snippet: 'Funds deposited to Neura Primary Operations Bank Account.',
      body: 'Hi Neura Finance,\n\nA payout of $24,100.00 (USD) has been processed and deposited into your account ending in *4892.\n\nPayout ID: po_1M9xY2LkdIw02Jkl\nStatus: Paid',
      time: '17 Aug',
      unread: false,
      starred: true,
      folder: 'inbox'
    },
    {
      id: 4,
      sender: 'Admin User',
      emailAddress: 'admin@neura.tech',
      subject: 'Sprint 34 Deployment Roadmap Notes',
      snippet: 'Shared the roadmap notes with senior engineering leads.',
      body: 'Hi Team,\n\nPlease review the attached Sprint 34 deployment roadmap before our sync tomorrow at 11 AM.\n\nKey deliverables:\n1. Upgrade model weights to v4.2\n2. Finalize JWT token rotation API\n3. Refresh UI Dashboard theme',
      time: '16 Aug',
      unread: false,
      starred: false,
      folder: 'sent'
    }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!composeTo.trim() || !composeSubject.trim()) return;

    const newEmail = {
      id: Date.now(),
      sender: 'Admin User',
      emailAddress: 'admin@neura.tech',
      to: composeTo,
      subject: composeSubject,
      snippet: composeBody.slice(0, 80) || 'No preview available',
      body: composeBody || 'Sent from Neura Tech Mailbox',
      time: 'Just now',
      unread: false,
      starred: false,
      folder: 'sent'
    };

    setEmails([newEmail, ...emails]);
    setComposeTo('');
    setComposeSubject('');
    setComposeBody('');
    setShowComposeModal(false);
    showToast('Email dispatched successfully!');
  };

  const toggleStar = (e, id) => {
    e.stopPropagation();
    setEmails(emails.map(mail => mail.id === id ? { ...mail, starred: !mail.starred } : mail));
  };

  const deleteEmail = (e, id) => {
    e.stopPropagation();
    setEmails(emails.filter(mail => mail.id !== id));
    if (selectedEmail?.id === id) setSelectedEmail(null);
    showToast('Email moved to trash.');
  };

  const markAsRead = (email) => {
    setSelectedEmail(email);
    setEmails(emails.map(m => m.id === email.id ? { ...m, unread: false } : m));
  };

  const filteredEmails = emails.filter(mail => {
    if (activeFolder === 'starred') return mail.starred;
    if (activeFolder === 'sent') return mail.folder === 'sent';
    return mail.folder === 'inbox';
  }).filter(mail =>
    mail.subject.toLowerCase().includes(search.toLowerCase()) ||
    mail.sender.toLowerCase().includes(search.toLowerCase()) ||
    mail.snippet.toLowerCase().includes(search.toLowerCase())
  );

  const unreadInboxCount = emails.filter(e => e.folder === 'inbox' && e.unread).length;
  const starredCount = emails.filter(e => e.starred).length;
  const sentCount = emails.filter(e => e.folder === 'sent').length;

  return (
    <Layout title="Mailbox & Communications" breadcrumb="Home / Applications / Email">
      <div className="space-y-4 relative">
        {toastMessage && (
          <div className="absolute top-0 right-0 z-50 px-4 py-2.5 rounded-2xl bg-emerald-500 text-black font-bold text-xs shadow-xl flex items-center space-x-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="h-[calc(100vh-200px)] rounded-3xl glass-panel border border-white/10 flex overflow-hidden">
          {/* Left Navigation Sidebar */}
          <div className="w-60 border-r border-white/10 p-4 space-y-4 shrink-0 hidden sm:flex flex-col justify-between">
            <div className="space-y-4">
              <button
                onClick={() => setShowComposeModal(true)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center justify-center space-x-2 hover:opacity-90 transition-all"
              >
                <Edit3 className="w-4 h-4" />
                <span>Compose Email</span>
              </button>

              <div className="space-y-1 text-xs font-semibold">
                <button
                  onClick={() => { setActiveFolder('inbox'); setSelectedEmail(null); }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all ${
                    activeFolder === 'inbox' ? 'bg-neura-cyan/20 text-neura-cyan border border-neura-cyan/30' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Inbox className="w-4 h-4" />
                    <span>Inbox</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-neura-cyan/20 text-neura-cyan font-mono">
                    {unreadInboxCount}
                  </span>
                </button>

                <button
                  onClick={() => { setActiveFolder('sent'); setSelectedEmail(null); }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all ${
                    activeFolder === 'sent' ? 'bg-neura-cyan/20 text-neura-cyan border border-neura-cyan/30' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Send className="w-4 h-4" />
                    <span>Sent</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-slate-300 font-mono">
                    {sentCount}
                  </span>
                </button>

                <button
                  onClick={() => { setActiveFolder('starred'); setSelectedEmail(null); }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all ${
                    activeFolder === 'starred' ? 'bg-neura-cyan/20 text-neura-cyan border border-neura-cyan/30' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span>Starred</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-slate-300 font-mono">
                    {starredCount}
                  </span>
                </button>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400">
              <p className="font-bold text-white mb-1">Encrypted Mail</p>
              <p>All outgoing & incoming communications are signed via TLS 1.3 encryption.</p>
            </div>
          </div>

          {/* Main Area: Email List + Reader View */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Search Bar Header */}
            <div className="p-3 border-b border-white/10 flex items-center justify-between gap-3 bg-white/[0.02]">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search emails..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div className="sm:hidden flex items-center space-x-2">
                <select
                  value={activeFolder}
                  onChange={(e) => { setActiveFolder(e.target.value); setSelectedEmail(null); }}
                  className="bg-neura-panel border border-white/10 text-white font-bold text-xs py-1.5 px-2 rounded-xl focus:outline-none focus:border-neura-cyan"
                >
                  <option value="inbox">Inbox ({unreadInboxCount})</option>
                  <option value="sent">Sent ({sentCount})</option>
                  <option value="starred">Starred ({starredCount})</option>
                </select>
                <button
                  onClick={() => setShowComposeModal(true)}
                  className="p-2 rounded-xl bg-neura-cyan text-black font-bold text-xs shadow-glow-cyan"
                  title="Compose Email"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* List vs Detail Container */}
            <div className="flex-1 flex min-h-0 overflow-hidden">
              {/* Email List */}
              <div className={`flex-1 overflow-y-auto p-4 space-y-3 ${selectedEmail ? 'hidden md:block md:w-1/2 border-r border-white/10' : 'w-full'}`}>
                {filteredEmails.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs">No emails found in this folder.</div>
                ) : (
                  filteredEmails.map(mail => (
                    <div
                      key={mail.id}
                      onClick={() => markAsRead(mail)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 group ${
                        selectedEmail?.id === mail.id
                          ? 'bg-neura-cyan/15 border-neura-cyan text-white shadow-glow-cyan/10'
                          : mail.unread
                          ? 'bg-neura-cyan/10 border-neura-cyan/30 text-white font-bold'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 truncate">
                          <span className="text-xs font-bold text-white truncate">{mail.sender}</span>
                          <span className="text-[10px] text-slate-400 font-mono">• {mail.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={(e) => toggleStar(e, mail.id)}
                            className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                          >
                            <Star className={`w-3.5 h-3.5 ${mail.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                          <button
                            onClick={(e) => deleteEmail(e, mail.id)}
                            className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <h4 className="text-xs font-semibold text-neura-cyan truncate">{mail.subject}</h4>
                      <p className="text-slate-400 text-[11px] truncate">{mail.snippet}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Reader View Pane */}
              {selectedEmail && (
                <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-white/[0.01]">
                  <button
                    onClick={() => setSelectedEmail(null)}
                    className="md:hidden flex items-center space-x-1.5 text-xs text-neura-cyan font-bold mb-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Inbox</span>
                  </button>

                  <div className="flex items-start justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-base font-bold text-white">{selectedEmail.subject}</h3>
                      <p className="text-xs text-slate-400 mt-1">From: <span className="text-neura-cyan font-semibold">{selectedEmail.sender}</span> ({selectedEmail.emailAddress})</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{selectedEmail.time}</span>
                  </div>

                  <div className="text-xs text-slate-200 whitespace-pre-wrap leading-relaxed space-y-4">
                    {selectedEmail.body}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <button
                      onClick={() => {
                        setComposeTo(selectedEmail.emailAddress);
                        setComposeSubject(`Re: ${selectedEmail.subject}`);
                        setShowComposeModal(true);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan text-xs font-semibold text-white flex items-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5 text-neura-cyan" />
                      <span>Reply to Message</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compose Email Modal */}
      {showComposeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Edit3 className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Compose New Message</span>
              </h3>
              <button
                onClick={() => setShowComposeModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">To Email</label>
                <input
                  type="email"
                  required
                  value={composeTo}
                  onChange={(e) => setComposeTo(e.target.value)}
                  placeholder="recipient@domain.com"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={composeSubject}
                  onChange={(e) => setComposeSubject(e.target.value)}
                  placeholder="Message subject line"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Message Body</label>
                <textarea
                  rows={5}
                  value={composeBody}
                  onChange={(e) => setComposeBody(e.target.value)}
                  placeholder="Write your email here..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan resize-none"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowComposeModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
