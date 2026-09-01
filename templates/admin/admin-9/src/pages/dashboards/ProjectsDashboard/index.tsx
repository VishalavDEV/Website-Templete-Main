import React from 'react';
import { ColumnChart, ProgressChart } from '../../../components/charts';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';

export default function ProjectsDashboard() {
  const stats = [
    { title: 'Active Projects', value: '12 Projects', change: '+2 Active', type: 'success' },
    { title: 'Completed Tasks', value: '241 Tasks', change: '+18.4%', type: 'success' },
    { title: 'Milestone Attainment', value: '75%', change: '+4.2%', type: 'success' },
    { title: 'Active Workforce', value: '82%', change: 'Stable', type: 'secondary' }
  ];

  const tasks = [
    { id: 'ts1', name: 'Refactor UI Design system', lead: 'Alice S.', deadline: '2026-09-12', progress: 85 },
    { id: 'ts2', name: 'Integrate global state actions', lead: 'Bob J.', deadline: '2026-08-30', progress: 42 },
    { id: 'ts3', name: 'Database migrations script', lead: 'Charlie B.', deadline: '2026-08-25', progress: 95 },
    { id: 'ts4', name: 'Audit authentication keychains', lead: 'Diana P.', deadline: '2026-08-22', progress: 12 }
  ];

  const columns = [
    { key: 'name', label: 'Milestone Task', isSortable: true },
    { key: 'lead', label: 'Staff Lead', isSortable: true },
    { key: 'deadline', label: 'Target Deadline', isSortable: true },
    { key: 'progress', label: 'Percentage Done', isSortable: true, render: (row: any) => {
      const variant = row.progress > 80 ? 'success' : row.progress > 40 ? 'warning' : 'destructive';
      return <Badge variant={variant}>{row.progress}%</Badge>;
    }}
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Projects Delivery Console" subtitle="Track tasks progress ratios, milestones, and active workforces." />
      
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
          <ColumnChart title="Completed Projects Milestone (Quarterly)" data={[45, 80, 50, 95, 60, 85]} />
        </div>
        <Card title="Task Ratios Summary" subtitle="Completion metrics.">
          <div className="space-y-4">
            <ProgressChart value={85} title="System UI Elements" />
            <ProgressChart value={42} title="State Integration" />
          </div>
        </Card>
      </div>

      <Card title="Corporate Milestone Deliverables" subtitle="Estimated deadlines and active developers assigned.">
        <DataTable columns={columns as any} data={tasks} />
      </Card>
    </div>
  );
}
