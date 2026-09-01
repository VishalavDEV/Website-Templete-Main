import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { invoiceService } from '../../services/orderService';
import { INITIAL_QUOTATIONS, INITIAL_TRANSACTIONS } from '../../data/mockData';
import { Invoice, Quotation, Transaction } from '../../types';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';
import { CheckCircle2, Download, Printer, CreditCard, DollarSign, FileText, Plus, ShieldCheck, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PAYMENT_TREND = [
  { day: 'Mon', stripe: 14200, card: 8400, wire: 12000 },
  { day: 'Tue', stripe: 18500, card: 9200, wire: 15000 },
  { day: 'Wed', stripe: 21000, card: 11400, wire: 18000 },
  { day: 'Thu', stripe: 24500, card: 12800, wire: 22000 },
  { day: 'Fri', stripe: 29000, card: 14500, wire: 26000 },
];

export const InvoicesPage: React.FC = () => {
  const { showToast } = useToast();
  const [invoices, setInvoices] = useState<Invoice[]>(() => invoiceService.getInvoices());

  const handleMarkPaid = (id: string) => {
    const updated = invoiceService.markAsPaid(id);
    setInvoices(invoiceService.getInvoices());
    showToast('Invoice Paid', `Invoice ${updated.invoiceNumber} marked as Paid`);
  };

  const columns: Column<Invoice>[] = [
    { key: 'invoiceNumber', header: 'Invoice #', sortable: true },
    { key: 'customerName', header: 'Customer', sortable: true },
    { key: 'issueDate', header: 'Issue Date', sortable: true },
    { key: 'dueDate', header: 'Due Date', sortable: true },
    {
      key: 'totalAmount',
      header: 'Total Amount',
      sortable: true,
      render: (i) => <span className="font-extrabold text-slate-900 dark:text-white">${i.totalAmount.toFixed(2)}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (i) => <Badge variant={i.status === 'Paid' ? 'success' : 'danger'}>{i.status}</Badge>,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (i) => (
        <div className="flex items-center gap-2">
          {i.status !== 'Paid' && (
            <button
              onClick={() => handleMarkPaid(i.id)}
              className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-200 flex items-center gap-1 hover:bg-emerald-100"
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Mark Paid
            </button>
          )}
          <button onClick={() => showToast('Downloading Invoice', `Downloading ${i.invoiceNumber}.pdf`)} className="p-1.5 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-slate-100" title="Download PDF">
            <Download className="w-4 h-4" />
          </button>
          <button onClick={() => window.print()} className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100" title="Print">
            <Printer className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Invoices & Billing" subtitle="Generate commercial invoices, track receivables, and record payments." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Invoiced Value" value="$28,397" change={14.8} icon={FileText} />
        <StatCard title="Collected Receivables" value="$12,200" change={18.2} icon={CheckCircle2} />
        <StatCard title="Outstanding Unpaid Invoices" value="$16,196" change={-4.2} trend="down" icon={DollarSign} />
      </div>
      <DataTable columns={columns} data={invoices} keyExtractor={(i) => i.id} searchPlaceholder="Search invoices..." />
    </div>
  );
};

export const QuotationsPage: React.FC = () => {
  const { showToast } = useToast();
  const [quotations, setQuotations] = useState<Quotation[]>(() => storageService.get<Quotation[]>('app_quotations', INITIAL_QUOTATIONS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [total, setTotal] = useState(25000);

  const handleCreateQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) return;
    const newQuote: Quotation = {
      id: `quo_${Date.now()}`,
      quoteNumber: `QUO-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      date: new Date().toISOString().split('T')[0],
      expiryDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      total,
      status: 'Sent',
    };
    const updated = [newQuote, ...quotations];
    setQuotations(updated);
    storageService.set('app_quotations', updated);
    showToast('Quotation Created', `Issued quotation ${newQuote.quoteNumber} to ${customerName}`);
    setIsModalOpen(false);
    setCustomerName('');
  };

  const columns: Column<Quotation>[] = [
    { key: 'quoteNumber', header: 'Quote #', sortable: true },
    { key: 'customerName', header: 'Customer', sortable: true },
    { key: 'date', header: 'Issued Date', sortable: true },
    { key: 'expiryDate', header: 'Expiry Date', sortable: true },
    {
      key: 'total',
      header: 'Quote Value',
      sortable: true,
      render: (q) => <span className="font-extrabold text-slate-900 dark:text-white">${q.total.toLocaleString()}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (q) => <Badge variant={q.status === 'Accepted' ? 'success' : q.status === 'Sent' ? 'info' : 'danger'}>{q.status}</Badge>,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (q) => (
        <button onClick={() => showToast('Quote Download', `Downloading ${q.quoteNumber}.pdf`)} className="px-3 py-1 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-semibold rounded-lg flex items-center gap-1 hover:bg-brand-100">
          <Download className="w-3.5 h-3.5" /> PDF
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Quotations & Proposals"
        subtitle="Client price quotes, commercial proposals, acceptance tracking, and expiry dates."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Quotation
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Quotation Volume" value={`$${quotations.reduce((acc, q) => acc + q.total, 0).toLocaleString()}`} change={12.4} icon={FileText} />
        <StatCard title="Accepted Proposals" value="$28,500" change={24.1} icon={CheckCircle2} />
        <StatCard title="Active Proposals" value={quotations.length.toString()} change={5.2} icon={ShieldCheck} />
      </div>

      <DataTable columns={columns} data={quotations} keyExtractor={(q) => q.id} searchPlaceholder="Search quotations..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Quotation Proposal">
        <form onSubmit={handleCreateQuotation} className="space-y-4">
          <FormInput label="Customer Name" required value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          <FormInput label="Quotation Amount ($)" type="number" required value={total.toString()} onChange={(e) => setTotal(Number(e.target.value))} />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Quote</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const PaymentsPage: React.FC = () => {
  const { showToast } = useToast();
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSyncGateways = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      showToast('Gateways Synchronized', 'Stripe, Credit Card, and Bank Wire ledgers fully synced (99.99% match).');
    }, 1200);
  };

  const columns: Column<Transaction>[] = [
    { key: 'reference', header: 'Reference ID', sortable: true },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'paymentMethod', header: 'Payment Method', sortable: true },
    { key: 'date', header: 'Clearing Date', sortable: true },
    {
      key: 'amount',
      header: 'Amount Paid',
      sortable: true,
      render: (p) => <span className="font-extrabold text-emerald-600 dark:text-emerald-400">+${p.amount.toFixed(2)}</span>,
    },
    {
      key: 'status',
      header: 'Gateway Status',
      sortable: true,
      render: (p) => <Badge variant="success">{p.status}</Badge>,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Payment Receipts & Clearing"
        subtitle="Stripe, Credit Card, and wire transfer payment reconciliation and gateway logs."
        actions={
          <button onClick={handleSyncGateways} disabled={isSyncing} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} /> {isSyncing ? 'Syncing...' : 'Sync Gateways'}
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Payments Cleared" value="$13,995.99" change={16.4} icon={CreditCard} />
        <StatCard title="Stripe Processing Volume" value="$2,698.99" change={12.0} icon={DollarSign} />
        <StatCard title="Direct Wire Transfers" value="$11,297.00" change={20.1} icon={ShieldCheck} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Daily Gateway Clearing Volume</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PAYMENT_TREND}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="day" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="stripe" fill="#0c93e7" name="Stripe" radius={[4, 4, 0, 0]} />
              <Bar dataKey="card" fill="#6366f1" name="Credit Card" radius={[4, 4, 0, 0]} />
              <Bar dataKey="wire" fill="#10b981" name="Bank Wire" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={INITIAL_TRANSACTIONS} keyExtractor={(p) => p.id} searchPlaceholder="Search payment receipts..." />
    </div>
  );
};

export const TransactionsPage: React.FC = () => {
  const columns: Column<Transaction>[] = [
    { key: 'reference', header: 'Transaction Ref', sortable: true },
    { key: 'description', header: 'Description' },
    {
      key: 'type',
      header: 'Type',
      sortable: true,
      render: (t) => <Badge variant={t.type === 'Income' ? 'success' : 'danger'}>{t.type}</Badge>,
    },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'date', header: 'Date', sortable: true },
    {
      key: 'amount',
      header: 'Amount',
      sortable: true,
      render: (t) => (
        <span className={`font-extrabold ${t.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'}`}>
          {t.type === 'Income' ? '+' : '-'}${t.amount.toFixed(2)}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (t) => <Badge variant="success">{t.status}</Badge>,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Financial Transactions Ledger" subtitle="Unified global transaction ledger for inbound revenue and outbound operating expenses." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Net Ledger Flow" value="+$9,145.99" change={14.2} icon={DollarSign} />
        <StatCard title="Total Credit Income" value="$13,995.99" change={18.0} icon={CheckCircle2} />
        <StatCard title="Total Debit Expenses" value="$4,850.00" change={-5.1} trend="up" icon={CreditCard} />
      </div>

      <DataTable columns={columns} data={INITIAL_TRANSACTIONS} keyExtractor={(t) => t.id} searchPlaceholder="Search ledger transactions..." />
    </div>
  );
};
