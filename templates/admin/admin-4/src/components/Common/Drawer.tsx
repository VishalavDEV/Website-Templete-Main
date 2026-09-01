import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  position?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'w-80',
    md: 'w-96',
    lg: 'w-[28rem]',
    xl: 'w-[36rem]'
  };

  const posClasses = {
    left: 'left-0 animate-in slide-in-from-left',
    right: 'right-0 animate-in slide-in-from-right'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={onClose} />
      <div
        className={clsx(
          'fixed top-0 bottom-0 z-10 flex flex-col bg-app-surface border-app shadow-2xl transition-transform duration-200 ease-in-out',
          position === 'left' ? 'border-r' : 'border-l',
          posClasses[position],
          sizeClasses[size]
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-app">
            <h3 className="text-base font-semibold text-app-primary">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-app-secondary hover:text-app-primary hover:bg-app-hover"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
};
