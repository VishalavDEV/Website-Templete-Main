import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FolderKanban, Plus, CheckCircle, Clock, AlertTriangle, LayoutGrid, List, Trash2, Search, X } from 'lucide-react';

export default function Projects() {
  const [viewMode, setViewMode] = useState('grid');
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');

  const [projectName, setProjectName] = useState('');
  const [projectCategory, setProjectCategory] = useState('AI Infrastructure');
  const [projectDueDate, setProjectDueDate] = useState('2026-12-01');
  const [projectProgress, setProjectProgress] = useState(30);

  const [projectsList, setProjectsList] = useState([
    { id: 1, name: 'Neura-LLM v4.2 Core Engine', status: 'In Progress', progress: 85, team: 6, dueDate: '2026-09-15', category: 'AI Infrastructure', budget: 140000 },
    { id: 2, name: 'SOC2 Type II Audit & Compliance', status: 'Completed', progress: 100, team: 4, dueDate: '2026-08-10', category: 'Security', budget: 85000 },
    { id: 3, name: '3D Cyber Matrix UI Overhaul', status: 'In Progress', progress: 65, team: 5, dueDate: '2026-10-01', category: 'Frontend', budget: 45000 },
    { id: 4, name: 'Mobile iOS / Android SDK', status: 'In Progress', progress: 40, team: 3, dueDate: '2026-11-20', category: 'Mobile', budget: 60000 },
  ]);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    const newProj = {
      id: Date.now(),
      name: projectName.trim(),
      status: projectProgress === 100 ? 'Completed' : 'In Progress',
      progress: Number(projectProgress),
      team: 4,
      dueDate: projectDueDate,
      category: projectCategory,
      budget: 50000
    };

    setProjectsList([newProj, ...projectsList]);
    setProjectName('');
    setProjectProgress(30);
    setShowModal(false);
  };

  const deleteProject = (id) => {
    setProjectsList(projectsList.filter(p => p.id !== id));
  };

  const filteredProjects = projectsList.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const projectChartData = projectsList.map(p => ({
    name: p.name.length > 15 ? `${p.name.slice(0, 15)}...` : p.name,
    progress: p.progress,
    budget: p.budget
  }));

  return (
    <Layout title="Engineering Projects Workspace" breadcrumb="Home / Projects">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center">
              <FolderKanban className="w-5 h-5 text-neura-cyan mr-2" />
              <span>Project Deliverables & Milestones</span>
            </h2>
            <p className="text-xs text-slate-400">Track sprint progress, resource allocation, and team velocity.</p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
              />
            </div>

            <div className="p-1 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-neura-cyan text-black' : 'text-slate-400'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-neura-cyan text-black' : 'text-slate-400'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan flex items-center space-x-2 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Project Velocity BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 min-w-0 overflow-hidden">
          <h3 className="text-base font-bold text-white">Project Progress Velocity (%)</h3>
          <div className="w-full h-48 sm:h-56 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="progress" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Progress (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grid or List View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <div key={p.id} className="p-6 rounded-3xl glass-card border border-white/10 space-y-4 hover:border-neura-cyan/40 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neura-cyan/15 text-neura-cyan font-bold border border-neura-cyan/30">
                      {p.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        p.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-neura-purple/20 text-neura-purple border-neura-purple/40'
                      }`}>
                        {p.status}
                      </span>
                      <button
                        onClick={() => deleteProject(p.id)}
                        className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{p.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">Target Due: <span className="font-mono text-slate-200">{p.dueDate}</span></p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Sprint Completion</span>
                      <span className="text-neura-cyan font-bold">{p.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neura-cyan to-neura-purple rounded-full transition-all duration-500" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl glass-card border border-white/10 overflow-hidden p-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="p-3">Project Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Progress</th>
                  <th className="p-3">Due Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {filteredProjects.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.04]">
                    <td className="p-3 font-bold text-white">{p.name}</td>
                    <td className="p-3">{p.category}</td>
                    <td className="p-3 font-mono text-neura-cyan">{p.progress}%</td>
                    <td className="p-3 font-mono">{p.dueDate}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        p.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-neura-cyan/20 text-neura-cyan'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button onClick={() => deleteProject(p.id)} className="p-1 text-slate-400 hover:text-rose-400">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* New Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neura-panel border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Plus className="w-4 h-4 text-neura-cyan mr-2" />
                <span>Create New Engineering Project</span>
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Real-Time Telemetry Pipeline"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-neura-cyan"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Category</label>
                <select
                  value={projectCategory}
                  onChange={(e) => setProjectCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neura-panel border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                >
                  <option value="AI Infrastructure">AI Infrastructure</option>
                  <option value="Security">Security</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Backend">Backend</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Progress ({projectProgress}%)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={projectProgress}
                    onChange={(e) => setProjectProgress(e.target.value)}
                    className="w-full accent-neura-cyan"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">Target Due Date</label>
                  <input
                    type="date"
                    required
                    value={projectDueDate}
                    onChange={(e) => setProjectDueDate(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-neura-cyan"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-neura-cyan to-blue-600 text-black font-bold text-xs shadow-glow-cyan"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
