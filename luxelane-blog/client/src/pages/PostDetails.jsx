import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SplitText from '../components/SplitText';
import Particles from '../components/Particles';
import LuxeEditImage from '../assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg';
import ChicOnABudgetImage from '../assets/Chic on a Budget How to Look Designer for Less.jpg';
import SpringRefreshImage from '../assets/Spring Refresh What to Wear This Bloom Season.jpg';
import WinterLuxeLooksImage from '../assets/Layer Game Strong Winter Luxe Looks.jpg';
import BeachBabeEssentialsImage from '../assets/Beach Babe Essentials What to Wear to the Shore.jpg';
import CoolAndBreezyImage from '../assets/Cool & Breezy Best Linen Looks for Hot Days.jpg';
import BarbiecoreImage from '../assets/Barbiecore is Back.jpg';
import GlamAthleisureImage from '../assets/Glam Athleisure 2.0.jpg';
import SwimwearSculpturalImage from '../assets/2025 Swimwear Goes Sculptural.jpg';
import BarbiecorePinkImage from '../assets/Barbiecore Pink Power.jpg';
import GraceGlimpseImage from '../assets/@Grace_Glimpse.jpg';
import FoxyFionaImage from '../assets/@Foxy_Fiona.jpg';
import GlamGigiImage from '../assets/@Glam_Gigi.jpg';
import PixiePatImage from '../assets/@Pixie_Pat.jpg';
import LilyLuxeImage from '../assets/@Lily_Luxe.jpg';
import ZoeZealImage from '../assets/@Zoe_Zeal.jpg';
import ChloeChicImage from '../assets/@Chloe_Chic.jpg';
import VibeVeraImage from '../assets/@Vibe_Vera.jpg';
import SparkleSashaImage from '../assets/@Sparkle_Sasha.jpg';
import LushLinaImage from '../assets/@Lush_Lina.jpg';
import BreezyBeaImage from '../assets/@Breezy_Bea.jpg';

