import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { ticketService } from '../../services/ticketService';
import { Ticket } from '../../types';
import { useToast } from '../../context/ToastContext';
import { Ticket as TicketIcon, Clock, CheckCircle2, AlertTriangle, BookOpen, HelpCircle, ShieldCheck, Search, Plus, ArrowLeft } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SLA_TREND_DATA = [
  { month: 'Jan', compliance: 99.2, target: 99.5, responseMin: 18 },
  { month: 'Feb', compliance: 99.4, target: 99.5, responseMin: 15 },
  { month: 'Mar', compliance: 99.6, target: 99.5, responseMin: 14 },
  { month: 'Apr', compliance: 99.5, target: 99.5, responseMin: 16 },
  { month: 'May', compliance: 99.7, target: 99.5, responseMin: 13 },
  { month: 'Jun', compliance: 99.8, target: 99.5, responseMin: 12 },
];

interface SLAIncident {
  id: string;
  ticketRef: string;
  client: string;
  slaTarget: string;
  actualResponse: string;
  variance: string;
  status: 'Compliant' | 'Breached';
}

const SLA_INCIDENTS_DATA: SLAIncident[] = [
  { id: '1', ticketRef: 'TKT-9901', client: 'Acme Corporation', slaTarget: '15 min (Urgent)', actualResponse: '12 min', variance: '-3 min', status: 'Compliant' },
  { id: '2', ticketRef: 'TKT-9902', client: 'Nexus Healthcare Labs', slaTarget: '60 min (High)', actualResponse: '45 min', variance: '-15 min', status: 'Compliant' },
  { id: '3', ticketRef: 'TKT-9884', client: 'Cyberdyne Financial', slaTarget: '15 min (Urgent)', actualResponse: '18 min', variance: '+3 min', status: 'Breached' },
];

