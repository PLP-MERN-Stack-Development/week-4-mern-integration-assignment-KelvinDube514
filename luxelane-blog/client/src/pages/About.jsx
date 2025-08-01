import React from "react";
import SplitText from "../components/SplitText";
import Particles from "../components/Particles";

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="min-h-screen font-sans text-white">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#96ceb4', '#feca57', '#ff9ff3']}
          particleCount={120}
          particleSpread={10}
          speed={0.06}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      {/* Hero Section */}
      <section className="h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/LuxeLane model.jpg"
            alt="LuxeLane Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl shadow-glow p-6 sm:p-8 md:p-10 text-center max-w-sm sm:max-w-lg md:max-w-2xl border border-white/20 relative z-10">
          <img
            src="/LuxeLane logo.png"
            alt="LuxeLane Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4"
          />
          <SplitText
            text="👠 Our Story"
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
          <p className="text-white/90 text-sm sm:text-base">
            LuxeLane was born to blend timeless fashion with a modern social edge — where trends meet elegance and every post becomes a style statement.
          </p>
        </div>
      </section>

      {/* Mission / Story Section */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-5xl mx-auto">
        <SplitText
          text="✨ Who We Are"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-glow text-white/90 leading-relaxed border border-white/20 text-sm sm:text-base">
            <p className="mb-3 sm:mb-4">
              At LuxeLane, we believe fashion is more than just clothing — it's a story, a movement, a mood. We're a community-driven platform where creators, influencers, and everyday fashion lovers can post, shop, and connect over shared style sensibilities.
            </p>
            <p>
              Whether you're curating your seasonal wardrobe, dropping your favorite glam look, or just browsing what others are wearing — LuxeLane gives you the runway.
            </p>
          </div>
          <div className="relative">
            <img
              src="/src/assets/@Isabella_Madrid.jpg"
              alt="Fashion Inspiration"
              className="rounded-xl sm:rounded-2xl shadow-glow w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl sm:rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Team / Models */}
      <section className="px-8 py-16">
        <SplitText
          text="💃 Meet the Faces"
          className="text-3xl font-serif mb-6"
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-glow hover:shadow-lg transition border border-white/20">
            <img
              src="/src/assets/Ava Morelle.jpg"
              alt="Ava Morelle"
              className="rounded-full w-32 h-32 mx-auto object-cover mb-4 border-4 border-white/30"
            />
            <SplitText
              text="Ava Morelle"
              className="text-xl font-serif"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 text-sm font-semibold">Creative Director</p>
            <p className="text-white/70 text-xs mt-1">The visionary behind LuxeLane's editorial aesthetic and visual storytelling.</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-glow hover:shadow-lg transition border border-white/20">
            <img
              src="/src/assets/Noah Mokoena.jpg"
              alt="Noah Mokoena"
              className="rounded-full w-32 h-32 mx-auto object-cover mb-4 border-4 border-white/30"
            />
            <SplitText
              text="Noah Mokoena"
              className="text-xl font-serif"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 text-sm font-semibold">Head of Partnerships & PR</p>
            <p className="text-white/70 text-xs mt-1">Connecting LuxeLane with fashion houses, influencers, and global brands.</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-glow hover:shadow-lg transition border border-white/20">
            <img
              src="/src/assets/Sofia Leclerc.jpg"
              alt="Sofia Leclerc"
              className="rounded-full w-32 h-32 mx-auto object-cover mb-4 border-4 border-white/30"
            />
            <SplitText
              text="Sofia Leclerc"
              className="text-xl font-serif"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 text-sm font-semibold">Lead Fashion Curator</p>
            <p className="text-white/70 text-xs mt-1">Handpicks every trending piece, from runway to real wear.</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-glow hover:shadow-lg transition border border-white/20">
            <img
              src="/src/assets/Zara Ndlovu.jpg"
              alt="Zara Ndlovu"
              className="rounded-full w-32 h-32 mx-auto object-cover mb-4 border-4 border-white/30"
            />
            <SplitText
              text="Zara Ndlovu"
              className="text-xl font-serif"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 text-sm font-semibold">Lead Front-End Developer</p>
            <p className="text-white/70 text-xs mt-1">Crafting the sleek LuxeLane experience with elegant code and pixel perfection.</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-glow hover:shadow-lg transition border border-white/20">
            <img
              src="/src/assets/Liam Cortez.jpg"
              alt="Liam Cortez"
              className="rounded-full w-32 h-32 mx-auto object-cover mb-4 border-4 border-white/30"
            />
            <SplitText
              text="Liam Cortez"
              className="text-xl font-serif"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 text-sm font-semibold">Content & Photography Lead</p>
            <p className="text-white/70 text-xs mt-1">Captures the essence of every style moment — behind the lens and in post.</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center shadow-glow hover:shadow-lg transition border border-white/20">
            <img
              src="/src/assets/Maya Blake.jpg"
              alt="Maya Blake"
              className="rounded-full w-32 h-32 mx-auto object-cover mb-4 border-4 border-white/30"
            />
            <SplitText
              text="Maya Blake"
              className="text-xl font-serif"
              delay={20}
              duration={0.3}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-white/80 text-sm font-semibold">Senior Fashion Editor</p>
            <p className="text-white/70 text-xs mt-1">Transforms trends into stories with a voice that's both chic and relatable.</p>
          </div>
        </div>
      </section>

      {/* Fashion Gallery Section */}
      <section className="px-8 py-16">
        <SplitText
          text="📸 Style Gallery"
          className="text-3xl font-serif mb-6"
          delay={60}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-60px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/src/assets/@Carmen_Rio.jpg"
            alt="Fashion Style 1"
            className="rounded-xl w-full h-48 object-cover shadow-glow hover:scale-105 transition"
          />
          <img
            src="/src/assets/@Yuki_Tokyo.jpg"
            alt="Fashion Style 2"
            className="rounded-xl w-full h-48 object-cover shadow-glow hover:scale-105 transition"
          />
          <img
            src="/src/assets/@Bella_Boho.jpg"
            alt="Fashion Style 3"
            className="rounded-xl w-full h-48 object-cover shadow-glow hover:scale-105 transition"
          />
          <img
            src="/src/assets/@Quinn_Queen.jpg"
            alt="Fashion Style 4"
            className="rounded-xl w-full h-48 object-cover shadow-glow hover:scale-105 transition"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-20 text-center bg-white/10 backdrop-blur-sm rounded-t-[3rem] border-t border-white/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/src/assets/The Luxe Edit Top 10 Must-Have Pieces This Season.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10">
          <h3 className="text-4xl font-serif mb-4">Ready to Walk the Lane?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join a global network of stylists, bloggers, and fashion-forward thinkers. Shop. Post. Inspire.
          </p>
          <button className="w-full max-w-md bg-white/10 border border-white/20 px-6 py-3 rounded-xl hover:bg-white/20 transition">
            Join LuxeLane
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
  