import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Download, Filter, Printer, SlidersHorizontal, CheckSquare, Square } from 'lucide-react';

export default function AdvancedDataTable({ columns, data, title, subtitle }) {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const itemsPerPage = 8;

  // Sorting logic
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Filter & Search logic
  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (val) => val && val.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    const aVal = a[sortField];
    const bVal = b[sortField];
    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage) || 1;
  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((d) => d.id || d.name));
    }
  };

  const exportCSV = () => {
    if (!data.length) return;
    const headers = columns.map((c) => c.header).join(',');
    const rows = data.map((row) =>
      columns.map((c) => `"${row[c.accessor] || ''}"`).join(',')
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${title || 'export'}_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          {title && <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-56">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search records..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-neura-cyan"
            />
          </div>

          <button
            onClick={exportCSV}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan text-slate-300 hover:text-neura-cyan transition-all text-xs font-semibold flex items-center space-x-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CSV</span>
          </button>

          <button
            onClick={() => window.print()}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-neura-cyan text-slate-300 hover:text-neura-cyan transition-all text-xs"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-white/10 rounded-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/[0.03] text-slate-400 font-semibold border-b border-white/10 uppercase tracking-wider">
            <tr>
              <th className="p-4 w-10">
                <button onClick={toggleSelectAll}>
                  {selectedRows.length === paginatedData.length && paginatedData.length > 0 ? (
                    <CheckSquare className="w-4 h-4 text-neura-cyan" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-500" />
                  )}
                </button>
              </th>
              {columns.map((col) => (
                <th
                  key={col.header}
                  onClick={() => handleSort(col.accessor)}
                  className="p-4 cursor-pointer hover:text-white select-none transition-colors"
                >
                  <div className="flex items-center space-x-1">
                    <span>{col.header}</span>
                    {sortField === col.accessor && (
                      <span className="text-neura-cyan">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-200">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="p-6 text-center text-slate-400">
                  No records found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => {
                const rowId = row.id || row.name || idx;
                const isSelected = selectedRows.includes(rowId);

                return (
                  <tr
                    key={rowId}
                    className={`hover:bg-white/[0.04] transition-colors ${
                      isSelected ? 'bg-neura-cyan/5' : ''
                    }`}
                  >
                    <td className="p-4">
                      <button onClick={() => toggleSelectRow(rowId)}>
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-neura-cyan" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-600" />
                        )}
                      </button>
                    </td>
                    {columns.map((col) => (
                      <td key={col.header} className="p-4">
                        {col.cell ? col.cell(row) : row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
        <span>
          Showing {paginatedData.length} of {sortedData.length} entries
        </span>
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 disabled:opacity-40 hover:bg-white/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-white font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 disabled:opacity-40 hover:bg-white/10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
