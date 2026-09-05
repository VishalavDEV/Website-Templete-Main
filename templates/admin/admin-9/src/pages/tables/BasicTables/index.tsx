import React from 'react';
import { BasicTable, CompactTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';

export default function BasicTablesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
      <Card title="Standard Basic Table" subtitle="Default data grid layout with clean padding and status badges.">
        <BasicTable />
      </Card>
      <Card title="Compact High-Density Table" subtitle="Compressed rows designed for space-sensitive telemetry grids.">
        <CompactTable />
      </Card>
    </div>
  );
}
