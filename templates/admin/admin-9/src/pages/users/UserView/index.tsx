import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Avatar } from '../../../components/ui/Avatar';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { ShieldCheck, Calendar, Activity, Database } from 'lucide-react';

export default function UserViewPage() {
  const [tab, setTab] = useState<'overview' | 'statistics' | 'activity'>('overview');

  const stats = [
    { title: 'Completed Audits', val: '48 Cases' },
    { title: 'Assigned Staging Nodes', val: '3 Clusters' },
    { title: 'Database Commits', val: '142 Commits' }
  ];

  return (
    <div className="space-y-6 select-none">
      <PageHeader title="Staff Profile Details" subtitle="Detailed oversight of system statistics and activity history." />

      {/* Header Profile Summary */}
      <Card>
        <div className="flex flex-col sm:flex-row items-center gap-6 p-4">
          <Avatar name="Diana Prince" size="lg" isOnline />
          <div className="text-center sm:text-left flex-1 min-w-0">
            <h2 className="text-base font-extrabold text-foreground">Diana Prince</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Security Architect • diana@corp.com</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2.5">
              <Badge variant="success">Role: Admin</Badge>
              <Badge variant="status">MFA Synced</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Detail Tabs selector */}
      <div className="flex border-b border-border/80 pb-0 gap-4 text-xs font-semibold">
        {([
          { key: 'overview', label: 'User Overview' },
          { key: 'statistics', label: 'Staged Statistics' },
          { key: 'activity', label: 'Activity Feed' }
        ] as const).map((t) => (
          <button 
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-3 border-b-2 px-1 cursor-pointer ${tab === t.key ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tab === 'overview' && (
          <>
            <div className="md:col-span-2">
              <Card title="Account Information" subtitle="Read-only data points.">
                <div className="grid gap-4 sm:grid-cols-2 text-xs">
                  <div><span className="text-[10px] text-muted-foreground uppercase block font-bold">Office Address</span><strong>London HQ - Tower B</strong></div>
                  <div><span className="text-[10px] text-muted-foreground uppercase block font-bold">Assigned Keys ID</span><strong>SEC-9980-A</strong></div>
                  <div><span className="text-[10px] text-muted-foreground uppercase block font-bold">Security Level</span><strong>Class-3 Clearances</strong></div>
                  <div><span className="text-[10px] text-muted-foreground uppercase block font-bold">Contact Status</span><strong>Staging Phone Active</strong></div>
                </div>
              </Card>
            </div>
            <Card title="Assigned Roles Permissions">
              <div className="space-y-2">
                {['Read SSL Keys', 'Synchronize DB clusters', 'Authorize credentials releases'].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                    <ShieldCheck className="h-4 w-4 text-success shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {tab === 'statistics' && (
          <div className="md:col-span-3 grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Card key={i} title={s.title}>
                <div className="text-2xl font-extrabold text-foreground mt-2">{s.val}</div>
              </Card>
            ))}
          </div>
        )}

        {tab === 'activity' && (
          <div className="md:col-span-3">
            <Card title="Recent Security Operations" subtitle="Audit activity logs.">
              <div className="space-y-4">
                {[
                  { op: 'Authorized credentials releases for Wayne Staging Nodes', time: '14 mins ago' },
                  { op: 'Renewed SSL certificates keychains', time: '1 hour ago' },
                  { op: 'Modified database VAT tax routing rules', time: '4 hours ago' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-xs border-b border-border/40 pb-3 last:border-0">
                    <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                    <div>
                      <p className="font-semibold text-foreground">{item.op}</p>
                      <span className="text-[10px] text-muted-foreground">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
