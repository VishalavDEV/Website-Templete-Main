import React, { useState } from 'react';
import { MoreVertical, Edit2, Trash, Check } from 'lucide-react';

export function ActionMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative select-none">
      <button onClick={() => setOpen(!isOpen)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
        <MoreVertical className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 rounded-lg border border-border bg-card p-1 shadow-xl z-50 animate-in fade-in duration-150">
          <button className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs rounded hover:bg-accent text-foreground cursor-pointer">
            <Edit2 className="h-3.5 w-3.5 text-muted-foreground" /> <span>Edit record</span>
          </button>
          <button className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs rounded hover:bg-accent text-foreground cursor-pointer">
            <Check className="h-3.5 w-3.5 text-muted-foreground" /> <span>Audit check</span>
          </button>
          <button className="flex items-center gap-2 w-full text-left px-3 py-1.5 text-xs rounded hover:bg-accent text-destructive cursor-pointer">
            <Trash className="h-3.5 w-3.5" /> <span>Delete entity</span>
          </button>
        </div>
      )}
    </div>
  );
}
