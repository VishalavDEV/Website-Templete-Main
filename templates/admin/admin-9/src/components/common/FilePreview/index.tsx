import React from 'react';
import { FileText, Trash2, Download } from 'lucide-react';

export function FilePreview({ name = 'invoice_Q3_2026.pdf', size = '1.4 MB' }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-border bg-card rounded-xl max-w-sm select-none shadow-sm">
      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0"><FileText className="h-5 w-5" /></div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-foreground truncate">{name}</p>
        <p className="text-[10px] text-muted-foreground">{size}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button title="Download" className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground cursor-pointer"><Download className="h-4 w-4" /></button>
        <button title="Delete" className="p-1.5 rounded hover:bg-destructive/10 text-destructive cursor-pointer"><Trash2 className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
