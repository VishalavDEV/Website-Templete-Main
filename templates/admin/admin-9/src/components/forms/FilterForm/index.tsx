import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Select } from '../../ui/Select';

export function FilterForm() {
  const [status, setStatus] = useState('all');
  const [dateRange, setDateRange] = useState('30d');

  return (
    <div className="bg-card p-4 border border-border rounded-xl shadow-sm space-y-3 w-full max-w-sm select-none">
      <h4 className="text-xs font-bold text-muted-foreground uppercase">Filter Archives</h4>
      
      <div className="space-y-3">
        <div>
          <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Entity Status</label>
          <Select
            options={[
              { label: 'All records', value: 'all' },
              { label: 'Active billing', value: 'active' },
              { label: 'Staged Sandbox', value: 'sandbox' }
            ]}
            value={status}
            onChange={setStatus}
          />
        </div>
        
        <div>
          <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Time Scope</label>
          <Select
            options={[
              { label: 'Last 30 Days', value: '30d' },
              { label: 'Last 6 Months', value: '6m' },
              { label: 'Year to Date', value: 'ytd' }
            ]}
            value={dateRange}
            onChange={setDateRange}
          />
        </div>
      </div>

      <Button variant="outline" size="sm" className="w-full mt-2">Reset Filters</Button>
    </div>
  );
}
