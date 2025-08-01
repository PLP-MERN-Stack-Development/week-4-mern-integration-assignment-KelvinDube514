function ReviewCard({ review }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-white/20">
      <div className="flex items-center mb-4">
        <img 
          src={review.avatar} 
          alt={review.name} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/30"
        />
        <div>
          <h4 className="font-semibold text-white mb-1">{review.name}</h4>
          <p className="text-sm text-white/70">{review.date}</p>
        </div>
      </div>
      <p className="italic text-white/80 mb-4 leading-relaxed">
        "{review.text}"
      </p>
      <p className="font-bold text-yellow-400">
        ⭐ {review.rating} / 5
      </p>
    </div>
  );
}

export default ReviewCard;
  