import SuggestionCard from '../components/SuggestionCard';
import SplitText from '../components/SplitText';
import Particles from '../components/Particles';
import AvaMilan from '../assets/Ava Milan.jpg';
import LeoBanks from '../assets/Leo Banks.jpg';
import NinaRose from '../assets/Nina Rose.jpg';
import JadenCole from '../assets/Jaden Cole.jpg';
import MeiTakahashi from '../assets/Mei Takahashi.jpg';
import ZaraSantos from '../assets/Zara Santos.jpg';
import MarcusChen from '../assets/Marcus Chen.jpg';
import IsabellaRivera from '../assets/Isabella Rivera.jpg'; 
import AlexThompson from '../assets/Alex Thompson.jpg';
import GraceGlimpse from '../assets/@Grace_Glimpse.jpg';
import BreezyBea from '../assets/@Breezy_Bea.jpg';
import FoxyFiona from '../assets/@Foxy_Fiona.jpg';
import GlamGigi from '../assets/@Glam_Gigi.jpg';
import LilyLuxe from '../assets/@Lily_Luxe.jpg';
import ChloeChic from '../assets/@Chloe_Chic.jpg';

const suggestions = [
  {
    id: 1,
    name: 'Ava Milan',
    role: 'Fashion Model',
    country: 'Italy',
    city: 'Milan',
    image: AvaMilan,
    tip: 'Layer a trench over a crop set for that off-duty runway vibe.',
    hashtag: 'RunwayLook',
    reacts: 2347,
    comments: [
      'This is exactly what I needed! 🔥',
      'Ava always delivers the best tips',
      'Trying this tomorrow! ✨',
      'Runway vibes are everything! 💃',
      'This combo is perfection'
    ]
  },
  {
    id: 2,
    name: 'Leo Banks',
    role: 'Streetwear Creator',
    country: 'USA',
    city: 'Los Angeles',
    image: LeoBanks,
    tip: 'Monochrome layers and oversized sneakers always hit different.',
    hashtag: 'StreetStyle',
    reacts: 1892,
    comments: [
      'Leo knows streetwear like no one else',
      'This combo is fire 🔥',
      'Need those sneakers!',
      'Street style goals! 🚶‍♂️',
      'This is the look I\'ve been searching for'
    ]
  },
  {
    id: 3,
    name: 'Nina Rose',
    role: 'Content Creator',
    country: 'UK',
    city: 'London',
    image: NinaRose,
    tip: 'Add a satin scarf as a belt or top — so versatile!',
    hashtag: 'ChicHack',
    reacts: 2563,
    comments: [
      'Genius hack! 💡',
      'Nina always has the best styling tips',
      'This is so creative!',
      'Why didn\'t I think of this?! 🤯',
      'Nina is a styling genius'
    ]
  },
  {
    id: 4,
    name: 'Jaden Cole',
    role: 'Fitness + Style Blogger',
    country: 'Canada',
    city: 'Toronto',
    image: JadenCole,
    tip: 'Neutral gym sets with a cropped hoodie = comfort + cool.',
    hashtag: 'FitFashion',
    reacts: 1743,
    comments: [
      'Perfect gym-to-street look!',
      'Jaden is the athleisure king 👑',
      'This is my go-to outfit now',
      'Athleisure goals! 💪',
      'Comfort meets style perfectly'
    ]
  },
  {
    id: 5,
    name: 'Mei Takahashi',
    role: 'Minimalist Stylist',
    country: 'Japan',
    city: 'Tokyo',
    image: MeiTakahashi,
    tip: 'Less is luxe. Choose one bold accessory only.',
    hashtag: 'MinimalMood',
    reacts: 2128,
    comments: [
      'Minimalism goals! ✨',
      'Mei always gets it right',
      'This is so elegant',
      'Less is definitely more! 🎯',
      'Mei\'s minimalism is unmatched'
    ]
  },
  {
    id: 6,
    name: 'Zara Santos',
    role: 'Sustainable Fashion Advocate',
    country: 'Brazil',
    city: 'São Paulo',
    image: ZaraSantos,
    tip: 'Mix vintage pieces with modern basics for a unique, eco-friendly look.',
    hashtag: 'SustainableStyle',
    reacts: 1967,
    comments: [
      'Love the sustainable approach! 🌱',
      'Zara is inspiring me to shop vintage',
      'This is the future of fashion',
      'Sustainable fashion is the way! ♻️',
      'Zara is changing the game'
    ]
  },
  {
    id: 7,
    name: 'Marcus Chen',
    role: 'Luxury Streetwear Designer',
    country: 'Singapore',
    city: 'Singapore',
    image: MarcusChen,
    tip: 'Pair high-end sneakers with tailored pieces for that perfect balance.',
    hashtag: 'LuxuryStreet',
    reacts: 2342,
    comments: [
      'Marcus is a genius! 🔥',
      'This balance is everything',
      'Need to try this combo',
      'Luxury meets street perfectly! 💎',
      'Marcus always finds the perfect balance'
    ]
  },
  {
    id: 8,
    name: 'Isabella Rivera',
    role: 'Boho Chic Influencer',
    country: 'Spain',
    city: 'Barcelona',
    image: IsabellaRivera,
    tip: 'Layer flowy dresses with chunky jewelry and ankle boots for effortless boho vibes.',
    hashtag: 'BohoChic',
    reacts: 2089,
    comments: [
      'Boho queen! 👑',
      'This is my aesthetic',
      'Isabella always nails the boho look',
      'Boho vibes are everything! 🌸',
      'Isabella is the boho goddess'
    ]
  },
  {
    id: 9,
    name: 'Alex Thompson',
    role: 'Tech Fashion Enthusiast',
    country: 'USA',
    city: 'San Francisco',
    image: AlexThompson,    
    tip: 'Smart accessories like LED jewelry or tech-friendly bags add a futuristic edge to any outfit.',
    hashtag: 'TechStyle',
    reacts: 1756,
    comments: [
      'Future of fashion! 🤖',
      'Alex is ahead of the curve',
      'Tech meets style perfectly',
      'This is the future! 🚀',
      'Alex is living in 2030'
    ]
  },
  {
    id: 10,
    name: 'Grace Glimpse',
    role: 'Elegant Lifestyle Influencer',
    country: 'France',
    city: 'Paris',
    image: GraceGlimpse,
    tip: 'A silk scarf tied around your handbag adds instant sophistication to any outfit.',
    hashtag: 'ParisianChic',
    reacts: 1987,
    comments: [
      'Grace is the epitome of elegance! ✨',
      'This is such a classy touch',
      'Parisian vibes are everything! 🇫🇷',
      'Grace always knows how to elevate a look',
      'This is the perfect finishing touch'
    ]
  },
  {
    id: 11,
    name: 'Breezy Bea',
    role: 'Summer Style Specialist',
    country: 'Australia',
    city: 'Sydney',
    image: BreezyBea,
    tip: 'Pair a flowy maxi dress with chunky sandals and a straw hat for the perfect beach-to-bar look.',
    hashtag: 'SummerVibes',
    reacts: 2234,
    comments: [
      'Bea is the summer style queen! 👑',
      'This is my go-to summer outfit',
      'Beach to bar perfection! 🏖️',
      'Bea always captures summer perfectly',
      'This look is everything! ☀️'
    ]
  },
  {
    id: 12,
    name: 'Foxy Fiona',
    role: 'Bold Fashion Risk-Taker',
    country: 'Ireland',
    city: 'Dublin',
    image: FoxyFiona,
    tip: 'Mix animal prints with bright colors for a statement look that demands attention.',
    hashtag: 'BoldStyle',
    reacts: 1876,
    comments: [
      'Fiona is fearless with fashion! 🔥',
      'This is how you make a statement',
      'Bold and beautiful! 💃',
      'Fiona always pushes boundaries',
      'This look is absolutely stunning'
    ]
  },
  {
    id: 13,
    name: 'Glam Gigi',
    role: 'Evening Wear Expert',
    country: 'USA',
    city: 'New York',
    image: GlamGigi,
    tip: 'A sequin blazer over a simple black dress transforms day-to-night effortlessly.',
    hashtag: 'GlamEvening',
    reacts: 2156,
    comments: [
      'Gigi is the queen of glam! 💎',
      'This transformation is magic',
      'Day to night perfection! ✨',
      'Gigi always knows how to glam up',
      'This is the perfect evening look'
    ]
  },
  {
    id: 14,
    name: 'Lily Luxe',
    role: 'Luxury Fashion Blogger',
    country: 'UK',
    city: 'London',
    image: LilyLuxe,
    tip: 'Invest in one statement coat that you can wear over everything - it\'s worth every penny.',
    hashtag: 'LuxuryInvestment',
    reacts: 1943,
    comments: [
      'Lily knows luxury like no one else! 👑',
      'This is such smart advice',
      'Investment pieces are everything! 💰',
      'Lily always picks the best pieces',
      'This coat is absolutely stunning'
    ]
  },
  {
    id: 15,
    name: 'Chloe Chic',
    role: 'Classic Style Curator',
    country: 'Canada',
    city: 'Vancouver',
    image: ChloeChic,
    tip: 'A crisp white button-down with high-waisted jeans and loafers is the ultimate timeless combo.',
    hashtag: 'ClassicChic',
    reacts: 2087,
    comments: [
      'Chloe is the queen of classics! ✨',
      'This combo never goes out of style',
      'Timeless elegance! 🎯',
      'Chloe always gets the classics right',
      'This is the perfect everyday look'
    ]
  },
];

function StyleSuggestions() {
  return (
    <div className="min-h-screen">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#00d2d3', '#ff9ff3', '#54a0ff']}
          particleCount={150}
          particleSpread={11}
          speed={0.09}
          particleBaseSize={65}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <section className="max-w-6xl mx-auto relative z-10">
      <SplitText
        text="🖤 Style Picks by You"
        className="text-3xl font-bold text-white text-center mb-8 block"
        delay={60}
        duration={0.8}
        splitType="chars"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {suggestions.map((s) => (
          <SuggestionCard key={s.id} suggestion={s} />
        ))}
      </div>
      </section>
    </div>
  );
}

export default StyleSuggestions;
  