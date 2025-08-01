import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import Particles from '../components/Particles';

// Import all the images and videos for related posts
import LushLinaImage from '../assets/@Lush_Lina.jpg';
import SparkleSashaImage from '../assets/@Sparkle_Sasha.jpg';
import VibeVeraImage from '../assets/@Vibe_Vera.jpg';
import ChloeChicImage from '../assets/@Chloe_Chic.jpg';
import ZoeZealImage from '../assets/@Zoe_Zeal.jpg';
import LilyLuxeImage from '../assets/@Lily_Luxe.jpg';
import GraceGlimpseImage from '../assets/@Grace_Glimpse.jpg';
import FoxyFionaImage from '../assets/@Foxy_Fiona.jpg';
import PixiePatImage from '../assets/@Pixie_Pat.jpg';
import BreezyBeaImage from '../assets/@Breezy_Bea.jpg';
import GlamGigiImage from '../assets/@Glam_Gigi.jpg';
import LuxeLaneModel from '../assets/LuxeLane model.jpg';
import EvelynMayImage from '../assets/@Evelyn_May.jpg';
import LunaBelleImage from '../assets/@Luna_Belle.jpg';
import AddisonJaneImage from '../assets/@Addison_Jane.jpg';
import BrooklynMayImage from '../assets/@Brooklyn_May.jpg';
import VioletVixenImage from '../assets/@Violet_Vixen.jpg';
import QuinnQueenImage from '../assets/@Quinn_Queen.jpg';
import BellaBohoImage from '../assets/@Bella_Boho.jpg';
import MiyabiKImage from '../assets/@Miyabi_K.jpg';
import YukiTokyoImage from '../assets/@Yuki_Tokyo.jpg';
import CarmenRioImage from '../assets/@Carmen_Rio.jpg';
import IsabellaMadridImage from '../assets/@Isabella_Madrid.jpg';
import AishaCairoImage from '../assets/@Aisha_Cairo.jpg';
import SakuraOsakaImage from '../assets/@Sakura_Osaka.jpg';

// Video imports
import BreezyBeaVideo from '../assets/@Breezy_Bea.mp4';
import FoxyFionaVideo from '../assets/@Foxy_Fiona.mp4';
import GlamGigiVideo from '../assets/@Glam_Gigi.mp4';
import ZoeZealVideo from '../assets/@Zoe_Zeal.mp4';
import SparkleSashaVideo from '../assets/@Sparkle_Sasha.mp4';
import BannerVideo from '../assets/Banner.mp4';

