import React, { useState } from 'react';

export function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-semibold px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 animate-in fade-in duration-200">
          {text}
          <div className="absolute top-[95%] left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
        </div>
      )}
    </div>
  );
}
