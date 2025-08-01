import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitText from "../components/SplitText";
import Particles from "../components/Particles";
import BarbiecoreImage from "../assets/Barbiecore is Back.jpg";
import SwimwearImage from "../assets/2025 Swimwear Goes Sculptural.jpg";
import AthleisureImage from "../assets/Glam Athleisure 2.0.jpg";
import LuxeEditImage from "../assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg";
import SpringRefreshImage from "../assets/Spring Refresh What to Wear This Bloom Season.jpg";
import LayerGameImage from "../assets/Layer Game Strong Winter Luxe Looks.jpg";
import LinenLooksImage from "../assets/Cool & Breezy Best Linen Looks for Hot Days.jpg";
import BudgetChicImage from "../assets/Chic on a Budget How to Look Designer for Less.jpg";
import BeachEssentialsImage from "../assets/Beach Babe Essentials What to Wear to the Shore.jpg";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const collections = [
    {
      id: 1,
      name: "Aurora Glam",
      description: "Chic, dreamy and runway-ready looks that capture the essence of luxury fashion.",
      category: "luxury",
      items: 12,
      image: LuxeEditImage,
      featured: true,
      tags: ["Luxury", "Evening", "Red Carpet"]
    },
    {
      id: 2,
      name: "Minimal Muse",
      description: "Understated elegance with a luxe edge - less is more, but make it fashion.",
      category: "minimalist",
      items: 8,
      image: SpringRefreshImage,
      featured: true,
      tags: ["Minimalist", "Essentials", "Capsule"]
    },
    {
      id: 3,
      name: "Barbiecore Revival",
      description: "Pink power dominates with bold, unapologetic flair that demands attention.",
      category: "trendy",
      items: 15,
      image: BarbiecoreImage,
      featured: false,
      tags: ["Trendy", "Bold", "Pink"]
    },
    {
      id: 4,
      name: "Sculptural Swim",
      description: "Swimwear becomes art with bold cuts, metallic fabrics, and body-sculpting silhouettes.",
      category: "swimwear",
      items: 10,
      image: SwimwearImage,
      featured: false,
      tags: ["Swimwear", "Sculptural", "Metallic"]
    },
    {
      id: 5,
      name: "Glam Athleisure",
      description: "When your gym outfit slays harder than your night-out fit - fitness meets fashion.",
      category: "athleisure",
      items: 14,
      image: AthleisureImage,
      featured: false,
      tags: ["Athleisure", "Fitness", "Glam"]
    },
    {
      id: 6,
      name: "Winter Luxe",
      description: "Master the art of layering with sophisticated winter ensembles that combine warmth with style.",
      category: "winter",
      items: 11,
      image: LayerGameImage,
      featured: false,
      tags: ["Winter", "Layering", "Cozy"]
    },
    {
      id: 7,
      name: "Linen Dreams",
      description: "Cool & breezy linen looks for those scorching hot days when comfort meets chic.",
      category: "summer",
      items: 9,
      image: LinenLooksImage,
      featured: false,
      tags: ["Summer", "Linen", "Breezy"]
    },
    {
      id: 8,
      name: "Budget Chic",
      description: "How to look designer for less without compromising on style or sophistication.",
      category: "budget",
      items: 13,
      image: BudgetChicImage,
      featured: false,
      tags: ["Budget", "High-Low", "Smart Shopping"]
    },
    {
      id: 9,
      name: "Beach Babe",
      description: "Essential pieces every beach babe needs for maximum beachside glamour.",
      category: "beach",
      items: 7,
      image: BeachEssentialsImage,
      featured: false,
      tags: ["Beach", "Vacation", "Cover-ups"]
    }
  ];

  const categories = [
    { id: "all", name: "All Collections", count: collections.length },
    { id: "luxury", name: "Luxury", count: collections.filter(c => c.category === "luxury").length },
    { id: "minimalist", name: "Minimalist", count: collections.filter(c => c.category === "minimalist").length },
    { id: "trendy", name: "Trendy", count: collections.filter(c => c.category === "trendy").length },
    { id: "swimwear", name: "Swimwear", count: collections.filter(c => c.category === "swimwear").length },
    { id: "athleisure", name: "Athleisure", count: collections.filter(c => c.category === "athleisure").length },
    { id: "winter", name: "Winter", count: collections.filter(c => c.category === "winter").length },
    { id: "summer", name: "Summer", count: collections.filter(c => c.category === "summer").length },
    { id: "budget", name: "Budget", count: collections.filter(c => c.category === "budget").length },
    { id: "beach", name: "Beach", count: collections.filter(c => c.category === "beach").length }
  ];

  const filteredCollections = selectedCategory === "all" 
    ? collections 
    : collections.filter(collection => collection.category === selectedCategory);

  return (
    <div className="min-h-screen font-sans text-white p-8">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ff9ff3', '#54a0ff', '#5f27cd']}
          particleCount={200}
          particleSpread={8}
          speed={0.12}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      {/* Hero Section */}
      <section className="text-center mb-12">
        <SplitText
          text="✨ Collections"
          className="text-5xl font-serif mb-4 block"
          delay={80}
          duration={1}
          splitType="chars"
        />
        <SplitText
          text="Curated fashion collections that tell stories, inspire looks, and define moments. From runway to real life, discover your next style obsession."
          className="text-white/80 text-lg max-w-2xl mx-auto block"
          delay={100}
          duration={0.8}
          splitType="words"
        />
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-white/20 border border-white/40 text-white"
                  : "bg-white/10 border border-white/20 text-white/70 hover:bg-white/15 hover:text-white/90"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      {selectedCategory === "all" && (
        <section className="mb-16">
          <SplitText
            text="🌟 Featured Collections"
            className="text-3xl font-serif mb-8 text-center block"
            delay={60}
            duration={0.8}
            splitType="chars"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {collections.filter(c => c.featured).map((collection) => (
              <div
                key={collection.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-glow border border-white/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 mb-2">
                      {collection.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-serif mb-1">{collection.name}</h3>
                    <p className="text-white/90 text-sm">{collection.items} pieces</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/80 mb-4">{collection.description}</p>
                  <button 
                    onClick={() => navigate(`/collections/${collection.id}`)}
                    className="w-full bg-white/10 border border-white/20 px-6 py-2 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Collections Grid */}
      <section>
        <h2 className="text-3xl font-serif mb-8 text-center">
          {selectedCategory === "all" ? "All Collections" : `${categories.find(c => c.id === selectedCategory)?.name}`}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCollections.map((collection) => (
            <div
              key={collection.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-glow border border-white/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {collection.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex gap-1 mb-1">
                    {collection.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{collection.name}</h3>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">{collection.items} pieces</span>
                  <button 
                    onClick={() => navigate(`/collections/${collection.id}`)}
                    className="w-full bg-white/10 border border-white/20 px-4 py-1 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empty State */}
      {filteredCollections.length === 0 && (
        <section className="text-center py-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <h3 className="text-2xl font-serif mb-4">No Collections Found</h3>
            <p className="text-white/70 mb-6">
              We couldn't find any collections matching your current filter.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="w-full bg-white/10 border border-white/20 px-6 py-2 rounded-xl hover:bg-white/20 transition-colors"
            >
              View All Collections
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Collections; 