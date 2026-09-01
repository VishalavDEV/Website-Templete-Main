import React, { useState, useRef, useEffect } from 'react';

export function Popover({ trigger, content }: { trigger: React.ReactNode; content: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={popoverRef} className="relative inline-block text-left select-none">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-card border border-border rounded-xl shadow-xl p-4 z-50 animate-in fade-in duration-200">
          {content}
        </div>
      )}
    </div>
  );
}
