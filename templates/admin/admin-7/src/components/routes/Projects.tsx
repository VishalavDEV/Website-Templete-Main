import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Project } from '../../data/initialData';
import { 
  StatusBadge, ProgressBar, AvatarGroup, 
  Modal, FilterBar, EmptyState 
} from '../ui/GlobalComponents';
import { Briefcase, Plus, Edit2, Trash2, DollarSign } from 'lucide-react';

export const Projects: React.FC = () => {
  const { 
    projects, 
    users, 
    createProject, 
    updateProject, 
    deleteProject 
  } = useApp();

  // Search & Filters
  const [searchVal, setSearchVal] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Modal forms
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  // New Project Fields
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newStatus, setNewStatus] = useState<'Planning' | 'Active' | 'On Hold' | 'Completed' | 'Overdue'>('Planning');
  const [newPriority, setNewPriority] = useState<'Low' | 'Medium' | 'High' | 'Critical'>('Medium');
  const [newBudget, setNewBudget] = useState(50000);
  const [newCategory, setNewCategory] = useState<'Core' | 'Expansion' | 'Maintenance' | 'Security'>('Core');
  const [newStartDate, setNewStartDate] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newDesc.trim()) return;

    createProject({
      name: newName,
      description: newDesc,
      status: newStatus,
      priority: newPriority,
      budget: Number(newBudget),
      category: newCategory,
      startDate: newStartDate || new Date().toISOString().split('T')[0],
      dueDate: newDueDate || new Date(Date.now() + 86400000 * 90).toISOString().split('T')[0],
      managerId: 'usr-3',
      teamIds: ['usr-1', 'usr-2'],
    });

    // Reset Form
    setNewName('');
    setNewDesc('');
    setNewBudget(50000);
    setIsCreateOpen(false);
  };

  const handleEditClick = (p: Project) => {
    setSelectedProj(p);
    setNewName(p.name);
    setNewDesc(p.description);
    setNewStatus(p.status);
    setNewPriority(p.priority);
    setNewBudget(p.budget);
    setNewCategory(p.category);
    setNewStartDate(p.startDate);
    setNewDueDate(p.dueDate);
    setIsEditOpen(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProj || !newName.trim()) return;

    updateProject({
      ...selectedProj,
      name: newName,
      description: newDesc,
      status: newStatus,
      priority: newPriority,
      budget: Number(newBudget),
      category: newCategory,
      startDate: newStartDate,
      dueDate: newDueDate,
    });

    setIsEditOpen(false);
    setSelectedProj(null);
  };

  const handleDelete = (id: string) => {
    deleteProject(id);
  };

  // Filter project lists
  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchVal.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchVal.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || p.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Portfolios & Spatial Projects
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Assemble core registries, budgets and deploy team matrices.</p>
        </div>
        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition shadow-xs cursor-pointer font-mono"
        >
          <Plus className="h-4 w-4" />
          Provision Project
        </button>
      </div>

      {/* Filter Matrix bar */}
      <FilterBar 
        searchVal={searchVal}
        onSearch={setSearchVal}
        filters={[
          {
            id: 'status',
            label: 'Status',
            options: [
              { value: 'all', label: 'All Status' },
              { value: 'Planning', label: 'Planning' },
              { value: 'Active', label: 'Active' },
              { value: 'On Hold', label: 'On Hold' },
              { value: 'Completed', label: 'Completed' },
            ],
            activeValue: statusFilter,
            onChange: setStatusFilter,
          },
          {
            id: 'priority',
            label: 'Priority',
            options: [
              { value: 'all', label: 'All Priority' },
              { value: 'Low', label: 'Low' },
              { value: 'Medium', label: 'Medium' },
              { value: 'High', label: 'High' },
              { value: 'Critical', label: 'Critical' },
            ],
            activeValue: priorityFilter,
            onChange: setPriorityFilter,
          }
        ]}
        onClearAll={() => {
          setSearchVal('');
          setStatusFilter('all');
          setPriorityFilter('all');
        }}
      />

      {/* Projects Deck */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => {
            // Find team avatars
            const teamAvatars = p.teamIds.map((tid) => {
              const u = users.find((usr) => usr.id === tid);
              return { name: u?.name || 'Developer', src: u?.avatar };
            });

            return (
              <div 
                key={p.id} 
                className="border border-blue-100 bg-white p-5 rounded-xl hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-[10px] font-bold text-blue-700 font-mono tracking-wider uppercase bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">
                      /{p.category}
                    </span>
                    <div className="flex gap-1.5 shrink-0">
                      <StatusBadge status={p.status} />
                      <StatusBadge status={p.priority} />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm tracking-tight">{p.name}</h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 min-h-8">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 space-y-3.5">
                  {/* Budget Spent */}
                  <div className="flex justify-between text-[11px] font-medium text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-emerald-600" />
                      Budget: <strong className="text-slate-700">${p.budget.toLocaleString()}</strong>
                    </span>
                    <span>Spent: <strong className="text-slate-700">${p.spent.toLocaleString()}</strong></span>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold mb-1 font-mono">
                      <span>DEPLOYMENT PROGRESS</span>
                      <span className="tabular-nums font-mono text-slate-700">{p.progress}%</span>
                    </div>
                    <ProgressBar value={p.progress} color={p.progress === 100 ? 'bg-emerald-600' : 'bg-blue-600'} />
                  </div>

                  {/* Footer - members + actions */}
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <AvatarGroup members={teamAvatars} size="xs" max={3} />
                    
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => handleEditClick(p)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState 
          title="No Active Projects" 
          description="We couldn't find any portfolios matching your active criteria tags."
          actionLabel="Spawn Project Portfolio"
          onAction={() => setIsCreateOpen(true)}
          icon={<Briefcase className="h-10 w-10 text-blue-200" />}
        />
      )}

      {/* CREATE MODAL */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Initiate Project Portfolio">
        <form onSubmit={handleCreateSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Project Name</label>
            <input 
              type="text" 
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. Sprint Core Platform" 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Summary</label>
            <textarea 
              required
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="A spatial clustering service targeting millisecond edge ingestion..." 
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Core Priority</label>
              <select 
                value={newPriority}
                onChange={(e: any) => setNewPriority(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Low">Low priority</option>
                <option value="Medium">Medium priority</option>
                <option value="High">High priority</option>
                <option value="Critical">Critical priority</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Functional Category</label>
              <select 
                value={newCategory}
                onChange={(e: any) => setNewCategory(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Core">Core Engines</option>
                <option value="Expansion">Expansion Modules</option>
                <option value="Maintenance">Maintenance Sprints</option>
                <option value="Security">Security Guard</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Budget Allocation ($)</label>
              <input 
                type="number" 
                value={newBudget}
                onChange={(e) => setNewBudget(Number(e.target.value))}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Active Status</label>
              <select 
                value={newStatus}
                onChange={(e: any) => setNewStatus(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Planning">Planning phase</option>
                <option value="Active">Active deployment</option>
                <option value="On Hold">On Hold block</option>
                <option value="Completed">Completed rollout</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Provision Project
          </button>
        </form>
      </Modal>

      {/* EDIT MODAL */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Modify Portfolio Parameters">
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Project Name</label>
            <input 
              type="text" 
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Summary</label>
            <textarea 
              required
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Core Priority</label>
              <select 
                value={newPriority}
                onChange={(e: any) => setNewPriority(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Functional Category</label>
              <select 
                value={newCategory}
                onChange={(e: any) => setNewCategory(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Core">Core</option>
                <option value="Expansion">Expansion</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Security">Security</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Budget Allocation ($)</label>
              <input 
                type="number" 
                value={newBudget}
                onChange={(e) => setNewBudget(Number(e.target.value))}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 font-mono">Active Status</label>
              <select 
                value={newStatus}
                onChange={(e: any) => setNewStatus(e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-blue-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white font-mono"
              >
                <option value="Planning">Planning</option>
                <option value="Active">Active</option>
                <option value="On Hold">On Hold</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg uppercase tracking-wider cursor-pointer font-mono shadow-xs transition"
          >
            Apply Changes
          </button>
        </form>
      </Modal>
    </div>
  );
};
