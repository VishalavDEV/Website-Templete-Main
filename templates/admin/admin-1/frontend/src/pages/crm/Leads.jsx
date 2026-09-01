import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import AdvancedDataTable from '../../components/ui/AdvancedDataTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Plus, Mail, Phone, Tag, Target } from 'lucide-react';

export default function Leads() {
  const [leads, setLeads] = useState([
    { id: 'LEAD-801', name: 'Alexander Wright', email: 'alex@cybernet.io', source: 'Organic Search', score: '92 Pts', status: 'Qualified' },
    { id: 'LEAD-802', name: 'Sophia Martinez', email: 'sophia@nexus-ai.com', source: 'LinkedIn Ads', score: '84 Pts', status: 'Contacted' },
    { id: 'LEAD-803', name: 'Jonathan Vance', email: 'vance@vanguard-tech.org', source: 'Direct Demo Request', score: '98 Pts', status: 'Qualified' },
    { id: 'LEAD-804', name: 'Chloe Dubois', email: 'chloe@synth-cloud.fr', source: 'Webinar Event', score: '65 Pts', status: 'New' },
  ]);

  const leadSourceData = [
    { source: 'Organic Search', count: 480, avgScore: 88 },
    { source: 'Direct Request', count: 320, avgScore: 94 },
    { source: 'LinkedIn Ads', count: 290, avgScore: 78 },
    { source: 'Webinars', count: 180, avgScore: 72 },
  ];

  const columns = [
    { header: 'Lead ID', accessor: 'id', cell: (row) => <span className="font-mono text-neura-cyan font-bold">{row.id}</span> },
    { header: 'Full Name', accessor: 'name', cell: (row) => <div><div className="font-bold text-white">{row.name}</div><div className="text-[11px] text-slate-400">{row.email}</div></div> },
    { header: 'Acquisition Source', accessor: 'source' },
    { header: 'Lead Score', accessor: 'score', cell: (row) => <span className="font-mono text-emerald-400 font-bold">{row.score}</span> },
    { header: 'Pipeline Status', accessor: 'status', cell: (row) => (
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
        row.status === 'Qualified' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' :
        row.status === 'Contacted' ? 'bg-neura-cyan/20 text-neura-cyan border-neura-cyan/40' :
        'bg-amber-500/20 text-amber-400 border-amber-500/40'
      }`}>
        {row.status}
      </span>
    )},
  ];

  return (
    <Layout title="CRM Lead Management" breadcrumb="Home / CRM / Leads">
      <div className="space-y-6">
        {/* Lead Source BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <Target className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Lead Acquisition Volume & Quality Score</span>
          </h3>

          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadSourceData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="source" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="count" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={24} name="Lead Count" />
                <Bar dataKey="avgScore" fill="#7000ff" radius={[6, 6, 0, 0]} maxBarSize={24} name="Avg Score (Pts)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <AdvancedDataTable
          columns={columns}
          data={leads}
          title="Sales Qualified Leads Pipeline"
          subtitle="Real-time lead scoring and acquisition tracking."
        />
      </div>
    </Layout>
  );
}
