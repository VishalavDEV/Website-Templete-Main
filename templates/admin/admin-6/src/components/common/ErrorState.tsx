import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'Failed to load requested data due to a system anomaly. Please try again.',
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-2xl">
      <div className="p-3 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 mb-3">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-rose-900 dark:text-rose-200 mb-1">{title}</h3>
      <p className="text-sm text-rose-700 dark:text-rose-400 max-w-md mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm rounded-lg shadow-sm transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Retry Request
        </button>
      )}
    </div>
  );
};
