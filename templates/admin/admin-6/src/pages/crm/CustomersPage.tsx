import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Eye, Edit2, Trash2, ArrowLeft, User, CheckCircle2, TrendingUp } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ConfirmationDialog } from '../../components/common/ConfirmationDialog';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { customerService } from '../../services/customerService';
import { Customer, Lead } from '../../types';
import { INITIAL_LEADS } from '../../data/mockData';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CUSTOMER_GROWTH_DATA = [
  { month: 'Jan', active: 620, newCust: 45 },
  { month: 'Feb', active: 680, newCust: 60 },
  { month: 'Mar', active: 740, newCust: 65 },
  { month: 'Apr', active: 810, newCust: 70 },
  { month: 'May', active: 850, newCust: 40 },
  { month: 'Jun', active: 892, newCust: 42 },
];

const LEAD_FUNNEL_DATA = [
  { stage: 'New', count: 48 },
  { stage: 'Contacted', count: 32 },
  { stage: 'Proposal', count: 18 },
  { stage: 'Qualified', count: 12 },
];

const customerSchema = z.object({
  name: z.string().min(2, 'Customer name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  company: z.string().min(2, 'Company name is required'),
  status: z.enum(['Active', 'Lead', 'Inactive']),
  location: z.string().min(2, 'Location is required'),
  notes: z.string().optional(),
});

type CustomerFormData = z.infer<typeof customerSchema>;

export const CustomersPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [customers, setCustomers] = useState<Customer[]>(() => customerService.getCustomers());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingCustomerId, setDeletingCustomerId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: { status: 'Active' },
  });

  const refreshCustomers = () => {
    setCustomers(customerService.getCustomers());
  };

  const handleCreateCustomer = (data: CustomerFormData) => {
    const created = customerService.createCustomer({
      ...data,
      avatar: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80`,
      tags: ['New Account'],
    });
    refreshCustomers();
    showToast('Customer Created', `Added ${created.name} (${created.company})`);
    setIsAddModalOpen(false);
    reset();
  };

  const handleDeleteCustomer = () => {
    if (!deletingCustomerId) return;
    customerService.deleteCustomer(deletingCustomerId);
    refreshCustomers();
    showToast('Customer Deleted', 'Customer account permanently removed.', 'warning');
    setDeletingCustomerId(null);
  };

  const columns: Column<Customer>[] = [
    {
      key: 'name',
      header: 'Customer Name',
      sortable: true,
      render: (c) => (
        <div className="flex items-center gap-3">
          <img src={c.avatar} alt={c.name} className="w-9 h-9 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-800" />
          <div>
            <div onClick={() => navigate(`/crm/customers/${c.id}`)} className="font-bold text-slate-900 dark:text-white hover:text-brand-600 cursor-pointer">
              {c.name}
            </div>
            <div className="text-xs text-slate-400">{c.email}</div>
          </div>
        </div>
      ),
    },
    { key: 'company', header: 'Company', sortable: true },
    { key: 'location', header: 'Location' },
    {
      key: 'totalSpent',
      header: 'Total Spent',
      sortable: true,
      render: (c) => <span className="font-extrabold text-slate-900 dark:text-white">${c.totalSpent.toLocaleString()}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (c) => <Badge variant={c.status === 'Active' ? 'success' : c.status === 'Lead' ? 'warning' : 'neutral'}>{c.status}</Badge>,
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (c) => (
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(`/crm/customers/${c.id}`)} className="p-1.5 text-slate-500 hover:text-brand-600" title="View Profile">
            <Eye className="w-4 h-4" />
          </button>
          <button onClick={() => setDeletingCustomerId(c.id)} className="p-1.5 text-slate-500 hover:text-rose-600" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Customer Directory (CRM)"
        subtitle="Manage client relationships, contact details, tags, account status, and commercial notes."
        actions={
          <button onClick={() => { reset(); setIsAddModalOpen(true); }} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Customer
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Customers" value={customers.length.toString()} change={14.2} icon={User} />
        <StatCard title="Active Accounts" value={customers.filter((c) => c.status === 'Active').length.toString()} change={8.1} icon={CheckCircle2} />
        <StatCard title="Portfolio Value" value={`$${customers.reduce((acc, curr) => acc + curr.totalSpent, 0).toLocaleString()}`} change={19.5} icon={TrendingUp} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Customer Acquisition Growth Trajectory</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CUSTOMER_GROWTH_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="month" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Line type="monotone" dataKey="active" stroke="#0c93e7" strokeWidth={3} name="Total Active Accounts" />
              <Line type="monotone" dataKey="newCust" stroke="#10b981" strokeWidth={2} name="New Accounts / Mo" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable columns={columns} data={customers} keyExtractor={(c) => c.id} searchPlaceholder="Search customers..." />

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Create New Client Account">
        <form id="add-customer-form" onSubmit={handleSubmit(handleCreateCustomer)} className="space-y-4">
          <FormInput label="Full Name" required {...register('name')} error={errors.name?.message} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Email Address" type="email" required {...register('email')} error={errors.email?.message} />
            <FormInput label="Phone Number" required {...register('phone')} error={errors.phone?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Company Name" required {...register('company')} error={errors.company?.message} />
            <FormInput label="Location" required {...register('location')} error={errors.location?.message} />
          </div>
          <FormSelect label="Status" options={[{ label: 'Active', value: 'Active' }, { label: 'Lead', value: 'Lead' }, { label: 'Inactive', value: 'Inactive' }]} {...register('status')} />
          <FormInput label="Internal CRM Notes" {...register('notes')} />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Customer</button>
          </div>
        </form>
      </Modal>

      <ConfirmationDialog isOpen={!!deletingCustomerId} onClose={() => setDeletingCustomerId(null)} onConfirm={handleDeleteCustomer} title="Delete Account" message="Are you sure you want to delete this customer account?" />
    </div>
  );
};

export const CustomerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const customer = customerService.getCustomerById(id || '');

  if (!customer) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Customer Not Found</h2>
        <button onClick={() => navigate('/crm/customers')} className="mt-4 px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl">Back to Directory</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/crm/customers')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
        <ArrowLeft className="w-4 h-4" /> Back to Customers
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex items-center gap-6">
        <img src={customer.avatar} alt={customer.name} className="w-20 h-20 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800" />
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">{customer.name}</h1>
            <Badge variant="success">{customer.status}</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1">{customer.company} • {customer.location}</p>
          <div className="text-xs text-slate-400 mt-2">{customer.email} | {customer.phone} | Total Spent: ${customer.totalSpent.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

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
        title="Lead Pipeline"
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
          <FormInput label="Full Name" placeholder="e.g. Sarah Jenkins" value={name} onChange={(e) => setName(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Company Name" placeholder="e.g. Apex Corp" value={company} onChange={(e) => setCompany(e.target.value)} />
            <FormInput label="Email Address" type="email" placeholder="e.g. sarah@apex.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Phone" placeholder="e.g. +1 555-0192" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <FormInput label="Estimated Value ($)" type="number" value={value.toString()} onChange={(e) => setValue(Number(e.target.value))} />
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
