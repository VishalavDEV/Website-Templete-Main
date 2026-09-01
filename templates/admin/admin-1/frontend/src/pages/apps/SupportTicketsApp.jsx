import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import AdvancedDataTable from '../../components/ui/AdvancedDataTable';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LifeBuoy, Plus, CheckCircle, Clock, X } from 'lucide-react';

export default function SupportTicketsApp() {
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [requester, setRequester] = useState('');
  const [priority, setPriority] = useState('High');

  const [tickets, setTickets] = useState([
    { id: 'TCK-901', subject: 'API Rate Limiting Issue on Node US-East', requester: 'Sarah Connor', priority: 'High', status: 'Open', created: '2026-08-19' },
    { id: 'TCK-902', subject: 'SSO SAML Integration Configuration Query', requester: 'Mike Chen', priority: 'Medium', status: 'Pending', created: '2026-08-18' },
    { id: 'TCK-903', subject: 'Invoice Billing Address Update Request', requester: 'Emily Park', priority: 'Low', status: 'Resolved', created: '2026-08-15' },
  ]);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!subject.trim() || !requester.trim()) return;

    const newTicket = {
      id: `TCK-${900 + tickets.length + 1}`,
      subject: subject.trim(),
      requester: requester.trim(),
      priority,
      status: 'Open',
      created: new Date().toISOString().split('T')[0]
    };

    setTickets([newTicket, ...tickets]);
    setSubject('');
    setRequester('');
    setShowModal(false);
  };

  const ticketVolumeData = [
    { day: 'Mon', open: 14, resolved: 18 },
    { day: 'Tue', open: 22, resolved: 20 },
    { day: 'Wed', open: 18, resolved: 25 },
    { day: 'Thu', open: 12, resolved: 16 },
    { day: 'Fri', open: 9, resolved: 14 },
  ];

  const columns = [
    { header: 'Ticket ID', accessor: 'id', cell: (row) => <span className="font-mono text-neura-cyan font-bold">{row.id}</span> },
    { header: 'Subject', accessor: 'subject', cell: (row) => <span className="font-bold text-white">{row.subject}</span> },
    { header: 'Requester', accessor: 'requester' },
    { header: 'Priority', accessor: 'priority', cell: (row) => (
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
        row.priority === 'High' ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-500/20 text-slate-300'
      }`}>
        {row.priority}
      </span>
    )},
    { header: 'Status', accessor: 'status', cell: (row) => (
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
        row.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' :
        row.status === 'Open' ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
      }`}>
        {row.status}
      </span>
    )},
  ];

  return (
    <Layout title="Helpdesk & Support Tickets" breadcrumb="Home / Applications / Support Tickets">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <LifeBuoy className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Customer Helpdesk & SLA Queue</span>
            </h2>
            <p className="text-xs text-slate-400">Track incoming client issues and resolution metrics.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Ticket</span>
          </button>
        </div>

        {/* Ticket Resolution AreaChart */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center">
            <LifeBuoy className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Support Ticket Volume & SLA Resolution Speed</span>
          </h3>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ticketVolumeData}>
                <defs>
                  <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="day" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Area type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={3} fill="url(#colorResolved)" name="Resolved Tickets" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <AdvancedDataTable
          columns={columns}
          data={tickets}
          title="Customer Support Tickets Queue"
          subtitle="Real-time helpdesk ticketing system."
        />
      </div>

      {/* Create Ticket Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Create Support Ticket</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Issue Subject</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. SSL Certificate Renewal Failure"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Requester Name</label>
                <input
                  type="text"
                  required
                  value={requester}
                  onChange={(e) => setRequester(e.target.value)}
                  placeholder="Client or User name"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
