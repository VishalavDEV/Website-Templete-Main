import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, X, Search } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string | number;
  group?: string;
  avatar?: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: any;
  onChange: (val: any) => void;
  placeholder?: string;
  label?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  isAsync?: boolean;
  loadOptions?: (query: string) => Promise<SelectOption[]>;
}

export function Select({
  options: initialOptions,
  value,
  onChange,
  placeholder = 'Select option...',
  label,
  isMulti,
  isSearchable,
  isAsync,
  loadOptions,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [options, setOptions] = useState<SelectOption[]>(initialOptions);
  const [isLoading, setIsLoading] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  // Click outside to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Async loader simulation
  useEffect(() => {
    if (!isAsync || !loadOptions) return;
    let isMounted = true;
    setIsLoading(true);

    const delay = setTimeout(() => {
      loadOptions(searchQuery).then((res) => {
        if (isMounted) {
          setOptions(res);
          setIsLoading(false);
        }
      });
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(delay);
    };
  }, [searchQuery, isAsync, loadOptions]);

  const handleSelectOption = (opt: SelectOption) => {
    if (isMulti) {
      const currentValues = Array.isArray(value) ? value : [];
      const index = currentValues.indexOf(opt.value);
      if (index > -1) {
        onChange(currentValues.filter((v) => v !== opt.value));
      } else {
        onChange([...currentValues, opt.value]);
      }
    } else {
      onChange(opt.value);
      setIsOpen(false);
    }
  };

  const handleRemoveValue = (valToRemove: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMulti && Array.isArray(value)) {
      onChange(value.filter((v) => v !== valToRemove));
    } else {
      onChange(undefined);
    }
  };

  const selectedOptions = Array.isArray(value)
    ? options.filter((o) => value.includes(o.value))
    : options.filter((o) => o.value === value);

  // Grouped options grouping logic
  const groups = options.reduce<Record<string, SelectOption[]>>((acc, curr) => {
    const groupName = curr.group || 'General';
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(curr);
    return acc;
  }, {});

  const filteredOptions = isSearchable && !isAsync
    ? options.filter((o) => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : options;

  return (
    <div ref={selectRef} className="w-full space-y-1.5 select-none relative">
      {label && <label className="block text-sm font-medium text-foreground">{label}</label>}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-10 items-center justify-between w-full rounded-lg border border-input bg-card px-3 py-2 text-sm cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <div className="flex flex-wrap gap-1 items-center">
          {selectedOptions.length === 0 && <span className="text-muted-foreground">{placeholder}</span>}
          {isMulti
            ? selectedOptions.map((o) => (
                <span key={o.value} className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                  {o.avatar && <img src={o.avatar} className="h-3.5 w-3.5 rounded-full" />}
                  <span>{o.label}</span>
                  <X className="h-3 w-3 hover:text-destructive shrink-0 cursor-pointer" onClick={(e) => handleRemoveValue(o.value, e)} />
                </span>
              ))
            : selectedOptions[0] && (
                <span className="flex items-center gap-2">
                  {selectedOptions[0].avatar && <img src={selectedOptions[0].avatar} className="h-4.5 w-4.5 rounded-full border border-border" />}
                  <span>{selectedOptions[0].label}</span>
                </span>
              )}
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
      </div>

      {isOpen && (
        <div className="absolute top-[105%] left-0 w-full bg-card rounded-lg border border-border shadow-xl p-1 z-50 max-h-60 overflow-y-auto">
          {isSearchable && (
            <div className="relative m-1.5">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full text-xs rounded border border-border bg-background py-1.5 pl-8 pr-3 focus:outline-none"
              />
            </div>
          )}

          {isLoading ? (
            <p className="text-xs text-muted-foreground text-center py-2 animate-pulse">Loading items...</p>
          ) : Object.keys(groups).length > 1 ? (
            // Render Grouped Select options
            Object.entries(groups).map(([groupName, groupOpts]) => (
              <div key={groupName}>
                <div className="text-[10px] font-bold text-muted-foreground/60 uppercase px-2.5 py-1.5 bg-muted/20">{groupName}</div>
                {groupOpts.map((opt) => (
                  <OptionRow key={opt.value} opt={opt} isMulti={isMulti} isSelected={Array.isArray(value) ? value.includes(opt.value) : value === opt.value} selectOption={handleSelectOption} />
                ))}
              </div>
            ))
          ) : (
            filteredOptions.map((opt) => (
              <OptionRow key={opt.value} opt={opt} isMulti={isMulti} isSelected={Array.isArray(value) ? value.includes(opt.value) : value === opt.value} selectOption={handleSelectOption} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

function OptionRow({
  opt,
  isMulti,
  isSelected,
  selectOption,
}: {
  opt: SelectOption;
  isMulti?: boolean;
  isSelected: boolean;
  selectOption: (o: SelectOption) => void;
}) {
  return (
    <div
      onClick={() => selectOption(opt)}
      className={`flex items-center justify-between px-3 py-2 text-xs rounded hover:bg-accent cursor-pointer transition-colors ${
        isSelected ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'
      }`}
    >
      <div className="flex items-center gap-2">
        {opt.avatar && <img src={opt.avatar} className="h-5 w-5 rounded-full border border-border shrink-0" />}
        <span>{opt.label}</span>
      </div>
      {isSelected && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
    </div>
  );
}
