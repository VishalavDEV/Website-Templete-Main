import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Lock, Shield, Check, Save } from 'lucide-react';

export default function RolesPermissions() {
  const [matrix, setMatrix] = useState([
    { module: 'User Management', admin: true, manager: true, user: false },
    { module: 'AI Model Deployment', admin: true, manager: true, user: false },
    { module: 'Financial Ledger & Invoices', admin: true, manager: false, user: false },
    { module: 'System Audit Logs', admin: true, manager: true, user: true },
    { module: 'Cloud Integrations & API Keys', admin: true, manager: false, user: false },
  ]);

  const rolePermissionData = [
    { role: 'ADMIN', totalPermissions: 15 },
    { role: 'MANAGER', totalPermissions: 9 },
    { role: 'USER', totalPermissions: 3 },
  ];

  const [saved, setSaved] = useState(false);

  const togglePerm = (idx, role) => {
    setMatrix(prev => prev.map((item, i) => i === idx ? { ...item, [role]: !item[role] } : item));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Layout title="Roles & Permissions Control Matrix" breadcrumb="Home / Users / Roles & Permissions">
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <Lock className="w-5 h-5 text-neura-cyan mr-2" />
              <span>RBAC Security Matrix</span>
            </h2>
            <p className="text-xs text-slate-400">Configure module access controls for ADMIN, MANAGER, and USER roles.</p>
          </div>

          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan hover:opacity-90 transition-all flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{saved ? 'Saved Successfully!' : 'Save Access Rules'}</span>
          </button>
        </div>

        {/* Role Permissions BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white">Role Access Quota Allocation</h3>
          <div className="w-full h-44 sm:h-48 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rolePermissionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="role" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="totalPermissions" fill="#7000ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Enabled Modules" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl glass-card p-6 border border-white/10">
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-4">System Module</th>
                  <th className="p-4 text-center">ADMIN</th>
                  <th className="p-4 text-center">MANAGER</th>
                  <th className="p-4 text-center">USER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {matrix.map((row, idx) => (
                  <tr key={row.module} className="hover:bg-white/[0.04]">
                    <td className="p-4 font-bold text-white">{row.module}</td>
                    <td className="p-4 text-center">
                      <input
                        type="checkbox"
                        checked={row.admin}
                        onChange={() => togglePerm(idx, 'admin')}
                        className="w-4 h-4 accent-neura-cyan cursor-pointer"
                      />
                    </td>
                    <td className="p-4 text-center">
                      <input
                        type="checkbox"
                        checked={row.manager}
                        onChange={() => togglePerm(idx, 'manager')}
                        className="w-4 h-4 accent-neura-cyan cursor-pointer"
                      />
                    </td>
                    <td className="p-4 text-center">
                      <input
                        type="checkbox"
                        checked={row.user}
                        onChange={() => togglePerm(idx, 'user')}
                        className="w-4 h-4 accent-neura-cyan cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
