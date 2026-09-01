import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  enable3D?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'lg',
  enable3D = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl'
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enable3D || !modalRef.current) return;
    const rect = modalRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Subtle 3D popup tilt on mouse move
    setRotateX(-yPct * 6);
    setRotateY(xPct * 6);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      id={id || 'modal-overlay'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidths[maxWidth]} bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-8 transform animate-in zoom-in-95 duration-300 ring-1 ring-teal-500/10`}
        onClick={e => e.stopPropagation()}
      >
        {/* Subtle Ambient Top 3D Light Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500 z-20" />

        {(title || subtitle) && (
          <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50/80 backdrop-blur-xs relative z-10">
            <div>
              {title && <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>}
              {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-200/60 transition-all hover:scale-110 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="p-6 sm:p-8 relative z-10">{children}</div>
      </div>
    </div>
  );
};
