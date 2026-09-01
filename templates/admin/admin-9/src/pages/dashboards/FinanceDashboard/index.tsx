import React from 'react';
import { LineChart, GaugeChart } from '../../../components/charts';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';

export default function FinanceDashboard() {
  const stats = [
    { title: 'Net Revenue', value: '$124.5k', change: '+14.2%', type: 'success' },
    { title: 'Total Expenses', value: '$42.1k', change: 'Neutral', type: 'secondary' },
    { title: 'Free Cash Flow', value: '$82.4k', change: '+18.1%', type: 'success' },
    { title: 'Budget Allocation', value: '82%', change: 'Within limit', type: 'success' }
  ];

  const invoices = [
    { id: 'inv1', code: 'INV-2026-001', client: 'Stark Industries', value: '$14,500', due: 'Paid' },
    { id: 'inv2', code: 'INV-2026-002', client: 'Wayne Enterprises', value: '$4,200', due: 'Overdue' },
    { id: 'inv3', code: 'INV-2026-003', client: 'Oscorp Chemical', value: '$950', due: 'Paid' },
    { id: 'inv4', code: 'INV-2026-004', client: 'Daily Bugle', value: '$1,100', due: 'Pending' }
  ];

  const columns = [
    { key: 'code', label: 'Invoice code', isSortable: true },
    { key: 'client', label: 'Billed Client', isSortable: true },
    { key: 'value', label: 'Net invoice amount', isSortable: true },
    { key: 'due', label: 'Invoice status', isSortable: true, render: (row: any) => {
      const variant = row.due === 'Paid' ? 'success' : row.due === 'Overdue' ? 'destructive' : 'warning';
      return <Badge variant={variant}>{row.due}</Badge>;
    }}
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Financial Ledger Control" subtitle="Monitor cash flows, monthly expenses, budget utilization, and invoices." />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} title={stat.title}>
            <div className="flex items-end justify-between mt-2">
              <div className="text-2xl font-extrabold text-foreground">{stat.value}</div>
              <Badge variant={stat.type as any}>{stat.change}</Badge>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LineChart title="Monthly Net Cash Flow Trajectory" data={[62000, 84000, 52000, 110000, 78000, 94000, 124500]} />
        </div>
        <div>
          <GaugeChart percent={82} title="Budget Progress Utilization" />
        </div>
      </div>

      <Card title="Staged Account Invoices" subtitle="Check transaction statuses and billing records.">
        <DataTable columns={columns as any} data={invoices} />
      </Card>
    </div>
  );
}
