import React from 'react';

export function StickyTable({ data = [], columns = [] }: { data?: any[]; columns?: any[] }) {
  return (
    <div className="overflow-auto rounded-xl border border-border bg-card shadow-sm max-h-60 select-none">
      <table className="min-w-full divide-y divide-border text-xs">
        <thead className="bg-muted sticky top-0 z-10 shadow-sm border-b border-border">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-3 text-left font-bold text-muted-foreground/80 uppercase">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-accent/10 transition-colors">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-foreground/90">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
