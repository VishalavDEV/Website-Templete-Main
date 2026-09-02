import React from 'react';
import { Download, Menu } from 'lucide-react';

interface HeaderProps {
  title?: string;
  onOpenDownloadModal: () => void;
  onOpenMobileMenu: () => void;
}

export function Header({
  title = "Reports",
  onOpenDownloadModal,
  onOpenMobileMenu,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-white border border-gray-200 shadow-xs"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onOpenDownloadModal}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200/80 shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-gray-600" />
          <span>Download</span>
        </button>
      </div>
    </header>
  );
}
