import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionLink?: string;
  onReset?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No stories found',
  description = 'We could not find any stories matching your current criteria. Try adjusting your search query or filter selection.',
  actionText = 'Explore all stories',
  actionLink = '/stories',
  onReset
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 my-8 rounded-3xl border border-dashed border-[#E8E2D5] dark:border-[#3A342E] bg-white/80 dark:bg-[#1E1B18]/80 max-w-xl mx-auto shadow-2xs">
      <div className="w-16 h-16 rounded-2xl bg-[#C85A32]/15 text-[#C85A32] dark:text-[#E27453] flex items-center justify-center mb-5">
        <FileQuestion className="w-8 h-8 text-[#C85A32] dark:text-[#E27453]" />
      </div>
      <h3 className="text-xl font-bold font-display text-[#1C1917] dark:text-[#F7F4EE] mb-2">
        {title}
      </h3>
      <p className="text-[#44403C] dark:text-[#D7D1C6] text-sm leading-relaxed mb-6 max-w-md">
        {description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {onReset && (
          <button
            onClick={onReset}
            className="inline-flex items-center px-4 py-2.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-sm font-medium text-[#1C1917] dark:text-[#F7F4EE] hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 mr-2 text-[#C85A32] dark:text-[#E27453]" />
            Reset filters
          </button>
        )}
        {actionLink && (
          <Link
            to={actionLink}
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#C85A32] dark:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-sm font-medium transition-colors shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {actionText}
          </Link>
        )}
      </div>
    </div>
  );
};
