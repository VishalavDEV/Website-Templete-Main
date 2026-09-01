import React from 'react';
import { AreaChart, GaugeChart, PieChart, Heatmap, LineChart } from '../../../components/charts';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';

export default function AnalyticsDashboard() {
  const stats = [
    { title: 'Bounce Rate', value: '42.1%', change: 'Neutral', type: 'secondary' },
    { title: 'Avg. Session Duration', value: '2m 14s', change: '+4.2%', type: 'success' },
    { title: 'Unique Visitors', value: '14,201', change: '+14.2%', type: 'success' },
    { title: 'Active Conversions', value: '8.4%', change: '+8.1%', type: 'success' }
  ];

  const channelsData = [
    { id: '1', channel: 'Organic Search', sessions: '4,820', rate: '42%', conv: '2.4%' },
    { id: '2', channel: 'Direct Traffic', sessions: '2,510', rate: '38%', conv: '3.1%' },
    { id: '3', channel: 'Social Referral', sessions: '1,420', rate: '56%', conv: '1.2%' },
    { id: '4', channel: 'Paid Advertising', sessions: '890', rate: '29%', conv: '4.5%' }
  ];

  const columns = [
    { key: 'channel', label: 'Channel Source', isSortable: true },
    { key: 'sessions', label: 'Sessions Count', isSortable: true },
    { key: 'rate', label: 'Bounce Rate', isSortable: true },
    { key: 'conv', label: 'Conversion Rate', isSortable: true }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Web Analytics Dashboard" subtitle="Real-time traffic patterns, device segmentations, and server load matrix." />
      
      {/* Stats Row */}
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

      {/* Main Trends Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AreaChart title="Session Traffic Trends (Last 7 Days)" data={[4500, 6200, 3100, 9500, 5800, 8000, 11000]} />
        </div>
        <div>
          <GaugeChart percent={84} title="Conversion Efficiency Gauge" />
        </div>
      </div>

      {/* Breakdown Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PieChart title="Device breakdown (Mobile vs PC)" />
        <div className="lg:col-span-2">
          <Heatmap title="Global Server Activity load" />
        </div>
      </div>

      {/* Top Channels Table */}
      <Card title="Traffic Acquisition Channels" subtitle="A summary of traffic volumes and conversion ratios across channels.">
        <DataTable columns={columns as any} data={channelsData} />
      </Card>
    </div>
  );
}
