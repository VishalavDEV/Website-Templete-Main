import React from 'react';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';

export default function EditableTablesShowcase() {
  const mockData = [
    { id: '1', name: 'Diana Prince', role: 'Admin' },
    { id: '2', name: 'Ethan Hunt', role: 'Manager' }
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Card title="Inline cell / row editable table" subtitle="Click edit pencil icon to modify text fields inline.">
        <DataTable columns={columns as any} data={mockData} />
      </Card>
    </div>
  );
}
