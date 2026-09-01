import React from 'react';
import { DataTable, StickyTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

export default function AdvancedTablesShowcase() {
  const mockData = [
    { id: '1', name: 'Diana Prince', role: 'Admin', details: 'Clearance level: Class-3.' },
    { id: '2', name: 'Ethan Hunt', role: 'Manager', details: 'Staging cluster operations lead.' }
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' }
  ];

  return (
    <div className="space-y-6">
      <Card title="Bulk actions & Expandable Row drawers" subtitle="Toggle checkboxes or row arrows.">
        <DataTable 
          columns={columns as any} 
          data={mockData} 
          isSelectable 
          isExpandable
          renderExpandedRow={(row) => (
            <div className="p-3 bg-muted/20 border border-border/80 rounded-lg text-xs leading-relaxed">
              <strong>Staged details:</strong> {row.details}
            </div>
          )}
          bulkActions={(selected) => (
            <Button size="sm" variant="destructive" onClick={() => alert(`Delete ${selected.length} records`)}>Delete Selected</Button>
          )}
        />
      </Card>

      <StickyTable />
    </div>
  );
}