export const TicketsPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [tickets, setTickets] = useState<Ticket[]>(() => ticketService.getTickets());

  const handleStatusTransition = (id: string, newStatus: Ticket['status']) => {
    const updated = ticketService.updateTicketStatus(id, newStatus);
    setTickets(ticketService.getTickets());
    showToast('Ticket Status Updated', `Ticket ${updated.ticketNumber} marked as ${newStatus}`);
  };

  const columns: Column<Ticket>[] = [
    { key: 'ticketNumber', header: 'Ticket #', sortable: true },
    {
      key: 'subject',
      header: 'Subject',
      sortable: true,
      render: (t) => (
        <span onClick={() => navigate(`/support/tickets/${t.id}`)} className="font-bold text-slate-900 dark:text-white hover:text-brand-600 cursor-pointer">
          {t.subject}
        </span>
      ),
    },
    { key: 'customerName', header: 'Customer', sortable: true },
    {
      key: 'priority',
      header: 'Priority',
      sortable: true,
      render: (t) => (
        <Badge variant={t.priority === 'Urgent' ? 'danger' : t.priority === 'High' ? 'warning' : 'info'}>
          {t.priority}
        </Badge>
      ),
    },
    { key: 'assignedTo', header: 'Assignee' },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (t) => (
        <Badge variant={t.status === 'Resolved' ? 'success' : t.status === 'In Progress' ? 'info' : 'warning'}>
          {t.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (t) => (
        <div className="flex items-center gap-2">
          {t.status === 'Open' && (
            <button onClick={() => handleStatusTransition(t.id, 'In Progress')} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg">
              In Progress
            </button>
          )}
          {t.status === 'In Progress' && (
            <button onClick={() => handleStatusTransition(t.id, 'Resolved')} className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-lg">
              Resolve
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Support Desk Tickets" subtitle="Customer tickets, SLA escalation levels, priority categories, and response tracking." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Open Support Tickets" value={tickets.filter((t) => t.status !== 'Resolved').length} change={-14.2} trend="up" icon={TicketIcon} />
        <StatCard title="Urgent SLA Tickets" value="1 ticket" change={0} icon={AlertTriangle} />
        <StatCard title="Resolution Time (MTTR)" value="1.8 hours" change={-24.1} trend="up" icon={Clock} />
      </div>
      <DataTable columns={columns} data={tickets} keyExtractor={(t) => t.id} searchPlaceholder="Search tickets..." />
    </div>
  );
};

export const TicketDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ticket = ticketService.getTicketById(id || '');

  if (!ticket) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Ticket Not Found</h2>
        <button onClick={() => navigate('/support/tickets')} className="mt-4 px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl">
          Back to Tickets
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/support/tickets')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
        <ArrowLeft className="w-4 h-4" /> Back to Tickets
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-bold text-brand-600">{ticket.ticketNumber} • {ticket.category}</span>
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">{ticket.subject}</h1>
            <p className="text-xs text-slate-500 mt-1">Customer: {ticket.customerName} | Assigned: {ticket.assignedTo}</p>
          </div>
          <Badge variant={ticket.status === 'Resolved' ? 'success' : 'warning'}>{ticket.status}</Badge>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-300 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">{ticket.description}</p>
      </div>
    </div>
  );
};

export const KnowledgeBasePage: React.FC = () => {
  const { showToast } = useToast();
  return (
    <div className="space-y-6">
      <PageHeader title="Knowledge Base & Documentation" subtitle="Self-service technical documentation, troubleshooting articles, and deployment guides." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Published Articles" value="142 articles" change={8.4} icon={BookOpen} />
        <StatCard title="Self-Service Resolution" value="78.4%" change={12.1} icon={CheckCircle2} />
        <StatCard title="Total Monthly Views" value="28,400" change={22.0} icon={Search} />
      </div>
    </div>
  );
};

export const FAQsPage: React.FC = () => (
  <div className="space-y-6">
    <PageHeader title="Frequently Asked Questions (FAQs)" subtitle="Common client queries regarding billing, API limits, SLAs, and technical setup." />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <StatCard title="Configured FAQ Entries" value="38 entries" change={0} icon={HelpCircle} />
      <StatCard title="Helpful Feedback Rate" value="96.2%" change={2.1} icon={CheckCircle2} />
      <StatCard title="Top Category" value="Billing & Invoicing" change={0} icon={BookOpen} />
    </div>
  </div>
);

export const SLAPage: React.FC = () => {
  const incidentColumns: Column<SLAIncident>[] = [
    { key: 'ticketRef', header: 'Ticket Ref', sortable: true },
    { key: 'client', header: 'Client Account', sortable: true },
    { key: 'slaTarget', header: 'Target Threshold' },
    { key: 'actualResponse', header: 'Actual Response' },
    { key: 'variance', header: 'Variance' },
    { key: 'status', header: 'Outcome', render: (i) => <Badge variant={i.status === 'Compliant' ? 'success' : 'danger'}>{i.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Service Level Agreement (SLA) & Performance" subtitle="Contractual SLA compliance, ticket response time targets, and uptime guarantees." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="SLA Compliance Rate" value="99.8%" change={0.4} icon={ShieldCheck} />
        <StatCard title="Avg First Response Time" value="12 minutes" change={-18.0} trend="up" icon={Clock} />
        <StatCard title="System Uptime SLA" value="99.99%" change={0} icon={CheckCircle2} />
      </div>

      {/* SLA Trend Recharts Chart */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Monthly SLA Compliance vs Target Rate</h3>
        <p className="text-xs text-slate-500 mb-4">Historical SLA percentage vs required contractual benchmark (99.5%).</p>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={SLA_TREND_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis domain={[98.5, 100]} tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="compliance" stroke="#10b981" strokeWidth={3} name="Actual SLA Compliance (%)" />
              <Line type="monotone" dataKey="target" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2} name="Target (99.5%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SLA Incident Audit Table */}
      <DataTable columns={incidentColumns} data={SLA_INCIDENTS_DATA} keyExtractor={(i) => i.id} searchPlaceholder="Search SLA response logs..." />
    </div>
  );
};
