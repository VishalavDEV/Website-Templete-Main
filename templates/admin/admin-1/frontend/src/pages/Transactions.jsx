import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CreditCard, Plus, X } from 'lucide-react';
import { MOCK_ORDERS } from '../services/mockData';

export default function Transactions() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [showModal, setShowModal] = useState(false);
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!customer.trim() || !product.trim() || !amount) return;

    const newTx = {
      id: `#ORD-${7820 + orders.length + 1}`,
      customer: customer.trim(),
      product: product.trim(),
      amount: parseFloat(amount) || 99,
      status: 'Completed',
      date: new Date().toISOString().split('T')[0]
    };

    setOrders([newTx, ...orders]);
    setCustomer('');
    setProduct('');
    setAmount('');
    setShowModal(false);
  };

  const cashflowData = [
    { day: 'Mon', inflow: 14200, outflow: 4100 },
    { day: 'Tue', inflow: 18500, outflow: 5200 },
    { day: 'Wed', inflow: 22100, outflow: 6400 },
    { day: 'Thu', inflow: 19800, outflow: 4800 },
    { day: 'Fri', inflow: 26400, outflow: 7100 },
    { day: 'Sat', inflow: 12500, outflow: 3200 },
    { day: 'Sun', inflow: 15400, outflow: 3900 },
  ];

  return (
    <Layout title="Financial Transactions Ledger" breadcrumb="Home / Transactions">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <CreditCard className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Financial Ledger & Payouts</span>
            </h2>
            <p className="text-xs text-slate-400">Track real-time transaction processing and revenue streams.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Transaction</span>
          </button>
        </div>

        {/* Cashflow Inflow / Outflow AreaChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <CreditCard className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Weekly Cashflow Inflows vs Outflows</span>
          </h3>

          <div className="w-full h-56 sm:h-64 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflowData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInflow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorOutflow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="day" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Area type="monotone" dataKey="inflow" stroke="#00f0ff" strokeWidth={3} fill="url(#colorInflow)" name="Revenue Inflow ($)" />
                <Area type="monotone" dataKey="outflow" stroke="#ef4444" strokeWidth={2} fill="url(#colorOutflow)" name="Expense Outflow ($)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <RecentOrdersTable orders={orders} />
      </div>

      {/* Add Transaction Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Log Financial Transaction</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddTransaction} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Customer Name</label>
                <input
                  type="text"
                  required
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  placeholder="Client or Customer Name"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Product Description</label>
                <input
                  type="text"
                  required
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="e.g. Enterprise License Add-on"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Amount ($)</label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="299.00"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
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
                  Save Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
