import ReviewCard from '../components/ReviewCard';
import SplitText from '../components/SplitText';
import Particles from '../components/Particles';

const reviews = [
  {
    id: 1,
    name: 'Sophia A.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    date: 'July 20, 2025',
    text: 'LuxeLane\'s blog is my go-to for fashion inspiration — always fresh and stylish!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus T.',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    date: 'July 18, 2025',
    text: 'I love how LuxeLane blends trends with affordable tips. Highly recommend!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Isabella R.',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    date: 'July 15, 2025',
    text: 'Great style guides and easy to follow. My wardrobe has never looked better.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ethan K.',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
    date: 'July 12, 2025',
    text: 'I appreciate the variety of content, from casual to special events. LuxeLane rocks!',
    rating: 4,
  },
  {
    id: 5,
    name: 'Maya L.',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    date: 'July 10, 2025',
    text: 'The aesthetic and quality of the blog is top-notch. Keeps me coming back.',
    rating: 5,
  },
];

function Reviews() {
  return (
    <div className="min-h-screen">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#feca57', '#ff6b6b', '#48dbfb']}
          particleCount={100}
          particleSpread={14}
          speed={0.07}
          particleBaseSize={75}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <section className="max-w-6xl mx-auto relative z-10">
      <SplitText
        text="What People Are Saying 🖤"
        className="text-3xl font-bold text-white text-center mb-8 block"
        delay={60}
        duration={0.8}
        splitType="chars"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      </section>
    </div>
  );
}

export default Reviews;
