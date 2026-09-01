import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Transaction } from '../../data/initialData';
import { MetricCard, StatusBadge, DataTable, Modal } from '../ui/GlobalComponents';
import { ChartCard } from '../ui/ChartCard';
import { ArrowUpRight, ArrowDownRight, CreditCard, Plus } from 'lucide-react';

export const Finance: React.FC = () => {
  const { transactions, createTransaction } = useApp();

  const [searchVal, setSearchVal] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  // New Transaction Form state
  const [isTxOpen, setIsTxOpen] = useState(false);
  const [txDesc, setTxDesc] = useState('');
  const [txType, setTxType] = useState<'Income' | 'Expense'>('Expense');
  const [txCat, setTxCat] = useState('Cloud Infrastructure');
  const [txAmount, setTxAmount] = useState(150);

  const handleTxSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!txDesc.trim() || txAmount <= 0) return;

    createTransaction({
      description: txDesc,
      type: txType,
      category: txCat,
      amount: Number(txAmount),
      status: 'Completed',
      reference: `SPR-TX-${Math.floor(Math.random() * 900 + 100)}`
    });

    setTxDesc('');
    setTxAmount(150);
    setIsTxOpen(false);
  };

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = tx.description.toLowerCase().includes(searchVal.toLowerCase()) || 
                          tx.category.toLowerCase().includes(searchVal.toLowerCase()) ||
                          tx.reference.toLowerCase().includes(searchVal.toLowerCase());
    const matchesType = typeFilter === 'all' || tx.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const totalIncome = transactions.filter(t => t.type === 'Income' && t.status === 'Completed').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'Expense' && t.status === 'Completed').reduce((sum, t) => sum + t.amount, 0);
  const netBurnRate = totalIncome - totalExpense;

  const monthChartData = [
    { label: 'Apr 26', value: 92000, value2: 24000 },
    { label: 'May 26', value: 110000, value2: 32000 },
    { label: 'Jun 26', value: 145000, value2: 38000 },
    { label: 'Jul 26', value: 130000, value2: 30000 },
    { label: 'Aug 26', value: totalIncome, value2: totalExpense },
  ];

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Finance Ledgers & Invoices
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Review corporate capital sheets, cloud expenditures, and trace ledger transactions.</p>
        </div>
        <button
          onClick={() => setIsTxOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
        >
          <Plus className="h-4 w-4" />
          Log Transaction
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard 
          title="Total Ledger Revenue" 
          value={`$${totalIncome.toLocaleString()}`}
          icon={<ArrowUpRight className="h-4 w-4 text-emerald-600" />}
          subtext="Simulated incoming wire runs"
          trend={{ value: '+24% YoY', type: 'up' }}
        />
        <MetricCard 
          title="Consolidated Expenses" 
          value={`$${totalExpense.toLocaleString()}`}
          icon={<ArrowDownRight className="h-4 w-4 text-rose-600" />}
          subtext="Server & infrastructure runs"
        />
        <MetricCard 
          title="Operating Net Cashflow" 
          value={`$${netBurnRate.toLocaleString()}`}
          icon={<CreditCard className="h-4 w-4 text-blue-600" />}
          subtext="Liquidity delta run rates"
          trend={{ value: 'Positive', type: 'up' }}
        />
      </div>

      {/* Split chart vs table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 border border-blue-100 bg-white rounded-xl shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Filter invoices & references..."
                className="px-3 py-2 text-xs bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono max-w-sm w-full"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-500 font-mono">TYPE:</span>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="pl-2.5 pr-7 py-1.5 text-xs bg-slate-50 border border-blue-200 rounded-lg text-slate-700 focus:outline-none focus:border-blue-600 cursor-pointer font-mono font-medium"
                >
                  <option value="all">All ledger categories</option>
                  <option value="Income">Licensing Incoming</option>
                  <option value="Expense">Operational Expenditures</option>
                </select>
              </div>
            </div>
          </div>

          <DataTable 
            data={filteredTransactions}
            columns={[
              {
                header: 'Transaction/Receipt',
                accessor: (tx: Transaction) => (
                  <div>
                    <span className="font-bold text-slate-800">{tx.description}</span>
                    <span className="block text-[10px] text-slate-400 font-normal">{tx.category}</span>
                  </div>
                )
              },
              {
                header: 'Ledger Type',
                accessor: (tx: Transaction) => (
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    tx.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {tx.type}
                  </span>
                )
              },
              {
                header: 'Audit Value',
                accessor: (tx: Transaction) => (
                  <span className={`font-mono font-bold ${
                    tx.type === 'Income' ? 'text-emerald-600' : 'text-slate-800'
                  }`}>
                    {tx.type === 'Income' ? '+' : '-'} ${tx.amount.toLocaleString()}
                  </span>
                )
              },
              {
                header: 'System Status',
                accessor: (tx: Transaction) => <StatusBadge status={tx.status} />
              },
              {
                header: 'Reference hash',
                accessor: (tx: Transaction) => <span className="font-mono text-xs text-slate-500">{tx.reference}</span>
              }
            ]}
          />
        </div>

        {/* Financial charts */}
        <div className="space-y-6">
          <ChartCard 
            title="Consolidated Monthly Runs" 
            subtitle="Comparing Licensing Inflow with Computing Cost Outlay"
            type="bar" 
            data={monthChartData} 
            labels={['Licensing Inbound', 'Compute cost']}
            height={200}
          />
          
          <div className="border border-blue-100 bg-white p-5 rounded-xl space-y-3.5 shadow-xs">
            <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase font-mono">
              Invoicing & Routing details
            </h4>
            <div className="text-xs space-y-2 text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>ACH Routing Swift:</span>
                <span className="font-mono text-slate-800 font-bold">SPR-FED-CHX9023</span>
              </div>
              <div className="flex justify-between">
                <span>Current Month Forecast:</span>
                <span className="text-emerald-600 font-bold font-mono">+$12,450 (Nominal)</span>
              </div>
              <div className="flex justify-between">
                <span>Invoicing Anchor:</span>
                <span className="font-mono text-slate-800 font-bold">INV-89D-2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW TRANSACTION MODAL */}
      <Modal isOpen={isTxOpen} onClose={() => setIsTxOpen(false)} title="Audit Log Ledger Transaction">
        <form onSubmit={handleTxSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Receipt Summary / Name</label>
            <input 
              type="text" 
              required
              value={txDesc}
              onChange={(e) => setTxDesc(e.target.value)}
              placeholder="e.g. Serverless database cluster node scaling" 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Ledger Type</label>
              <select 
                value={txType}
                onChange={(e: any) => setTxType(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Expense">Operational Expense (-)</option>
                <option value="Income">Software licensing (+)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Amount ($ USD)</label>
              <input 
                type="number" 
                value={txAmount}
                onChange={(e) => setTxAmount(Number(e.target.value))}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Classification Category</label>
            <select 
              value={txCat}
              onChange={(e) => setTxCat(e.target.value)}
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            >
              <option value="Cloud Infrastructure">Cloud Infrastructure</option>
              <option value="Development Tools">Development Tools</option>
              <option value="Legal & Consulting">Legal & Consulting</option>
              <option value="Capital Investment">Capital Investment</option>
              <option value="Marketing & Sales">Marketing & Sales</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Audit Log Ledger Row
          </button>
        </form>
      </Modal>
    </div>
  );
};
