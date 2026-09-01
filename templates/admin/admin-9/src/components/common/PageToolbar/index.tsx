import React from 'react';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Button } from '../../ui/Button';

export function PageToolbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-card p-3 border border-border rounded-xl select-none shadow-sm">
      <div className="flex gap-1.5 w-full sm:w-auto">
        <Button variant="outline" size="sm" leftIcon={<Filter className="h-4 w-4" />}>Filter</Button>
        <Button variant="outline" size="sm" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Sort</Button>
      </div>
      <div className="flex gap-1 items-center justify-end w-full sm:w-auto">
        <button className="p-2 bg-muted/60 text-foreground rounded-lg cursor-pointer"><Grid className="h-4 w-4" /></button>
        <button className="p-2 text-muted-foreground hover:bg-accent rounded-lg cursor-pointer"><List className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