// Mock posts data for related posts functionality
const mockPosts = [
    {
      id: 1,
      user: "Lush_Lina",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: LushLinaImage,
      caption: "Summer glow & oversized shades ☀️🖤 #LuxeLaneStyle",
      media: LushLinaImage,
      mediaType: "image",
      time: "2h ago",
    },
    {
      id: 2,
      user: "Sparkle_Sasha",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: SparkleSashaImage,
      caption: "New gym look drop 💪 #GymwearGlow #LuxeLanePartner",
      media: SparkleSashaVideo,
      mediaType: "video",
      time: "4h ago",
    },
    {
      id: 3,
      user: "Vibe_Vera",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: VibeVeraImage,
      caption: "Minimalist glam. My current LuxeLane faves 💫",
      media: VibeVeraImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 4,
      user: "Chloe_Chic",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: ChloeChicImage,
      caption: "Trench coats and late night walks through Soho. 🧥✨",
      media: ChloeChicImage,
      mediaType: "image",
      time: "3h ago",
    },
    {
      id: 5,
      user: "Zoe_Zeal",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: ZoeZealImage,
      caption: "Streetwear meets celestial vibes 🌌 LuxeLane glow up!",
      media: ZoeZealVideo,
      mediaType: "video",
      time: "6h ago",
    },
    {
      id: 6,
      user: "Lily_Luxe",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: LilyLuxeImage,
      caption: "Soft blush, silk slip, and glass heels 💗 #LuxeEdit",
      media: LilyLuxeImage,
      mediaType: "image",
      time: "12h ago",
    },
    {
      id: 7,
      user: "Grace_Glimpse",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: GraceGlimpseImage,
      caption: "Blazer. Boots. LuxeLane. Fall fit essentials. 🍂",
      media: GraceGlimpseImage,
      mediaType: "image",
      time: "9h ago",
    },
    {
      id: 8,
      user: "Foxy_Fiona",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: FoxyFionaImage,
      caption: "Glow edit on fleek ⚡️ Aurora transitions 🔥 #OOTD",
      media: FoxyFionaVideo,
      mediaType: "video",
      time: "22h ago",
    },
    {
      id: 9,
      user: "Pixie_Pat",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: PixiePatImage,
      caption: "Soft glam + natural lighting. LuxeLane-approved ☁️",
      media: PixiePatImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 10,
      user: "Breezy_Bea",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: BreezyBeaImage,
      caption: "Swimwear x sunset = 🔥 #BeachGlow",
      media: BreezyBeaVideo,
      mediaType: "video",
      time: "3d ago",
    },
    {
      id: 11,
      user: "Glam_Gigi",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: GlamGigiImage,
      caption: "Behind the scenes of our LuxeLane shoot 🎥💄",
      media: GlamGigiVideo,
      mediaType: "video",
      time: "4d ago",
    },
    {
      id: 12,
      user: "LuxeLane_Official",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: LuxeLaneModel,
      caption: "New collection dropping soon! Get ready for the ultimate style transformation ✨ #LuxeLaneNew",
      media: BannerVideo,
      mediaType: "video",
      time: "1d ago",
    },
    {
      id: 13,
      user: "@Evelyn_May",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: EvelynMayImage,
      caption: "Monochrome magic with LuxeLane essentials 🖤✨ #MinimalistChic #LuxeLaneStyle",
      media: EvelynMayImage,
      mediaType: "image",
      time: "5h ago",
    },
    {
      id: 14,
      user: "@Luna_Belle",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: LunaBelleImage,
      caption: "Transformation Tuesday! From casual to LuxeLane glam in 60 seconds 💫 #StyleTransformation",
      media: BannerVideo,
      mediaType: "video",
      time: "7h ago",
    },
    {
      id: 15,
      user: "@Addison_Jane",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: AddisonJaneImage,
      caption: "Coastal vibes meets urban edge. My perfect LuxeLane summer look 🌊 #CoastalChic",
      media: AddisonJaneImage,
      mediaType: "image",
      time: "8h ago",
    },
    {
      id: 16,
      user: "@Brooklyn_May",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: BrooklynMayImage,
      caption: "Evening elegance with LuxeLane's latest drop. Because every night deserves to be special ✨ #EveningGlam",
      media: BrooklynMayImage,
      mediaType: "image",
      time: "10h ago",
    },
    {
      id: 17,
      user: "@Violet_Vixen",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: VioletVixenImage,
      caption: "Retro meets modern with LuxeLane pieces! This 60s-inspired look is everything 🕶️ #RetroRevival",
      media: BannerVideo,
      mediaType: "video",
      time: "12h ago",
    },
    {
      id: 18,
      user: "@Quinn_Queen",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: QuinnQueenImage,
      caption: "From gym to brunch without missing a beat! LuxeLane athleisure is the ultimate lifestyle hack 💪 #AthleisureGoals",
      media: QuinnQueenImage,
      mediaType: "image",
      time: "15h ago",
    },
    {
      id: 19,
      user: "@Bella_Boho",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: BellaBohoImage,
      caption: "Free spirit vibes with LuxeLane's bohemian collection 🌿✨ #BohoChic #FreeSpirit",
      media: BellaBohoImage,
      mediaType: "image",
      time: "18h ago",
    },
    {
      id: 20,
      user: "@Miyabi_K",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: MiyabiKImage,
      caption: "Street style meets luxury! How I style LuxeLane for the urban jungle 🌆 #StreetStyle #UrbanLuxe",
      media: BannerVideo,
      mediaType: "video",
      time: "20h ago",
    },
    {
      id: 21,
      user: "@Yuki_Tokyo",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: YukiTokyoImage,
      caption: "Harajuku vibes with LuxeLane! Mixing kawaii culture with luxury fashion 🎀✨ #HarajukuStyle #TokyoFashion",
      media: YukiTokyoImage,
      mediaType: "image",
      time: "2h ago",
    },
    {
      id: 22,
      user: "@Carmen_Rio",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: CarmenRioImage,
      caption: "Carnaval energy meets LuxeLane elegance! Brazilian beauty standards redefined 🇧🇷💃 #CarnavalVibes #BrazilianStyle",
      media: BannerVideo,
      mediaType: "video",
      time: "5h ago",
    },
    {
      id: 23,
      user: "@Isabella_Madrid",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: IsabellaMadridImage,
      caption: "Flamenco passion meets modern luxury! Spanish elegance with LuxeLane pieces 🇪🇸🌹 #SpanishStyle #FlamencoChic",
      media: IsabellaMadridImage,
      mediaType: "image",
      time: "8h ago",
    },
    {
      id: 24,
      user: "@Aisha_Cairo",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: AishaCairoImage,
      caption: "Ancient Egyptian glamour meets contemporary LuxeLane! Pyramids as my backdrop ✨🏺 #EgyptianElegance #CairoStyle",
      media: AishaCairoImage,
      mediaType: "image",
      time: "12h ago",
    },
    {
      id: 25,
      user: "@Sakura_Osaka",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: SakuraOsakaImage,
      caption: "Cherry blossom season styling with LuxeLane! Japanese minimalism meets luxury fashion 🌸🇯🇵 #SakuraSeason #OsakaStyle",
      media: BannerVideo,
      mediaType: "video",
      time: "15h ago",
    },
  ];

const SocialPostDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Function to find related posts
  const findRelatedPosts = (currentPost) => {
    if (!currentPost) return [];
    
    const related = mockPosts
      .filter(p => p.id !== currentPost.id) // Exclude current post
      .map(p => {
        let score = 0;
        
        // Same user gets highest priority
        if (p.user === currentPost.user) {
          score += 100;
        }
        
        // Same platform gets medium priority
        if (p.platform === currentPost.platform) {
          score += 50;
        }
        
        // Same media type gets some priority
        if (p.mediaType === currentPost.mediaType) {
          score += 25;
        }
        
        // Check for similar hashtags/keywords
        const currentKeywords = currentPost.caption.toLowerCase().match(/#\w+/g) || [];
        const postKeywords = p.caption.toLowerCase().match(/#\w+/g) || [];
        const commonKeywords = currentKeywords.filter(keyword => postKeywords.includes(keyword));
        score += commonKeywords.length * 10;
        
        // Check for LuxeLane mentions
        if (p.caption.toLowerCase().includes('luxelane') && currentPost.caption.toLowerCase().includes('luxelane')) {
          score += 15;
        }
        
        return { ...p, score };
      })
      .filter(p => p.score > 0) // Only include posts with some relevance
      .sort((a, b) => b.score - a.score) // Sort by relevance score
      .slice(0, 6); // Get top 6 related posts
    
    return related;
  };

  useEffect(() => {
    // Get post data from navigation state or find by ID
    if (location.state?.post) {
      const currentPost = location.state.post;
      setPost(currentPost);
      setRelatedPosts(findRelatedPosts(currentPost));
      setLoading(false);
    } else {
      // If no state, try to find post by ID in mock data
      const foundPost = mockPosts.find(p => p.id === parseInt(id));
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(findRelatedPosts(foundPost));
      }
      setLoading(false);
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-4">📱 Post Not Found</h2>
          <p className="text-white/80 text-lg mb-6">The post you're looking for doesn't exist.</p>
          <Link 
            to="/social" 
            className="inline-block bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors duration-200"
          >
            ← Back to Social Feed
          </Link>
        </div>
      </div>
    );
  }

  const renderMedia = () => {
    if (post.mediaType === 'video') {
      return (
        <video
          src={post.media}
          className="w-full max-w-sm mx-auto aspect-[9/16] object-cover rounded-2xl"
          controls
          muted
          preload="metadata"
          poster={post.avatar}
          onError={(e) => {
            console.error('Video failed to load:', post.media);
            e.target.style.display = 'none';
            const fallback = e.target.parentElement.querySelector('.video-fallback');
            if (fallback) fallback.style.display = 'block';
          }}
        >
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img
          src={post.media}
          alt={post.caption}
          className="w-full max-w-sm mx-auto aspect-[9/16] object-cover rounded-2xl"
          onError={(e) => {
            console.error('Image failed to load:', post.media);
            e.target.src = 'https://via.placeholder.com/360x640?text=LuxeLane+Style';
          }}
        />
      );
    }
  };

  const renderRelatedPostMedia = (relatedPost) => {
    if (relatedPost.mediaType === 'video') {
      return (
        <video
          src={relatedPost.media}
          className="w-full aspect-[9/16] object-cover"
          muted
          preload="metadata"
          poster={relatedPost.avatar}
          onError={(e) => {
            console.error('Related video failed to load:', relatedPost.media);
            e.target.style.display = 'none';
            const fallback = e.target.parentElement.querySelector('.video-fallback');
            if (fallback) fallback.style.display = 'block';
          }}
        />
      );
    } else {
      return (
        <img
          src={relatedPost.media}
          alt={relatedPost.caption}
          className="w-full aspect-[9/16] object-cover"
          onError={(e) => {
            console.error('Related image failed to load:', relatedPost.media);
            e.target.src = 'https://via.placeholder.com/360x640?text=LuxeLane+Style';
          }}
        />
      );
    }
  };

  const handleRelatedPostClick = (relatedPost) => {
    navigate(`/social/${relatedPost.id}`, { 
      state: { post: relatedPost } 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3']}
          particleCount={120}
          particleSpread={13}
          speed={0.08}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <Link 
          to="/social" 
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Social Feed
        </Link>

        {/* Post Content */}
        <div className="max-w-2xl mx-auto">
          {/* Media Section */}
          <div className="mb-8 flex justify-center">
            {renderMedia()}
            {/* Video fallback */}
            {post.mediaType === 'video' && (
              <div 
                className="video-fallback w-full max-w-sm mx-auto aspect-[9/16] bg-gray-800 flex items-center justify-center rounded-2xl hidden"
                style={{ display: 'none' }}
              >
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <p className="text-lg">Video unavailable</p>
                </div>
              </div>
            )}
          </div>

          {/* Post Details */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            {/* User Info */}
            <div className="flex items-center mb-6">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-16 h-16 rounded-full mr-4 border-3 border-white/30 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/64x64?text=' + post.user.charAt(0);
                }}
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">@{post.user}</h2>
                <div className="flex items-center gap-4 text-white/70">
                  <span>{post.time}</span>
                  <div className="flex items-center gap-2">
                    <img
                      src={post.platformIcon}
                      alt={post.platform}
                      className="w-4 h-4"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <span 
                      className="text-xs font-bold hidden"
                      style={{ display: 'none' }}
                    >
                      {post.platform.charAt(0).toUpperCase()}
                    </span>
                    <span>{post.platform}</span>
                  </div>
                </div>
              </div>
              {/* Platform Badge */}
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                <span className="text-white font-medium text-sm">{post.platform}</span>
              </div>
            </div>

            {/* Caption */}
            <div className="mb-8">
              <p className="text-xl text-white/90 leading-relaxed whitespace-pre-wrap">
                {post.caption}
              </p>
            </div>

            {/* Engagement Stats (Mock) */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1.2K</div>
                <div className="text-sm text-white/70">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">89</div>
                <div className="text-sm text-white/70">Comments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">234</div>
                <div className="text-sm text-white/70">Shares</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-medium hover:bg-white/20 transition-colors duration-200">
                ❤️ Like
              </button>
              <button className="flex-1 bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-medium hover:bg-white/20 transition-colors duration-200">
                💬 Comment
              </button>
              <button className="flex-1 bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-medium hover:bg-white/20 transition-colors duration-200">
                📤 Share
              </button>
            </div>
          </div>

          {/* Related Posts Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              {relatedPosts.length > 0 ? `Related Posts` : `More from @${post.user}`}
            </h3>
            {relatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div 
                    key={relatedPost.id} 
                    className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-200 hover:scale-105"
                    onClick={() => handleRelatedPostClick(relatedPost)}
                  >
                    <div className="relative aspect-[9/16]">
                      {renderRelatedPostMedia(relatedPost)}
                      {/* Video fallback for related posts */}
                      {relatedPost.mediaType === 'video' && (
                        <div 
                          className="video-fallback w-full aspect-[9/16] bg-gray-800 flex items-center justify-center hidden"
                          style={{ display: 'none' }}
                        >
                          <div className="text-center text-white">
                            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                            <p className="text-xs">Video</p>
                          </div>
                        </div>
                      )}
                      {/* Platform Badge */}
                      <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded-full p-1 shadow-md border border-white/30">
                        <img
                          src={relatedPost.platformIcon}
                          alt={relatedPost.platform}
                          className="w-3 h-3"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-3 h-3 text-white text-xs font-bold flex items-center justify-center hidden"
                          style={{ display: 'none' }}
                        >
                          {relatedPost.platform.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      {/* Media Type Indicator */}
                      {relatedPost.mediaType === 'video' && (
                        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md rounded-full p-1 shadow-md border border-white/30">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      {/* User Info */}
                      <div className="flex items-center mb-2">
                        <img
                          src={relatedPost.avatar}
                          alt={relatedPost.user}
                          className="w-6 h-6 rounded-full mr-2 border border-white/30 object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/24x24?text=' + relatedPost.user.charAt(0);
                          }}
                        />
                        <span className="text-xs font-medium text-white">@{relatedPost.user}</span>
                      </div>
                      {/* Caption */}
                      <p className="text-white/70 text-sm line-clamp-2">
                        {relatedPost.caption}
                      </p>
                      {/* Time */}
                      <p className="text-white/50 text-xs mt-2">{relatedPost.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📱</div>
                <p className="text-white/70">No related posts found.</p>
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Comments</h3>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              {/* Comment Input */}
              <div className="flex gap-4 mb-6">
                <img
                  src="https://via.placeholder.com/40x40?text=U"
                  alt="User"
                  className="w-10 h-10 rounded-full border border-white/30"
                />
                <div className="flex-1">
                  <textarea
                    placeholder="Add a comment..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 resize-none"
                    rows="3"
                  />
                  <div className="flex justify-end mt-2">
                    <button className="bg-white/20 border border-white/30 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/30 transition-colors duration-200">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>

              {/* Mock Comments */}
              <div className="space-y-4">
                {[
                  { user: "StyleLover", comment: "This look is absolutely stunning! 🔥", time: "2h ago" },
                  { user: "Fashionista", comment: "Where can I get this outfit? 😍", time: "3h ago" },
                  { user: "TrendSetter", comment: "LuxeLane never disappoints! ✨", time: "4h ago" }
                ].map((comment, index) => (
                  <div key={index} className="flex gap-4">
                    <img
                      src={`https://via.placeholder.com/32x32?text=${comment.user.charAt(0)}`}
                      alt={comment.user}
                      className="w-8 h-8 rounded-full border border-white/30"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-white">@{comment.user}</span>
                        <span className="text-xs text-white/50">{comment.time}</span>
                      </div>
                      <p className="text-white/80 text-sm">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPostDetails; 