import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { INITIAL_LEADS } from '../../data/mockData';
import { Lead } from '../../types';
import { useToast } from '../../context/ToastContext';
import { Plus } from 'lucide-react';

export const LeadsPage: React.FC = () => {
  const { showToast } = useToast();
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);

  const columns: Column<Lead>[] = [
    { key: 'name', header: 'Lead Name', sortable: true },
    { key: 'company', header: 'Company', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'source', header: 'Lead Source', sortable: true },
    {
      key: 'value',
      header: 'Est. Value',
      sortable: true,
      render: (l) => <span className="font-bold">${l.value.toLocaleString()}</span>,
    },
    {
      key: 'status',
      header: 'Stage Status',
      sortable: true,
      render: (l) => (
        <Badge
          variant={
            l.status === 'Qualified'
              ? 'success'
              : l.status === 'Proposal'
              ? 'info'
              : 'neutral'
          }
        >
          {l.status}
        </Badge>
      ),
    },
    { key: 'assignedTo', header: 'Assigned Owner' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Sales Leads"
        subtitle="Manage incoming sales leads, qualification status, and pipeline conversion."
        actions={
          <button
            onClick={() => showToast('New Lead Modal', 'Add Lead form initiated')}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Lead
          </button>
        }
      />
      <DataTable columns={columns} data={leads} keyExtractor={(l) => l.id} searchPlaceholder="Search leads..." />
    </div>
  );
};
