import React from 'react';

export const DepartmentDetailSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10" aria-hidden="true">
      {/* Left Column Overview Skeleton */}
      <div className="lg:col-span-8 floating-window bg-white p-6 sm:p-10 space-y-8">
        {/* Department Banner Image Skeleton */}
        <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full skeleton-box"></div>

        <div className="space-y-4">
          <div className="h-8 w-2/3 rounded-xl skeleton-box"></div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded-md skeleton-box"></div>
            <div className="h-4 w-full rounded-md skeleton-box"></div>
            <div className="h-4 w-5/6 rounded-md skeleton-box"></div>
            <div className="h-4 w-4/6 rounded-md skeleton-box"></div>
          </div>
        </div>

        {/* Procedures Grid Skeleton */}
        <div className="space-y-4 pt-2">
          <div className="h-6 w-56 rounded-lg skeleton-box"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="floating-card bg-slate-50/70 p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl skeleton-box shrink-0"></div>
                <div className="h-4 w-3/4 rounded-md skeleton-box"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Roster in Department Skeleton */}
        <div className="space-y-4 pt-4">
          <div className="h-6 w-64 rounded-lg skeleton-box"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="floating-card bg-white overflow-hidden flex flex-col border border-slate-200/80">
                <div className="h-64 w-full skeleton-box"></div>
                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 rounded-md skeleton-box"></div>
                  <div className="h-3.5 w-1/2 rounded-md skeleton-box"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column Side Widgets Skeleton */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        {/* Navigation Switcher Skeleton */}
        <div className="floating-window bg-white p-6 sm:p-8 space-y-4">
          <div className="h-6 w-48 rounded-lg skeleton-box"></div>
          <div className="flex flex-col gap-2 pt-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 w-full rounded-xl skeleton-box"></div>
            ))}
          </div>
        </div>

        {/* Emergency Card Skeleton */}
        <div className="floating-window-dark bg-slate-900 text-white p-6 sm:p-8 space-y-4">
          <div className="w-12 h-12 rounded-2xl skeleton-box-dark"></div>
          <div className="h-6 w-3/4 rounded-lg skeleton-box-dark"></div>
          <div className="h-4 w-full rounded-md skeleton-box-dark"></div>
          <div className="h-10 w-full rounded-xl skeleton-box-dark"></div>
        </div>
      </div>
    </div>
  );
};
