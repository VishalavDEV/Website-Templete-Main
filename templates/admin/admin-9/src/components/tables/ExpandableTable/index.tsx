import React from 'react';
import { DataTable } from '../DataTable';

export function ExpandableTable<T extends { id: string | number }>({ columns, data }: { columns: any[]; data: T[] }) {
  return <DataTable columns={columns} data={data} isExpandable renderExpandedRow={(row) => <div className="text-xs text-muted-foreground p-2">Detailed parameters for ID: {row.id}</div>} />;
}
