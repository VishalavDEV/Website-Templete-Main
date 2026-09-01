import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Progress } from '../../../components/ui/Progress';
import { Spinner } from '../../../components/ui/Spinner';
import { Stepper } from '../../../components/ui/Stepper';

export default function ProgressShowcase() {
  const steps = ['Verify Access Keys', 'Database Cache Audit', 'Finish Synchronization'];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Progress Bars" subtitle="Interactive ratios.">
        <div className="space-y-4">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Staging build deployment (82%)</span>
            <Progress value={82} />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Database cache sync (34%)</span>
            <Progress value={34} />
          </div>
        </div>
      </Card>

      <Card title="Loading Spinners" subtitle="Background threads.">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Spinner size="sm" /> <span>Syncing...</span></div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Spinner size="md" /> <span>Processing pem keys...</span></div>
        </div>
      </Card>

      <Card title="Progressive Steppers flow" className="md:col-span-2">
        <Stepper steps={steps} currentStep={2} />
      </Card>
    </div>
  );
}
