import Navbar from './Navbar';
import Footer from './Footer';
import DarkVeil from './DarkVeil';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* DarkVeil Background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <DarkVeil />
      </div>
      
      <Navbar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 min-h-[80vh] relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
