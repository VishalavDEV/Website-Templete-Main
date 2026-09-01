import React from 'react';
import { DataTable } from '../../../components/tables';
import { Card } from '../../../components/ui/Card';

export default function DataTablesShowcase() {
  const mockData = [
    { id: '1', name: 'Diana Prince', email: 'diana@corp.com', role: 'Admin' },
    { id: '2', name: 'Ethan Hunt', email: 'ethan@corp.com', role: 'Manager' },
    { id: '3', name: 'Fiona Gallagher', email: 'fiona@corp.com', role: 'Auditor' }
  ];

  const columns = [
    { key: 'id', label: 'ID', isSortable: true },
    { key: 'name', label: 'Name', isSortable: true },
    { key: 'email', label: 'Email', isSortable: true },
    { key: 'role', label: 'Role', isSortable: true }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Card title="Search, Sort & Paginate DataTable" subtitle="Standard records management.">
        <DataTable columns={columns as any} data={mockData} isSearchable />
      </Card>
    </div>
  );
}
