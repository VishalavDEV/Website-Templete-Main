import React from 'react';
import Layout from '../../components/layout/Layout';
import { Users, DollarSign, Target, UserCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrmDashboard() {
  const deals = [
    { company: 'Acme Cyber Corp', stage: 'Proposal Sent', value: '$85,000', lead: 'Sarah Connor' },
    { company: 'Stark Tech Industries', stage: 'Negotiation', value: '$140,000', lead: 'Mike Chen' },
    { company: 'Wayne Enterprise Software', stage: 'Demo Completed', value: '$65,000', lead: 'Emily Park' },
    { company: 'Cyberdyne Systems', stage: 'Contract Signed', value: '$210,000', lead: 'Sarah Connor' },
  ];

  return (
    <Layout title="CRM & Pipeline Command Center" breadcrumb="Home / Overview / CRM Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Total Leads</span>
            <div className="text-base sm:text-xl font-bold text-white font-mono mt-1 truncate">1,248</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Pipeline Value</span>
            <div className="text-base sm:text-xl font-bold text-neura-cyan font-mono mt-1 truncate">$1.45M</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Deals Won (Q3)</span>
            <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono mt-1 truncate">48 Deals</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Win Rate</span>
            <div className="text-base sm:text-xl font-bold text-neura-purple font-mono mt-1 truncate">42.8%</div>
          </div>
        </div>

        {/* Deals Table */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-tight">Active Deal Pipeline</h3>
            <Link to="/crm/deals" className="text-xs text-neura-cyan hover:underline flex items-center">
              <span>View All Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-4">Company Account</th>
                  <th className="p-4">Pipeline Stage</th>
                  <th className="p-4">Deal Value</th>
                  <th className="p-4">Account Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {deals.map((d) => (
                  <tr key={d.company} className="hover:bg-white/[0.04]">
                    <td className="p-4 font-bold text-white">{d.company}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-neura-cyan/15 text-neura-cyan font-bold text-[10px]">
                        {d.stage}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold text-emerald-400">{d.value}</td>
                    <td className="p-4 text-slate-300">{d.lead}</td>
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
