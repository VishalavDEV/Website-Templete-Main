import React from 'react';
import { Card } from '../../../components/ui/Card';
import { AlertCircle, CheckCircle, Info, ShieldAlert } from 'lucide-react';

export default function AlertsShowcase() {
  return (
    <div className="space-y-4 max-w-lg">
      <div className="flex items-start gap-3 p-4 border border-success/20 bg-success/5 text-success rounded-xl text-xs">
        <CheckCircle className="h-5 w-5 shrink-0" />
        <div>
          <h4 className="font-bold text-foreground">Staging deployment successful</h4>
          <p className="text-muted-foreground mt-0.5">Database clusters successfully synchronized with index maps.</p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 border border-destructive/20 bg-destructive/5 text-destructive rounded-xl text-xs">
        <ShieldAlert className="h-5 w-5 shrink-0" />
        <div>
          <h4 className="font-bold text-foreground">Critical SSL Certificates warnings</h4>
          <p className="text-muted-foreground mt-0.5">SSL credentials keys will expire in 3 days. Revocation active.</p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 border border-warning/20 bg-warning/5 text-warning rounded-xl text-xs">
        <AlertCircle className="h-5 w-5 shrink-0" />
        <div>
          <h4 className="font-bold text-foreground">Budget over-utilization limit</h4>
          <p className="text-muted-foreground mt-0.5">API Slack integrations costs calculated above standard allocations.</p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 border border-primary/20 bg-primary/5 text-primary rounded-xl text-xs">
        <Info className="h-5 w-5 shrink-0" />
        <div>
          <h4 className="font-bold text-foreground">General Sync operations active</h4>
          <p className="text-muted-foreground mt-0.5">System files backup is automatically spooling background archives.</p>
        </div>
      </div>
    </div>
  );
}
