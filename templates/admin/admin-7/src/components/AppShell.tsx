import React, { useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { CommandPalette } from './CommandPalette';
import { ToastContainer } from './ui/GlobalComponents';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentRoute, mobileSidebarOpen, setMobileSidebarOpen, settings } = useApp();
  const mainScrollRef = useRef<HTMLElement>(null);

  // Automatically scroll main content back to top when switching routes
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [currentRoute]);

  return (
    <div className="h-screen w-full flex text-slate-900 transition-colors duration-300 relative font-sans overflow-hidden selection:bg-blue-500/25 selection:text-blue-900 bg-white">
      {/* Blue & White Aura Background Layers */}
      <div className="absolute inset-0 aura-layer-1 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 aura-layer-2 pointer-events-none" aria-hidden="true" />

      {/* Decorative fine-grid network overlay for command center feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Persistent desktop sidebar */}
      <div className="hidden lg:block shrink-0 h-full">
        <Sidebar />
      </div>

      {/* Mobile Drawer (backdrop + slide panel) */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className={`fixed inset-0 bg-slate-900/30 backdrop-blur-xs ${
              settings.motion === 'full' ? 'modal-overlay-fade' : ''
            }`} 
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className={`relative flex flex-col w-64 max-w-xs h-full bg-white border-r border-blue-100 ${
            settings.motion === 'full' ? 'drawer-content-slide-left' : ''
          }`}>
            <Sidebar isMobile={true} />
          </div>
        </div>
      )}

      {/* Right side content pane */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Topbar />
        
        {/* Main interactive routes display view with explicit scroll isolation and touch momentum */}
        <main 
          ref={mainScrollRef} 
          className="flex-1 p-4 sm:p-6 lg:p-8 z-10 overflow-y-auto overflow-x-hidden min-h-0 relative"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {children}
        </main>
      </div>

      {/* Toast alert overlays */}
      <ToastContainer />

      {/* CMD/CTRL+K Command palette */}
      <CommandPalette />
    </div>
  );
};
