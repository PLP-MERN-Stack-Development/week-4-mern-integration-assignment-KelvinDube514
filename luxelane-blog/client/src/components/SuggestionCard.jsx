import { useState } from 'react';

function SuggestionCard({ suggestion }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      // In a real app, you'd add this to the backend
      console.log('New comment added:', newComment);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20">
      <img 
        src={suggestion.image} 
        alt={suggestion.name} 
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-white mb-1">{suggestion.name}</h3>
        <p className="text-sm text-white/70 mb-1">{suggestion.role}</p>
        <p className="text-xs text-white/60 mb-3">{suggestion.city}, {suggestion.country}</p>
        <p className="italic text-white/80 mb-3">"{suggestion.tip}"</p>
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-white/80 border border-white/30">
          #{suggestion.hashtag}
        </span>

        {/* Reactions and Comments */}
        <div className="flex justify-between mt-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/70">❤️ {suggestion.reacts}</span>
            <span className="text-sm text-white/70">💬 {suggestion.comments.length}</span>
          </div>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="w-full px-3 py-1 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors border border-white/20"
          >
            💬 View Comments
          </button>
        </div>

        {/* Comment Section */}
        {showComments && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent mb-2 text-white placeholder-white/60 backdrop-blur-md"
            />
            <button 
              onClick={handleAddComment} 
              className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors mb-3 border border-white/20 backdrop-blur-md"
            >
              Post
            </button>
            <div className="max-h-32 overflow-y-auto space-y-2">
              {suggestion.comments.map((comment, i) => (
                <p key={i} className="text-sm text-white/80 bg-white/10 p-2 rounded-lg border border-white/20">💬 {comment}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuggestionCard; 