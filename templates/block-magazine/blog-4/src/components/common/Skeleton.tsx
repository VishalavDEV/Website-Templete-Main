import React from 'react';

interface CardSkeletonProps {
  variant?: 'grid' | 'horizontal' | 'compact' | 'featured' | 'featured-large';
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ variant = 'grid' }) => {
  if (variant === 'compact') {
    return (
      <div className="bg-white dark:bg-[#1E1B18] rounded-2xl border border-[#E8E2D5] dark:border-[#3A342E] p-4 animate-pulse">
        <div className="flex space-x-3">
          <div className="w-20 h-20 bg-[#E8E2D5] dark:bg-[#282420] rounded-xl shrink-0" />
          <div className="flex-1 space-y-2 py-1">
            <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-1/3" />
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
            <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className="bg-white dark:bg-[#1E1B18] rounded-2xl border border-[#E8E2D5] dark:border-[#3A342E] p-6 animate-pulse flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-56 h-48 md:h-36 bg-[#E8E2D5] dark:bg-[#282420] rounded-xl shrink-0" />
        <div className="flex-1 space-y-3 py-1">
          <div className="flex items-center space-x-3">
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-full w-20" />
            <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-16" />
          </div>
          <div className="h-6 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-3/4" />
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-2/3" />
          <div className="pt-4 flex items-center justify-between border-t border-[#E8E2D5] dark:border-[#3A342E]">
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-24" />
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-16" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured-large' || variant === 'featured') {
    return (
      <div className="bg-white dark:bg-[#1E1B18] rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] overflow-hidden animate-pulse flex flex-col h-full">
        <div className="aspect-16/10 w-full bg-[#E8E2D5] dark:bg-[#282420]" />
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-full w-24" />
              <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-16" />
            </div>
            <div className="h-7 sm:h-9 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-full" />
            <div className="h-7 sm:h-9 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-4/5" />
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full pt-2" />
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-2/3" />
          </div>
          <div className="pt-6 border-t border-[#E8E2D5] dark:border-[#3A342E] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#E8E2D5] dark:bg-[#282420]" />
              <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-28" />
            </div>
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-20" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl border border-[#E8E2D5] dark:border-[#3A342E] overflow-hidden animate-pulse flex flex-col h-full">
      <div className="aspect-16/10 w-full bg-[#E8E2D5] dark:bg-[#282420]" />
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center space-x-2">
            <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-20" />
            <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-12" />
          </div>
          <div className="h-5 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
          <div className="h-5 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-4/5" />
          <div className="h-3.5 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full pt-1" />
          <div className="h-3.5 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-2/3" />
        </div>
        <div className="pt-4 border-t border-[#E8E2D5] dark:border-[#3A342E] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-[#E8E2D5] dark:bg-[#282420]" />
            <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-20" />
          </div>
          <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-12" />
        </div>
      </div>
    </div>
  );
};

export const HeroSkeleton: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] p-6 sm:p-10 lg:p-12 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center space-x-3">
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-full w-28" />
            <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-20" />
          </div>
          <div className="h-10 sm:h-12 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-full" />
          <div className="h-10 sm:h-12 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-4/5" />
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full pt-1" />
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-3/4" />
          <div className="pt-4 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#E8E2D5] dark:bg-[#282420]" />
            <div className="space-y-2">
              <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-32" />
              <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-20" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-4/3 w-full bg-[#E8E2D5] dark:bg-[#282420] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export const StoryDeckSkeleton: React.FC = () => {
  return (
    <div className="rounded-3xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] p-8 sm:p-12 animate-pulse space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-32" />
          <div className="h-7 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-64" />
        </div>
        <div className="h-8 bg-[#E8E2D5] dark:bg-[#282420] rounded-xl w-24 hidden sm:block" />
      </div>
      <div className="h-80 sm:h-96 w-full bg-[#E8E2D5]/70 dark:bg-[#282420]/70 rounded-2xl flex items-center justify-center">
        <div className="w-64 sm:w-80 h-72 bg-[#E8E2D5] dark:bg-[#282420] rounded-2xl shadow-xl" />
      </div>
    </div>
  );
};

export const ArticleDetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      <div className="space-y-4">
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-28" />
        <div className="h-10 sm:h-12 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-full" />
        <div className="h-10 sm:h-12 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-4/5" />
        <div className="h-6 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-3/4 pt-2" />
      </div>

      <div className="flex items-center space-x-4 py-4 border-y border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="w-12 h-12 rounded-full bg-[#E8E2D5] dark:bg-[#282420]" />
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-36" />
          <div className="h-3 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-24" />
        </div>
      </div>

      <div className="aspect-16/9 w-full bg-[#E8E2D5] dark:bg-[#282420] rounded-3xl" />

      <div className="space-y-4 pt-6">
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-5/6" />
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-3/4" />
      </div>
    </div>
  );
};

export const StoryDetailSkeleton: React.FC = () => {
  return <ArticleDetailSkeleton />;
};

export const CategoryDetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      <div className="py-8 border-b border-[#E8E2D5] dark:border-[#3A342E] space-y-4">
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-28" />
        <div className="h-10 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-64" />
        <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-96 max-w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} variant="grid" />
        ))}
      </div>
    </div>
  );
};

export const AuthorDetailSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      <div className="p-8 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] flex flex-col md:flex-row gap-6 items-center">
        <div className="w-28 h-28 rounded-2xl bg-[#E8E2D5] dark:bg-[#282420] shrink-0" />
        <div className="space-y-3 flex-1 w-full">
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-32" />
          <div className="h-8 bg-[#E8E2D5] dark:bg-[#282420] rounded-md w-64" />
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-full" />
          <div className="h-4 bg-[#E8E2D5] dark:bg-[#282420] rounded-sm w-4/5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} variant="grid" />
        ))}
      </div>
    </div>
  );
};
