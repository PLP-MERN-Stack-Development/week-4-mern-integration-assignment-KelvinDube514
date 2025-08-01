import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostSubmissionForm from "./PostSubmissionForm";
import SplitText from '../components/SplitText';
import Particles from '../components/Particles';
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

// Additional user images
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

// New model images
import MayaBlakeImage from '../assets/Maya Blake.jpg';
import LiamCortezImage from '../assets/Liam Cortez.jpg';
import ZaraNdlovuImage from '../assets/Zara Ndlovu.jpg';
import SofiaLeclercImage from '../assets/Sofia Leclerc.jpg';
import NoahMokoenaImage from '../assets/Noah Mokoena.jpg';
import AvaMorelleImage from '../assets/Ava Morelle.jpg';
import MarcusChenImage from '../assets/Marcus Chen.jpg';
import MeiTakahashiImage from '../assets/Mei Takahashi.jpg';
import JadenColeImage from '../assets/Jaden Cole.jpg';
import AlexThompsonImage from '../assets/Alex Thompson.jpg';
import IsabellaRiveraImage from '../assets/Isabella Rivera.jpg';
import ZaraSantosImage from '../assets/Zara Santos.jpg';
import NinaRoseImage from '../assets/Nina Rose.jpg';
import LeoBanksImage from '../assets/Leo Banks.jpg';
import AvaMilanImage from '../assets/Ava Milan.jpg';

// Fashion content images
import LuxeEditImage from '../assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg';
import SpringRefreshImage from '../assets/Spring Refresh What to Wear This Bloom Season.jpg';
import LayerGameImage from '../assets/Layer Game Strong Winter Luxe Looks.jpg';
import CoolBreezyImage from '../assets/Cool & Breezy Best Linen Looks for Hot Days.jpg';
import ChicBudgetImage from '../assets/Chic on a Budget How to Look Designer for Less.jpg';
import BeachBabeImage from '../assets/Beach Babe Essentials What to Wear to the Shore.jpg';
import BarbiecoreImage from '../assets/Barbiecore is Back.jpg';
import GlamAthleisureImage from '../assets/Glam Athleisure 2.0.jpg';
import SwimwearSculpturalImage from '../assets/2025 Swimwear Goes Sculptural.jpg';
import BarbiecorePowerImage from '../assets/Barbiecore Pink Power.jpg';