// Detailed post content data
const detailedPosts = {
  '1': {
    title: 'The Luxe Edit: Top 10 Must-Have Pieces This Season',
    category: 'Trends',
    excerpt: 'From trench coats to satin skirts – elevate your wardrobe effortlessly.',
    image: LuxeEditImage,
    author: 'Isabella Rivera',
    publishDate: 'March 15, 2024',
    readTime: '8 min read',
    content: {
      introduction: "As we transition into the new season, it's time to refresh our wardrobes with pieces that not only look expensive but feel luxurious. This curated edit features the top 10 must-have items that will elevate your style game and keep you ahead of the fashion curve.",
      sections: [
        {
          title: "1. The Perfect Trench Coat",
          content: "A timeless trench coat in a neutral hue is the ultimate investment piece. Look for one with a structured silhouette and quality fabric that will last for years. Style it over everything from jeans and a tee to your favorite dress for instant sophistication.",
          tips: ["Choose a length that flatters your height", "Opt for classic beige or navy", "Ensure it has a proper lining"]
        },
        {
          title: "2. Satin Midi Skirt",
          content: "The satin midi skirt has become a wardrobe staple for good reason. Its luxurious sheen and flattering length make it perfect for both day and evening wear. Pair it with a tucked-in blouse for work or a crop top for date night.",
          tips: ["Invest in a high-quality satin blend", "Choose a color that complements your skin tone", "Consider pleated styles for added texture"]
        },
        {
          title: "3. Statement Blazer",
          content: "A well-fitted blazer can transform any outfit from casual to polished. This season, oversized blazers with strong shoulders are making waves. Wear it with everything from bike shorts to tailored trousers.",
          tips: ["Look for structured shoulders", "Choose a versatile color", "Ensure it fits well across the shoulders"]
        },
        {
          title: "4. Leather Tote Bag",
          content: "A quality leather tote is worth every penny. It should be spacious enough for your daily essentials while maintaining its shape. Look for one with interior pockets and a comfortable shoulder strap.",
          tips: ["Choose full-grain leather for durability", "Consider the weight when empty", "Look for reinforced handles"]
        },
        {
          title: "5. Silk Blouse",
          content: "A silk blouse is the epitome of luxury. Its natural sheen and soft drape make it perfect for both professional and social settings. Invest in classic colors like white, black, and navy for maximum versatility.",
          tips: ["Hand wash or dry clean only", "Store on padded hangers", "Choose a style that flatters your body type"]
        },
        {
          title: "6. High-Waisted Trousers",
          content: "High-waisted trousers are universally flattering and incredibly versatile. They can be dressed up with heels and a blouse or down with sneakers and a tee. Look for a pair with a comfortable stretch and proper tailoring.",
          tips: ["Ensure the waistband sits at your natural waist", "Choose a length that works with your shoes", "Look for a slight stretch for comfort"]
        },
        {
          title: "7. Cashmere Sweater",
          content: "A cashmere sweater is the ultimate luxury basic. Its softness and warmth make it perfect for layering or wearing alone. Invest in neutral colors that will work with your entire wardrobe.",
          tips: ["Store folded to prevent stretching", "Hand wash with gentle detergent", "Choose a weight appropriate for your climate"]
        },
        {
          title: "8. Ankle Boots",
          content: "A pair of quality ankle boots can carry you through multiple seasons. Look for a classic style with a comfortable heel height. Leather or suede options in neutral colors offer the most versatility.",
          tips: ["Choose a heel height you can walk in", "Look for a cushioned insole", "Consider weather-appropriate materials"]
        },
        {
          title: "9. Silk Scarf",
          content: "A silk scarf is the perfect finishing touch to any outfit. It can be worn around the neck, tied to a bag, or used as a headband. Choose a pattern that complements your wardrobe's color palette.",
          tips: ["Learn different tying techniques", "Choose a size that works for multiple uses", "Store flat to prevent wrinkles"]
        },
        {
          title: "10. Statement Jewelry",
          content: "Invest in a few pieces of quality jewelry that can elevate any outfit. Look for timeless designs in precious metals that won't tarnish. A delicate necklace, classic earrings, and a statement ring are good starting points.",
          tips: ["Choose pieces that reflect your personal style", "Consider your lifestyle when selecting metals", "Store properly to prevent damage"]
        }
      ],
      conclusion: "Building a luxury wardrobe doesn't happen overnight, but by investing in these 10 key pieces, you'll have a solid foundation that will serve you well for years to come. Remember, true luxury is about quality over quantity, so take your time selecting each piece and ensure it truly speaks to your personal style."
    }
  },
  '2': {
    title: 'Chic on a Budget: How to Look Designer for Less',
    category: 'Style Guides',
    excerpt: 'Style secrets, high-street steals & affordable glam picks.',
    image: ChicOnABudgetImage,
    author: 'Maya Blake',
    publishDate: 'March 12, 2024',
    readTime: '10 min read',
    content: {
      introduction: "Looking expensive doesn't have to cost a fortune. With the right strategies and a keen eye for quality, you can create a designer-worthy wardrobe on a budget. Here's your complete guide to achieving luxury style without the luxury price tag.",
      sections: [
        {
          title: "The Art of Thrift Shopping",
          content: "Thrift stores and consignment shops are treasure troves for designer finds. Learn to spot quality fabrics, check for proper construction, and don't be afraid to try on pieces that might need minor alterations.",
          tips: ["Visit stores in affluent neighborhoods", "Check for designer labels and quality tags", "Learn to spot quality fabrics by feel"]
        },
        {
          title: "High-Street Designer Collaborations",
          content: "Many luxury brands collaborate with high-street retailers, offering designer pieces at accessible prices. Keep an eye out for these limited-edition collections and be ready to shop when they launch.",
          tips: ["Follow brands on social media for launch dates", "Set up notifications for restocks", "Shop early for the best selection"]
        },
        {
          title: "Investment vs. Trend Pieces",
          content: "Learn to distinguish between investment pieces that will last for years and trendy items that might only last a season. Spend more on classic, versatile pieces and less on fast-fashion trends.",
          tips: ["Ask yourself if you'll wear it in 5 years", "Consider cost per wear", "Focus on quality over quantity"]
        },
        {
          title: "Accessorizing on a Budget",
          content: "Accessories can make or break an outfit, and you don't need to spend a fortune to look polished. Focus on quality basics like a good watch, classic jewelry, and versatile bags.",
          tips: ["Invest in one quality watch", "Choose jewelry in precious metals", "Look for bags with good construction"]
        },
        {
          title: "Shoe Strategy",
          content: "Shoes are often the first thing people notice, so it's worth investing in quality pairs. Look for classic styles in neutral colors that can be worn with multiple outfits.",
          tips: ["Choose comfortable styles you'll actually wear", "Invest in good shoe care products", "Consider resoling quality shoes"]
        }
      ],
      conclusion: "Remember, true style isn't about how much you spend, but how you put pieces together. With these strategies, you can create a wardrobe that looks expensive and feels luxurious, regardless of your budget."
    }
  },
  '3': {
    title: 'Spring Refresh: What to Wear This Bloom Season',
    category: 'Collections',
    excerpt: 'Light layers, pastel hues, and effortless charm.',
    image: SpringRefreshImage,
    author: 'Sofia Leclerc',
    publishDate: 'March 10, 2024',
    readTime: '7 min read',
    content: {
      introduction: "Spring is the season of renewal, and your wardrobe should reflect that fresh energy. From soft pastels to light layers, here's how to embrace the season's most beautiful trends while maintaining your personal style.",
      sections: [
        {
          title: "Pastel Power",
          content: "This spring, pastels are taking center stage in a big way. Think soft lavender, mint green, and baby blue. These colors are perfect for creating romantic, feminine looks that feel fresh and modern.",
          tips: ["Mix pastels with neutrals for balance", "Choose pastels that complement your skin tone", "Layer different pastel shades for depth"]
        },
        {
          title: "Light as Air Layers",
          content: "Spring weather can be unpredictable, making layering essential. Light cardigans, denim jackets, and oversized blazers are perfect for creating versatile looks that can adapt to changing temperatures.",
          tips: ["Choose breathable fabrics like cotton and linen", "Layer from thinnest to thickest", "Use layers to add color and texture"]
        },
        {
          title: "Floral Fantasy",
          content: "Floral prints are a spring staple, but this season they're getting a modern update. Look for abstract florals, oversized blooms, and unexpected color combinations that feel fresh and contemporary.",
          tips: ["Choose floral prints that suit your style", "Mix florals with solids for balance", "Consider the scale of the print"]
        },
        {
          title: "Effortless Dresses",
          content: "Spring is the perfect time to embrace dress season. Look for styles that are comfortable, flattering, and easy to wear. Midi dresses, shirt dresses, and wrap dresses are all excellent choices.",
          tips: ["Choose dresses that work for your lifestyle", "Look for comfortable fabrics", "Consider the dress's versatility"]
        }
      ],
      conclusion: "Spring fashion is all about embracing the season's natural beauty and energy. By incorporating these trends thoughtfully, you can create looks that feel fresh, modern, and perfectly suited to the season."
    }
  },
  '4': {
    title: 'Layer Game Strong: Winter Luxe Looks',
    category: 'Trends',
    excerpt: 'Stay warm and stylish with coats, knits, and boots.',
    image: WinterLuxeLooksImage,
    author: 'Leo Banks',
    publishDate: 'March 8, 2024',
    readTime: '9 min read',
    content: {
      introduction: "Winter fashion is all about mastering the art of layering while maintaining your style edge. From cozy knits to statement coats, discover how to create luxurious winter looks that keep you warm and looking fabulous.",
      sections: [
        {
          title: "The Foundation Layer",
          content: "Start with a quality base layer that wicks moisture and provides warmth. Silk or merino wool camisoles and long-sleeve tees are perfect for this. They'll keep you comfortable while adding a touch of luxury.",
          tips: ["Choose natural fibers for breathability", "Invest in multiple colors for versatility", "Look for seamless construction"]
        },
        {
          title: "Cozy Knitwear",
          content: "A chunky knit sweater is the heart of any winter outfit. Look for styles with interesting textures like cable knits, ribbed patterns, or oversized silhouettes. Cashmere and wool blends offer the best warmth and softness.",
          tips: ["Choose a weight appropriate for your climate", "Look for styles that work with your body type", "Invest in neutral colors for maximum wear"]
        },
        {
          title: "Statement Coats",
          content: "Your winter coat is your biggest style statement. Whether it's a classic wool coat, a trendy puffer, or a luxurious faux fur, choose something that reflects your personal style and provides adequate warmth.",
          tips: ["Consider your lifestyle when choosing length", "Look for quality construction and materials", "Choose a color that works with your wardrobe"]
        },
        {
          title: "Accessorize for Warmth",
          content: "Don't forget the finishing touches that keep you warm and stylish. Scarves, gloves, and hats should be both functional and fashionable. Look for coordinating sets or mix and match for a more eclectic look.",
          tips: ["Choose accessories in coordinating colors", "Invest in quality materials that last", "Consider your hairstyle when choosing hats"]
        }
      ],
      conclusion: "Winter layering is an art form that combines function with fashion. By building your outfit from the inside out with quality pieces, you'll stay warm and look effortlessly chic all season long."
    }
  },
  '5': {
    title: 'Beach Babe Essentials: What to Wear to the Shore',
    category: 'Summer Outfits',
    excerpt: 'Flowy coverups, strappy sandals, and statement sunglasses.',
    image: BeachBabeEssentialsImage,
    author: 'Ava Morelle',
    publishDate: 'March 5, 2024',
    readTime: '6 min read',
    content: {
      introduction: "Beach season is here, and it's time to perfect your shore-side style. From the perfect swimsuit to the most Instagram-worthy coverup, here's your complete guide to looking fabulous at the beach.",
      sections: [
        {
          title: "The Perfect Swimsuit",
          content: "Choose a swimsuit that makes you feel confident and comfortable. Whether you prefer a one-piece, bikini, or tankini, look for styles that flatter your body type and reflect your personal style.",
          tips: ["Try on multiple styles to find your perfect fit", "Consider your activities when choosing", "Look for quick-dry, UV-protective fabrics"]
        },
        {
          title: "Coverup Chic",
          content: "A stylish coverup is essential for transitioning from beach to boardwalk. Look for flowy maxi dresses, crochet tunics, or sarong-style wraps that are easy to throw on and look effortlessly chic.",
          tips: ["Choose lightweight, breathable fabrics", "Look for styles that work with your swimsuit", "Consider the length for your comfort level"]
        },
        {
          title: "Beach Accessories",
          content: "Complete your beach look with the right accessories. A wide-brimmed hat, oversized sunglasses, and a spacious beach bag are must-haves. Don't forget comfortable sandals that can handle sand and water.",
          tips: ["Invest in quality sunglasses with UV protection", "Choose a beach bag that's both stylish and practical", "Look for sandals with good traction"]
        }
      ],
      conclusion: "Beach style is all about feeling confident and comfortable while looking effortlessly beautiful. With these essentials, you'll be ready for any beach adventure."
    }
  },
  '6': {
    title: 'Cool & Breezy: Best Linen Looks for Hot Days',
    category: 'Summer Outfits',
    excerpt: 'Linen pants, crop tops, and woven accessories steal the heat.',
    image: CoolAndBreezyImage,
    author: 'Jaden Cole',
    publishDate: 'March 3, 2024',
    readTime: '5 min read',
    content: {
      introduction: "When temperatures rise, linen becomes your best friend. This natural fabric is breathable, lightweight, and effortlessly stylish. Discover how to incorporate linen into your summer wardrobe for maximum comfort and style.",
      sections: [
        {
          title: "Linen Basics",
          content: "Start with linen basics like tees, tanks, and shorts. These pieces are perfect for layering or wearing alone. Look for relaxed fits that allow for airflow and movement.",
          tips: ["Embrace the natural wrinkles of linen", "Choose light colors to reflect heat", "Look for linen blends for easier care"]
        },
        {
          title: "Linen Dresses",
          content: "A linen dress is the ultimate summer staple. From casual shifts to more structured styles, linen dresses are perfect for everything from beach days to summer parties.",
          tips: ["Choose styles that work for your body type", "Look for dresses with pockets for practicality", "Consider the length for your comfort level"]
        },
        {
          title: "Linen Separates",
          content: "Mix and match linen pieces for endless outfit possibilities. Linen pants with a silk blouse, a linen blazer over a dress, or linen shorts with a crop top are all winning combinations.",
          tips: ["Invest in coordinating pieces", "Mix linen with other natural fabrics", "Choose versatile colors for maximum wear"]
        }
      ],
      conclusion: "Linen is the perfect fabric for hot summer days, offering both comfort and style. By building a linen capsule wardrobe, you'll stay cool and look effortlessly chic all season long."
    }
  },
  '7': {
    title: 'Barbiecore is Back: Pink Power Dominates Summer',
    category: 'Trends',
    excerpt: 'Bold, unapologetic pink flair takes over this season with statement pieces.',
    image: BarbiecorePinkImage,
    author: 'Nina Rose',
    publishDate: 'March 1, 2024',
    readTime: '6 min read',
    content: {
      introduction: "Pink is having a major moment this summer, and we're here for it! From soft pastels to vibrant hot pinks, the Barbiecore trend is back with a vengeance. Discover how to incorporate this playful color into your wardrobe with confidence and style.",
      sections: [
        {
          title: "Shades of Pink",
          content: "Not all pinks are created equal. From blush to fuchsia, each shade has its own personality. Choose the right pink for your skin tone and personal style to make the biggest impact.",
          tips: ["Cool undertones look great in blue-based pinks", "Warm undertones shine in coral and peachy pinks", "Neutral undertones can wear any shade"]
        },
        {
          title: "Pink Power Pieces",
          content: "Make a statement with bold pink pieces that demand attention. A hot pink blazer, vibrant dress, or eye-catching accessories can transform any outfit from ordinary to extraordinary.",
          tips: ["Start with one statement piece", "Balance bold pinks with neutrals", "Consider the occasion when choosing intensity"]
        },
        {
          title: "Pink Accessories",
          content: "Ease into the trend with pink accessories. Bags, shoes, jewelry, and even phone cases can add a touch of pink without overwhelming your look.",
          tips: ["Choose accessories that complement your wardrobe", "Mix different shades of pink for depth", "Use pink accessories to add personality to neutral outfits"]
        }
      ],
      conclusion: "Pink is more than just a color—it's a mood, an attitude, and a statement. Embrace the Barbiecore trend with confidence and let your pink power shine!"
    }
  },
  '8': {
    title: 'Glam Athleisure 2.0: Elevate Your Workout Style',
    category: 'Gym & Fitness',
    excerpt: 'From studio to street – athleisure gets a luxury makeover.',
    image: GlamAthleisureImage,
    author: 'Marcus Chen',
    publishDate: 'February 28, 2024',
    readTime: '7 min read',
    content: {
      introduction: "Athleisure has evolved beyond basic workout wear. Today's activewear combines performance technology with luxury aesthetics, creating pieces that work as hard as you do while looking effortlessly chic.",
      sections: [
        {
          title: "Performance Meets Style",
          content: "Modern athleisure pieces are designed to perform during your workout and look polished enough for post-gym activities. Look for moisture-wicking fabrics, four-way stretch, and thoughtful design details.",
          tips: ["Choose fabrics that work for your activity level", "Look for pieces with built-in support", "Consider the versatility of each piece"]
        },
        {
          title: "Luxury Details",
          content: "Elevate your athleisure game with luxury details like mesh panels, contrast stitching, and premium fabrics. These small touches make a big difference in how your activewear looks and feels.",
          tips: ["Invest in quality over quantity", "Look for thoughtful design elements", "Choose pieces that make you feel confident"]
        },
        {
          title: "From Gym to Street",
          content: "The best athleisure pieces transition seamlessly from workout to everyday wear. Pair your favorite leggings with an oversized blazer, or style a sports bra with high-waisted jeans for a trendy look.",
          tips: ["Choose versatile pieces that work for multiple occasions", "Layer strategically for different looks", "Don't be afraid to mix athleisure with regular clothing"]
        }
      ],
      conclusion: "Glam athleisure is about feeling confident and comfortable while looking your best. With the right pieces, you can conquer your workout and your day with style."
    }
  },
  '9': {
    title: '2025 Swimwear Goes Sculptural: The New Beach Body',
    category: 'Swimwear',
    excerpt: 'Architectural cuts and innovative fabrics redefine beach fashion.',
    image: SwimwearSculpturalImage,
    author: 'Mei Takahashi',
    publishDate: 'February 25, 2024',
    readTime: '8 min read',
    content: {
      introduction: "Swimwear is getting a major upgrade in 2025, with architectural cuts, innovative fabrics, and sculptural designs that celebrate every body type. Discover the latest trends that are redefining beach fashion.",
      sections: [
        {
          title: "Architectural Cuts",
          content: "Geometric lines, asymmetric designs, and structured silhouettes are taking over swimwear. These architectural cuts create flattering shapes and add visual interest to classic swim styles.",
          tips: ["Choose cuts that highlight your best features", "Look for designs that provide good support", "Consider the complexity of the design"]
        },
        {
          title: "Innovative Fabrics",
          content: "New fabric technologies are revolutionizing swimwear. From quick-dry materials to UV protection and shape-retention properties, modern swimwear fabrics offer both style and function.",
          tips: ["Look for fabrics with UV protection", "Choose quick-dry materials for convenience", "Consider the care requirements"]
        },
        {
          title: "Sculptural Details",
          content: "Ruffles, cutouts, and textured fabrics add sculptural interest to swimwear. These details create movement and dimension while maintaining comfort and functionality.",
          tips: ["Choose details that complement your body type", "Consider the maintenance of textured fabrics", "Look for details that add personality"]
        }
      ],
      conclusion: "2025 swimwear is all about celebrating individuality and confidence. With these sculptural designs, every body is a beach body."
    }
  },
  '10': {
    title: 'Grace Glimpse: Effortless Elegance for Every Occasion',
    category: 'Style Guides',
    excerpt: 'Master the art of understated luxury with timeless pieces.',
    image: GraceGlimpseImage,
    author: 'Grace Glimpse',
    publishDate: 'February 22, 2024',
    readTime: '9 min read',
    content: {
      introduction: "True elegance is effortless and timeless. It's about choosing pieces that speak to your soul and wearing them with confidence. Discover how to cultivate a wardrobe that reflects your inner grace and sophistication.",
      sections: [
        {
          title: "The Art of Simplicity",
          content: "Simplicity is the ultimate sophistication. Choose clean lines, quality fabrics, and timeless silhouettes that will never go out of style. Less is truly more when it comes to elegant dressing.",
          tips: ["Invest in quality basics", "Choose pieces that work together", "Focus on fit over trends"]
        },
        {
          title: "Timeless Pieces",
          content: "Build your wardrobe around timeless pieces that will serve you for years to come. A well-cut blazer, quality jeans, and a classic dress are the foundation of an elegant wardrobe.",
          tips: ["Choose neutral colors for maximum versatility", "Look for classic silhouettes", "Invest in quality over quantity"]
        },
        {
          title: "Effortless Styling",
          content: "The most elegant looks appear effortless. Learn to style your pieces with confidence and let your personality shine through. Remember, true elegance comes from within.",
          tips: ["Practice styling your pieces in different ways", "Choose accessories that enhance your look", "Wear what makes you feel confident"]
        }
      ],
      conclusion: "Elegance is not about following trends—it's about knowing yourself and expressing your unique style with confidence and grace."
    }
  },
  '11': {
    title: 'Foxy Fiona: Bold Prints and Statement Accessories',
    category: 'Trends',
    excerpt: 'Animal prints, vibrant colors, and daring accessories make a statement.',
    image: FoxyFionaImage,
    author: 'Foxy Fiona',
    publishDate: 'February 20, 2024',
    readTime: '7 min read',
    content: {
      introduction: "Bold prints and statement accessories are the perfect way to express your wild side while maintaining sophistication. From animal prints to geometric patterns, discover how to make a statement with confidence and style.",
      sections: [
        {
          title: "Animal Print Mastery",
          content: "Animal prints are timeless and versatile. From leopard to zebra, these prints add instant drama to any outfit. The key is to wear them with confidence and balance them with solid pieces.",
          tips: ["Start with accessories if you're new to animal prints", "Mix different animal prints for a bold look", "Keep the rest of your outfit simple"]
        },
        {
          title: "Statement Accessories",
          content: "Accessories are the perfect way to add personality to your look. Bold jewelry, colorful bags, and eye-catching shoes can transform even the simplest outfit into a statement-making ensemble.",
          tips: ["Choose accessories that reflect your personality", "Don't be afraid to mix metals and textures", "Consider the scale of your accessories"]
        },
        {
          title: "Color Confidence",
          content: "Vibrant colors are a powerful way to express yourself. From electric blue to hot pink, bold colors demand attention and show confidence. Learn to wear them with pride.",
          tips: ["Choose colors that make you feel confident", "Balance bold colors with neutrals", "Consider your skin tone when choosing colors"]
        }
      ],
      conclusion: "Bold prints and statement accessories are about expressing your unique personality. Wear them with confidence and let your wild side shine!"
    }
  },
  '12': {
    title: 'Glam Gigi: Red Carpet Ready for Special Events',
    category: 'Special Events',
    excerpt: 'From cocktail parties to galas – dress to impress with confidence.',
    image: GlamGigiImage,
    author: 'Glam Gigi',
    publishDate: 'February 18, 2024',
    readTime: '8 min read',
    content: {
      introduction: "Special events call for special outfits. Whether you're attending a cocktail party, gala, or wedding, looking red carpet ready is all about choosing the right pieces and wearing them with confidence.",
      sections: [
        {
          title: "Cocktail Party Chic",
          content: "Cocktail parties require a balance of sophistication and personality. Choose a dress that's appropriate for the venue and occasion while still reflecting your personal style.",
          tips: ["Consider the venue and dress code", "Choose a length that's appropriate for the occasion", "Accessorize thoughtfully"]
        },
        {
          title: "Gala Glamour",
          content: "Galas are the perfect opportunity to go all out with glamour. Long dresses, statement jewelry, and elegant accessories create a look that's worthy of the red carpet.",
          tips: ["Choose a dress that makes you feel confident", "Invest in quality accessories", "Consider the event's theme"]
        },
        {
          title: "Wedding Guest Etiquette",
          content: "Wedding guest dressing requires careful consideration. You want to look beautiful without upstaging the bride. Choose elegant pieces that are appropriate for the venue and season.",
          tips: ["Avoid white or anything too bridal", "Consider the venue and weather", "Choose comfortable shoes for dancing"]
        }
      ],
      conclusion: "Special events are opportunities to shine. Choose pieces that make you feel confident and beautiful, and you'll always be red carpet ready."
    }
  },
  '13': {
    title: 'Pixie Pat: Playful Patterns and Whimsical Style',
    category: 'Collections',
    excerpt: 'Embrace your inner child with fun prints and creative styling.',
    image: PixiePatImage,
    author: 'Pixie Pat',
    publishDate: 'February 15, 2024',
    readTime: '6 min read',
    content: {
      introduction: "Fashion should be fun! Playful patterns and whimsical styling allow you to express your creativity and embrace your inner child. From polka dots to cartoon prints, discover how to add joy to your wardrobe.",
      sections: [
        {
          title: "Playful Patterns",
          content: "Polka dots, stripes, and geometric prints add personality to any outfit. These classic patterns are timeless and can be styled in countless ways for different occasions.",
          tips: ["Mix different patterns for a fun look", "Choose patterns that reflect your personality", "Balance bold patterns with solid pieces"]
        },
        {
          title: "Whimsical Accessories",
          content: "Accessories are the perfect way to add whimsy to your look. Colorful bags, fun jewelry, and playful shoes can transform even the most basic outfit into something special.",
          tips: ["Choose accessories that make you smile", "Don't be afraid to mix different styles", "Consider the occasion when choosing whimsical pieces"]
        },
        {
          title: "Creative Styling",
          content: "Creative styling is about thinking outside the box. Mix unexpected pieces, layer in interesting ways, and don't be afraid to break the rules. Fashion is about self-expression!",
          tips: ["Experiment with different combinations", "Don't be afraid to take risks", "Wear what makes you happy"]
        }
      ],
      conclusion: "Fashion is meant to be fun and expressive. Embrace your playful side and let your personality shine through your style choices!"
    }
  },
  '14': {
    title: 'Lily Luxe: Minimalist Chic for the Modern Woman',
    category: 'Style Guides',
    excerpt: 'Less is more with clean lines, neutral tones, and sophisticated simplicity.',
    image: LilyLuxeImage,
    author: 'Lily Luxe',
    publishDate: 'February 12, 2024',
    readTime: '7 min read',
    content: {
      introduction: "Minimalism is more than just a style—it's a lifestyle. Clean lines, neutral tones, and sophisticated simplicity create a wardrobe that's both beautiful and functional. Discover the art of less is more.",
      sections: [
        {
          title: "The Capsule Wardrobe",
          content: "A capsule wardrobe consists of versatile pieces that work together to create countless outfits. Focus on quality over quantity and choose pieces that reflect your personal style.",
          tips: ["Choose a cohesive color palette", "Invest in quality basics", "Consider your lifestyle when selecting pieces"]
        },
        {
          title: "Clean Lines and Silhouettes",
          content: "Clean lines and well-tailored silhouettes are the foundation of minimalist style. Look for pieces with simple shapes that flatter your body type and reflect your personal aesthetic.",
          tips: ["Focus on fit and tailoring", "Choose simple, classic shapes", "Avoid overly trendy pieces"]
        },
        {
          title: "Neutral Color Palette",
          content: "A neutral color palette creates a sophisticated and cohesive wardrobe. Black, white, gray, and beige work together to create endless outfit possibilities.",
          tips: ["Choose neutrals that complement your skin tone", "Add texture for visual interest", "Use accessories for pops of color"]
        }
      ],
      conclusion: "Minimalism is about intentional living and conscious consumption. By choosing quality over quantity, you create a wardrobe that's both beautiful and meaningful."
    }
  },
  '15': {
    title: 'Zoe Zeal: Festival Fashion That Turns Heads',
    category: 'Holiday Looks',
    excerpt: 'Boho vibes, fringe details, and festival-ready accessories.',
    image: ZoeZealImage,
    author: 'Zoe Zeal',
    publishDate: 'February 10, 2024',
    readTime: '8 min read',
    content: {
      introduction: "Festival season is here, and it's time to embrace your inner bohemian spirit! From flowing dresses to fringe details, festival fashion is all about expressing your creativity and having fun with style.",
      sections: [
        {
          title: "Boho Vibes",
          content: "Bohemian style is characterized by flowing fabrics, natural materials, and a carefree attitude. Think maxi dresses, crochet details, and earthy tones that reflect the free-spirited nature of festival culture.",
          tips: ["Choose comfortable, breathable fabrics", "Look for natural materials like cotton and linen", "Embrace the carefree, relaxed aesthetic"]
        },
        {
          title: "Fringe and Details",
          content: "Fringe, tassels, and other decorative details add movement and personality to festival looks. These elements create visual interest and reflect the playful nature of festival fashion.",
          tips: ["Choose details that complement your outfit", "Consider the movement of fringe pieces", "Don't overdo it—let the details enhance your look"]
        },
        {
          title: "Festival Accessories",
          content: "Festival accessories should be both stylish and practical. Wide-brimmed hats, comfortable boots, and crossbody bags are essential for a day of music and fun.",
          tips: ["Choose accessories that are comfortable for all-day wear", "Look for pieces that protect you from the elements", "Consider the practical aspects of your accessories"]
        }
      ],
      conclusion: "Festival fashion is about expressing your creativity and having fun. Choose pieces that make you feel confident and comfortable, and you'll be ready to dance the day away!"
    }
  },
  '16': {
    title: 'Chloe Chic: Parisian Style for the Urban Explorer',
    category: 'Style Guides',
    excerpt: 'Effortless French elegance meets contemporary street style.',
    image: ChloeChicImage,
    author: 'Chloe Chic',
    publishDate: 'February 8, 2024',
    readTime: '9 min read',
    content: {
      introduction: "Parisian style is the epitome of effortless elegance. It's about looking put-together without trying too hard, mixing high and low fashion, and always maintaining an air of sophistication. Discover the secrets of French style.",
      sections: [
        {
          title: "The French Wardrobe",
          content: "French women invest in quality pieces that last. They focus on classic silhouettes, neutral colors, and versatile items that can be mixed and matched to create countless outfits.",
          tips: ["Invest in quality over quantity", "Choose classic, timeless pieces", "Focus on fit and tailoring"]
        },
        {
          title: "Effortless Styling",
          content: "The key to Parisian style is looking effortless. French women master the art of looking polished without appearing overdone. It's about confidence and attitude as much as the clothes themselves.",
          tips: ["Keep your look simple and refined", "Focus on quality accessories", "Wear what makes you feel confident"]
        },
        {
          title: "Mixing High and Low",
          content: "Parisian style is about mixing designer pieces with high-street finds. It's not about wearing all expensive clothes—it's about creating a cohesive look that reflects your personal style.",
          tips: ["Invest in key pieces and mix with affordable finds", "Focus on the overall look rather than individual pieces", "Choose pieces that work together"]
        }
      ],
      conclusion: "Parisian style is about confidence, quality, and effortless elegance. By focusing on these principles, you can create a wardrobe that reflects the timeless beauty of French fashion."
    }
  },
  '17': {
    title: 'Vibe Vera: Street Style That Speaks Volumes',
    category: 'Trends',
    excerpt: 'Urban edge meets high fashion with bold streetwear statements.',
    image: VibeVeraImage,
    author: 'Vibe Vera',
    publishDate: 'February 5, 2024',
    readTime: '7 min read',
    content: {
      introduction: "Street style is the ultimate form of self-expression. It's about taking fashion risks, mixing unexpected pieces, and creating looks that turn heads. Discover how to master the art of street style.",
      sections: [
        {
          title: "Bold Statements",
          content: "Street style is about making bold statements. Whether it's through color, pattern, or silhouette, street style allows you to express your personality and creativity through fashion.",
          tips: ["Don't be afraid to take risks", "Choose pieces that reflect your personality", "Focus on creating unique combinations"]
        },
        {
          title: "Mixing High and Low",
          content: "Street style is about mixing designer pieces with affordable finds. It's not about how much you spend—it's about how you put pieces together to create a unique look.",
          tips: ["Focus on the overall look rather than individual pieces", "Mix different price points and styles", "Choose pieces that work together"]
        },
        {
          title: "Urban Edge",
          content: "Street style has an urban edge that reflects the energy and diversity of city life. Think bold colors, interesting textures, and unexpected combinations that capture the spirit of the streets.",
          tips: ["Embrace the energy of urban fashion", "Don't be afraid to mix different styles", "Focus on creating looks that feel authentic"]
        }
      ],
      conclusion: "Street style is about confidence, creativity, and self-expression. By embracing your unique style and taking fashion risks, you can create looks that truly speak volumes."
    }
  },
  '18': {
    title: 'Sparkle Sasha: Glitter and Glam for Night Out',
    category: 'Night Out',
    excerpt: 'Shine bright with sequins, metallics, and show-stopping evening looks.',
    image: SparkleSashaImage,
    author: 'Sparkle Sasha',
    publishDate: 'February 3, 2024',
    readTime: '6 min read',
    content: {
      introduction: "Night out fashion is all about sparkle and glamour! From sequins to metallics, evening wear is your chance to shine and make a statement. Discover how to create show-stopping looks for your next night out.",
      sections: [
        {
          title: "Sequins and Sparkle",
          content: "Sequins are the ultimate way to add glamour to your evening look. Whether it's a full sequin dress or subtle sequin details, these sparkly elements create instant drama and sophistication.",
          tips: ["Choose sequin pieces that flatter your body type", "Balance sparkle with solid pieces", "Consider the occasion when choosing sequin intensity"]
        },
        {
          title: "Metallic Magic",
          content: "Metallics add instant glamour to any evening look. Gold, silver, and bronze tones create a luxurious effect that's perfect for special occasions and night out events.",
          tips: ["Choose metallics that complement your skin tone", "Mix different metallic tones for depth", "Use metallics as statement pieces"]
        },
        {
          title: "Evening Accessories",
          content: "Evening accessories should be bold and glamorous. Statement jewelry, metallic bags, and sparkly shoes complete your night out look and add the finishing touches to your ensemble.",
          tips: ["Choose accessories that complement your outfit", "Don't be afraid to go bold with evening accessories", "Consider the venue when choosing accessories"]
        }
      ],
      conclusion: "Night out fashion is your chance to shine and make a statement. Embrace the sparkle and glamour, and you'll be ready to turn heads wherever you go!"
    }
  },
  '19': {
    title: 'Lush Lina: Sustainable Fashion That Looks Expensive',
    category: 'Style Guides',
    excerpt: 'Eco-friendly choices that don\'t compromise on luxury or style.',
    image: LushLinaImage,
    author: 'Lush Lina',
    publishDate: 'February 1, 2024',
    readTime: '8 min read',
    content: {
      introduction: "Sustainable fashion doesn't mean sacrificing style or luxury. In fact, eco-friendly fashion can be more beautiful and sophisticated than fast fashion. Discover how to build a sustainable wardrobe that looks expensive and feels good.",
      sections: [
        {
          title: "Sustainable Materials",
          content: "Sustainable materials like organic cotton, bamboo, and recycled fabrics are not only better for the environment but often feel more luxurious than synthetic alternatives. These materials are soft, durable, and beautiful.",
          tips: ["Look for organic and natural materials", "Choose recycled fabrics when possible", "Consider the environmental impact of your choices"]
        },
        {
          title: "Ethical Production",
          content: "Supporting brands that use ethical production methods ensures that your clothes are made by workers who are treated fairly and paid living wages. This commitment to ethics often results in higher quality garments.",
          tips: ["Research brands before purchasing", "Look for fair trade certifications", "Support small, ethical brands"]
        },
        {
          title: "Investment Pieces",
          content: "Sustainable fashion is about investing in quality pieces that last. By choosing well-made garments, you reduce waste and create a wardrobe that stands the test of time.",
          tips: ["Choose pieces that will last for years", "Invest in quality over quantity", "Consider the cost per wear"]
        }
      ],
      conclusion: "Sustainable fashion is the future of style. By making conscious choices, you can create a beautiful wardrobe that's good for you and good for the planet."
    }
  },
  '20': {
    title: 'Breezy Bea: Effortless Summer Vibes All Year Round',
    category: 'Summer Outfits',
    excerpt: 'Capture that carefree summer feeling with breezy, relaxed styling.',
    image: BreezyBeaImage,
    author: 'Breezy Bea',
    publishDate: 'January 30, 2024',
    readTime: '7 min read',
    content: {
      introduction: "Summer vibes aren't just for summer! You can capture that carefree, breezy feeling all year round with the right styling and attitude. Discover how to bring summer energy to every season.",
      sections: [
        {
          title: "Breezy Fabrics",
          content: "Light, breathable fabrics like cotton, linen, and silk create that effortless summer feeling. These materials are comfortable, beautiful, and perfect for creating relaxed, sophisticated looks.",
          tips: ["Choose natural, breathable fabrics", "Look for lightweight materials", "Consider the climate when selecting fabrics"]
        },
        {
          title: "Relaxed Silhouettes",
          content: "Relaxed silhouettes create that carefree summer feeling. Flowy dresses, loose pants, and oversized tops are comfortable and stylish, perfect for creating effortless looks.",
          tips: ["Choose silhouettes that flatter your body type", "Look for pieces that allow movement", "Balance relaxed pieces with structured elements"]
        },
        {
          title: "Summer Color Palette",
          content: "Bright, cheerful colors and soft pastels create that summer feeling. From vibrant yellows to soft pinks, these colors bring energy and positivity to your wardrobe.",
          tips: ["Choose colors that make you feel happy", "Mix bright and soft colors for balance", "Consider your skin tone when choosing colors"]
        }
      ],
      conclusion: "Summer vibes are about feeling carefree and confident. By incorporating these elements into your wardrobe, you can capture that beautiful summer energy all year long."
    }
  }
};

