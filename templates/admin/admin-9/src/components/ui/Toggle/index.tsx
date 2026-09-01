import React, { useState } from 'react';

export function Toggle({ label, checked, onChange }: { label?: string; checked?: boolean; onChange?: (val: boolean) => void }) {
  const [val, setVal] = useState(checked || false);

  const toggle = () => {
    const newChecked = !val;
    setVal(newChecked);
    onChange?.(newChecked);
  };

  return (
    <button
      onClick={toggle}
      className={`px-3 py-2 rounded-lg border border-border text-xs font-semibold cursor-pointer shadow-sm transition-all ${
        val 
          ? 'bg-primary text-primary-foreground border-primary' 
          : 'bg-card text-foreground hover:bg-accent'
      }`}
    >
      {label || (val ? 'Active' : 'Inactive')}
    </button>
  );
}
