import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import AdvancedDataTable from '../../components/ui/AdvancedDataTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Invoices() {
  const [invoices, setInvoices] = useState([
    { id: 'INV-2026-001', customer: 'Skynet Defense Systems', amount: '$12,450.00', status: 'Paid', date: '2026-08-15', due: '2026-09-15' },
    { id: 'INV-2026-002', customer: 'Quantum Compute Inc', amount: '$8,920.00', status: 'Pending', date: '2026-08-18', due: '2026-09-18' },
    { id: 'INV-2026-003', customer: 'CyberShield Org', amount: '$24,100.00', status: 'Paid', date: '2026-08-10', due: '2026-09-10' },
    { id: 'INV-2026-004', customer: 'Apex Infrastructure', amount: '$3,800.00', status: 'Overdue', date: '2026-07-01', due: '2026-08-01' },
  ]);

  const invoiceMetrics = [
    { status: 'Paid', amount: 36550 },
    { status: 'Pending', amount: 8920 },
    { status: 'Overdue', amount: 3800 },
  ];

  const columns = [
    {
      header: 'Invoice Number',
      accessor: 'id',
      cell: (row) => (
        <Link to={`/finance/invoices/${row.id}`} className="font-mono text-neura-cyan font-bold hover:underline">
          {row.id}
        </Link>
      ),
    },
    { header: 'Billed Customer', accessor: 'customer', cell: (row) => <span className="font-bold text-white">{row.customer}</span> },
    { header: 'Amount Due', accessor: 'amount', cell: (row) => <span className="font-mono text-emerald-400 font-bold">{row.amount}</span> },
    { header: 'Issued Date', accessor: 'date', cell: (row) => <span className="font-mono text-slate-400">{row.date}</span> },
    { header: 'Due Date', accessor: 'due', cell: (row) => <span className="font-mono text-slate-400">{row.due}</span> },
    {
      header: 'Payment Status',
      accessor: 'status',
      cell: (row) => (
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
          row.status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' :
          row.status === 'Pending' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' :
          'bg-rose-500/20 text-rose-400 border-rose-500/40'
        }`}>
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <Layout title="Invoices & Billing Statements" breadcrumb="Home / Finance / Invoices">
      <div className="space-y-6">
        {/* Invoice Status BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white flex items-center">
            <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
            <span>Invoice Billing Status ($49,270 Total)</span>
          </h3>

          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={invoiceMetrics} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="status" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
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
                <Bar dataKey="amount" fill="#10b981" radius={[6, 6, 0, 0]} maxBarSize={28} name="Amount ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <AdvancedDataTable
          columns={columns}
          data={invoices}
          title="Issued Enterprise Invoices"
          subtitle="Real-time status of client billing statements."
        />
      </div>
    </Layout>
  );
}
