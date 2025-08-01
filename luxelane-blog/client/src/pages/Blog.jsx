import { useState, useMemo, useEffect, useCallback } from 'react';
import SplitText from '../components/SplitText';
import Particles from '../components/Particles';
import ErrorBoundary from '../components/ErrorBoundary';
import { EmptyState } from '../components/LoadingStates';
import { useDebounce } from '../hooks/useDebounce';

// Import all blog post images
import BarbiecoreImage from '../assets/Barbiecore is Back.jpg';
import SwimwearImage from '../assets/2025 Swimwear Goes Sculptural.jpg';
import AthleisureImage from '../assets/Glam Athleisure 2.0.jpg';
import LuxeEditImage from '../assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg';
import SpringRefreshImage from '../assets/Spring Refresh What to Wear This Bloom Season.jpg';
import LayerGameImage from '../assets/Layer Game Strong Winter Luxe Looks.jpg';
import LinenLooksImage from '../assets/Cool & Breezy Best Linen Looks for Hot Days.jpg';
import BudgetChicImage from '../assets/Chic on a Budget How to Look Designer for Less.jpg';
import BeachEssentialsImage from '../assets/Beach Babe Essentials What to Wear to the Shore.jpg';
import Y2KRevivalImage from '../assets/Y2K Revival.jpg';
import SustainableLuxuryImage from '../assets/Sustainable Luxury.jpg';
import EveningGlamourImage from '../assets/Evening Glamour.jpg';
import StreetStyleImage from '../assets/Street Style Stars.jpg';
import AccessoriesImage from '../assets/Accessories That Matter.jpg';
import ColorTheoryImage from '../assets/Color Theory in Fashion.jpg';
import WorkwearImage from '../assets/Workwear Revolution.jpg';
import FestivalFashionImage from '../assets/Festival Fashion.jpg';
import LuxeLaneBlogImage from '../assets/LuxeLane Blog.jpg';
import LuxeLaneBlog2Image from '../assets/LuxeLane Blog 2.jpg';
import LuxeLaneBannerImage from '../assets/LuxeLane Banner.jpg';
import LuxeLaneModelImage from '../assets/LuxeLane model.jpg';

