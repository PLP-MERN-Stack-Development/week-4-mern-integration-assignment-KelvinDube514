import Particles from '../components/Particles';

function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Background Particles */}
        <div className="fixed inset-0 z-0">
          <Particles
            particleColors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
            particleCount={70}
            particleSpread={19}
            speed={0.04}
            particleBaseSize={95}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        
                <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h2>
          <p className="text-white/80 text-lg">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  export default NotFound;
  