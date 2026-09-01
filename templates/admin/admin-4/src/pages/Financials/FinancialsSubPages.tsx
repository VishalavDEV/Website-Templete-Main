import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Modal } from '../../components/Common/Modal';
import { useApp } from '../../context/AppContext';
import {
  CircleDollarSign,
  Receipt,
  FileText,
  CreditCard,
  PieChart as PieIcon,
  Search,
  Plus,
  Download,
  Send,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  ArrowUpRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Budget Allocations', path: '/financials/budgets', icon: CircleDollarSign },
  { name: 'Expense Tracking', path: '/financials/expenses', icon: Receipt },
  { name: 'Invoices & Billing', path: '/financials/invoices', icon: FileText },
  { name: 'Payments & Ledger', path: '/financials/payments', icon: CreditCard },
  { name: 'Profitability Margins', path: '/financials/profitability', icon: PieIcon }
];

export const FinancialsSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { invoices, expenses, projects, clients, payments, addInvoice, addToast } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [invoiceClient, setInvoiceClient] = useState('Acme Corp');
  const [invoiceAmount, setInvoiceAmount] = useState('25000');
  const [invoiceDueDate, setInvoiceDueDate] = useState('2026-09-30');

  const budgetBurnData = projects.slice(0, 5).map(p => ({
    project: p.name,
    budget: p.budget,
    spent: p.spent || 40000
  }));

  const handleCreateInvoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(invoiceAmount) || 25000;
    const selectedClient = clients.find(c => c.name === invoiceClient) || clients[0];
    addInvoice({
      clientId: selectedClient?.id || 'client-1',
      clientName: invoiceClient,
      projectId: 'proj-1',
      projectName: 'Enterprise Core System',
      issueDate: new Date().toISOString().substring(0, 10),
      dueDate: invoiceDueDate,
      items: [{ id: '1', description: 'Development Services', quantity: 1, unitPrice: amount, amount }],
      subtotal: amount,
      tax: Math.round(amount * 0.1),
      total: Math.round(amount * 1.1),
      status: 'Pending'
    });
    addToast(`Generated new invoice for ${invoiceClient} ($${amount.toLocaleString()})`, 'success');
    setIsCreateInvoiceOpen(false);
  };

  const financialTrendData = [
    { month: 'Oct', budget: 120000, expenses: 80000, revenue: 145000 },
    { month: 'Nov', budget: 140000, expenses: 95000, revenue: 168000 },
    { month: 'Dec', budget: 160000, expenses: 110000, revenue: 192000 },
    { month: 'Jan', budget: 180000, expenses: 125000, revenue: 215000 },
    { month: 'Feb', budget: 195000, expenses: 135000, revenue: 240000 }
  ];

  const expenseCategoryBreakdown = [
    { name: 'Cloud Infrastructure & Servers', value: 45, color: '#3b82f6' },
    { name: 'SaaS Software Licenses', value: 25, color: '#8b5cf6' },
    { name: 'Contractor & Vendor Retainers', value: 20, color: '#f59e0b' },
    { name: 'Travel & Client Hospitality', value: 10, color: '#10b981' }
  ];

  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = (inv.invoiceNumber || inv.id || '').toLowerCase().includes(searchTerm.toLowerCase()) || (inv.clientName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || inv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <CircleDollarSign className="w-6 h-6 text-blue-500" />
            Financial Management & Ledger Control
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Budget forecasts, operational expense audit, client invoices, and net margin profitability.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-app-secondary/40 p-1 rounded-xl border border-app overflow-x-auto">
          {SUB_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = subPage === tab.path.split('/')[2];
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* SUBPAGE 1: BUDGET ALLOCATIONS */}
      {(subPage === 'budgets' || !subPage) && (
        <div className="space-y-6">
          <Card title="Portfolio Budget Allocations vs Realized Burn Rate">
            <div className="space-y-4">
              {projects.slice(0, 5).map(p => {
                const pct = Math.round(((p.spent || 40000) / p.budget) * 100);
                return (
                  <div key={p.id} className="p-3.5 rounded-xl bg-app-secondary/30 border border-app space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs text-app-primary">{p.name}</span>
                        <span className="text-[11px] text-app-muted block">Client: {p.clientName}</span>
                      </div>
                      <div className="text-right font-mono text-xs">
                        <span className="text-emerald-400 font-bold">${(p.spent || 40000).toLocaleString()}</span>
                        <span className="text-app-muted"> / ${p.budget.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="w-full bg-app-hover rounded-full h-2 overflow-hidden">
                      <div className={`h-full rounded-full ${pct > 90 ? 'bg-rose-500' : 'bg-blue-500'}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card title="Project Budget Allocation vs Actual Spent ($ USD)">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetBurnData}>
                  <XAxis dataKey="project" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Legend />
                  <Bar dataKey="budget" fill="#3b82f6" name="Approved Budget ($)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="spent" fill="#f59e0b" name="Actual Spent ($)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      )}


      {/* SUBPAGE 2: EXPENSES */}
      {subPage === 'expenses' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Expense Category Breakdown">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={expenseCategoryBreakdown} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
                      {expenseCategoryBreakdown.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* SUBPAGE 3: INVOICES & BILLING */}
      {subPage === 'invoices' && (
        <Card title="Financial Client Invoices & Billing Ledger">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search invoice # or client..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="bg-app-hover border border-app rounded-xl px-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
              <Button size="sm" variant="primary" icon={<Plus className="w-3.5 h-3.5" />} onClick={() => setIsCreateInvoiceOpen(true)}>
                Create Invoice
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Invoice Number</th>
                    <th className="p-3">Client</th>
                    <th className="p-3">Total ($)</th>
                    <th className="p-3">Issue Date</th>
                    <th className="p-3">Due Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {filteredInvoices.map(inv => (
                    <tr key={inv.id} className="hover:bg-app-hover/50">
                      <td className="p-3 font-mono font-semibold text-blue-400">{inv.invoiceNumber || inv.id}</td>
                      <td className="p-3 font-semibold text-app-primary">{inv.clientName}</td>
                      <td className="p-3 font-mono font-bold text-emerald-400">${(inv.total || 15000).toLocaleString()}</td>
                      <td className="p-3 text-app-muted font-mono">{inv.issueDate}</td>
                      <td className="p-3 text-app-muted font-mono">{inv.dueDate}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          inv.status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400' :
                          inv.status === 'Overdue' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="p-3 text-right flex items-center justify-end gap-2">
                        <Button size="sm" variant="outline" icon={<Send className="w-3 h-3" />} onClick={() => addToast(`Sent invoice ${inv.invoiceNumber || inv.id} to client.`, 'success')}>
                          Send
                        </Button>
                        <Button size="sm" variant="ghost" icon={<Download className="w-3 h-3" />} onClick={() => addToast(`Downloaded PDF for ${inv.invoiceNumber || inv.id}`, 'info')}>
                          PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 4: PAYMENTS & LEDGER */}
      {subPage === 'payments' && (
        <Card title="Transaction History & Payment Gateway Ledger">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-3">Transaction Ref</th>
                  <th className="p-3">Client Name</th>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app font-mono">
                {payments.map(p => (
                  <tr key={p.id} className="hover:bg-app-hover/50">
                    <td className="p-3 font-semibold text-blue-400">{p.transactionReference || p.id}</td>
                    <td className="p-3 font-semibold text-app-primary font-sans">{p.clientName}</td>
                    <td className="p-3 text-app-secondary font-sans">{p.paymentMethod}</td>
                    <td className="p-3 text-emerald-400 font-bold">${p.amount.toLocaleString()}</td>
                    <td className="p-3 text-app-muted">{p.date}</td>
                    <td className="p-3 text-right font-sans">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SUBPAGE 5: PROFITABILITY MARGINS */}
      {subPage === 'profitability' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Monthly Cash Flow & Net Profitability ($ USD)">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialTrendData}>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Bar dataKey="expenses" fill="#f59e0b" name="Operating Expenses ($)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="budget" fill="#3b82f6" name="Allocated Budget ($)" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Total Revenue ($)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Gross vs Operating Profit Margins">
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={financialTrendData}>
                    <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Gross Revenue" />
                    <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={3} name="Operating Cost" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Create Invoice Modal */}
      <Modal
        isOpen={isCreateInvoiceOpen}
        onClose={() => setIsCreateInvoiceOpen(false)}
        title="Generate New Client Invoice"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsCreateInvoiceOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreateInvoiceSubmit}>
              Generate & Issue Invoice
            </Button>
          </>
        }
      >
        <form onSubmit={handleCreateInvoiceSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Select Client Account *</label>
            <select
              value={invoiceClient}
              onChange={e => setInvoiceClient(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
            >
              {clients.map(c => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.industry})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Invoice Amount ($ USD) *</label>
              <input
                type="number"
                required
                value={invoiceAmount}
                onChange={e => setInvoiceAmount(e.target.value)}
                placeholder="25000"
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block font-semibold text-app-primary mb-1">Payment Due Date</label>
              <input
                type="date"
                value={invoiceDueDate}
                onChange={e => setInvoiceDueDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};


