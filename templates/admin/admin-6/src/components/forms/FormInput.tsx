import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={inputId} className="text-xs font-semibold text-slate-700 dark:text-slate-300">
        {label} {props.required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={inputId}
        className={`w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white placeholder-slate-400 transition-colors ${
          error
            ? 'border-rose-500 dark:border-rose-500 focus:ring-rose-500'
            : 'border-slate-200 dark:border-slate-700'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-400">{helperText}</p>}
    </div>
  );
};
