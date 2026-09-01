import React from 'react';
import { AreaChart, RadarChart, BarChart } from '../../../components/charts';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';

export default function MarketingDashboard() {
  const stats = [
    { title: 'Ad Spend (Monthly)', value: '$4,200', change: 'On Budget', type: 'secondary' },
    { title: 'Ad Impressions', value: '142.5k', change: '+15.2%', type: 'success' },
    { title: 'CTR Rate', value: '2.84%', change: '+0.4%', type: 'success' },
    { title: 'Return on Ad Spend', value: '3.2x RoAS', change: '+8.1%', type: 'success' }
  ];

  const campaigns = [
    { id: 'c1', name: 'Summer Launch 2026', spend: '$1,500', ROI: '4.2x', conversions: '182' },
    { id: 'c2', name: 'Black Friday Staging', spend: '$2,000', ROI: '2.8x', conversions: '240' },
    { id: 'c3', name: 'Re-engagement Email', spend: '$300', ROI: '12.4x', conversions: '95' },
    { id: 'c4', name: 'Developer Outreach', spend: '$400', ROI: '1.2x', conversions: '12' }
  ];

  const columns = [
    { key: 'name', label: 'Campaign Segment', isSortable: true },
    { key: 'spend', label: 'Budget Utilized', isSortable: true },
    { key: 'ROI', label: 'Recorded ROI', isSortable: true, render: (row: any) => <Badge variant="success">{row.ROI}</Badge> },
    { key: 'conversions', label: 'Total Conversions', isSortable: true }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Marketing Performance Grid" subtitle="Analyze search ad impressions, CTR, conversion rates, and ROI metrics." />
      
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
          <AreaChart title="Channel Traffic Acquisition Performance" data={[1400, 2800, 2100, 5200, 3900, 4200, 6800]} />
        </div>
        <div>
          <RadarChart title="Campaign attributes web" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <BarChart title="Social Share Distribution" data={[85, 45, 60, 30]} labels={['Search Ads', 'Social Media', 'Email Hub', 'Direct Link']} />
        <Card title="Active Marketing Campaigns" subtitle="Track budget allocation and conversion benchmarks.">
          <DataTable columns={columns as any} data={campaigns} />
        </Card>
      </div>
    </div>
  );
}
