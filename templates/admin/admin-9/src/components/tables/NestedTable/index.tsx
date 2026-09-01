import React from 'react';
import { DataTable } from '../DataTable';

export function NestedTable<T extends { id: string | number }>({ columns, data }: { columns: any[]; data: T[] }) {
  return <DataTable columns={columns} data={data} isExpandable renderExpandedRow={(row) => <div className="p-3 border border-border bg-card rounded-lg text-xs"><p className="font-bold mb-2">Sub-Items</p><table className="w-full text-left"><thead><tr><th className="pb-1 border-b">Detail</th><th className="pb-1 border-b">Value</th></tr></thead><tbody><tr><td className="py-1">Reference code</td><td>SYS-A22</td></tr></tbody></table></div>} />;
}
