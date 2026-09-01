import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { DollarSign, TrendingUp, TrendingDown, Plus, Download, Wallet, CreditCard, ShieldCheck, PieChart as PieIcon, BarChart3 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useToast } from '../../context/ToastContext';
import { INITIAL_TRANSACTIONS } from '../../data/mockData';
import { storageService } from '../../services/storageService';
import { Transaction } from '../../types';

interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  vendor: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

const INITIAL_EXPENSES: Expense[] = [
  { id: 'exp_1', title: 'AWS Cloud Server Hosting', category: 'Infrastructure', amount: 4850.00, date: '2026-08-20', vendor: 'Amazon Web Services', status: 'Approved' },
  { id: 'exp_2', title: 'Google Workspace Licenses', category: 'Software', amount: 1200.00, date: '2026-08-22', vendor: 'Google LLC', status: 'Approved' },
  { id: 'exp_3', title: 'Q3 Executive Conference Travel', category: 'Travel', amount: 3400.00, date: '2026-08-23', vendor: 'Delta Airlines', status: 'Pending' },
];

const CASH_FLOW_SERIES = [
  { month: 'Jan', inflow: 45000, outflow: 28000, netFlow: 17000, balance: 117000 },
  { month: 'Feb', inflow: 58000, outflow: 32000, netFlow: 26000, balance: 143000 },
  { month: 'Mar', inflow: 64000, outflow: 31000, netFlow: 33000, balance: 176000 },
  { month: 'Apr', inflow: 78000, outflow: 40000, netFlow: 38000, balance: 214000 },
  { month: 'May', inflow: 92000, outflow: 45000, netFlow: 47000, balance: 261000 },
  { month: 'Jun', inflow: 110000, outflow: 52000, netFlow: 58000, balance: 319000 },
  { month: 'Jul', inflow: 125000, outflow: 58000, netFlow: 67000, balance: 386000 },
  { month: 'Aug', inflow: 148500, outflow: 62000, netFlow: 86500, balance: 472500 },
];

const INCOME_TREND_DATA = [
  { month: 'Jan', subscriptions: 28000, invoices: 17000 },
  { month: 'Feb', subscriptions: 34000, invoices: 24000 },
  { month: 'Mar', subscriptions: 39000, invoices: 25000 },
  { month: 'Apr', subscriptions: 45000, invoices: 33000 },
  { month: 'May', subscriptions: 52000, invoices: 40000 },
  { month: 'Jun', subscriptions: 65000, invoices: 45000 },
  { month: 'Jul', subscriptions: 72000, invoices: 53000 },
  { month: 'Aug', subscriptions: 84500, invoices: 64000 },
];

const PROFIT_LOSS_BREAKDOWN_DATA = [
  { name: 'Gross Revenue', value: 148500, fill: '#10b981' },
  { name: 'COGS', value: 24800, fill: '#f43f5e' },
  { name: 'Operating Expenses', value: 37200, fill: '#ef4444' },
  { name: 'Net Profit (EBIT)', value: 86500, fill: '#0c93e7' },
];

const EXPENSE_CATEGORY_DATA = [
  { category: 'Infrastructure', amount: 24800 },
  { category: 'Software Licenses', amount: 14200 },
  { category: 'Payroll & HR', amount: 18500 },
  { category: 'Travel & Events', amount: 4500 },
];

const BUDGET_VARIANCE_DATA = [
  { dept: 'Engineering', budget: 3500000, spent: 2275000 },
  { dept: 'Sales', budget: 2400000, spent: 1392000 },
  { dept: 'Executive', budget: 1200000, spent: 780000 },
  { dept: 'HR', budget: 950000, spent: 380000 },
];

const TAX_COLLECTION_DATA = [
  { quarter: 'Q1', salesTax: 18500, corpTax: 28000 },
  { quarter: 'Q2', salesTax: 21400, corpTax: 32500 },
  { quarter: 'Q3', salesTax: 24800, corpTax: 38500 },
];

const formatCurrencyTick = (val: number) => {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
  return `$${val}`;
};

