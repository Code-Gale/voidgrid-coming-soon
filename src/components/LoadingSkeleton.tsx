
const LoadingSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="skeleton-enhanced h-4 w-3/4 rounded"></div>
      <div className="skeleton-enhanced h-4 w-1/2 rounded"></div>
      <div className="skeleton-enhanced h-20 w-full rounded-lg"></div>
      <div className="flex space-x-4">
        <div className="skeleton-enhanced h-4 w-1/4 rounded"></div>
        <div className="skeleton-enhanced h-4 w-1/4 rounded"></div>
        <div className="skeleton-enhanced h-4 w-1/4 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
