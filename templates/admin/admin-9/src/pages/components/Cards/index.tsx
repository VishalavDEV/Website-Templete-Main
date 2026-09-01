import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Avatar } from '../../../components/ui/Avatar';
import { Button } from '../../../components/ui/Button';

export default function CardsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Basic Info Card" subtitle="Standard metadata card description.">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Standard layout grid used to organize settings forms or display detailed log credentials.
        </p>
      </Card>

      <Card title="Database Node Stat Card">
        <div className="flex items-end justify-between mt-2">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Active CPU Load</span>
            <div className="text-2xl font-extrabold text-foreground">16% CPU</div>
          </div>
          <Badge variant="success">Healthy</Badge>
        </div>
      </Card>

      <Card title="Staff Directory Profile Card">
        <div className="flex items-center gap-4 py-2">
          <Avatar name="Diana Prince" size="md" isOnline />
          <div>
            <h4 className="text-xs font-bold text-foreground">Diana Prince</h4>
            <p className="text-[10px] text-muted-foreground uppercase font-bold mt-0.5">Security Architect</p>
          </div>
        </div>
      </Card>

      <Card title="Action Preview Card" subtitle="Click options below.">
        <div className="flex gap-2 justify-end border-t border-border/50 pt-4 mt-2">
          <Button variant="outline" size="sm">Discard</Button>
          <Button variant="primary" size="sm">Save keys</Button>
        </div>
      </Card>
    </div>
  );
}
