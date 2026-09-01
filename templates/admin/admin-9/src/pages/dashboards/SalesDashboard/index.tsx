import React from 'react';
import { ComposedChart, FunnelChart, DonutChart } from '../../../components/charts';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';

export default function SalesDashboard() {
  const stats = [
    { title: 'Monthly Revenue', value: '$48,201', change: '+15.2%', type: 'success' },
    { title: 'Closed Deals', value: '92 Deals', change: '+4.1%', type: 'success' },
    { title: 'Avg. Deal Value', value: '$820', change: 'Stable', type: 'secondary' },
    { title: 'Target Attainment', value: '82%', change: '+1.4%', type: 'success' }
  ];

  const transactions = [
    { id: 't1', client: 'Acme Corp Ltd.', amount: '$4,200', date: '2026-08-19', status: 'completed' },
    { id: 't2', client: 'Vance Refrigerations', amount: '$850', date: '2026-08-18', status: 'completed' },
    { id: 't3', client: 'Initech Systems', amount: '$1,200', date: '2026-08-18', status: 'pending' },
    { id: 't4', client: 'Wayne Industries', amount: '$9,500', date: '2026-08-17', status: 'completed' }
  ];

  const columns = [
    { key: 'client', label: 'Client Node', isSortable: true },
    { key: 'amount', label: 'Transaction Value', isSortable: true },
    { key: 'date', label: 'Date Registered', isSortable: true },
    { key: 'status', label: 'Sync Status', isSortable: true, render: (row: any) => <Badge variant={row.status === 'completed' ? 'success' : 'warning'}>{row.status}</Badge> }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Sales Control Tower" subtitle="Review revenue trajectories, conversion funnels, and recent transaction records." />
      
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
          <ComposedChart title="Revenue Trajectory vs Target Pipelines" />
        </div>
        <div>
          <FunnelChart title="Sales Conversion Funnel" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DonutChart title="Product Sales Distributions" />
        <Card title="Recent Client Transactions" subtitle="Staged audit details for recent deal completions.">
          <DataTable columns={columns as any} data={transactions} />
        </Card>
      </div>
    </div>
  );
}
