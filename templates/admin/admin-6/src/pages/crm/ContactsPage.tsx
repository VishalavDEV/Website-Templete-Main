import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { INITIAL_CONTACTS, INITIAL_COMPANIES, INITIAL_DEALS } from '../../data/mockData';
import { Contact, Company, Deal } from '../../types';
import { Users, Building, Briefcase, TrendingUp, Plus, Mail, ExternalLink } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';

export const ContactsPage: React.FC = () => {
  const { showToast } = useToast();
  const [contacts, setContacts] = useState<Contact[]>(() => storageService.get<Contact[]>('app_contacts', INITIAL_CONTACTS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState<'Primary' | 'Billing' | 'Technical'>('Primary');

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const newContact: Contact = {
      id: `cnt_${Date.now()}`,
      name,
      title,
      company,
      email,
      phone,
      type,
    };
    const updated = [newContact, ...contacts];
    setContacts(updated);
    storageService.set('app_contacts', updated);
    showToast('Contact Added', `Saved contact profile for ${name}`);
    setIsModalOpen(false);
    setName('');
    setTitle('');
    setEmail('');
    setPhone('');
  };

  const columns: Column<Contact>[] = [
    { key: 'name', header: 'Contact Name', sortable: true },
    { key: 'title', header: 'Job Title', sortable: true },
    { key: 'company', header: 'Company', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    {
      key: 'type',
      header: 'Role Type',
      sortable: true,
      render: (c) => (
        <Badge variant={c.type === 'Primary' ? 'indigo' : c.type === 'Billing' ? 'success' : 'info'}>
          {c.type}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (c) => (
        <button
          onClick={() => showToast('Email Outreach', `Drafting message to ${c.email}`)}
          className="px-3 py-1 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-xs font-semibold rounded-lg flex items-center gap-1 hover:bg-brand-100"
        >
          <Mail className="w-3.5 h-3.5" /> Email
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Contacts Directory"
        subtitle="Manage key stakeholder profiles, billing contacts, and technical leads across accounts."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Contact
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Directory Contacts" value={contacts.length.toString()} change={12.4} icon={Users} />
        <StatCard title="Primary Account Owners" value={contacts.filter((c) => c.type === 'Primary').length.toString()} change={8.1} icon={Building} />
        <StatCard title="Billing & Technical" value={contacts.filter((c) => c.type !== 'Primary').length.toString()} change={15.0} icon={Mail} />
      </div>

      <DataTable columns={columns} data={contacts} keyExtractor={(c) => c.id} searchPlaceholder="Search contacts by name, company, title..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Stakeholder Contact">
        <form onSubmit={handleAddContact} className="space-y-4">
          <FormInput label="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Job Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <FormInput label="Company Name" required value={company} onChange={(e) => setCompany(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Email Address" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput label="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <FormSelect
            label="Contact Role Type"
            options={[
              { label: 'Primary Contact', value: 'Primary' },
              { label: 'Billing Contact', value: 'Billing' },
              { label: 'Technical Lead', value: 'Technical' },
            ]}
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Contact</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const CompaniesPage: React.FC = () => {
  const { showToast } = useToast();
  const [companies, setCompanies] = useState<Company[]>(() => storageService.get<Company[]>('app_companies', INITIAL_COMPANIES));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('100-500 Employees');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [totalValue, setTotalValue] = useState(150000);

  const handleAddCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newCmp: Company = {
      id: `cmp_${Date.now()}`,
      name,
      industry,
      size,
      location,
      website: website.startsWith('http') ? website : `https://${website}`,
      dealsCount: 1,
      totalValue,
    };
    const updated = [newCmp, ...companies];
    setCompanies(updated);
    storageService.set('app_companies', updated);
    showToast('Company Added', `Registered corporate entity ${name}`);
    setIsModalOpen(false);
    setName('');
    setIndustry('');
    setLocation('');
  };

  const columns: Column<Company>[] = [
    { key: 'name', header: 'Company Name', sortable: true },
    { key: 'industry', header: 'Industry Sector', sortable: true },
    { key: 'size', header: 'Company Size' },
    { key: 'location', header: 'Location' },
    {
      key: 'totalValue',
      header: 'Portfolio Value',
      sortable: true,
      render: (c) => <span className="font-extrabold text-slate-900 dark:text-white">${c.totalValue.toLocaleString()}</span>,
    },
    {
      key: 'actions',
      header: 'Website',
      render: (c) => (
        <a href={c.website} target="_blank" rel="noreferrer" className="text-brand-600 dark:text-brand-400 font-semibold text-xs flex items-center gap-1 hover:underline">
          Visit <ExternalLink className="w-3 h-3" />
        </a>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Companies Directory"
        subtitle="B2B client organizations, parent enterprise entities, subsidiaries, and contract values."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Company
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active B2B Companies" value={companies.length.toString()} change={14.2} icon={Building} />
        <StatCard title="Total Account Pipeline" value={`$${companies.reduce((acc, c) => acc + c.totalValue, 0).toLocaleString()}`} change={22.8} icon={TrendingUp} />
        <StatCard title="Avg Contract Value" value={`$${Math.round(companies.reduce((acc, c) => acc + c.totalValue, 0) / companies.length).toLocaleString()}`} change={9.4} icon={Briefcase} />
      </div>

      <DataTable columns={columns} data={companies} keyExtractor={(c) => c.id} searchPlaceholder="Search companies..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register B2B Company">
        <form onSubmit={handleAddCompany} className="space-y-4">
          <FormInput label="Company Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Industry Sector" required value={industry} onChange={(e) => setIndustry(e.target.value)} />
            <FormInput label="Company Location" required value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Website Domain" required value={website} onChange={(e) => setWebsite(e.target.value)} />
            <FormInput label="Portfolio Value ($)" type="number" required value={totalValue.toString()} onChange={(e) => setTotalValue(Number(e.target.value))} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Company</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const DealsPage: React.FC = () => {
  const { showToast } = useToast();
  const [deals, setDeals] = useState<Deal[]>(() => storageService.get<Deal[]>('app_deals', INITIAL_DEALS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [value, setValue] = useState(50000);
  const [stage, setStage] = useState<'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost'>('Proposal');
  const [probability, setProbability] = useState(70);
  const [owner, setOwner] = useState('Alexander Pierce');

  const handleCreateDeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !company.trim()) return;
    const newDeal: Deal = {
      id: `deal_${Date.now()}`,
      title,
      company,
      value,
      stage,
      probability,
      closingDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      owner,
    };
    const updated = [newDeal, ...deals];
    setDeals(updated);
    storageService.set('app_deals', updated);
    showToast('Deal Created', `Added opportunity "${title}" ($${value.toLocaleString()})`);
    setIsModalOpen(false);
    setTitle('');
    setCompany('');
  };

  const STAGE_PIE = [
    { name: 'Negotiation', value: 40, color: '#0c93e7' },
    { name: 'Proposal', value: 30, color: '#6366f1' },
    { name: 'Closed Won', value: 30, color: '#10b981' },
  ];

  const columns: Column<Deal>[] = [
    { key: 'title', header: 'Opportunity Title', sortable: true },
    { key: 'company', header: 'Company', sortable: true },
    {
      key: 'value',
      header: 'Deal Value',
      sortable: true,
      render: (d) => <span className="font-extrabold text-slate-900 dark:text-white">${d.value.toLocaleString()}</span>,
    },
    {
      key: 'stage',
      header: 'Pipeline Stage',
      sortable: true,
      render: (d) => (
        <Badge variant={d.stage === 'Closed Won' ? 'success' : d.stage === 'Negotiation' ? 'info' : 'warning'}>
          {d.stage}
        </Badge>
      ),
    },
    { key: 'probability', header: 'Win Probability', render: (d) => <span className="font-bold">{d.probability}%</span> },
    { key: 'closingDate', header: 'Expected Close', sortable: true },
    { key: 'owner', header: 'Deal Owner' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Deals Pipeline"
        subtitle="Manage commercial deal velocity, opportunity stages, and forecast probability."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Create Deal
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Pipeline Value" value={`$${deals.reduce((acc, d) => acc + d.value, 0).toLocaleString()}`} change={16.5} icon={Briefcase} />
        <StatCard title="Win Rate" value="78.2%" change={5.1} icon={TrendingUp} />
        <StatCard title="Active Opportunities" value={deals.length.toString()} change={12.0} icon={Building} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataTable columns={columns} data={deals} keyExtractor={(d) => d.id} searchPlaceholder="Search deals..." />
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Deal Stage Distribution</h3>
            <p className="text-xs text-slate-500 mb-4">Value allocation across sales pipeline stages</p>
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={STAGE_PIE} innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value">
                    {STAGE_PIE.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Deal Opportunity">
        <form onSubmit={handleCreateDeal} className="space-y-4">
          <FormInput label="Opportunity Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Company" required value={company} onChange={(e) => setCompany(e.target.value)} />
            <FormInput label="Deal Value ($)" type="number" required value={value.toString()} onChange={(e) => setValue(Number(e.target.value))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Stage"
              options={[
                { label: 'Proposal', value: 'Proposal' },
                { label: 'Negotiation', value: 'Negotiation' },
                { label: 'Closed Won', value: 'Closed Won' },
              ]}
              value={stage}
              onChange={(e) => setStage(e.target.value as any)}
            />
            <FormInput label="Probability (%)" type="number" required value={probability.toString()} onChange={(e) => setProbability(Number(e.target.value))} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Deal</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
