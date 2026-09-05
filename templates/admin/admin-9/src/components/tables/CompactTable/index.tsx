import React from 'react';

const DEFAULT_COLUMNS = [
  { key: 'code', label: 'SKU Code' },
  { key: 'product', label: 'Product Name' },
  { key: 'category', label: 'Category' },
  { key: 'stock', label: 'Inventory' },
  { key: 'price', label: 'Unit Price' },
];

const DEFAULT_DATA = [
  { code: 'SKU-1049', product: 'Enterprise Server Node X1', category: 'Hardware', stock: '142 units', price: '$1,299.00' },
  { code: 'SKU-1050', product: 'Cloud Security Gateway Pro', category: 'Software', stock: '85 licenses', price: '$499.00' },
  { code: 'SKU-1051', product: 'High-Density Storage Blade', category: 'Hardware', stock: '28 units', price: '$850.00' },
  { code: 'SKU-1052', product: 'Neural Compute Accelerator', category: 'AI/ML', stock: '64 units', price: '$2,100.00' },
  { code: 'SKU-1053', product: 'Zero-Trust VPN Appliance', category: 'Security', stock: '91 units', price: '$699.00' },
];

export function CompactTable({ data, columns }: { data?: any[]; columns?: any[] }) {
  const activeColumns = columns && columns.length > 0 ? columns : DEFAULT_COLUMNS;
  const activeData = data && data.length > 0 ? data : DEFAULT_DATA;

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm select-none">
      <table className="min-w-full divide-y divide-border text-[11px]">
        <thead className="bg-muted/40">
          <tr>
            {activeColumns.map((c) => (
              <th key={c.key} className="px-3 py-2 text-left font-bold text-muted-foreground/80 uppercase">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {activeData.map((row, i) => (
            <tr key={i} className="hover:bg-accent/10 transition-colors">
              {activeColumns.map((c) => (
                <td key={c.key} className="px-3 py-2 text-foreground/90">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
