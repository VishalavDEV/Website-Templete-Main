import { useState, useMemo } from 'react';

export type SortOrder = 'asc' | 'desc' | null;

export function useSort<T>(items: T[], initialKey: keyof T | null = null, initialOrder: SortOrder = null) {
  const [sortKey, setSortKey] = useState<keyof T | null>(initialKey);
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialOrder);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedItems = useMemo(() => {
    if (!sortKey || !sortOrder) return items;
    return [...items].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal === bVal) return 0;
      const order = sortOrder === 'asc' ? 1 : -1;
      return aVal > bVal ? order : -order;
    });
  }, [items, sortKey, sortOrder]);

  return { sortKey, sortOrder, handleSort, sortedItems };
}
