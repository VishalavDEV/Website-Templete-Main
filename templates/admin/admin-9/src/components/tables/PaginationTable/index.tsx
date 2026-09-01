import React from 'react';
import { DataTable } from '../DataTable';

export function PaginationTable<T extends { id: string | number }>({ columns, data }: { columns: any[]; data: T[] }) {
  return <DataTable columns={columns} data={data}  />;
}
