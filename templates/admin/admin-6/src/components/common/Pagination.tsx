import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  if (totalPages <= 1) return null;

  const startItem = totalItems && itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : undefined;
  const endItem =
    totalItems && itemsPerPage ? Math.min(currentPage * itemsPerPage, totalItems) : undefined;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-b-2xl text-sm">
      {totalItems !== undefined && startItem !== undefined && endItem !== undefined ? (
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Showing <span className="font-semibold text-slate-900 dark:text-white">{startItem}</span> to{' '}
          <span className="font-semibold text-slate-900 dark:text-white">{endItem}</span> of{' '}
          <span className="font-semibold text-slate-900 dark:text-white">{totalItems}</span> results
        </div>
      ) : (
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Page {currentPage} of {totalPages}
        </div>
      )}

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="First Page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Last Page"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
