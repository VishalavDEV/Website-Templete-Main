import { useSearch } from './useSearch';
import { useSort } from './useSort';
import { usePagination } from './usePagination';

export function useTable<T>(items: T[], searchKeys: (keyof T)[], pageSize = 10) {
  const { searchQuery, setSearchQuery, filteredItems } = useSearch(items, searchKeys);
  const { sortKey, sortOrder, handleSort, sortedItems } = useSort(filteredItems);
  const { currentPage, totalPages, goToPage, next, prev } = usePagination(sortedItems.length, 1, pageSize);

  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return {
    searchQuery,
    setSearchQuery,
    sortKey,
    sortOrder,
    handleSort,
    currentPage,
    totalPages,
    goToPage,
    next,
    prev,
    items: paginatedItems
  };
}
