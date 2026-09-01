import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import AdvancedDataTable from '../../components/ui/AdvancedDataTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Plus, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Customers() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 'CUST-101', name: 'Sarah Connor', email: 'sarah@skynet-defense.io', company: 'Skynet Defense Systems', location: 'San Francisco, CA', orders: 14, spent: '$12,450', status: 'Active' },
    { id: 'CUST-102', name: 'Mike Chen', email: 'mike@quantum-compute.com', company: 'Quantum Compute Inc', location: 'Boston, MA', orders: 8, spent: '$8,920', status: 'Active' },
    { id: 'CUST-103', name: 'Emily Park', email: 'emily@cyber-shield.org', company: 'CyberShield Org', location: 'Seattle, WA', orders: 22, spent: '$24,100', status: 'VIP' },
    { id: 'CUST-104', name: 'David Lee', email: 'david@apex-infra.net', company: 'Apex Infrastructure', location: 'Austin, TX', orders: 5, spent: '$3,800', status: 'Inactive' },
    { id: 'CUST-105', name: 'Lisa Wang', email: 'lisa@future-cloud.io', company: 'Future Cloud Tech', location: 'New York, NY', orders: 19, spent: '$18,650', status: 'VIP' },
  ]);

  const [newCust, setNewCust] = useState({ name: '', email: '', company: '' });

  const customerGrowthData = [
    { month: 'Jan', active: 3200, newClients: 450 },
    { month: 'Feb', active: 3650, newClients: 510 },
    { month: 'Mar', active: 4100, newClients: 590 },
    { month: 'Apr', active: 4550, newClients: 640 },
    { month: 'May', active: 5100, newClients: 720 },
    { month: 'Jun', active: 5820, newClients: 810 },
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCust.name || !newCust.email) return;
    const cust = {
      id: `CUST-${Date.now().toString().slice(-3)}`,
      name: newCust.name,
      email: newCust.email,
      company: newCust.company || 'N/A',
      location: 'San Francisco, CA',
      orders: 1,
      spent: '$299',
      status: 'Active',
    };
    setCustomers([cust, ...customers]);
    setShowAddModal(false);
    setNewCust({ name: '', email: '', company: '' });
  };

  const columns = [
    {
      header: 'Customer ID',
      accessor: 'id',
      cell: (row) => (
        <Link to={`/customers/${row.id}`} className="font-mono text-neura-cyan font-bold hover:underline">
          {row.id}
        </Link>
      ),
    },
    {
      header: 'Name',
      accessor: 'name',
      cell: (row) => (
        <div>
          <div className="font-bold text-white">{row.name}</div>
          <div className="text-[11px] text-slate-400">{row.email}</div>
        </div>
      ),
    },
    { header: 'Company', accessor: 'company' },
    { header: 'Location', accessor: 'location' },
    { header: 'Total Orders', accessor: 'orders' },
    {
      header: 'Total Spent',
      accessor: 'spent',
      cell: (row) => <span className="font-mono font-bold text-emerald-400">{row.spent}</span>,
    },
    {
      header: 'Account Status',
      accessor: 'status',
      cell: (row) => (
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
            row.status === 'VIP'
              ? 'bg-neura-purple/20 text-neura-purple border-neura-purple/40'
              : row.status === 'Active'
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
              : 'bg-slate-500/20 text-slate-400 border-slate-500/40'
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <Layout title="Customers Directory & LTV" breadcrumb="Home / Sales / Customers">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <Users className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Customer Accounts Directory</span>
            </h2>
            <p className="text-xs text-slate-400">Manage client accounts, total order value, and lifetime engagement.</p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan hover:opacity-90 transition-all flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Customer</span>
          </button>
        </div>

        {/* Customer Growth BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white">Active Accounts Growth & New Onboarding</h3>
          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerGrowthData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="active" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={24} name="Active Accounts" />
                <Bar dataKey="newClients" fill="#10b981" radius={[6, 6, 0, 0]} maxBarSize={24} name="New Onboarded" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <AdvancedDataTable
          columns={columns}
          data={customers}
          title="All Registered Customer Accounts"
          subtitle="Real-time synchronized CRM directory."
        />

        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="w-full max-w-md bg-neura-panel border border-white/10 rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">Register New Customer</h3>
              <form onSubmit={handleAdd} className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Customer Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={newCust.name}
                    onChange={(e) => setNewCust({ ...newCust, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neura-cyan"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={newCust.email}
                    onChange={(e) => setNewCust({ ...newCust, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neura-cyan"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={newCust.company}
                    onChange={(e) => setNewCust({ ...newCust, company: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neura-cyan"
                  />
                </div>
                <div className="flex items-center justify-end space-x-2 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-neura-cyan text-black font-bold shadow-glow-cyan"
                  >
                    Save Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
