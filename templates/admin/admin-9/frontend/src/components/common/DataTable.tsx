import React from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { TableSkeleton } from './LoadingSkeleton';
import EmptyState from './EmptyState';

interface Header {
  key: string;
  label: string;
  sortable?: boolean;
}

interface DataTableProps {
  headers: Header[];
  data: any[];
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  renderRow: (row: any, index: number) => React.ReactNode;
  loading?: boolean;
  placeholder?: string;
  actions?: React.ReactNode;
  onSort?: (key: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  searchQuery,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  renderRow,
  loading = false,
  placeholder = 'Search records...',
  actions,
  onSort,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden">
      {/* Header controls */}
      {(onSearchChange || actions) && (
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {onSearchChange && (
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3.5 top-2.5 h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-slate-50/50"
              />
            </div>
          )}
          {actions && <div className="flex items-center gap-3 w-full sm:w-auto justify-end">{actions}</div>}
        </div>
      )}

      {loading ? (
        <div className="p-4">
          <TableSkeleton rows={5} cols={headers.length} />
        </div>
      ) : data.length === 0 ? (
        <div className="p-6">
          <EmptyState
            title="No records found"
            description="We couldn't find any data matching your criteria. Try adjusting your filters or search query."
          />
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/40">
                  {headers.map((h) => (
                    <th
                      key={h.key}
                      onClick={() => h.sortable && onSort && onSort(h.key)}
                      className={`p-4 text-xs font-bold text-slate-400 tracking-wider select-none ${
                        h.sortable && onSort ? 'cursor-pointer hover:bg-slate-100/50 transition-colors' : ''
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {h.label}
                        {h.sortable && onSort && <ArrowUpDown className="h-3 w-3 text-slate-400" />}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => renderRow(row, index))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          {totalPages > 1 && (
            <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/20">
              <span className="text-xs text-slate-500 font-medium">
                Page {currentPage + 1} of {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 0}
                  onClick={() => onPageChange(currentPage - 1)}
                  className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent transition-all active:scale-95"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onPageChange(index)}
                    className={`h-8 w-8 text-xs font-semibold rounded-lg border transition-all ${
                      currentPage === index
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-100'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages - 1}
                  onClick={() => onPageChange(currentPage + 1)}
                  className="p-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent transition-all active:scale-95"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DataTable;
