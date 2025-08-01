import { useState, useCallback } from 'react';
import { postService, categoryService, authService } from '../services/api';

// Custom hook for API calls with loading and error states
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Generic API call wrapper with optimistic updates support
  const apiCall = useCallback(async (apiFunction, optimisticUpdate = null, ...args) => {
    setLoading(true);
    setError(null);
    
    // Apply optimistic update if provided
    if (optimisticUpdate) {
      optimisticUpdate.apply();
    }
    
    try {
      const result = await apiFunction(...args);
      return result;
    } catch (err) {
      // Revert optimistic update on error
      if (optimisticUpdate && optimisticUpdate.revert) {
        optimisticUpdate.revert();
      }
      
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Post-related API calls with optimistic updates
  const posts = {
    getAll: useCallback((page = 1, limit = 10, category = null) => 
      apiCall(postService.getAllPosts, null, page, limit, category), [apiCall]),
    
    getById: useCallback((id) => 
      apiCall(postService.getPost, null, id), [apiCall]),
    
    create: useCallback((postData, optimisticUpdate = null) => 
      apiCall(postService.createPost, optimisticUpdate, postData), [apiCall]),
    
    update: useCallback((id, postData, optimisticUpdate = null) => 
      apiCall(postService.updatePost, optimisticUpdate, id, postData), [apiCall]),
    
    delete: useCallback((id, optimisticUpdate = null) => 
      apiCall(postService.deletePost, optimisticUpdate, id), [apiCall]),
    
    addComment: useCallback((postId, commentData, optimisticUpdate = null) => 
      apiCall(postService.addComment, optimisticUpdate, postId, commentData), [apiCall]),
    
    search: useCallback((query) => 
      apiCall(postService.searchPosts, null, query), [apiCall]),
  };

  // Category-related API calls
  const categories = {
    getAll: useCallback(() => 
      apiCall(categoryService.getAllCategories), [apiCall]),
    
    create: useCallback((categoryData, optimisticUpdate = null) => 
      apiCall(categoryService.createCategory, optimisticUpdate, categoryData), [apiCall]),
  };

  // Auth-related API calls
  const auth = {
    register: useCallback((userData) => 
      apiCall(authService.register, null, userData), [apiCall]),
    
    login: useCallback((credentials) => 
      apiCall(authService.login, null, credentials), [apiCall]),
    
    logout: useCallback(() => {
      authService.logout();
    }, []),
    
    getCurrentUser: useCallback(() => {
      return authService.getCurrentUser();
    }, []),
  };

  // Clear error manually
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    clearError,
    posts,
    categories,
    auth,
  };
};

// Hook for managing posts state with optimistic updates
export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [optimisticUpdates, setOptimisticUpdates] = useState(new Map());

  const { loading, error, posts: postApi } = useApi();

  const fetchPosts = useCallback(async (page = 1, limit = 10, category = null) => {
    try {
      const result = await postApi.getAll(page, limit, category);
      setPosts(result.posts || result);
      if (result.pagination) {
        setPagination(result.pagination);
      }
      return result;
    } catch (err) {
      console.error('Error fetching posts:', err);
      throw err;
    }
  }, [postApi]);

  const fetchPost = useCallback(async (id) => {
    try {
      const result = await postApi.getById(id);
      setCurrentPost(result);
      return result;
    } catch (err) {
      console.error('Error fetching post:', err);
      throw err;
    }
  }, [postApi]);

  const createPost = useCallback(async (postData) => {
    // Create optimistic post
    const optimisticPost = {
      _id: `temp-${Date.now()}`,
      ...postData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isOptimistic: true
    };

    const optimisticUpdate = {
      apply: () => {
        setPosts(prev => [optimisticPost, ...prev]);
        setOptimisticUpdates(prev => new Map(prev.set(optimisticPost._id, optimisticPost)));
      },
      revert: () => {
        setPosts(prev => prev.filter(post => post._id !== optimisticPost._id));
        setOptimisticUpdates(prev => {
          const newMap = new Map(prev);
          newMap.delete(optimisticPost._id);
          return newMap;
        });
      }
    };

    try {
      const result = await postApi.create(postData, optimisticUpdate);
      
      // Replace optimistic post with real post
      setPosts(prev => prev.map(post => 
        post._id === optimisticPost._id ? result : post
      ));
      setOptimisticUpdates(prev => {
        const newMap = new Map(prev);
        newMap.delete(optimisticPost._id);
        return newMap;
      });
      
      return result;
    } catch (err) {
      console.error('Error creating post:', err);
      throw err;
    }
  }, [postApi]);

  const updatePost = useCallback(async (id, postData) => {
    // Store original post for rollback
    const originalPost = posts.find(post => post._id === id) || currentPost;
    
    const optimisticUpdate = {
      apply: () => {
        const updatedPost = { ...originalPost, ...postData, updatedAt: new Date().toISOString() };
        setPosts(prev => prev.map(post => 
          post._id === id ? updatedPost : post
        ));
        if (currentPost && currentPost._id === id) {
          setCurrentPost(updatedPost);
        }
      },
      revert: () => {
        if (originalPost) {
          setPosts(prev => prev.map(post => 
            post._id === id ? originalPost : post
          ));
          if (currentPost && currentPost._id === id) {
            setCurrentPost(originalPost);
          }
        }
      }
    };

    try {
      const result = await postApi.update(id, postData, optimisticUpdate);
      return result;
    } catch (err) {
      console.error('Error updating post:', err);
      throw err;
    }
  }, [postApi, posts, currentPost]);

  const deletePost = useCallback(async (id) => {
    // Store original posts for rollback
    const originalPosts = [...posts];
    const originalCurrentPost = currentPost;
    
    const optimisticUpdate = {
      apply: () => {
        setPosts(prev => prev.filter(post => post._id !== id));
        if (currentPost && currentPost._id === id) {
          setCurrentPost(null);
        }
      },
      revert: () => {
        setPosts(originalPosts);
        setCurrentPost(originalCurrentPost);
      }
    };

    try {
      await postApi.delete(id, optimisticUpdate);
    } catch (err) {
      console.error('Error deleting post:', err);
      throw err;
    }
  }, [postApi, posts, currentPost]);

  return {
    posts,
    currentPost,
    pagination,
    loading,
    error,
    optimisticUpdates,
    fetchPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost,
  };
};

