import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import RecentOrdersTable from '../components/dashboard/RecentOrdersTable';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShoppingCart, Plus, X } from 'lucide-react';
import { MOCK_ORDERS } from '../services/mockData';

export default function Orders() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [showModal, setShowModal] = useState(false);
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('Premium Dashboard Kit');
  const [amount, setAmount] = useState('299.00');

  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!customer.trim() || !amount) return;

    const newOrd = {
      id: `#ORD-${7820 + orders.length + 1}`,
      customer: customer.trim(),
      product,
      amount: parseFloat(amount) || 299,
      status: 'Processing',
      date: new Date().toISOString().split('T')[0]
    };

    setOrders([newOrd, ...orders]);
    setCustomer('');
    setShowModal(false);
  };

  const orderStreamData = [
    { day: 'Mon', completed: 280, processing: 45, cancelled: 12 },
    { day: 'Tue', completed: 310, processing: 52, cancelled: 8 },
    { day: 'Wed', completed: 350, processing: 60, cancelled: 15 },
    { day: 'Thu', completed: 300, processing: 40, cancelled: 10 },
    { day: 'Fri', completed: 370, processing: 65, cancelled: 14 },
    { day: 'Sat', completed: 260, processing: 30, cancelled: 6 },
    { day: 'Sun', completed: 270, processing: 35, cancelled: 9 },
  ];

  return (
    <Layout title="Orders & Fulfillments" breadcrumb="Home / Orders">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <ShoppingCart className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Order Management & Dispatch</span>
            </h2>
            <p className="text-xs text-slate-400">View real-time purchases and customer order stream.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Order</span>
          </button>
        </div>

        {/* Order Stream AreaChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <ShoppingCart className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Weekly Order Fulfillment Telemetry</span>
          </h3>

          <div className="w-full h-56 sm:h-64 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={orderStreamData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
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
                <Area type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={3} fill="url(#colorCompleted)" name="Completed Orders" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <RecentOrdersTable orders={orders} />
      </div>

      {/* Create Order Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Create Customer Order</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOrder} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Customer Name</label>
                <input
                  type="text"
                  required
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  placeholder="e.g. Jordan Smith"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Product Package</label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="Premium Dashboard Kit">Premium Dashboard Kit</option>
                  <option value="Cloud Storage Plan">Cloud Storage Plan</option>
                  <option value="Enterprise License">Enterprise License</option>
                  <option value="Support Add-on">Support Add-on</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Amount ($)</label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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
                  Dispatch Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
