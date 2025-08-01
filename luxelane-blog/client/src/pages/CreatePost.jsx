import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Particles from '../components/Particles';
import ImageUpload from '../components/ImageUpload';
import { useFormValidation, validatePostData } from '../utils/validation';
import { LoadingButton, LoadingOverlay, ErrorState } from '../components/LoadingStates';

function CreatePost() {
  const navigate = useNavigate();
  const { createPost, categories, fetchCategories, loading, error } = useAppContext();
  
  const {
    formData,
    errors: validationErrors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    resetForm
  } = useFormValidation({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    featuredImage: '',
    tags: '',
    status: 'draft'
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use enhanced validation
    const validation = validatePostData(formData);
    if (!validation.isValid) {
      return;
    }

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };
      
      const newPost = await createPost(postData);
      navigate(`/blog/${newPost._id}`);
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ff9ff3', '#54a0ff', '#5f27cd']}
          particleCount={90}
          particleSpread={17}
          speed={0.06}
          particleBaseSize={85}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-6">✍️ Create a New Post</h1>
            <p className="text-white/80 text-lg mb-8">Share your fashion story with the LuxeLane community.</p>
            
            {error && (
              <ErrorState 
                error={error} 
                title="Failed to create post"
                className="mb-6"
              />
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-white font-semibold mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('title')}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    validationErrors.title ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Enter your post title..."
                />
                {validationErrors.title && touched.title && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.title}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-white font-semibold mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('category')}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    validationErrors.category ? 'border-red-500' : 'border-white/20'
                  } text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {validationErrors.category && touched.category && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.category}</p>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-white font-semibold mb-2">
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('excerpt')}
                  rows="3"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    validationErrors.excerpt ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
                  placeholder="Write a brief summary of your post..."
                />
                {validationErrors.excerpt && touched.excerpt && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.excerpt}</p>
                )}
              </div>

              {/* Featured Image Upload */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Featured Image
                </label>
                <ImageUpload
                  currentImage={formData.featuredImage}
                  onImageUpload={(imageUrl) => {
                    handleChange('featuredImage', imageUrl);
                  }}
                  className="bg-white/5 rounded-lg p-4"
                />
                {validationErrors.featuredImage && touched.featuredImage && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.featuredImage}</p>
                )}
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-white font-semibold mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('tags')}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    validationErrors.tags ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="fashion, style, trends (comma separated)"
                />
                {validationErrors.tags && touched.tags && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.tags}</p>
                )}
              </div>

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-white font-semibold mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-white font-semibold mb-2">
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('content')}
                  rows="12"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    validationErrors.content ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
                  placeholder="Write your post content here..."
                />
                {validationErrors.content && touched.content && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.content}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <LoadingButton
                  type="submit"
                  loading={loading}
                  loadingText="Creating..."
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Post
                </LoadingButton>
                <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Loading Overlay */}
      <LoadingOverlay isVisible={loading} message="Creating your post..." />
    </div>
  );
}

export default CreatePost;
  