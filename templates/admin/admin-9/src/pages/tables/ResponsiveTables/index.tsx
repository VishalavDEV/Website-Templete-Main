import React from 'react';
import { StickyTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';

export default function ResponsiveTablesShowcase() {
  return (
    <div className="max-w-3xl mx-auto">
      <Card title="Horizontal scroll responsive table" subtitle="Enables horizontal scroll bar on mobile viewports.">
        <StickyTable />
      </Card>
    </div>
  );
}