// Video imports
import BreezyBeaVideo from '../assets/@Breezy_Bea.mp4';
import FoxyFionaVideo from '../assets/@Foxy_Fiona.mp4';
import GlamGigiVideo from '../assets/@Glam_Gigi.mp4';
import ZoeZealVideo from '../assets/@Zoe_Zeal.mp4';
import SparkleSashaVideo from '../assets/@Sparkle_Sasha.mp4';
import LunaBelleVideo from '../assets/@Luna_Belle.mp4';
import QuinnQueenVideo from '../assets/@Quinn_Queen.mp4';
import MiyabiKVideo from '../assets/@Miyabi_K.mp4';
import CarmenRioVideo from '../assets/@Carmen_Rio.mp4';
import SakuraOsakaVideo from '../assets/@Sakura_Osaka.mp4';
import VioletVixenVideo from '../assets/@Violet_Vixen.mp4';
import BrooklynMayVideo from '../assets/@Brooklyn_May.mp4';
import BannerVideo from '../assets/Banner.mp4';
import LuxeLaneOfficialVideo from '../assets/@LuxeLane_Official.mp4';
import AishaCairoVideo from '../assets/@Aisha_Cairo.mp4';

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
      media: LunaBelleVideo,
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
      media: BrooklynMayVideo,
      mediaType: "video",
      time: "10h ago",
    },
    {
      id: 17,
      user: "@Violet_Vixen",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: VioletVixenImage,
      caption: "Retro meets modern with LuxeLane pieces! This 60s-inspired look is everything 🕶️ #RetroRevival",
      media: VioletVixenVideo,
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
      media: QuinnQueenVideo,
      mediaType: "video",
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
      media: MiyabiKVideo,
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
      media: CarmenRioVideo,
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
      media: SakuraOsakaVideo,
      mediaType: "video",
      time: "15h ago",
    },
    {
      id: 26,
      user: "@Maya_Blake",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: MayaBlakeImage,
      caption: "Evening sophistication with LuxeLane's latest collection. Because every moment deserves to be extraordinary ✨ #EveningElegance #LuxeLaneStyle",
      media: MayaBlakeImage,
      mediaType: "image",
      time: "4h ago",
    },
    {
      id: 27,
      user: "@Liam_Cortez",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: LiamCortezImage,
      caption: "Street style meets luxury! How I incorporate LuxeLane pieces into my urban aesthetic 🌆 #StreetStyle #UrbanLuxe #LuxeLanePartner",
      media: LiamCortezImage,
      mediaType: "image",
      time: "6h ago",
    },
    {
      id: 28,
      user: "@Zara_Ndlovu",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: ZaraNdlovuImage,
      caption: "African elegance meets contemporary luxury! Celebrating heritage with modern LuxeLane pieces 🇿🇦✨ #AfricanElegance #HeritageStyle",
      media: ZaraNdlovuImage,
      mediaType: "image",
      time: "8h ago",
    },
    {
      id: 29,
      user: "@Sofia_Leclerc",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: SofiaLeclercImage,
      caption: "Parisian chic with a LuxeLane twist! French elegance never goes out of style 🇫🇷 #ParisianChic #FrenchElegance",
      media: SofiaLeclercImage,
      mediaType: "image",
      time: "10h ago",
    },
    {
      id: 30,
      user: "@Noah_Mokoena",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: NoahMokoenaImage,
      caption: "Minimalist luxury! How to style LuxeLane for the modern gentleman 🎩 #MinimalistLuxury #GentlemanStyle",
      media: NoahMokoenaImage,
      mediaType: "image",
      time: "12h ago",
    },
    {
      id: 31,
      user: "@Ava_Morelle",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: AvaMorelleImage,
      caption: "Coastal vibes with LuxeLane! Perfect blend of beachy and sophisticated 🌊 #CoastalChic #BeachVibes",
      media: AvaMorelleImage,
      mediaType: "image",
      time: "14h ago",
    },
    {
      id: 32,
      user: "@Marcus_Chen",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: MarcusChenImage,
      caption: "East meets West in this LuxeLane fusion look! Cultural elegance redefined 🌏 #CulturalFusion #EastMeetsWest",
      media: MarcusChenImage,
      mediaType: "image",
      time: "16h ago",
    },
    {
      id: 33,
      user: "@Mei_Takahashi",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: MeiTakahashiImage,
      caption: "Kawaii meets luxury! Japanese street fashion with LuxeLane sophistication 🎀✨ #KawaiiLuxury #JapaneseStyle",
      media: MeiTakahashiImage,
      mediaType: "image",
      time: "18h ago",
    },
    {
      id: 34,
      user: "@Jaden_Cole",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: JadenColeImage,
      caption: "Urban sophistication! How to elevate streetwear with LuxeLane pieces 🏙️ #UrbanSophistication #StreetwearLuxury",
      media: JadenColeImage,
      mediaType: "image",
      time: "20h ago",
    },
    {
      id: 35,
      user: "@Alex_Thompson",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: AlexThompsonImage,
      caption: "Classic meets contemporary! Timeless elegance with modern LuxeLane twists ⏰ #ClassicElegance #TimelessStyle",
      media: AlexThompsonImage,
      mediaType: "image",
      time: "22h ago",
    },
    {
      id: 36,
      user: "@Isabella_Rivera",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: IsabellaRiveraImage,
      caption: "Latina power with LuxeLane! Celebrating heritage through luxury fashion 💃 #LatinaPower #HeritageStyle",
      media: IsabellaRiveraImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 37,
      user: "@Zara_Santos",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: ZaraSantosImage,
      caption: "Bohemian luxury! Free spirit vibes with LuxeLane sophistication 🌿 #BohemianLuxury #FreeSpirit",
      media: ZaraSantosImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 38,
      user: "@Nina_Rose",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: NinaRoseImage,
      caption: "Romantic elegance! Soft glamour with LuxeLane's romantic collection 🌹 #RomanticElegance #SoftGlamour",
      media: NinaRoseImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 39,
      user: "@Leo_Banks",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: LeoBanksImage,
      caption: "Athletic luxury! How to style LuxeLane for the active lifestyle 💪 #AthleticLuxury #ActiveLifestyle",
      media: LeoBanksImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 40,
      user: "@Ava_Milan",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: AvaMilanImage,
      caption: "Italian sophistication! Milan fashion week vibes with LuxeLane pieces 🇮🇹 #ItalianSophistication #MilanStyle",
      media: AvaMilanImage,
      mediaType: "image",
      time: "1d ago",
    },
    {
      id: 41,
      user: "LuxeLane_Official",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: LuxeLaneModel,
      caption: "The Luxe Edit: Top 10 Must-Have Pieces This Season! ✨ Which one is your favorite? #LuxeEdit #MustHavePieces",
      media: LuxeEditImage,
      mediaType: "image",
      time: "2d ago",
    },
    {
      id: 42,
      user: "LuxeLane_Official",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: LuxeLaneModel,
      caption: "Spring Refresh: What to Wear This Bloom Season 🌸 Fresh looks for a fresh start! #SpringRefresh #BloomSeason",
      media: SpringRefreshImage,
      mediaType: "image",
      time: "2d ago",
    },
    {
      id: 43,
      user: "LuxeLane_Official",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: LuxeLaneModel,
      caption: "Layer Game Strong: Winter Luxe Looks ❄️ Master the art of layering with LuxeLane! #LayerGame #WinterLuxe",
      media: LayerGameImage,
      mediaType: "image",
      time: "3d ago",
    },
    {
      id: 44,
      user: "LuxeLane_Official",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: LuxeLaneModel,
      caption: "Cool & Breezy: Best Linen Looks for Hot Days 🌞 Stay cool and stylish! #CoolAndBreezy #LinenLooks",
      media: CoolBreezyImage,
      mediaType: "image",
      time: "3d ago",
    },
    {
      id: 45,
      user: "LuxeLane_Official",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: LuxeLaneModel,
      caption: "Chic on a Budget: How to Look Designer for Less 💰 Luxury doesn't have to break the bank! #ChicOnABudget #DesignerForLess",
      media: ChicBudgetImage,
      mediaType: "image",
      time: "4d ago",
    },
    {
      id: 46,
      user: "LuxeLane_Official",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: LuxeLaneModel,
      caption: "Beach Babe Essentials: What to Wear to the Shore 🏖️ Perfect beach looks with LuxeLane! #BeachBabe #ShoreStyle",
      media: BeachBabeImage,
      mediaType: "image",
      time: "4d ago",
    },
    {
      id: 47,
      user: "LuxeLane_Official",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: LuxeLaneModel,
      caption: "Barbiecore is Back! Pink power dominates summer with bold, unapologetic flair 💖 #Barbiecore #PinkPower",
      media: BarbiecorePowerImage,
      mediaType: "image",
      time: "5d ago",
    },
    {
      id: 48,
      user: "LuxeLane_Official",
      platform: "Pinterest",
      platformIcon: "/icons/pinterest.svg",
      avatar: LuxeLaneModel,
      caption: "Glam Athleisure 2.0: Elevate your workout style 💪 #GlamAthleisure #WorkoutStyle",
      media: GlamAthleisureImage,
      mediaType: "image",
      time: "5d ago",
    },
    {
      id: 49,
      user: "LuxeLane_Official",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: LuxeLaneModel,
      caption: "2025 Swimwear Goes Sculptural! The future of beach fashion is here 🏊‍♀️ #SculpturalSwimwear #BeachFashion2025",
      media: SwimwearSculpturalImage,
      mediaType: "image",
      time: "6d ago",
    },
    {
      id: 50,
      user: "LuxeLane_Official",
      platform: "TikTok",
      platformIcon: "/icons/tiktok.svg",
      avatar: LuxeLaneModel,
      caption: "Behind the scenes of our latest LuxeLane campaign! See the magic happen ✨ #BehindTheScenes #LuxeLaneCampaign",
      media: LuxeLaneOfficialVideo,
      mediaType: "video",
      time: "1d ago",
    },
    {
      id: 51,
      user: "@Aisha_Cairo",
      platform: "Instagram",
      platformIcon: "/icons/instagram.svg",
      avatar: AishaCairoImage,
      caption: "Ancient Egyptian glamour meets contemporary LuxeLane! Pyramids as my backdrop ✨🏺 #EgyptianElegance #CairoStyle",
      media: AishaCairoVideo,
      mediaType: "video",
      time: "2d ago",
    },
  ];

