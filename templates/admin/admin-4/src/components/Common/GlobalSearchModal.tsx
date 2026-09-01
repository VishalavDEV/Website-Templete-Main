import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Search, FolderKanban, CheckSquare, Users, Building2, FileText, ArrowRight, X } from 'lucide-react';
import { Badge } from './Badge';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, projects, tasks, users, clients, files } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedProjects = trimmed
    ? projects.filter(p => p.name.toLowerCase().includes(trimmed) || p.code.toLowerCase().includes(trimmed))
    : projects.slice(0, 3);

  const matchedTasks = trimmed
    ? tasks.filter(t => t.title.toLowerCase().includes(trimmed) || t.taskCode.toLowerCase().includes(trimmed))
    : tasks.slice(0, 3);

  const matchedTeam = trimmed
    ? users.filter(u => u.name.toLowerCase().includes(trimmed) || u.role.toLowerCase().includes(trimmed))
    : users.slice(0, 3);

  const matchedClients = trimmed
    ? clients.filter(c => c.name.toLowerCase().includes(trimmed) || c.company.toLowerCase().includes(trimmed))
    : clients.slice(0, 2);

  const matchedFiles = trimmed
    ? files.filter(f => f.name.toLowerCase().includes(trimmed))
    : files.slice(0, 2);

  const handleSelect = (route: string) => {
    setIsSearchOpen(false);
    setQuery('');
    navigate(route);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />
      <div className="flex min-h-full items-start justify-center pt-8 sm:pt-20 p-2.5 sm:p-4">
        <div className="relative w-full max-w-2xl rounded-2xl bg-app-surface border border-app shadow-2xl overflow-hidden z-10">

          {/* Search Input Bar */}
          <div className="flex items-center px-5 py-4 border-b border-app">
            <Search className="w-5 h-5 text-app-muted mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search projects, tasks, team members, clients, files... (Esc to close)"
              className="w-full bg-transparent text-app-primary placeholder-app-muted focus:outline-none text-base font-medium"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-lg text-app-secondary hover:text-app-primary hover:bg-app-hover ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {/* Projects */}
            {matchedProjects.length > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-app-muted uppercase tracking-wider px-2 mb-2">
                  <span className="flex items-center gap-1.5"><FolderKanban className="w-4 h-4 text-blue-400" /> Projects</span>
                  <span>{matchedProjects.length}</span>
                </div>
                <div className="space-y-1">
                  {matchedProjects.map(p => (
                    <div
                      key={p.id}
                      onClick={() => handleSelect(`/projects/${p.id}`)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-app-hover cursor-pointer group transition-colors border border-transparent hover:border-app"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-blue-400">{p.code}</span>
                          <span className="text-sm font-semibold text-app-primary group-hover:text-blue-400">{p.name}</span>
                        </div>
                        <p className="text-xs text-app-secondary mt-0.5 line-clamp-1">{p.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={p.status === 'In Progress' ? 'in_progress' : p.status === 'Completed' ? 'completed' : 'warning'}>
                          {p.status}
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-app-muted group-hover:text-app-primary group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tasks */}
            {matchedTasks.length > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-app-muted uppercase tracking-wider px-2 mb-2">
                  <span className="flex items-center gap-1.5"><CheckSquare className="w-4 h-4 text-emerald-400" /> Tasks</span>
                  <span>{matchedTasks.length}</span>
                </div>
                <div className="space-y-1">
                  {matchedTasks.map(t => (
                    <div
                      key={t.id}
                      onClick={() => handleSelect(`/tasks/${t.id}`)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-app-hover cursor-pointer group transition-colors border border-transparent hover:border-app"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-emerald-400">{t.taskCode}</span>
                          <span className="text-sm font-semibold text-app-primary group-hover:text-emerald-400">{t.title}</span>
                        </div>
                        <p className="text-xs text-app-secondary mt-0.5">{t.projectName} • Assigned: {t.assigneeName}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={t.priority === 'Urgent' ? 'urgent' : t.priority === 'High' ? 'danger' : 'neutral'}>
                          {t.priority}
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-app-muted group-hover:text-app-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            {matchedTeam.length > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-app-muted uppercase tracking-wider px-2 mb-2">
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-purple-400" /> Team Members</span>
                  <span>{matchedTeam.length}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matchedTeam.map(u => (
                    <div
                      key={u.id}
                      onClick={() => handleSelect(`/team/${u.id}`)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-app-hover cursor-pointer group transition-colors border border-transparent hover:border-app"
                    >
                      <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover border border-app" />
                      <div>
                        <p className="text-sm font-semibold text-app-primary group-hover:text-purple-400">{u.name}</p>
                        <p className="text-xs text-app-secondary">{u.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clients */}
            {matchedClients.length > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-app-muted uppercase tracking-wider px-2 mb-2">
                  <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-amber-400" /> Clients</span>
                </div>
                <div className="space-y-1">
                  {matchedClients.map(c => (
                    <div
                      key={c.id}
                      onClick={() => handleSelect(`/clients/${c.id}`)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-app-hover cursor-pointer group border border-transparent hover:border-app"
                    >
                      <div className="flex items-center gap-3">
                        <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-semibold text-app-primary group-hover:text-amber-400">{c.name}</p>
                          <p className="text-xs text-app-secondary">{c.industry}</p>
                        </div>
                      </div>
                      <Badge variant="info">{c.activeProjectsCount} Active Projects</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Files */}
            {matchedFiles.length > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-app-muted uppercase tracking-wider px-2 mb-2">
                  <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-sky-400" /> Files</span>
                </div>
                <div className="space-y-1">
                  {matchedFiles.map(f => (
                    <div
                      key={f.id}
                      onClick={() => handleSelect('/files')}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-app-hover cursor-pointer group border border-transparent hover:border-app text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-sky-400" />
                        <span className="font-medium text-app-primary group-hover:text-sky-400">{f.name}</span>
                      </div>
                      <span className="text-app-muted">{f.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="px-5 py-3 border-t border-app bg-app-secondary/30 flex items-center justify-between text-xs text-app-muted">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-app border border-app font-mono text-[10px]">ESC</kbd> to close</span>
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-app border border-app font-mono text-[10px]">Ctrl + K</kbd> anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};
