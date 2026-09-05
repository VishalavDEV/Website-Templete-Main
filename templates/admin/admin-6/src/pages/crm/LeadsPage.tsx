import React, { useState } from 'react';
import { Plus, User, CheckCircle2, TrendingUp } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { Lead } from '../../types';
import { INITIAL_LEADS } from '../../data/mockData';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const LEAD_FUNNEL_DATA = [
  { stage: 'New', count: 48 },
  { stage: 'Contacted', count: 32 },
  { stage: 'Proposal', count: 18 },
  { stage: 'Qualified', count: 12 },
];

export const LeadsPage: React.FC = () => {
  const { showToast } = useToast();
  const [leads, setLeads] = useState<Lead[]>(() => storageService.get<Lead[]>('app_leads', INITIAL_LEADS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('Website Form');
  const [value, setValue] = useState(25000);
  const [assignedTo, setAssignedTo] = useState('Alexander Pierce');

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    const newLeadName = name.trim() || 'New Enterprise Lead';
    const newLeadCompany = company.trim() || 'TechCorp Global';
    const newLeadEmail = email.trim() || 'contact@techcorp.com';
    const newLeadPhone = phone.trim() || '+1 (555) 234-5678';

    const newLead: Lead = {
      id: `lead_${Date.now()}`,
      name: newLeadName,
      company: newLeadCompany,
      email: newLeadEmail,
      phone: newLeadPhone,
      source: source || 'Website Form',
      status: 'New',
      value: value || 25000,
      assignedTo: assignedTo || 'Alexander Pierce',
      createdAt: new Date().toISOString().split('T')[0],
    };

    const updated = [newLead, ...leads];
    setLeads(updated);
    storageService.set('app_leads', updated);
    showToast('Lead Created', `Added sales lead ${newLeadName} (${newLeadCompany})`);
    setIsModalOpen(false);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
  };

  const columns: Column<Lead>[] = [
    { key: 'name', header: 'Lead Name', sortable: true },
    { key: 'company', header: 'Company', sortable: true },
    { key: 'source', header: 'Lead Source' },
    { key: 'assignedTo', header: 'Sales Owner' },
    { key: 'value', header: 'Estimated Value', sortable: true, render: (l) => <span className="font-extrabold text-slate-900 dark:text-white">${l.value.toLocaleString()}</span> },
    { key: 'status', header: 'Status', render: (l) => <Badge variant={l.status === 'Qualified' ? 'success' : 'info'}>{l.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Lead Pipeline (CRM Sales)"
        subtitle="Inbound sales lead funnel, lead sources, assigned owners, and estimated deal values."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm cursor-pointer">
            <Plus className="w-4 h-4" /> Add Lead
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Leads Volume" value={leads.length.toString()} change={18.0} icon={User} />
        <StatCard title="Pipeline Estimate" value={`$${leads.reduce((acc, l) => acc + l.value, 0).toLocaleString()}`} change={24.0} icon={TrendingUp} />
        <StatCard title="Qualification Rate" value="64.2%" change={5.1} icon={CheckCircle2} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Inbound Lead Pipeline Funnel Stages</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={LEAD_FUNNEL_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="stage" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="count" fill="#6366f1" name="Leads Count" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={leads} keyExtractor={(l) => l.id} searchPlaceholder="Search leads..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Inbound Lead">
        <form onSubmit={handleAddLead} className="space-y-4">
          <FormInput label="Full Name" placeholder="e.g. Sarah Jenkins" value={name} onChange={(e) => setName(e.target.value)} required />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Company Name" placeholder="e.g. Apex Corp" value={company} onChange={(e) => setCompany(e.target.value)} required />
            <FormInput label="Email Address" type="email" placeholder="e.g. sarah@apex.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Phone" placeholder="e.g. +1 555-0192" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <FormInput label="Estimated Value ($)" type="number" value={value.toString()} onChange={(e) => setValue(Number(e.target.value))} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Lead Source"
              options={[
                { label: 'Website Form', value: 'Website Form' },
                { label: 'LinkedIn Outreach', value: 'LinkedIn Outreach' },
                { label: 'Trade Show Expo', value: 'Trade Show Expo' },
                { label: 'Partner Referral', value: 'Partner Referral' },
              ]}
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
            <FormSelect
              label="Sales Owner"
              options={[
                { label: 'Alexander Pierce', value: 'Alexander Pierce' },
                { label: 'Eleanor Vance', value: 'Eleanor Vance' },
                { label: 'Marcus Sterling', value: 'Marcus Sterling' },
              ]}
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl">Save Lead</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
