import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center space-x-2 my-10"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2.5 rounded-lg border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {getPages().map((page, idx) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="px-3 py-2 text-[#78716C] dark:text-[#A39C90]"
            >
              ...
            </span>
          );
        }

        const pageNum = Number(page);
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            aria-current={isActive ? 'page' : undefined}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              isActive
                ? 'bg-[#C85A32] text-white shadow-2xs font-semibold'
                : 'border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420]'
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2.5 rounded-lg border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
