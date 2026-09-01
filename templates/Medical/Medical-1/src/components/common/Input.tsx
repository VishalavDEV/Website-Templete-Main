import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          {label} {props.required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="relative rounded-xl shadow-2xs">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          className={`block w-full rounded-xl border ${
            error
              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 bg-rose-50/20'
              : 'border-slate-300 focus:border-teal-600 focus:ring-teal-600/20 bg-white text-slate-900'
          } ${leftIcon ? 'pl-10' : 'pl-3.5'} ${
            rightIcon ? 'pr-10' : 'pr-3.5'
          } py-2.5 text-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-3 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>
      {error ? (
        <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  label?: string;
  error?: string;
  helperText?: string;
  options?: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  error,
  helperText,
  options,
  children,
  className = '',
  ...props
}) => {
  const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          {label} {props.required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="relative rounded-xl shadow-2xs">
        <select
          id={selectId}
          className={`block w-full rounded-xl border appearance-none ${
            error
              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 bg-rose-50/20'
              : 'border-slate-300 focus:border-teal-600 focus:ring-teal-600/20 bg-white text-slate-900'
          } px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-3 pr-10 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed cursor-pointer ${className}`}
          {...props}
        >
          {options
            ? options.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error ? (
        <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  const areaId = id || (label ? `area-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={areaId} className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
          {label} {props.required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <textarea
        id={areaId}
        rows={props.rows || 3}
        className={`block w-full rounded-xl border ${
          error
            ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 bg-rose-50/20'
            : 'border-slate-300 focus:border-teal-600 focus:ring-teal-600/20 bg-white text-slate-900'
        } p-3.5 text-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-3 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
      {error ? (
        <p className="mt-1.5 text-xs text-rose-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};
