import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import TopProducts from '../components/dashboard/TopProducts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, Plus, X } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';

export default function Products() {
  const [productsList, setProductsList] = useState(MOCK_PRODUCTS);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Software');
  const [revenue, setRevenue] = useState('');
  const [unitsSold, setUnitsSold] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name.trim() || !revenue) return;

    const newProd = {
      rank: productsList.length + 1,
      name: name.trim(),
      category,
      revenue: `$${parseFloat(revenue).toLocaleString()}`,
      unitsSold: parseInt(unitsSold) || 10
    };

    setProductsList([newProd, ...productsList]);
    setName('');
    setRevenue('');
    setUnitsSold('');
    setShowModal(false);
  };

  const chartData = productsList.map(p => ({
    name: p.name.length > 14 ? `${p.name.slice(0, 14)}...` : p.name,
    units: p.unitsSold,
    revenue: parseInt(p.revenue.replace(/[^0-9]/g, '')) || 5000
  }));

  return (
    <Layout title="Product Inventory & Sales Volume" breadcrumb="Home / Products">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <Package className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Catalog & Revenue Metrics</span>
            </h2>
            <p className="text-xs text-slate-400">Track best-selling modules and infrastructure plans.</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>

        {/* Product Revenue BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <Package className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Product Revenue vs Units Sold</span>
          </h3>

          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="revenue" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <TopProducts products={productsList} />
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Add Product to Catalog</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. AI Vision Processing SDK"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="Software">Software</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Services">Services</option>
                  <option value="License">License</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Total Revenue ($)</label>
                  <input
                    type="number"
                    required
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="12500"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Units Sold</label>
                  <input
                    type="number"
                    required
                    value={unitsSold}
                    onChange={(e) => setUnitsSold(e.target.value)}
                    placeholder="50"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                  />
                </div>
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
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
