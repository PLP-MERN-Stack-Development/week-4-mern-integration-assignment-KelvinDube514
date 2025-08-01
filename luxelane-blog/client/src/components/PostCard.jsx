import { Link } from 'react-router-dom';
import { memo } from 'react';

const PostCard = memo(function PostCard({ post }) {
  // Validate post data
  if (!post || typeof post !== 'object') {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-white/20 p-4">
        <div className="text-white/60 text-center">Invalid post data</div>
      </div>
    );
  }

  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-white/20 ${
      post.isOptimistic ? 'opacity-75' : ''
    }`}>
      {/* Optimistic indicator */}
      {post.isOptimistic && (
        <div className="absolute top-2 right-2 z-10">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={post?.featuredImage || post?.image || 'https://via.placeholder.com/400x300/6366f1/ffffff?text=LuxeLane'} 
          alt={post?.title || 'Post image'} 
          className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/6366f1/ffffff?text=LuxeLane';
          }}
          loading="lazy"
        />
        {/* Category badge */}
        {post?.category?.name && (
          <div 
            className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-md border border-white/20"
            style={{ backgroundColor: post.category.color + '40' }}
          >
            {post.category.icon} {post.category.name}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
          {post?.title || 'Untitled Post'}
        </h3>
        <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 flex-1 line-clamp-3 leading-relaxed">
          {post?.excerpt || 'No excerpt available'}
        </p>
        {/* Tags */}
        {post?.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <Link 
          to={`/blog/${post?._id || '#'}`} 
          className="w-full text-center bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-lg text-white font-semibold hover:bg-white/20 hover:text-white/80 transition-colors duration-200 inline-flex items-center justify-center text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
});

export default PostCard;
