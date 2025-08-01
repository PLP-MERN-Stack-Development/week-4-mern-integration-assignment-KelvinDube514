import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext.jsx';
import { AppProvider } from './context/AppContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Page imports
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import StyleSuggestions from './pages/StyleSuggestions';
import Collections from './pages/Collections';
import NotFound from './pages/NotFound';
import SocialFeed from './pages/SocialFeed';
import SocialPostDetails from './pages/SocialPostDetails';
import PostSubmissionForm from './pages/PostSubmissionForm';

import Auth from './pages/Auth.jsx';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Layout>
          <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetails />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/suggestions" element={<StyleSuggestions />} />
          <Route path="/social" element={<SocialFeed />} />
          <Route path="/social/:id" element={<SocialPostDetails />} />
          <Route path="/submit" element={<PostSubmissionForm />} />

          
          {/* Authentication routes */}
          <Route path="/auth" element={<Auth />} />
          
          {/* Protected routes */}
          <Route path="/create" element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          } />
          <Route path="/edit/:id" element={
            <ProtectedRoute>
              <EditPost />
            </ProtectedRoute>
          } />
          
          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
        </AppProvider>
    </AuthProvider>
  );
}

export default App;