const SocialFeed = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [posts, setPosts] = useState(mockPosts);
  const [playingVideos, setPlayingVideos] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewPost = (newPost) => {
    setIsSubmitting(true);
    
    // Determine media type based on file extension
    const getMediaType = (url) => {
      if (!url) return 'image';
      const extension = url.split('.').pop().toLowerCase();
      return ['mp4', 'mov', 'avi', 'webm'].includes(extension) ? 'video' : 'image';
    };

    const postWithId = {
      ...newPost,
      id: Date.now(), // Simple ID generation
      time: "Just now",
      media: newPost.image || newPost.media, // Handle both field names
      mediaType: getMediaType(newPost.image || newPost.media),
      platformIcon: `/icons/${newPost.platform.toLowerCase()}.svg`,
      avatar: newPost.avatar || 'https://via.placeholder.com/40x40?text=' + (newPost.user ? newPost.user.charAt(0) : 'U')
    };
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      setPosts((prev) => [postWithId, ...prev]);
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 500);
  };

  const handleVideoPlay = (postId) => {
    setPlayingVideos(prev => new Set([...prev, postId]));
  };

  const handleVideoPause = (postId) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(postId);
      return newSet;
    });
  };

  const handleViewPost = (post) => {
    navigate(`/social/${post.id}`, { 
      state: { post } 
    });
  };

  const filteredPosts = selectedPlatform === 'all' 
    ? posts 
    : posts.filter(post => post.platform.toLowerCase() === selectedPlatform.toLowerCase());

  const platforms = ['all', 'instagram', 'tiktok', 'pinterest'];

  const renderMedia = (post) => {
    if (post.mediaType === 'video') {
      return (
        <video
          src={post.media}
          className="w-full h-80 object-cover"
          controls
          muted
          preload="metadata"
          onPlay={() => handleVideoPlay(post.id)}
          onPause={() => handleVideoPause(post.id)}
          onError={(e) => {
            console.error('Video failed to load:', post.media);
            e.target.style.display = 'none';
            // Show fallback image
            const fallback = e.target.parentElement.querySelector('.video-fallback');
            if (fallback) fallback.style.display = 'block';
          }}
          poster={post.avatar}
        >
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img
          src={post.media}
          alt={post.caption}
          className="w-full h-80 object-cover"
          onError={(e) => {
            console.error('Image failed to load:', post.media);
            e.target.src = 'https://via.placeholder.com/400x300?text=LuxeLane+Style';
          }}
        />
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
          particleCount={180}
          particleSpread={9}
          speed={0.11}
          particleBaseSize={55}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <SplitText
            text="Social Feed"
            className="text-4xl font-bold text-white mb-4 block"
            delay={60}
            duration={0.8}
            splitType="chars"
          />
          <SplitText
            text="Discover how our community styles LuxeLane pieces across social media platforms"
            className="text-lg text-white/80 max-w-2xl mx-auto block"
            delay={80}
            duration={0.8}
            splitType="words"
          />
        </div>

        {/* Post Submission Form */}
        <div className="mb-8">
          <PostSubmissionForm onPostSubmit={handleNewPost} />
          {isSubmitting && (
            <div className="text-center mt-4">
              <div className="inline-flex items-center text-white/80">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Posting to LuxeLane...
              </div>
            </div>
          )}
          {showSuccess && (
            <div className="text-center mt-4">
              <div className="inline-flex items-center text-green-400 bg-green-400/20 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Post successfully added to LuxeLane! ✨
              </div>
            </div>
          )}
        </div>

        {/* Platform Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedPlatform === platform
                    ? 'bg-white/20 text-white shadow-md border border-white/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/20"
            >
              {/* Post Media */}
              <div className="relative">
                {renderMedia(post)}
                {/* Video fallback */}
                {post.mediaType === 'video' && (
                  <div 
                    className="video-fallback w-full h-64 bg-gray-800 flex items-center justify-center hidden"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center text-white">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                      <p className="text-sm">Video unavailable</p>
                    </div>
                  </div>
                )}
                {/* Platform Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 shadow-md border border-white/30">
                  <img
                    src={post.platformIcon}
                    alt={post.platform}
                    className="w-5 h-5"
                    onError={(e) => {
                      // Fallback to platform initial if icon fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-5 h-5 text-white text-xs font-bold flex items-center justify-center hidden"
                    style={{ display: 'none' }}
                  >
                    {post.platform.charAt(0).toUpperCase()}
                  </div>
                </div>
                {/* Media Type Indicator */}
                {post.mediaType === 'video' && (
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-full p-2 shadow-md border border-white/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-10 h-10 rounded-full mr-3 border-2 border-white/30 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/40x40?text=' + post.user.charAt(0);
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-white">@{post.user}</h3>
                    <p className="text-sm text-white/70">{post.time}</p>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-white/80 mb-4 line-clamp-3">
                  {post.caption}
                </p>

                {/* Platform Tag */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-white/80 font-medium bg-white/20 px-3 py-1 rounded-full border border-white/30 self-start">
                    {post.platform}
                  </span>
                  <button 
                    onClick={() => handleViewPost(post)}
                    className="w-full text-center bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-white/80 hover:bg-white/20 hover:text-white text-sm font-medium transition-colors"
                  >
                    View Post →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No posts found
            </h3>
            <p className="text-white/70">
              Try selecting a different platform or check back later for new content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialFeed;
  