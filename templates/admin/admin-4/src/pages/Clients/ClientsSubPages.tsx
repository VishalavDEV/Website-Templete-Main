import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Modal } from '../../components/Common/Modal';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  GitBranch,
  FileCheck,
  Globe,
  HeartPulse,
  Search,
  Plus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const SUB_TABS = [
  { name: 'Client Accounts', path: '/clients/accounts', icon: Building2 },
  { name: 'Lead Pipeline', path: '/clients/pipeline', icon: GitBranch },
  { name: 'Contracts & SLA', path: '/clients/contracts', icon: FileCheck },
  { name: 'Client Portals', path: '/clients/portals', icon: Globe },
  { name: 'Account Health', path: '/clients/health', icon: HeartPulse }
];

export const ClientsSubPages: React.FC<{ subPage: string }> = ({ subPage }) => {
  const { clients, addClient, addToast } = useApp();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Modals state
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [isDomainModalOpen, setIsDomainModalOpen] = useState(false);

  // Form states
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('Technology & Software');
  const [contactEmail, setContactEmail] = useState('');
  const [contractValue, setContractValue] = useState('350000');

  // Domain form states
  const [customDomain, setCustomDomain] = useState('portal.corevista.io');
  const [sslEnforced, setSslEnforced] = useState(true);

  const handleAddClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) return;

    addClient({
      name: companyName.trim(),
      company: companyName.trim(),
      industry: industry,
      email: contactEmail.trim() || `contact@${companyName.toLowerCase().replace(/\s+/g, '')}.com`,
      phone: '+1 (555) 019-2834',
      address: 'San Francisco, CA',
      status: 'Active',
      totalContractValue: parseFloat(contractValue) || 250000
    });

    addToast(`Successfully created new client account "${companyName}".`, 'success');
    setIsAddClientOpen(false);
    setCompanyName('');
    setContactEmail('');
  };

  const handleDomainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast(`White-label portal domain configured: https://${customDomain}`, 'success');
    setIsDomainModalOpen(false);
  };

  const pipelineData = [
    { stage: 'Prospecting', value: 120000, count: 14 },
    { stage: 'Proposal Sent', value: 240000, count: 9 },
    { stage: 'Negotiation', value: 180000, count: 5 },
    { stage: 'Won / Signed', value: 450000, count: 18 }
  ];

  const clientHealthData = [
    { month: 'Q1', csatScore: 92, nps: 68 },
    { month: 'Q2', csatScore: 94, nps: 72 },
    { month: 'Q3', csatScore: 91, nps: 69 },
    { month: 'Q4', csatScore: 96, nps: 78 }
  ];

  const contractsList = [
    { id: 'cnt-1', client: 'Acme Global Tech', value: '$320,000', sla: '99.99%', expires: '2026-12-31', status: 'Active' },
    { id: 'cnt-2', client: 'Starlight Bio-Labs', value: '$185,000', sla: '99.95%', expires: '2026-10-15', status: 'Active' },
    { id: 'cnt-3', client: 'FinTech Capital Bank', value: '$450,000', sla: '99.99%', expires: '2027-04-30', status: 'Renewal Pending' },
    { id: 'cnt-4', client: 'Quantum Cloud Corp', value: '$210,000', sla: '99.90%', expires: '2026-11-20', status: 'Active' }
  ];

  const portalUsersList = [
    { id: 'usr-1', company: 'Acme Global Tech', admin: 'Sarah Jenkins', lastActive: '10 mins ago', portalStatus: 'Enabled' },
    { id: 'usr-2', company: 'Starlight Bio-Labs', admin: 'Dr. Robert Miller', lastActive: '2 hrs ago', portalStatus: 'Enabled' },
    { id: 'usr-3', company: 'FinTech Capital Bank', admin: 'David K. Vance', lastActive: 'Yesterday', portalStatus: 'Enabled' }
  ];

  const filteredClients = clients.filter(c => 
    (c.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (c.industry || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-app pb-4">
        <div>
          <h1 className="text-2xl font-bold text-app-primary flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            Client Relationship & CRM Intelligence
          </h1>
          <p className="text-xs text-app-muted mt-1">
            Manage enterprise accounts, lead pipelines, active contracts, and satisfaction scoring.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-app-secondary/40 p-1 rounded-xl border border-app overflow-x-auto">
          {SUB_TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = subPage === tab.path.split('/')[2];
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-app-secondary hover:text-app-primary hover:bg-app-hover'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* SUBPAGE 1: CLIENT ACCOUNTS */}
      {(subPage === 'accounts' || !subPage) && (
        <Card title="Enterprise Client Accounts Directory">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-app-muted absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search client or industry..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-app-hover border border-app rounded-xl pl-9 pr-3 py-2 text-xs text-app-primary focus:outline-none focus:border-blue-500"
                />
              </div>
              <Button size="sm" variant="primary" icon={<Plus className="w-3.5 h-3.5" />} onClick={() => setIsAddClientOpen(true)}>
                Add New Client
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Client Company</th>
                    <th className="p-3">Industry</th>
                    <th className="p-3">Contact Email</th>
                    <th className="p-3">Contract Value</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {filteredClients.map(c => (
                    <tr key={c.id} className="hover:bg-app-hover/50 cursor-pointer" onClick={() => navigate(`/clients/${c.id}`)}>
                      <td className="p-3 flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                          {c.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="font-semibold text-app-primary hover:text-blue-400">{c.name}</span>
                      </td>
                      <td className="p-3 text-app-secondary">{c.industry}</td>
                      <td className="p-3 text-app-secondary">{c.email}</td>
                      <td className="p-3 font-mono font-semibold text-emerald-400">${c.totalContractValue ? c.totalContractValue.toLocaleString() : '250,000'}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          {c.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); navigate(`/clients/${c.id}`); }}>
                          Manage Account
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 2: LEAD PIPELINE */}
      {subPage === 'pipeline' && (
        <div className="space-y-6">
          <Card title="Deal Pipeline Value ($ USD)">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pipelineData}>
                  <XAxis dataKey="stage" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Bar dataKey="value" fill="#3b82f6" name="Total Pipeline ($)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="CRM Sales & Lead Pipeline Board">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {pipelineData.map(p => (
                <div key={p.stage} className="p-3 rounded-2xl bg-app-secondary/30 border border-app space-y-3">
                  <div className="flex items-center justify-between font-bold text-xs text-app-primary border-b border-app pb-2">
                    <span>{p.stage}</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px]">${(p.value/1000).toFixed(0)}k</span>
                  </div>
                  <div className="p-3 rounded-xl bg-app-surface border border-app shadow-xs space-y-2">
                    <span className="font-semibold text-xs text-app-primary block">{p.stage} Account Prospect</span>
                    <p className="text-[11px] text-app-muted">{p.count} active deals</p>
                    <Button size="sm" variant="outline" className="w-full text-[10px]" icon={<ArrowRight className="w-3 h-3" />} onClick={() => addToast(`Moved lead stage for ${p.stage}`, 'success')}>
                      Advance Stage
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* SUBPAGE 3: CONTRACTS & SLA */}
      {subPage === 'contracts' && (
        <Card title="Active Client Contracts & SLA Commitments">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-3">Contract ID</th>
                  <th className="p-3">Client Company</th>
                  <th className="p-3">Contract Value</th>
                  <th className="p-3">SLA Guarantee</th>
                  <th className="p-3">Expiration Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-app font-mono">
                {contractsList.map(c => (
                  <tr key={c.id} className="hover:bg-app-hover/50">
                    <td className="p-3 font-semibold text-blue-400">{c.id}</td>
                    <td className="p-3 font-semibold text-app-primary font-sans">{c.client}</td>
                    <td className="p-3 text-emerald-400 font-bold">{c.value}</td>
                    <td className="p-3 text-blue-400">{c.sla}</td>
                    <td className="p-3 text-app-muted">{c.expires}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                        c.status.includes('Pending') ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3 text-right font-sans">
                      <Button size="sm" variant="outline" onClick={() => addToast(`Renewing contract for ${c.client}`, 'info')}>
                        Renew SLA
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SUBPAGE 4: CLIENT PORTALS */}
      {subPage === 'portals' && (
        <Card title="Client Portal Access & Authentication Control">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
              <div>
                <span className="font-bold block text-sm">Enterprise White-Label Portal Enabled</span>
                <span>Clients can inspect real-time project milestones, submit tickets, and download invoices.</span>
              </div>
              <Button size="sm" variant="primary" icon={<Globe className="w-3.5 h-3.5" />} onClick={() => setIsDomainModalOpen(true)}>
                Configure Domain
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-app-secondary/50 text-app-muted font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Client Organization</th>
                    <th className="p-3">Portal Administrator</th>
                    <th className="p-3">Last Active Login</th>
                    <th className="p-3">Portal Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app">
                  {portalUsersList.map(u => (
                    <tr key={u.id} className="hover:bg-app-hover/50">
                      <td className="p-3 font-semibold text-app-primary">{u.company}</td>
                      <td className="p-3 text-app-secondary">{u.admin}</td>
                      <td className="p-3 text-app-muted font-mono">{u.lastActive}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          {u.portalStatus}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <Button size="sm" variant="outline" onClick={() => addToast(`Reset portal credentials for ${u.company}`, 'info')}>
                          Reset Access
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {/* SUBPAGE 5: ACCOUNT HEALTH */}
      {subPage === 'health' && (
        <div className="space-y-6">
          <Card title="Quarterly Client CSAT & NPS Health Trends">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={clientHealthData}>
                  <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Legend />
                  <Line type="monotone" dataKey="csatScore" stroke="#10b981" strokeWidth={3} name="CSAT Score (%)" />
                  <Line type="monotone" dataKey="nps" stroke="#8b5cf6" strokeWidth={3} name="Net Promoter Score" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Average CSAT Score</span>
              <p className="text-3xl font-extrabold text-emerald-400 mt-1">94.8%</p>
              <span className="text-[11px] text-emerald-500 font-semibold mt-1 block">Top 5% Industry Benchmark</span>
            </Card>

            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Net Promoter Score (NPS)</span>
              <p className="text-3xl font-extrabold text-blue-400 mt-1">+74</p>
              <span className="text-[11px] text-blue-500 font-semibold mt-1 block">Excellent Retention Tier</span>
            </Card>

            <Card className="p-4">
              <span className="text-xs text-app-muted font-medium">Churn Risk Rating</span>
              <p className="text-3xl font-extrabold text-purple-400 mt-1">0.4%</p>
              <span className="text-[11px] text-purple-400 font-semibold mt-1 block">Low Risk Across Portfolio</span>
            </Card>
          </div>
        </div>
      )}

      {/* Add New Client Modal */}
      <Modal
        isOpen={isAddClientOpen}
        onClose={() => setIsAddClientOpen(false)}
        title="Add New Client Account"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsAddClientOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddClientSubmit}>
              Create Client
            </Button>
          </>
        }
      >
        <form onSubmit={handleAddClientSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Company Name *</label>
            <input
              type="text"
              required
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              placeholder="e.g. Apex Global Tech Solutions"
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Industry</label>
              <select
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none"
              >
                <option value="Technology & Software">Technology & Software</option>
                <option value="FinTech & Banking">FinTech & Banking</option>
                <option value="Healthcare & BioTech">Healthcare & BioTech</option>
                <option value="Ecommerce & Retail">Ecommerce & Retail</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-app-primary mb-1">Contract Value ($ USD)</label>
              <input
                type="number"
                value={contractValue}
                onChange={e => setContractValue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-app-primary mb-1">Primary Contact Email</label>
            <input
              type="email"
              value={contactEmail}
              onChange={e => setContactEmail(e.target.value)}
              placeholder="e.g. admin@apextech.com"
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
      </Modal>

      {/* Configure White-Label Domain Modal */}
      <Modal
        isOpen={isDomainModalOpen}
        onClose={() => setIsDomainModalOpen(false)}
        title="Configure White-Label Client Portal Domain"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsDomainModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleDomainSubmit}>
              Save Domain Configuration
            </Button>
          </>
        }
      >
        <form onSubmit={handleDomainSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Custom Portal Domain (CNAME)</label>
            <input
              type="text"
              required
              value={customDomain}
              onChange={e => setCustomDomain(e.target.value)}
              placeholder="e.g. portal.clients.yourcompany.com"
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-app-primary focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          <div className="p-3 rounded-xl bg-app-secondary/40 border border-app flex items-center justify-between">
            <div>
              <span className="font-semibold text-app-primary block">Enforce TLS 1.3 SSL Encryption</span>
              <span className="text-app-muted">Auto-issue Let's Encrypt Wildcard SSL</span>
            </div>
            <input
              type="checkbox"
              checked={sslEnforced}
              onChange={e => setSslEnforced(e.target.checked)}
              className="rounded border-app text-blue-600 cursor-pointer"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};