// Hook for managing categories state
export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const { loading, error, categories: categoryApi } = useApi();

  const fetchCategories = useCallback(async () => {
    try {
      const result = await categoryApi.getAll();
      setCategories(result);
      return result;
    } catch (err) {
      console.error('Error fetching categories:', err);
      throw err;
    }
  }, [categoryApi]);

  const createCategory = useCallback(async (categoryData) => {
    // Create optimistic category
    const optimisticCategory = {
      _id: `temp-cat-${Date.now()}`,
      ...categoryData,
      createdAt: new Date().toISOString(),
      isOptimistic: true
    };

    const optimisticUpdate = {
      apply: () => {
        setCategories(prev => [...prev, optimisticCategory]);
      },
      revert: () => {
        setCategories(prev => prev.filter(cat => cat._id !== optimisticCategory._id));
      }
    };

    try {
      const result = await categoryApi.create(categoryData, optimisticUpdate);
      
      // Replace optimistic category with real category
      setCategories(prev => prev.map(cat => 
        cat._id === optimisticCategory._id ? result : cat
      ));
      
      return result;
    } catch (err) {
      console.error('Error creating category:', err);
      throw err;
    }
  }, [categoryApi]);

  return {
    categories,
    loading,
    error,
    fetchCategories,
    createCategory,
  };
};

// Hook for managing authentication state
export const useAuth = () => {
  const [user, setUser] = useState(authService.getCurrentUser());
  const { loading, error, auth: authApi } = useApi();

  const login = useCallback(async (credentials) => {
    try {
      const result = await authApi.login(credentials);
      setUser(result.user);
      return result;
    } catch (err) {
      console.error('Error logging in:', err);
      throw err;
    }
  }, [authApi]);

  const register = useCallback(async (userData) => {
    try {
      const result = await authApi.register(userData);
      setUser(result.user);
      return result;
    } catch (err) {
      console.error('Error registering:', err);
      throw err;
    }
  }, [authApi]);

  const logout = useCallback(() => {
    authApi.logout();
    setUser(null);
  }, [authApi]);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
}; 