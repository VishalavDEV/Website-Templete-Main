import React from 'react';
import Layout from '../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Cloud, CheckCircle, RefreshCw } from 'lucide-react';

export default function Integrations() {
  const integrationsList = [
    { name: 'AWS Cloud Services', status: 'Connected', requests: '1.4M reqs/mo', icon: 'AWS' },
    { name: 'Google Cloud Platform', status: 'Connected', requests: '850K reqs/mo', icon: 'GCP' },
    { name: 'Stripe Billing Gateway', status: 'Connected', requests: '120K reqs/mo', icon: 'Stripe' },
    { name: 'GitHub Actions CI/CD', status: 'Connected', requests: '45K reqs/mo', icon: 'GitHub' },
  ];

  const integrationTrafficData = [
    { provider: 'AWS Cloud', requests: 1400000 },
    { provider: 'GCP Cluster', requests: 850000 },
    { provider: 'Stripe Gateway', requests: 120000 },
    { provider: 'GitHub CI/CD', requests: 45000 },
  ];

  return (
    <Layout title="Cloud SaaS Integrations" breadcrumb="Home / System / Integrations">
      <div className="space-y-6">
        {/* Integration API Volume BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <Layers className="w-5 h-5 text-neura-cyan mr-2" />
            <span>API Gateway Call Volume by Provider</span>
          </h3>

          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={integrationUsageData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="provider" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="requests" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="API Requests" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrationsList.map((item) => (
            <div key={item.name} className="p-6 rounded-3xl glass-card border border-white/10 flex items-center justify-between hover:border-neura-cyan/40 transition-all">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <span className="text-xs text-slate-400 font-mono">{item.requests}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold flex items-center space-x-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{item.status}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
