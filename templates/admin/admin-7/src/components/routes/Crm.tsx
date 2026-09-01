import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Contact } from '../../data/initialData';
import { StatusBadge, Modal, EmptyState } from '../ui/GlobalComponents';
import { Users2, Plus } from 'lucide-react';

export const Crm: React.FC = () => {
  const { 
    contacts, 
    createContact, 
    updateContact, 
    deleteContact 
  } = useApp();

  const [searchVal, setSearchVal] = useState('');
  const [pipelineView, setPipelineView] = useState(true);

  // Modal State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newStatus, setNewStatus] = useState<Contact['status']>('Lead');
  const [newVal, setNewVal] = useState(25000);

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newCompany.trim()) return;

    createContact({
      name: newName,
      company: newCompany,
      email: newEmail,
      phone: newPhone,
      status: newStatus,
      dealValue: Number(newVal),
    });

    setNewName('');
    setNewCompany('');
    setNewEmail('');
    setNewPhone('');
    setIsCreateOpen(false);
  };

  const moveStage = (ct: Contact, direction: 'forward' | 'backward') => {
    const sequence: Contact['status'][] = ['Lead', 'Contacted', 'Qualified', 'Proposal', 'Negotiation', 'Won', 'Lost'];
    const currentIdx = sequence.indexOf(ct.status);
    let nextIdx = currentIdx;

    if (direction === 'forward' && currentIdx < sequence.length - 1) {
      nextIdx += 1;
    } else if (direction === 'backward' && currentIdx > 0) {
      nextIdx -= 1;
    }

    if (nextIdx !== currentIdx) {
      updateContact({
        ...ct,
        status: sequence[nextIdx],
      });
    }
  };

  const filteredContacts = contacts.filter((c) => {
    return c.name.toLowerCase().includes(searchVal.toLowerCase()) || 
           c.company.toLowerCase().includes(searchVal.toLowerCase());
  });

  const pipelineStages: Contact['status'][] = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won'];

  return (
    <div className="space-y-6">
      {/* Header segment */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Customer Relations & Sales Pipelines
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Deploy sales leads, opportunities, deal closures, and trace conversion milestones.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setPipelineView(!pipelineView)}
            className="px-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg cursor-pointer font-mono font-medium transition"
          >
            {pipelineView ? 'Show Table View' : 'Show Pipeline Board'}
          </button>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
          >
            <Plus className="h-4 w-4" />
            Add Account
          </button>
        </div>
      </div>

      {/* Filter matrix */}
      <div className="p-4 border border-blue-100 bg-white rounded-xl shadow-xs">
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Filter customer accounts / enterprises..."
          className="px-3 py-2 text-xs bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white max-w-sm w-full font-mono"
        />
      </div>

      {/* Main CRM Content */}
      {filteredContacts.length > 0 ? (
        pipelineView ? (
          // VISUAL SALES PIPELINE BOARD
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pipelineStages.map((stage) => {
              const stageDeals = filteredContacts.filter(c => c.status === stage);
              const totalVal = stageDeals.reduce((sum, d) => sum + d.dealValue, 0);

              return (
                <div 
                  key={stage} 
                  className="flex flex-col gap-3 rounded-xl border border-blue-100 bg-slate-50/50 p-3 min-h-[300px]"
                >
                  <div className="border-b border-blue-100 pb-2 mb-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                        {stage}
                      </span>
                      <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-100 font-bold px-1.5 rounded font-mono">
                        {stageDeals.length}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 mt-1 block">
                      ${totalVal.toLocaleString()} VAL
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 overflow-y-auto max-h-[450px] scrollbar-none">
                    {stageDeals.map((c) => (
                      <div 
                        key={c.id} 
                        className="p-3 bg-white border border-blue-100 hover:border-blue-300 rounded-xl transition shadow-xs"
                      >
                        <span className="text-[10px] text-blue-600 font-extrabold tracking-wider block mb-1 font-mono uppercase">
                          {c.company}
                        </span>
                        <h4 className="text-xs font-bold text-slate-800">{c.name}</h4>
                        
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-100 text-[10px] font-medium text-slate-500">
                          <span className="font-mono text-emerald-600 font-bold">${c.dealValue.toLocaleString()}</span>
                          <div className="flex gap-1">
                            <button 
                              onClick={() => moveStage(c, 'backward')} 
                              disabled={stage === 'Lead'}
                              className="px-1.5 py-0.5 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 cursor-pointer"
                              title="Demote Stage"
                            >
                              ←
                            </button>
                            <button 
                              onClick={() => moveStage(c, 'forward')} 
                              disabled={stage === 'Won'}
                              className="px-1.5 py-0.5 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 cursor-pointer"
                              title="Promote Stage"
                            >
                              →
                            </button>
                            <button
                              onClick={() => deleteContact(c.id)}
                              className="px-1.5 py-0.5 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 cursor-pointer text-xs"
                              title="Delete Deal"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // SPREADSHEET TABLE VIEW
          <div className="border border-blue-100 rounded-xl bg-white overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-blue-50/50 border-b border-blue-100">
                <tr className="font-semibold text-slate-500 uppercase font-mono text-[10px]">
                  <th className="p-4">Contact</th>
                  <th className="p-4">Enterprise Co.</th>
                  <th className="p-4">Pipeline Position</th>
                  <th className="p-4">Deal Value</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {filteredContacts.map((c) => (
                  <tr key={c.id} className="hover:bg-blue-50/30 transition">
                    <td className="p-4 font-bold text-slate-800">
                      <div>
                        <span>{c.name}</span>
                        <span className="block text-[10px] text-slate-400 font-normal mt-0.5">{c.email}</span>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-slate-700">{c.company}</td>
                    <td className="p-4"><StatusBadge status={c.status} /></td>
                    <td className="p-4 font-mono font-bold text-emerald-600">${c.dealValue.toLocaleString()}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => deleteContact(c.id)}
                        className="text-rose-600 hover:text-rose-700 font-semibold cursor-pointer text-xs"
                      >
                        Delete Row
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <EmptyState 
          title="CRM Registry Clean" 
          description="We couldn't retrieve any customer relationships matching this query."
          actionLabel="Add Lead Account"
          onAction={() => setIsCreateOpen(true)}
          icon={<Users2 className="h-10 w-10 text-blue-200" />}
        />
      )}

      {/* CREATE CRM MODAL */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Provision Account CRM">
        <form onSubmit={handleCreateSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Contact Officer</label>
              <input 
                type="text" 
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Julian Vance" 
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Enterprise Name</label>
              <input 
                type="text" 
                required
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                placeholder="Starlight Ventures" 
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Email Coordinates</label>
              <input 
                type="email" 
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="j.vance@starlight.com" 
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Telecom Link</label>
              <input 
                type="text" 
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="+1 (555) 301-2093" 
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Pipeline Stage</label>
              <select 
                value={newStatus}
                onChange={(e: any) => setNewStatus(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Lead">Lead account</option>
                <option value="Contacted">Contacted link</option>
                <option value="Qualified">Qualified standard</option>
                <option value="Proposal">Proposal submitted</option>
                <option value="Negotiation">Negotiation phase</option>
                <option value="Won">Won deal</option>
                <option value="Lost">Lost deal</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Estimated Deal ($)</label>
              <input 
                type="number" 
                value={newVal}
                onChange={(e) => setNewVal(Number(e.target.value))}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Provision Account CRM
          </button>
        </form>
      </Modal>
    </div>
  );
};
