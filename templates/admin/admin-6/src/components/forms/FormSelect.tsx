import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  error?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  error,
  id,
  className = '',
  ...props
}) => {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={selectId} className="text-xs font-semibold text-slate-700 dark:text-slate-300">
        {label} {props.required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={`w-full appearance-none px-3.5 py-2 pr-8 text-sm bg-white dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white transition-colors ${
            error
              ? 'border-rose-500 dark:border-rose-500'
              : 'border-slate-200 dark:border-slate-700'
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={textareaId} className="text-xs font-semibold text-slate-700 dark:text-slate-300">
        {label} {props.required && <span className="text-rose-500">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={3}
        className={`w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white placeholder-slate-400 transition-colors ${
          error
            ? 'border-rose-500 dark:border-rose-500'
            : 'border-slate-200 dark:border-slate-700'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};