// Collection data for the Collections page
const collectionDetails = {
  '1': {
    title: 'Aurora Glam Collection',
    category: 'Luxury',
    excerpt: 'Chic, dreamy and runway-ready looks that capture the essence of luxury fashion.',
    image: LuxeEditImage,
    author: 'LuxeLane Team',
    publishDate: 'March 15, 2024',
    readTime: '5 min read',
    content: {
      introduction: "The Aurora Glam collection represents the pinnacle of luxury fashion, featuring pieces that are both timeless and contemporary. Each item has been carefully curated to provide the perfect balance of sophistication and wearability.",
      sections: [
        {
          title: "Evening Elegance",
          content: "Our evening pieces feature luxurious fabrics like silk, satin, and velvet, with intricate detailing that makes every piece a work of art. From cocktail dresses to formal gowns, each piece is designed to make you feel like the most glamorous version of yourself.",
          tips: ["Choose pieces that complement your body type", "Invest in quality fabrics", "Consider the occasion when selecting"]
        },
        {
          title: "Day-to-Night Transition",
          content: "Many pieces in this collection are designed to transition seamlessly from day to evening. A structured blazer can be worn with jeans during the day and paired with a silk dress for evening events.",
          tips: ["Look for versatile pieces", "Choose neutral colors for maximum wear", "Invest in quality accessories"]
        },
        {
          title: "Investment Pieces",
          content: "These are pieces you'll wear for years to come. Each item is crafted with attention to detail and quality materials that ensure longevity and timeless appeal.",
          tips: ["Choose classic silhouettes", "Invest in quality over quantity", "Consider cost per wear"]
        }
      ],
      conclusion: "The Aurora Glam collection is about more than just clothing—it's about feeling confident, beautiful, and empowered. Each piece is designed to help you express your unique style while maintaining the highest standards of luxury and quality."
    }
  },
  '2': {
    title: 'Minimal Muse Collection',
    category: 'Minimalist',
    excerpt: 'Understated elegance with a luxe edge - less is more, but make it fashion.',
    image: SpringRefreshImage,
    author: 'LuxeLane Team',
    publishDate: 'March 12, 2024',
    readTime: '4 min read',
    content: {
      introduction: "The Minimal Muse collection celebrates the beauty of simplicity. Each piece is thoughtfully designed to be both functional and beautiful, creating a wardrobe that works for every occasion.",
      sections: [
        {
          title: "Essential Basics",
          content: "Our essential basics are the foundation of any minimalist wardrobe. These pieces are designed to be mixed and matched, creating endless outfit possibilities while maintaining a cohesive aesthetic.",
          tips: ["Choose a cohesive color palette", "Invest in quality basics", "Focus on fit and tailoring"]
        },
        {
          title: "Capsule Wardrobe",
          content: "This collection is designed to work together as a capsule wardrobe. Each piece complements the others, allowing you to create multiple outfits from a small selection of items.",
          tips: ["Start with neutral colors", "Choose versatile pieces", "Consider your lifestyle when selecting"]
        },
        {
          title: "Quality Over Quantity",
          content: "Every piece in this collection is crafted with quality materials and attention to detail. We believe that fewer, better pieces create a more meaningful and sustainable wardrobe.",
          tips: ["Invest in quality over quantity", "Choose pieces that last", "Consider the environmental impact"]
        }
      ],
      conclusion: "Minimalism is about intentional living and conscious consumption. The Minimal Muse collection helps you create a wardrobe that reflects your values and lifestyle while maintaining timeless elegance."
    }
  },
  '3': {
    title: 'Barbiecore Revival Collection',
    category: 'Trendy',
    excerpt: 'Pink power dominates with bold, unapologetic flair that demands attention.',
    image: BarbiecoreImage,
    author: 'LuxeLane Team',
    publishDate: 'March 10, 2024',
    readTime: '6 min read',
    content: {
      introduction: "The Barbiecore Revival collection is all about embracing bold, unapologetic style. This collection celebrates the power of pink and encourages you to express yourself with confidence and flair.",
      sections: [
        {
          title: "Pink Power",
          content: "From soft pastels to vibrant hot pinks, this collection explores every shade of pink. Each piece is designed to make a statement and help you embrace your inner Barbie with confidence.",
          tips: ["Choose shades that complement your skin tone", "Balance bold pinks with neutrals", "Start with accessories if you're new to the trend"]
        },
        {
          title: "Bold Statements",
          content: "This collection is not for the faint of heart. Each piece is designed to turn heads and make a statement. From bold prints to eye-catching accessories, this collection is all about expressing your unique personality.",
          tips: ["Wear with confidence", "Choose pieces that reflect your personality", "Don't be afraid to take risks"]
        },
        {
          title: "Versatile Styling",
          content: "Despite the bold nature of this collection, many pieces can be styled in versatile ways. A hot pink blazer can be worn with jeans for a casual look or paired with a dress for a more formal occasion.",
          tips: ["Mix with neutral pieces", "Consider the occasion", "Accessorize thoughtfully"]
        }
      ],
      conclusion: "The Barbiecore Revival collection is about embracing your unique style and expressing yourself with confidence. Remember, fashion is about having fun and feeling good in what you wear!"
    }
  },
  '4': {
    title: 'Sculptural Swim Collection',
    category: 'Swimwear',
    excerpt: 'Swimwear becomes art with bold cuts, metallic fabrics, and body-sculpting silhouettes.',
    image: SwimwearSculpturalImage,
    author: 'LuxeLane Team',
    publishDate: 'March 8, 2024',
    readTime: '5 min read',
    content: {
      introduction: "The Sculptural Swim collection redefines beach fashion with architectural cuts and innovative designs. Each piece is crafted to celebrate every body type while providing the perfect blend of style and functionality.",
      sections: [
        {
          title: "Architectural Design",
          content: "Our swimwear features bold geometric lines and asymmetric cuts that create flattering silhouettes. These designs are inspired by modern architecture and create visual interest while maintaining comfort.",
          tips: ["Choose cuts that highlight your best features", "Look for designs that provide good support", "Consider the complexity of the design"]
        },
        {
          title: "Innovative Fabrics",
          content: "We use cutting-edge fabric technologies that provide UV protection, quick-dry properties, and shape retention. These materials ensure that your swimwear looks great and performs well.",
          tips: ["Look for UV protection", "Choose quick-dry materials", "Consider the care requirements"]
        },
        {
          title: "Body Confidence",
          content: "Every piece in this collection is designed to make you feel confident and beautiful. We believe that every body is a beach body, and our designs celebrate diversity and individuality.",
          tips: ["Choose pieces that make you feel confident", "Focus on how you feel, not how you look", "Embrace your unique beauty"]
        }
      ],
      conclusion: "The Sculptural Swim collection is about celebrating your body and feeling confident at the beach. With these innovative designs, you'll look and feel amazing in and out of the water."
    }
  },
  '5': {
    title: 'Glam Athleisure Collection',
    category: 'Athleisure',
    excerpt: 'When your gym outfit slays harder than your night-out fit - fitness meets fashion.',
    image: GlamAthleisureImage,
    author: 'LuxeLane Team',
    publishDate: 'March 5, 2024',
    readTime: '7 min read',
    content: {
      introduction: "The Glam Athleisure collection combines performance technology with luxury aesthetics. These pieces are designed to work as hard as you do while looking effortlessly chic.",
      sections: [
        {
          title: "Performance Meets Style",
          content: "Our athleisure pieces feature moisture-wicking fabrics, four-way stretch, and thoughtful design details that make them perfect for both workouts and everyday wear.",
          tips: ["Choose fabrics that work for your activity level", "Look for pieces with built-in support", "Consider the versatility of each piece"]
        },
        {
          title: "Luxury Details",
          content: "From mesh panels to contrast stitching, our athleisure pieces feature luxury details that elevate your workout style. These small touches make a big difference in how you look and feel.",
          tips: ["Invest in quality over quantity", "Look for thoughtful design elements", "Choose pieces that make you feel confident"]
        },
        {
          title: "From Gym to Street",
          content: "The best athleisure pieces transition seamlessly from workout to everyday wear. Pair your favorite leggings with an oversized blazer, or style a sports bra with high-waisted jeans.",
          tips: ["Choose versatile pieces", "Layer strategically", "Don't be afraid to mix athleisure with regular clothing"]
        }
      ],
      conclusion: "Glam athleisure is about feeling confident and comfortable while looking your best. With these pieces, you can conquer your workout and your day with style."
    }
  },
  '6': {
    title: 'Winter Luxe Collection',
    category: 'Winter',
    excerpt: 'Master the art of layering with sophisticated winter ensembles that combine warmth with style.',
    image: WinterLuxeLooksImage,
    author: 'LuxeLane Team',
    publishDate: 'March 3, 2024',
    readTime: '6 min read',
    content: {
      introduction: "The Winter Luxe collection is all about mastering the art of layering while maintaining your style edge. From cozy knits to statement coats, discover how to create luxurious winter looks.",
      sections: [
        {
          title: "Layering Mastery",
          content: "Our winter pieces are designed to work together in layers, creating sophisticated looks that keep you warm and stylish. From base layers to outerwear, each piece has its place in your winter wardrobe.",
          tips: ["Start with quality base layers", "Layer from thinnest to thickest", "Use layers to add color and texture"]
        },
        {
          title: "Cozy Knitwear",
          content: "Our knitwear collection features luxurious materials like cashmere and wool blends. These pieces provide warmth and comfort while maintaining a sophisticated aesthetic.",
          tips: ["Choose a weight appropriate for your climate", "Look for styles that work with your body type", "Invest in neutral colors for maximum wear"]
        },
        {
          title: "Statement Outerwear",
          content: "Your winter coat is your biggest style statement. Our outerwear collection features everything from classic wool coats to trendy puffers, all designed to keep you warm and looking fabulous.",
          tips: ["Consider your lifestyle when choosing length", "Look for quality construction", "Choose a color that works with your wardrobe"]
        }
      ],
      conclusion: "Winter fashion is about combining function with style. With the Winter Luxe collection, you'll stay warm and look effortlessly chic all season long."
    }
  },
  '7': {
    title: 'Linen Dreams Collection',
    category: 'Summer',
    excerpt: 'Cool & breezy linen looks for those scorching hot days when comfort meets chic.',
    image: CoolAndBreezyImage,
    author: 'LuxeLane Team',
    publishDate: 'March 1, 2024',
    readTime: '5 min read',
    content: {
      introduction: "The Linen Dreams collection celebrates the natural beauty and comfort of linen. This collection is perfect for hot summer days when you want to look chic while staying cool and comfortable.",
      sections: [
        {
          title: "Natural Comfort",
          content: "Linen is one of the most breathable and comfortable fabrics available. Our linen pieces are designed to keep you cool and comfortable while maintaining a sophisticated aesthetic.",
          tips: ["Embrace the natural wrinkles of linen", "Choose light colors to reflect heat", "Look for linen blends for easier care"]
        },
        {
          title: "Versatile Styling",
          content: "Linen pieces are incredibly versatile and can be styled for various occasions. From casual beach days to more formal events, our linen collection has you covered.",
          tips: ["Mix linen with other natural fabrics", "Choose versatile colors", "Consider the occasion when styling"]
        },
        {
          title: "Sustainable Choice",
          content: "Linen is a sustainable fabric choice that's good for both you and the environment. It's biodegradable, requires less water to produce than cotton, and gets better with age.",
          tips: ["Choose sustainable fabrics", "Care for your linen properly", "Invest in quality pieces that last"]
        }
      ],
      conclusion: "The Linen Dreams collection is about embracing natural beauty and comfort. With these pieces, you'll stay cool, look chic, and feel good about your fashion choices."
    }
  },
  '8': {
    title: 'Budget Chic Collection',
    category: 'Budget',
    excerpt: 'How to look designer for less without compromising on style or sophistication.',
    image: ChicOnABudgetImage,
    author: 'LuxeLane Team',
    publishDate: 'February 28, 2024',
    readTime: '8 min read',
    content: {
      introduction: "The Budget Chic collection proves that you don't need to spend a fortune to look expensive. This collection features carefully curated pieces that offer designer quality at accessible prices.",
      sections: [
        {
          title: "Smart Shopping",
          content: "Our Budget Chic collection is the result of careful curation and smart shopping. We've found pieces that offer the look and feel of luxury without the luxury price tag.",
          tips: ["Focus on quality over quantity", "Look for versatile pieces", "Consider cost per wear"]
        },
        {
          title: "High-Low Mixing",
          content: "The key to budget chic is knowing how to mix high and low pieces. Our collection shows you how to create expensive-looking outfits without breaking the bank.",
          tips: ["Invest in key pieces", "Mix with affordable finds", "Focus on the overall look"]
        },
        {
          title: "Timeless Style",
          content: "Our budget pieces are designed to last beyond seasonal trends. These timeless pieces will serve you well for years to come, making them excellent investments.",
          tips: ["Choose classic silhouettes", "Avoid overly trendy pieces", "Focus on quality construction"]
        }
      ],
      conclusion: "Looking expensive doesn't have to cost a fortune. The Budget Chic collection shows you how to create a sophisticated wardrobe on any budget."
    }
  },
  '9': {
    title: 'Beach Babe Collection',
    category: 'Beach',
    excerpt: 'Essential pieces every beach babe needs for maximum beachside glamour.',
    image: BeachBabeEssentialsImage,
    author: 'LuxeLane Team',
    publishDate: 'February 25, 2024',
    readTime: '6 min read',
    content: {
      introduction: "The Beach Babe collection is your complete guide to beachside style. From the perfect swimsuit to the most Instagram-worthy coverup, this collection has everything you need for beach adventures.",
      sections: [
        {
          title: "Swimwear Essentials",
          content: "Our swimwear collection features styles for every body type and preference. From one-pieces to bikinis, each piece is designed to make you feel confident and beautiful at the beach.",
          tips: ["Choose styles that flatter your body type", "Look for quick-dry, UV-protective fabrics", "Consider your activities when selecting"]
        },
        {
          title: "Coverup Chic",
          content: "A stylish coverup is essential for transitioning from beach to boardwalk. Our coverup collection features flowy maxi dresses, crochet tunics, and sarong-style wraps.",
          tips: ["Choose lightweight, breathable fabrics", "Look for styles that work with your swimsuit", "Consider the length for your comfort level"]
        },
        {
          title: "Beach Accessories",
          content: "Complete your beach look with the right accessories. From wide-brimmed hats to oversized sunglasses, our beach accessories are both stylish and practical.",
          tips: ["Invest in quality sunglasses with UV protection", "Choose a beach bag that's both stylish and practical", "Look for sandals with good traction"]
        }
      ],
      conclusion: "The Beach Babe collection is about feeling confident and comfortable while looking effortlessly beautiful at the beach. With these pieces, you'll be ready for any beach adventure."
    }
  }
};

function PostDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCollection, setIsCollection] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      // Check if we're on a collection page or blog page
      const isCollectionPage = location.pathname.includes('/collections/');
      setIsCollection(isCollectionPage);
      
      // Get the appropriate data based on the page type
      const foundPost = isCollectionPage ? collectionDetails[id] : detailedPosts[id];
      setPost(foundPost);
      setLoading(false);
    }, 500);
  }, [id, location.pathname]);

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
          <SplitText
            text={isCollection ? "✨ Collection Not Found" : "📰 Post Not Found"}
            className="text-4xl font-bold text-white mb-4 block"
            delay={60}
            duration={0.8}
            splitType="chars"
          />
          <SplitText
            text={isCollection ? "The collection you're looking for doesn't exist." : "The post you're looking for doesn't exist."}
            className="text-white/80 text-lg mb-6 block"
            delay={80}
            duration={0.8}
            splitType="words"
          />
          <Link 
            to={isCollection ? "/collections" : "/blog"}
            className="inline-block bg-white/10 border border-white/20 px-6 py-3 rounded-lg text-white font-semibold hover:bg-white/20 transition-colors duration-200"
          >
            ← Back to {isCollection ? "Collections" : "Blog"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#f8f9fa', '#e9ecef']}
          particleCount={80}
          particleSpread={16}
          speed={0.03}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      {/* Back Button */}
      <Link 
        to={isCollection ? "/collections" : "/blog"}
        className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
      >
        ← Back to {isCollection ? "Collections" : "Blog"}
      </Link>

      {/* Hero Section */}
      <div className="mb-8">
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Post Meta */}
        <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
          <span className="bg-white/10 px-3 py-1 rounded-full">{post.category}</span>
          <span>By {post.author}</span>
          <span>{post.publishDate}</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <SplitText
          text={post.title}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight block"
          delay={80}
          duration={1}
          splitType="chars"
        />

        {/* Excerpt */}
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {/* Introduction */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/10">
          <p className="text-lg text-white/90 leading-relaxed">
            {post.content.introduction}
          </p>
        </div>

        {/* Sections */}
        {post.content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <SplitText
              text={section.title}
              className="text-2xl font-bold text-white mb-4 block"
              delay={60}
              duration={0.8}
              splitType="chars"
            />
            <p className="text-white/80 mb-4 leading-relaxed">
              {section.content}
            </p>
            {section.tips && (
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">💡 Pro Tips:</h4>
                <ul className="space-y-1">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-white/70 text-sm flex items-start">
                      <span className="text-white/50 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">Final Thoughts</h3>
          <p className="text-white/90 leading-relaxed">
            {post.content.conclusion}
          </p>
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-white/20">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Share This Post</h3>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Facebook
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Twitter
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Pinterest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
