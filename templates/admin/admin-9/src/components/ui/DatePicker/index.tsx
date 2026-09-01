import React from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '../Input';

export function DatePicker({ label, onChange }: { label?: string; onChange?: (val: string) => void }) {
  return (
    <Input
      label={label}
      type="date"
      leftIcon={<Calendar className="h-4.5 w-4.5 text-muted-foreground" />}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
