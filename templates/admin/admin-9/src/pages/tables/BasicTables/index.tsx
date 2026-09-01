import React from 'react';
import { BasicTable, CompactTable } from '../../../components/tables';

export default function BasicTablesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <BasicTable />
      <CompactTable />
    </div>
  );
}
