import React from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export function VerticalForm() {
  return (
    <div className="bg-card p-5 border border-border rounded-xl shadow-sm space-y-4 max-w-sm w-full">
      <h3 className="text-sm font-bold text-foreground">Vertical Form stacked</h3>
      <form className="space-y-3">
        <div>
          <label className="text-xs font-bold text-muted-foreground mb-1 block">Account Ref</label>
          <Input placeholder="ACC-8201-99" />
        </div>
        <div>
          <label className="text-xs font-bold text-muted-foreground mb-1 block">Secret Token</label>
          <Input type="password" placeholder="••••••••••••••" />
        </div>
        <Button variant="primary" size="sm" className="w-full">Sign Authorization</Button>
      </form>
    </div>
  );
}
