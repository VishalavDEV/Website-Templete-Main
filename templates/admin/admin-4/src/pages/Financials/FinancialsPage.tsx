import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Modal } from '../../components/Common/Modal';
import { Tabs } from '../../components/Common/Tabs';
import { CircleDollarSign, Plus, Download, CheckCircle2, FileText, CreditCard } from 'lucide-react';

export const FinancialsPage: React.FC = () => {
  const { expenses, addExpense, invoices, addInvoice, payments, addPayment, projects, clients } = useApp();

  const [activeTab, setActiveTab] = useState('expenses');

  // Modals state
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [expenseCategory, setExpenseCategory] = useState<'Software' | 'Travel' | 'Hardware' | 'Contractor' | 'Office' | 'Marketing' | 'Other'>('Software');
  const [expenseDesc, setExpenseDesc] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('1500');
  const [expenseProjectId, setExpenseProjectId] = useState(projects[0]?.id || 'p-1');

  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [invClientId, setInvClientId] = useState(clients[0]?.id || 'c-1');
  const [invProjectId, setInvProjectId] = useState(projects[0]?.id || 'p-1');
  const [invSubtotal, setInvSubtotal] = useState('45000');

  const handleCreateExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const prj = projects.find(p => p.id === expenseProjectId);
    addExpense({
      projectId: expenseProjectId,
      projectName: prj ? prj.name : 'General Project',
      category: expenseCategory,
      description: expenseDesc || 'Project expense item',
      amount: parseFloat(expenseAmount) || 100,
      date: new Date().toISOString().split('T')[0],
      submittedBy: 'Alexandra Vance',
      status: 'Approved'
    });
    setIsExpenseModalOpen(false);
    setExpenseDesc('');
  };

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    const client = clients.find(c => c.id === invClientId);
    const prj = projects.find(p => p.id === invProjectId);
    const sub = parseFloat(invSubtotal) || 10000;
    const tax = sub * 0.08;

    addInvoice({
      clientId: invClientId,
      clientName: client ? client.name : 'Client',
      projectId: invProjectId,
      projectName: prj ? prj.name : 'Project',
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: '2026-03-31',
      items: [{ id: 'item-1', description: 'Milestone Deliverables & Engineering Services', quantity: 1, unitPrice: sub, amount: sub }],
      subtotal: sub,
      tax,
      total: sub + tax,
      status: 'Pending'
    });
    setIsInvoiceModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Financial & Billing Hub</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Manage project budgets, log expenses, generate client invoices, and track incoming wire payments.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsExpenseModalOpen(true)}>
            Add Expense
          </Button>
          <Button variant="primary" size="sm" icon={<FileText className="w-4 h-4" />} onClick={() => setIsInvoiceModalOpen(true)}>
            Generate Invoice
          </Button>
        </div>
      </div>

      <Tabs
        tabs={[
          { id: 'expenses', label: 'Expenses Ledger', icon: <CircleDollarSign />, badge: expenses.length },
          { id: 'invoices', label: 'Invoices', icon: <FileText />, badge: invoices.length },
          { id: 'payments', label: 'Payments', icon: <CreditCard />, badge: payments.length }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab: Expenses */}
      {activeTab === 'expenses' && (
        <Card title="Recorded Project Expenses" noPadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-app-primary">
              <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
                <tr>
                  <th className="p-3.5 pl-5">Date</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Project</th>
                  <th className="p-3.5">Description</th>
                  <th className="p-3.5">Submitted By</th>
                  <th className="p-3.5">Amount</th>
                  <th className="p-3.5 text-right pr-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {expenses.map(e => (
                  <tr key={e.id} className="hover:bg-app-hover">
                    <td className="p-3.5 pl-5 font-mono text-app-secondary">{e.date}</td>
                    <td className="p-3.5"><Badge variant="purple">{e.category}</Badge></td>
                    <td className="p-3.5 font-semibold text-blue-400">{e.projectName}</td>
                    <td className="p-3.5 font-medium">{e.description}</td>
                    <td className="p-3.5 text-app-secondary">{e.submittedBy}</td>
                    <td className="p-3.5 font-bold text-amber-400">${e.amount.toLocaleString()}</td>
                    <td className="p-3.5 text-right pr-5"><Badge variant="completed">{e.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Tab: Invoices */}
      {activeTab === 'invoices' && (
        <Card title="Client Invoices" noPadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-app-primary">
              <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
                <tr>
                  <th className="p-3.5 pl-5">Invoice #</th>
                  <th className="p-3.5">Client</th>
                  <th className="p-3.5">Project</th>
                  <th className="p-3.5">Issue Date</th>
                  <th className="p-3.5">Due Date</th>
                  <th className="p-3.5">Total Amount</th>
                  <th className="p-3.5 text-right pr-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {invoices.map(inv => (
                  <tr key={inv.id} className="hover:bg-app-hover">
                    <td className="p-3.5 pl-5 font-mono font-bold text-blue-400">{inv.invoiceNumber}</td>
                    <td className="p-3.5 font-semibold">{inv.clientName}</td>
                    <td className="p-3.5 text-app-secondary">{inv.projectName}</td>
                    <td className="p-3.5 text-app-muted">{inv.issueDate}</td>
                    <td className="p-3.5 font-mono text-amber-400">{inv.dueDate}</td>
                    <td className="p-3.5 font-bold text-emerald-400">${inv.total.toLocaleString()}</td>
                    <td className="p-3.5 text-right pr-5">
                      <Badge variant={inv.status === 'Paid' ? 'completed' : 'warning'}>{inv.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Tab: Payments */}
      {activeTab === 'payments' && (
        <Card title="Completed Wire & Card Payments" noPadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-app-primary">
              <thead className="bg-app-secondary/60 border-b border-app text-app-muted uppercase font-semibold">
                <tr>
                  <th className="p-3.5 pl-5">Reference</th>
                  <th className="p-3.5">Invoice #</th>
                  <th className="p-3.5">Client</th>
                  <th className="p-3.5">Payment Method</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5 text-right pr-5">Amount Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app">
                {payments.map(p => (
                  <tr key={p.id} className="hover:bg-app-hover">
                    <td className="p-3.5 pl-5 font-mono text-xs font-semibold text-emerald-400">{p.transactionReference}</td>
                    <td className="p-3.5 font-mono">{p.invoiceNumber}</td>
                    <td className="p-3.5 font-semibold">{p.clientName}</td>
                    <td className="p-3.5 text-app-secondary">{p.paymentMethod}</td>
                    <td className="p-3.5 text-app-muted">{p.date}</td>
                    <td className="p-3.5 text-right pr-5 font-bold text-emerald-400">${p.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Add Expense Modal */}
      <Modal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
        title="Log Project Expense"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsExpenseModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreateExpense}>
              Submit Expense
            </Button>
          </>
        }
      >
        <form onSubmit={handleCreateExpense} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Project *</label>
            <select
              value={expenseProjectId}
              onChange={e => setExpenseProjectId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Category</label>
              <select
                value={expenseCategory}
                onChange={e => setExpenseCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              >
                <option value="Software">Software</option>
                <option value="Travel">Travel</option>
                <option value="Hardware">Hardware</option>
                <option value="Contractor">Contractor</option>
                <option value="Office">Office</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Amount ($)</label>
              <input
                type="number"
                value={expenseAmount}
                onChange={e => setExpenseAmount(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Description</label>
            <input
              type="text"
              value={expenseDesc}
              onChange={e => setExpenseDesc(e.target.value)}
              placeholder="e.g. AWS Production Sandbox Cluster Subscription"
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </form>
      </Modal>

      {/* Add Invoice Modal */}
      <Modal
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
        title="Generate Client Invoice"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsInvoiceModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreateInvoice}>
              Generate & Issue
            </Button>
          </>
        }
      >
        <form onSubmit={handleCreateInvoice} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Client *</label>
            <select
              value={invClientId}
              onChange={e => setInvClientId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              {clients.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Project</label>
            <select
              value={invProjectId}
              onChange={e => setInvProjectId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            >
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Subtotal Amount ($ USD)</label>
            <input
              type="number"
              value={invSubtotal}
              onChange={e => setInvSubtotal(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};
