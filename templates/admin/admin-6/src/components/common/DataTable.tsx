import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpDown,
  Download,
  Trash2,
  Filter,
  CheckSquare,
  Square,
  ChevronDown,
} from 'lucide-react';
import { Pagination } from './Pagination';
import { EmptyState } from './EmptyState';

export interface Column<T> {
  key: string;
  header: string;
  accessor?: (item: T) => any;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchPlaceholder?: string;
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  onBulkDelete?: (selectedIds: string[]) => void;
  onBulkStatusUpdate?: (selectedIds: string[], status: string) => void;
  statusOptions?: string[];
  actions?: React.ReactNode;
  exportFileName?: string;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  searchPlaceholder = 'Search records...',
  keyExtractor,
  onRowClick,
  onBulkDelete,
  onBulkStatusUpdate,
  statusOptions = [],
  actions,
  exportFileName = 'export-data',
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  // Filter & Search
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Status Filter
      if (statusFilter !== 'ALL' && item.status) {
        if (String(item.status).toLowerCase() !== statusFilter.toLowerCase()) {
          return false;
        }
      }

      if (!searchTerm) return true;
      return Object.values(item).some((val) =>
        String(val ?? '')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });
  }, [data, searchTerm, statusFilter]);

  // Sort
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      const col = columns.find((c) => c.key === sortColumn);
      const valA = col?.accessor ? col.accessor(a) : a[sortColumn];
      const valB = col?.accessor ? col.accessor(b) : b[sortColumn];

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection, columns]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Sorting Handler
  const handleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return;
    if (sortColumn === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  // Row Selection Handlers
  const handleSelectAll = () => {
    if (selectedIds.length === paginatedData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedData.map(keyExtractor));
    }
  };

  const handleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // CSV Export Handler
  const handleExportCSV = () => {
    if (!data.length) return;
    const headers = columns.map((c) => c.header).join(',');
    const rows = sortedData.map((item) =>
      columns
        .map((c) => {
          const val = c.accessor ? c.accessor(item) : item[c.key];
          return `"${String(val ?? '').replace(/"/g, '""')}"`;
        })
        .join(',')
    );

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${exportFileName}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden transition-all">
      {/* Table Toolbar */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50">
        {/* Search & Status Filter */}
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
          </div>

          {statusOptions.length > 0 && (
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none pl-3 pr-8 py-2 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="ALL">All Statuses</option>
                {statusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Toolbar Right Actions */}
        <div className="flex items-center gap-2">
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 mr-2">
              <span className="text-xs font-semibold px-2 py-1 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 rounded-lg">
                {selectedIds.length} Selected
              </span>
              {onBulkDelete && (
                <button
                  onClick={() => {
                    onBulkDelete(selectedIds);
                    setSelectedIds([]);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 hover:bg-rose-100 rounded-lg border border-rose-200 dark:border-rose-800 flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Bulk Delete
                </button>
              )}
            </div>
          )}

          <button
            onClick={handleExportCSV}
            className="px-3 py-2 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>

          {actions}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold select-none">
              <th className="p-4 w-10 text-center">
                <button onClick={handleSelectAll}>
                  {selectedIds.length > 0 && selectedIds.length === paginatedData.length ? (
                    <CheckSquare className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key, col.sortable)}
                  className={`p-4 ${col.sortable ? 'cursor-pointer hover:text-slate-900 dark:hover:text-white' : ''}`}
                >
                  <div className="flex items-center gap-1">
                    <span>{col.header}</span>
                    {col.sortable && <ArrowUpDown className="w-3 h-3 text-slate-400 ml-1" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="p-0">
                  <EmptyState />
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => {
                const id = keyExtractor(item);
                const isSelected = selectedIds.includes(id);

                return (
                  <tr
                    key={id}
                    className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors ${
                      isSelected ? 'bg-brand-50/40 dark:bg-brand-950/30' : ''
                    }`}
                  >
                    <td className="p-4 text-center">
                      <button onClick={() => handleSelectRow(id)}>
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    </td>

                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="p-4"
                        onClick={() => onRowClick && onRowClick(item)}
                      >
                        {col.render
                          ? col.render(item)
                          : col.accessor
                          ? col.accessor(item)
                          : item[col.key]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
        totalItems={sortedData.length}
        itemsPerPage={pageSize}
      />
    </div>
  );
}
