import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, X, Bell, ChevronRight, ChevronDown, Check, 
  AlertTriangle, Info, ShieldAlert, SlidersHorizontal, 
  ArrowUpDown, ChevronLeft, Calendar
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

// --- AVATAR & AVATAR GROUP ---
export const Avatar: React.FC<{ 
  src?: string; 
  name: string; 
  size?: 'xs' | 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away';
}> = ({ src, name, size = 'md', status }) => {
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-14 w-14 text-base',
  };

  const statusClasses = {
    online: 'bg-emerald-500',
    offline: 'bg-slate-400',
    away: 'bg-amber-500',
  };

  const getInitials = (n: string) => {
    return n.split(' ').map((p) => p[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="relative inline-block shrink-0">
      {src ? (
        <img 
          src={src} 
          alt={name} 
          className={`${sizeClasses[size]} rounded-full object-cover border border-blue-200 shadow-2xs`}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : (
        <div className={`${sizeClasses[size]} rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-semibold flex items-center justify-center tracking-wider shadow-2xs`}>
          {getInitials(name)}
        </div>
      )}
      {status && (
        <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${statusClasses[status]}`} />
      )}
    </div>
  );
};

export const AvatarGroup: React.FC<{ 
  members: { name: string; src?: string }[];
  max?: number;
  size?: 'xs' | 'sm' | 'md';
}> = ({ members, max = 3, size = 'sm' }) => {
  const visible = members.slice(0, max);
  const remaining = members.length - max;

  return (
    <div className="flex -space-x-2 overflow-hidden">
      {visible.map((m, i) => (
        <div key={i} className="hover:translate-y-[-2px] transition-transform duration-200">
          <Avatar src={m.src} name={m.name} size={size} />
        </div>
      ))}
      {remaining > 0 && (
        <div className={`flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold border-2 border-white text-xs ${
          size === 'xs' ? 'h-6 w-6' : size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
        }`}>
          +{remaining}
        </div>
      )}
    </div>
  );
};

// --- METRIC CARD ---
export const MetricCard: React.FC<{
  title: string;
  value: string | number;
  subtext?: string;
  trend?: { value: string; type: 'up' | 'down' | 'neutral' | 'warning' };
  icon?: React.ReactNode;
  loading?: boolean;
}> = ({ title, value, subtext, trend, icon, loading }) => {
  const { settings } = useApp();
  const [displayVal, setDisplayVal] = useState<string | number>(loading ? '...' : value);

  // Advanced formatter/parser to tick up strings like "$12,450" or "84% CPU"
  useEffect(() => {
    if (loading) return;
    const valueStr = String(value);
    const hasNum = /[0-9]+/.test(valueStr);

    if (hasNum && settings.motion === 'full') {
      const match = valueStr.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);
      if (match) {
        const prefix = match[1];
        const numStr = match[2].replace(/,/g, '');
        const suffix = match[3];
        const targetNum = parseFloat(numStr);

        if (!isNaN(targetNum)) {
          let start = 0;
          const duration = 900;
          const startTime = performance.now();

          const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease out
            const current = start + (targetNum - start) * easeOut;

            // Format with appropriate decimal places & thousands separator
            const isFloat = numStr.includes('.');
            let formattedNum = '';
            if (isFloat) {
              formattedNum = current.toFixed(1);
            } else {
              formattedNum = Math.floor(current).toLocaleString();
            }

            setDisplayVal(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayVal(value);
            }
          };
          requestAnimationFrame(animate);
          return;
        }
      }
    }
    setDisplayVal(value);
  }, [value, loading, settings.motion]);

  if (loading) {
    return <Skeleton className="h-28 w-full" />;
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-white p-4 flex flex-col justify-between premium-card-hover transition-all duration-300 hover:scale-[1.01] hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 group shadow-xs">
      <div className="flex justify-between items-start gap-1">
        <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-semibold flex items-center gap-1.5 transition-colors group-hover:text-blue-700">
          <span className="inline-block w-1.5 h-2.5 bg-blue-600 rounded-2xs transition-transform group-hover:scale-y-125" />
          {title}
        </span>
        {icon && <div className="text-blue-600 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">{icon}</div>}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-slate-900 tabular-nums group-hover:text-blue-700 transition-colors">{displayVal}</span>
        {trend && (
          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 transition-all duration-500 scale-95 group-hover:scale-100 ${
            trend.type === 'up' 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : trend.type === 'down' 
              ? 'bg-rose-50 text-rose-700 border border-rose-200' 
              : trend.type === 'warning'
              ? 'bg-amber-50 text-amber-700 border border-amber-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            {trend.type === 'up' ? '↑' : trend.type === 'down' ? '↓' : ''}{trend.value}
          </span>
        )}
      </div>
      {subtext && (
        <span className="mt-1.5 block text-[10px] font-medium text-slate-400 uppercase tracking-wide font-mono transition-colors group-hover:text-slate-500">{subtext}</span>
      )}
    </div>
  );
};

// --- SKELETON ---
export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`rounded-lg skeleton-shimmer bg-blue-50/60 ${className}`} />
  );
};

// --- STATUS BADGE ---
export const StatusBadge: React.FC<{
  status: string;
  type?: 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'critical';
}> = ({ status, type }) => {
  // Infer type from status if not supplied
  const resolvedType = type || (() => {
    const s = status.toLowerCase();
    if (['active', 'completed', 'won', 'approved', 'optimal', 'done'].includes(s)) return 'success';
    if (['pending', 'on hold', 'proposal', 'negotiation', 'todo', 'review', 'warning'].includes(s)) return 'warning';
    if (['suspended', 'inactive', 'failed', 'rejected', 'overdue', 'critical', 'error'].includes(s)) return 'error';
    if (['lead', 'contacted', 'qualified', 'planning', 'in progress', 'info'].includes(s)) return 'info';
    return 'neutral';
  })();

  const dotColors = {
    neutral: 'bg-slate-400',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
    info: 'bg-blue-600',
    critical: 'bg-rose-500 animate-ping',
  };

  const badgeStyles = {
    neutral: 'bg-slate-50 text-slate-700 border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    error: 'bg-rose-50 text-rose-700 border-rose-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    critical: 'bg-rose-50 text-rose-700 border-rose-300',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-mono tracking-wider uppercase whitespace-nowrap shrink-0 font-medium ${badgeStyles[resolvedType]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotColors[resolvedType]}`} />
      {status}
    </span>
  );
};

// --- PROGRESS BAR ---
export const ProgressBar: React.FC<{
  value: number; // 0 to 100
  color?: string;
  height?: 'xs' | 'sm' | 'md';
}> = ({ value, color = 'bg-blue-600', height = 'sm' }) => {
  const hClasses = {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2',
  };

  return (
    <div className={`w-full bg-blue-100/60 rounded-full overflow-hidden ${hClasses[height]}`}>
      <div 
        className={`${color} rounded-full transition-all duration-500 ease-out`} 
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

// --- TABS ---
export const Tabs: React.FC<{
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
  activeTab: string;
  onChange: (id: any) => void;
  className?: string;
}> = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div className={`flex border-b border-blue-100 overflow-x-auto scrollbar-none ${className || ''}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 border-b-2 text-[10px] font-mono uppercase tracking-wider font-bold transition-all whitespace-nowrap -mb-[2px] cursor-pointer ${
              isActive 
                ? 'border-blue-600 text-blue-700 font-extrabold bg-blue-50/50' 
                : 'border-transparent text-slate-500 hover:text-blue-600 hover:bg-blue-50/20'
            }`}
          >
            {tab.icon && <span className="h-3.5 w-3.5 shrink-0 opacity-80 text-blue-600">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// --- MODAL ---
export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  const { settings } = useApp();
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xs ${
          settings.motion === 'full' ? 'modal-overlay-fade' : ''
        }`} 
        onClick={onClose}
      />
      {/* Content wrapper */}
      <div className={`relative w-full ${sizeClasses[size]} rounded-xl border border-blue-200 bg-white shadow-2xl p-6 z-10 ${
        settings.motion === 'full' ? 'modal-content-scale' : ''
      }`}>
        <div className="flex justify-between items-center border-b border-blue-100 pb-3 mb-4">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto pr-1">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- DRAWER (Slide Panel) ---
export const Drawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  const { settings } = useApp();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xs ${
          settings.motion === 'full' ? 'modal-overlay-fade' : ''
        }`} 
        onClick={onClose}
      />
      {/* Drawer content */}
      <div className={`relative w-full max-w-md h-full bg-white border-l border-blue-200 shadow-2xl p-6 z-10 flex flex-col ${
        settings.motion === 'full' ? 'drawer-content-slide' : ''
      }`}>
        <div className="flex justify-between items-center border-b border-blue-100 pb-3 mb-4 shrink-0">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pr-1">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- DROPDOWN ---
export const Dropdown: React.FC<{
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}> = ({ trigger, children, align = 'right', className }) => {
  const { settings } = useApp();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block ${className || ''}`} ref={containerRef}>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div 
          onClick={() => setOpen(false)}
          className={`absolute top-full mt-1.5 z-40 bg-white border border-blue-200 rounded-xl shadow-xl py-1 text-sm min-w-48 ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${settings.motion === 'full' ? 'dropdown-scale-down' : ''}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownItem: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  danger?: boolean;
}> = ({ onClick, children, icon, danger }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer text-xs font-medium ${
        danger 
          ? 'text-rose-600 hover:text-rose-700' 
          : 'text-slate-700 hover:text-blue-700'
      }`}
    >
      {icon && <span className="h-4 w-4 text-blue-600 shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

// --- CONFIRM DIALOG ---
export const ConfirmDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  type?: 'warning' | 'danger' | 'info';
}> = ({ isOpen, onClose, onConfirm, title, message, confirmLabel = 'Confirm', cancelLabel = 'Cancel', type = 'danger' }) => {
  const { settings } = useApp();
  if (!isOpen) return null;

  const btnColors = {
    danger: 'bg-rose-600 hover:bg-rose-700 text-white',
    warning: 'bg-amber-600 hover:bg-amber-700 text-white',
    info: 'bg-blue-600 hover:bg-blue-700 text-white',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xs ${
          settings.motion === 'full' ? 'modal-overlay-fade' : ''
        }`} 
        onClick={onClose} 
      />
      <div className={`relative w-full max-w-sm rounded-xl border border-blue-200 bg-white shadow-2xl p-5 z-10 ${
        settings.motion === 'full' ? 'modal-content-scale' : ''
      }`}>
        <div className="flex gap-3 mb-3">
          {type === 'danger' && <ShieldAlert className="h-6 w-6 text-rose-500 shrink-0" />}
          {type === 'warning' && <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />}
          {type === 'info' && <Info className="h-6 w-6 text-blue-600 shrink-0" />}
          <div>
            <h4 className="font-semibold text-slate-900">{title}</h4>
            <p className="text-sm text-slate-500 mt-1">{message}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button 
            onClick={onClose} 
            className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md cursor-pointer"
          >
            {cancelLabel}
          </button>
          <button 
            onClick={() => {
              onConfirm();
              onClose();
            }} 
            className={`px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer ${btnColors[type]}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- EMPTY STATE ---
export const EmptyState: React.FC<{
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}> = ({ title, description, actionLabel, onAction, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-blue-200 rounded-xl bg-white min-h-64 relative shadow-xs">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400" />
      
      {icon ? (
        <div className="text-blue-500 mb-3.5">{icon}</div>
      ) : (
        <Info className="h-8 w-8 text-blue-400 mb-3.5" />
      )}
      <h4 className="font-mono font-bold uppercase tracking-wider text-slate-800 text-xs">{title}</h4>
      <p className="text-[11px] text-slate-500 mt-1 max-w-xs font-mono">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-4 px-3.5 py-2 text-[10px] font-mono uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition cursor-pointer shadow-xs shadow-blue-500/20"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

// --- ERROR STATE ---
export const ErrorState: React.FC<{
  title?: string;
  message: string;
  onRetry?: () => void;
}> = ({ title = 'Execution Blocked', message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-rose-200 rounded-xl bg-rose-50/40 min-h-64 relative">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-rose-400" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-rose-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-rose-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-rose-400" />

      <AlertTriangle className="h-8 w-8 text-rose-500/80 mb-3.5" />
      <h4 className="font-mono font-bold uppercase tracking-wider text-rose-700 text-xs">{title}</h4>
      <p className="text-[11px] text-rose-600 mt-1 max-w-sm font-mono">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-3.5 py-2 text-[10px] font-mono uppercase tracking-widest bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold transition cursor-pointer"
        >
          Retry Pipeline Checks
        </button>
      )}
    </div>
  );
};

// --- LOADING STATE & SPINNER ---
export const LoadingState: React.FC<{ message?: string }> = ({ message = 'Streaming telemetry...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-64">
      <div className="h-6 w-6 rounded-full border-2 border-blue-200 border-t-blue-600 animate-spin" />
      <p className="text-[10px] text-slate-500 mt-3 font-mono tracking-widest uppercase animate-pulse font-bold">{message}</p>
    </div>
  );
};

// --- TOOLTIP ---
export const Tooltip: React.FC<{
  content: string;
  children: React.ReactNode;
}> = ({ content, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase bg-slate-900 text-white rounded shadow-md pointer-events-none whitespace-nowrap z-50 border border-slate-700">
          {content}
        </div>
      )}
    </div>
  );
};

// --- SEARCH INPUT & FILTER BAR & DATE RANGE ---
export const SearchInput: React.FC<{
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  showShortcut?: boolean;
}> = ({ value, onChange, placeholder = 'Search matrix...', showShortcut = true }) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-blue-600 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-14 py-2 text-xs font-mono bg-white border border-blue-200 rounded-lg placeholder-slate-400 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20 transition duration-150 shadow-2xs"
      />
      {showShortcut && (
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 border border-blue-200 bg-blue-50 rounded text-[9px] text-blue-600 font-mono select-none">
          <span>⌘</span><span>K</span>
        </div>
      )}
    </div>
  );
};

// --- FILTER BAR ---
export const FilterBar: React.FC<{
  onSearch: (q: string) => void;
  searchVal: string;
  filters: {
    id: string;
    label: string;
    options: { value: string; label: string }[];
    activeValue: string;
    onChange: (val: string) => void;
  }[];
  onClearAll?: () => void;
}> = ({ onSearch, searchVal, filters, onClearAll }) => {
  return (
    <div className="flex flex-col gap-3 p-3 border border-blue-100 bg-white rounded-xl mb-4 shadow-xs">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <SearchInput value={searchVal} onChange={onSearch} />
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            <SlidersHorizontal className="h-3.5 w-3.5 text-blue-600" />
            <span>Filter Matrix</span>
          </div>
          {filters.map((f) => (
            <div key={f.id} className="relative">
              <select
                value={f.activeValue}
                onChange={(e) => f.onChange(e.target.value)}
                className="pl-2.5 pr-7 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-white border border-blue-200 rounded-lg text-slate-700 focus:outline-none focus:border-blue-600 cursor-pointer appearance-none min-w-28 font-bold shadow-2xs"
              >
                {f.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </div>
          ))}
          {onClearAll && (
            <button
              onClick={onClearAll}
              className="text-[10px] font-mono uppercase tracking-wider text-blue-600 hover:text-blue-800 font-bold px-2 cursor-pointer transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const DateRangePicker: React.FC<{
  startDate: string;
  endDate: string;
  onChange: (start: string, end: string) => void;
}> = ({ startDate, endDate, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-white border border-blue-200 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide shadow-2xs">
      <Calendar className="h-3.5 w-3.5 text-blue-600 shrink-0" />
      <input
        type="date"
        value={startDate}
        onChange={(e) => onChange(e.target.value, endDate)}
        className="bg-transparent text-slate-700 focus:outline-none cursor-pointer font-bold uppercase"
      />
      <span className="text-blue-300 font-bold">—</span>
      <input
        type="date"
        value={endDate}
        onChange={(e) => onChange(startDate, e.target.value)}
        className="bg-transparent text-slate-700 focus:outline-none cursor-pointer font-bold uppercase"
      />
    </div>
  );
};

// --- PAGINATION ---
export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}> = ({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage }) => {
  const startIdx = (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-blue-100 pt-4 mt-4">
      <span className="text-xs text-slate-500 font-medium font-mono">
        Showing <span className="text-slate-800 tabular-nums font-bold">{totalItems === 0 ? 0 : startIdx}</span> to{' '}
        <span className="text-slate-800 tabular-nums font-bold">{endIdx}</span> of{' '}
        <span className="text-slate-800 tabular-nums font-bold">{totalItems}</span> entries
      </span>
      <div className="flex gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg border border-blue-200 text-slate-600 hover:bg-blue-50 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-colors shadow-2xs"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
          <button
            key={pg}
            onClick={() => onPageChange(pg)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-colors font-mono ${
              pg === currentPage
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'border-blue-200 text-slate-700 hover:bg-blue-50'
            }`}
          >
            {pg}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg border border-blue-200 text-slate-600 hover:bg-blue-50 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-colors shadow-2xs"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// --- DATA TABLE ---
interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
  sortKey?: string;
  className?: string;
}

export function DataTable<T>({
  data,
  columns,
  sortConfig,
  onSort,
  loading,
  emptyState,
}: {
  data: T[];
  columns: Column<T>[];
  sortConfig?: { key: string; direction: 'asc' | 'desc' };
  onSort?: (key: string) => void;
  loading?: boolean;
  emptyState?: React.ReactNode;
}) {
  const { settings } = useApp();

  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    );
  }

  if (data.length === 0) {
    return <div className="py-2">{emptyState || <EmptyState title="No Records Found" description="The active filter matrix returned an empty dataset." />}</div>;
  }

  return (
    <div className="w-full overflow-x-auto border border-blue-100 rounded-xl bg-white shadow-xs">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="border-b border-blue-100 bg-blue-50/50">
            {columns.map((col, i) => (
              <th 
                key={i} 
                className={`px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 ${col.className || ''}`}
              >
                {col.sortKey && onSort ? (
                  <button
                    onClick={() => onSort(col.sortKey!)}
                    className="flex items-center gap-1 hover:text-blue-700 cursor-pointer font-bold"
                  >
                    <span>{col.header}</span>
                    <ArrowUpDown className="h-3 w-3 text-blue-500 shrink-0" />
                  </button>
                ) : (
                  <span>{col.header}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-50">
          {data.map((item, rowIdx) => (
            <tr 
              key={rowIdx} 
              style={{ animationDelay: settings.motion === 'full' ? `${rowIdx * 30}ms` : '0ms' }}
              className={`hover:bg-blue-50/40 transition-colors ${
                settings.motion === 'full' ? 'animate-in fade-in slide-in-from-bottom-1 duration-300 fill-mode-both' : ''
              }`}
            >
              {columns.map((col, colIdx) => (
                <td key={colIdx} className={`px-4 py-3 text-slate-800 font-medium ${col.className || ''}`}>
                  {col.accessor(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- TOAST CONTAINER & COMPONENT ---
export const ToastContainer: React.FC = () => {
  const { toasts, removeToast, settings } = useApp();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 bg-white border border-blue-200 rounded-xl shadow-2xl ${
            settings.motion === 'full' ? 'toast-slide-in' : ''
          }`}
        >
          {t.type === 'success' && <div className="bg-emerald-50 text-emerald-600 border border-emerald-200 p-1 rounded-md shrink-0"><Check className="h-4 w-4" /></div>}
          {t.type === 'error' && <div className="bg-rose-50 text-rose-600 border border-rose-200 p-1 rounded-md shrink-0"><ShieldAlert className="h-4 w-4" /></div>}
          {t.type === 'warning' && <div className="bg-amber-50 text-amber-600 border border-amber-200 p-1 rounded-md shrink-0"><AlertTriangle className="h-4 w-4" /></div>}
          {t.type === 'info' && <div className="bg-blue-50 text-blue-600 border border-blue-200 p-1 rounded-md shrink-0"><Info className="h-4 w-4" /></div>}
          
          <div className="flex-1">
            <h5 className="text-xs font-semibold text-slate-900">{t.title}</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">{t.message}</p>
          </div>
          
          <button 
            onClick={() => removeToast(t.id)} 
            className="text-slate-400 hover:text-slate-700 p-0.5 rounded cursor-pointer transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
