import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { PageHeader } from '../../../components/common';
import { Search, Database, Key, HardDrive, Layers } from 'lucide-react';

interface AuditItem {
  id: string;
  type: 'security' | 'database' | 'backup';
  user: string;
  action: string;
  target: string;
  time: string;
}

export default function ActivityPage() {
  const [filterType, setFilterType] = useState<'all' | 'security' | 'database' | 'backup'>('all');

  const history: AuditItem[] = [
    { id: 'a1', type: 'security', user: 'Diana Prince', action: 'revoked staging keys for', target: 'Wayne Staging SEC-02', time: '14 mins ago' },
    { id: 'a2', type: 'database', user: 'Jane Doe', action: 'synced tax addresses on table', target: 'Invoices Vance', time: '1 hour ago' },
    { id: 'a3', type: 'backup', user: 'Ethan Hunt', action: 'uploaded backup compression file', target: 'system_backup_RSA.zip', time: '4 hours ago' },
    { id: 'a4', type: 'security', user: 'Diana Prince', action: 'registered new SSH login credential', target: 'Diana Staging', time: '1 day ago' }
  ];

  const filteredHistory = history.filter(h => filterType === 'all' || h.type === filterType);

  const getIcon = (type: string) => {
    if (type === 'security') return <Key className="h-4.5 w-4.5 text-destructive" />;
    if (type === 'database') return <Database className="h-4.5 w-4.5 text-primary" />;
    return <HardDrive className="h-4.5 w-4.5 text-success" />;
  };

  return (
    <div className="space-y-6 select-none">
      <PageHeader title="Audit Activity Timeline" subtitle="Continuous visual audit logs trail tracking user credential changes and database syncs." />

      {/* Filter type buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-card p-3 border border-border rounded-xl">
        <div className="flex gap-1.5">
          {(['all', 'security', 'database', 'backup'] as const).map((t) => (
            <Button 
              key={t}
              size="sm"
              variant={filterType === t ? 'primary' : 'outline'}
              onClick={() => setFilterType(t)}
            >
              <span className="capitalize">{t} logs</span>
            </Button>
          ))}
        </div>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input type="search" placeholder="Search operation keywords..." className="w-full text-xs h-9 pl-9 pr-3 rounded-lg border border-border bg-muted/20 text-foreground focus:outline-none" />
        </div>
      </div>

      {/* Audit timeline */}
      <Card title="System Audit Logs Feed" subtitle="Trace chronological staff operations list.">
        <div className="relative border-l-2 border-border/80 pl-6 ml-3 space-y-6">
          {filteredHistory.map((item) => (
            <div key={item.id} className="relative animate-in fade-in duration-200">
              {/* Dot Icon marker */}
              <div className="absolute -left-[35px] top-1 h-6 w-6 rounded-full border border-border bg-card flex items-center justify-center shadow-sm">
                {getIcon(item.type)}
              </div>

              <div>
                <p className="text-xs text-foreground">
                  <strong className="font-bold">{item.user}</strong> <span className="text-muted-foreground">{item.action}</span> <strong className="font-semibold text-primary">{item.target}</strong>
                </p>
                <span className="text-[10px] text-muted-foreground mt-0.5 block">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
