import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '../../ui/Button';

export function SearchForm() {
  const [q, setQ] = useState('');
  return (
    <form className="flex gap-2 w-full max-w-md select-none" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search corporate archives, invoices, reports..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="h-9 w-full rounded-lg border border-border bg-card pl-9 pr-3 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground"
        />
      </div>
      <Button variant="primary" size="sm" type="submit">Submit</Button>
    </form>
  );
}
