import { useState, useMemo } from 'react';

export function useSearch<T>(items: T[], searchKeys: (keyof T)[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    return items.filter(item =>
      searchKeys.some(key => {
        const val = item[key];
        return val && String(val).toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  }, [items, searchKeys, searchQuery]);

  return { searchQuery, setSearchQuery, filteredItems };
}
