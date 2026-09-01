import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

export function CommandPalette() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 select-none">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}></div>
      <div className="relative w-full max-w-lg rounded-xl border border-border bg-card p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="relative flex items-center gap-3 border-b border-border/80 pb-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Type a command or lookup database records..."
            className="w-full bg-transparent text-xs text-foreground focus:outline-none"
            autoFocus
          />
          <kbd className="hidden sm:inline-block bg-muted px-1.5 py-0.5 text-[9px] rounded font-bold border border-border">ESC</kbd>
        </div>
        <div className="py-2 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider px-1">Quick Links</div>
        <div className="space-y-1">
          <button onClick={() => setOpen(false)} className="w-full text-left px-3 py-2 text-xs rounded hover:bg-accent text-foreground">Go to dashboard overview</button>
          <button onClick={() => setOpen(false)} className="w-full text-left px-3 py-2 text-xs rounded hover:bg-accent text-foreground">View developer profile</button>
          <button onClick={() => setOpen(false)} className="w-full text-left px-3 py-2 text-xs rounded hover:bg-accent text-foreground text-destructive font-semibold">Sign out account</button>
        </div>
      </div>
    </div>
  );
}
