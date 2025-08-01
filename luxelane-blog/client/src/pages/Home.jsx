import React from "react";
import SplitText from "../components/SplitText";
import Particles from "../components/Particles";
import BannerVideo from "../assets/Banner.mp4";
import BarbiecoreImage from "../assets/Barbiecore is Back.jpg";
import SwimwearImage from "../assets/2025 Swimwear Goes Sculptural.jpg";
import AthleisureImage from "../assets/Glam Athleisure 2.0.jpg";
import LuxeEditImage from "../assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg";
import SpringRefreshImage from "../assets/Spring Refresh What to Wear This Bloom Season.jpg";
import LayerGameImage from "../assets/Layer Game Strong Winter Luxe Looks.jpg";
import LinenLooksImage from "../assets/Cool & Breezy Best Linen Looks for Hot Days.jpg";
import BudgetChicImage from "../assets/Chic on a Budget How to Look Designer for Less.jpg";
import BeachEssentialsImage from "../assets/Beach Babe Essentials What to Wear to the Shore.jpg";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const trendingPosts = [
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
    }
  ];

  return (
    <div className="min-h-screen font-sans text-white">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#f8f9fa', '#e9ecef']}
          particleCount={150}
          particleSpread={15}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      {/* Hero Section with Background Video */}
      <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] flex items-center justify-center text-center p-4 sm:p-6 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl shadow-glow p-6 sm:p-8 md:p-10 max-w-sm sm:max-w-lg md:max-w-2xl border border-white/20">
          <SplitText
            text="✨ Fashion. Social. Luxe."
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
            Discover the fashion moments that glow. Shop styles. Share stories.
          </p>
          <button className="w-full bg-white/10 border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-white/20 transition text-sm sm:text-base">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <SplitText
          text="🔥 Trending Now"
          className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6"
          delay={50}
          duration={0.5}
          ease="power2.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trendingPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-glow hover:shadow-lg transition border border-white/20"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-lg sm:rounded-xl mb-3 sm:mb-4 w-full h-40 sm:h-48 object-cover"
              />
              <div className="mb-2">
                <span className="text-xs sm:text-sm bg-pink-500/20 text-pink-200 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-serif mb-2">
                {post.emoji} {post.title}
              </h4>
              <p className="text-white/90 text-xs sm:text-sm font-medium mb-2">
                {post.subtitle}
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                {post.summary}
              </p>
              <div className="mt-3 text-xs text-white/60 italic">
                Visual: {post.visualStyle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 bg-white/10 backdrop-blur-sm rounded-t-[2rem] sm:rounded-t-[3rem] mt-12 sm:mt-16 md:mt-20 border-t border-white/20">
        <SplitText
          text="✨ Featured Collections"
          className="text-2xl sm:text-3xl font-serif text-white mb-4 sm:mb-6"
          delay={75}
          duration={0.7}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 35 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-75px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow border border-white/20">
            <SplitText
              text="Aurora Glam"
              className="text-xl sm:text-2xl font-serif mb-2"
              delay={30}
              duration={0.4}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-30px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">Chic, dreamy and runway-ready.</p>
            <button className="w-full bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-white/20 transition text-sm sm:text-base">
              View Collection
            </button>
          </div>
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow border border-white/20">
            <SplitText
              text="Minimal Muse"
              className="text-xl sm:text-2xl font-serif mb-2"
              delay={30}
              duration={0.4}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-30px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">Understated elegance with a luxe edge.</p>
            <button className="w-full bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-white/20 transition text-sm sm:text-base">
              View Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
