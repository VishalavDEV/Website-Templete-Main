import { useState } from 'react';

export function usePagination(totalItems: number, initialPage = 1, pageSize = 10) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / pageSize);

  const goToPage = (page: number) => {
    const p = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(p);
  };

  const next = () => goToPage(currentPage + 1);
  const prev = () => goToPage(currentPage - 1);

  return { currentPage, totalPages, goToPage, next, prev, pageSize };
}