// Comprehensive blog posts array
const BLOG_POSTS = [
  {
    id: 1,
    title: "Barbiecore is Back",
    subtitle: "Pink power dominates summer with bold, unapologetic flair.",
    category: "Trends",
    summary: "From bubblegum to fuchsia, pink is reclaiming its spotlight across runways and sidewalks. Dive into the top 5 Barbiecore-inspired outfits taking over TikTok and Instagram right now.",
    visualStyle: "Pink overlay, model in metallic pink co-ord, oversized sunglasses.",
    image: BarbiecoreImage,
    emoji: "🌊"
  },
  {
    id: 2,
    title: "2025 Swimwear Goes Sculptural",
    subtitle: "Swimwear becomes art — bold cuts, metallic fabrics, and body-sculpting silhouettes define this season.",
    category: "Swimwear · Summer 2025",
    summary: "From runway to resort, 2025's swimwear is daring and refined. Think asymmetrical straps, high-leg one-pieces, 3D textures, and chrome sheens. LuxeLane curates 7 head-turning looks perfect for both beach clubs and rooftop pools.",
    visualStyle: "Desert pool setting, glistening skin, sculpted swimwear with dramatic light shadows.",
    image: SwimwearImage,
    emoji: "👙"
  },
  {
    id: 3,
    title: "Glam Athleisure 2.0",
    subtitle: "When your gym outfit slays harder than your night-out fit.",
    category: "Fitness Fashion",
    summary: "No more dull leggings. With metallic finishes, asymmetrical crop tops, and luxury sneakers, fashion-forward gymwear is dominating influencers' feeds. Here are 6 outfits that'll have you sweating in style.",
    visualStyle: "City gym rooftop, gold-accented fit, Nike meets Fendi vibe.",
    image: AthleisureImage,
    emoji: "💄"
  },
  {
    id: 4,
    title: "The Luxe Edit",
    subtitle: "Top 10 must-have pieces that define luxury fashion this season.",
    category: "Luxury · Essentials",
    summary: "From statement coats to investment bags, these are the pieces every fashion-forward woman needs in her wardrobe. We've curated the ultimate luxury shopping list with pieces that will elevate your style for years to come.",
    visualStyle: "Minimalist studio setting, clean lines, premium fabrics, sophisticated lighting.",
    image: LuxeEditImage,
    emoji: "✨"
  },
  {
    id: 5,
    title: "Spring Refresh",
    subtitle: "What to wear this bloom season for maximum impact.",
    category: "Seasonal · Spring 2025",
    summary: "Spring is here and so are the fresh trends. From pastel power suits to floral maxi dresses, discover the 8 key pieces that will make your spring wardrobe bloom. Perfect for everything from brunch dates to garden parties.",
    visualStyle: "Cherry blossom background, soft natural lighting, fresh spring colors.",
    image: SpringRefreshImage,
    emoji: "🌸"
  },
  {
    id: 6,
    title: "Layer Game Strong",
    subtitle: "Winter luxe looks that combine warmth with undeniable style.",
    category: "Winter Fashion",
    summary: "Master the art of layering with these sophisticated winter ensembles. From cashmere sweaters to statement coats, learn how to create depth and dimension while staying cozy. These looks work from office to evening.",
    visualStyle: "Urban winter setting, textured fabrics, rich earth tones, dramatic shadows.",
    image: LayerGameImage,
    emoji: "🧥"
  },
  {
    id: 7,
    title: "Cool & Breezy",
    subtitle: "Best linen looks for those scorching hot days.",
    category: "Summer Style",
    summary: "When the temperature rises, linen becomes your best friend. Discover 5 effortless linen outfits that keep you cool while looking effortlessly chic. From flowy dresses to tailored separates, these looks are perfect for summer adventures.",
    visualStyle: "Coastal breeze setting, natural linen textures, soft golden hour lighting.",
    image: LinenLooksImage,
    emoji: "🌊"
  },
  {
    id: 8,
    title: "Chic on a Budget",
    subtitle: "How to look designer for less without compromising on style.",
    category: "Budget Fashion",
    summary: "Luxury doesn't have to break the bank. Learn the secrets of high-low dressing with these 6 outfit combinations that mix designer pieces with affordable finds. Style tips that will make you look like a million bucks.",
    visualStyle: "Modern apartment interior, mix of high and low pieces, sophisticated styling.",
    image: BudgetChicImage,
    emoji: "💎"
  },
  {
    id: 9,
    title: "Beach Babe Essentials",
    subtitle: "What to wear to the shore for maximum beachside glamour.",
    category: "Beach Fashion",
    summary: "From cover-ups to accessories, discover the essential pieces every beach babe needs. These 7 looks will have you looking Instagram-ready whether you're lounging by the pool or strolling the boardwalk.",
    visualStyle: "Tropical beach setting, golden sand, crystal clear water, sunset vibes.",
    image: BeachEssentialsImage,
    emoji: "🏖️"
  },
  {
    id: 10,
    title: "Y2K Revival",
    subtitle: "The 2000s aesthetic is back and better than ever.",
    category: "Retro Trends",
    summary: "Low-rise jeans, crop tops, and butterfly clips are making a major comeback. Discover how to rock the Y2K aesthetic with a modern twist. From Paris Hilton-inspired looks to Britney Spears vibes, we've got you covered.",
    visualStyle: "Pink and purple gradient backgrounds, metallic accessories, butterfly motifs.",
    image: Y2KRevivalImage,
    emoji: "🦋"
  },
  {
    id: 11,
    title: "Sustainable Luxury",
    subtitle: "Eco-friendly fashion that doesn't compromise on style.",
    category: "Sustainable Fashion",
    summary: "Luxury meets sustainability in this curated guide to ethical fashion. Discover brands that are leading the way in eco-conscious design while maintaining the highest standards of style and quality.",
    visualStyle: "Natural textures, earth tones, minimalist design, organic materials.",
    image: SustainableLuxuryImage,
    emoji: "🌱"
  },
  {
    id: 12,
    title: "Evening Glamour",
    subtitle: "Show-stopping looks for your next special occasion.",
    category: "Evening Wear",
    summary: "From cocktail parties to black-tie events, these evening looks will ensure you're the best-dressed person in the room. Think sequins, silk, and sophisticated silhouettes that command attention.",
    visualStyle: "Candlelit settings, shimmering fabrics, dramatic lighting, elegant poses.",
    image: EveningGlamourImage,
    emoji: "✨"
  },
  {
    id: 13,
    title: "Street Style Stars",
    subtitle: "How to master the art of street style photography.",
    category: "Street Fashion",
    summary: "Learn the secrets of street style from the fashion industry's most photographed influencers. From posing techniques to outfit coordination, become your own street style star.",
    visualStyle: "Urban backgrounds, candid moments, high-fashion streetwear, city vibes.",
    image: StreetStyleImage,
    emoji: "📸"
  },
  {
    id: 14,
    title: "Accessories That Matter",
    subtitle: "The finishing touches that complete every outfit.",
    category: "Accessories",
    summary: "From statement bags to delicate jewelry, accessories can make or break your look. Discover the must-have pieces that will elevate your style and add personality to any ensemble.",
    visualStyle: "Luxury accessories, clean backgrounds, detailed close-ups, premium materials.",
    image: AccessoriesImage,
    emoji: "💍"
  },
  {
    id: 15,
    title: "Color Theory in Fashion",
    subtitle: "How to use color psychology to enhance your style.",
    category: "Style Tips",
    summary: "Understanding color theory can transform your wardrobe and boost your confidence. Learn which colors complement your skin tone and how to create harmonious color combinations.",
    visualStyle: "Color wheels, fabric swatches, diverse skin tones, artistic compositions.",
    image: ColorTheoryImage,
    emoji: "🎨"
  },
  {
    id: 16,
    title: "Workwear Revolution",
    subtitle: "Professional attire that's both stylish and comfortable.",
    category: "Workwear",
    summary: "Gone are the days of boring office wear. Discover how to look professional while expressing your personal style. From power suits to creative casual, redefine workplace fashion.",
    visualStyle: "Modern office settings, confident poses, professional yet stylish outfits.",
    image: WorkwearImage,
    emoji: "💼"
  },
  {
    id: 17,
    title: "Festival Fashion",
    subtitle: "Coachella-inspired looks for your next music festival.",
    category: "Festival Style",
    summary: "Music festivals are the perfect opportunity to experiment with bold fashion choices. From bohemian vibes to futuristic aesthetics, create unforgettable festival looks.",
    visualStyle: "Desert landscapes, colorful outfits, festival energy, artistic makeup.",
    image: FestivalFashionImage,
    emoji: "🎵"
  },
  {
    id: 18,
    title: "LuxeLane Style Guide",
    subtitle: "The ultimate guide to mastering luxury fashion.",
    category: "Style Guide",
    summary: "Discover the secrets of luxury fashion with our comprehensive style guide. From investment pieces to styling tips, learn how to build a wardrobe that reflects your sophisticated taste.",
    visualStyle: "Elegant studio setting, premium fashion pieces, sophisticated styling.",
    image: LuxeLaneBlogImage,
    emoji: "👗"
  },
  {
    id: 19,
    title: "Fashion Photography Masterclass",
    subtitle: "How to capture stunning fashion moments.",
    category: "Photography",
    summary: "Learn the art of fashion photography from industry experts. From lighting techniques to posing tips, master the skills needed to create magazine-worthy fashion shots.",
    visualStyle: "Professional photography setup, fashion models, artistic compositions.",
    image: LuxeLaneBlog2Image,
    emoji: "📷"
  },
  {
    id: 20,
    title: "LuxeLane Collection Preview",
    subtitle: "Exclusive first look at our latest luxury collection.",
    category: "Collection",
    summary: "Get an exclusive preview of LuxeLane's latest luxury collection. From runway to retail, discover the pieces that will define luxury fashion this season.",
    visualStyle: "Runway setting, luxury fashion pieces, dramatic lighting.",
    image: LuxeLaneBannerImage,
    emoji: "🌟"
  },
  {
    id: 21,
    title: "Model Spotlight",
    subtitle: "Meet the faces behind LuxeLane's stunning campaigns.",
    category: "Models",
    summary: "Discover the talented models who bring our fashion campaigns to life. From their personal style to their favorite LuxeLane pieces, get to know the faces of luxury fashion.",
    visualStyle: "Studio portraits, professional lighting, elegant poses.",
    image: LuxeLaneModelImage,
    emoji: "👩‍🦰"
  }
];




