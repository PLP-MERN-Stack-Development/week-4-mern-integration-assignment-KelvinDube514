import { createContext, useContext, useReducer, useEffect } from 'react';
import { usePosts, useCategories, useAuth } from '../hooks/useApi';

// Create context
const AppContext = createContext();

// Initial state
const initialState = {
  posts: [],
  categories: [],
  currentPost: null,
  user: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  }
};

// Action types
const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_POSTS: 'SET_POSTS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_CURRENT_POST: 'SET_CURRENT_POST',
  SET_USER: 'SET_USER',
  SET_PAGINATION: 'SET_PAGINATION',
  ADD_POST: 'ADD_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    
    case ACTIONS.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null
      };
    
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: null
      };
    
    case ACTIONS.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
        loading: false,
        error: null
      };
    
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    
    case ACTIONS.SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload
      };
    
    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    
    case ACTIONS.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => 
          post._id === action.payload._id ? action.payload : post
        ),
        currentPost: state.currentPost?._id === action.payload._id 
          ? action.payload 
          : state.currentPost
      };
    
    case ACTIONS.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        currentPost: state.currentPost?._id === action.payload 
          ? null 
          : state.currentPost
      };
    
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    
    default:
      return state;
  }
};

// Custom hook to use the context
function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

// Provider component
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const { 
    posts: apiPosts, 
    currentPost, 
    loading: postsLoading, 
    error: postsError, 
    fetchPosts, 
    fetchPost, 
    createPost: apiCreatePost, 
    updatePost: apiUpdatePost, 
    deletePost: apiDeletePost,
    pagination 
  } = usePosts();
  
  const { 
    categories: apiCategories, 
    loading: categoriesLoading, 
    error: categoriesError, 
    fetchCategories 
  } = useCategories();
  
  const { 
    user, 
    loading: authLoading, 
    error: authError, 
    login: apiLogin, 
    register: apiRegister, 
    logout: apiLogout 
  } = useAuth();

  // Update state when API data changes
  useEffect(() => {
    if (apiPosts) {
      dispatch({ type: ACTIONS.SET_POSTS, payload: apiPosts });
    }
  }, [apiPosts]);

  useEffect(() => {
    if (apiCategories) {
      dispatch({ type: ACTIONS.SET_CATEGORIES, payload: apiCategories });
    }
  }, [apiCategories]);

  useEffect(() => {
    if (currentPost) {
      dispatch({ type: ACTIONS.SET_CURRENT_POST, payload: currentPost });
    }
  }, [currentPost]);

  useEffect(() => {
    if (user) {
      dispatch({ type: ACTIONS.SET_USER, payload: user });
    }
  }, [user]);

  useEffect(() => {
    if (pagination) {
      dispatch({ type: ACTIONS.SET_PAGINATION, payload: pagination });
    }
  }, [pagination]);

  // Wrapper functions for API calls
  const createPost = async (postData) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const newPost = await apiCreatePost(postData);
      dispatch({ type: ACTIONS.ADD_POST, payload: newPost });
      return newPost;
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const updatedPost = await apiUpdatePost(id, postData);
      dispatch({ type: ACTIONS.UPDATE_POST, payload: updatedPost });
      return updatedPost;
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const deletePost = async (id) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      await apiDeletePost(id);
      dispatch({ type: ACTIONS.DELETE_POST, payload: id });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const result = await apiLogin(credentials);
      return result;
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const result = await apiRegister(userData);
      return result;
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const logout = () => {
    apiLogout();
    dispatch({ type: ACTIONS.SET_USER, payload: null });
  };

  const clearError = () => {
    dispatch({ type: ACTIONS.CLEAR_ERROR });
  };

  const value = {
    // State
    posts: state.posts,
    categories: state.categories,
    currentPost: state.currentPost,
    user: state.user,
    loading: state.loading || postsLoading || categoriesLoading || authLoading,
    error: state.error || postsError || categoriesError || authError,
    pagination: state.pagination,
    
    // Actions
    fetchPosts,
    fetchPost,
    fetchCategories,
    createPost,
    updatePost,
    deletePost,
    login,
    register,
    logout,
    clearError,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, useAppContext }; 