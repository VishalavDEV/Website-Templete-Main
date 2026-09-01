import React from 'react';

export function CompactTable({ data = [], columns = [] }: { data?: any[]; columns?: any[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm select-none">
      <table className="min-w-full divide-y divide-border text-[11px]">
        <thead className="bg-muted/40">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-3 py-2 text-left font-bold text-muted-foreground/80 uppercase">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-accent/10 transition-colors">
              {columns.map((c) => (
                <td key={c.key} className="px-3 py-2 text-foreground/90">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
