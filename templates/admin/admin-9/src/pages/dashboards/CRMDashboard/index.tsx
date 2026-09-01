import React from 'react';
import { LineChart, GaugeChart } from '../../../components/charts';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';

export default function CRMDashboard() {
  const stats = [
    { title: 'Total Contacts', value: '1,482', change: '+12.4%', type: 'success' },
    { title: 'New Leads (Weekly)', value: '92 Leads', change: '+20.1%', type: 'success' },
    { title: 'Lead Conversion Rate', value: '3.4%', change: '+1.5%', type: 'success' },
    { title: 'Unresolved Tickets', value: '4 Tickets', change: 'Neutral', type: 'secondary' }
  ];

  const leads = [
    { id: 'l1', name: 'Tony Stark', company: 'Stark Industries', status: 'Hot Lead', value: '$25,000' },
    { id: 'l2', name: 'Bruce Wayne', company: 'Wayne Enterprises', status: 'Proposal Staged', value: '$85,000' },
    { id: 'l3', name: 'Clark Kent', company: 'Daily Planet', status: 'Contacted', value: '$1,200' },
    { id: 'l4', name: 'Peter Parker', company: 'Daily Bugle', status: 'Stale', value: '$500' }
  ];

  const columns = [
    { key: 'name', label: 'Lead Contact', isSortable: true },
    { key: 'company', label: 'Corporate Entity', isSortable: true },
    { key: 'status', label: 'Lifecycle Status', isSortable: true, render: (row: any) => {
      const v = row.status === 'Hot Lead' ? 'destructive' : row.status === 'Proposal Staged' ? 'success' : 'secondary';
      return <Badge variant={v}>{row.status}</Badge>;
    }},
    { key: 'value', label: 'Estimated Contract Value', isSortable: true }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Customer Relations Portal" subtitle="Track user registrations, leads conversion rates, and account contacts." />
      
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
          <LineChart title="Daily Customer Activity Trends" data={[120, 250, 180, 490, 310, 520, 410]} />
        </div>
        <div>
          <GaugeChart percent={65} title="Customer Retention Index" />
        </div>
      </div>

      <Card title="Active Leads Pipeline" subtitle="Estimated deal values across active business contacts.">
        <DataTable columns={columns as any} data={leads} />
      </Card>
    </div>
  );
}
