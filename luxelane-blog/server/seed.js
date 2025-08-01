// seed.js - Database seeding script for fashion blog content

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Category = require('./models/Category');
const Post = require('./models/Post');

dotenv.config();

// Fashion categories data
const categoriesData = [
  {
    name: 'Trends',
    description: 'Latest fashion trends and style updates',
    color: '#ff6b6b',
    icon: '🌊',
  },
  {
    name: 'Swimwear',
    description: 'Beach and pool fashion essentials',
    color: '#4ecdc4',
    icon: '👙',
  },
  {
    name: 'Fitness Fashion',
    description: 'Athleisure and workout style',
    color: '#45b7d1',
    icon: '💄',
  },
  {
    name: 'Luxury',
    description: 'High-end fashion and designer pieces',
    color: '#f39c12',
    icon: '✨',
  },
  {
    name: 'Seasonal',
    description: 'Season-specific fashion guides',
    color: '#9b59b6',
    icon: '🌸',
  },
  {
    name: 'Winter Fashion',
    description: 'Cold weather style and layering',
    color: '#34495e',
    icon: '🧥',
  },
  {
    name: 'Summer Style',
    description: 'Hot weather fashion and accessories',
    color: '#e74c3c',
    icon: '🌊',
  },
  {
    name: 'Budget Fashion',
    description: 'Affordable style and high-low dressing',
    color: '#27ae60',
    icon: '💎',
  },
  {
    name: 'Beach Fashion',
    description: 'Shore and vacation style',
    color: '#3498db',
    icon: '🏖️',
  },
];

