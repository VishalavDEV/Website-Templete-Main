import React from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

export function InlineForm() {
  return (
    <form className="flex flex-wrap items-center gap-3 bg-card p-4 border border-border rounded-xl shadow-sm w-full select-none" onSubmit={(e)=>e.preventDefault()}>
      <span className="text-xs font-bold text-foreground">Fast Subscribe:</span>
      <Input placeholder="Enter work email" className="max-w-xs h-9" />
      <Button variant="primary" size="sm">Subscribe</Button>
    </form>
  );
}
