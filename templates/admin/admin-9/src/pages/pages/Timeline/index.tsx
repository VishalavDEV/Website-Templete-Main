import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { Calendar, Shield, Database, Plus } from 'lucide-react';

export default function TimelinePage() {
  const [layout, setLayout] = useState<'vertical' | 'horizontal'>('vertical');

  const milestones = [
    { label: 'Wayne Staging Synced', time: 'Aug 19, 10:00 AM', status: 'Success', icon: <Database className="h-4 w-4 text-success" /> },
    { label: 'SSL Certificates Expired Warning', time: 'Aug 18, 02:30 PM', status: 'Failed', icon: <Shield className="h-4 w-4 text-destructive" /> },
    { label: 'VAT tax numbers config registered', time: 'Aug 17, 11:00 AM', status: 'Success', icon: <Calendar className="h-4 w-4 text-primary" /> }
  ];

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto">
      <PageHeader 
        title="Project Milestone Timeline" 
        subtitle="Chronological milestones tracking, layout formats, and priority icons status."
        actions={
          <div className="flex gap-1 border border-border bg-card p-1 rounded-lg">
            <Button size="sm" variant={layout === 'vertical' ? 'primary' : 'outline'} onClick={() => setLayout('vertical')}>Vertical</Button>
            <Button size="sm" variant={layout === 'horizontal' ? 'primary' : 'outline'} onClick={() => setLayout('horizontal')}>Horizontal</Button>
          </div>
        }
      />

      {layout === 'vertical' ? (
        <Card title="Vertical Milestone Audit">
          <div className="relative border-l-2 border-border pl-6 ml-3 space-y-6 pt-2">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative">
                {/* Icon wrapper */}
                <div className="absolute -left-[35px] top-0.5 h-6 w-6 rounded-full border border-border bg-card flex items-center justify-center shadow-sm">
                  {ms.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-foreground">{ms.label}</h4>
                    <Badge variant={ms.status === 'Success' ? 'success' : 'destructive'}>{ms.status}</Badge>
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-0.5 block">{ms.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <Card title="Horizontal Milestone Audit">
          <div className="grid gap-6 md:grid-cols-3 pt-2">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative border-t-2 border-border/80 pt-4 flex flex-col gap-2">
                <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-primary"></span>
                <div className="flex items-center gap-2">
                  <span className="shrink-0">{ms.icon}</span>
                  <h4 className="text-xs font-bold text-foreground truncate">{ms.label}</h4>
                </div>
                <div>
                  <Badge variant={ms.status === 'Success' ? 'success' : 'destructive'}>{ms.status}</Badge>
                  <span className="text-[9px] text-muted-foreground block mt-1">{ms.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
