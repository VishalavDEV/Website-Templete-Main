import React from 'react';

export const DoctorDetailSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10" aria-hidden="true">
      {/* Left Column Profile Card Skeleton */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="floating-card bg-white p-0 overflow-hidden border border-slate-200/80">
          <div className="h-80 w-full skeleton-box"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 w-28 rounded-full skeleton-box"></div>
            <div className="h-7 w-3/4 rounded-xl skeleton-box"></div>
            <div className="h-4 w-1/2 rounded-md skeleton-box"></div>

            <div className="flex flex-col gap-3 py-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full skeleton-box"></div>
                <div className="h-4 w-32 rounded-md skeleton-box"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full skeleton-box"></div>
                <div className="h-4 w-44 rounded-md skeleton-box"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full skeleton-box"></div>
                <div className="h-4 w-40 rounded-md skeleton-box"></div>
              </div>
            </div>

            <div className="h-12 w-full rounded-xl skeleton-box mt-2"></div>
          </div>
        </div>
      </div>

      {/* Right Column Bio & Credentials Skeleton */}
      <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
        <div className="floating-window bg-white p-8 sm:p-10 space-y-6">
          <div className="h-8 w-64 rounded-xl skeleton-box"></div>
          
          <div className="space-y-2.5">
            <div className="h-4 w-full rounded-md skeleton-box"></div>
            <div className="h-4 w-full rounded-md skeleton-box"></div>
            <div className="h-4 w-5/6 rounded-md skeleton-box"></div>
            <div className="h-4 w-4/6 rounded-md skeleton-box"></div>
          </div>

          <div className="pt-2 space-y-2">
            <div className="h-6 w-36 rounded-lg skeleton-box"></div>
            <div className="h-4 w-2/3 rounded-md skeleton-box"></div>
          </div>

          <div className="pt-2 space-y-3">
            <div className="h-6 w-48 rounded-lg skeleton-box"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-8 w-32 rounded-xl skeleton-box"></div>
              <div className="h-8 w-36 rounded-xl skeleton-box"></div>
              <div className="h-8 w-28 rounded-xl skeleton-box"></div>
              <div className="h-8 w-40 rounded-xl skeleton-box"></div>
            </div>
          </div>
        </div>

        {/* CTA Dark Banner Skeleton */}
        <div className="floating-window-dark bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-2 w-full sm:w-2/3">
            <div className="h-6 w-3/4 rounded-lg skeleton-box-dark"></div>
            <div className="h-4 w-full rounded-md skeleton-box-dark"></div>
          </div>
          <div className="h-12 w-36 rounded-xl skeleton-box-dark shrink-0"></div>
        </div>
      </div>
    </div>
  );
};