function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('title-asc');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Debounce search term to prevent excessive filtering
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [isSearching, setIsSearching] = useState(false);

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const categorySet = new Set();
    BLOG_POSTS.forEach(post => {
      if (post.category) {
        categorySet.add(post.category);
      }
    });
    return Array.from(categorySet).map(category => ({ _id: category, name: category }));
  }, []);

  // Filter posts by category
  const filteredByCategory = useMemo(() => {
    if (activeCategory === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  // Filter by search term
  const filteredBySearch = useMemo(() => {
    if (!debouncedSearchTerm) return filteredByCategory;
    const term = debouncedSearchTerm.toLowerCase();
    setIsSearching(false);
    
    return filteredByCategory.filter(post => {
      return (
        post?.title?.toLowerCase().includes(term) ||
        post?.subtitle?.toLowerCase().includes(term) ||
        post?.summary?.toLowerCase().includes(term) ||
        post?.category?.toLowerCase().includes(term)
      );
    });
  }, [filteredByCategory, debouncedSearchTerm]);

  // Sort posts
  const sortedPosts = useMemo(() => {
    const postsCopy = [...filteredBySearch];
    switch (sortOption) {
      case 'title-asc':
        return postsCopy.sort((a, b) => (a?.title || '').localeCompare(b?.title || ''));
      case 'title-desc':
        return postsCopy.sort((a, b) => (b?.title || '').localeCompare(a?.title || ''));
      case 'category-asc':
        return postsCopy.sort((a, b) => (a?.category || '').localeCompare(b?.category || ''));
      case 'category-desc':
        return postsCopy.sort((a, b) => (b?.category || '').localeCompare(a?.category || ''));
      default:
        return postsCopy;
    }
  }, [filteredBySearch, sortOption]);

  // Handler for category change
  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setSearchTerm('');
  }, []);

  // Reset search when category changes
  useEffect(() => {
    setSearchTerm('');
  }, [activeCategory]);

  // Set searching state when search term changes
  useEffect(() => {
    if (searchTerm !== debouncedSearchTerm) {
      setIsSearching(true);
    }
  }, [searchTerm, debouncedSearchTerm]);

  return (
    <ErrorBoundary>
      <div className="max-w-7xl mx-auto">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#f39c12', '#9b59b6']}
          particleCount={80}
          particleSpread={15}
          speed={0.06}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <SplitText
        text="📰 LuxeLane Blog"
        className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 block"
        delay={50}
        duration={0.8}
        splitType="chars"
      />

      {/* Controls */}
      <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
        {/* Category Filter */}
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-200 text-xs sm:text-sm ${
              activeCategory === 'All' 
                ? 'bg-white/20 text-white border border-white/30' 
                : 'bg-white/10 text-white/80 hover:bg-white/15 border border-white/20'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category._id}
              onClick={() => handleCategoryChange(category._id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-200 text-xs sm:text-sm ${
                activeCategory === category._id 
                  ? 'bg-white/20 text-white border border-white/30' 
                  : 'bg-white/10 text-white/80 hover:bg-white/15 border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-white/60 backdrop-blur-md text-sm pr-10"
            />
            {isSearching && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className="px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-transparent text-white backdrop-blur-md text-sm"
          >
            <option value="title-asc">Title (A → Z)</option>
            <option value="title-desc">Title (Z → A)</option>
            <option value="category-asc">Category (A → Z)</option>
            <option value="category-desc">Category (Z → A)</option>
          </select>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {sortedPosts.length > 0 ? (
          sortedPosts.map(post => (
            <div key={post.id} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                  {post.emoji}
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-white/60 mb-2">{post.category}</div>
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-sm text-white/80 mb-3">{post.subtitle}</p>
                <p className="text-xs text-white/70 line-clamp-3">{post.summary}</p>
                <div className="mt-3 text-xs text-white/50">
                  Visual Style: {post.visualStyle}
                </div>
              </div>
            </div>
          ))
        ) : (
          <EmptyState 
            title="No posts found"
            message="No posts match your current search criteria. Try adjusting your filters or search terms."
            icon="🔍"
          />
        )}
      </div>
      </div>
    </ErrorBoundary>
  );
}

export default Blog;
