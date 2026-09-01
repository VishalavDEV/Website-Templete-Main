import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { useToast } from '../../../app/providers/ToastProvider';

export default function ToastsShowcase() {
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <Card title="Secure Toast Notifications" subtitle="Trigger feedback alerts.">
        <div className="flex flex-wrap gap-2.5">
          <Button variant="primary" onClick={() => toast.success('Staging database clusters synced.')}>Success Notification</Button>
          <Button variant="outline" onClick={() => toast.error('SSL credentials validation failure.')}>Error alert</Button>
          <Button variant="secondary" onClick={() => toast.warning('Slack webhooks cost calculation warning.')}>Warning notice</Button>
          <Button variant="outline" onClick={() => toast.info('Spooling backups file archives.')}>Information logs</Button>
        </div>
      </Card>
    </div>
  );
}