export const CashFlowPage: React.FC = () => {
  const { showToast } = useToast();
  const [dateRange, setDateRange] = useState<'month' | 'quarter' | 'year'>('year');

  const handleExportStatement = () => {
    const csvContent = "data:text/csv;charset=utf-8,Month,Inflow,Outflow,NetFlow,Balance\nJan,45000,28000,17000,117000\nFeb,58000,32000,26000,143000\nMar,64000,31000,33000,176000\nApr,78000,40000,38000,214000\nMay,92000,45000,47000,261000\nJun,110000,52000,58000,319000\nJul,125000,58000,67000,386000\nAug,148500,62000,86500,472500";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "cash_flow_statement_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Export Complete', 'Exported Cash Flow Statement CSV report.');
  };

  const columns: Column<any>[] = [
    { key: 'date', header: 'Transaction Date', sortable: true },
    { key: 'description', header: 'Description / Payee' },
    { key: 'category', header: 'Category', sortable: true },
    {
      key: 'type',
      header: 'Flow Type',
      sortable: true,
      render: (t) => <Badge variant={t.type === 'Income' ? 'success' : 'danger'}>{t.type}</Badge>,
    },
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
    { key: 'paymentMethod', header: 'Clearing Method' },
    { key: 'status', header: 'Status', render: (t) => <Badge variant="success">{t.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cash Flow Statement"
        subtitle="Inflow vs outflow liquidity forecasts and operating cash reserves."
        actions={
          <button onClick={handleExportStatement} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Statement
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Opening Cash Balance" value="$100,000" change={0} icon={Wallet} />
        <StatCard title="Total Cash Inflow" value="$148,500" change={18.4} icon={TrendingUp} />
        <StatCard title="Total Cash Outflow" value="$62,000" change={-5.2} trend="up" icon={TrendingDown} />
        <StatCard title="Net Cash Flow" value="+$86,500" change={24.1} icon={DollarSign} />
        <StatCard title="Closing Cash Balance" value="$472,500" change={28.5} icon={Wallet} />
        <StatCard title="Operating Cash" value="$380,000" change={15.2} icon={CreditCard} />
        <StatCard title="Investing Cash" value="-$45,000" change={-2.0} trend="down" icon={DollarSign} />
        <StatCard title="Financing Cash" value="+$50,000" change={10.0} icon={ShieldCheck} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Cash Inflow vs Cash Outflow Forecast</h3>
          <div className="flex gap-2">
            {(['month', 'quarter', 'year'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setDateRange(r)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize ${dateRange === r ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CASH_FLOW_SERIES} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="inflowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="outflowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="inflow" stroke="#10b981" strokeWidth={3} fill="url(#inflowGrad)" name="Cash Inflow ($)" />
              <Area type="monotone" dataKey="outflow" stroke="#f43f5e" strokeWidth={2} fill="url(#outflowGrad)" name="Cash Outflow ($)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Cumulative Liquidity Cash Reserve Forecast</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CASH_FLOW_SERIES} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="balance" stroke="#0c93e7" strokeWidth={3} name="Total Cash Balance ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={INITIAL_TRANSACTIONS} keyExtractor={(t) => t.id} searchPlaceholder="Search cash flow transactions..." />
    </div>
  );
};

export const IncomePage: React.FC = () => {
  const { showToast } = useToast();
  const [incomes, setIncomes] = useState<Transaction[]>(() => storageService.get<Transaction[]>('app_incomes', INITIAL_TRANSACTIONS.filter((t) => t.type === 'Income')));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Sales Invoice');
  const [amount, setAmount] = useState(12000);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleRecordIncome = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    const newTrx: Transaction = {
      id: `trx_${Date.now()}`,
      reference: `TRX-${Math.floor(1000 + Math.random() * 9000)}-INC`,
      type: 'Income',
      category,
      amount,
      date: new Date().toISOString().split('T')[0],
      status: 'Completed',
      description,
      paymentMethod,
    };
    const updated = [newTrx, ...incomes];
    setIncomes(updated);
    storageService.set('app_incomes', updated);
    showToast('Income Recorded', `Recorded inbound income +$${amount.toLocaleString()}`);
    setIsModalOpen(false);
    setDescription('');
  };

  const columns: Column<Transaction>[] = [
    { key: 'reference', header: 'Reference', sortable: true },
    { key: 'description', header: 'Description' },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'paymentMethod', header: 'Clearing Method' },
    { key: 'date', header: 'Date', sortable: true },
    { key: 'amount', header: 'Income Amount', sortable: true, render: (t) => <span className="font-extrabold text-emerald-600 dark:text-emerald-400">+${t.amount.toFixed(2)}</span> },
    { key: 'status', header: 'Status', render: (t) => <Badge variant="success">{t.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Income Tracker & Inbound Revenue"
        subtitle="Track incoming cash flow, customer subscription payments, and invoice collections."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Record Income
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total YTD Income" value={`$${(148500 + incomes.reduce((acc, i) => acc + i.amount, 0) - 13995.99).toLocaleString()}`} change={18.4} icon={DollarSign} />
        <StatCard title="Collected This Month" value="$42,800" change={12.1} icon={TrendingUp} />
        <StatCard title="Pending Receivables" value="$16,196" change={-2.4} trend="down" icon={DollarSign} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Monthly Inbound Revenue Streams</h3>
        <p className="text-xs text-slate-500 mb-4">Subscription ARR vs One-time Commercial Invoice collections ($).</p>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={INCOME_TREND_DATA} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="subGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0c93e7" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#0c93e7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="subscriptions" stroke="#10b981" strokeWidth={3} fill="url(#subGrad)" name="Recurring Subscriptions ($)" />
              <Area type="monotone" dataKey="invoices" stroke="#0c93e7" strokeWidth={2} fill="url(#invGrad)" name="Commercial Invoices ($)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={incomes} keyExtractor={(t) => t.id} searchPlaceholder="Search income records..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Record Inbound Revenue Item">
        <form onSubmit={handleRecordIncome} className="space-y-4">
          <FormInput label="Description / Source" required value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Category" required value={category} onChange={(e) => setCategory(e.target.value)} />
            <FormInput label="Income Amount ($)" type="number" required value={amount.toString()} onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Income</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const ExpensesPage: React.FC = () => {
  const { showToast } = useToast();
  const [expenses, setExpenses] = useState<Expense[]>(INITIAL_EXPENSES);

  const handleStatusChange = (id: string, status: Expense['status']) => {
    setExpenses((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
    showToast('Expense Updated', `Expense status updated to ${status}`);
  };

  const columns: Column<Expense>[] = [
    { key: 'title', header: 'Expense Title', sortable: true },
    { key: 'category', header: 'Category', sortable: true },
    { key: 'vendor', header: 'Vendor' },
    { key: 'date', header: 'Date', sortable: true },
    { key: 'amount', header: 'Amount', sortable: true, render: (e) => <span className="font-extrabold text-slate-900 dark:text-white">${e.amount.toFixed(2)}</span> },
    { key: 'status', header: 'Status', sortable: true, render: (e) => <Badge variant={e.status === 'Approved' ? 'success' : e.status === 'Pending' ? 'warning' : 'danger'}>{e.status}</Badge> },
    {
      key: 'actions',
      header: 'Approval',
      render: (e) => (
        <div className="flex items-center gap-2">
          {e.status === 'Pending' && (
            <>
              <button onClick={() => handleStatusChange(e.id, 'Approved')} className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-lg">Approve</button>
              <button onClick={() => handleStatusChange(e.id, 'Rejected')} className="px-2 py-1 bg-rose-50 text-rose-600 text-xs font-semibold rounded-lg">Reject</button>
            </>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Expense Management" subtitle="Company disbursements, vendor invoices, and approval workflows." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Operating Expenses" value="$62,000" change={-5.2} trend="up" icon={TrendingDown} />
        <StatCard title="Approved Disbursements" value="$58,600" change={4.2} icon={ShieldCheck} />
        <StatCard title="Pending Approvals" value="$3,400" change={-10.0} trend="up" icon={CreditCard} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Expenditure by Category Breakdown</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={EXPENSE_CATEGORY_DATA} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="category" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="amount" fill="#f43f5e" name="Expense Amount ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={expenses} keyExtractor={(e) => e.id} searchPlaceholder="Search expenses..." />
    </div>
  );
};

export const ProfitLossPage: React.FC = () => {
  const totalIncome = 148500.00;
  const totalExpenses = 62000.00;
  const netProfit = totalIncome - totalExpenses;
  const margin = ((netProfit / totalIncome) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <PageHeader title="Profit & Loss Statement (P&L)" subtitle="Dynamically calculated P&L summary based on verified income and expense records." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Revenue (Income)" value={`$${totalIncome.toLocaleString()}`} change={18.4} icon={DollarSign} />
        <StatCard title="Total Operating Expenses" value={`$${totalExpenses.toLocaleString()}`} change={-5.2} trend="up" icon={TrendingDown} />
        <StatCard title="Net Operating Profit" value={`$${netProfit.toLocaleString()} (${margin}%)`} change={24.1} icon={TrendingUp} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">P&L Financial Breakdown Comparison</h3>
        <p className="text-xs text-slate-500 mb-4">Comparison of gross revenue, COGS, operating expenses, and net profit margin.</p>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PROFIT_LOSS_BREAKDOWN_DATA} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="value" name="Amount ($)" radius={[4, 4, 0, 0]}>
                {PROFIT_LOSS_BREAKDOWN_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const BudgetsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Department Budgets" subtitle="Fiscal year allocation, variance tracking, and expenditure limits." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Budget Allocated" value="$8,050,000" change={10.0} icon={DollarSign} />
        <StatCard title="Total Spent YTD" value="$4,820,000" change={14.1} icon={CreditCard} />
        <StatCard title="Remaining Budget" value="$3,230,000" change={5.0} icon={Wallet} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Department Budget vs Actual Expenditure</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={BUDGET_VARIANCE_DATA} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="dept" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="budget" fill="#0c93e7" name="Budget ($)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="spent" fill="#6366f1" name="Spent YTD ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export const TaxesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Taxes & Compliance" subtitle="Corporate tax liabilities, sales tax collection, and filing deadlines." />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Sales Tax Collected" value="$24,800" change={12.4} icon={DollarSign} />
        <StatCard title="Corporate Income Tax Est." value="$38,500" change={8.1} icon={CreditCard} />
        <StatCard title="Tax Exemption Status" value="SOC2 Compliant" change={0} icon={ShieldCheck} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quarterly Tax Collection Trend</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={TAX_COLLECTION_DATA} margin={{ top: 10, right: 25, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="quarter" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis width={65} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={formatCurrencyTick} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="salesTax" fill="#10b981" name="Sales Tax ($)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="corpTax" fill="#6366f1" name="Corporate Tax ($)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
