export function PostCardSkeleton() {
  return (
    <div className="flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-neutral-200" />
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 bg-neutral-200 rounded" />
          <div className="h-4 w-16 bg-neutral-200 rounded" />
        </div>
        <div className="h-6 w-full bg-neutral-200 rounded" />
        <div className="h-4 w-3/4 bg-neutral-200 rounded" />
        <div className="pt-4 mt-auto border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-neutral-200" />
            <div className="h-4 w-24 bg-neutral-200 rounded" />
          </div>
          <div className="h-4 w-12 bg-neutral-200 rounded" />
        </div>
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-pulse space-y-6">
      <div className="h-6 w-32 bg-neutral-200 rounded" />
      <div className="h-12 w-full bg-neutral-200 rounded" />
      <div className="h-6 w-2/3 bg-neutral-200 rounded" />
      <div className="flex items-center space-x-4 py-4 border-y border-neutral-200">
        <div className="w-12 h-12 rounded-full bg-neutral-200" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-neutral-200 rounded" />
          <div className="h-3 w-24 bg-neutral-200 rounded" />
        </div>
      </div>
      <div className="h-[400px] w-full bg-neutral-200 rounded-lg" />
      <div className="space-y-4 pt-6">
        <div className="h-4 w-full bg-neutral-200 rounded" />
        <div className="h-4 w-full bg-neutral-200 rounded" />
        <div className="h-4 w-5/6 bg-neutral-200 rounded" />
        <div className="h-4 w-full bg-neutral-200 rounded" />
      </div>
    </div>
  );
}
