import React, { useState, useEffect, useRef } from 'react';
import { useApp, ActiveTab } from '../context/AppContext';
import { Search, Monitor, LayoutDashboard, Terminal, Users, BarChart3, Briefcase, CheckSquare, Users2, DollarSign, UserCog, Mail, FileText, Calendar, ShieldAlert, Settings, Sparkles } from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const { 
    commandPaletteOpen, 
    setCommandPaletteOpen, 
    setRoute, 
    settings, 
    updateSettings, 
    resetState,
    showToast 
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Toggle layout hotkeys: CMD/CTRL + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  // Focus input when palette opens
  useEffect(() => {
    if (commandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [commandPaletteOpen]);

  interface CommandItem {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    shortcut?: string;
    action: () => void;
  }

  const commands: CommandItem[] = [
    { id: 'db', title: 'Operational Dashboard', subtitle: 'View high-level KPIs, active projects and sprint backlogs', icon: <LayoutDashboard className="h-4 w-4" />, shortcut: 'G D', action: () => setRoute('dashboard') },
    { id: 'cc', title: 'Command Center', subtitle: 'View real-time telemetry and business KPIs', icon: <Terminal className="h-4 w-4" />, shortcut: 'G C', action: () => setRoute('command-center') },
    { id: 'an', title: 'Analytics Engine', subtitle: 'Analyze revenue growth and performance statistics', icon: <BarChart3 className="h-4 w-4" />, shortcut: 'G A', action: () => setRoute('analytics') },
    { id: 'pr', title: 'Projects Registry', subtitle: 'Deploy or modify active projects and budgets', icon: <Briefcase className="h-4 w-4" />, shortcut: 'G P', action: () => setRoute('projects') },
    { id: 'ts', title: 'Tasks Backlog', subtitle: 'Manage sprints, task assignees, and prioritized tasks', icon: <CheckSquare className="h-4 w-4" />, shortcut: 'G T', action: () => setRoute('tasks') },
    { id: 'cr', title: 'CRM Pipelines', subtitle: 'Review active customer relationships and deals', icon: <Users2 className="h-4 w-4" />, shortcut: 'G M', action: () => setRoute('crm') },
    { id: 'us', title: 'User Management', subtitle: 'Control personnel, access controls, and active accounts', icon: <Users className="h-4 w-4" />, shortcut: 'G U', action: () => setRoute('users') },
    { id: 'fn', title: 'Financial Ledger', subtitle: 'Audit cashflow invoices, cloud costs, and margins', icon: <DollarSign className="h-4 w-4" />, shortcut: 'G F', action: () => setRoute('finance') },
    { id: 'hr', title: 'Human Capital', subtitle: 'Inspect department statistics and time-off request logs', icon: <UserCog className="h-4 w-4" />, shortcut: 'G H', action: () => setRoute('hr') },
    { id: 'ms', title: 'Unified Communications', subtitle: 'Review message boxes and team chat lines', icon: <Mail className="h-4 w-4" />, shortcut: 'G S', action: () => setRoute('messages') },
    { id: 'fl', title: 'Cluster Storage Files', subtitle: 'Browse documentation and code assets', icon: <FileText className="h-4 w-4" />, shortcut: 'G O', action: () => setRoute('files') },
    { id: 'cl', title: 'Operation Calendar', subtitle: 'Schedule standups and client roadmap sprints', icon: <Calendar className="h-4 w-4" />, shortcut: 'G L', action: () => setRoute('calendar') },
    { id: 'rp', title: 'Analytical Reports', subtitle: 'Audit operational lists and export spreadsheets', icon: <Sparkles className="h-4 w-4" />, shortcut: 'G R', action: () => setRoute('reports') },
    { id: 'st', title: 'System Parameters', subtitle: 'Configure appearance, sound alerts, and dense ui', icon: <Settings className="h-4 w-4" />, shortcut: 'G S', action: () => setRoute('settings') },
    { id: 'tt', title: 'Automation Test Hub', subtitle: 'Execute component sanity metrics and validation', icon: <ShieldAlert className="h-4 w-4" />, shortcut: 'G X', action: () => setRoute('system-test') },
    
    // Quick Utility commands
    { id: 'theme-toggle', title: 'Switch Theme', subtitle: `Change workspace to ${settings.theme === 'dark' ? 'Light' : 'Dark'} mode`, icon: <Monitor className="h-4 w-4" />, shortcut: 'T T', action: () => {
      updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
      showToast('success', 'Theme Modified', `Workspace themed to ${settings.theme === 'dark' ? 'light' : 'dark'}.`);
    }},
    { id: 'motion-toggle', title: 'Toggle Motion Setting', subtitle: `Configure motion mode to ${settings.motion === 'full' ? 'Reduced' : 'Full'} transition`, icon: <Sparkles className="h-4 w-4" />, action: () => {
      updateSettings({ motion: settings.motion === 'full' ? 'reduced' : 'full' });
      showToast('info', 'Motion Adjusted', `Transitions set to ${settings.motion === 'full' ? 'reduced' : 'full'}.`);
    }},
    { id: 'purge-db', title: 'Purge Simulated Database', subtitle: 'Clear and reset local cache back to standard templates', icon: <ShieldAlert className="h-4 w-4" />, action: () => {
      if (confirm('Wipe simulated state storage and revert to standard templates?')) {
        resetState();
      }
    }}
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!commandPaletteOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          setCommandPaletteOpen(false);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, filteredCommands, selectedIndex, setCommandPaletteOpen]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!commandPaletteOpen) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xs ${
          settings.motion === 'full' ? 'modal-overlay-fade' : ''
        }`} 
        onClick={() => setCommandPaletteOpen(false)}
      />

      {/* Palette dialog */}
      <div className={`relative w-full max-w-xl rounded-xl border border-blue-200 bg-white shadow-2xl overflow-hidden z-10 flex flex-col ${
        settings.motion === 'full' ? 'modal-content-scale' : ''
      }`}>
        <div className="flex items-center gap-3 px-4 border-b border-blue-100 bg-blue-50/20">
          <Search className="h-5 w-5 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type command, view route, or execute macro..."
            className="w-full py-4 text-sm bg-transparent placeholder-slate-400 text-slate-800 focus:outline-none font-medium"
          />
          <button 
            onClick={() => setCommandPaletteOpen(false)}
            className="text-[10px] bg-white text-slate-500 px-1.5 py-0.5 rounded border border-blue-200 font-mono shrink-0 cursor-pointer shadow-2xs hover:text-blue-600"
          >
            ESC
          </button>
        </div>

        {/* Command list */}
        <div 
          ref={listRef}
          className="max-h-[350px] overflow-y-auto py-2 divide-y divide-blue-50"
        >
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    setCommandPaletteOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3.5 transition-colors cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-50/80' 
                      : 'hover:bg-blue-50/40'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg border ${
                    isSelected 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                      : 'bg-white border-blue-100 text-blue-600 shadow-2xs'
                  }`}>
                    {cmd.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className={`text-xs font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                      {cmd.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5 truncate">{cmd.subtitle}</p>
                  </div>
                  {cmd.shortcut && (
                    <span className="text-[9px] font-mono font-semibold bg-white border border-blue-200 text-blue-700 px-1.5 py-0.5 rounded uppercase shadow-2xs">
                      {cmd.shortcut}
                    </span>
                  )}
                </button>
              );
            })
          ) : (
            <div className="px-4 py-8 text-center">
              <span className="text-sm font-semibold text-slate-400">No Commands Matched</span>
              <p className="text-xs text-slate-400 mt-1">Try searching for alternative keywords.</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-blue-50/40 px-4 py-2.5 border-t border-blue-100 text-[10px] text-slate-500 flex justify-between items-center shrink-0 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigation</span>
            <span>↵ Execute</span>
          </div>
          <span className="text-blue-600 font-semibold">SPRINTADMIN CONSOLE MODULE v2.4</span>
        </div>
      </div>
    </div>
  );
};
