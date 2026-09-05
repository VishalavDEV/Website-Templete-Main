import React from 'react';

const DEFAULT_COLUMNS = [
  { key: 'id', label: 'User ID' },
  { key: 'name', label: 'Customer Name' },
  { key: 'email', label: 'Email Address' },
  { key: 'role', label: 'System Role' },
  { key: 'status', label: 'Status' },
  { key: 'spent', label: 'Total Volume' },
];

const DEFAULT_DATA = [
  { id: 'USR-8901', name: 'Eleanor Vance', email: 'eleanor@vance-analytics.com', role: 'System Admin', status: 'Active', spent: '$24,500' },
  { id: 'USR-8902', name: 'Marcus Brody', email: 'marcus@archaeo-data.org', role: 'Data Auditor', status: 'Pending', spent: '$12,800' },
  { id: 'USR-8903', name: 'Sophia Sterling', email: 'sophia@sterling-sys.io', role: 'Engineering Lead', status: 'Active', spent: '$48,200' },
  { id: 'USR-8904', name: 'Julian Thorne', email: 'j.thorne@quantum.net', role: 'DevOps Engineer', status: 'Suspended', spent: '$8,400' },
  { id: 'USR-8905', name: 'Amara Chen', email: 'amara@nexus-cloud.com', role: 'Product Manager', status: 'Active', spent: '$31,900' },
];

export function BasicTable({ data, columns }: { data?: any[]; columns?: any[] }) {
  const activeColumns = columns && columns.length > 0 ? columns : DEFAULT_COLUMNS;
  const activeData = data && data.length > 0 ? data : DEFAULT_DATA;

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="min-w-full divide-y divide-border text-xs">
        <thead className="bg-muted/30">
          <tr>
            {activeColumns.map((c) => (
              <th key={c.key} className="px-4 py-3 text-left font-bold text-muted-foreground/80 uppercase">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {activeData.map((row, i) => (
            <tr key={i} className="hover:bg-accent/15 transition-colors">
              {activeColumns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-foreground/90 font-medium">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
