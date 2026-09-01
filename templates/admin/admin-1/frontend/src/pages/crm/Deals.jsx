import React from 'react';
import Layout from '../../components/layout/Layout';
import AdvancedDataTable from '../../components/ui/AdvancedDataTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Target, Briefcase } from 'lucide-react';

export default function Deals() {
  const stageData = [
    { stage: 'Lead Gen', value: 450000 },
    { stage: 'Qualified', value: 380000 },
    { stage: 'Proposal Sent', value: 290000 },
    { stage: 'Negotiation', value: 210000 },
    { stage: 'Closed Won', value: 482000 },
  ];

  const deals = [
    { id: 'DEAL-501', title: 'Enterprise Cloud License', company: 'Acme Corp', stage: 'Closed Won', amount: '$210,000', owner: 'Sarah Connor' },
    { id: 'DEAL-502', title: 'AI Vision SDK Integration', company: 'Quantum Tech', stage: 'Negotiation', amount: '$140,000', owner: 'Mike Chen' },
    { id: 'DEAL-503', title: 'Security Audit Module', company: 'Stark Systems', stage: 'Proposal Sent', amount: '$85,000', owner: 'Emily Park' },
    { id: 'DEAL-504', title: 'Vector Database License', company: 'Wayne Ent', stage: 'Qualified', amount: '$65,000', owner: 'David Lee' },
  ];

  const columns = [
    { header: 'Deal ID', accessor: 'id', cell: (row) => <span className="font-mono text-neura-cyan font-bold">{row.id}</span> },
    { header: 'Deal Name', accessor: 'title', cell: (row) => <div><div className="font-bold text-white">{row.title}</div><div className="text-[11px] text-slate-400">{row.company}</div></div> },
    { header: 'Stage', accessor: 'stage', cell: (row) => (
      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
        row.stage === 'Closed Won' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-neura-cyan/20 text-neura-cyan border-neura-cyan/40'
      }`}>
        {row.stage}
      </span>
    )},
    { header: 'Value', accessor: 'amount', cell: (row) => <span className="font-mono text-emerald-400 font-bold">{row.amount}</span> },
    { header: 'Owner', accessor: 'owner' },
  ];

  return (
    <Layout title="Deals & Opportunities Pipeline" breadcrumb="Home / CRM / Deals">
      <div className="space-y-6">
        {/* Stage BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
            <span>Pipeline Value by Stage ($1.81M Total)</span>
          </h3>

          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stageData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="stage" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="value" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Pipeline Value ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <AdvancedDataTable
          columns={columns}
          data={deals}
          title="Active Opportunities"
          subtitle="Deals tracking towards Q3 closing."
        />
      </div>
    </Layout>
  );
}
