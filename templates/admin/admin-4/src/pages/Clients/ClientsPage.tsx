import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Modal } from '../../components/Common/Modal';
import { Building2, Plus, Mail, Phone, MapPin, DollarSign, ArrowUpRight, Search } from 'lucide-react';

export const ClientsPage: React.FC = () => {
  const { clients, addClient, projects } = useApp();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('Financial Services');
  const [contractValue, setContractValue] = useState('250000');
  const [address, setAddress] = useState('100 Financial Way, New York, NY');

  const filteredClients = clients.filter(
    c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addClient({
      name: name.trim(),
      company: company.trim() || name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      avatar: `https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150`,
      industry,
      address,
      status: 'Active',
      totalContractValue: parseFloat(contractValue) || 100000
    });

    setIsModalOpen(false);
    setName('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Client Accounts CRM</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Enterprise clients, contract values, active project links, and contacts.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setIsModalOpen(true)}>
          Add New Client
        </Button>
      </div>

      <div className="flex items-center gap-3 bg-app-surface p-4 border border-app rounded-2xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-app-muted absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search clients by company name or industry..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClients.map(c => {
          const clientProjects = projects.filter(p => p.clientId === c.id);
          return (
            <Card key={c.id} className="space-y-4 hover:border-amber-500/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img src={c.avatar} alt={c.name} className="w-10 h-10 rounded-xl object-cover border border-app" />
                  <div>
                    <h3
                      onClick={() => navigate(`/clients/${c.id}`)}
                      className="text-base font-bold text-app-primary hover:text-amber-400 cursor-pointer"
                    >
                      {c.name}
                    </h3>
                    <p className="text-xs text-app-secondary">{c.industry}</p>
                  </div>
                </div>
                <Badge variant={c.status === 'Active' ? 'success' : 'warning'}>{c.status}</Badge>
              </div>

              <div className="space-y-2 pt-3 border-t border-app text-xs text-app-secondary">
                <div className="flex justify-between">
                  <span>Contract Value:</span>
                  <strong className="text-emerald-400 font-bold">${c.totalContractValue.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Active Projects:</span>
                  <strong className="text-app-primary">{clientProjects.length} projects</strong>
                </div>
                <div className="flex items-center gap-1.5 text-app-muted pt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{c.address}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-app">
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(`/clients/${c.id}`)}>
                  View Client Profile
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Add Client Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Corporate Client"
        size="md"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create Client
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-app-primary mb-1">Company Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Apex Global Systems"
              className="w-full px-3.5 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-app-primary mb-1">Industry</label>
              <input
                type="text"
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-app-primary mb-1">Contract Value ($)</label>
              <input
                type="number"
                value={contractValue}
                onChange={e => setContractValue(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-app-primary mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const ClientDetailsPage: React.FC = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { clients, projects } = useApp();
  const navigate = useNavigate();

  const client = clients.find(c => c.id === clientId) || clients[0];

  if (!client) return <div className="p-8 text-center text-app-muted">Client record not found.</div>;

  const clientProjects = projects.filter(p => p.clientId === client.id);

  return (
    <div className="space-y-6">
      <Button variant="outline" size="sm" onClick={() => navigate('/clients')}>
        Back to Clients
      </Button>

      <div className="bg-app-surface border border-app rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={client.avatar} alt={client.name} className="w-14 h-14 rounded-2xl object-cover border border-app" />
          <div>
            <h1 className="text-xl font-bold text-app-primary">{client.name}</h1>
            <p className="text-xs text-app-secondary">{client.industry} • Joined {client.joinedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="text-center p-3 rounded-xl bg-app-secondary border border-app">
            <span className="text-app-muted block">Contract Value</span>
            <span className="font-bold text-emerald-400">${client.totalContractValue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Card title={`Client Projects (${clientProjects.length})`}>
        <div className="space-y-2 text-xs">
          {clientProjects.map(p => (
            <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-app-secondary/40 border border-app">
              <div>
                <p className="font-bold text-app-primary">{p.name}</p>
                <p className="text-[11px] text-app-secondary">{p.code} • PM: {p.projectManagerName}</p>
              </div>
              <Button size="sm" onClick={() => navigate(`/projects/${p.id}`)}>
                Open Project
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
