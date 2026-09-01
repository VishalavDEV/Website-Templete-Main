import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Search, ArrowUpDown, ChevronRight, Edit3, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Badge } from '../../ui/Badge';
import { Avatar } from '../../ui/Avatar';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  isSortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  isSearchable?: boolean;
  isFilterable?: boolean;
  isSelectable?: boolean;
  isExpandable?: boolean;
  isNested?: boolean;
  isDense?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  renderExpandedRow?: (row: T) => React.ReactNode;
  bulkActions?: (selected: T[]) => React.ReactNode;
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data: initialData,
  isSearchable = false,
  isSelectable = false,
  isExpandable = false,
  isDense = false,
  isLoading = false,
  isError = false,
  renderExpandedRow,
  bulkActions,
}: TableProps<T>) {
  const [data, setData] = useState<T[]>(initialData);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<any[]>([]);
  const [expandedIds, setExpandedIds] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<any | null>(null);
  const [editingData, setEditingData] = useState<Record<string, any>>({});

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isDense ? 8 : 5;

  // Sorting Handler
  const handleSort = (key: keyof T) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);

    const sorted = [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'number' && typeof valB === 'number') {
        return order === 'asc' ? valA - valB : valB - valA;
      }
      return order === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
    setData(sorted);
  };

  // Inline Editing trigger
  const handleStartEdit = (row: T) => {
    setEditingId(row.id);
    setEditingData(row);
  };

  const handleSaveEdit = (rowId: any) => {
    setData((prev) => prev.map((item) => (item.id === rowId ? { ...item, ...editingData } : item)));
    setEditingId(null);
  };

  const handleInputChange = (key: string, val: string) => {
    setEditingData((prev) => ({ ...prev, [key]: val }));
  };

  // Checkbox row toggler
  const handleToggleSelectRow = (id: any) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data.map((item) => item.id));
    }
  };

  // Expand row toggler
  const handleToggleExpandRow = (id: any) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Query filtering logic
  const filteredData = searchQuery
    ? data.filter((row) =>
        columns.some((col) =>
          String(row[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : data;

  // Pagination Slice
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="w-full border border-border bg-card rounded-xl p-8 flex flex-col items-center justify-center gap-2 h-48 select-none border-dashed">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent animate-spin rounded-full"></div>
        <p className="text-xs text-muted-foreground">Loading database rows...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full border border-border bg-card rounded-xl p-8 flex flex-col items-center justify-center gap-2 h-48 select-none text-center">
        <p className="text-sm font-bold text-destructive">Failed to fetch database rows.</p>
        <p className="text-xs text-muted-foreground">Connection error to database backend.</p>
        <Button variant="outline" size="sm" onClick={() => window.location.reload()}>Retry fetch</Button>
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <div className="w-full border border-border bg-card rounded-xl p-8 flex flex-col items-center justify-center gap-1.5 h-48 select-none text-center border-dashed">
        <p className="text-sm font-semibold">No records found</p>
        <p className="text-xs text-muted-foreground">Try adjusting search query filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full select-none">
      {/* Top filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {isSearchable && (
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search table rows..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="h-9 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        )}
        
        {/* Bulk actions */}
        {isSelectable && selectedIds.length > 0 && bulkActions && (
          <div className="flex items-center gap-2 px-3 py-1.5 border border-border bg-muted/30 rounded-lg animate-in fade-in duration-200">
            <span className="text-xs font-semibold text-muted-foreground">{selectedIds.length} Selected</span>
            {bulkActions(data.filter((item) => selectedIds.includes(item.id)))}
          </div>
        )}
      </div>

      {/* Main Table grid */}
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="min-w-full divide-y divide-border text-sm">
          <thead className="bg-muted/40">
            <tr>
              {/* Expand columns index */}
              {isExpandable && <th className="w-10 px-4 py-3"></th>}
              
              {/* Checkboxes header */}
              {isSelectable && (
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === data.length}
                    onChange={handleToggleSelectAll}
                    className="h-4.5 w-4.5 rounded border border-input text-primary cursor-pointer focus:ring-2 focus:ring-ring"
                  />
                </th>
              )}

              {columns.map((col) => (
                <th 
                  key={String(col.key)} 
                  className="px-4 py-3 text-left font-bold text-foreground/80 tracking-wider text-xs"
                >
                  {col.isSortable ? (
                    <button 
                      onClick={() => handleSort(col.key)}
                      className="flex items-center gap-1.5 hover:text-foreground cursor-pointer"
                    >
                      <span>{col.label}</span>
                      <ArrowUpDown className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <span>{col.label}</span>
                  )}
                </th>
              ))}
              
              {/* Actions Header */}
              <th className="px-4 py-3 text-right"></th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-border bg-card">
            {paginatedData.map((row) => {
              const isSelected = selectedIds.includes(row.id);
              const isExpanded = expandedIds.includes(row.id);
              const isEditing = editingId === row.id;

              return (
                <React.Fragment key={row.id}>
                  <tr className={`hover:bg-accent/20 transition-colors ${isSelected ? 'bg-primary/5 font-semibold' : ''}`}>
                    {/* Expand click button */}
                    {isExpandable && (
                      <td className="px-4 py-3 text-center">
                        <button 
                          onClick={() => handleToggleExpandRow(row.id)}
                          className="p-1 rounded hover:bg-accent text-muted-foreground cursor-pointer"
                        >
                          <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      </td>
                    )}

                    {/* Checkbox box */}
                    {isSelectable && (
                      <td className="px-4 py-3 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleSelectRow(row.id)}
                          className="h-4.5 w-4.5 rounded border border-input text-primary cursor-pointer focus:ring-2 focus:ring-ring"
                        />
                      </td>
                    )}

                    {/* Columns value grid */}
                    {columns.map((col) => {
                      if (isEditing) {
                        return (
                          <td key={String(col.key)} className="px-4 py-2">
                            <input
                              type="text"
                              value={editingData[String(col.key)] ?? ''}
                              onChange={(e) => handleInputChange(String(col.key), e.target.value)}
                              className="h-8 rounded border border-border bg-background px-2 py-1 text-xs focus:outline-none w-full"
                            />
                          </td>
                        );
                      }

                      return (
                        <td key={String(col.key)} className="px-4 py-3 text-foreground/90">
                          {col.render ? col.render(row) : String(row[col.key])}
                        </td>
                      );
                    })}

                    {/* Quick Inline Edit Action Menu */}
                    <td className="px-4 py-3 text-right">
                      {isEditing ? (
                        <div className="flex gap-1.5 justify-end">
                          <Button size="sm" variant="success" className="h-7 px-2 text-[10px]" onClick={() => handleSaveEdit(row.id)}>Save</Button>
                          <Button size="sm" variant="outline" className="h-7 px-2 text-[10px]" onClick={() => setEditingId(null)}>Cancel</Button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleStartEdit(row)}
                          title="Inline Edit"
                          className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>

                  {/* Expanded rows layout */}
                  {isExpanded && renderExpandedRow && (
                    <tr className="bg-muted/10 border-t-0">
                      <td colSpan={columns.length + (isSelectable ? 2 : 1)} className="px-6 py-4.5 border-b border-border/40">
                        {renderExpandedRow(row)}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between text-xs py-2 select-none">
        <span className="text-muted-foreground">
          Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> (Total {filteredData.length} records)
        </span>
        <div className="flex gap-1">
          <Button 
            variant="outline" 
            size="sm" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            Prev
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