// Fashion posts data
const postsData = [
  {
    title: '🌊 Barbiecore is Back',
    excerpt: 'Pink power dominates summer with bold, unapologetic flair.',
    content: `From bubblegum to fuchsia, pink is reclaiming its spotlight across runways and sidewalks. Dive into the top 5 Barbiecore-inspired outfits taking over TikTok and Instagram right now.

The Barbiecore trend is making a major comeback this season, bringing with it a wave of bold, unapologetic pink fashion that's taking over social media feeds everywhere. From bubblegum to fuchsia, this vibrant hue is dominating both high fashion runways and street style.

What makes this trend so special is its versatility - you can go full Barbie with head-to-toe pink ensembles, or incorporate subtle pink accents into your existing wardrobe. The key is embracing the playful, confident energy that pink brings to any outfit.

Our top picks include metallic pink co-ords, oversized pink sunglasses, and statement pink accessories that add instant glamour to any look. Whether you're heading to a summer party or just want to brighten up your everyday style, Barbiecore has got you covered.

The trend is perfect for summer because it embodies the carefree, fun spirit of the season while still looking sophisticated and put-together. Plus, with so many shades of pink available, there's a perfect hue for every skin tone and personal style.`,
    featuredImage: '/src/assets/Barbiecore is Back.jpg',
    tags: ['barbiecore', 'pink', 'summer', 'trends', 'fashion'],
  },
  {
    title: '👙 2025 Swimwear Goes Sculptural',
    excerpt: 'Swimwear becomes art — bold cuts, metallic fabrics, and body-sculpting silhouettes define this season.',
    content: `From runway to resort, 2025's swimwear is daring and refined. Think asymmetrical straps, high-leg one-pieces, 3D textures, and chrome sheens. LuxeLane curates 7 head-turning looks perfect for both beach clubs and rooftop pools.

The swimwear landscape for 2025 is all about architectural design and sculptural elements that celebrate the female form in bold, innovative ways. This season's pieces are more than just beachwear - they're wearable art that makes a statement wherever you go.

Key trends include asymmetrical cuts that create dynamic lines, metallic and chrome finishes that catch the light beautifully, and 3D textures that add depth and dimension. High-leg one-pieces are particularly popular, offering both coverage and a flattering silhouette.

The color palette ranges from classic neutrals to bold metallics, with chrome sheens and iridescent finishes leading the way. These pieces are designed to transition seamlessly from beach to bar, making them perfect for the modern woman who wants to look fabulous all day long.

Our curated selection includes pieces that work for every body type and personal style, from minimalist one-pieces to bold statement suits that demand attention.`,
    featuredImage: '/src/assets/2025 Swimwear Goes Sculptural.jpg',
    tags: ['swimwear', '2025', 'sculptural', 'metallic', 'beach'],
  },
  {
    title: '💄 Glam Athleisure 2.0',
    excerpt: 'When your gym outfit slays harder than your night-out fit.',
    content: `No more dull leggings. With metallic finishes, asymmetrical crop tops, and luxury sneakers, fashion-forward gymwear is dominating influencers' feeds. Here are 6 outfits that'll have you sweating in style.

The athleisure game has been completely revolutionized, and the new wave of glam gymwear is here to stay. Gone are the days of basic black leggings and plain tank tops - today's fitness fashion is all about making a statement while staying comfortable and functional.

Metallic finishes are leading the charge, with gold and silver accents adding instant glamour to workout ensembles. Asymmetrical crop tops create interesting lines and show just the right amount of skin, while luxury sneakers from brands like Nike and Fendi collaborations elevate the entire look.

The key to nailing this trend is balancing style with functionality. These pieces aren't just pretty - they're designed with performance in mind, featuring moisture-wicking fabrics, four-way stretch, and supportive construction that keeps up with your most intense workouts.

Our curated selection includes everything from statement leggings with bold prints to coordinating sets that look runway-ready. The best part? These pieces transition seamlessly from gym to street, so you can maintain your glamorous aesthetic throughout the day.`,
    featuredImage: '/src/assets/Glam Athleisure 2.0.jpg',
    tags: ['athleisure', 'gymwear', 'fitness', 'luxury', 'sneakers'],
  },
  {
    title: '✨ The Luxe Edit',
    excerpt: 'Top 10 must-have pieces that define luxury fashion this season.',
    content: `From statement coats to investment bags, these are the pieces every fashion-forward woman needs in her wardrobe. We've curated the ultimate luxury shopping list with pieces that will elevate your style for years to come.

Luxury fashion is about more than just price tags - it's about investing in pieces that tell a story and stand the test of time. This season's must-haves are all about quality, craftsmanship, and timeless design that transcends trends.

Our top picks include statement coats that serve as the foundation of any sophisticated wardrobe, investment bags that carry both your essentials and your style credentials, and elevated basics that form the building blocks of a luxury capsule wardrobe.

The key to building a luxury wardrobe is focusing on pieces that work together to create a cohesive, sophisticated aesthetic. These aren't just individual items - they're part of a carefully curated collection that reflects your personal style and lifestyle.

From the perfect blazer that elevates any outfit to the investment bag that becomes your signature piece, these luxury essentials are designed to be worn and loved for years to come. They're the pieces that make getting dressed in the morning a joy, not a chore.`,
    featuredImage: '/src/assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg',
    tags: ['luxury', 'investment', 'essentials', 'wardrobe', 'quality'],
  },
  {
    title: '🌸 Spring Refresh',
    excerpt: 'What to wear this bloom season for maximum impact.',
    content: `Spring is here and so are the fresh trends. From pastel power suits to floral maxi dresses, discover the 8 key pieces that will make your spring wardrobe bloom. Perfect for everything from brunch dates to garden parties.

Spring fashion is all about embracing the season's natural beauty and bringing that fresh energy into your wardrobe. This season's trends celebrate the return of color, texture, and life after the winter months, with pieces that feel as rejuvenating as the season itself.

Pastel power suits are leading the charge, offering a sophisticated take on spring's soft color palette. These coordinating sets are perfect for everything from office meetings to weekend brunches, providing both style and comfort in equal measure.

Floral maxi dresses are another spring essential, with romantic prints and flowing silhouettes that capture the season's romantic energy. These pieces are perfect for garden parties, outdoor events, and any occasion where you want to feel effortlessly beautiful.

The key to nailing spring style is embracing the season's natural palette - think soft pinks, lavender, mint green, and sky blue. These colors work beautifully together and create a cohesive, seasonal aesthetic that feels fresh and modern.`,
    featuredImage: '/src/assets/Spring Refresh What to Wear This Bloom Season.jpg',
    tags: ['spring', 'pastels', 'floral', 'seasonal', 'refresh'],
  },
  {
    title: '🧥 Layer Game Strong',
    excerpt: 'Winter luxe looks that combine warmth with undeniable style.',
    content: `Master the art of layering with these sophisticated winter ensembles. From cashmere sweaters to statement coats, learn how to create depth and dimension while staying cozy. These looks work from office to evening.

Winter fashion is all about mastering the art of layering, and this season's trends make it easier than ever to create sophisticated, warm ensembles that look as good as they feel. The key is building layers that work together to create depth and dimension while maintaining your personal style.

Cashmere sweaters are the foundation of any winter wardrobe, providing both warmth and luxury in equal measure. These pieces work beautifully as base layers or standalone pieces, depending on the weather and your style preferences.

Statement coats are another winter essential, serving as the finishing touch that pulls your entire look together. From oversized wool coats to structured blazers, these pieces add instant sophistication to any ensemble.

The art of layering is about more than just staying warm - it's about creating interesting textures and proportions that make your outfit visually engaging. Think about how different fabrics and silhouettes work together, and don't be afraid to mix and match to create your own unique style.`,
    featuredImage: '/src/assets/Layer Game Strong Winter Luxe Looks.jpg',
    tags: ['winter', 'layering', 'cashmere', 'coats', 'luxe'],
  },
  {
    title: '🌊 Cool & Breezy',
    excerpt: 'Best linen looks for those scorching hot days.',
    content: `When the temperature rises, linen becomes your best friend. Discover 5 effortless linen outfits that keep you cool while looking effortlessly chic. From flowy dresses to tailored separates, these looks are perfect for summer adventures.

Summer heat calls for fabrics that breathe and move with you, and linen is the undisputed champion of hot weather fashion. This natural fiber has been keeping people cool for centuries, and modern designers are finding new ways to make it look fresh and contemporary.

The beauty of linen is its versatility - it can be dressed up or down depending on the occasion. A flowy linen dress is perfect for beach days and casual outings, while tailored linen separates work beautifully for more formal summer events.

The key to styling linen is embracing its natural texture and drape. These pieces are meant to look relaxed and effortless, so don't worry about perfect creases or structured silhouettes. Instead, focus on creating looks that feel comfortable and confident.

Our curated selection includes everything from maxi dresses that flow beautifully in the breeze to coordinating sets that look put-together without feeling constricting. These pieces are designed to keep you cool and comfortable while looking absolutely fabulous.`,
    featuredImage: '/src/assets/Cool & Breezy Best Linen Looks for Hot Days.jpg',
    tags: ['linen', 'summer', 'cool', 'breezy', 'natural'],
  },
  {
    title: '💎 Chic on a Budget',
    excerpt: 'How to look designer for less without compromising on style.',
    content: `Luxury doesn't have to break the bank. Learn the secrets of high-low dressing with these 6 outfit combinations that mix designer pieces with affordable finds. Style tips that will make you look like a million bucks.

Looking expensive doesn't have to mean spending a fortune. The art of high-low dressing is about strategically mixing investment pieces with affordable finds to create looks that look designer without the designer price tag.

The key to successful high-low dressing is knowing where to invest and where to save. Splurge on pieces that you'll wear frequently and that form the foundation of your wardrobe - think classic blazers, quality denim, and investment bags. Save on trendy pieces that you might only wear for a season or two.

Another important aspect is focusing on quality over quantity. A few well-chosen, high-quality pieces will serve you better than a closet full of fast fashion items that fall apart after a few wears. Look for natural fabrics, good construction, and timeless design.

Our curated combinations show you exactly how to mix and match to create sophisticated looks that look expensive without breaking the bank. From pairing a designer bag with affordable basics to mixing high-end accessories with budget-friendly clothing, these tips will help you build a wardrobe that looks luxurious without the luxury price tag.`,
    featuredImage: '/src/assets/Chic on a Budget How to Look Designer for Less.jpg',
    tags: ['budget', 'high-low', 'affordable', 'luxury', 'style'],
  },
  {
    title: '🏖️ Beach Babe Essentials',
    excerpt: 'What to wear to the shore for maximum beachside glamour.',
    content: `From swimwear to cover-ups, discover the essential pieces every beach babe needs for maximum seaside style. Perfect for everything from casual beach days to luxury resort vacations.

Beach fashion is about more than just looking good in a swimsuit - it's about creating a complete seaside aesthetic that makes you feel confident and beautiful from the moment you arrive until the sun goes down.

The foundation of any beach wardrobe is great swimwear that makes you feel amazing. Whether you prefer one-pieces, bikinis, or tankinis, the key is choosing pieces that fit well and make you feel confident. Look for supportive construction, flattering cuts, and fabrics that hold up to sun, sand, and water.

Cover-ups are another beach essential, providing both style and functionality. From flowy kaftans to structured tunics, these pieces help you transition seamlessly from beach to bar while maintaining your glamorous aesthetic.

Accessories are what really elevate your beach look from basic to fabulous. Think oversized sunglasses, wide-brimmed hats, and statement jewelry that can withstand the elements. These pieces add personality and polish to any beach ensemble.`,
    featuredImage: '/src/assets/Beach Babe Essentials What to Wear to the Shore.jpg',
    tags: ['beach', 'swimwear', 'cover-ups', 'accessories', 'vacation'],
  },
];

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/luxelane-blog')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    try {
      // Clear existing data
      await User.deleteMany({});
      await Category.deleteMany({});
      await Post.deleteMany({});
      console.log('Cleared existing data');
      
      // Create default admin user
      const adminUser = new User({
        username: 'admin',
        email: 'admin@luxelane.com',
        password: 'admin123',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        bio: 'LuxeLane Fashion Blog Administrator',
      });
      
      await adminUser.save();
      console.log('Created admin user');
      
      // Create categories
      const categories = [];
      for (const categoryData of categoriesData) {
        const category = new Category(categoryData);
        await category.save();
        categories.push(category);
        console.log(`Created category: ${category.name}`);
      }
      
      // Create posts
      for (const postData of postsData) {
        // Find the appropriate category
        let category;
        if (postData.title.includes('Barbiecore')) {
          category = categories.find(c => c.name === 'Trends');
        } else if (postData.title.includes('Swimwear')) {
          category = categories.find(c => c.name === 'Swimwear');
        } else if (postData.title.includes('Athleisure')) {
          category = categories.find(c => c.name === 'Fitness Fashion');
        } else if (postData.title.includes('Luxe Edit')) {
          category = categories.find(c => c.name === 'Luxury');
        } else if (postData.title.includes('Spring')) {
          category = categories.find(c => c.name === 'Seasonal');
        } else if (postData.title.includes('Layer Game')) {
          category = categories.find(c => c.name === 'Winter Fashion');
        } else if (postData.title.includes('Cool & Breezy')) {
          category = categories.find(c => c.name === 'Summer Style');
        } else if (postData.title.includes('Chic on a Budget')) {
          category = categories.find(c => c.name === 'Budget Fashion');
        } else if (postData.title.includes('Beach Babe')) {
          category = categories.find(c => c.name === 'Beach Fashion');
        } else {
          category = categories[0]; // Default to Trends
        }
        
        const post = new Post({
          ...postData,
          author: adminUser._id,
          category: category._id,
          isPublished: true,
        });
        
        await post.save();
        console.log(`Created post: ${post.title}`);
      }
      
      console.log('Database seeded successfully!');
      process.exit(0);
    } catch (error) {
      console.error('Error seeding database:', error);
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }); 