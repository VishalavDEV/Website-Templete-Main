import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

export default function BadgesShowcase() {
  return (
    <div className="space-y-6">
      <Card title="Badge Variants" subtitle="Filled status categories.">
        <div className="flex flex-wrap gap-2.5 items-center">
          <Badge variant="default">Default Brand</Badge>
          <Badge variant="secondary">Secondary grey</Badge>
          <Badge variant="success">Completed Success</Badge>
          <Badge variant="destructive">Critical Error</Badge>
          <Badge variant="warning">Warning status</Badge>
          <Badge variant="info">Information info</Badge>
        </div>
      </Card>

      <Card title="Special badges" subtitle="Dot status indicators.">
        <div className="flex flex-wrap gap-4 items-center">
          <Badge variant="status">MFA active</Badge>
          <Badge variant="dot" isOnline>Connection Live</Badge>
          <Badge variant="dot" isOnline={false}>Database Offline</Badge>
        </div>
      </Card>
    </div>
  );
}
