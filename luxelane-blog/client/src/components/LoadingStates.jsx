import React from 'react';

// Loading spinner component
export const LoadingSpinner = ({ size = 'md', color = 'white', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    white: 'border-white',
    gray: 'border-gray-400',
    purple: 'border-purple-500',
    pink: 'border-pink-500'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]} ${className}`} />
  );
};

// Skeleton loader for post cards
export const PostCardSkeleton = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-white/20 animate-pulse">
    <div className="w-full h-48 sm:h-64 md:h-80 bg-white/20" />
    <div className="p-4 sm:p-6 space-y-3">
      <div className="h-6 bg-white/20 rounded w-3/4" />
      <div className="h-4 bg-white/20 rounded w-1/4" />
      <div className="space-y-2">
        <div className="h-4 bg-white/20 rounded w-full" />
        <div className="h-4 bg-white/20 rounded w-5/6" />
        <div className="h-4 bg-white/20 rounded w-4/6" />
      </div>
      <div className="h-10 bg-white/20 rounded w-full" />
    </div>
  </div>
);

// Skeleton loader for post list
export const PostListSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <PostCardSkeleton key={index} />
    ))}
  </div>
);

// Loading overlay for forms
export const LoadingOverlay = ({ isVisible, message = 'Loading...' }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

// Button loading state
export const LoadingButton = ({ 
  loading, 
  children, 
  loadingText = 'Loading...', 
  disabled = false,
  className = '',
  ...props 
}) => (
  <button
    disabled={loading || disabled}
    className={`flex items-center justify-center gap-2 ${className}`}
    {...props}
  >
    {loading && <LoadingSpinner size="sm" />}
    {loading ? loadingText : children}
  </button>
);

// Page loading component
export const PageLoading = ({ message = 'Loading page...' }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="xl" className="mx-auto mb-4" />
      <p className="text-white text-lg">{message}</p>
    </div>
  </div>
);

// Inline loading indicator
export const InlineLoading = ({ message = 'Loading...' }) => (
  <div className="flex items-center gap-2 text-white/80">
    <LoadingSpinner size="sm" />
    <span>{message}</span>
  </div>
);

// Optimistic update indicator
export const OptimisticIndicator = ({ isOptimistic, children }) => (
  <div className={`relative ${isOptimistic ? 'opacity-75' : ''}`}>
    {children}
    {isOptimistic && (
      <div className="absolute top-2 right-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      </div>
    )}
  </div>
);

// Error state component
export const ErrorState = ({ 
  error, 
  onRetry, 
  title = 'Something went wrong',
  className = '' 
}) => {
  // Determine if it's a network error
  const isNetworkError = error?.includes('Network Error') || 
                        error?.includes('Failed to fetch') || 
                        error?.includes('ERR_NETWORK') ||
                        error?.includes('ECONNREFUSED');
  
  const errorTitle = isNetworkError ? 'Connection Error' : title;
  const errorMessage = isNetworkError 
    ? 'Unable to connect to the server. Please check your internet connection and try again.'
    : error;

  return (
    <div className={`text-center py-8 ${className}`}>
      <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-6 rounded-lg max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-2">{errorTitle}</h3>
        <p className="text-sm mb-4">{errorMessage}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-2 rounded hover:bg-red-500/30 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

// Empty state component
export const EmptyState = ({ 
  title = 'No items found',
  message = 'There are no items to display at the moment.',
  icon = '📭',
  action = null,
  className = '' 
}) => (
  <div className={`text-center py-12 ${className}`}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/60 mb-6">{message}</p>
    {action && action}
  </div>
);

// Progress bar for uploads or long operations
export const ProgressBar = ({ progress = 0, className = '' }) => (
  <div className={`w-full bg-white/20 rounded-full h-2 ${className}`}>
    <div 
      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
    />
  </div>
);

// Loading states for different contexts
export const LoadingStates = {
  Spinner: LoadingSpinner,
  PostCard: PostCardSkeleton,
  PostList: PostListSkeleton,
  Overlay: LoadingOverlay,
  Button: LoadingButton,
  Page: PageLoading,
  Inline: InlineLoading,
  Optimistic: OptimisticIndicator,
  Error: ErrorState,
  Empty: EmptyState,
  Progress: ProgressBar
};

export default LoadingStates; 