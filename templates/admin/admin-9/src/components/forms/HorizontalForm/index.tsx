import React from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export function HorizontalForm() {
  return (
    <div className="bg-card p-5 border border-border rounded-xl shadow-sm space-y-4 w-full">
      <h3 className="text-sm font-bold text-foreground">Horizontal Row alignment</h3>
      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="sm:w-32 text-xs font-bold text-muted-foreground sm:text-right shrink-0">Security Key</label>
          <div className="flex-1">
            <Input placeholder="Enter custom RSA authorization key" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="sm:w-32 text-xs font-bold text-muted-foreground sm:text-right shrink-0">Fallback Server</label>
          <div className="flex-1">
            <Input placeholder="https://api-backup.corporation.com" />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save keys</Button>
        </div>
      </form>
    </div>
  );
}
