export function PageSkeleton() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-[#080808] animate-pulse">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="h-12 bg-dark-bg/8 dark:bg-white/8 rounded-lg w-1/2 mb-6" />
        <div className="h-6 bg-dark-bg/8 dark:bg-white/8 rounded w-3/4 mb-4" />
        <div className="h-6 bg-dark-bg/8 dark:bg-white/8 rounded w-2/3" />
      </div>
    </div>
  );
}
